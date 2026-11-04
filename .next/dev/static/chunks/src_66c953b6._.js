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
    if ($[0] !== "3d7b3b74abeafe6672779095bd052b814a324c42fa2e845c7594f7b5d199367c") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d7b3b74abeafe6672779095bd052b814a324c42fa2e845c7594f7b5d199367c";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SessionContext);
};
_s(useToken, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const SessionProviderWrapper = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "3d7b3b74abeafe6672779095bd052b814a324c42fa2e845c7594f7b5d199367c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d7b3b74abeafe6672779095bd052b814a324c42fa2e845c7594f7b5d199367c";
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
    if ($[0] !== "82bf530277568ea4f1ceb3b1cddacb5ebabcc5a491e529ff98375e2eee753242") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82bf530277568ea4f1ceb3b1cddacb5ebabcc5a491e529ff98375e2eee753242";
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
    if ($[0] !== "92bef6c4c29390e7280724f4248871a69f94d9e09f2128bbee7dbcf276f94fc1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "92bef6c4c29390e7280724f4248871a69f94d9e09f2128bbee7dbcf276f94fc1";
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
"[project]/src/lib/auth-session.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOGIN_PATH",
    ()=>LOGIN_PATH,
    "SessionExpiredError",
    ()=>SessionExpiredError,
    "logoutToLogin",
    ()=>logoutToLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
"use client";
;
const LOGIN_PATH = "/auth/signin";
let isLoggingOut = false;
class SessionExpiredError extends Error {
    constructor(){
        super("Session expired");
        this.name = "SessionExpiredError";
    }
}
async function logoutToLogin() {
    if (("TURBOPACK compile-time value", "object") === "undefined" || isLoggingOut) return;
    if (window.location.pathname.startsWith("/auth")) return;
    isLoggingOut = true;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            redirect: false
        });
    } catch  {}
    window.location.replace(`${LOGIN_PATH}?reason=session_expired`);
}
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
    ()=>getErrorMessage,
    "readBearerToken",
    ()=>readBearerToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-session.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function readBearerToken(headers) {
    if (!headers) return null;
    const value = typeof headers.get === "function" ? headers.get("Authorization") : headers.Authorization ?? headers.authorization;
    if (typeof value !== "string") return null;
    return value.replace(/^Bearer\s+/i, "") || null;
}
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
            if (error.response?.status === 401 && originalRequest) {
                if (originalRequest._retry) {
                    // Still unauthenticated with a freshly refreshed token.
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("❌ 401 after refresh → redirecting to login");
                    this.clearAuthToken();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutToLogin"])();
                    return Promise.reject(error);
                }
                originalRequest._retry = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("⚠️ 401 → attempting refresh");
                const token = await this.getTokenAfterUnauthorized(readBearerToken(originalRequest.headers));
                if (!token) return Promise.reject(error);
                originalRequest.headers = {
                    ...originalRequest.headers,
                    Authorization: `Bearer ${token}`
                };
                return this.client(originalRequest);
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
                // 429 (rate limit) or a server error doesn't mean the session is gone.
                if (res.status === 401) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiLogger"].auth("❌ Refresh rejected → redirecting to login");
                    this.clearAuthToken();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutToLogin"])();
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$session$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionExpiredError"]();
                }
                throw new Error(`Token refresh failed (HTTP ${res.status})`);
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
    /**
   * Called after a request was rejected with 401. Returns a token to retry with, or null when
   * there is none (the user is logged out and sent to the login page if the session expired).
   * `usedToken` is the token the failed request carried: if it was already replaced by a newer
   * one, that newer token is returned without refreshing again.
   */ async getTokenAfterUnauthorized(usedToken) {
        await this.waitForInit();
        if (this.accessToken && usedToken && usedToken !== this.accessToken) {
            return this.accessToken;
        }
        try {
            await this.refreshToken();
            return this.accessToken;
        } catch  {
            return null;
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
    if ($[0] !== "130ebc90f8dcba9ae301fe95a62090ea6c8fba5a857a5469d7f47b66aaab34bf") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "130ebc90f8dcba9ae301fe95a62090ea6c8fba5a857a5469d7f47b66aaab34bf";
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
    if ($[0] !== "27d69e9b876e02ddd788cb07fec7de3aba0530a2176c0c370b9d12f775870679") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27d69e9b876e02ddd788cb07fec7de3aba0530a2176c0c370b9d12f775870679";
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
"[project]/src/i18n/data:abbe57 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgTG9jYWxlLCBMT0NBTEVfQ09PS0lFX05BTUUsIGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMb2NhbGUoKTogUHJvbWlzZTxMb2NhbGU+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvbnN0IGxvY2FsZSA9IGNvb2tpZVN0b3JlLmdldChMT0NBTEVfQ09PS0lFX05BTUUpPy52YWx1ZSBhcyBMb2NhbGUgfCB1bmRlZmluZWQ7XG4gIHJldHVybiBsb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFVzZXJMb2NhbGUobG9jYWxlOiBMb2NhbGUpIHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvb2tpZVN0b3JlLnNldChMT0NBTEVfQ09PS0lFX05BTUUsIGxvY2FsZSwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzY1LFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICB9KTtcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQVdzQiwwTEFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$abbe57__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/i18n/data:abbe57 [app-client] (ecmascript) <text/javascript>");
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$abbe57__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setUserLocale"])(nextLang);
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
    if ($[0] !== "d172c72f504ca724196339caec3c442ddca3eb2dfe1b3bc95319036e1c7eafdd") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d172c72f504ca724196339caec3c442ddca3eb2dfe1b3bc95319036e1c7eafdd";
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
"[project]/src/lib/notification-sound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOUND_CATEGORIES",
    ()=>SOUND_CATEGORIES,
    "getServerSoundSettings",
    ()=>getServerSoundSettings,
    "getSoundSettings",
    ()=>getSoundSettings,
    "installAudioUnlock",
    ()=>installAudioUnlock,
    "pickLoudestCategory",
    ()=>pickLoudestCategory,
    "playNotificationSound",
    ()=>playNotificationSound,
    "subscribeSoundSettings",
    ()=>subscribeSoundSettings,
    "updateSoundSettings",
    ()=>updateSoundSettings
]);
const SOUND_CATEGORIES = [
    "message",
    "system",
    "success",
    "error",
    "warning",
    "info"
];
const STORAGE_KEY = "notification-sound-settings";
const MIN_GAP_MS = 350;
const PRIORITY = {
    error: 6,
    message: 5,
    system: 4,
    warning: 3,
    success: 2,
    info: 1
};
const DEFAULT_SETTINGS = {
    enabled: true,
    volume: 0.6,
    categories: {
        success: true,
        error: true,
        warning: true,
        info: true,
        message: true,
        system: true
    }
};
const TONES = {
    success: [
        {
            freq: 659.25,
            start: 0,
            duration: 0.14
        },
        {
            freq: 880,
            start: 0.1,
            duration: 0.22
        }
    ],
    error: [
        {
            freq: 440,
            start: 0,
            duration: 0.16,
            type: "triangle"
        },
        {
            freq: 311.13,
            start: 0.14,
            duration: 0.28,
            type: "triangle"
        }
    ],
    warning: [
        {
            freq: 523.25,
            start: 0,
            duration: 0.12,
            type: "triangle"
        },
        {
            freq: 523.25,
            start: 0.18,
            duration: 0.14,
            type: "triangle"
        }
    ],
    info: [
        {
            freq: 783.99,
            start: 0,
            duration: 0.2,
            gain: 0.8
        }
    ],
    message: [
        {
            freq: 587.33,
            start: 0,
            duration: 0.38,
            glideTo: 880
        }
    ],
    system: [
        {
            freq: 880,
            start: 0,
            duration: 0.6
        },
        {
            freq: 1318.5,
            start: 0,
            duration: 0.45,
            gain: 0.35
        }
    ]
};
let settings = DEFAULT_SETTINGS;
let settingsLoaded = false;
const listeners = new Set();
let audioContext = null;
let userInteracted = false;
let lastPlayedAt = 0;
function loadSettings() {
    if (settingsLoaded || ("TURBOPACK compile-time value", "object") === "undefined") return settings;
    settingsLoaded = true;
    try {
        const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
        if (stored && typeof stored === "object") {
            settings = {
                enabled: typeof stored.enabled === "boolean" ? stored.enabled : DEFAULT_SETTINGS.enabled,
                volume: typeof stored.volume === "number" ? Math.min(1, Math.max(0, stored.volume)) : DEFAULT_SETTINGS.volume,
                categories: {
                    ...DEFAULT_SETTINGS.categories,
                    ...stored.categories || {}
                }
            };
        }
    } catch  {}
    return settings;
}
function getSoundSettings() {
    return loadSettings();
}
function getServerSoundSettings() {
    return DEFAULT_SETTINGS;
}
function subscribeSoundSettings(listener) {
    listeners.add(listener);
    return ()=>listeners.delete(listener);
}
function updateSoundSettings(patch) {
    const current = loadSettings();
    settings = {
        ...current,
        ...patch,
        categories: {
            ...current.categories,
            ...patch.categories || {}
        }
    };
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch  {}
    listeners.forEach((listener)=>listener());
}
function hasUserActivation() {
    if (userInteracted) return true;
    const activation = typeof navigator !== "undefined" ? navigator.userActivation : undefined;
    return !!activation?.hasBeenActive;
}
function getAudioContext() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (audioContext) return audioContext;
    if (!hasUserActivation()) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    try {
        audioContext = new AudioCtx();
    } catch  {
        audioContext = null;
    }
    return audioContext;
}
function installAudioUnlock() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const unlock = ()=>{
        userInteracted = true;
        const ctx = getAudioContext();
        if (ctx && ctx.state === "suspended") ctx.resume().catch(()=>{});
        cleanup();
    };
    const cleanup = ()=>{
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock, {
        once: true
    });
    window.addEventListener("keydown", unlock, {
        once: true
    });
    return cleanup;
}
function renderTone(ctx, notes, volume) {
    const now = ctx.currentTime + 0.01;
    const master = ctx.createGain();
    master.gain.value = volume * 0.35;
    master.connect(ctx.destination);
    for (const note of notes){
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        const start = now + note.start;
        const end = start + note.duration;
        const peak = note.gain ?? 1;
        osc.type = note.type ?? "sine";
        osc.frequency.setValueAtTime(note.freq, start);
        if (note.glideTo) osc.frequency.exponentialRampToValueAtTime(note.glideTo, start + note.duration * 0.35);
        env.gain.setValueAtTime(0.0001, start);
        env.gain.linearRampToValueAtTime(peak, start + 0.015);
        env.gain.exponentialRampToValueAtTime(0.0001, end);
        osc.connect(env);
        env.connect(master);
        osc.start(start);
        osc.stop(end + 0.02);
        osc.onended = ()=>{
            osc.disconnect();
            env.disconnect();
        };
    }
    window.setTimeout(()=>master.disconnect(), (Math.max(...notes.map((n)=>n.start + n.duration)) + 0.2) * 1000);
}
function playNotificationSound(category, options = {}) {
    const current = loadSettings();
    if (!options.force && (!current.enabled || !current.categories[category] || current.volume <= 0)) return;
    const nowMs = Date.now();
    if (!options.force && nowMs - lastPlayedAt < MIN_GAP_MS) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    lastPlayedAt = nowMs;
    const play = ()=>{
        try {
            renderTone(ctx, TONES[category], options.force && current.volume <= 0 ? 0.6 : current.volume);
        } catch  {}
    };
    if (ctx.state === "suspended") {
        ctx.resume().then(play).catch(()=>{});
    } else {
        play();
    }
}
function pickLoudestCategory(categories) {
    return categories.reduce((best, category)=>!best || PRIORITY[category] > PRIORITY[best] ? category : best, null);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/NotificationSoundManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationSoundManager",
    ()=>NotificationSoundManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notification-sound.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ID_PREFIX_CATEGORY = [
    [
        "chat-notification-summary",
        "message"
    ],
    [
        "chat-notification-",
        "message"
    ],
    [
        "activity-notification",
        "system"
    ]
];
function categoryOf(toast) {
    if (toast.type === "loading") return null;
    if (typeof toast.id === "string") {
        const match = ID_PREFIX_CATEGORY.find(([prefix])=>toast.id.startsWith(prefix));
        if (match) return match[1];
    }
    switch(toast.type){
        case "success":
        case "error":
        case "warning":
        case "info":
            return toast.type;
        default:
            return "info";
    }
}
function NotificationSoundManager() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "5df4b250b80f2511b16eb05d6367ba66adaaa03c99e735cfd45f92e6990f71ce") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5df4b250b80f2511b16eb05d6367ba66adaaa03c99e735cfd45f92e6990f71ce";
    }
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSonner"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new WeakSet();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const seenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_NotificationSoundManagerUseEffect, t1);
    let t2;
    let t3;
    if ($[3] !== toasts) {
        t2 = ({
            "NotificationSoundManager[useEffect()]": ()=>{
                const categories = [];
                for (const toast of toasts){
                    if (seenRef.current.has(toast)) {
                        continue;
                    }
                    seenRef.current.add(toast);
                    const category = categoryOf(toast);
                    if (category) {
                        categories.push(category);
                    }
                }
                const category_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLoudestCategory"])(categories);
                if (category_0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playNotificationSound"])(category_0);
                }
            }
        })["NotificationSoundManager[useEffect()]"];
        t3 = [
            toasts
        ];
        $[3] = toasts;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    return null;
}
_s(NotificationSoundManager, "A2NdMdX7hX5Uxw9o7lpaIAUV9Mw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSonner"]
    ];
});
_c = NotificationSoundManager;
function _NotificationSoundManagerUseEffect() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installAudioUnlock"])();
}
var _c;
__turbopack_context__.k.register(_c, "NotificationSoundManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_66c953b6._.js.map