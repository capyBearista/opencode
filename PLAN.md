# PLAN: Fix `GET /provider` 400 Crash & Complete CodeSearch Tool

## High-Level Goal

We are implementing a new `codesearch` agent tool using the `mcp.grep.app` MCP server (instead of Exa). The tool is mostly built (new files created, integration points wired, SDK regenerated, typecheck passes, tests pass). **However**, `bun dev` crashes on startup with a `GET /provider → 400: (empty response body)` error that blocks completion and testing.

This error is **NOT** caused by any codesearch changes — it is a pre-existing latent bug triggered by an upstream models.dev data change (48 commits ahead on `origin/dev`), combined with a cost-stripping side-effect in the `opencode-gemini-auth` plugin.

---

## Architecture Context (CRITICAL: Read Before Editing)

- `bun dev` runs `bun run --cwd packages/opencode --conditions=browser src/index.ts`
- The TUI creates a worker process that hosts an HTTP server. TUI ↔ server communication uses RPC (not real HTTP DNS resolution).
- `opencode.internal` is a placeholder URL intercepted by a custom `fetch` in `createWorkerFetch(client)` (`thread.ts:30-48`) that routes requests through RPC to the worker process.
- `OPENCODE_EXPERIMENTAL_HTTPAPI` defaults to ON for dev/beta/local channels. The server backend uses **Effect HttpApi** (not legacy Hono).
- Provider list uses `Effect HttpApi` which validates response bodies against declared response schemas AFTER the handler returns. Standard `catchCause` wrappers in handlers CANNOT intercept response schema validation failures.
- **Run tests from `packages/opencode` directory, never from repo root.**
- **Default branch is `dev`.**

---

## Root Cause: `GET /provider → 400: Missing key "cost.cache"`

### The Error

```
HttpApiSchemaError: Body {
  [cause]: SchemaError: Missing key
    at ["all"][98]["models"]["gemini-3.1-flash-lite-preview"]["cost"]["cache"]
}
```

Effect's HttpApi middleware encodes the handler's response through the `Provider.ListResult` schema at `packages/opencode/src/provider/provider.ts:925-929`. The schema requires every model's `cost` to have a non-optional `cache` sub-object:

```typescript
// provider.ts:872-883
const ProviderCost = Schema.Struct({
  input: Schema.Finite,
  output: Schema.Finite,
  cache: ProviderCacheCost,  // ← REQUIRED, non-optional
  experimentalOver200K: optionalOmitUndefined(
    Schema.Struct({
      input: Schema.Finite,
      output: Schema.Finite,
      cache: ProviderCacheCost,  // ← also required
    }),
  ),
})
```

### The Data Flow

1. **Handler's `listImpl`** (`handlers/provider.ts:18-56`) fetches provider data from two sources:
   ```typescript
   const all = yield* ModelsDev.Service.use((s) => s.get())  // raw models.dev data
   const connected = yield* provider.list()                    // Provider.Service state
   const providers = Object.assign(
     mapValues(filtered, (item) => Provider.fromModelsDevProvider(item)),  // converted
     connected,  // ← OVERRIDES converted for same keys
   )
   ```
   
   `Object.assign` merges `connected` on top of `converted`. For providers in both, `connected` wins.

2. **Raw models.dev data** (`https://models.dev/api.json`) contains the `gemini-3.1-flash-lite-preview` model under the `google` provider with proper cost:
   ```json
   "cost": {"input": 0.25, "output": 1.5, "cache_read": 0.025, "cache_write": 1}
   ```
   
   The `fromModelsDevProvider()` → `fromModelsDevModel()` → `cost()` conversion chain (at `provider.ts:965-985`) correctly normalizes this to:
   ```json
   {"input": 0.25, "output": 1.5, "cache": {"read": 0.025, "write": 1}}
   ```

3. **Provider.Service state** (`provider.ts:1077-1768`) also builds its data from `modelsDevSvc.get()` and `fromModelsDevProvider()`, producing the same normalized result initially.

### The Actual Culprit: `opencode-gemini-auth` Plugin

During Provider.Service state initialization at line 1304-1322, the plugin auth loader is invoked:

```typescript
// provider.ts:1304-1322
for (const plugin of plugins) {
  if (!plugin.auth) continue
  const providerID = ProviderID.make(plugin.auth.provider)
  ...
  const result = yield* fn(data)     // ← calls plugin.auth.loader(data)
  ...
}
```

The `opencode-gemini-auth` plugin (`docs/internal/opencode/opencode-gemini-auth/src/plugin.ts:84-93`) has an `auth.loader` for `GEMINI_PROVIDER_ID` (= `"google"`). Inside this loader, at line 92:

```typescript
normalizeProviderModelCosts(provider);
```

Which calls (lines 197-206):

```typescript
function normalizeProviderModelCosts(provider: Provider): void {
  if (!provider.models) return;
  for (const model of Object.values(provider.models)) {
    if (model) {
      model.cost = { input: 0, output: 0 };  // ← STRIPS cache!
    }
  }
}
```

**This mutates `database["google"].models[].cost` in-place**, replacing the properly normalized cost `{input: 0.25, output: 1.5, cache: {read: 0.025, write: 1}}` with `{input: 0, output: 0}` — no `cache` field.

Because `database["google"]` is the same object reference passed to the plugin loader, this mutation persists in the Provider.Service state. When `provider.list()` returns the state, Google's models have malformed costs. The `Object.assign` in the handler picks the corrupted `connected` version, and the Effect HttpApi response schema validation fails.

### Why the Handler's Direct Conversion is NOT Affected

The handler's `converted` (from `mapValues(filtered, (item) => Provider.fromModelsDevProvider(item))`) creates a FRESH conversion from the raw `all` data — which is a separate object unrelated to `database`. The `database` mutation does not affect this fresh conversion. But `Object.assign(converted, connected)` overwrites the good copy with the corrupted one.

### Timeline of Discovery

1. Initially suspected the 48 upstream commits or `bun.lock` changes caused the 400
2. Tried adding query schemas, removing them, adding `catchCause`, etc. — all failed
3. Merged `origin/dev` (48 commits) into the branch — 400 persisted
4. Discovered the SDK's `rewrite()` function moves `x-opencode-directory` to query params — but disabling it didn't fix anything
5. The actual error was invisible because the 400 response had an empty body. Created `test-provider.ts` (now deleted) that directly called the Effect HttpApi handler, bypassing RPC, and got the raw `HttpApiSchemaError` with full path
6. Added diagnostic logging to compare `converted` vs `connected` — confirmed `connected` has corrupted cost
7. Added diagnostic logging to Provider.Service state init — confirmed `database` has correct cost but `providers` has corrupted cost
8. Traced the plugin model loading path and then the **plugin auth loading** path as the mutation point
9. Inspected the `opencode-gemini-auth` plugin source → found `normalizeProviderModelCosts()` strips cache

---

## The Fix Plan

### Decision: The User Does NOT Want to Modify the Plugin

The `opencode-gemini-auth` plugin is an external dependency. The user prefers not to modify it. Instead, we fix defensively in the opencode core.

### Chosen Approach: Schema.transform on ProviderCost

**File:** `packages/opencode/src/provider/provider.ts`  
**Location:** Lines 872-883 (the `ProviderCost` schema definition)

Add decode-time defaults for the `cache` field so that missing `cache` during schema encoding/decoding is silently filled with `{ read: 0, write: 0 }`. The TypeScript type stays non-optional — no API contract change.

**Important:** You need to find the correct Effect v4 (`4.0.0-beta.59`) API for this. The codebase uses `Schema.optional(...)` with `{ default: () => ... }` for some fields, but those make the TypeScript type optional. We need the **reverse** — the type must remain non-optional, but absent values get a default.

Look at how the codebase patterns `optionalOmitUndefined` works at `packages/opencode/src/util/schema.ts:18-25`:
```typescript
export const optionalOmitUndefined = <S extends Schema.Top>(schema: S) =>
  Schema.optionalKey(schema).pipe(
    Schema.decodeTo(Schema.optional(schema), {
      decode: SchemaGetter.passthrough({ strict: false }),
      encode: SchemaGetter.transformOptional(Option.filter((value) => value !== undefined)),
    }),
    Schema.annotate({ [ZodOverride]: zod(schema).optional() }),
  )
```

But `optionalOmitUndefined` makes the field `optional` in the type. For `cache`, we want it **non-optional** in the type but with a **decode-time fallback**.

**Possible Effect v4 approaches to investigate:**
- `Schema.withConstructorDefault(schema, default)` — adds default for missing keys during construction
- `Schema.propertySignature(schema).pipe(Schema.withDefaults(...))` — property-level defaults
- A custom `Schema.transform` that maps `{ input, output }` → `{ input, output, cache: { read: 0, write: 0 } }`
- `Schema.Struct` with `{ default: ... }` option on the struct field (if Effect v4 supports this)

**Test this by running:**
```bash
bun run --cwd packages/opencode typecheck
bun test --cwd packages/opencode test/server/httpapi-sdk.test.ts
bun test --cwd packages/opencode test/tool/parameters.test.ts
timeout 15 bun dev   # must show NO 400 error
```

---

## Implementation Phases

### Phase 1: Remove All Debug Artifacts

These files were modified with `console.error("DIAG:")` logging during investigation. They must be restored to clean state.

| File                                          | What to remove                                                                                                              |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `packages/opencode/src/server/routes/instance/httpapi/handlers/provider.ts` | Lines 32-50: Remove the `// Debug: find index 98` block. Also lines 28-30: remove `const converted = mapValues(...)` and the `conGoogle`/`convGoogle` comparison block (lines 28-45). Restore to clean version. |
| `packages/opencode/src/provider/provider.ts`    | Lines after 1092: Remove the `STATE_INIT_DIAG` console.error block. Lines after 1369: Remove the `STATE_PROVIDERS_DIAG` console.error block. |
| `packages/opencode/diag-provider.ts`            | DELETE entire file                                                                                                          |
| `packages/opencode/diag-cost.ts`                | DELETE entire file                                                                                                          |

**The original version of the handler (before investigation) looked like this:**

```typescript
const listImpl = Effect.fn("ProviderHttpApi.listImpl")(function* () {
  const config = yield* cfg.get()
  const all = yield* ModelsDev.Service.use((s) => s.get())
  const disabled = new Set(config.disabled_providers ?? [])
  const enabled = config.enabled_providers ? new Set(config.enabled_providers) : undefined
  const filtered: Record<string, (typeof all)[string]> = {}
  for (const [key, value] of Object.entries(all)) {
    if ((enabled ? enabled.has(key) : true) && !disabled.has(key)) filtered[key] = value
  }
  const connected = yield* provider.list()
  const providers = Object.assign(
    mapValues(filtered, (item) => Provider.fromModelsDevProvider(item)),
    connected,
  )
  return {
    all: Object.values(providers),
    default: Provider.defaultModelIDs(providers),
    connected: Object.keys(connected),
  }
})
```

And for `provider.ts`, the lines:
```typescript
const modelsDev = yield* modelsDevSvc.get()
const database = mapValues(modelsDev, fromModelsDevProvider)
```
Should NOT be followed by any debug code.

And the line:
```typescript
for (const [id, provider] of Object.entries(providers)) {
  const providerID = ProviderID.make(id)
```
Should NOT have any debug code between the `for` and the `const providerID`.

### Phase 2: Fix Root Cause — Schema.transform on ProviderCost

**File to edit:** `packages/opencode/src/provider/provider.ts`, lines 872-883

The current code:
```typescript
const ProviderCost = Schema.Struct({
  input: Schema.Finite,
  output: Schema.Finite,
  cache: ProviderCacheCost,
  experimentalOver200K: optionalOmitUndefined(
    Schema.Struct({
      input: Schema.Finite,
      output: Schema.Finite,
      cache: ProviderCacheCost,
    }),
  ),
})
```

**Task:** Modify the `cache: ProviderCacheCost` line (and the nested `cache: ProviderCacheCost` in `experimentalOver200K`) to provide a default `{ read: 0, write: 0 }` when the key is absent during schema encoding/decoding.

The TypeScript type must remain: `cache: { readonly read: number; readonly write: number }` (non-optional).

The runtime behavior must be: if `cost` has `{ input: ..., output: ... }` but no `cache` key, the schema should inject `cache: { read: 0, write: 0 }`.

**Research task** (to be done by the agent executing this plan): Determine the exact Effect v4 API for this. Options include:
- `Schema.withConstructorDefault(ProviderCacheCost, () => ({ read: 0, write: 0 }))`
- `Schema.optional(ProviderCacheCost).pipe(Schema.withDefault(() => ({ read: 0, write: 0 })))`
- A `Schema.transform` wrapper

If Effect v4 doesn't have a clean API for "non-optional type with decode-time default", a fallback approach is to use `Schema.transform`:
```typescript
const ProviderCost = Schema.transform(
  // "loose" schema that accepts missing cache
  Schema.Struct({
    input: Schema.Finite,
    output: Schema.Finite,
    cache: Schema.optional(ProviderCacheCost),
    experimentalOver200K: optionalOmitUndefined(...),
  }),
  // "strict" schema that always has cache
  Schema.Struct({
    input: Schema.Finite,
    output: Schema.Finite,
    cache: ProviderCacheCost,
    experimentalOver200K: optionalOmitUndefined(...),
  }),
  {
    decode: (from) => ({ ...from, cache: from.cache ?? { read: 0, write: 0 } }),
    encode: (to) => to,
  }
)
```

But first check if there's a simpler API. The codebase uses `optionalOmitUndefined` at `packages/opencode/src/util/schema.ts` — see if there's an analogous utility for non-optional defaults.

### Phase 3: Verify

Run all checks from `packages/opencode` directory:

1. **Typecheck:** `bun run typecheck`
2. **SDK parity tests:** `bun test test/server/httpapi-sdk.test.ts`
3. **Parameter tests (includes codesearch):** `bun test test/tool/parameters.test.ts`
4. **Startup test:** `timeout 15 bun dev` — must show NO trace of `GET /provider → 400`

### Phase 4: Complete CodeSearch Feature

Once Phase 1-3 is verified:
1. Re-run SDK generation: `cd packages/sdk/js && bun run script/build.ts` (or `cd . && ./script/generate.ts` from repo root)
2. Run `OPENCODE_ENABLE_GREP=1 bun dev` and confirm codesearch functions in the TUI
3. Run `bun dev` without the flag and confirm no crash
4. Commit with conventional commit format

---

## Files Summary (Phase 1-3)

| File                                              | Action           | Phase |
| ------------------------------------------------- | ---------------- | ----- |
| `packages/opencode/src/server/routes/instance/httpapi/handlers/provider.ts` | Revert debug code | 1     |
| `packages/opencode/src/provider/provider.ts`        | Revert debug code + Add fix | 1+2 |
| `packages/opencode/diag-provider.ts`                | Delete           | 1     |
| `packages/opencode/diag-cost.ts`                    | Delete           | 1     |

**Total non-doc files touched: 2** (one revert + fix, one delete of 2 temp files)

---

## Pre-existing CodeSearch Implementations (Already Built)

The codesearch tool is staged on the `tool/grep_codesearch` branch. The following files were already created/modified in a previous session and should be preserved (they are already committed to the branch):

**New files created:**
- `packages/opencode/src/tool/mcp-grep.ts` — SSE JSON-RPC client for grep.app MCP server
- `packages/opencode/src/tool/codesearch.ts` — CodeSearchTool definition
- `packages/opencode/src/tool/codesearch.txt` — LLM instructions for the tool

**Files modified for codesearch:**
- `packages/core/src/flag/flag.ts` — Added `OPENCODE_ENABLE_GREP` flag
- `packages/opencode/src/config/permission.ts` — Added `codesearch` to permission schema
- `packages/opencode/src/tool/registry.ts` — Registered CodeSearchTool
- `packages/opencode/src/cli/cmd/agent.ts` — Added `codesearch` to AVAILABLE_PERMISSIONS
- `packages/opencode/src/cli/cmd/run.ts` — Added codesearch render function
- `packages/opencode/src/cli/cmd/tui/routes/session/index.tsx` — TUI rendering
- `packages/opencode/src/cli/cmd/tui/routes/session/permission.tsx` — Permission rendering
- `packages/opencode/src/cli/cmd/tui/feature-plugins/system/session-v2.tsx` — Session v2
- `packages/opencode/test/tool/parameters.test.ts` — Tests
- `packages/opencode/test/tool/__snapshots__/parameters.test.ts.snap` — Snapshots
- `packages/sdk/openapi.json` — Regenerated
- `packages/sdk/js/src/v2/gen/types.gen.ts` — Regenerated

---

## What Has Been Reverted / Cleaned

- `packages/opencode/src/cli/cmd/tui/worker.ts` — All debug logging (console.error, try/catch, hostname override, 400 detection) removed. Restored to clean HEAD state.
- `packages/sdk/js/src/v2/client.ts` — Original `rewrite()` function restored (it was NOT the cause of the 400).
- `bun.lock` — Ghostty-web hash format diff reverted.

---

## Git Convention

- This repo is 4 commits behind `origin/dev`. The most recent merge brought in 48 upstream commits.
- Follow conventional commit titles: `feat: add codesearch tool`, `fix: provider schema validation`, etc.
- Regenerate SDK after any schema changes: `./script/generate.ts`
- Commit messages should focus on the "why", not the "what"

---

## Key File Paths for Quick Reference

| Purpose                          | Path                                                                     |
| -------------------------------- | ------------------------------------------------------------------------ |
| ProviderCost schema (to fix)     | `packages/opencode/src/provider/provider.ts:872`                           |
| ListResult schema                | `packages/opencode/src/provider/provider.ts:925`                           |
| Handler's listImpl               | `packages/opencode/src/server/routes/instance/httpapi/handlers/provider.ts:18` |
| Models.dev service (fetch)       | `packages/opencode/src/provider/models.ts`                                 |
| optionalOmitUndefined utility    | `packages/opencode/src/util/schema.ts:18`                                   |
| Plugin auth loading path         | `packages/opencode/src/provider/provider.ts:1304`                           |
| Gemini plugin (external)         | `docs/internal/opencode/opencode-gemini-auth/src/plugin.ts:197`             |
| Worker (RPC fetch)               | `packages/opencode/src/cli/cmd/tui/worker.ts:51`                            |
| SDK client (rewrite function)    | `packages/sdk/js/src/v2/client.ts:16`                                       |
| Tool registry                    | `packages/opencode/src/tool/registry.ts`                                    |
| Permission schema                | `packages/opencode/src/config/permission.ts`                                |
| Feature flags                    | `packages/core/src/flag/flag.ts`                                            |
