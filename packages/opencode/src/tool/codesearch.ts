import { Effect, Schema } from "effect"
import { HttpClient } from "effect/unstable/http"
import * as Tool from "./tool"
import { McpGrep } from "./mcp-grep"
import DESCRIPTION from "./codesearch.txt"

export const Parameters = Schema.Struct({
  query: Schema.String.annotate({
    description:
      "The literal code pattern to search for (e.g., 'useState(', 'export function'). Use actual code that would appear in files, not keywords or questions.",
  }),
  matchCase: Schema.optional(Schema.Boolean).annotate({
    description: "Whether the search should be case sensitive",
  }),
  matchWholeWords: Schema.optional(Schema.Boolean).annotate({
    description: "Whether to match whole words only",
  }),
  useRegexp: Schema.optional(Schema.Boolean).annotate({
    description:
      "REQUIRED for regex patterns. Without it, the query matches literally. Set to true if your query uses metacharacters like . * + ? [ ] ( ) | \\",
  }),
  repo: Schema.optional(Schema.String).annotate({
    description:
      "Filter by repository. Examples: 'facebook/react', 'microsoft/vscode', 'vercel/ai'. Can match partial names, for example 'vercel/' will find repositories in the vercel org.",
  }),
  path: Schema.optional(Schema.String).annotate({
    description:
      "Filter by file path. Examples: 'src/components/Button.tsx', 'README.md'. Can match partial paths, for example '/route.ts' will find route.ts files at any level.",
  }),
  language: Schema.optional(Schema.Array(Schema.String)).annotate({
    description:
      "Filter by programming language. REQUIRES TitleCase: ['TypeScript'], ['Python'], ['JavaScript']. Lowercase will not match.",
  }),
})

export const CodeSearchTool = Tool.define(
  "codesearch",
  Effect.gen(function* () {
    const http = yield* HttpClient.HttpClient
    return {
      description: DESCRIPTION,
      parameters: Parameters,
      execute: (params: Schema.Schema.Type<typeof Parameters>, ctx: Tool.Context) =>
        Effect.gen(function* () {
          yield* ctx.ask({
            permission: "codesearch",
            patterns: [params.query],
            always: ["*"],
            metadata: params,
          })

          const result = yield* McpGrep.call(http, "searchGitHub", McpGrep.SearchArgs, params, "45 seconds")

          return {
            output:
              result ??
              "No code snippets found. Please try a different query, be more specific about the library or programming concept, or use regex.",
            title: `Code search: ${params.query}`,
            metadata: {},
          }
        }).pipe(Effect.orDie),
    }
  }),
)
