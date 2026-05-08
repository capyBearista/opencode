# React and Python backend integration guide (fork #2)

**Session ID:** ses_1fb238932ffelHXVWflVUJSxso
**Created:** 5/7/2026, 7:53:37 PM
**Updated:** 5/7/2026, 7:53:51 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch.

---

## Assistant (Build · MiniMax M2.5 Free · 2.7s)






**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch('http://localhost",
  "language": "['TypeScript']",
  "max_matches": "5"
}
```

**Output:**
```
Repository: graphql-hive/SOFA
Path: tests/router.spec.ts
URL: https://github.com/graphql-hive/SOFA/blob/master/tests/router.spec.ts
License: MIT

Snippets:
--- Snippet 1 (Line 27) ---
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/user/test-id');
  expect(res.status).toBe(200);
  const resBody = await res.json();
  expect(resBody).toEqual(testUser);
  expect((spy.mock.calls[0] as any[])[1]).toEqual({ id: 'test-id' });
});


--- Snippet 2 (Line 114) ---
        },
      },
    }),
  });

  const res = await sofa.fetch('http://localhost:4000/api/add-random-food', {
    method: 'POST',
  });
  expect(res.status).toBe(200);

```

---

## Assistant (Build · MiniMax M2.5 Free · 1.7s)






**Tool: codesearch**

**Input:**
```json
{
  "query": "axios.post.*8000",
  "language": "['TypeScript']",
  "max_matches": "5"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 1.5s)






**Tool: codesearch**

**Input:**
```json
{
  "query": "await fetch.*api",
  "path": "**/src/**",
  "max_matches": "5"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 1.4s)









**Tool: codesearch**

**Input:**
```json
{
  "max_matches": "5",
  "query": "fetch\\(.*3000"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 1.2s)




Let me try a broader search:


**Tool: codesearch**

**Input:**
```json
{
  "max_matches": "5",
  "query": "flask",
  "path": "**/*.tsx"
}
```

**Output:**
```
No results found for your query.
```

---

## Assistant (Build · MiniMax M2.5 Free · 2.9s)



Based on my codesearch attempts, I didn't find direct examples in the indexed public repos. Here's a summary of common integration patterns:

## React + Python Backend Integration Patterns

### 1. **REST API (Most Common)**
```
React (Frontend)          Python (Backend)
    |                          |
<!-- table not formatted: invalid structure -->
    |-- GET/POST fetch() ----->|--> FastAPI/Flask/Django
    |<-- JSON response -------|
<!-- table not formatted: invalid structure -->

React code: fetch('http://localhost:8000/api/endpoint')
Python:   FastAPI() or Flask() returning jsonify()
```

### 2. **Typical Stack**
- **Frontend**: React + Axios or fetch API
- **Backend**: FastAPI, Flask, or Django REST Framework
- **Communication**: HTTP REST with JSON

### 3. **Code Example**
```typescript
// React
const response = await fetch('http://localhost:8000/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'test' })
});
const data = await response.json();
```

```python
# FastAPI
from fastapi import FastAPI
app = FastAPI()

@app.post("/users")
def create_user(user: User):
    return {"id": 1, "name": user.name}
```

### 4. **Alternative: GraphQL** (like the SOFA example found)
- Python: `graphene` or `ariadne` for GraphQL server
- React: Apollo Client to query Python GraphQL endpoint

### 5. **WebSocket** (for real-time)
- Python: `fastapi` with `websocket` or `socketio`
- React: native `WebSocket` or `socket.io-client`

The most common production pattern is REST over HTTP with JSON, typically running Python on port 8000/5000 and React dev server on 3000, with a proxy configured in `package.json` to avoid CORS during development.

---

