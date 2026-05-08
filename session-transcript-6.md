# React and Python backend integration guide (fork #1)

**Session ID:** ses_1fbcaf78affelsxQ2bMHAHuhoO
**Created:** 5/7/2026, 4:50:44 PM
**Updated:** 5/7/2026, 4:51:31 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch.

---

## Assistant (Build · MiniMax M2.5 Free · 4.3s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch('/api",
  "repo": "owner:facebook owner:vercel owner:github"
}
```

**Output:**
```
API error: MCP error -32602: Invalid arguments for tool searchGitHub: [
  {
    "code": "invalid_type",
    "expected": "array",
    "received": "null",
    "path": [
      "language"
    ],
    "message": "Expected array, received null"
  }
]
```

**Tool: codesearch**

**Input:**
```json
{
  "query": "@app.post @app.get FastAPI"
}
```

**Output:**
```
API error: MCP error -32602: Invalid arguments for tool searchGitHub: [
  {
    "code": "invalid_type",
    "expected": "array",
    "received": "null",
    "path": [
      "language"
    ],
    "message": "Expected array, received null"
  }
]
```

**Tool: codesearch**

**Input:**
```json
{
  "query": "axios.post axios.get"
}
```

**Output:**
```
API error: MCP error -32602: Invalid arguments for tool searchGitHub: [
  {
    "code": "invalid_type",
    "expected": "array",
    "received": "null",
    "path": [
      "language"
    ],
    "message": "Expected array, received null"
  }
]
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.4s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript",
    "Python"
  ],
  "query": "fetch('/api')"
}
```

**Output:**
```
Repository: microsoft/playwright
Path: tests/page/page-network-response.spec.ts
URL: https://github.com/microsoft/playwright/blob/main/tests/page/page-network-response.spec.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 324) ---
    });
    for (let i = 0; i < 3; i++) {
      await it.step(`main frame iteration ${i}`, async () => {
        const respPromise = page.waitForResponse('**/api');
        await page.evaluate(async () => {
          const response = await fetch('/api');
          return response.status;
        });
        const response = await respPromise;
        expect(response.status()).toBe(200);
        expect(requests.length).toBe(i + 1);


--- Snippet 2 (Line 375) ---
    });
    for (let i = 0; i < 3; i++) {
      await it.step(`main frame iteration ${i}`, async () => {
        const respPromise = page.waitForResponse('**/api');
        await page.evaluate(async () => {
          const response = await fetch('/api');
          return response.status;
        });
        const response = await respPromise;

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "@app.post @app.get FastAPI"
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
    "TypeScript"
  ],
  "query": "axios.post axios.get"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.8s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "@app.post"
}
```

**Output:**
```
Repository: sgl-project/sglang
Path: python/sglang/srt/entrypoints/http_server.py
URL: https://github.com/sgl-project/sglang/blob/main/python/sglang/srt/entrypoints/http_server.py
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 775) ---
        content=content,
        status_code=200 if ret.success else HTTPStatus.BAD_REQUEST,
    )


@app.post("/add_external_corpus")
@auth_level(AuthLevel.ADMIN_OPTIONAL)
async def add_external_corpus(request: Request):
    """Add an external corpus for ngram speculative decoding."""
    from sglang.srt.managers.io_struct import AddExternalCorpusReqInput



--- Snippet 2 (Line 800) ---
        },
        status_code=200 if result.success else HTTPStatus.BAD_REQUEST,
    )


@app.post("/remove_external_corpus")
@auth_level(AuthLevel.ADMIN_OPTIONAL)
async def remove_external_corpus(request: Request):
    """Remove an external corpus by ID."""

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

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "proxy setup"
}
```

**Output:**
```
Repository: balena-io/balena-cli
Path: src/utils/proxy.ts
URL: https://github.com/balena-io/balena-cli/blob/master/src/utils/proxy.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 21) ---
import type { CliSettings } from './bootstrap';

type ProxyConfig = string | GlobalTunnelNgConfig;

/**
 * Global proxy setup. Originally, `global-tunnel-ng` was used, but it only
 * supports Node.js versions older than 10.16.0. For v10.16.0 and later,
 * we use `global-agent` (which only supports Node.js v10.0.0 and later).
 *
 * For backwards compatibility reasons, in either case we still accept a
 * 'proxy' setting in `.balenarc.yml` that follows the


--- Snippet 2 (Line 69) ---
		}
	}
}

/**
 * `global-tunnel-ng` proxy setup.
 * See docs for setupGlobalHttpProxy() above.
 */
async function setupGlobalTunnelNgProxy(proxy?: ProxyConfig) {

```

---

## Assistant (Build · MiniMax M2.5 Free · 18.3s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "CORS origins"
}
```

**Output:**
```
Repository: open-webui/open-webui
Path: src/lib/apis/chats/index.ts
URL: https://github.com/open-webui/open-webui/blob/main/src/lib/apis/chats/index.ts
License: Unknown

Snippets:
--- Snippet 1 (Line 2) ---
import { getTimeRange } from '$lib/utils';

export const createNewChat = async (token: string, chat: object, folderId: string | null) => {
	let error = null;

	const res = await fetch(`${WEBUI_API_BASE_URL}/chats/new`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`


--- Snippet 2 (Line 34) ---
};

export const unarchiveAllChats = async (token: string) => {
	let error = null;

	const res = await fetch(`${WEBUI_API_BASE_URL}/chats/unarchive/all`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript",
    "JavaScript"
  ],
  "query": "\"proxy\": \"/api\""
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
    "TypeScript"
  ],
  "query": "await fetch("
}
```

**Output:**
```
Repository: open-webui/open-webui
Path: src/lib/apis/chats/index.ts
URL: https://github.com/open-webui/open-webui/blob/main/src/lib/apis/chats/index.ts
License: Unknown

Snippets:
--- Snippet 1 (Line 2) ---
import { getTimeRange } from '$lib/utils';

export const createNewChat = async (token: string, chat: object, folderId: string | null) => {
	let error = null;

	const res = await fetch(`${WEBUI_API_BASE_URL}/chats/new`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			authorization: `Bearer ${token}`


--- Snippet 2 (Line 34) ---
};

export const unarchiveAllChats = async (token: string) => {
	let error = null;

	const res = await fetch(`${WEBUI_API_BASE_URL}/chats/unarchive/all`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',

```

---

## Assistant (Build · MiniMax M2.5 Free · 3.0s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "CORS(app)"
}
```

**Output:**
```
Repository: GoogleCloudPlatform/generative-ai
Path: gemini/sample-apps/quickbot/image-background-changer-using-imagen3/backend/main.py
URL: https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/sample-apps/quickbot/image-background-changer-using-imagen3/backend/main.py
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 21) ---
from src.controller.search import router as search_router

app = FastAPI()


def configure_cors(app):
    """Configures CORS middleware based on the environment."""
    environment = getenv("ENVIRONMENT")
    allowed_origins = []

    if environment == "production":


--- Snippet 2 (Line 89) ---
        text = result.alternatives[0].transcript

    return text, 200


configure_cors(app)


```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "CORS"
}
```

**Output:**
```
Repository: electron/electron
Path: spec/api-protocol-spec.ts
URL: https://github.com/electron/electron/blob/main/spec/api-protocol-spec.ts
License: MIT

Snippets:
--- Snippet 1 (Line 32) ---
const interceptStreamProtocol = protocol.interceptStreamProtocol;
const unregisterProtocol = protocol.unregisterProtocol;
const uninterceptProtocol = protocol.uninterceptProtocol;

const text = 'valar morghulis';
const protocolName = 'cors';
const postData = {
  name: 'post test',
  type: 'string'
};



--- Snippet 2 (Line 904) ---
      protocol.registerFileProtocol(standardScheme, (request, callback) => callback({ path: filePath }));
      w.loadURL(origin);
    });
  });

  describe('protocol.registerSchemesAsPrivileged cors-fetch', function () {
    let w: BrowserWindow;
    beforeEach(async () => {
      w = new BrowserWindow({ show: false });

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "useEffect fetch"
}
```

**Output:**
```
Repository: KevinVandy/material-react-table
Path: apps/material-react-table-docs/components/navigation/routes.ts
URL: https://github.com/KevinVandy/material-react-table/blob/v3/apps/material-react-table-docs/components/navigation/routes.ts
License: MIT

Snippets:
--- Snippet 1 (Line 350) ---
            label: 'React Query Example',
            keywords: ['tanstack', 'remote', 'data fetching', 'useQuery'],
          },
          {
            href: '/docs/examples/remote',
            label: 'useEffect Fetching Example',
            keywords: ['data fetching'],
          },
          {
            href: '/docs/examples/dynamic-columns',
            label: 'Dynamic Columns Example',

```

---

## Assistant (Build · MiniMax M2.5 Free · 3.5s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "query": "add_middleware CORSMiddleware"
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
    "TypeScript"
  ],
  "query": "const response = await fetch"
}
```

**Output:**
```
Repository: ollama/ollama
Path: app/ui/app/src/api.ts
URL: https://github.com/ollama/ollama/blob/main/app/ui/app/src/api.ts
License: MIT

Snippets:
--- Snippet 1 (Line 44) ---

  return btoa(binary);
}

export async function fetchUser(): Promise<User | null> {
  const response = await fetch(`${API_BASE}/api/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });


--- Snippet 2 (Line 69) ---

  throw new Error(`Failed to fetch user: ${response.status}`);
}

export async function fetchConnectUrl(): Promise<string> {
  const response = await fetch(`${API_BASE}/api/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

```

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "query": "export default function App"
}
```

**Output:**
```
Repository: reduxjs/redux
Path: src/applyMiddleware.ts
URL: https://github.com/reduxjs/redux/blob/master/src/applyMiddleware.ts
License: MIT

Snippets:
--- Snippet 1 (Line 23) ---
 */
export default function applyMiddleware(): StoreEnhancer
export default function applyMiddleware<Ext1, S>(
  middleware1: Middleware<Ext1, S, any>
): StoreEnhancer<{ dispatch: Ext1 }>
export default function applyMiddleware<Ext1, Ext2, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 }>
export default function applyMiddleware<Ext1, Ext2, Ext3, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>,
  middleware3: Middleware<Ext3, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 & Ext3 }>
export default function applyMiddleware<Ext1, Ext2, Ext3, Ext4, S>(
  middleware1: Middleware<Ext1, S, any>,
  middleware2: Middleware<Ext2, S, any>,
  middleware3: Middleware<Ext3, S, any>,
  middleware4: Middleware<Ext4, S, any>
): StoreEnhancer<{ dispatch: Ext1 & Ext2 & Ext3 & Ext4 }>
export default function applyMiddleware<Ext1, Ext2, Ext3, Ext4, Ext5, S>(

```

---

## Assistant (Build · MiniMax M2.5 Free · 6.5s)



Here's how React apps integrate with Python backends:

## 1. **Frontend (React/TypeScript) makes HTTP calls**

```typescript
// React component calling Python backend
const response = await fetch(`${WEBUI_API_BASE_URL}/chats/new`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(data)
})
```

## 2. **Backend (Python/FastAPI) exposes REST endpoints**

```python
# FastAPI Python backend
from fastapi import FastAPI

app = FastAPI()

@app.post("/add_external_corpus")
async def add_external_corpus(request: Request):
    # handle request
    return {"status": "success"}, 200
```

## 3. **CORS Configuration (Critical for browser security)**

```python
# Python backend must allow React's origin
def configure_cors(app):
    environment = os.getenv("ENVIRONMENT")
    if environment == "production":
        allowed_origins = ["https://your-domain.com"]
    # FastAPI: app.add_middleware(CORSMiddleware, ...)
```

## 4. **Common Integration Patterns**

| Layer      | Tech Stack            | Purpose               |
| ---------- | --------------------- | --------------------- |
| Frontend   | React + TypeScript    | UI, fetch API calls   |
| API Client | axios or native fetch | HTTP requests         |
| Backend    | FastAPI/Flask         | REST endpoints        |
| Middleware | CORS                  | Cross-origin security |
| Auth       | Bearer tokens         | Stateless auth        |

## 5. **Development Proxy Setup**

In `vite.config.js` or `package.json`:
```json
{ "proxy": { "/api": "http://localhost:8000" } }
```

This proxies `/api/*` requests to Python backend during dev, avoiding CORS issues.

## Key Flow:
```
React App → fetch() → CORS headers → FastAPI/Flask → JSON response → React State
```

---

