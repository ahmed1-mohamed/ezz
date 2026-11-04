module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/contexts/SessionProviderWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionProviderWrapper",
    ()=>SessionProviderWrapper,
    "useToken",
    ()=>useToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const SessionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const useToken = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SessionContext);
const SessionProviderWrapper = ({ children })=>{
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const userId = session?.user?.id;
    const expertId = session?.user?.expert_id;
    const roleName = session?.user?.role_name;
    const userType = session?.user?.user_type || session?.user?.role_name?.toLowerCase();
    const userName = session?.user?.name;
    const email = session?.user?.email;
    const expiresAt = session?.user?.expires_at;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionContext.Provider, {
        value: {
            token,
            userId,
            expertId,
            roleName,
            userType,
            userName,
            email,
            expiresAt
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/SessionProviderWrapper.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/auth-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SessionProviderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/SessionProviderWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AuthProvider({ children, session }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$SessionProviderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProviderWrapper"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/auth-provider.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth-provider.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/state/react-query/query-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function QueryProvider({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    staleTime: 5 * 60 * 1000,
                    gcTime: 10 * 60 * 1000,
                    retry: 1,
                    throwOnError: false,
                    refetchIntervalInBackground: false
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/react-query/query-provider.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/config/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const BASE_URL = ("TURBOPACK compile-time value", "https://demoapi.p-adviser.com") || "https://demoapi.p-adviser.com";
const API_BASE_URL = `${BASE_URL}/api`;
const DASHBOARD_API_BASE_URL = `${API_BASE_URL}/dashboard`;
const DASHBOARD_V2_API_BASE_URL = `${DASHBOARD_API_BASE_URL}/v2`;
const IMPORTS_API_BASE_URL = `${API_BASE_URL}/imports`;
const __TURBOPACK__default__export__ = BASE_URL;
}),
"[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "DEFAULT_COUNTRY_ID",
    ()=>DEFAULT_COUNTRY_ID,
    "getCountryId",
    ()=>getCountryId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
;
const DEFAULT_COUNTRY_ID = "1";
const getCountryId = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return DEFAULT_COUNTRY_ID;
};
const API_CONFIG = {
    ORIGIN: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"],
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    DASHBOARD_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    DASHBOARD_V2_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"],
    IMPORTS_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMPORTS_API_BASE_URL"],
    DEFAULT_HEADERS: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "country-id": DEFAULT_COUNTRY_ID,
        "country_id": DEFAULT_COUNTRY_ID,
        "ngrok-skip-browser-warning": "69420"
    }
};
}),
"[project]/src/lib/logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "getErrorMessage",
    ()=>getErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
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
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["API_CONFIG"].BASE_URL,
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["API_CONFIG"].DEFAULT_HEADERS,
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
            const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
            config.headers["country-id"] = countryId;
            config.headers["country_id"] = countryId;
            config.headers["ngrok-skip-browser-warning"] = "69420";
            // Safeguard: Ensure centralized base url is used
            if (config.baseURL && (config.baseURL.includes("ngrok") || config.baseURL.includes("api.p-adviser.com"))) {
                config.baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"];
            }
            if (config.url && (config.url.includes("ngrok") || config.url.includes("api.p-adviser.com"))) {
                config.url = config.url.replace(/https?:\/\/[^\/]*ngrok[^\/]*/g, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]).replace(/https?:\/\/api\.p-adviser\.com/g, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]);
            }
            if (config.url && config.url.startsWith("/api/")) {
                config.url = config.url.replace(/^\/api/, "");
            }
            if (this.accessToken && this.expiresAt) {
                const now = Math.floor(Date.now() / 1000);
                const isExpiringSoon = this.expiresAt <= now + 60;
                if (isExpiringSoon) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].auth("⏰ Token expiring soon → refreshing");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].request(config);
            return config;
        });
        this.client.interceptors.response.use((response)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].response(response);
            const data = response.data;
            if (data && typeof data === 'object') {
                if (data.status === false || data.success === false || data.status === "error") {
                    const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"](data.message || "Business logic error", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"].ERR_BAD_RESPONSE, response.config, response.request, response);
                    return Promise.reject(error);
                }
            }
            return response;
        }, async (error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].error(error);
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].auth("⚠️ 401 → attempting refresh");
                try {
                    await this.refreshToken();
                    originalRequest.headers = {
                        ...originalRequest.headers,
                        Authorization: `Bearer ${this.accessToken}`
                    };
                    return this.client(originalRequest);
                } catch  {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].auth("❌ Refresh failed → redirecting to login");
                    this.clearAuthToken();
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].auth("🔄 Calling /api/auth/refresh");
            const res = await fetch("/api/auth/refresh", {
                method: "POST",
                credentials: "include"
            });
            if (!res.ok) {
                this.clearAuthToken();
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
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
        const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiLogger"].auth(`🔑 Token initialized (hasToken: ${!!token}, expiresAt: ${expiresAt})`);
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
}),
"[project]/src/app/loading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex items-center justify-center mt-20 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "custom-loader"
        }, void 0, false, {
            fileName: "[project]/src/app/loading.tsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/loading.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/AuthBootstrap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AuthBootstrap({ children }) {
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [isTokenReady, setIsTokenReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initializedTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(session);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        sessionRef.current = session;
    }, [
        session
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (status === "unauthenticated") {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].clearAuthToken();
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
        const initializeToken = async ()=>{
            const accessToken = session?.user?.accessToken;
            const expiresAt = session?.user?.expires_at;
            if (!accessToken || !expiresAt) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].clearAuthToken();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                    redirect: false
                });
                window.location.href = "/";
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(accessToken, expiresAt);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setSessionUpdateCallback(async ({ accessToken: newToken, expiresAt: newExpiry })=>{
                initializedTokenRef.current = newToken;
                await update({
                    ...sessionRef.current,
                    user: {
                        ...sessionRef.current?.user,
                        accessToken: newToken,
                        expires_at: newExpiry
                    }
                });
            });
            setIsTokenReady(true);
        };
        initializeToken();
    }, [
        session?.user?.accessToken,
        session?.user?.expires_at,
        status
    ]);
    if (status === "loading" || !isTokenReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/AuthBootstrap.tsx",
            lineNumber: 78,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/i18n/data:abbe57 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setUserLocale",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401203ad2199217b8b8b08892499087b54e49dc7fe":"setUserLocale"},"src/i18n/locale.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401203ad2199217b8b8b08892499087b54e49dc7fe", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setUserLocale");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgTG9jYWxlLCBMT0NBTEVfQ09PS0lFX05BTUUsIGRlZmF1bHRMb2NhbGUgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMb2NhbGUoKTogUHJvbWlzZTxMb2NhbGU+IHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvbnN0IGxvY2FsZSA9IGNvb2tpZVN0b3JlLmdldChMT0NBTEVfQ09PS0lFX05BTUUpPy52YWx1ZSBhcyBMb2NhbGUgfCB1bmRlZmluZWQ7XG4gIHJldHVybiBsb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFVzZXJMb2NhbGUobG9jYWxlOiBMb2NhbGUpIHtcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvb2tpZVN0b3JlLnNldChMT0NBTEVfQ09PS0lFX05BTUUsIGxvY2FsZSwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzY1LFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICB9KTtcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQVdzQiwwTEFBQSJ9
}),
"[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$abbe57__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/i18n/data:abbe57 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])() || "en";
    // Messages already include the English fallback for missing keys (see src/i18n/request.ts).
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])();
    const [, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        applyDocumentLanguage(language);
    }, [
        language
    ]);
    const toggleLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const nextLang = language === "en" ? "ar" : "en";
        applyDocumentLanguage(nextLang);
        startTransition(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$data$3a$abbe57__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setUserLocale"])(nextLang);
        });
    }, [
        language
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, values)=>{
        if (!key) return "";
        const value = getNestedValue(messages, key);
        return value === undefined ? key : interpolate(value, values);
    }, [
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
}),
"[project]/src/contexts/theme_context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
        localStorage.setItem("app_theme", theme);
    } catch  {}
}
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    // The initial "dark" class is applied before paint by the inline script in the root layout;
    // this only syncs React state with the saved preference.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let saved = null;
        try {
            saved = localStorage.getItem("app_theme");
        } catch  {}
        const initial = saved === "dark" ? "dark" : "light";
        setTheme(initial);
        applyTheme(initial);
    }, []);
    const toggleTheme = ()=>{
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/theme_context.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
}),
"[project]/src/components/client-intl-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientIntlProvider",
    ()=>ClientIntlProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-ssr] (ecmascript) <export default as NextIntlClientProvider>");
"use client";
;
;
function ClientIntlProvider({ messages, locale, timeZone = "UTC", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
        messages: messages,
        locale: locale,
        timeZone: timeZone,
        getMessageFallback: ({ key })=>key,
        onError: (error)=>{
            if (error.code === "MISSING_MESSAGE") return;
            console.error(error);
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/client-intl-provider.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/notification-sound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return settings;
    //TURBOPACK unreachable
    ;
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
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const AudioCtx = undefined;
}
function installAudioUnlock() {
    if ("TURBOPACK compile-time truthy", 1) return ()=>{};
    //TURBOPACK unreachable
    ;
    const unlock = undefined;
    const cleanup = undefined;
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
}),
"[project]/src/components/shared/NotificationSoundManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationSoundManager",
    ()=>NotificationSoundManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notification-sound.ts [app-ssr] (ecmascript)");
"use client";
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
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSonner"])();
    const seenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new WeakSet());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["installAudioUnlock"])(), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const categories = [];
        for (const toast of toasts){
            if (seenRef.current.has(toast)) continue;
            seenRef.current.add(toast);
            const category = categoryOf(toast);
            if (category) categories.push(category);
        }
        const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickLoudestCategory"])(categories);
        if (category) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notification$2d$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playNotificationSound"])(category);
    }, [
        toasts
    ]);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8348bd9b._.js.map