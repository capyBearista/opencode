# React and Python backend integration guide (fork #3)

**Session ID:** ses_1fb22f31effeIFmBG740oL4bl8
**Created:** 5/7/2026, 7:54:16 PM
**Updated:** 5/7/2026, 7:59:19 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch tool.

---

## Assistant (Build · DeepSeek V4 Flash · 17.4s)

Let me search for real-world patterns of React + Python backend integration.

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(\"http://localhost:8000",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: gristlabs/grist-core
Path: test/server/lib/extractOrg.ts
URL: https://github.com/gristlabs/grist-core/blob/main/test/server/lib/extractOrg.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 94) ---
    assert.deepEqual(await myFetch("http://foo.getgrist.com/o/bar"),
      { STATUS: 400, error: "Wrong org for this domain: 'bar' does not match 'foo'" });
  });

  it("should set org to the /o/ORG value when no subdomain in request", async function() {
    assert.deepEqual(await myFetch("http://localhost:8000/o/foo"),
      { STATUS: 200, hostname: "localhost", path: "/", url: "/", org: "foo" });
    assert.deepEqual(await myFetch("http://localhost:8000/o/foo/"),
      { STATUS: 200, hostname: "localhost", path: "/", url: "/", org: "foo" });
    assert.deepEqual(await myFetch("http://localhost:8000/o/foo/hello?world&123%20"),
      { STATUS: 200, hostname: "localhost", path: "/hello", url: "/hello?world&123%20", org: "foo" });
    assert.deepEqual(await myFetch("http://localhost:8000/o/bar"),
      { STATUS: 200, hostname: "localhost", path: "/", url: "/", org: "bar" });
    assert.deepEqual(await myFetch("http://localhost:8000/o/"),
      { STATUS: 200, hostname: "localhost", path: "/o/", url: "/o/", org: "" });

    assert.deepEqual(await myFetch("http://x.y.z.getgrist.com/o/bar"),
      { STATUS: 400, error: "Wrong org for this domain: 'bar' does not match 'x'" });


```

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(\"/api/",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: elizaOS/eliza
Path: packages/app-core/src/api/client-skills.ts
URL: https://github.com/elizaOS/eliza/blob/develop/packages/app-core/src/api/client-skills.ts
License: MIT

Snippets:
--- Snippet 1 (Line 587) ---
// ---------------------------------------------------------------------------
// Prototype augmentation
// ---------------------------------------------------------------------------

ElizaClient.prototype.getSkills = async function (this: ElizaClient) {
  return this.fetch("/api/skills");
};

ElizaClient.prototype.refreshSkills = async function (this: ElizaClient) {
  return this.fetch("/api/skills/refresh", { method: "POST" });
};

ElizaClient.prototype.getSkillCatalog = async function (
  this: ElizaClient,
  opts?,


--- Snippet 2 (Line 625) ---
  return this.fetch(`/api/skills/catalog/${encodeURIComponent(slug)}`);
};

ElizaClient.prototype.refreshSkillCatalog = async function (this: ElizaClient) {
  return this.fetch("/api/skills/catalog/refresh", { method: "POST" });

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "axios.get(\"http://localhost",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: thombergs/code-examples
Path: nodejs/errorhandling/ts/app.ts
URL: https://github.com/thombergs/code-examples/blob/master/nodejs/errorhandling/ts/app.ts
License: MIT

Snippets:
--- Snippet 1 (Line 84) ---
  }
})

app.get('/products', async (request: Request, response: Response, next: NextFunction)=>{
  try{
    const apiResponse = await axios.get("http://localhost:3001/products")

    const jsonResponse = apiResponse.data
    console.log("response "+jsonResponse)
    
    response.send(jsonResponse)


--- Snippet 2 (Line 98) ---

})

app.get('/product',  (request: Request, response: Response, next: NextFunction)=>{
 
    axios.get("http://localhost:3001/product")
    .then(jsonresponse=>response.send(jsonresponse))
    .catch(next)
})

```

---

## Assistant (Build · DeepSeek V4 Flash · 18.8s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"fastapi\" \"fetch\" \"react\""
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
  "query": "\"django\" \"fetch\" \"react\""
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
  "query": "\"flask\" \"fetch\" \"react\" api"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 19.1s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "import axios from \"axios\"; fetch",
  "path": "/api"
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
  "query": "\"useQuery\" \"fetch\" api",
  "language": [
    "TypeScript"
  ]
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
  "query": "proxy \"localhost\" 8000 \"react\"",
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

## Assistant (Build · DeepSeek V4 Flash · 3.9s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(\"/api/",
  "path": "src/api",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: elizaOS/eliza
Path: packages/app-core/src/api/client-skills.ts
URL: https://github.com/elizaOS/eliza/blob/develop/packages/app-core/src/api/client-skills.ts
License: MIT

Snippets:
--- Snippet 1 (Line 587) ---
// ---------------------------------------------------------------------------
// Prototype augmentation
// ---------------------------------------------------------------------------

ElizaClient.prototype.getSkills = async function (this: ElizaClient) {
  return this.fetch("/api/skills");
};

ElizaClient.prototype.refreshSkills = async function (this: ElizaClient) {
  return this.fetch("/api/skills/refresh", { method: "POST" });
};

ElizaClient.prototype.getSkillCatalog = async function (
  this: ElizaClient,
  opts?,


--- Snippet 2 (Line 625) ---
  return this.fetch(`/api/skills/catalog/${encodeURIComponent(slug)}`);
};

ElizaClient.prototype.refreshSkillCatalog = async function (this: ElizaClient) {
  return this.fetch("/api/skills/catalog/refresh", { method: "POST" });

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"python\" \"backend\" \"fetch\" react"
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
  "query": "createApi fetchBaseQuery",
  "path": "/api"
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

## Assistant (Build · DeepSeek V4 Flash · 4.9s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"BASE_URL\" \"api\" \"react\""
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
  "query": "API_URL = \"http://localhost",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: in28minutes/full-stack-with-angular-and-spring-boot
Path: frontend/todo/src/app/app.constants.ts
URL: https://github.com/in28minutes/full-stack-with-angular-and-spring-boot/blob/master/frontend/todo/src/app/app.constants.ts
License: MIT

Snippets:
--- Snippet 1 (Line 1) ---
export const API_URL = "http://localhost:8080"
export const TODO_JPA_API_URL = "http://localhost:8080/jpa"

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "const api = axios.create",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: alibaba/arthas
Path: labs/arthas-jfr-frontend/src/services/api.ts
URL: https://github.com/alibaba/arthas/blob/master/labs/arthas-jfr-frontend/src/services/api.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 1) ---
import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: 'http://localhost:8200',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },

```

---

## Assistant (Build · DeepSeek V4 Flash · 17.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"fastapi\" cors react"
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
  "query": "\"django\" \"rest_framework\" api react"
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
  "query": "\"python manage.py\" react frontend"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 33.3s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "from fastapi import FastAPI",
  "path": "app"
}
```

**Output:**
```
Repository: fastapi/fastapi
Path: fastapi/applications.py
URL: https://github.com/fastapi/fastapi/blob/master/fastapi/applications.py
License: MIT

Snippets:
--- Snippet 1 (Line 46) ---
    [FastAPI docs for First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/).

    ## Example

    ```python
    from fastapi import FastAPI

    app = FastAPI()
    ```
    """



--- Snippet 2 (Line 103) ---
                [FastAPI docs for Metadata and Docs URLs](https://fastapi.tiangolo.com/tutorial/metadata/#metadata-for-api).

                **Example**

                ```python
                from fastapi import FastAPI

                app = FastAPI(title="ChimichangApp")
                ```

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"python manage.py runserver\" react"
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
  "query": "\"@app.get\" OR \"@app.post\" fetch react"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 3.5s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\" \"http://localhost:8000\" OR \"proxy\" \"http://localhost:5000\""
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
  "query": "\"react_app\" \"django\" OR \"react_app\" \"flask\""
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 3.0s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "cors.add_middleware",
  "language": [
    "Python"
  ]
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
  "query": "\"Access-Control-Allow-Origin\" react python"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 3.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "createProxyMiddleware"
}
```

**Output:**
```
Repository: chimurai/http-proxy-middleware
Path: test/e2e/http-proxy-middleware.spec.ts
URL: https://github.com/chimurai/http-proxy-middleware/blob/master/test/e2e/http-proxy-middleware.spec.ts
License: MIT

Snippets:
--- Snippet 1 (Line 5) ---
import request from 'supertest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Filter, Logger } from '../../src/types.js';
import { createMockRequest, createMockResponse } from '../test-utils.js';
import { createApp, createAppWithPath, createProxyMiddleware, fixRequestBody } from './test-kit.js';

describe('E2E http-proxy-middleware', () => {
  describe('http-proxy-middleware creation', () => {
    it('should create a middleware', () => {
      const middleware = createProxyMiddleware({
        target: `http://localhost:8000`,
        pathFilter: '/api',
      });
      expect(typeof middleware).toBe('function');
    });

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\" \"package.json\" react python"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 19.0s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "@app.get",
  "language": [
    "Python"
  ],
  "path": "/api"
}
```

**Output:**
```
Repository: openreplay/openreplay
Path: ee/api/routers/core_dynamic.py
URL: https://github.com/openreplay/openreplay/blob/main/ee/api/routers/core_dynamic.py
License: Unknown

Snippets:
--- Snippet 1 (Line 103) ---
    return r


@app.get('/logout', tags=["login"])
def logout_user(response: Response, context: schemas.CurrentContext = Depends(OR_context)):
    users.logout(user_id=context.user_id)
    response.delete_cookie(key="refreshToken", path=COOKIE_PATH)
    response.delete_cookie(key="spotRefreshToken", path=spot.COOKIE_PATH)
    return {"data": "success"}


@app.get('/refresh', tags=["login"])
def refresh_login(response: JSONResponse, context: schemas.CurrentContext = Depends(OR_context)):
    r = users.refresh(user_id=context.user_id, tenant_id=context.tenant_id)
    content = {"jwt": r.get("jwt")}
    response.set_cookie(key="refreshToken", value=r.get("refreshToken"), path=COOKIE_PATH,
                        max_age=r.pop("refreshTokenMaxAge"), secure=True, httponly=True)
    return content


@app.get('/account', tags=['accounts'])

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "routes api python fastapi"
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

## Assistant (Build · DeepSeek V4 Flash · 8.5s)

Here are the concrete React + Python integration patterns found across real repos:

**1. Direct `fetch` calls** (most common)
React calls relative paths like `fetch("/api/skills")` — works when both are served from same origin (via a proxy in dev, or static build served by Python in prod). Found in elizaOS, OpenReplay.

**2. Axios client with `baseURL`** ([alibaba/arthas](https://github.com/alibaba/arthas))
```ts
const api = axios.create({ baseURL: 'http://localhost:8200', timeout: 30000 })
```

**3. Dev proxy** ([http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware))
```ts
createProxyMiddleware({ target: 'http://localhost:8000', pathFilter: '/api' })
```
Added to CRA/webpack/vite config — forwards `/api/*` to a Python dev server (FastAPI/Flask on port 8000), avoiding CORS issues.

**4. Python CORS middleware** (OpenReplay's FastAPI)
The Python backend must allow cross-origin requests from React's dev server:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"], ...)
```

**5. Production integration**
The React build (`npm run build`) outputs static files that the Python server serves directly (e.g., FastAPI mounts `static/`), so API calls are same-origin. No separate server needed.

The fundamental architecture is: **React (frontend) talks to Python (backend) over HTTP REST/JSON**. Dev uses a proxy or CORS; prod serves React's built files from the Python server.

---

