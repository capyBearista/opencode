# React and Python backend integration guide (fork #7)

**Session ID:** ses_1fad8a193ffecTNWDTJto7NI7D
**Created:** 5/7/2026, 9:15:26 PM
**Updated:** 5/7/2026, 9:17:59 PM

---

## User

Help me understand exactly how react apps integrate python backends. Use codesearch tool.

---

## Assistant (Build · DeepSeek V4 Flash · 7.9s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch(/api",
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
  "query": "axios.get",
  "language": "TypeScript"
}
```

**Output:**
```
Repository: danny-avila/LibreChat
Path: packages/api/src/endpoints/models.spec.ts
URL: https://github.com/danny-avila/LibreChat/blob/main/packages/api/src/endpoints/models.spec.ts
License: MIT

Snippets:
--- Snippet 1 (Line 40) ---
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
const { logAxiosError, resolveHeaders } = jest.requireMock('~/utils');

mockedAxios.get.mockResolvedValue({
  data: {
    data: [{ id: 'model-1' }, { id: 'model-2' }],
  },
});



--- Snippet 2 (Line 61) ---
      baseURL: 'https://api.test.com',
      name: 'TestAPI',
    });

    expect(models).toEqual(['model-1', 'model-2']);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('https://api.test.com/models'),
      expect.any(Object),
    );

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "proxy",
  "language": "TypeScript",
  "path": "vite.config.ts"
}
```

**Output:**
```
Repository: lobehub/lobehub
Path: vite.config.ts
URL: https://github.com/lobehub/lobehub/blob/canary/vite.config.ts
License: Unknown

Snippets:
--- Snippet 1 (Line 123) ---
    isDev && {
      name: 'lobe-dev-proxy-print',
      configureServer(server: ViteDevServer) {
        const ONLINE_HOST = 'https://app.lobehub.com';
        const c = {
          green: (s: string) => `\x1B[32m${s}\x1B[0m`,
          bold: (s: string) => `\x1B[1m${s}\x1B[0m`,
          cyan: (s: string) => `\x1B[36m${s}\x1B[0m`,
        };
        const { info } = server.config.logger;
        const isBundledDev = (server.config.experimental as any)?.bundledDev;

        const getProxyUrl = () => {
          const urls = server.resolvedUrls;
          if (!urls?.local?.[0]) return;
          const localHost = urls.local[0].replace(/\/$/, '');
          return `${ONLINE_HOST}/_dangerous_local_dev_proxy?debug-host=${encodeURIComponent(localHost)}`;
        };
        const printProxyUrl = () => {
          const proxyUrl = getProxyUrl();
          if (!proxyUrl) return;

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "fastapi",
  "language": "Python"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 6.1s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "flask",
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
  "query": "django",
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
  "query": "python",
  "language": "TypeScript",
  "path": "package.json"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 7.0s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "/api",
  "language": "TypeScript",
  "repo": "danny-avila/LibreChat"
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
  "query": "BASE_URL",
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
  "query": "react python",
  "path": "README.md"
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
  "query": "fetchAPI"
}
```

**Output:**
```
Repository: TryGhost/Ghost
Path: apps/admin-x-framework/src/utils/api/hooks.ts
URL: https://github.com/TryGhost/Ghost/blob/main/apps/admin-x-framework/src/utils/api/hooks.ts
License: MIT

Snippets:
--- Snippet 1 (Line 3) ---
import {useCallback, useEffect, useMemo, useState} from 'react';
import useHandleError from '../../hooks/use-handle-error';
import {usePermission} from '../../hooks/use-permissions';
import {UserRoleType} from '../../api/roles';
import {useFramework} from '../../providers/framework-provider';
import {RequestOptions, apiUrl, useFetchApi} from './fetch-api';

export interface Meta {
    pagination: {
        page: number;
        limit: number | 'all';


--- Snippet 2 (Line 38) ---
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const hasPermission = usePermission(options.permissions);

    const result = useQuery<ResponseData>({
        ...query,
        enabled: hasPermission && (query.enabled ?? true),
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url, {...options})

```

---

## Assistant (Build · DeepSeek V4 Flash · 6.4s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetch-api",
  "repo": "TryGhost/Ghost"
}
```

**Output:**
```
Repository: TryGhost/Ghost
Path: apps/admin-x-framework/src/hooks/use-koenig-fetch-embed.ts
URL: https://github.com/TryGhost/Ghost/blob/main/apps/admin-x-framework/src/hooks/use-koenig-fetch-embed.ts
License: MIT

Snippets:
--- Snippet 1 (Line 1) ---
import {useCallback} from 'react';
import {getGhostPaths} from '../utils/helpers';
import {useFetchApi} from '../utils/api/fetch-api';

interface KoenigFetchEmbedOptions {
    type?: string;
}


```

**Tool: codesearch**

**Input:**
```json
{
  "query": "apiUrl",
  "repo": "TryGhost/Ghost"
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
  "query": "python",
  "repo": "danny-avila/LibreChat"
}
```

**Output:**
```
Repository: danny-avila/LibreChat
Path: packages/data-provider/src/file-config.ts
URL: https://github.com/danny-avila/LibreChat/blob/main/packages/data-provider/src/file-config.ts
License: MIT

Snippets:
--- Snippet 1 (Line 37) ---
  'application/json',
  'text/markdown',
  'application/pdf',
  'text/x-php',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/x-python',
  'text/x-script.python',
  'text/x-ruby',
  'text/x-tex',
  'text/plain',
  'text/css',
  'text/calendar',


--- Snippet 2 (Line 102) ---
  'application/json',
  'text/markdown',
  'application/pdf',
  'text/x-php',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/x-python',
  'text/x-script.python',
  'text/x-ruby',

```

---

## Assistant (Build · DeepSeek V4 Flash · 5.7s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "class FetchApi"
}
```

**Output:**
```
Repository: ovh/cds
Path: ui/src/app/store/config.action.ts
URL: https://github.com/ovh/cds/blob/master/ui/src/app/store/config.action.ts
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 1) ---
export class FetchAPIConfig {
    static readonly type = '[Config] Fetch API config';

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "fetchApi"
}
```

**Output:**
```
Repository: TryGhost/Ghost
Path: apps/admin-x-framework/src/utils/api/hooks.ts
URL: https://github.com/TryGhost/Ghost/blob/main/apps/admin-x-framework/src/utils/api/hooks.ts
License: MIT

Snippets:
--- Snippet 1 (Line 3) ---
import {useCallback, useEffect, useMemo, useState} from 'react';
import useHandleError from '../../hooks/use-handle-error';
import {usePermission} from '../../hooks/use-permissions';
import {UserRoleType} from '../../api/roles';
import {useFramework} from '../../providers/framework-provider';
import {RequestOptions, apiUrl, useFetchApi} from './fetch-api';

export interface Meta {
    pagination: {
        page: number;
        limit: number | 'all';


--- Snippet 2 (Line 38) ---
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const hasPermission = usePermission(options.permissions);

    const result = useQuery<ResponseData>({
        ...query,
        enabled: hasPermission && (query.enabled ?? true),
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url, {...options})

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "from flask import"
}
```

**Output:**
```
Repository: pallets/flask
Path: examples/tutorial/flaskr/auth.py
URL: https://github.com/pallets/flask/blob/main/examples/tutorial/flaskr/auth.py
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 1) ---
import functools

from flask import Blueprint
from flask import flash
from flask import g
from flask import redirect
from flask import render_template
from flask import request
from flask import session
from flask import url_for
from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash

from .db import get_db


```

---

## Assistant (Build · DeepSeek V4 Flash · 6.2s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "apps/admin-x-framework/src/utils/api/fetch-api",
  "repo": "TryGhost/Ghost",
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
  "query": "class FastAPI"
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
  "query": "from fastapi"
}
```

**Output:**
```
Repository: fastapi/fastapi
Path: fastapi/applications.py
URL: https://github.com/fastapi/fastapi/blob/master/fastapi/applications.py
License: MIT

Snippets:
--- Snippet 1 (Line 4) ---

from annotated_doc import Doc
from fastapi import routing
from fastapi.datastructures import Default, DefaultPlaceholder
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
    websocket_request_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError, WebSocketRequestValidationError
from fastapi.logger import logger
from fastapi.middleware.asyncexitstack import AsyncExitStackMiddleware
from fastapi.openapi.docs import (
    get_redoc_html,
    get_swagger_ui_html,
    get_swagger_ui_oauth2_redirect_html,
)
from fastapi.openapi.utils import get_openapi
from fastapi.params import Depends
from fastapi.types import DecoratedCallable, IncEx
from fastapi.utils import generate_unique_id

```

---

## Assistant (Build · DeepSeek V4 Flash · 6.7s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "export function useFetchApi"
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
  "query": "export const apiUrl"
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
  "query": "python manage.py",
  "repo": "danny-avila/LibreChat"
}
```

**Output:**
```
Unexpected token 'T', "Too Many R"... is not valid JSON
```

---

## Assistant (Build · DeepSeek V4 Flash · 65.4s)

**Tool: gemini-researcher_deep_research**

**Input:**
```json
{
  "prompt": "Find and analyze how React apps communicate with Python backends by looking at the Ghost CMS codebase (https://github.com/TryGhost/Ghost). Ghost uses React for its admin frontend and a Django-like Python backend. Specifically look at the fetch-api module in `apps/admin-x-framework/src/utils/api/fetch-api.ts` and the hooks in `apps/admin-x-framework/src/utils/api/hooks.ts`. Also look for:\n1. How the API base URL is configured\n2. How requests are made (fetch, axios, etc.)\n3. How authentication tokens are attached\n4. How error handling works\n5. How the proxy/CORS setup works in development\n\nReturn the full content of fetch-api.ts and hooks.ts, plus any other relevant API integration files.",
  "citationMode": "paths_only"
}
```

**Error:**
```
MCP error -32001: Request timed out
```

---

## Assistant (Build · DeepSeek V4 Flash · 3.6s)

**Tool: webfetch**

**Input:**
```json
{
  "url": "https://raw.githubusercontent.com/TryGhost/Ghost/main/apps/admin-x-framework/src/utils/api/fetch-api.ts"
}
```

**Output:**
```
import * as Sentry from '@sentry/react';
import {useFramework} from '../../providers/framework-provider';
import {APIError, MaintenanceError, ServerUnreachableError, TimeoutError} from '../errors';
import {getGhostPaths} from '../helpers';
import handleResponse from './handle-response';

export interface RequestOptions {
    method?: string;
    body?: string | FormData;
    headers?: {
        'Content-Type'?: string;
    };
    credentials?: 'include' | 'omit' | 'same-origin';
    timeout?: number;
    retry?: boolean;
    onUploadProgress?: (progress: number) => void;
}

type InternalRequestInit = Required<
    Pick<RequestInit, 'method' | 'credentials' | 'mode'>
> & {
    headers: Record<string, string>;
    body: undefined | null | string | FormData;
    signal: AbortSignal;
};

const xhrHeadersToFetchHeaders = (xhr: Readonly<XMLHttpRequest>): Headers => {
    const result = new Headers();
    const headerLines = xhr.getAllResponseHeaders()?.split('\r\n') || [];
    for (const headerLine of headerLines) {
        // See the "Field Syntax" section of [the HTTP 1.1 spec][0].
        // [0]: https://datatracker.ietf.org/doc/html/rfc9112#name-field-syntax
        const separatorIndex = headerLine.indexOf(':');
        if (separatorIndex === -1) {
            continue;
        }
        const headerName = headerLine.slice(0, separatorIndex);
        const headerValue = headerLine.slice(separatorIndex + 1).trim();
        result.append(headerName, headerValue);
    }
    return result;
};

const xhrToFetchResponse = (xhr: Readonly<XMLHttpRequest>): Response => (
    new Response(xhr.response, {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: xhrHeadersToFetchHeaders(xhr)
    })
);

const fetchWithXhr = (
    onUploadProgress: (progress: number) => void,
    endpoint: string | URL,
    {method, headers, credentials, body, signal}: InternalRequestInit
): Promise<Response> => (
    new Promise((resolve, reject) => {
        const onabort = () => {
            reject(new DOMException('Aborted', 'AbortError'));
        };

        // It's possible that the signal is already aborted if this isn't the
        // first time the request was attempted.
        if (signal.aborted) {
            onabort();
            return;
        }

        const xhr = new XMLHttpRequest();

        xhr.open(method, endpoint.toString(), true);
        switch (credentials) {
        case 'omit':
            throw new Error(
                '"omit" credentials cannot be represented with legacy XMLHttpRequest. Consider "same-origin".'
            );
        case 'same-origin':
            xhr.withCredentials = false;
            break;
        case 'include':
            xhr.withCredentials = true;
            break;
        default:
            throw new Error(credentials satisfies never);
        }
        xhr.responseType = 'arraybuffer';

        for (const [headerName, headerValue] of Object.entries(headers)) {
            xhr.setRequestHeader(headerName, headerValue);
        }

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                onUploadProgress(progress);
            }
        };

        xhr.onload = () => {
            resolve(xhrToFetchResponse(xhr));
        };

        xhr.onerror = () => {
            // This is a TypeError in the Fetch API, so we copy that.
            reject(new TypeError('Network request failed'));
        };

        xhr.onabort = onabort;

        const onSignalAbort = () => xhr.abort();
        signal.addEventListener('abort', onSignalAbort);
        xhr.onloadend = () => {
            signal.removeEventListener('abort', onSignalAbort);
        };

        xhr.send(body);
    })
);

export const useFetchApi = () => {
    const {ghostVersion, sentryDSN} = useFramework();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async <ResponseData = any>(
        endpoint: string | URL,
        {
            method = 'GET',
            headers = {},
            body,
            credentials = 'include',
            timeout,
            retry = true,
            onUploadProgress
        }: RequestOptions = {}
    ): Promise<ResponseData> => {
        const controller = new AbortController();

        const requestInit: InternalRequestInit = {
            method,
            headers: {
                'app-pragma': 'no-cache',
                // Only include version header if ghostVersion is provided
                // This allows forward admin deployments to skip version checks
                ...(ghostVersion ? {'x-ghost-version': ghostVersion} : {}),
                // By default, we set the Content-Type header to application/json
                ...(typeof body === 'string' ? {['content-type']: 'application/json'} : {}),
                ...headers
            },
            credentials,
            mode: 'cors',
            body,
            signal: controller.signal
        };

        // attempt retries for 15 seconds in two situations:
        // 1. Server Unreachable error from the browser (code 0 or TypeError), typically from short internet blips
        // 2. Maintenance error from Ghost, upgrade in progress so API is temporarily unavailable
        let attempts = 0;
        let retryingMs = 0;
        const startTime = Date.now();
        const maxRetryingMs = 15_000;
        const retryPeriods = [500, 1000];
        const retryableErrors = [ServerUnreachableError, MaintenanceError, TypeError];

        const getErrorData = (error?: APIError, response?: Response) => {
            const data: Record<string, unknown> = {
                errorName: error?.name,
                attempts,
                totalSeconds: retryingMs / 1000,
                endpoint: endpoint.toString()
            };
            if (endpoint.toString().includes('/ghost/api/')) {
                data.server = response?.headers.get('server');
            }
            return data;
        };

        // Only `XMLHttpRequest` supports progress, so we use that if we have to.
        // Otherwise, we prefer `fetch`.
        const fetchFn = onUploadProgress ? fetchWithXhr.bind(null, onUploadProgress) : fetch;

        const timeoutHandle = timeout ? setTimeout(() => controller.abort(), timeout) : undefined;

        try {
            while (attempts === 0 || retry) {
                try {
                    const response = await fetchFn(endpoint, requestInit);
                    return handleResponse(response) as ResponseData;
                } catch (error) {
                    retryingMs = Date.now() - startTime;

                    if (retry && (import.meta.env.MODE !== 'development' && retryableErrors.some(errorClass => error instanceof errorClass) && retryingMs <= maxRetryingMs)) {
                        await new Promise((resolve) => {
                            setTimeout(resolve, retryPeriods[attempts] || retryPeriods[retryPeriods.length - 1]);
                        });
                        attempts += 1;
                        continue;
                    }

                    if (attempts !== 0 && sentryDSN) {
                        Sentry.captureMessage('Request failed after multiple attempts', {extra: getErrorData()});
                    }

                    if (error && typeof error === 'object' && 'name' in error && error.name === 'AbortError') {
                        throw new TimeoutError();
                    }

                    let newError = error;

                    if (!(error instanceof APIError)) {
                        newError = new ServerUnreachableError({cause: error});
                    }

                    throw newError;
                };
            }
        } finally {
            clearTimeout(timeoutHandle);
        }

        // Used for type checking
        // this can't happen, but TS isn't smart enough to undeerstand that the loop will never exit without an error or return
        // because of retry + attempts usage combination
        return undefined as never;
    };
};

const {apiRoot, activityPubRoot} = getGhostPaths();

export const apiUrl = (path: string, searchParams: Record<string, string> = {}, useActivityPub: boolean = false) => {
    const root = useActivityPub ? activityPubRoot : apiRoot;
    const url = new URL(`${root}${path}`, window.location.origin);
    url.search = new URLSearchParams(searchParams).toString();
    return url.toString();
};

```

**Tool: webfetch**

**Input:**
```json
{
  "url": "https://raw.githubusercontent.com/TryGhost/Ghost/main/apps/admin-x-framework/src/utils/api/hooks.ts"
}
```

**Output:**
```
import {InvalidateOptions, InvalidateQueryFilters, UseInfiniteQueryOptions, UseQueryOptions, UseQueryResult, useInfiniteQuery, useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {usePagination} from '@tryghost/admin-x-design-system';
import {useCallback, useEffect, useMemo, useState} from 'react';
import useHandleError from '../../hooks/use-handle-error';
import {usePermission} from '../../hooks/use-permissions';
import {UserRoleType} from '../../api/roles';
import {useFramework} from '../../providers/framework-provider';
import {RequestOptions, apiUrl, useFetchApi} from './fetch-api';

export interface Meta {
    pagination: {
        page: number;
        limit: number | 'all';
        pages: number;
        total: number;
        next: number | null;
        prev: number | null;
    }
}

interface QueryOptions<ResponseData> {
    dataType: string
    path: string
    headers?: Record<string, string>;
    defaultSearchParams?: Record<string, string>;
    permissions?: UserRoleType[];
    returnData?: (originalData: unknown) => ResponseData;
    useActivityPub?: boolean;
}

type QueryHookOptions<ResponseData> = UseQueryOptions<ResponseData> & {
    searchParams?: Record<string, string>;
    defaultErrorHandler?: boolean;
};

export const createQuery = <ResponseData>(options: QueryOptions<ResponseData>) => ({searchParams, ...query}: QueryHookOptions<ResponseData> = {}): Omit<UseQueryResult<ResponseData>, 'data'> & {data: ResponseData | undefined} => {
    const url = apiUrl(options.path, searchParams || options.defaultSearchParams, options?.useActivityPub);
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const hasPermission = usePermission(options.permissions);

    const result = useQuery<ResponseData>({
        ...query,
        enabled: hasPermission && (query.enabled ?? true),
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url, {...options})
    });

    const data = useMemo(() => (
        (result.data && options.returnData) ? options.returnData(result.data) : result.data)
    , [result.data]);

    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);

    return {
        ...result,
        data
    };
};

export const createPaginatedQuery = <ResponseData extends {meta?: Meta}>(options: QueryOptions<ResponseData>) => ({searchParams, ...query}: QueryHookOptions<ResponseData> = {}) => {
    const [page, setPage] = useState(1);
    const limit = (searchParams?.limit || options.defaultSearchParams?.limit) ? parseInt(searchParams?.limit || options.defaultSearchParams?.limit || '15') : 15;

    const paginatedSearchParams = searchParams || options.defaultSearchParams || {};
    paginatedSearchParams.page = page.toString();

    const url = apiUrl(options.path, paginatedSearchParams, options?.useActivityPub);
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const hasPermission = usePermission(options.permissions);

    const result = useQuery<ResponseData>({
        ...query,
        enabled: hasPermission && (query.enabled ?? true),
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url, {...options})
    });

    const data = useMemo(() => (
        (result.data && options.returnData) ? options.returnData(result.data) : result.data)
    , [result.data]);

    const pagination = usePagination({
        page,
        setPage,
        limit,
        // Don't pass the meta data if we are fetching, because then it is probably out of date and this causes issues
        meta: result.isFetching ? undefined : data?.meta?.pagination
    });

    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);

    return {
        ...result,
        data,
        pagination
    };
};

type InfiniteQueryOptions<ResponseData> = Omit<QueryOptions<ResponseData>, 'returnData'> & {
    returnData: NonNullable<QueryOptions<ResponseData>['returnData']>
    defaultNextPageParams?: (data: ResponseData, params: Record<string, string>) => Record<string, string> | undefined;
}

type InfiniteQueryHookOptions<ResponseData> = UseInfiniteQueryOptions<ResponseData> & {
    searchParams?: Record<string, string>;
    defaultErrorHandler?: boolean;
    getNextPageParams?: (data: ResponseData, params: Record<string, string>) => Record<string, string> | undefined;
};

export const createInfiniteQuery = <ResponseData>(options: InfiniteQueryOptions<ResponseData>) => ({searchParams, getNextPageParams, ...query}: InfiniteQueryHookOptions<ResponseData> = {}) => {
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const hasPermission = usePermission(options.permissions);

    const nextPageParams = getNextPageParams || options.defaultNextPageParams || (() => ({}));

    const result = useInfiniteQuery<ResponseData>({
        ...query,
        enabled: hasPermission && (query.enabled ?? true),
        queryKey: [options.dataType, apiUrl(options.path, searchParams || options.defaultSearchParams, options?.useActivityPub)],
        queryFn: ({pageParam}) => fetchApi(apiUrl(options.path, pageParam || searchParams || options.defaultSearchParams, options?.useActivityPub)),
        getNextPageParam: data => nextPageParams(data, searchParams || options.defaultSearchParams || {})
    });

    const data = useMemo(() => result.data && options.returnData(result.data), [result.data]);

    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);

    return {
        ...result,
        data
    };
};

export const createQueryWithId = <ResponseData>(options: Omit<QueryOptions<ResponseData>, 'path'> & {path: (id: string) => string}) => (id: string, {searchParams, ...query}: QueryHookOptions<ResponseData> = {}) => {
    const queryHook = createQuery<ResponseData>({...options, path: options.path(id)});
    return queryHook({searchParams: searchParams || options.defaultSearchParams, ...query});
};

interface MutationOptions<ResponseData, Payload> extends Omit<QueryOptions<ResponseData>, 'dataType' | 'path'>, Omit<RequestOptions, 'body'> {
    path: (payload: Payload) => string;
    headers?: Record<string, string>;
    body?: (payload: Payload) => FormData | object;
    searchParams?: (payload: Payload) => { [key: string]: string; };
    invalidateQueries?: { dataType: string; } | {
        filters?: InvalidateQueryFilters<unknown>,
        options?: InvalidateOptions,
    };
    updateQueries?: { dataType: string; emberUpdateType: 'createOrUpdate' | 'delete' | 'skip'; update: (newData: ResponseData, currentData: unknown, payload: Payload) => unknown };
}

const mutate = <ResponseData, Payload>({fetchApi, path, payload, searchParams, options}: {
    fetchApi: ReturnType<typeof useFetchApi>;
    path: string;
    payload?: Payload;
    searchParams?: Record<string, string>;
    options: Omit<MutationOptions<ResponseData, Payload>, 'path'>
}) => {
    const {defaultSearchParams, body, ...requestOptions} = options;
    const url = apiUrl(path, searchParams || defaultSearchParams, options?.useActivityPub);
    const generatedBody = payload && body?.(payload);

    let requestBody: string | FormData | undefined = undefined;
    if (generatedBody instanceof FormData) {
        requestBody = generatedBody;
    } else if (generatedBody) {
        requestBody = JSON.stringify(generatedBody);
    }

    return fetchApi<ResponseData>(url, {
        body: requestBody,
        ...requestOptions
    });
};

export const createMutation = <ResponseData, Payload>({path, searchParams, defaultSearchParams, updateQueries, invalidateQueries, ...mutateOptions}: MutationOptions<ResponseData, Payload>) => () => {
    const fetchApi = useFetchApi();
    const queryClient = useQueryClient();
    const {onUpdate, onInvalidate, onDelete} = useFramework();

    const afterMutate = useCallback((newData: ResponseData, payload: Payload) => {
        if (invalidateQueries && 'dataType' in invalidateQueries) {
            queryClient.invalidateQueries([invalidateQueries.dataType]);
            onInvalidate(invalidateQueries.dataType);
        } else if (invalidateQueries) {
            queryClient.invalidateQueries(invalidateQueries.filters, invalidateQueries.options);
        }

        if (updateQueries) {
            queryClient.setQueriesData([updateQueries.dataType], (data: unknown) => updateQueries!.update(newData, data, payload));
            if (updateQueries.emberUpdateType === 'createOrUpdate') {
                onUpdate(updateQueries.dataType, newData);
            } else if (updateQueries.emberUpdateType === 'delete') {
                if (typeof payload !== 'string') {
                    throw new Error('Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook');
                }

                onDelete(updateQueries.dataType, payload);
            }
        }
    }, [onInvalidate, onUpdate, onDelete, queryClient]);

    return useMutation<ResponseData, unknown, Payload>({
        mutationFn: payload => mutate({fetchApi, path: path(payload), payload, searchParams: searchParams?.(payload) || defaultSearchParams, options: mutateOptions}),
        onSuccess: afterMutate
    });
};

```

---

## Assistant (Build · DeepSeek V4 Flash · 3.9s)

**Tool: webfetch**

**Input:**
```json
{
  "url": "https://raw.githubusercontent.com/TryGhost/Ghost/main/apps/admin-x-framework/src/utils/api/handle-response.ts"
}
```

**Output:**
```
import {APIError, EmailError, ErrorResponse, HostLimitError, JSONError, MaintenanceError, RequestEntityTooLargeError, ServerUnreachableError, ThemeValidationError, UnsupportedMediaTypeError, ValidationError, VersionMismatchError} from '../errors';

const handleResponse = async (response: Response) => {
    if (response.status === 0) {
        throw new ServerUnreachableError();
    } else if (response.status === 503) {
        throw new MaintenanceError(response, await response.text());
    } else if (response.status === 415) {
        throw new UnsupportedMediaTypeError(response, await response.text());
    } else if (response.status === 413) {
        throw new RequestEntityTooLargeError(response, await response.text());
    } else if (!response.ok) {
        if (!response.headers.get('content-type')?.includes('json')) {
            throw new APIError(response, await response.text());
        }

        const data = await response.json() as ErrorResponse;

        if (data.errors?.[0]?.type === 'VersionMismatchError') {
            throw new VersionMismatchError(response, data);
        } else if (data.errors?.[0]?.type === 'ValidationError') {
            throw new ValidationError(response, data);
        } else if (data.errors?.[0]?.type === 'NoPermissionError') {
            throw new ValidationError(response, data);
        } else if (data.errors?.[0]?.type === 'ThemeValidationError') {
            throw new ThemeValidationError(response, data);
        } else if (data.errors?.[0]?.type === 'HostLimitError') {
            throw new HostLimitError(response, data);
        } else if (data.errors?.[0]?.type === 'EmailError') {
            throw new EmailError(response, data);
        } else {
            throw new JSONError(response, data);
        }
    } else if (response.status === 204) {
        return;
    } else if (response.headers.get('content-type')?.includes('text/csv')) {
        return await response.text();
    } else {
        return await response.json();
    }
};

export default handleResponse;

```

**Tool: webfetch**

**Input:**
```json
{
  "url": "https://raw.githubusercontent.com/TryGhost/Ghost/main/apps/admin-x-framework/src/utils/helpers.ts",
  "format": "text"
}
```

**Output:**
```
export interface IGhostPaths {
    subdir: string;
    adminRoot: string;
    assetRoot: string;
    apiRoot: string;
    activityPubRoot: string;
}

export function getGhostPaths(): IGhostPaths {
    const path = window.location.pathname;
    const subdir = path.substr(0, path.search('/ghost/'));
    const adminRoot = `${subdir}/ghost/`;
    const assetRoot = `${subdir}/ghost/assets/`;
    const apiRoot = `${subdir}/ghost/api/admin`;
    const activityPubRoot = `${subdir}/.ghost/activitypub`;
    return {subdir, adminRoot, assetRoot, apiRoot, activityPubRoot};
}

export function downloadFile(url: string) {
    let iframe = document.getElementById('iframeDownload');

    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframeDownload';
        iframe.style.display = 'none';
        document.body.append(iframe);
    }

    iframe.setAttribute('src', url);
}

export function downloadFromEndpoint(path: string) {
    downloadFile(`${getGhostPaths().apiRoot}${path}`);
}

/**
 * Downloads a file by fetching it as a blob and triggering a browser download.
 * Use this instead of downloadFile/downloadFromEndpoint for streaming responses
 * (e.g. large CSV exports) where the iframe approach may not work reliably.
 */
export async function blobDownload(url: string, filename: string): Promise<void> {
    const response = await fetch(url, {method: 'GET'});

    if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
}

export async function blobDownloadFromEndpoint(path: string, filename: string): Promise<void> {
    const url = `${getGhostPaths().apiRoot}${path}`;
    return blobDownload(url, filename);
}

```

---

## Assistant (Build · DeepSeek V4 Flash · 2.9s)

**Tool: webfetch**

**Input:**
```json
{
  "url": "https://raw.githubusercontent.com/fastapi/fastapi/master/docs_src/cors/tutorial001.py"
}
```

**Error:**
```
StatusCode: non 2xx status code (404 GET https://raw.githubusercontent.com/fastapi/fastapi/master/docs_src/cors/tutorial001.py)
```

---

## Assistant (Build · DeepSeek V4 Flash · 5.5s)

**Tool: codesearch**

**Input:**
```json
{
  "query": "CORSMiddleware",
  "language": "Python"
}
```

**Output:**
```
Repository: ruvnet/RuView
Path: archive/v1/src/middleware/cors.py
URL: https://github.com/ruvnet/RuView/blob/main/archive/v1/src/middleware/cors.py
License: MIT

Snippets:
--- Snippet 1 (Line 5) ---
import logging
from typing import List, Optional, Union, Callable
from urllib.parse import urlparse

from fastapi import Request, Response
from fastapi.middleware.cors import CORSMiddleware as FastAPICORSMiddleware
from starlette.types import ASGIApp

from src.config.settings import Settings

logger = logging.getLogger(__name__)


class CORSMiddleware:
    """Enhanced CORS middleware with additional security features."""
    
    def __init__(
        self,
        app: ASGIApp,

```

**Tool: codesearch**

**Input:**
```json
{
  "query": "static files",
  "language": "Python"
}
```

**Output:**
```
Repository: django/django
Path: django/contrib/staticfiles/finders.py
URL: https://github.com/django/django/blob/main/django/contrib/staticfiles/finders.py
License: BSD-3-Clause

Snippets:
--- Snippet 1 (Line 9) ---
from django.core.files.storage import FileSystemStorage, Storage, default_storage
from django.utils._os import safe_join
from django.utils.functional import LazyObject, empty
from django.utils.module_loading import import_string

# To keep track on which directories the finder has searched the static files.
searched_locations = []


class BaseFinder:
    """


--- Snippet 2 (Line 38) ---

class FileSystemFinder(BaseFinder):
    """
    A static files finder that uses the ``STATICFILES_DIRS`` setting
    to locate files.
    """

    def __init__(self, app_names=None, *args, **kwargs):
        # List of locations with static files

```

---

## Assistant (Build · DeepSeek V4 Flash · 17.9s)

Here's a comprehensive answer based on real-world codebase analysis:

## 3 Main Integration Patterns

### 1. REST API Client (Most Common)

The dominant pattern — React makes HTTP requests to a Python backend via `fetch` or a wrapper. **Ghost CMS** (React + Django) demonstrates this cleanly:

- **API client abstraction**: A custom `useFetchApi` hook wraps `fetch()` with retries, error handling, and auth headers (`fetch-api.ts`)
- **URL construction**: `apiUrl()` builds URLs from a configurable root (e.g., `/ghost/api/admin/{path}`), derived from `window.location` via `getGhostPaths()` (`helpers.ts:14`)
- **Data fetching layer**: Uses `@tanstack/react-query` — `createQuery()`, `createPaginatedQuery()`, `createInfiniteQuery()`, `createMutation()` factory functions (`hooks.ts`)
- **Auth**: `credentials: 'include'` for cookie/session-based auth; alternatively JWT in `Authorization: Bearer <token>` header
- **Error handling**: Typed error classes — `ServerUnreachableError`, `MaintenanceError`, `ValidationError`, `VersionMismatchError` — mapped from HTTP status codes and response body `errors[].type` (`handle-response.ts`)

### 2. Dev Proxy (Vite/Webpack)

In development, React runs on a different port (e.g., `localhost:5173`) than Python (e.g., `localhost:8000`). The React dev server proxies `/api` requests to Python. **lobehub** shows this Vite pattern: a `configureServer` plugin with a `_dangerous_local_dev_proxy` endpoint that forwards to the Python backend.

### 3. CORS Configuration (Production Alternative)

If not using a proxy, the Python backend must allow cross-origin requests from the React domain. Example from **ruvnet/RuView**:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["https://react-app.com"], allow_credentials=True, ...)
```

### Full Request Lifecycle (Ghost Pattern)

```
React component
  → createQuery({ dataType, path: "/users/" })
    → useFetchApi(url, { credentials: "include", headers: { "x-ghost-version": ghostVersion } })
      → fetch(url, { mode: "cors", signal: AbortController, ... })
        → retry on ServerUnreachable/Maintenance (15s max)
          → handleResponse(response)
            → 200: response.json()    |  → 503: throw MaintenanceError
            → 413: throw RequestEntityTooLarge  |  → 415: throw UnsupportedMediaType
            → non-ok+json: parse errors[].type → throw specific error class
```

### Key Files Found

| File                              | Pattern                                                                  |
| --------------------------------- | ------------------------------------------------------------------------ |
| `TryGhost/Ghost` `fetch-api.ts`       | Custom fetch wrapper with retry, abort, XHR fallback for upload progress |
| `TryGhost/Ghost` `hooks.ts`           | React Query factory — query, paginated, infinite, mutation               |
| `TryGhost/Ghost` `handle-response.ts` | Status-code → typed error mapping                                        |
| `TryGhost/Ghost` `helpers.ts`         | API root derived from `window.location`                                    |
| `ruvnet/RuView` `cors.py`             | FastAPI CORS middleware                                                  |
| `lobehub/lobehub` `vite.config.ts`    | Vite dev proxy to Python backend                                         |

---

