<original_task>
Re-create the removed `codesearch` tool using the `mcp.grep.app` MCP server (instead of Exa), keep the existing `websearch` tool, and integrate the new `codesearch` throughout permissions, tool registry, CLI/TUI UI, tests, and documentation. The user later asked to fix a startup crash (`GET /provider` returning 400) and to provide a full handoff document of the work.
</original_task>

<work_completed>
1) Repository exploration and planning (from earlier session)
- Read `CONTRIBUTING.md`, confirmed guardrails: design review for UI/core changes, issue-first policy, conventional commit titles, avoid AI walls of text, run `./script/generate.ts` after schema changes.
- Used explorer subagent to locate relevant code: websearch tool, mcp-exa client, tool registry, permission schema, CLI/TUI rendering, tests, docs.
- Planned `OPENCODE_ENABLE_GREP` flag (alias for `OPENCODE_ENABLE_EXA`) and SDK/OpenAPI regeneration.

2) New codesearch implementation (grep.app MCP)
- Created `packages/opencode/src/tool/mcp-grep.ts` (75 lines):
  - Implements SSE JSON-RPC decoding using Effect, `Schema.decodeUnknownOption`, and `Option.getOrUndefined`
  - `SearchArgs` schema matches grep.app parameters: `query`, `matchCase`, `matchWholeWords`, `useRegexp`, `repo`, `path`, `language`
  - `McpGrep.call()` wraps JSON-RPC `tools/call` via HTTP POST to `https://mcp.grep.app/`, uses `HttpClientRequest.accept("application/json, text/event-stream")` for SSE
  - Has timeout support via `Effect.timeoutOrElse`

- Created `packages/opencode/src/tool/codesearch.ts` (64 lines):
  - `Parameters` schema with all grep.app search fields and descriptions
  - `CodeSearchTool` defined via `Tool.define("codesearch", ...)`
  - `execute()` requests permission `"codesearch"` via `ctx.ask()` and calls `McpGrep.call(http, "searchGitHub", ...)`
  - Returns `output` with fallback message when no results
  - Uses `Effect.orDie` for error propagation

- Created `packages/opencode/src/tool/codesearch.txt` (21 lines):
  - Instructions for how to search (literal code patterns, not keywords)
  - Examples of good and bad queries
  - Regex guidance with `(?s)` prefix for multiline matching

3) Permissions, tool registry, feature flag
- `packages/opencode/src/config/permission.ts:38` — Added `codesearch: Schema.optional(Action)` to `InputObject`
- `packages/opencode/src/tool/registry.ts:110` — Initializes `CodeSearchTool`, registered as `tool.code` in state (line 233)
- `packages/opencode/src/tool/registry.ts:293-295` — Gating: codesearch enabled for `ProviderID.opencode` or when `Flag.OPENCODE_ENABLE_GREP` is true
- `packages/core/src/flag/flag.ts:73-77` — Added `OPENCODE_ENABLE_GREP`:
  ```typescript
  OPENCODE_ENABLE_GREP:
    truthy("OPENCODE_ENABLE_GREP") ||
    truthy("OPENCODE_ENABLE_EXA") ||
    OPENCODE_EXPERIMENTAL ||
    truthy("OPENCODE_EXPERIMENTAL_EXA"),
  ```

4) CLI / TUI integration
- `packages/opencode/src/cli/cmd/agent.ts:32` — Added `"codesearch"` to `AVAILABLE_PERMISSIONS`
- `packages/opencode/src/cli/cmd/run.ts:24,156-161,432` — Imported `CodeSearchTool`, added `codesearch()` render function with `icon: "◈"` and title `Grep Code Search "${query}"`, routed tool part in render switch
- `packages/opencode/src/cli/cmd/tui/routes/session/index.tsx:1575-1576,1964-1973` — Added `<Match when="codesearch">` for TUI inline rendering with spinner, `CodeSearch` component with `Grep Code Search "..."` title
- `packages/opencode/src/cli/cmd/tui/routes/session/permission.tsx:354-360` — Added permission rendering for `"codesearch"` with `Grep Code Search "${query}"` title
- `packages/opencode/src/cli/cmd/tui/feature-plugins/system/session-v2.tsx:429-430,763-766` — Updated CodeSearch UI text to `Grep Code Search`

5) Tests and generated files
- `packages/opencode/test/tool/parameters.test.ts:27,53,237-239` — Added CodeSearch imports and test cases
- Updated snapshot: `packages/opencode/test/tool/__snapshots__/parameters.test.ts.snap`
- Ran `bun test -u test/tool/parameters.test.ts` (snapshots updated, all tests pass)

6) Docs updates (from earlier session)
- Bulk-updated files under `packages/web/src/content/docs/**/cli.mdx` and `tools.mdx` to include `OPENCODE_ENABLE_GREP` and mention codesearch
- Updated `permissions.mdx` to include `codesearch` permission

7) Crash investigation and attempted fixes for `GET /provider?directory=...` → 400
- Attempted fix #1 (previous developer): Added `url: Schema.Struct({directory, workspace})` to provider endpoints — FAILED (wrong property name; `url` does not exist in HttpApiEndpoint options; should be `query`)
- Attempted fix #2: Changed `url:` → `query:` on all 4 provider endpoints — STILL FAILED (the query schema introduced endpoint-level validation that Effect's runtime rejected, even with optional fields)
- Attempted fix #3 (me): Added `Effect.catchCause` wrapping the provider list handler (`handlers/provider.ts:39-48`) — FAILED (the `catchCause` wrapper was already present in HEAD and unchanged; adding it was a no-op)
- Attempted fix #4 (me): Removed `query: Schema.Struct({...})` from ALL 4 provider endpoints, reverting to HEAD's no-query-schema state — STILL FAILED (user confirmed `bun dev` still crashes with same 400 error even WITHOUT `OPENCODE_ENABLE_GREP=1`)

8) Investigated root cause (current state)
- Used 3 parallel explorer agents to investigate:
  - Explorer A (startup): Found middleware ordering issue (`InstanceContextMiddleware` before `WorkspaceRoutingMiddleware`, but requires context provided by `WorkspaceRoutingMiddleware`). This is the SAME order as HEAD, so unlikely to be the new cause.
  - Explorer B (RPC/transport): Found the provider.list() call originates from `packages/opencode/src/cli/cmd/tui/context/sync.tsx:387`:
    ```typescript
    const providerListPromise = sdk.client.provider.list({ workspace }, { throwOnError: true })
    ```
    The error message `"(empty response body)"` is created by `packages/sdk/js/src/v2/client.ts:98-104` error interceptor when HTTP status is 400 and response body is empty/`{}`. The RPC fetch in `worker.ts:50-69` has NO error handling — if `Server.Default().app.fetch()` throws, errors propagate to the TUI.
  - Explorer C (permission schema): Confirmed the `codesearch` permission addition is correct and properly propagated to OpenAPI/SDK types. The `/provider` endpoint does NOT use the Permission schema in its request/response, so it should NOT be directly affected.

9) Current investigation status
- ALL attempted fixes for the 400 error have FAILED
- The error persists even WITHOUT `OPENCODE_ENABLE_GREP=1` flag
- The error persists after removing the query schema from provider endpoints
- The error is NOT caused by: query schema validation, handler errors (catchCause present), middleware, permission schema, or the codesearch flag
- REMAINING POSSIBILITIES: Effect runtime initialization failure during lazy app creation, instance bootstrap failure, config file validation issue, dependency/version mismatch from bun.lock change, or some other subtle server-side defect
</work_completed>

<work_remaining>
1) Fix the `GET /provider` 400 crash
- Root cause is still unknown but NOT in the codesearch changes
- Current working theory: Effect runtime initialization fails during lazy app creation when `Server.Default().app` is first called (via `worker.ts:62`). The initialized HttpApi router might fail to build its layer due to a missing service dependency or Effect version issue.
- DIAGNOSTIC STEPS (recommended order):
  a) Run `bun dev` on a clean HEAD checkout (stash all changes, run `bun dev`) to confirm whether the 400 also occurs on clean dev. If yes → the issue is pre-existing and likely an Effect version/dependency issue. If no → one of our changes introduced the 400 (unlikely given we've ruled out all our changes so far).
  b) Add logging to `worker.ts:62` to capture the actual HTTP status and response body from `Server.Default().app.fetch(request)` before the error interceptor processes it.
  c) Add logging to `sync.tsx:387` to capture the parameter values passed to `provider.list()`.
  d) Check if the `bun.lock` modification introduced dependency changes that affect Effect or its sub-dependencies. Run `git diff bun.lock` to see what changed.
  e) Try running with the Hono backend explicitly: `OPENCODE_EXPERIMENTAL_HTTPAPI=false bun dev` to bypass the Effect HttpApi entirely.

2) Finalize codesearch feature
- Once the 400 crash is fixed:
  a) Clean up: Remove any remaining temporary files (`test-provider.js`, `server.log`, `curl.log` if they exist)
  b) Run full test suite: `cd packages/opencode && bun run typecheck && bun test test/tool/parameters.test.ts test/server/httpapi-sdk.test.ts`
  c) Regenerate SDK one final time: `./script/generate.ts`
  d) Commit changes following conventional commit format

3) Verification
- Run `OPENCODE_ENABLE_GREP=1 bun dev` and confirm it launches without error
- Run `bun dev` (without flag) and confirm it also launches without error
- Test codesearch functionality in the TUI
</work_remaining>

<attempted_approaches>
1) **Previous fix: `url:` schema addition** — Added `url: Schema.Struct({directory, workspace})` to all 4 provider endpoints. Failed because `url` is not a valid property of `HttpApiEndpoint` options. The valid property is `query`.

2) **Fix: `query:` schema addition** — Changed `url:` → `query:` on all 4 endpoints. Still failed. The query schema introduced endpoint-level validation. Even though the fields were `Schema.optional(Schema.String)`, the Effect runtime validation rejected the request. Root cause: Effect's `Schema.Struct` by default uses `onExcessProperty` but the parsed query string might contain internal params or the URL-encoded directory path might not be properly decoded before validation.

3) **Fix: `Effect.catchCause` on handler** — Wrapped the `list` handler with `Effect.catchCause` to catch defects from ModelsDev. UNKNOWN TO ME AT THE TIME: this wrapper was ALREADY PRESENT in HEAD (committed) code — the handler already had `catchCause`. This was a no-op change.

4) **Fix: Remove `query:` schema** — Reverted all 4 endpoints to HEAD's no-query-schema state. The user confirmed `bun dev` STILL crashes with the same 400 error. This conclusively proves the query schema was NOT the cause of the 400.

5) **Diagnostic: Explorer investigations** — Three parallel explorer agents investigated:
- Server startup: Found middleware ordering issue (InstanceContextMiddleware before WorkspaceRoutingMiddleware) but confirmed same order exists in HEAD.
- RPC/transport: Found provider.list() call originates from sync.tsx:387. Error shown to user is from client.ts:98-104 error interceptor.
- Permission schema: Confirmed our change is safe and doesn't affect provider endpoint.

KEY INSIGHT: The error still occurs WITHOUT `OPENCODE_ENABLE_GREP=1`, confirming the crash is NOT caused by any of our codesearch changes. The issue is either:
- Pre-existing in the dev branch (we're 4 commits behind)
- Caused by the `bun.lock` modification (dependencies changed)
- A timing/race condition during startup
- An environmental issue specific to the user's setup

NEW FILES CREATED:
- `packages/opencode/src/tool/mcp-grep.ts`
- `packages/opencode/src/tool/codesearch.ts`
- `packages/opencode/src/tool/codesearch.txt`

FILES MODIFIED:
- `packages/core/src/flag/flag.ts` — Added OPENCODE_ENABLE_GREP
- `packages/opencode/src/config/permission.ts` — Added codesearch to schema
- `packages/opencode/src/tool/registry.ts` — Registered CodeSearchTool
- `packages/opencode/src/cli/cmd/agent.ts` — Added codesearch to AVAILABLE_PERMISSIONS
- `packages/opencode/src/cli/cmd/run.ts` — Added codesearch render function
- `packages/opencode/src/cli/cmd/tui/routes/session/index.tsx` — Added TUI rendering
- `packages/opencode/src/cli/cmd/tui/routes/session/permission.tsx` — Added permission rendering
- `packages/opencode/src/cli/cmd/tui/feature-plugins/system/session-v2.tsx` — Updated UI text
- `packages/opencode/test/tool/parameters.test.ts` — Added tests
- `packages/opencode/test/tool/__snapshots__/parameters.test.ts.snap` — Updated snapshots
- `packages/sdk/openapi.json` — Regenerated
- `packages/sdk/js/src/v2/gen/types.gen.ts` — Regenerated
- `packages/sdk/js/src/v2/gen/client/client.gen.ts` — Regenerated (by previous developer)
</attempted_approaches>

<critical_context>
- `bun dev` runs `bun run --cwd packages/opencode --conditions=browser src/index.ts`. This starts the TUI, which creates a worker process, which hosts the HTTP server. Communication between TUI and server happens via RPC (not real HTTP), using the custom fetch interceptor in `thread.ts` and the `rpc.fetch` in `worker.ts`.

- The `opencode.internal` URL is a PLACEHOLDER — it's never DNS-resolved. It's intercepted by a custom `fetch` implementation in `createWorkerFetch(client)` (thread.ts:30-48) that routes HTTP requests through RPC to the worker process.

- `OPENCODE_EXPERIMENTAL_HTTPAPI` defaults to ON for `dev`/`beta`/`local` installation channels (flag.ts:16, 99-101). Since this is a dev setup, `bun dev` uses the effect-httpapi server backend.

- The Effect version is `4.0.0-beta.59` (confirmed in bun.lock).

- The `provider.list()` call that triggers the 400 comes from `packages/opencode/src/cli/cmd/tui/context/sync.tsx:387`:
  ```typescript
  const providerListPromise = sdk.client.provider.list({ workspace }, { throwOnError: true })
  ```

- The error message format comes from `packages/sdk/js/src/v2/client.ts:98-104` error interceptor. When HTTP 400 has empty body, it produces:
  `"opencode server GET http://opencode.internal/provider?directory=... → 400: (empty response body)"`

- The actual HTTP request flows: TUI SDK → custom fetch → RPC → worker.ts:62 (`Server.Default().app.fetch(request)`) → server app.

- The original HEAD code (`git show HEAD:packages/opencode/src/server/routes/instance/httpapi/handlers/provider.ts`) already has `Effect.catchCause` wrapping the `list` handler. My "fix" to add it was a no-op.

- The original HEAD `groups/provider.ts` had NO `query:` schema on any provider endpoint. The request validation was entirely handled by the middleware chain.

- We're 4 commits behind `origin/dev`: `25547e933` (chore: generate), `12f3d1f50` (fix workspace), `8e182c778` (fix editor state), `8a797ed9a` (fix agent path).

- The `bun.lock` file is modified (shown in `git status`). This could indicate dependency changes from running `bun install` that might affect Effect or its sub-dependencies.

- ALL changes are currently staged (not committed). The 400 error persists even when running `bun dev` without any env flags.

- Run tests from `packages/opencode` directory, NOT from repo root.

- Avoid running `bun dev serve` — it's a long-running server process.
</critical_context>

<current_state>
- All codesearch implementation files are created (`mcp-grep.ts`, `codesearch.ts`, `codesearch.txt`)
- All integration points are modified (permissions, registry, CLI, TUI, tests, docs, SDK)
- SDK has been regenerated
- Typecheck passes
- Tests pass (68/68, including parameters test with snapshots)
- The `GET /provider` 400 crash is STILL UNRESOLVED — all attempted fixes have failed
- The crash occurs even WITHOUT `OPENCODE_ENABLE_GREP=1`, confirming it's not caused by our feature flag
- The crash occurs even after removing the `query:` schema from all provider endpoints
- User confirmed `bun dev` crashes with the same error regardless of our changes
- ALL changes are staged and uncommitted
- Temporary files (`test-provider.js`, `server.log`, `curl.log`) should be removed before committing
- The root cause of the 400 error is still unknown — needs further investigation
- NEXT ACTION: Someone should first determine if `bun dev` works on a clean HEAD checkout (stash all changes, run `bun dev`). If it works on clean HEAD, the issue is in one of our changes (need to bisect). If it ALSO fails on clean HEAD, the issue is pre-existing (likely an environment/dependency issue).
</current_state>
