(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/contexts/SessionProviderWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionProviderWrapper",
    ()=>SessionProviderWrapper,
    "useToken",
    ()=>useToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SessionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const useToken = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e19e723691262843cc31d0c6550f03ef195ccbc1c94625d31918369d21d9d923") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e19e723691262843cc31d0c6550f03ef195ccbc1c94625d31918369d21d9d923";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SessionContext);
};
_s(useToken, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const SessionProviderWrapper = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "e19e723691262843cc31d0c6550f03ef195ccbc1c94625d31918369d21d9d923") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e19e723691262843cc31d0c6550f03ef195ccbc1c94625d31918369d21d9d923";
    }
    const { children } = t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const userId = session?.user?.id;
    const expertId = session?.user?.expert_id;
    const roleName = session?.user?.role_name;
    let t1;
    if ($[1] !== session?.user?.role_name || $[2] !== session?.user?.user_type) {
        t1 = session?.user?.user_type || session?.user?.role_name?.toLowerCase();
        $[1] = session?.user?.role_name;
        $[2] = session?.user?.user_type;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const userType = t1;
    const userName = session?.user?.name;
    const email = session?.user?.email;
    const expiresAt = session?.user?.expires_at;
    let t2;
    if ($[4] !== email || $[5] !== expertId || $[6] !== expiresAt || $[7] !== roleName || $[8] !== token || $[9] !== userId || $[10] !== userName || $[11] !== userType) {
        t2 = {
            token,
            userId,
            expertId,
            roleName,
            userType,
            userName,
            email,
            expiresAt
        };
        $[4] = email;
        $[5] = expertId;
        $[6] = expiresAt;
        $[7] = roleName;
        $[8] = token;
        $[9] = userId;
        $[10] = userName;
        $[11] = userType;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    let t3;
    if ($[13] !== children || $[14] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionContext.Provider, {
            value: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/contexts/SessionProviderWrapper.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = children;
        $[14] = t2;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    return t3;
};
_s1(SessionProviderWrapper, "90sCfFLkOu0XWr0Qr7d+mUVbZmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = SessionProviderWrapper;
var _c;
__turbopack_context__.k.register(_c, "SessionProviderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SessionProviderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/SessionProviderWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function AuthProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "e4635cafd64bdf44deda79a5839616cbf4ef106426210afb28ef36b2bcff94de") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4635cafd64bdf44deda79a5839616cbf4ef106426210afb28ef36b2bcff94de";
    }
    const { children, session } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SessionProviderWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProviderWrapper"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/auth-provider.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== session || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
            session: session,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/auth-provider.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = session;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/state/react-query/query-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function QueryProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3eaa8d281b08dc162f22a54753058a5fdb65c8d8378cc54cca20e632a1505387") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3eaa8d281b08dc162f22a54753058a5fdb65c8d8378cc54cca20e632a1505387";
    }
    const { children } = t0;
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_QueryProviderUseState);
    let t1;
    if ($[1] !== children || $[2] !== queryClient) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/state/react-query/query-provider.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = queryClient;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(QueryProvider, "0C9cZBrJebEGOHgNahhDk1PI7/o=");
_c = QueryProvider;
function _QueryProviderUseState() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false,
                staleTime: 300000,
                gcTime: 600000,
                retry: 1,
                throwOnError: false,
                refetchIntervalInBackground: false
            }
        }
    });
}
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "BASE_URL",
    ()=>BASE_URL,
    "DASHBOARD_API_BASE_URL",
    ()=>DASHBOARD_API_BASE_URL,
    "DASHBOARD_V2_API_BASE_URL",
    ()=>DASHBOARD_V2_API_BASE_URL,
    "IMPORTS_API_BASE_URL",
    ()=>IMPORTS_API_BASE_URL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BASE_URL = ("TURBOPACK compile-time value", "https://demoapi.p-adviser.com") || "https://demoapi.p-adviser.com";
const API_BASE_URL = `${BASE_URL}/api`;
const DASHBOARD_API_BASE_URL = `${API_BASE_URL}/dashboard`;
const DASHBOARD_V2_API_BASE_URL = `${DASHBOARD_API_BASE_URL}/v2`;
const IMPORTS_API_BASE_URL = `${API_BASE_URL}/imports`;
const __TURBOPACK__default__export__ = BASE_URL;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/config.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "DEFAULT_COUNTRY_ID",
    ()=>DEFAULT_COUNTRY_ID,
    "getCountryId",
    ()=>getCountryId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
;
const DEFAULT_COUNTRY_ID = "1";
const getCountryId = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem("country_id") || localStorage.getItem("country-id") || DEFAULT_COUNTRY_ID;
    }
    //TURBOPACK unreachable
    ;
};
const API_CONFIG = {
    ORIGIN: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    DASHBOARD_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    DASHBOARD_V2_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"],
    IMPORTS_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMPORTS_API_BASE_URL"],
    DEFAULT_HEADERS: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "country-id": DEFAULT_COUNTRY_ID,
        "country_id": DEFAULT_COUNTRY_ID,
        "ngrok-skip-browser-warning": "69420"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiLogger",
    ()=>apiLogger
]);
const apiLogger = {
    request: (config)=>{},
    response: (response)=>{},
    error: (error)=>{},
    auth: (message)=>{}
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "getErrorMessage",
    ()=>getErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
class ApiClient {
    client;
    accessToken = null;
    expiresAt = null;
    isRefreshing = false;
    refreshQueue = [];
    sessionUpdateCallback = null;
    isInitialized = false;
    resolveInit = null;
    initPromise;
    constructor(){
        this.initPromise = new Promise((resolve)=>{
            this.resolveInit = resolve;
        });
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["API_CONFIG"].BASE_URL,
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["API_CONFIG"].DEFAULT_HEADERS,
            withCredentials: true
        });
        this.setupInterceptors();
    }
    async waitForInit() {
        if (!this.isInitialized) {
            await this.initPromise;
        }
    }
    setupInterceptors() {
        this.client.interceptors.request.use(async (config)=>{
            await this.waitForInit();
            const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
            config.headers["country-id"] = countryId;
            config.headers["country_id"] = countryId;
            config.headers["ngrok-skip-browser-warning"] = "69420";
            // Safeguard: Ensure centralized base url is used
            if (config.baseURL && (config.baseURL.includes("ngrok") || config.baseURL.includes("api.p-adviser.com"))) {
                config.baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"];
            }
            if (config.url && (config.url.includes("ngrok") || config.url.includes("api.p-adviser.com"))) {
                config.url = config.url.replace(/https?:\/\/[^\/]*ngrok[^\/]*/g, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]).replace(/https?:\/\/api\.p-adviser\.com/g, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]);
            }
            if (config.url && config.url.startsWith("/api/")) {
                config.url = config.url.replace(/^\/api/, "");
            }
            if (this.accessToken && this.expiresAt) {
                const now = Math.floor(Date.now() / 1000);
                const isExpiringSoon = this.expiresAt <= now + 60;
                if (isExpiringSoon) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("⏰ Token expiring soon → refreshing");
                    await this.refreshToken();
                }
            }
            if (this.accessToken) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
            } else {
                delete config.headers.Authorization;
            }
            if (config.data instanceof FormData) {
                if (typeof config.headers.delete === "function") {
                    config.headers.delete("Content-Type");
                } else {
                    delete config.headers["Content-Type"];
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].request(config);
            return config;
        });
        this.client.interceptors.response.use((response)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].response(response);
            const data = response.data;
            if (data && typeof data === 'object') {
                if (data.status === false || data.success === false || data.status === "error") {
                    const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"](data.message || "Business logic error", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"].ERR_BAD_RESPONSE, response.config, response.request, response);
                    return Promise.reject(error);
                }
            }
            return response;
        }, async (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].error(error);
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("⚠️ 401 → attempting refresh");
                try {
                    await this.refreshToken();
                    originalRequest.headers = {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${this.accessToken}`
                    };
                    return this.client(originalRequest);
                } catch  {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("❌ Refresh failed → redirecting to login");
                    this.clearAuthToken();
                    if ("TURBOPACK compile-time truthy", 1) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                            redirect: false
                        }).then(()=>{
                            window.location.href = "/";
                        });
                    }
                    return Promise.reject(error);
                }
            }
            return Promise.reject(error);
        });
    }
    setSessionUpdateCallback(callback) {
        this.sessionUpdateCallback = callback;
    }
    async refreshToken() {
        if (this.isRefreshing) {
            return new Promise((resolve, reject)=>{
                this.refreshQueue.push({
                    resolve: ()=>resolve(),
                    reject
                });
            });
        }
        this.isRefreshing = true;
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("🔄 Calling /api/auth/refresh");
            const res = await fetch("/api/auth/refresh", {
                method: "POST",
                credentials: "include"
            });
            if (!res.ok) {
                this.clearAuthToken();
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                        redirect: false
                    }).then(()=>{
                        window.location.href = "/";
                    });
                }
                throw new Error("Token refresh failed");
            }
            const data = await res.json();
            this.accessToken = data.accessToken;
            this.expiresAt = data.expires_at;
            if (this.sessionUpdateCallback) {
                await this.sessionUpdateCallback({
                    accessToken: data.accessToken,
                    expiresAt: data.expires_at
                });
            }
            this.processQueue();
        } catch (error) {
            this.processQueue(error);
            throw error;
        } finally{
            this.isRefreshing = false;
        }
    }
    processQueue(error) {
        this.refreshQueue.forEach(({ resolve, reject })=>{
            if (error) {
                reject(error);
            } else {
                resolve(this.accessToken);
            }
        });
        this.refreshQueue = [];
    }
    buildHeaders(data, config) {
        const isFormData = data instanceof FormData;
        const headers = {
            ...config?.headers
        };
        if (!isFormData) {
            headers["Content-Type"] = "application/json";
        } else {
            headers["Content-Type"] = "multipart/form-data";
        }
        const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
        headers["country-id"] = countryId;
        headers["country_id"] = countryId;
        headers["ngrok-skip-browser-warning"] = "69420";
        return headers;
    }
    async get(endpoint, config) {
        return await this.client.get(endpoint, {
            ...config,
            headers: this.buildHeaders(undefined, config)
        });
    }
    async post(endpoint, data, config) {
        const response = await this.client.post(endpoint, data, {
            ...config,
            headers: this.buildHeaders(data, config)
        });
        return {
            data: response.data,
            status: response.status
        };
    }
    async put(endpoint, data, config) {
        const response = await this.client.put(endpoint, data, {
            ...config,
            headers: this.buildHeaders(data, config)
        });
        return {
            data: response.data,
            status: response.status
        };
    }
    async patch(endpoint, data, config) {
        const response = await this.client.patch(endpoint, data, {
            ...config,
            headers: this.buildHeaders(data, config)
        });
        return {
            data: response.data,
            status: response.status
        };
    }
    async delete(endpoint, config) {
        const response = await this.client.delete(endpoint, {
            ...config,
            headers: this.buildHeaders(undefined, config)
        });
        return {
            data: response.data,
            status: response.status
        };
    }
    setAuthToken(token, expiresAt) {
        this.accessToken = token ?? null;
        this.expiresAt = expiresAt ?? null;
        if (token) {
            this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete this.client.defaults.headers.common["Authorization"];
        }
        this.isInitialized = true;
        if (this.resolveInit) {
            this.resolveInit();
            this.resolveInit = null;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth(`🔑 Token initialized (hasToken: ${!!token}, expiresAt: ${expiresAt})`);
    }
    /**
   * Adopts a caller-supplied token only when the client has none yet.
   * The client's own token (set by AuthBootstrap and rotated by refreshToken)
   * is always at least as fresh as a token captured from a component's session,
   * so overwriting it would revert refreshed tokens and drop the real expiry.
   */ syncToken(token) {
        if (!token || this.accessToken) return;
        this.setAuthToken(token, Math.floor(Date.now() / 1000) + 3600);
    }
    clearAuthToken() {
        this.accessToken = null;
        this.expiresAt = null;
        this.isInitialized = true;
        delete this.client.defaults.headers.common["Authorization"];
        if (this.resolveInit) {
            this.resolveInit();
        }
    }
}
const apiClient = new ApiClient();
function getErrorMessage(error, fallback = "Something went wrong") {
    const resData = error?.response?.data;
    if (resData) {
        if (Array.isArray(resData.errors)) {
            const messages = resData.errors.map((errObj)=>{
                if (errObj && typeof errObj === 'object') {
                    return Object.values(errObj).join(", ");
                }
                return String(errObj);
            }).filter(Boolean);
            if (messages.length > 0) {
                return messages.join(", ");
            }
        }
        if (resData.errors && typeof resData.errors === 'object') {
            const messages = Object.values(resData.errors).flat().map(String).filter(Boolean);
            if (messages.length > 0) {
                return messages.join(", ");
            }
        }
        if (resData.message) {
            return resData.message;
        }
    }
    return error?.message || fallback;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Loading() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f12cd81651eef1f9e79c9bf67d154b259c39dc528d69e8c0e0c054232096a9b2") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f12cd81651eef1f9e79c9bf67d154b259c39dc528d69e8c0e0c054232096a9b2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex items-center justify-center mt-20 min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "custom-loader"
            }, void 0, false, {
                fileName: "[project]/src/app/loading.tsx",
                lineNumber: 12,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/loading.tsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AuthBootstrap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AuthBootstrap(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "decf3e423e39d4e797bfef040ecce8915114d51d9d822435a25f0dcd55f4dbd1") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "decf3e423e39d4e797bfef040ecce8915114d51d9d822435a25f0dcd55f4dbd1";
    }
    const { children } = t0;
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isTokenReady, setIsTokenReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initializedTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(session);
    let t1;
    let t2;
    if ($[1] !== session) {
        t1 = ({
            "AuthBootstrap[useEffect()]": ()=>{
                sessionRef.current = session;
            }
        })["AuthBootstrap[useEffect()]"];
        t2 = [
            session
        ];
        $[1] = session;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== session || $[5] !== status || $[6] !== update) {
        t3 = ({
            "AuthBootstrap[useEffect()]": ()=>{
                if (status === "unauthenticated") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].clearAuthToken();
                    initializedTokenRef.current = null;
                    setIsTokenReady(true);
                    return;
                }
                if (status !== "authenticated") {
                    setIsTokenReady(false);
                    return;
                }
                if (session?.user?.accessToken && session.user?.accessToken === initializedTokenRef.current) {
                    setIsTokenReady(true);
                    return;
                }
                const initializeToken = {
                    "AuthBootstrap[useEffect() > initializeToken]": async ()=>{
                        const accessToken = session?.user?.accessToken;
                        const expiresAt = session?.user?.expires_at;
                        if (!accessToken || !expiresAt) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].clearAuthToken();
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                redirect: false
                            });
                            window.location.href = "/";
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(accessToken, expiresAt);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setSessionUpdateCallback({
                            "AuthBootstrap[useEffect() > initializeToken > apiClient.setSessionUpdateCallback()]": async (t4)=>{
                                const { accessToken: newToken, expiresAt: newExpiry } = t4;
                                initializedTokenRef.current = newToken;
                                await update({
                                    ...sessionRef.current,
                                    user: {
                                        ...sessionRef.current?.user,
                                        accessToken: newToken,
                                        expires_at: newExpiry
                                    }
                                });
                            }
                        }["AuthBootstrap[useEffect() > initializeToken > apiClient.setSessionUpdateCallback()]"]);
                        setIsTokenReady(true);
                    }
                }["AuthBootstrap[useEffect() > initializeToken]"];
                initializeToken();
            }
        })["AuthBootstrap[useEffect()]"];
        $[4] = session;
        $[5] = status;
        $[6] = update;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = session?.user?.accessToken;
    const t5 = session?.user?.expires_at;
    let t6;
    if ($[8] !== status || $[9] !== t4 || $[10] !== t5) {
        t6 = [
            t4,
            t5,
            status
        ];
        $[8] = status;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t6);
    if (status === "loading" || !isTokenReady) {
        let t7;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/AuthBootstrap.tsx",
                lineNumber: 121,
                columnNumber: 12
            }, this);
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        return t7;
    }
    let t7;
    if ($[13] !== children) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[13] = children;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s(AuthBootstrap, "8Iwg6ltY5J6WkLG6j5rJ4fLcgsk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = AuthBootstrap;
var _c;
__turbopack_context__.k.register(_c, "AuthBootstrap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/data:1d82e6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setUserLocale",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401203ad2199217b8b8b08892499087b54e49dc7fe":"setUserLocale"},"src/i18n/locale.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401203ad2199217b8b8b08892499087b54e49dc7fe", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setUserLocale");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgTG9jYWxlLCBMT0NBTEVfQ09PS0lFX05BTUUsIGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTG9jYWxlKCk6IFByb21pc2U8TG9jYWxlPiB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29uc3QgbG9jYWxlID0gY29va2llU3RvcmUuZ2V0KExPQ0FMRV9DT09LSUVfTkFNRSk/LnZhbHVlIGFzIExvY2FsZSB8IHVuZGVmaW5lZDtcclxuICByZXR1cm4gbG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRVc2VyTG9jYWxlKGxvY2FsZTogTG9jYWxlKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgY29va2llU3RvcmUuc2V0KExPQ0FMRV9DT09LSUVfTkFNRSwgbG9jYWxlLCB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzY1LFxyXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQVdzQiwwTEFBQSJ9
}),
"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$1d82e6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/i18n/data:1d82e6 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getNestedValue(obj, path) {
    let curr = obj;
    for (const part of path.split(".")){
        if (curr && typeof curr === "object" && part in curr) {
            curr = curr[part];
        } else {
            return undefined;
        }
    }
    return typeof curr === "string" ? curr : undefined;
}
function interpolate(text, values) {
    if (!values) return text;
    return Object.entries(values).reduce((acc, [k, v])=>acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)), text);
}
function applyDocumentLanguage(lang) {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    try {
        localStorage.setItem("app_lang", lang);
    } catch  {}
}
function LanguageProvider({ children }) {
    _s();
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])() || "en";
    // Messages already include the English fallback for missing keys (see src/i18n/request.ts).
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])();
    const [, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            applyDocumentLanguage(language);
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const toggleLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[toggleLanguage]": ()=>{
            const nextLang = language === "en" ? "ar" : "en";
            applyDocumentLanguage(nextLang);
            startTransition({
                "LanguageProvider.useCallback[toggleLanguage]": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$1d82e6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setUserLocale"])(nextLang);
                }
            }["LanguageProvider.useCallback[toggleLanguage]"]);
        }
    }["LanguageProvider.useCallback[toggleLanguage]"], [
        language
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[t]": (key, values)=>{
            if (!key) return "";
            const value = getNestedValue(messages, key);
            return value === undefined ? key : interpolate(value, values);
        }
    }["LanguageProvider.useCallback[t]"], [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "QwWoMAFxuDhZIzfs+MHSJsOghPs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "9fe4aefd047e2fde1d85af18214f01a76785ec8ec8fab9e13ac8b28a1179b23a") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9fe4aefd047e2fde1d85af18214f01a76785ec8ec8fab9e13ac8b28a1179b23a";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/theme_context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
        localStorage.setItem("app_theme", theme);
    } catch  {}
}
function ThemeProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "6c3e7a8a4d93c50dd5686d93f1a890aac455a79d0fc0bdba6689d7c5df0b1ecd") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c3e7a8a4d93c50dd5686d93f1a890aac455a79d0fc0bdba6689d7c5df0b1ecd";
    }
    const { children } = t0;
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ThemeProvider[useEffect()]": ()=>{
                let saved = null;
                try {
                    saved = localStorage.getItem("app_theme");
                } catch  {}
                const initial = saved === "dark" ? "dark" : "light";
                setTheme(initial);
                applyTheme(initial);
            }
        })["ThemeProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== theme) {
        t3 = ({
            "ThemeProvider[toggleTheme]": ()=>{
                const next = theme === "light" ? "dark" : "light";
                setTheme(next);
                applyTheme(next);
            }
        })["ThemeProvider[toggleTheme]"];
        $[3] = theme;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const toggleTheme = t3;
    let t4;
    if ($[5] !== theme || $[6] !== toggleTheme) {
        t4 = {
            theme,
            toggleTheme
        };
        $[5] = theme;
        $[6] = toggleTheme;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== children || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/contexts/theme_context.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(ThemeProvider, "lm84LOZxHN0YC4jzvAwAP/18Sno=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "6c3e7a8a4d93c50dd5686d93f1a890aac455a79d0fc0bdba6689d7c5df0b1ecd") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c3e7a8a4d93c50dd5686d93f1a890aac455a79d0fc0bdba6689d7c5df0b1ecd";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/client-intl-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientIntlProvider",
    ()=>ClientIntlProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-client] (ecmascript) <export default as NextIntlClientProvider>");
"use client";
;
;
;
function ClientIntlProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0560edbfe7d0b52b7033e1d5983b9c9abab96760143e507c35c15a27711e61d6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0560edbfe7d0b52b7033e1d5983b9c9abab96760143e507c35c15a27711e61d6";
    }
    const { messages, locale, timeZone: t1, children } = t0;
    const timeZone = t1 === undefined ? "UTC" : t1;
    let t2;
    if ($[1] !== children || $[2] !== locale || $[3] !== messages || $[4] !== timeZone) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
            messages: messages,
            locale: locale,
            timeZone: timeZone,
            getMessageFallback: _ClientIntlProviderNextIntlClientProviderGetMessageFallback,
            onError: _ClientIntlProviderNextIntlClientProviderOnError,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/client-intl-provider.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = locale;
        $[3] = messages;
        $[4] = timeZone;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = ClientIntlProvider;
function _ClientIntlProviderNextIntlClientProviderOnError(error) {
    if (error.code === "MISSING_MESSAGE") {
        return;
    }
    console.error(error);
}
function _ClientIntlProviderNextIntlClientProviderGetMessageFallback(t0) {
    const { key } = t0;
    return key;
}
var _c;
__turbopack_context__.k.register(_c, "ClientIntlProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ca15e7e._.js.map