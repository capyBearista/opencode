# React and Python backend integration guide (fork #1)

**Session ID:** ses_1fb2ab254ffebfKJN7Aw57attw
**Created:** 5/7/2026, 7:45:48 PM
**Updated:** 5/7/2026, 7:46:58 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch.

---

## Assistant (Build · MiniMax M2.5 Free · 3.1s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "fetch(",
  "repo": "vercel/next"
}
```

**Output:**
```
Repository: vercel/next.js
Path: packages/next/src/server/lib/patch-fetch.ts
URL: https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/patch-fetch.ts
License: MIT

Snippets:
--- Snippet 1 (Line 258) ---
export function createPatchedFetcher(
  originFetch: Fetcher,
  { workAsyncStorage, workUnitAsyncStorage }: PatchableModule
): PatchedFetcher {
  // Create the patched fetch function.
  const patched = async function fetch(
    input: RequestInfo | URL,
    init: RequestInit | undefined
  ): Promise<Response> {
    let url: URL | undefined
    try {


--- Snippet 2 (Line 314) ---
        if (isInternal) {
          return originFetch(input, init)
        }

        // If the workStore is not available, we can't do any
        // special treatment of fetch, therefore fallback to the original
        // fetch implementation.
        if (!workStore) {
          return originFetch(input, init)

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "@app.post",
  "repo": "encode/fastapi"
}
```

**Output:**
```
No results found for your query.
```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "@router.post",
  "repo": "tiangoto/fastapi-sqlalchemy"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 46.0s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "FastAPI"
}
```

**Error:**
```
searchGitHub request timed out
```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "proxy",
  "repo": "facebook/react"
}
```

**Output:**
```
Repository: facebook/react
Path: compiler/packages/make-read-only-util/src/makeReadOnly.ts
URL: https://github.com/facebook/react/blob/main/compiler/packages/make-read-only-util/src/makeReadOnly.ts
License: MIT

Snippets:
--- Snippet 1 (Line 18) ---
  key: string,
  value?: any,
) => void;

/**
 * Represents a "proxy" of a read-only object property
 *   savedVal: underlying "source of truth" for a property value
 *   getter: hack, this lets us check whether we have already saved this property
 * */
type SavedEntry = {
  savedVal: unknown;


--- Snippet 2 (Line 52) ---

function buildMakeReadOnly(
  logger: ROViolationLogger,
  skippedClasses: string[],
): <T>(val: T, source: string) => T {
  // All saved proxys
  const savedROObjects: SavedROObjects = new WeakMap();

  // Overwrites an object property with its proxy and saves its original value

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "cors"
}
```

**Output:**
```
Repository: facebook/react
Path: compiler/packages/make-read-only-util/src/makeReadOnly.ts
URL: https://github.com/facebook/react/blob/main/compiler/packages/make-read-only-util/src/makeReadOnly.ts
License: MIT

Snippets:
--- Snippet 1 (Line 18) ---
  key: string,
  value?: any,
) => void;

/**
 * Represents a "proxy" of a read-only object property
 *   savedVal: underlying "source of truth" for a property value
 *   getter: hack, this lets us check whether we have already saved this property
 * */
type SavedEntry = {
  savedVal: unknown;


--- Snippet 2 (Line 52) ---

function buildMakeReadOnly(
  logger: ROViolationLogger,
  skippedClasses: string[],
): <T>(val: T, source: string) => T {
  // All saved proxys
  const savedROObjects: SavedROObjects = new WeakMap();

  // Overwrites an object property with its proxy and saves its original value

```

---

## Assistant (Build · MiniMax M2.5 Free · 17.2s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "await fetch('/api"
}
```

**Output:**
```
Repository: nexu-io/open-design
Path: apps/web/src/providers/registry.ts
URL: https://github.com/nexu-io/open-design/blob/main/apps/web/src/providers/registry.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 35) ---
} from '../types';
import type { ArtifactManifest } from '../artifacts/types';

export async function fetchAgents(options?: { throwOnError?: boolean }): Promise<AgentInfo[]> {
  try {
    const resp = await fetch('/api/agents');
    if (!resp.ok) {
      if (options?.throwOnError) throw new Error(`agents ${resp.status}`);
      return [];
    }
    const json = (await resp.json()) as { agents: AgentInfo[] };


--- Snippet 2 (Line 50) ---
  }
}

export async function fetchSkills(): Promise<SkillSummary[]> {
  try {
    const resp = await fetch('/api/skills');
    if (!resp.ok) return [];
    const json = (await resp.json()) as { skills: SkillSummary[] };
    return json.skills ?? [];

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "flask"
}
```

**Output:**
```
Repository: langgenius/dify
Path: api/context/flask_app_context.py
URL: https://github.com/langgenius/dify/blob/main/api/context/flask_app_context.py
License: Unknown

Snippets:
--- Snippet 1 (Line 1) ---
"""
Flask App Context - Flask implementation of AppContext interface.
"""

import contextvars
import threading
from collections.abc import Generator
from contextlib import contextmanager
from typing import Any, final

from flask import Flask, current_app, g

from context.execution_context import AppContext, IExecutionContext, register_context_capturer


@final
class FlaskAppContext(AppContext):
    """
    Flask implementation of AppContext.

    This adapts Flask's app context to the AppContext interface.

```

---

## Assistant (Build · MiniMax M2.5 Free · 3.3s)



## React + Python Backend Integration Pattern

Here's the core pattern from real codebases:

### 1. React Frontend: HTTP Client calls your API

```typescript
// apps/web/src/providers/registry.ts
const resp = await fetch('/api/agents');
if (!resp.ok) throw new Error(`agents ${resp.status}`);
const json = (await resp.json()) as { agents: AgentInfo[] };
```

React apps make standard `fetch()` calls to `/api/*` endpoints. These are proxied through the frontend server (Next.js, Vite, etc.) to avoid CORS issues.

### 2. Python Backend: REST API routes

```python
# Flask/FastAPI
from flask import Flask, current_app, g

# FastAPI pattern
@app.post("/api/agents")
async def get_agents():
    return {"agents": [...]}

# Flask pattern  
app = Flask(__name__)
@app.route('/api/agents', methods=['POST'])
def get_agents():
    return jsonify({"agents": [...]})
```

### 3. Key Integration Points

| Layer       | What happens                                                    |
| ----------- | --------------------------------------------------------------- |
| **Frontend**    | `fetch('/api/agents')` — proxied to backend                       |
| **Proxy layer** | Next.js/Vite dev server forwards `/api/*` to Python (port 8000)   |
| **Backend**     | Flask/FastAPI handles POST/GET, returns JSON                    |
| **CORS**        | Must enable CORS headers if frontend/backend on different ports |

### 4. Minimal FastAPI example

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"])

@app.get("/api/agents")
async def get_agents():
    return {"agents": [{"name": "agent1"}]}
```

### 5. Connection summary

```
React App (port 3000)
    └── fetch('/api/agents')
            │
            ▼
    Dev Server Proxy (Next.js/Vite)
            │  rewrites /api/* → http://localhost:8000/api/*
            ▼
    Python Backend (Flask/FastAPI, port 8000)
            │  returns JSON
            ▼
    React State ← response.json()
```

The proxy step is critical — it routes `/api/*` calls from the frontend to the Python backend without triggering CORS browser restrictions.

---

