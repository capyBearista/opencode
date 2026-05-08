# Opencode plugins code search (fork #2)

**Session ID:** ses_1fc003073ffe06ppxS8HmDPdSZ
**Created:** 5/7/2026, 3:52:37 PM
**Updated:** 5/7/2026, 3:53:37 PM

---

## User

use the codesearch tool to look for code related to opencode plugins

---

## Assistant (Build · MiniMax M2.5 Free · 18.8s)

_Thinking:_

The user wants me to search for code related to "opencode plugins" using the codesearch tool.

**Tool: codesearch**

**Input:**
```json
{
  "query": "opencode plugin",
  "language": "['typescript', 'javascript']"
}
```

**Error:**
```
The codesearch tool was called with invalid arguments: SchemaError(Expected array | undefined, got "['typescript', 'javascript']"
  at ["language"]).
Please rewrite the input so it satisfies the expected schema.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.4s)

_Thinking:_

The language parameter expects an array but the format was wrong. Let me fix it.

**Tool: codesearch**

**Input:**
```json
{
  "query": "opencode plugin",
  "language": [
    "typescript",
    "javascript"
  ]
}
```

**Output:**
```
No results found for your query.

IMPORTANT: This tool searches for literal code patterns that would appear in files, not keywords or natural language queries. For example:
- Instead of 'react hook state', search for 'useState('
- Instead of 'error handling', search 'catch ('
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.3s)

_Thinking:_

Let me try searching for specific plugin-related code patterns instead of the generic phrase.

**Tool: codesearch**

**Input:**
```json
{
  "query": "export.*plugin",
  "language": [
    "typescript",
    "javascript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.5s)

_Thinking:_

Let me try a more specific search related to opencode's plugin system, looking at the codebase directly since codesearch is limited to public repos.

**Tool: codesearch**

**Input:**
```json
{
  "query": "registerPlugin",
  "language": [
    "typescript",
    "javascript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.8s)

_Thinking:_

Let me try a broader query.

**Tool: codesearch**

**Input:**
```json
{
  "query": "Plugin",
  "language": [
    "typescript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.7s)

_Thinking:_

Let me try searching for different plugin patterns.

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"plugin\"",
  "language": [
    "typescript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.4s)

_Thinking:_

The codesearch tool doesn't seem to be finding opencode plugin related code from public repos. Let me search in the local codebase instead using grep.

The codesearch tool didn't find results in public repos. Let me search in the local codebase:


**Tool: grep**

**Input:**
```json
{
  "pattern": "plugin",
  "path": "/home/arjun/opencode-plugins/docs/internal/opencode",
  "include": "*.ts"
}
```

**Output:**
```
Found 1097 matches (showing first 100)
/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/user-agent.ts:
  Line 13:  * Resolves plugin version for User-Agent:

  Line 15:  * 2) synced Gemini CLI version file (`src/plugin/gemini-cli-version.ts`)

  Line 17:  * 4) local package.json next to the plugin sources


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/types.ts:
  Line 3: import type { ToolDefinition } from "@opencode-ai/plugin"


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/quota.ts:
  Line 1: import { tool } from "@opencode-ai/plugin"


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/project/utils.ts:
  Line 18:     pluginType: CODE_ASSIST_METADATA.pluginType,


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/project/types.ts:
  Line 7:   pluginType: "GEMINI",


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin/oauth-authorize.ts:
  Line 12:  * Builds the OAuth authorize callback used by plugin auth methods.


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/plugin.ts:
  Line 3: import { createOAuthAuthorizeMethod } from "./plugin/oauth-authorize"

  Line 4: import { accessTokenExpired, isOAuthAuth } from "./plugin/auth"

  Line 5: import { resolveCachedAuth } from "./plugin/cache"

  Line 6: import { ensureProjectContext, retrieveUserQuota } from "./plugin/project"

  Line 7: import { createGeminiQuotaTool, GEMINI_QUOTA_TOOL_NAME } from "./plugin/quota"

  Line 8: import { isGeminiDebugEnabled, logGeminiDebugMessage, startGeminiDebugRequest } from "./plugin/debug"

  Line 9: import { maybeShowGeminiCapacityToast, maybeShowGeminiTestToast } from "./plugin/notify"

  Line 14: } from "./plugin/provider"

  Line 21: } from "./plugin/request"

  Line 22: import { fetchWithRetry } from "./plugin/retry"

  Line 23: import { refreshAccessToken } from "./plugin/token"

  Line 32: } from "./plugin/types"


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/gemini/oauth.ts:
  Line 5: import { formatDebugBodyPreview, isGeminiDebugEnabled, logGeminiDebugMessage } from "../plugin/debug"


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/src/constants.ts:
  Line 31:  * Provider identifier shared between the plugin loader and credential store.


/home/arjun/opencode-plugins/docs/internal/opencode/opencode-gemini-auth/index.ts:
  Line 1: export { GeminiCLIOAuthPlugin, GoogleOAuthPlugin } from "./src/plugin"


/home/arjun/opencode-plugins/docs/internal/opencode/packages/sdk/js/src/v2/gen/types.gen.ts:
  Line 1127:   plugin?: Array<


/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/provider/provider.ts:
  Line 9: import { Plugin } from "../plugin"

  Line 1087:     const plugin = yield* Plugin.Service

  Line 1132:         // load plugins first so config() hook runs before reading cfg.provider

  Line 1133:         const plugins = yield* plugin.list()

  Line 1135:         // now read config providers - includes any modifications from plugin config() hook

  Line 1146:         for (const hook of plugins) {

  Line 1156:           const pluginAuth = yield* auth.get(providerID).pipe(Effect.orDie)

  Line 1159:             const next = await models(provider, { auth: pluginAuth })

  Line 1293:         // plugin auth loader - database now has entries for config providers

  Line 1294:         for (const plugin of plugins) {

  Line 1295:           if (!plugin.auth) continue

  Line 1296:           const providerID = ProviderID.make(plugin.auth.provider)

  Line 1301:           if (!plugin.auth.loader) continue

  Line 1304:             plugin.auth!.loader!(

  Line 1306:               database[plugin.auth!.provider],


/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/session/prompt.ts:
  Line 19: import { Plugin } from "../plugin"

  Line 102:     const plugin = yield* Plugin.Service

  Line 428:                 yield* plugin.trigger(

  Line 443:                 yield* plugin.trigger(

  Line 469:               yield* plugin.trigger(

  Line 487:               yield* plugin.trigger(

  Line 600:       yield* plugin.trigger(

  Line 679:       yield* plugin.trigger(

  Line 857:               const shellEnv = yield* plugin.trigger(

  Line 1266:       yield* plugin.trigger(

  Line 1566:             yield* plugin.trigger("experimental.chat.messages.transform", {}, { messages: msgs })

  Line 1737:       yield* plugin.trigger(


/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/test/config/config.test.ts:
  Line 32: import { ConfigPlugin } from "@/config/plugin"

  Line 1042: test("resolves scoped npm plugins in config", async () => {

  Line 1045:       const pluginDir = path.join(dir, "node_modules", "@scope", "plugin")

  Line 1046:       await fs.mkdir(pluginDir, { recursive: true })

  Line 1054:         path.join(pluginDir, "package.json"),

  Line 1057:             name: "@scope/plugin",

  Line 1067:       await Filesystem.write(path.join(pluginDir, "index.js"), "export default {}\n")

  Line 1071:         JSON.stringify({ $schema: "https://opencode.ai/config.json", plugin: ["@scope/plugin"] }, null, 2),

  Line 1080:       const pluginEntries = config.plugin ?? []

  Line 1081:       expect(pluginEntries).toContain("@scope/plugin")

  Line 1086: test("merges plugin arrays from global and local configs", async () => {

  Line 1094:       // Global config with plugins

  Line 1099:           plugin: ["global-plugin-1", "global-plugin-2"],

  Line 1103:       // Local .opencode config with different plugins

  Line 1108:           plugin: ["local-plugin-1"],

  Line 1118:       const plugins = config.plugin ?? []

  Line 1120:       // Should contain both global and local plugins

  Line 1121:       expect(plugins.some((p) => p.includes("global-plugin-1"))).toBe(true)

  Line 1122:       expect(plugins.some((p) => p.includes("global-plugin-2"))).toBe(true)

  Line 1123:       expect(plugins.some((p) => p.includes("local-plugin-1"))).toBe(true)

  Line 1125:       // Should have all 3 plugins (not replaced, but merged)

  Line 1126:       const pluginNames = plugins.filter((p) => p.includes("global-plugin") || p.includes("local-plugin"))

  Line 1127:       expect(pluginNames.length).toBeGreaterThanOrEqual(3)

  Line 1245: test("deduplicates duplicate plugins from global and local configs", async () => {

  Line 1253:       // Global config with plugins

  Line 1258:           plugin: ["duplicate-plugin", "global-plugin-1"],

  Line 1262:       // Local .opencode config with some overlapping plugins

  Line 1267:           plugin: ["duplicate-plugin", "local-plugin-1"],

  Line 1277:       const plugins = config.plugin ?? []

  Line 1279:       // Should contain all unique plugins

  Line 1280:       expect(plugins.some((p) => p.includes("global-plugin-1"))).toBe(true)

  Line 1281:       expect(plugins.some((p) => p.includes("local-plugin-1"))).toBe(true)

  Line 1282:       expect(plugins.some((p) => p.includes("duplicate-plugin"))).toBe(true)

  Line 1284:       // Should deduplicate the duplicate plugin

  Line 1285:       const duplicatePlugins = plugins.filter((p) => p.includes("duplicate-plugin"))

  Line 1288:       // Should have exactly 3 unique plugins

  Line 1289:       const pluginNames = plugins.filter(

  Line 1290:         (p) => p.includes("global-plugin") || p.includes("local-plugin") || p.includes("duplicate-plugin"),

  Line 1292:       expect(pluginNames.length).toBe(3)

  Line 1297: test("keeps plugin origins aligned with merged plugin list", async () => {

  Line 1308:           plugin: [["shared-plugin@1.0.0", { source: "global" }], "global-only@1.0.0"],

  Line 1316:           plugin: [["shared-plugin@2.0.0", { source: "local" }], "local-only@1.0.0"],

  Line 1326:       const plugins = cfg.plugin ?? []

  Line 1327:       const origins = cfg.plugin_origins ?? []

  Line 1328:       const names = plugins.map((item) => ConfigPlugin.pluginSpecifier(item))

  Line 1330:       expect(names).toContain("shared-plugin@2.0.0")

  Line 1331:       expect(names).not.toContain("shared-plugin@1.0.0")

  Line 1335:       expect(origins.map((item) => item.spec)).toEqual(plugins)

  Line 1336:       const hit = origins.find((item) => ConfigPlugin.pluginSpecifier(item.spec) === "shared-plugin@2.0.0")


(Results truncated: showing 100 of 1097 matches (997 hidden). Consider using a more specific path or pattern.)
```

---

## Assistant (Build · MiniMax M2.5 Free · 4.0s)

_Thinking:_

The grep found 1097 matches for "plugin" in the TypeScript files. Let me look at the main plugin source file to understand the plugin system better.

Found 1097 matches. Let me look at the core plugin source:


**Tool: read**

**Input:**
```json
{
  "filePath": "/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin"
}
```

**Output:**
```
<path>/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin</path>
<type>directory</type>
<entries>
azure.ts
cloudflare.ts
codex.ts
github-copilot/
index.ts
install.ts
loader.ts
meta.ts
shared.ts

(9 entries)
</entries>
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.0s)

_Thinking:_

Let me look at the main plugin index.ts to understand the plugin system.

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/index.ts"
}
```

**Output:**
```
<path>/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/index.ts</path>
<type>file</type>
<content>
1: import type {
2:   Hooks,
3:   PluginInput,
4:   Plugin as PluginInstance,
5:   PluginModule,
6:   WorkspaceAdapter as PluginWorkspaceAdapter,
7: } from "@opencode-ai/plugin"
8: import { Config } from "@/config/config"
9: import { Bus } from "../bus"
10: import * as Log from "@opencode-ai/core/util/log"
11: import { createOpencodeClient } from "@opencode-ai/sdk"
12: import { Flag } from "@opencode-ai/core/flag/flag"
13: import { ServerAuth } from "@/server/auth"
14: import { CodexAuthPlugin } from "./codex"
15: import { Session } from "@/session/session"
16: import { NamedError } from "@opencode-ai/core/util/error"
17: import { CopilotAuthPlugin } from "./github-copilot/copilot"
18: import { gitlabAuthPlugin as GitlabAuthPlugin } from "opencode-gitlab-auth"
19: import { PoeAuthPlugin } from "opencode-poe-auth"
20: import { CloudflareAIGatewayAuthPlugin, CloudflareWorkersAuthPlugin } from "./cloudflare"
21: import { AzureAuthPlugin } from "./azure"
22: import { Effect, Layer, Context, Stream } from "effect"
23: import { EffectBridge } from "@/effect/bridge"
24: import { InstanceState } from "@/effect/instance-state"
25: import { errorMessage } from "@/util/error"
26: import { PluginLoader } from "./loader"
27: import { parsePluginSpecifier, readPluginId, readV1Plugin, resolvePluginId } from "./shared"
28: import { registerAdapter } from "@/control-plane/adapters"
29: import type { WorkspaceAdapter } from "@/control-plane/types"
30: 
31: const log = Log.create({ service: "plugin" })
32: 
33: type State = {
34:   hooks: Hooks[]
35: }
36: 
37: // Hook names that follow the (input, output) => Promise<void> trigger pattern
38: type TriggerName = {
39:   [K in keyof Hooks]-?: NonNullable<Hooks[K]> extends (input: any, output: any) => Promise<void> ? K : never
40: }[keyof Hooks]
41: 
42: export interface Interface {
43:   readonly trigger: <
44:     Name extends TriggerName,
45:     Input = Parameters<Required<Hooks>[Name]>[0],
46:     Output = Parameters<Required<Hooks>[Name]>[1],
47:   >(
48:     name: Name,
49:     input: Input,
50:     output: Output,
51:   ) => Effect.Effect<Output>
52:   readonly list: () => Effect.Effect<Hooks[]>
53:   readonly init: () => Effect.Effect<void>
54: }
55: 
56: export class Service extends Context.Service<Service, Interface>()("@opencode/Plugin") {}
57: 
58: // Built-in plugins that are directly imported (not installed from npm)
59: const INTERNAL_PLUGINS: PluginInstance[] = [
60:   CodexAuthPlugin,
61:   CopilotAuthPlugin,
62:   GitlabAuthPlugin,
63:   PoeAuthPlugin,
64:   CloudflareWorkersAuthPlugin,
65:   CloudflareAIGatewayAuthPlugin,
66:   AzureAuthPlugin,
67: ]
68: 
69: function isServerPlugin(value: unknown): value is PluginInstance {
70:   return typeof value === "function"
71: }
72: 
73: function getServerPlugin(value: unknown) {
74:   if (isServerPlugin(value)) return value
75:   if (!value || typeof value !== "object" || !("server" in value)) return
76:   if (!isServerPlugin(value.server)) return
77:   return value.server
78: }
79: 
80: function getLegacyPlugins(mod: Record<string, unknown>) {
81:   const seen = new Set<unknown>()
82:   const result: PluginInstance[] = []
83: 
84:   for (const entry of Object.values(mod)) {
85:     if (seen.has(entry)) continue
86:     seen.add(entry)
87:     const plugin = getServerPlugin(entry)
88:     if (!plugin) throw new TypeError("Plugin export is not a function")
89:     result.push(plugin)
90:   }
91: 
92:   return result
93: }
94: 
95: async function applyPlugin(load: PluginLoader.Loaded, input: PluginInput, hooks: Hooks[]) {
96:   const plugin = readV1Plugin(load.mod, load.spec, "server", "detect")
97:   if (plugin) {
98:     await resolvePluginId(load.source, load.spec, load.target, readPluginId(plugin.id, load.spec), load.pkg)
99:     hooks.push(await (plugin as PluginModule).server(input, load.options))
100:     return
101:   }
102: 
103:   for (const server of getLegacyPlugins(load.mod)) {
104:     hooks.push(await server(input, load.options))
105:   }
106: }
107: 
108: export const layer = Layer.effect(
109:   Service,
110:   Effect.gen(function* () {
111:     const bus = yield* Bus.Service
112:     const config = yield* Config.Service
113: 
114:     const state = yield* InstanceState.make<State>(
115:       Effect.fn("Plugin.state")(function* (ctx) {
116:         const hooks: Hooks[] = []
117:         const bridge = yield* EffectBridge.make()
118: 
119:         function publishPluginError(message: string) {
120:           bridge.fork(bus.publish(Session.Event.Error, { error: new NamedError.Unknown({ message }).toObject() }))
121:         }
122: 
123:         const { Server } = yield* Effect.promise(() => import("../server/server"))
124: 
125:         const client = createOpencodeClient({
126:           baseUrl: "http://localhost:4096",
127:           directory: ctx.directory,
128:           headers: ServerAuth.headers(),
129:           fetch: async (...args) => Server.Default().app.fetch(...args),
130:         })
131:         const cfg = yield* config.get()
132:         const input: PluginInput = {
133:           client,
134:           project: ctx.project,
135:           worktree: ctx.worktree,
136:           directory: ctx.directory,
137:           experimental_workspace: {
138:             register(type: string, adapter: PluginWorkspaceAdapter) {
139:               registerAdapter(ctx.project.id, type, adapter as WorkspaceAdapter)
140:             },
141:           },
142:           get serverUrl(): URL {
143:             return Server.url ?? new URL("http://localhost:4096")
144:           },
145:           // @ts-expect-error
146:           $: typeof Bun === "undefined" ? undefined : Bun.$,
147:         }
148: 
149:         for (const plugin of INTERNAL_PLUGINS) {
150:           log.info("loading internal plugin", { name: plugin.name })
151:           const init = yield* Effect.tryPromise({
152:             try: () => plugin(input),
153:             catch: (err) => {
154:               log.error("failed to load internal plugin", { name: plugin.name, error: err })
155:             },
156:           }).pipe(Effect.option)
157:           if (init._tag === "Some") hooks.push(init.value)
158:         }
159: 
160:         const plugins = Flag.OPENCODE_PURE ? [] : (cfg.plugin_origins ?? [])
161:         if (Flag.OPENCODE_PURE && cfg.plugin_origins?.length) {
162:           log.info("skipping external plugins in pure mode", { count: cfg.plugin_origins.length })
163:         }
164:         if (plugins.length) yield* config.waitForDependencies()
165: 
166:         const loaded = yield* Effect.promise(() =>
167:           PluginLoader.loadExternal({
168:             items: plugins,
169:             kind: "server",
170:             report: {
171:               start(candidate) {
172:                 log.info("loading plugin", { path: candidate.plan.spec })
173:               },
174:               missing(candidate, _retry, message) {
175:                 log.warn("plugin has no server entrypoint", { path: candidate.plan.spec, message })
176:               },
177:               error(candidate, _retry, stage, error, resolved) {
178:                 const spec = candidate.plan.spec
179:                 const cause = error instanceof Error ? (error.cause ?? error) : error
180:                 const message = stage === "load" ? errorMessage(error) : errorMessage(cause)
181: 
182:                 if (stage === "install") {
183:                   const parsed = parsePluginSpecifier(spec)
184:                   log.error("failed to install plugin", { pkg: parsed.pkg, version: parsed.version, error: message })
185:                   publishPluginError(`Failed to install plugin ${parsed.pkg}@${parsed.version}: ${message}`)
186:                   return
187:                 }
188: 
189:                 if (stage === "compatibility") {
190:                   log.warn("plugin incompatible", { path: spec, error: message })
191:                   publishPluginError(`Plugin ${spec} skipped: ${message}`)
192:                   return
193:                 }
194: 
195:                 if (stage === "entry") {
196:                   log.error("failed to resolve plugin server entry", { path: spec, error: message })
197:                   publishPluginError(`Failed to load plugin ${spec}: ${message}`)
198:                   return
199:                 }
200: 
201:                 log.error("failed to load plugin", { path: spec, target: resolved?.entry, error: message })
202:                 publishPluginError(`Failed to load plugin ${spec}: ${message}`)
203:               },
204:             },
205:           }),
206:         )
207:         for (const load of loaded) {
208:           if (!load) continue
209: 
210:           // Keep plugin execution sequential so hook registration and execution
211:           // order remains deterministic across plugin runs.
212:           yield* Effect.tryPromise({
213:             try: () => applyPlugin(load, input, hooks),
214:             catch: (err) => {
215:               const message = errorMessage(err)
216:               log.error("failed to load plugin", { path: load.spec, error: message })
217:               return message
218:             },
219:           }).pipe(
220:             Effect.catch(() => {
221:               // TODO: make proper events for this
222:               // bus.publish(Session.Event.Error, {
223:               //   error: new NamedError.Unknown({
224:               //     message: `Failed to load plugin ${load.spec}: ${message}`,
225:               //   }).toObject(),
226:               // })
227:               return Effect.void
228:             }),
229:           )
230:         }
231: 
232:         // Notify plugins of current config
233:         for (const hook of hooks) {
234:           yield* Effect.tryPromise({
235:             try: () => Promise.resolve((hook as any).config?.(cfg)),
236:             catch: (err) => {
237:               log.error("plugin config hook failed", { error: err })
238:             },
239:           }).pipe(Effect.ignore)
240:         }
241: 
242:         // Subscribe to bus events, fiber interrupted when scope closes
243:         yield* bus.subscribeAll().pipe(
244:           Stream.runForEach((input) =>
245:             Effect.sync(() => {
246:               for (const hook of hooks) {
247:                 void hook["event"]?.({ event: input as any })
248:               }
249:             }),
250:           ),
251:           Effect.forkScoped,
252:         )
253: 
254:         return { hooks }
255:       }),
256:     )
257: 
258:     const trigger = Effect.fn("Plugin.trigger")(function* <
259:       Name extends TriggerName,
260:       Input = Parameters<Required<Hooks>[Name]>[0],
261:       Output = Parameters<Required<Hooks>[Name]>[1],
262:     >(name: Name, input: Input, output: Output) {
263:       if (!name) return output
264:       const s = yield* InstanceState.get(state)
265:       for (const hook of s.hooks) {
266:         const fn = hook[name] as any
267:         if (!fn) continue
268:         yield* Effect.promise(async () => fn(input, output))
269:       }
270:       return output
271:     })
272: 
273:     const list = Effect.fn("Plugin.list")(function* () {
274:       const s = yield* InstanceState.get(state)
275:       return s.hooks
276:     })
277: 
278:     const init = Effect.fn("Plugin.init")(function* () {
279:       yield* InstanceState.get(state)
280:     })
281: 
282:     return Service.of({ trigger, list, init })
283:   }),
284: )
285: 
286: export const defaultLayer = layer.pipe(Layer.provide(Bus.layer), Layer.provide(Config.defaultLayer))
287: 
288: export * as Plugin from "."

(End of file - total 288 lines)
</content>
```

---

## Assistant (Build · MiniMax M2.5 Free · 4.3s)

_Thinking:_

I found the main plugin system. Let me also look at the loader.ts and shared.ts for more details.

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/loader.ts"
}
```

**Output:**
```
<path>/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/loader.ts</path>
<type>file</type>
<content>
1: import {
2:   checkPluginCompatibility,
3:   createPluginEntry,
4:   isDeprecatedPlugin,
5:   pluginSource,
6:   resolvePluginTarget,
7:   type PluginKind,
8:   type PluginPackage,
9:   type PluginSource,
10: } from "./shared"
11: import { ConfigPlugin } from "@/config/plugin"
12: import { InstallationVersion } from "@opencode-ai/core/installation/version"
13: 
14: export namespace PluginLoader {
15:   // A normalized plugin declaration derived from config before any filesystem or npm work happens.
16:   export type Plan = {
17:     spec: string
18:     options: ConfigPlugin.Options | undefined
19:     deprecated: boolean
20:   }
21: 
22:   // A plugin that has been resolved to a concrete target and entrypoint on disk.
23:   export type Resolved = Plan & {
24:     source: PluginSource
25:     target: string
26:     entry: string
27:     pkg?: PluginPackage
28:   }
29: 
30:   // A plugin target we could inspect, but which does not expose the requested kind of entrypoint.
31:   export type Missing = Plan & {
32:     source: PluginSource
33:     target: string
34:     pkg?: PluginPackage
35:     message: string
36:   }
37: 
38:   // A resolved plugin whose module has been imported successfully.
39:   export type Loaded = Resolved & {
40:     mod: Record<string, unknown>
41:   }
42: 
43:   type Candidate = { origin: ConfigPlugin.Origin; plan: Plan }
44:   type Report = {
45:     // Called before each attempt so callers can log initial load attempts and retries uniformly.
46:     start?: (candidate: Candidate, retry: boolean) => void
47:     // Called when the package exists but does not provide the requested entrypoint.
48:     missing?: (candidate: Candidate, retry: boolean, message: string, resolved: Missing) => void
49:     // Called for operational failures such as install, compatibility, or dynamic import errors.
50:     error?: (
51:       candidate: Candidate,
52:       retry: boolean,
53:       stage: "install" | "entry" | "compatibility" | "load",
54:       error: unknown,
55:       resolved?: Resolved,
56:     ) => void
57:   }
58: 
59:   // Normalize a config item into the loader's internal representation.
60:   function plan(item: ConfigPlugin.Spec): Plan {
61:     const spec = ConfigPlugin.pluginSpecifier(item)
62:     return { spec, options: ConfigPlugin.pluginOptions(item), deprecated: isDeprecatedPlugin(spec) }
63:   }
64: 
65:   // Resolve a configured plugin into a concrete entrypoint that can later be imported.
66:   //
67:   // The stages here intentionally separate install/target resolution, entrypoint detection,
68:   // and compatibility checks so callers can report the exact reason a plugin was skipped.
69:   export async function resolve(
70:     plan: Plan,
71:     kind: PluginKind,
72:   ): Promise<
73:     | { ok: true; value: Resolved }
74:     | { ok: false; stage: "missing"; value: Missing }
75:     | { ok: false; stage: "install" | "entry" | "compatibility"; error: unknown }
76:   > {
77:     // First make sure the plugin exists locally, installing npm plugins on demand.
78:     let target = ""
79:     try {
80:       target = await resolvePluginTarget(plan.spec)
81:     } catch (error) {
82:       return { ok: false, stage: "install", error }
83:     }
84:     if (!target) return { ok: false, stage: "install", error: new Error(`Plugin ${plan.spec} target is empty`) }
85: 
86:     // Then inspect the target for the requested server/tui entrypoint.
87:     let base
88:     try {
89:       base = await createPluginEntry(plan.spec, target, kind)
90:     } catch (error) {
91:       return { ok: false, stage: "entry", error }
92:     }
93:     if (!base.entry)
94:       return {
95:         ok: false,
96:         stage: "missing",
97:         value: {
98:           ...plan,
99:           source: base.source,
100:           target: base.target,
101:           pkg: base.pkg,
102:           message: `Plugin ${plan.spec} does not expose a ${kind} entrypoint`,
103:         },
104:       }
105: 
106:     // npm plugins can declare which opencode versions they support; file plugins are treated
107:     // as local development code and skip this compatibility gate.
108:     if (base.source === "npm") {
109:       try {
110:         await checkPluginCompatibility(base.target, InstallationVersion, base.pkg)
111:       } catch (error) {
112:         return { ok: false, stage: "compatibility", error }
113:       }
114:     }
115:     return { ok: true, value: { ...plan, source: base.source, target: base.target, entry: base.entry, pkg: base.pkg } }
116:   }
117: 
118:   // Import the resolved module only after all earlier validation has succeeded.
119:   export async function load(row: Resolved): Promise<{ ok: true; value: Loaded } | { ok: false; error: unknown }> {
120:     let mod
121:     try {
122:       mod = await import(row.entry)
123:     } catch (error) {
124:       return { ok: false, error }
125:     }
126:     if (!mod) return { ok: false, error: new Error(`Plugin ${row.spec} module is empty`) }
127:     return { ok: true, value: { ...row, mod } }
128:   }
129: 
130:   // Run one candidate through the full pipeline: resolve, optionally surface a missing entry,
131:   // import the module, and finally let the caller transform the loaded plugin into any result type.
132:   async function attempt<R>(
133:     candidate: Candidate,
134:     kind: PluginKind,
135:     retry: boolean,
136:     finish: ((load: Loaded, origin: ConfigPlugin.Origin, retry: boolean) => Promise<R | undefined>) | undefined,
137:     missing: ((value: Missing, origin: ConfigPlugin.Origin, retry: boolean) => Promise<R | undefined>) | undefined,
138:     report: Report | undefined,
139:   ): Promise<R | undefined> {
140:     const plan = candidate.plan
141: 
142:     // Deprecated plugin packages are silently ignored because they are now built in.
143:     if (plan.deprecated) return
144: 
145:     report?.start?.(candidate, retry)
146: 
147:     const resolved = await resolve(plan, kind)
148:     if (!resolved.ok) {
149:       if (resolved.stage === "missing") {
150:         // Missing entrypoints are handled separately so callers can still inspect package metadata,
151:         // for example to load theme files from a tui plugin package that has no code entrypoint.
152:         if (missing) {
153:           const value = await missing(resolved.value, candidate.origin, retry)
154:           if (value !== undefined) return value
155:         }
156:         report?.missing?.(candidate, retry, resolved.value.message, resolved.value)
157:         return
158:       }
159:       report?.error?.(candidate, retry, resolved.stage, resolved.error)
160:       return
161:     }
162: 
163:     const loaded = await load(resolved.value)
164:     if (!loaded.ok) {
165:       report?.error?.(candidate, retry, "load", loaded.error, resolved.value)
166:       return
167:     }
168: 
169:     // The default behavior is to return the successfully loaded plugin as-is, but callers can
170:     // provide a finisher to adapt the result into a more specific runtime shape.
171:     if (!finish) return loaded.value as R
172:     return finish(loaded.value, candidate.origin, retry)
173:   }
174: 
175:   type Input<R> = {
176:     items: ConfigPlugin.Origin[]
177:     kind: PluginKind
178:     wait?: () => Promise<void>
179:     finish?: (load: Loaded, origin: ConfigPlugin.Origin, retry: boolean) => Promise<R | undefined>
180:     missing?: (value: Missing, origin: ConfigPlugin.Origin, retry: boolean) => Promise<R | undefined>
181:     report?: Report
182:   }
183: 
184:   // Resolve and load all configured plugins in parallel.
185:   //
186:   // If `wait` is provided, file-based plugins that initially failed are retried once after the
187:   // caller finishes preparing dependencies. This supports local plugins that depend on an install
188:   // step happening elsewhere before their entrypoint becomes loadable.
189:   export async function loadExternal<R = Loaded>(input: Input<R>): Promise<R[]> {
190:     const candidates = input.items.map((origin) => ({ origin, plan: plan(origin.spec) }))
191:     const list: Array<Promise<R | undefined>> = []
192:     for (const candidate of candidates) {
193:       list.push(attempt(candidate, input.kind, false, input.finish, input.missing, input.report))
194:     }
195:     const out = await Promise.all(list)
196:     if (input.wait) {
197:       let deps: Promise<void> | undefined
198:       for (let i = 0; i < candidates.length; i++) {
199:         if (out[i] !== undefined) continue
200: 
201:         // Only local file plugins are retried. npm plugins already attempted installation during
202:         // the first pass, while file plugins may need the caller's dependency preparation to finish.
203:         const candidate = candidates[i]
204:         if (!candidate || pluginSource(candidate.plan.spec) !== "file") continue
205:         deps ??= input.wait()
206:         await deps
207:         out[i] = await attempt(candidate, input.kind, true, input.finish, input.missing, input.report)
208:       }
209:     }
210: 
211:     // Drop skipped/failed entries while preserving the successful result order.
212:     const ready: R[] = []
213:     for (const item of out) if (item !== undefined) ready.push(item)
214:     return ready
215:   }
216: }

(End of file - total 216 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/shared.ts"
}
```

**Output:**
```
<path>/home/arjun/opencode-plugins/docs/internal/opencode/packages/opencode/src/plugin/shared.ts</path>
<type>file</type>
<content>
1: import path from "path"
2: import { fileURLToPath, pathToFileURL } from "url"
3: import npa from "npm-package-arg"
4: import semver from "semver"
5: import { Filesystem } from "@/util/filesystem"
6: import { isRecord } from "@/util/record"
7: import { Npm } from "@opencode-ai/core/npm"
8: 
9: // Old npm package names for plugins that are now built-in
10: export const DEPRECATED_PLUGIN_PACKAGES = ["opencode-openai-codex-auth", "opencode-copilot-auth"]
11: 
12: export function isDeprecatedPlugin(spec: string) {
13:   return DEPRECATED_PLUGIN_PACKAGES.some((pkg) => spec.includes(pkg))
14: }
15: 
16: function parse(spec: string) {
17:   try {
18:     return npa(spec)
19:   } catch {}
20: }
21: 
22: export function parsePluginSpecifier(spec: string) {
23:   const hit = parse(spec)
24:   if (hit?.type === "alias" && !hit.name) {
25:     const sub = (hit as npa.AliasResult).subSpec
26:     if (sub?.name) {
27:       const version = !sub.rawSpec || sub.rawSpec === "*" ? "latest" : sub.rawSpec
28:       return { pkg: sub.name, version }
29:     }
30:   }
31:   if (!hit?.name) return { pkg: spec, version: "" }
32:   if (hit.raw === hit.name) return { pkg: hit.name, version: "latest" }
33:   return { pkg: hit.name, version: hit.rawSpec }
34: }
35: 
36: export type PluginSource = "file" | "npm"
37: export type PluginKind = "server" | "tui"
38: type PluginMode = "strict" | "detect"
39: 
40: export type PluginPackage = {
41:   dir: string
42:   pkg: string
43:   json: Record<string, unknown>
44: }
45: 
46: export type PluginEntry = {
47:   spec: string
48:   source: PluginSource
49:   target: string
50:   pkg?: PluginPackage
51:   entry?: string
52: }
53: 
54: const INDEX_FILES = ["index.ts", "index.tsx", "index.js", "index.mjs", "index.cjs"]
55: 
56: export function pluginSource(spec: string): PluginSource {
57:   if (isPathPluginSpec(spec)) return "file"
58:   return "npm"
59: }
60: 
61: function resolveExportPath(raw: string, dir: string) {
62:   if (raw.startsWith("file://")) return fileURLToPath(raw)
63:   if (path.isAbsolute(raw)) return raw
64:   return path.resolve(dir, raw)
65: }
66: 
67: function isAbsolutePath(raw: string) {
68:   return path.isAbsolute(raw) || /^[A-Za-z]:[\\/]/.test(raw)
69: }
70: 
71: function extractExportValue(value: unknown): string | undefined {
72:   if (typeof value === "string") return value
73:   if (!isRecord(value)) return undefined
74:   for (const key of ["import", "default"]) {
75:     const nested = value[key]
76:     if (typeof nested === "string") return nested
77:   }
78:   return undefined
79: }
80: 
81: function packageMain(pkg: PluginPackage) {
82:   const value = pkg.json.main
83:   if (typeof value !== "string") return
84:   const next = value.trim()
85:   if (!next) return
86:   return next
87: }
88: 
89: function resolvePackageFile(spec: string, raw: string, kind: string, pkg: PluginPackage) {
90:   const resolved = resolveExportPath(raw, pkg.dir)
91:   const root = Filesystem.resolve(pkg.dir)
92:   const next = Filesystem.resolve(resolved)
93:   if (!Filesystem.contains(root, next)) {
94:     throw new Error(`Plugin ${spec} resolved ${kind} entry outside plugin directory`)
95:   }
96:   return next
97: }
98: 
99: function resolvePackagePath(spec: string, raw: string, kind: PluginKind, pkg: PluginPackage) {
100:   return pathToFileURL(resolvePackageFile(spec, raw, kind, pkg)).href
101: }
102: 
103: function resolvePackageEntrypoint(spec: string, kind: PluginKind, pkg: PluginPackage) {
104:   const exports = pkg.json.exports
105:   if (isRecord(exports)) {
106:     const raw = extractExportValue(exports[`./${kind}`])
107:     if (raw) return resolvePackagePath(spec, raw, kind, pkg)
108:   }
109: 
110:   if (kind !== "server") return
111:   const main = packageMain(pkg)
112:   if (!main) return
113:   return resolvePackagePath(spec, main, kind, pkg)
114: }
115: 
116: function targetPath(target: string) {
117:   if (target.startsWith("file://")) return fileURLToPath(target)
118:   if (path.isAbsolute(target)) return target
119: }
120: 
121: async function resolveDirectoryIndex(dir: string) {
122:   for (const name of INDEX_FILES) {
123:     const file = path.join(dir, name)
124:     if (await Filesystem.exists(file)) return file
125:   }
126: }
127: 
128: async function resolveTargetDirectory(target: string) {
129:   const file = targetPath(target)
130:   if (!file) return
131:   const stat = await Filesystem.statAsync(file)
132:   if (!stat?.isDirectory()) return
133:   return file
134: }
135: 
136: async function resolvePluginEntrypoint(spec: string, target: string, kind: PluginKind, pkg?: PluginPackage) {
137:   const source = pluginSource(spec)
138:   const hit =
139:     pkg ?? (source === "npm" ? await readPluginPackage(target) : await readPluginPackage(target).catch(() => undefined))
140:   if (!hit) return target
141: 
142:   const entry = resolvePackageEntrypoint(spec, kind, hit)
143:   if (entry) return entry
144: 
145:   const dir = await resolveTargetDirectory(target)
146: 
147:   if (kind === "tui") {
148:     if (source === "file" && dir) {
149:       const index = await resolveDirectoryIndex(dir)
150:       if (index) return pathToFileURL(index).href
151:     }
152: 
153:     if (source === "npm") return
154:     if (dir) return
155: 
156:     return target
157:   }
158: 
159:   if (dir && isRecord(hit.json.exports)) {
160:     if (source === "file") {
161:       const index = await resolveDirectoryIndex(dir)
162:       if (index) return pathToFileURL(index).href
163:     }
164: 
165:     return
166:   }
167: 
168:   return target
169: }
170: 
171: export function isPathPluginSpec(spec: string) {
172:   return spec.startsWith("file://") || spec.startsWith(".") || isAbsolutePath(spec)
173: }
174: 
175: export async function resolvePathPluginTarget(spec: string) {
176:   const raw = spec.startsWith("file://") ? fileURLToPath(spec) : spec
177:   const file = path.isAbsolute(raw) || /^[A-Za-z]:[\\/]/.test(raw) ? raw : path.resolve(raw)
178:   const stat = await Filesystem.statAsync(file)
179:   if (!stat?.isDirectory()) {
180:     if (spec.startsWith("file://")) return spec
181:     return pathToFileURL(file).href
182:   }
183: 
184:   if (await Filesystem.exists(path.join(file, "package.json"))) {
185:     return pathToFileURL(file).href
186:   }
187: 
188:   const index = await resolveDirectoryIndex(file)
189:   if (index) return pathToFileURL(index).href
190: 
191:   throw new Error(`Plugin directory ${file} is missing package.json or index file`)
192: }
193: 
194: export async function checkPluginCompatibility(target: string, opencodeVersion: string, pkg?: PluginPackage) {
195:   if (!semver.valid(opencodeVersion) || semver.major(opencodeVersion) === 0) return
196:   const hit = pkg ?? (await readPluginPackage(target).catch(() => undefined))
197:   if (!hit) return
198:   const engines = hit.json.engines
199:   if (!isRecord(engines)) return
200:   const range = engines.opencode
201:   if (typeof range !== "string") return
202:   if (!semver.satisfies(opencodeVersion, range)) {
203:     throw new Error(`Plugin requires opencode ${range} but running ${opencodeVersion}`)
204:   }
205: }
206: 
207: export async function resolvePluginTarget(spec: string) {
208:   if (isPathPluginSpec(spec)) return resolvePathPluginTarget(spec)
209:   const hit = parse(spec)
210:   const pkg = hit?.name && hit.raw === hit.name ? `${hit.name}@latest` : spec
211:   const result = await Npm.add(pkg)
212:   return result.directory
213: }
214: 
215: export async function readPluginPackage(target: string): Promise<PluginPackage> {
216:   const file = target.startsWith("file://") ? fileURLToPath(target) : target
217:   const stat = await Filesystem.statAsync(file)
218:   const dir = stat?.isDirectory() ? file : path.dirname(file)
219:   const pkg = path.join(dir, "package.json")
220:   const json = await Filesystem.readJson<Record<string, unknown>>(pkg)
221:   return { dir, pkg, json }
222: }
223: 
224: export async function createPluginEntry(spec: string, target: string, kind: PluginKind): Promise<PluginEntry> {
225:   const source = pluginSource(spec)
226:   const pkg =
227:     source === "npm" ? await readPluginPackage(target) : await readPluginPackage(target).catch(() => undefined)
228:   const entry = await resolvePluginEntrypoint(spec, target, kind, pkg)
229:   return {
230:     spec,
231:     source,
232:     target,
233:     pkg,
234:     entry,
235:   }
236: }
237: 
238: export function readPackageThemes(spec: string, pkg: PluginPackage) {
239:   const field = pkg.json["oc-themes"]
240:   if (field === undefined) return []
241:   if (!Array.isArray(field)) {
242:     throw new TypeError(`Plugin ${spec} has invalid oc-themes field`)
243:   }
244: 
245:   const list = field.map((item) => {
246:     if (typeof item !== "string") {
247:       throw new TypeError(`Plugin ${spec} has invalid oc-themes entry`)
248:     }
249: 
250:     const raw = item.trim()
251:     if (!raw) {
252:       throw new TypeError(`Plugin ${spec} has empty oc-themes entry`)
253:     }
254:     if (raw.startsWith("file://") || isAbsolutePath(raw)) {
255:       throw new TypeError(`Plugin ${spec} oc-themes entry must be relative: ${item}`)
256:     }
257: 
258:     return resolvePackageFile(spec, raw, "oc-themes", pkg)
259:   })
260: 
261:   return Array.from(new Set(list))
262: }
263: 
264: export function readPluginId(id: unknown, spec: string) {
265:   if (id === undefined) return
266:   if (typeof id !== "string") throw new TypeError(`Plugin ${spec} has invalid id type ${typeof id}`)
267:   const value = id.trim()
268:   if (!value) throw new TypeError(`Plugin ${spec} has an empty id`)
269:   return value
270: }
271: 
272: export function readV1Plugin(
273:   mod: Record<string, unknown>,
274:   spec: string,
275:   kind: PluginKind,
276:   mode: PluginMode = "strict",
277: ) {
278:   const value = mod.default
279:   if (!isRecord(value)) {
280:     if (mode === "detect") return
281:     throw new TypeError(`Plugin ${spec} must default export an object with ${kind}()`)
282:   }
283:   if (mode === "detect" && !("id" in value) && !("server" in value) && !("tui" in value)) return
284: 
285:   const server = "server" in value ? value.server : undefined
286:   const tui = "tui" in value ? value.tui : undefined
287:   if (server !== undefined && typeof server !== "function") {
288:     throw new TypeError(`Plugin ${spec} has invalid server export`)
289:   }
290:   if (tui !== undefined && typeof tui !== "function") {
291:     throw new TypeError(`Plugin ${spec} has invalid tui export`)
292:   }
293:   if (server !== undefined && tui !== undefined) {
294:     throw new TypeError(`Plugin ${spec} must default export either server() or tui(), not both`)
295:   }
296:   if (kind === "server" && server === undefined) {
297:     throw new TypeError(`Plugin ${spec} must default export an object with server()`)
298:   }
299:   if (kind === "tui" && tui === undefined) {
300:     throw new TypeError(`Plugin ${spec} must default export an object with tui()`)
301:   }
302: 
303:   return value
304: }
305: 
306: export async function resolvePluginId(
307:   source: PluginSource,
308:   spec: string,
309:   target: string,
310:   id: string | undefined,
311:   pkg?: PluginPackage,
312: ) {
313:   if (source === "file") {
314:     if (id) return id
315:     throw new TypeError(`Path plugin ${spec} must export id`)
316:   }
317:   if (id) return id
318:   const hit = pkg ?? (await readPluginPackage(target))
319:   if (typeof hit.json.name !== "string" || !hit.json.name.trim()) {
320:     throw new TypeError(`Plugin package ${hit.pkg} is missing name`)
321:   }
322:   return hit.json.name.trim()
323: }

(End of file - total 323 lines)
</content>
```

---

## Assistant (Build · MiniMax M2.5 Free · 8.7s)

_Thinking:_

Now I have a good understanding of the plugin system. Let me summarize what I found.

Found extensive plugin system code in the opencode codebase:

**Core Plugin System** (`packages/opencode/src/plugin/`):
- **index.ts** - Main plugin service with hook triggering, loading internal/external plugins
- **loader.ts** - Plugin resolution and loading pipeline (resolve → entrypoint → compatibility check → import)
- **shared.ts** - Plugin specifier parsing, target resolution, compatibility checks, v1 plugin format detection

**Built-in Auth Plugins**:
- `codex.ts` - OpenAI Codex auth
- `github-copilot/` - GitHub Copilot auth
- `azure.ts` - Azure AI auth
- `cloudflare.ts` - Cloudflare AI Gateway/Workers auth
- External: `opencode-gitlab-auth`, `opencode-poe-auth`

**Plugin Loading Flow**:
1. Internal plugins loaded first (direct imports)
2. External npm/file plugins resolved via `PluginLoader.loadExternal()`
3. Plugins provide hooks via `server(input, options)` function
4. Hooks registered and triggered via `Plugin.Service.trigger()`

**Key Patterns**:
- Plugins export a function that returns hooks (v1 format)
- Support for both `server` and `tui` entrypoints
- Semver compatibility checking against opencode version
- File-based plugins use `file://` prefix or relative paths

---

