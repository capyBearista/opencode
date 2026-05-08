# Opencode plugins code search

**Session ID:** ses_1fc138eccffetBSZEEdh6NgZRs
**Created:** 5/7/2026, 3:31:27 PM
**Updated:** 5/7/2026, 3:33:05 PM

---

## User

use the codesearch tool to look for code related to opencode plugins

---

## Assistant (Build · MiniMax M2.5 Free · 8.8s)

_Thinking:_

The user wants me to use the codesearch tool to look for code related to "opencode plugins". Let me invoke this tool with an appropriate query.

Based on the tool description, I should search for actual code patterns, not keywords. So I should search for things like "opencode" and "plugin" in code patterns.







**Tool: codesearch**

**Input:**
```json
{
  "query": "opencode.*plugin",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.5s)

_Thinking:_

No results with that pattern. Let me try a different approach - maybe just searching for "plugin" to see what's available, or searching for "@opencode" which would be common in this codebase.




No results with that pattern. Let me try a broader search:


**Tool: codesearch**

**Input:**
```json
{
  "query": "@opencode",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
Repository: anomalyco/opencode
Path: packages/console/app/src/routes/zen/util/handler.ts
URL: https://github.com/anomalyco/opencode/blob/dev/packages/console/app/src/routes/zen/util/handler.ts
License: MIT

Snippets:
--- Snippet 1 (Line 1) ---
import type { APIEvent } from "@solidjs/start/server"
import { and, Database, eq, isNull, lt, or, sql } from "@opencode-ai/console-core/drizzle/index.js"
import { KeyTable } from "@opencode-ai/console-core/schema/key.sql.js"
import { BillingTable, LiteTable, SubscriptionTable, UsageTable } from "@opencode-ai/console-core/schema/billing.sql.js"
import { centsToMicroCents } from "@opencode-ai/console-core/util/price.js"
import { getMonthlyBounds, getWeekBounds } from "@opencode-ai/console-core/util/date.js"
import { Identifier } from "@opencode-ai/console-core/identifier.js"
import { Billing } from "@opencode-ai/console-core/billing.js"
import { Actor } from "@opencode-ai/console-core/actor.js"
import { WorkspaceTable } from "@opencode-ai/console-core/schema/workspace.sql.js"
import { ZenData } from "@opencode-ai/console-core/model.js"
import { Subscription } from "@opencode-ai/console-core/subscription.js"
import { BlackData } from "@opencode-ai/console-core/black.js"
import { UserTable } from "@opencode-ai/console-core/schema/user.sql.js"
import { ModelTable } from "@opencode-ai/console-core/schema/model.sql.js"
import { ProviderTable } from "@opencode-ai/console-core/schema/provider.sql.js"
import { logger } from "./logger"
import {
  AuthError,
  CreditsError,
  MonthlyLimitError,

```

---

## Assistant (Build · MiniMax M2.5 Free · 2.1s)

_Thinking:_

That's finding results related to @opencode-ai (a different package), not opencode plugins. Let me try searching for "plugin" more broadly.







**Tool: codesearch**

**Input:**
```json
{
  "query": "export.*Plugin",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
Repository: agent-sh/agentsys
Path: __tests__/opencode-compatibility.test.js
URL: https://github.com/agent-sh/agentsys/blob/main/__tests__/opencode-compatibility.test.js
License: MIT

Snippets:
--- Snippet 1 (Line 216) ---

        // Should import from @opencode-ai/plugin
        expect(content).toMatch(/@opencode-ai\/plugin/);

        // Should export a Plugin type
        expect(content).toMatch(/export.*Plugin|Plugin.*=/);

        // Should have valid hook names
        const validHooks = [
          'chat.params',
          'permission.ask',

```

---

## Assistant (Build · MiniMax M2.5 Free · 1.9s)

_Thinking:_

Found some relevant code. It looks like there's a plugin system with `@opencode-ai/plugin`. Let me search for more specific patterns to find the actual plugin code.





Found some results. Let me search for more specific plugin patterns:



**Tool: codesearch**

**Input:**
```json
{
  "query": "registerPlugin|createPlugin",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 16.4s)

_Thinking:_

No results with those patterns. Let me try searching for hooks or the plugin type definition.








**Tool: codesearch**

**Input:**
```json
{
  "query": "Plugin.*interface|interface.*Plugin",
  "language": [
    "TypeScript"
  ]
}
```

**Error:**
```
StatusCode: non 2xx status code (504 POST https://mcp.grep.app/)
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.8s)

_Thinking:_

The codesearch tool had an error. Let me try a simpler query.





The codesearch tool had an error. Let me try simpler queries:



**Tool: codesearch**

**Input:**
```json
{
  "query": "Plugin type",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: withfig/autocomplete
Path: src/ansible-config.ts
URL: https://github.com/withfig/autocomplete/blob/master/src/ansible-config.ts
License: MIT

Snippets:
--- Snippet 1 (Line 33) ---
            template: ["filepaths"],
          },
        },
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",
            suggestions: [
              "all",
              "base",
              "become",
              "cache",


--- Snippet 2 (Line 106) ---
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",

```

---

## Assistant (Build · MiniMax M2.5 Free · 2.3s)

_Thinking:_

These results aren't related to opencode plugins. Let me try searching specifically in the opencode repo itself for plugin-related code patterns.







Those aren't related to opencode. Let me search for opencode plugin code more specifically:



**Tool: codesearch**

**Input:**
```json
{
  "query": "opencode plugin",
  "language": [
    "TypeScript",
    "JavaScript"
  ],
  "repo": "anomalyco/opencode"
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

## Assistant (Build · MiniMax M2.5 Free · 1.9s)

_Thinking:_

No results. Let me try searching for "opencode" itself which might find the core library, or try other patterns related to plugins.











**Tool: codesearch**

**Input:**
```json
{
  "query": "opencode",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: openclaw/openclaw
Path: extensions/opencode-go/index.ts
URL: https://github.com/openclaw/openclaw/blob/main/extensions/opencode-go/index.ts
License: MIT

Snippets:
--- Snippet 1 (Line 4) ---
import { applyOpencodeGoConfig, OPENCODE_GO_DEFAULT_MODEL_REF } from "./api.js";
import { opencodeGoMediaUnderstandingProvider } from "./media-understanding-provider.js";
import {
  listOpencodeGoSupplementalModelCatalogEntries,
  normalizeOpencodeGoBaseUrl,
  resolveOpencodeGoSupplementalModel,
} from "./provider-catalog.js";
import { createOpencodeGoDeepSeekV4Wrapper } from "./stream.js";

const PROVIDER_ID = "opencode-go";
const OPENCODE_SHARED_PROFILE_IDS = ["opencode:default", "opencode-go:default"] as const;
const OPENCODE_SHARED_HINT = "Shared API key for Zen + Go catalogs";
const OPENCODE_SHARED_WIZARD_GROUP = {
  groupId: "opencode",
  groupLabel: "OpenCode",
  groupHint: OPENCODE_SHARED_HINT,
} as const;

export default definePluginEntry({
  id: PROVIDER_ID,
  name: "OpenCode Go Provider",

```

---

## Assistant (Build · MiniMax M2.5 Free · 16.7s)

_Thinking:_

This is interesting - found code related to opencode plugins in the openclaw repo. It shows a plugin structure with `definePluginEntry`. Let me search for more patterns related to this.






Found plugin-related code. Let me search for more patterns:




**Tool: codesearch**

**Input:**
```json
{
  "query": "definePluginEntry",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Error:**
```
StatusCode: non 2xx status code (504 POST https://mcp.grep.app/)
```

---

## Assistant (Build · MiniMax M2.5 Free · 16.8s)

_Thinking:_

The codesearch tool had an error again. Let me try a different query.








Search had an error. Let me try another pattern:




**Tool: codesearch**

**Input:**
```json
{
  "query": "hook\\.name",
  "language": [
    "TypeScript"
  ]
}
```

**Error:**
```
StatusCode: non 2xx status code (504 POST https://mcp.grep.app/)
```

---

## Assistant (Build · MiniMax M2.5 Free · 1.9s)

_Thinking:_

The codesearch tool is having issues. Let me try a simpler query.






The codesearch tool is having intermittent issues. Let me try a simpler query:




**Tool: codesearch**

**Input:**
```json
{
  "query": "plugins",
  "path": "packages/opencode"
}
```

**Output:**
```
Repository: anomalyco/opencode
Path: packages/opencode/src/cli/cmd/tui/plugin/runtime.ts
URL: https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/tui/plugin/runtime.ts
License: MIT

Snippets:
--- Snippet 1 (Line 4) ---
  type TuiPlugin,
  type TuiPluginApi,
  type TuiPluginInstallResult,
  type TuiPluginModule,
  type TuiPluginMeta,
  type TuiPluginStatus,
  type TuiSlotPlugin,
  type TuiTheme,
} from "@opencode-ai/plugin/tui"
import path from "path"
import { fileURLToPath } from "url"


--- Snippet 2 (Line 21) ---
  readPackageThemes,
  readPluginId,
  readV1Plugin,
  resolvePluginId,
  type PluginPackage,
  type PluginSource,
} from "@/plugin/shared"
import { PluginLoader } from "@/plugin/loader"
import { PluginMeta } from "@/plugin/meta"

```

---

## Assistant (Build · MiniMax M2.5 Free · 2.2s)

_Thinking:_

Now I'm finding relevant results in the opencode repo itself. Let me search for more patterns to get a better picture of the plugin system.




Found plugin code in the opencode repo. Let me search for more:





**Tool: codesearch**

**Input:**
```json
{
  "query": "PluginPackage",
  "path": "packages/opencode"
}
```

**Output:**
```
Repository: anomalyco/opencode
Path: packages/opencode/src/plugin/shared.ts
URL: https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/plugin/shared.ts
License: MIT

Snippets:
--- Snippet 1 (Line 35) ---

export type PluginSource = "file" | "npm"
export type PluginKind = "server" | "tui"
type PluginMode = "strict" | "detect"

export type PluginPackage = {
  dir: string
  pkg: string
  json: Record<string, unknown>
}

export type PluginEntry = {
  spec: string
  source: PluginSource
  target: string
  pkg?: PluginPackage
  entry?: string
}

const INDEX_FILES = ["index.ts", "index.tsx", "index.js", "index.mjs", "index.cjs"]


```

---

## Assistant (Build · MiniMax M2.5 Free · 16.5s)

_Thinking:_

This is very helpful - found the plugin shared types. Let me search for more patterns to get a complete picture.








Found plugin types. Let me search for more:







**Tool: codesearch**

**Input:**
```json
{
  "query": "PluginLoader",
  "path": "packages/opencode"
}
```

**Error:**
```
StatusCode: non 2xx status code (504 POST https://mcp.grep.app/)
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.0s)

_Thinking:_

The codesearch is having issues again. Let me try another query.





The codesearch tool is experiencing intermittent errors. Let me try one more query:




**Tool: codesearch**

**Input:**
```json
{
  "query": "plugin.*install",
  "path": "packages/opencode"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.2s)

_Thinking:_

No results for that pattern. Let me summarize what I found so far.





**Summary of codesearch results for opencode plugins:**

Found relevant code in the opencode repository:

1. **`packages/opencode/src/cli/cmd/tui/plugin/runtime.ts`** - References `@opencode-ai/plugin/tui` with types like `TuiPlugin`, `TuiPluginApi`, `TuiPluginInstallResult`, `TuiPluginModule`, `TuiPluginMeta`, `TuiPluginStatus`, `TuiSlotPlugin`, `TuiTheme`

2. **`packages/opencode/src/plugin/shared.ts`** - Defines core plugin types:
   - `PluginSource` = "file" | "npm"
   - `PluginKind` = "server" | "tui"
   - `PluginPackage` = { dir, pkg, json }
   - `PluginEntry` = { spec, source, target, pkg?, entry? }

Also found external usage in **openclaw/openclaw** repository (`extensions/opencode-go/index.ts`) which has a `definePluginEntry` function for creating opencode plugins.

The opencode plugin system appears to support:
- **Plugin sources**: file-based or npm packages
- **Plugin kinds**: server and tui plugins
- A plugin loader system with metadata handling

---

