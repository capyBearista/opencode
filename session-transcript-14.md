# React and Python backend integration guide (fork #4)

**Session ID:** ses_1fb1e1f7fffeqq71SJJXmg1Tmc
**Created:** 5/7/2026, 7:59:32 PM
**Updated:** 5/7/2026, 8:01:27 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch tool.

---

## Assistant (Build · DeepSeek V4 Flash · 19.1s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(\"http://localhost:5000",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: mendableai/rag-arena
Path: app/actions/playground.ts
URL: https://github.com/mendableai/rag-arena/blob/master/app/actions/playground.ts
License: MIT

Snippets:
--- Snippet 1 (Line 2) ---

export async function splitText(text: string, splitOption: number) {
    try {


        const response = await fetch("http://localhost:5000/python/split-text", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, splitOption }),


--- Snippet 2 (Line 22) ---
    }

}

export async function getVectorStores(splitResult: string[], selectedVectorStore: string) {
    const response = await fetch("http://localhost:5000/python/vector-stores");
    return await response.json();
}

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "axios.post(\"http://localhost:8000",
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
  "query": "proxy.*localhost.*5000",
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

## Assistant (Build · DeepSeek V4 Flash · 19.3s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "proxy.*api.*python",
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

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\":",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
Repository: zotero/translators
Path: ScienceDirect.js
URL: https://github.com/zotero/translators/blob/master/ScienceDirect.js
License: Unknown

Snippets:
--- Snippet 1 (Line 578) ---
						"mimeType": "text/html"
					},
					{
						"title": "ScienceDirect Full Text PDF",
						"mimeType": "application/pdf",
						"proxy": false
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []


--- Snippet 2 (Line 646) ---
						"mimeType": "text/html"
					},
					{
						"title": "ScienceDirect Full Text PDF",
						"mimeType": "application/pdf",
						"proxy": false
					}
				],
				"tags": [

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch.*/api.*python",
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

## Assistant (Build · DeepSeek V4 Flash · 19.4s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "react.*flask",
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

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\": \"http://localhost",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
Repository: code-yeongyu/oh-my-openagent
Path: src/features/builtin-skills/skills/playwright.ts
URL: https://github.com/code-yeongyu/oh-my-openagent/blob/dev/src/features/builtin-skills/skills/playwright.ts
License: Unknown

Snippets:
--- Snippet 1 (Line 323) ---
4. CLI flags override everything

\`\`\`json
{
  "headed": true,
  "proxy": "http://localhost:8080",
  "profile": "./browser-data",
  "native": true
}
\`\`\`


```

**Tool: codesearch**

**Input:**
```json
{
  "query": "from fastapi import",
  "language": [
    "Python"
  ],
  "path": "frontend"
}
```

**Output:**
```
Repository: NVIDIA-AI-Blueprints/aiq
Path: frontends/aiq_api/src/aiq_api/routes/documents.py
URL: https://github.com/NVIDIA-AI-Blueprints/aiq/blob/develop/frontends/aiq_api/src/aiq_api/routes/documents.py
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 18) ---
import logging
import os
import tempfile
from typing import Any

from fastapi import APIRouter
from fastapi import Depends
from fastapi import File
from fastapi import HTTPException
from fastapi import UploadFile

from aiq_agent.knowledge.base import BaseIngestor
from aiq_agent.knowledge.schema import FileInfo
from aiq_agent.knowledge.schema import IngestionJobStatus


```

---

## Assistant (Build · DeepSeek V4 Flash · 33.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "from flask import Flask",
  "language": [
    "Python"
  ]
}
```

**Output:**
```
Repository: open-jarvis/OpenJarvis
Path: src/openjarvis/evals/datasets/security_scanner.py
URL: https://github.com/open-jarvis/OpenJarvis/blob/main/src/openjarvis/evals/datasets/security_scanner.py
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 36) ---

_EASY_TASKS: List[Dict[str, Any]] = [
    {
        "project_files": {
            "app.py": (
                "from flask import Flask, request\n"
                "import sqlite3\n\n"
                "app = Flask(__name__)\n\n"
                "@app.route('/user')\n"
                "def get_user():\n"
                "    uid = request.args.get('id')\n"


--- Snippet 2 (Line 144) ---
        "safe_patterns": ["verify_password comparison logic"],
    },
    {
        "project_files": {
            "api.py": (
                "import pickle\nfrom flask import Flask, request\n\n"
                "app = Flask(__name__)\n\n"
                "@app.route('/load', methods=['POST'])\n"
                "def load_data():\n"

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "from rest_framework import",
  "language": [
    "Python"
  ]
}
```

**Output:**
```
Repository: ansible/awx
Path: awx/api/metadata.py
URL: https://github.com/ansible/awx/blob/devel/awx/api/metadata.py
License: Unknown

Snippets:
--- Snippet 1 (Line 12) ---
from django.http import Http404
from django.utils.encoding import force_str, smart_str
from django.utils.translation import gettext_lazy as _

# Django REST Framework
from rest_framework import exceptions
from rest_framework import metadata
from rest_framework import serializers
from rest_framework.relations import RelatedField, ManyRelatedField
from rest_framework.fields import JSONField as DRFJSONField
from rest_framework.request import clone_request

# AWX


--- Snippet 2 (Line 276) ---
                if type(field) is ImplicitRoleField:
                    roles.append(field.name)
        if len(roles) > 0:
            metadata['object_roles'] = roles

        from rest_framework import generics


```

**Tool: codesearch**

**Input:**
```json
{
  "query": "createProxyMiddleware",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
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
  "query": "@app.route",
  "language": [
    "Python"
  ]
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

---

## Assistant (Build · DeepSeek V4 Flash · 5.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "vite.*proxy.*api",
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

**Tool: codesearch**

**Input:**
```json
{
  "query": "import.*python.*backend",
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

**Tool: codesearch**

**Input:**
```json
{
  "query": "flask-cors",
  "language": [
    "Python"
  ]
}
```

**Output:**
```
Repository: corydolphin/flask-cors
Path: examples/view_based_example.py
URL: https://github.com/corydolphin/flask-cors/blob/main/examples/view_based_example.py
License: MIT

Snippets:
--- Snippet 1 (Line 1) ---
"""
Flask-Cors example
===================
This is a tiny Flask Application demonstrating Flask-Cors, making it simple
to add cross origin support to your flask app!

:copyright: (c) 2016 by Cory Dolphin.
:license:   MIT/X11, see LICENSE for more details.
"""
from flask import Flask, jsonify
import logging
try:
    # The typical way to import flask-cors
    from flask_cors import cross_origin
except ImportError:
    # Path hack allows examples to be run without installation.
    import os
    parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

```

---

## Assistant (Build · DeepSeek V4 Flash · 4.0s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "\"proxy\": \"http://localhost",
  "language": [
    "JSON"
  ]
}
```

**Output:**
```
Repository: eugenp/tutorials
Path: spring-boot-modules/spring-boot-react/frontend/package.json
URL: https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/package.json
License: MIT

Snippets:
--- Snippet 1 (Line 31) ---
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:8080",
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "from fastapi.middleware.cors import",
  "language": [
    "Python"
  ]
}
```

**Output:**
```
Repository: kvcache-ai/ktransformers
Path: archive/kt-sft/ktransformers/server/main.py
URL: https://github.com/kvcache-ai/ktransformers/blob/main/archive/kt-sft/ktransformers/server/main.py
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 4) ---
from fastapi.staticfiles import StaticFiles
import uvicorn.logging
import uvicorn
import sys
project_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
from fastapi.middleware.cors import CORSMiddleware
from ktransformers.server.args import ArgumentParser
from ktransformers.server.config.config import Config
from ktransformers.server.utils.create_interface import create_interface, GlobalInterface
from fastapi.openapi.utils import get_openapi
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ktransformers.server.api import router, post_db_creation_operations
from ktransformers.server.utils.sql_utils import Base, SQLUtil
from ktransformers.server.config.log import logger



```

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch.*api.*route",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · DeepSeek V4 Flash · 4.8s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "axios.get.*api.*django",
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

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch('/api",
  "language": [
    "TypeScript",
    "JavaScript"
  ]
}
```

**Output:**
```
Repository: SillyTavern/SillyTavern
Path: public/scripts/extensions/stable-diffusion/index.js
URL: https://github.com/SillyTavern/SillyTavern/blob/release/public/scripts/extensions/stable-diffusion/index.js
License: AGPL-3.0

Snippets:
--- Snippet 1 (Line 1352) ---
    try {
        if (!extension_settings.sd.auto_url) {
            throw new Error('URL is not set.');
        }

        const result = await fetch('/api/sd/ping', {
            method: 'POST',
            headers: getRequestHeaders(),
            body: JSON.stringify(getSdRequestBody()),
        });



--- Snippet 2 (Line 1375) ---
    try {
        if (!extension_settings.sd.sdcpp_url) {
            throw new Error('URL is not set.');
        }

        const result = await fetch('/api/sd/sdcpp/ping', {
            method: 'POST',
            headers: getRequestHeaders(),
            body: JSON.stringify({ url: extension_settings.sd.sdcpp_url }),

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "python manage.py runserver",
  "language": [
    "Shell",
    "Python"
  ]
}
```

**Output:**
```
Repository: django/django
Path: scripts/verify_release.sh
URL: https://github.com/django/django/blob/main/scripts/verify_release.sh
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 76) ---
python -m pip install --no-cache-dir "${WORKDIR}/${PKG_TAR}"
django-admin startproject test_tarball
cd test_tarball
./manage.py --help  # Ensure executable bits
python manage.py migrate
python manage.py runserver 0
deactivate
cd ..

echo "Testing wheel install ..."
python3 -m venv django-pip-wheel


--- Snippet 2 (Line 88) ---
python -m pip install --no-cache-dir "${WORKDIR}/${PKG_WHL}"
django-admin startproject test_wheel
cd test_wheel
./manage.py --help  # Ensure executable bits
python manage.py migrate
python manage.py runserver 0
deactivate

```

---

## Assistant (Build · DeepSeek V4 Flash · 8.1s)

Here are the real-world patterns I found for React + Python backend integration:

**Pattern 1: Direct `fetch` to Python server** (`mendableai/rag-arena`)
React calls the Python backend directly via `fetch` to `http://localhost:5000`:

```ts
fetch("http://localhost:5000/python/split-text", { method: "POST", body: ... })
fetch("http://localhost:5000/python/vector-stores")
```

The Python side typically runs Flask or FastAPI with CORS enabled.

**Pattern 2: Proxy in `package.json`** (`eugenp/tutorials`)
Create React App proxies `/api/*` requests to the backend during dev:

```json
{
  "proxy": "http://localhost:8080"
}
```

This way React fetches `fetch('/api/...')` and CRA forwards to `localhost:8080` — no CORS needed in dev.

**Pattern 3: Vite `createProxyMiddleware`** (`chimurai/http-proxy-middleware`)
Vite/Express projects use `http-proxy-middleware` to proxy `/api` to the Python server:

```ts
createProxyMiddleware({ target: "http://localhost:8000", pathFilter: "/api" })
```

**Pattern 4: CORS on the Python side** (`kvcache-ai/ktransformers`, `flask-cors`)
FastAPI adds CORS middleware; Flask uses `flask-cors`:

```py
from fastapi.middleware.cors import CORSMiddleware
# or
from flask_cors import cross_origin
```

**Pattern 5: Django REST Framework** (`ansible/awx`)
Python serves a proper REST API via Django REST Framework (`rest_framework`), and React calls it like any REST API.

---

The three key approaches:
1. **Proxy (dev)** — React dev server proxies `/api` → Python backend (avoids CORS)
2. **Direct fetch + CORS (prod)** — React calls Python directly, Python enables CORS
3. **Same-origin** — Python serves the React build as static files from the same port

---

