# React and Python backend integration guide (fork #4)

**Session ID:** ses_1fb6ea3aeffeeUN72bFYehRmgE
**Created:** 5/7/2026, 6:31:35 PM
**Updated:** 5/7/2026, 6:33:05 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch.

---

## Assistant (Build · MiniMax M2.5 Free · 19.4s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "import axios from",
  "language": [
    "TypeScript"
  ]
}
```

**Output:**
```
Repository: PipedreamHQ/pipedream
Path: packages/prompts/src/index.ts
URL: https://github.com/PipedreamHQ/pipedream/blob/master/packages/prompts/src/index.ts
License: Unknown

Snippets:
--- Snippet 1 (Line 355) ---

`;

  const pipedreamPlatformAxiosTypeDefs = `@pipedream/platform axios TypeScript types:
  
import axios from "axios";
import { AxiosRequestConfig as AxiosConfig } from "axios";

interface AxiosRequestConfig extends AxiosConfig {
  debug?: boolean;
  body?: any;


--- Snippet 2 (Line 429) ---

import { axios } from "@pipedream/platform";

You MUST use that import format when importing axios. Do NOT attempt to import any other package like \`import axios from "@pipedream/platform/axios"\`

The \`axios\` constructor takes two arguments:

1. \`this\` - the \`this\` context of the component.

```

---

## Assistant (Build · MiniMax M2.5 Free · 22.0s)



Let me search with different patterns to find React-Python integrations:


**Tool: codesearch**

**Input:**
```json
{
  "matchWholeWords": true,
  "path": "src",
  "query": "fetch\\(.*python"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 3.1s)



Let me search for common REST API patterns used to connect React frontend to Python backend:



**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript",
    "JavaScript"
  ],
  "matchWholeWords": true,
  "query": "process.env.REACT_APP_API"
}
```

**Output:**
```
Repository: panshak/accountill
Path: client/src/components/InvoiceDetails/InvoiceDetails.js
URL: https://github.com/panshak/accountill/blob/master/client/src/components/InvoiceDetails/InvoiceDetails.js
License: MIT

Snippets:
--- Snippet 1 (Line 116) ---
    history.push(`/edit/invoice/${id}`)
  }

  const createAndDownloadPdf = () => {
    setDownloadStatus('loading')
    axios.post(`${process.env.REACT_APP_API}/create-pdf`, 
    { name: invoice.client.name,
      address: invoice.client.address,
      phone: invoice.client.phone,
      email: invoice.client.email,
      dueDate: invoice.dueDate,


--- Snippet 2 (Line 135) ---
      status: invoice.status,
      totalAmountReceived: toCommas(totalAmountReceived),
      balanceDue: toCommas(total - totalAmountReceived),
      company: company,
  })
      .then(() => axios.get(`${process.env.REACT_APP_API}/fetch-pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });


```

---

## Assistant (Build · MiniMax M2.5 Free · 2.3s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "JavaScript"
  ],
  "query": "fetch\\(.*FastAPI"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.7s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript",
    "JavaScript"
  ],
  "matchWholeWords": true,
  "query": "axios.post\\(`"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 7.3s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "JavaScript",
    "TypeScript"
  ],
  "query": "useEffect",
  "repo": "paniesheck"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 16.9s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "React.useEffect"
}
```

**Output:**
```
Repository: bigbluebutton/bigbluebutton
Path: bigbluebutton-html5/imports/ui/components/whiteboard/component.jsx
URL: https://github.com/bigbluebutton/bigbluebutton/blob/v3.0.x-develop/bigbluebutton-html5/imports/ui/components/whiteboard/component.jsx
License: LGPL-3.0

Snippets:
--- Snippet 1 (Line 385) ---
  React.useEffect(() => {
    localStorage.setItem('pageZoomMap', JSON.stringify(pageZoomMap));
  }, [pageZoomMap]);

  React.useEffect(() => {
    currentPresentationPageRef.current = currentPresentationPage;
  }, [currentPresentationPage]);

  React.useEffect(() => {
    updateCursorZoomRef.current?.();
  }, [currentPresentationPage, presentationAreaWidth, presentationAreaHeight]);

  React.useEffect(() => {
    curPageIdRef.current = curPageId;
  }, [curPageId]);

  React.useEffect(() => {
    isModeratorRef.current = isModerator;
  }, [isModerator]);

  React.useEffect(() => {

```

---

## Assistant (Build · MiniMax M2.5 Free · 2.4s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "Python"
  ],
  "matchCase": true,
  "query": "@app.route.*api"
}
```

**Output:**
```
No results found for your query.
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
  "query": "from fastapi import FastAPI"
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

---

## Assistant (Build · MiniMax M2.5 Free · 2.2s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript"
  ],
  "matchWholeWords": true,
  "query": "useFetch"
}
```

**Output:**
```
Repository: conductor-oss/conductor
Path: ui-next/src/utils/query.ts
URL: https://github.com/conductor-oss/conductor/blob/main/ui-next/src/utils/query.ts
License: Apache-2.0

Snippets:
--- Snippet 1 (Line 87) ---
}

// FetchError is any Response-like object with status - kept permissive for backward compatibility
type FetchError = any;

/** Options for {@link useFetch} — extends react-query options with enterprise API gating. */
export type UseFetchQueryOptions<T = unknown> = Partial<
  UseQueryOptions<T, FetchError>
> & {
  /** When set, request runs only if this feature flag is on (AND with normal fetch/auth readiness). */
  enterpriseApiFeature?: string;


--- Snippet 2 (Line 105) ---
export const STALE_TIME_SECRET_NAMES = 60000; // 1 min
export const STALE_TIME_SEARCH = 60000; // 1 min
export const DEFAULT_STALE_TIME = 5000; // 5 Seconds
export const AUTH_HEADER_NAME = "X-Authorization";

/** Same predicate as the default `enabled` option inside {@link useFetch} (fetch ready + auth rules). */
export function computeFetchBaseEnabled(
  fetchContext: { ready: boolean },
  headers: AuthHeaders,

```

---

## Assistant (Build · MiniMax M2.5 Free · 2.2s)

**Tool: codesearch**

**Input:**
```json
{
  "language": [
    "TypeScript",
    "JavaScript"
  ],
  "query": "python"
}
```

**Output:**
```
Repository: freeCodeCamp/freeCodeCamp
Path: packages/shared/src/config/curriculum.ts
URL: https://github.com/freeCodeCamp/freeCodeCamp/blob/main/packages/shared/src/config/curriculum.ts
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 12) ---
  DataVis = 'data-visualization',
  RelationalDb = 'relational-database',
  BackEndDevApis = 'back-end-development-and-apis',
  QualityAssurance = 'quality-assurance',
  SciCompPy = 'scientific-computing-with-python',
  DataAnalysisPy = 'data-analysis-with-python',
  InfoSec = 'information-security',
  MachineLearningPy = 'machine-learning-with-python',
  CodingInterviewPrep = 'coding-interview-prep',
  TheOdinProject = 'the-odin-project',
  ProjectEuler = 'project-euler',
  CollegeAlgebraPy = 'college-algebra-with-python',
  FoundationalCSharp = 'foundational-c-sharp-with-microsoft',
  A2English = 'a2-english-for-developers',
  B1English = 'b1-english-for-developers',
  A1Spanish = 'a1-professional-spanish',
  A2Spanish = 'a2-professional-spanish',
  A2Chinese = 'a2-professional-chinese',
  A1Chinese = 'a1-professional-chinese',
  RosettaCode = 'rosetta-code',
  PythonForEverybody = 'python-for-everybody',

```

---

## Assistant (Build · MiniMax M2.5 Free · 3.9s)



Based on my searches, here's how React apps integrate with Python backends:

## Typical Integration Pattern

**1. React Frontend → HTTP Requests**
```javascript
// React calls Python backend via REST API
axios.post(`${process.env.REACT_APP_API}/create-pdf`, { ...data })
axios.get(`${process.env.REACT_APP_API}/fetch-pdf`)
```

**2. Environment Configuration**
React stores the Python backend URL in `.env`:
```
REACT_APP_API=http://localhost:8000/api
```

**3. Python Backend (FastAPI/Flask)**
Exposes REST endpoints that React consumes:
```python
from fastapi import FastAPI
app = FastAPI()

@app.post("/api/create-pdf")
def create_pdf(data: dict):
    # Generate PDF, return result
    return {"url": "/pdfs/result.pdf"}
```

## Key Points

- **HTTP is the bridge**: React uses `fetch` or `axios` to make REST calls to Python APIs
- **JSON communication**: Data serialize/deserialize as JSON between React and Python
- **CORS handling**: Python backend configures Cross-Origin Resource Sharing to allow React origin
- **Same-hosting for production**: Often proxy React dev server to Python backend in dev, or serve both behind Nginx in production

The architecture is simply: **React (frontend) ←HTTP/REST→ Python (backend: FastAPI/Flask/Django)**.

---

