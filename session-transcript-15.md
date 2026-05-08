# React and Python backend integration guide (fork #6)

**Session ID:** ses_1fae67c83ffeFIdU1LhgO33uq0
**Created:** 5/7/2026, 9:00:18 PM
**Updated:** 5/7/2026, 9:13:07 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch tool.

---

## Assistant (Build · DeepSeek V4 Flash · 14.5s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(.*api",
  "language": "TypeScript",
  "useRegexp": true
}
```

**Output:**
```
Error executing query: missing closing ): `fetch(.*api`
```

**Tool: codesearch**

**Input:**
```json
{
  "query": "axios",
  "language": "TypeScript"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

**Tool: codesearch**

**Input:**
```json
{
  "query": "from fastapi import",
  "language": "Python"
}
```

**Output:**
```
Repository: fastapi/fastapi
Path: fastapi/applications.py
URL: https://github.com/fastapi/fastapi/blob/master/fastapi/applications.py
License: MIT

Snippets:
--- Snippet 1 (Line 1) ---
from collections.abc import Awaitable, Callable, Coroutine, Sequence
from enum import Enum
from typing import Annotated, Any, TypeVar

from annotated_doc import Doc
from fastapi import routing
from fastapi.datastructures import Default, DefaultPlaceholder
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
    websocket_request_validation_exception_handler,


--- Snippet 2 (Line 46) ---
    [FastAPI docs for First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/).

    ## Example

    ```python
    from fastapi import FastAPI

    app = FastAPI()
    ```

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "flask import",
  "language": "Python"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 5.4s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"react\" \"python\""
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 7.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "@app.route(",
  "language": "Python"
}
```

**Output:**
```
Repository: pallets/flask
Path: tests/type_check/typing_route.py
URL: https://github.com/pallets/flask/blob/main/tests/type_check/typing_route.py
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 16) ---
@app.route("/str")
def hello_str() -> str:
    return "<p>Hello, World!</p>"


@app.route("/bytes")
def hello_bytes() -> bytes:
    return b"<p>Hello, World!</p>"


@app.route("/json")
def hello_json() -> Response:
    return jsonify("Hello, World!")


@app.route("/json/dict")
def hello_json_dict() -> dict[str, t.Any]:
    return {"response": "Hello, World!"}


@app.route("/json/dict")

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "@router.get(",
  "language": "Python"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\": \"http",
  "language": "JSON"
}
```

**Output:**
```
Repository: sipeed/picoclaw
Path: web/frontend/src/i18n/locales/zh.json
URL: https://github.com/sipeed/picoclaw/blob/main/web/frontend/src/i18n/locales/zh.json
License: MIT

Snippets:
--- Snippet 1 (Line 280) ---
      "providerInvalid": "当前 Provider 无效，请重新选择一个受支持的 Provider。",
      "apiBase": "API Base URL",
      "apiKey": "API Key",
      "apiKeyPlaceholder": "请输入 API Key",
      "apiKeyPlaceholderSet": "留空保持原有 Key 不变",
      "proxy": "HTTP 代理",
      "proxyHint": "可选。例如 http://127.0.0.1:7890",
      "authMethod": "认证方式",
      "authMethodHint": "认证方式：oauth、token。留空表示使用 API Key 认证。",
      "authMethodManagedHint": "该 Provider 的认证方式由系统自动管理。",
      "connectMode": "连接模式",


--- Snippet 2 (Line 372) ---
      "appId": "App ID",
      "appSecret": "App Secret",
      "verificationToken": "Verification Token",
      "encryptKey": "Encrypt Key",
      "baseUrl": "API Base URL",
      "proxy": "HTTP 代理",
      "mentionOnly": "仅提及时响应",
      "typingEnabled": "输入中提示",
      "placeholderEnabled": "占位消息",

```

---

## Assistant (Build · DeepSeek V4 Flash · 5.8s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "BASE_URL.*api",
  "language": "TypeScript"
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
  "query": "python.*flask.*react"
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
  "query": "FastAPI",
  "language": "Python",
  "repo": "tiangolo/fastapi"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 5.8s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"@api\" import",
  "language": "TypeScript"
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
  "query": "python manage.py runserver"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 10.5s)

The codesearch tool is hitting rate limits. Here's a summary of the standard integration patterns based on what I found and general knowledge:

## How React + Python backends integrate

The relationship is **HTTP-based** — they're separate processes communicating over the network.

### Common architectures

| Pattern          | Setup                                                                   |
| ---------------- | ----------------------------------------------------------------------- |
| **Separate servers** | React dev server (port 3000) + Python API server (port 8000)            |
| **Proxied**          | React dev server proxies `/api/*` to Python backend                       |
| **Static build**     | `npm run build` produces static HTML/JS, served by Python (Flask/FastAPI) |
| **Monorepo**         | Both in one repo, separate `Dockerfile` stages or `docker-compose`          |

### The three main Python frameworks used

- **FastAPI** (`from fastapi import FastAPI`) — async, auto-docs, Pydantic validation, most popular for new projects
- **Flask** (`@app.route("/json")`) — lightweight, huge ecosystem, very widely deployed
- **Django** (`python manage.py`) — batteries-included, ORM, admin panel, more opinionated

### How React talks to Python

```tsx
// React side — plain fetch
const data = await fetch("/api/items").then(r => r.json())

// Or with a base URL in env
const API = import.meta.env.VITE_API_URL || "http://localhost:8000"
fetch(`${API}/items`)
```

```python
# Python side — FastAPI example
from fastapi import FastAPI
app = FastAPI()

@app.get("/api/items")
def list_items():
    return [{"id": 1, "name": "foo"}]
```

### The proxy trick (dev mode)

In `package.json` or `vite.config.ts`:

```json
// React dev server forwards /api/* to Python
{ "proxy": "http://localhost:8000" }
```

```ts
// Vite equivalent
export default defineConfig({
  server: { proxy: { "/api": "http://localhost:8000" } }
})
```

This lets React use relative URLs (`/api/items`) during development — no CORS headaches.

### Production

Build React into static files, serve them from Python:

```python
from fastapi.staticfiles import StaticFiles
app.mount("/", StaticFiles(directory="dist", html=True), name="static")
```

Both processes typically sit behind **nginx** or **Caddy** in production with proper CORS headers if accessing the API from a different origin.

---

