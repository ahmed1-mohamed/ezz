module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/config/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/data/config.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "DEFAULT_COUNTRY_ID",
    ()=>DEFAULT_COUNTRY_ID,
    "getCountryId",
    ()=>getCountryId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-route] (ecmascript)");
;
;
const DEFAULT_COUNTRY_ID = "1";
const getCountryId = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return DEFAULT_COUNTRY_ID;
};
const API_CONFIG = {
    ORIGIN: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_URL"],
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    DASHBOARD_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    DASHBOARD_V2_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"],
    IMPORTS_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IMPORTS_API_BASE_URL"],
    DEFAULT_HEADERS: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "country-id": DEFAULT_COUNTRY_ID,
        "country_id": DEFAULT_COUNTRY_ID,
        "ngrok-skip-browser-warning": "69420"
    }
};
}),
"[project]/src/lib/refresh-token.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "refreshAccessToken",
    ()=>refreshAccessToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-route] (ecmascript)");
;
let pendingRefreshPromise = null;
let pendingResolve = null;
let pendingReject = null;
async function refreshAccessToken(refreshToken) {
    if (!refreshToken) {
        throw new Error("No refresh token");
    }
    if (pendingRefreshPromise) {
        return pendingRefreshPromise;
    }
    pendingRefreshPromise = new Promise((resolve, reject)=>{
        pendingResolve = resolve;
        pendingReject = reject;
    });
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420"
            },
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        });
        const rawText = await response.text();
        let refreshed = null;
        try {
            refreshed = rawText ? JSON.parse(rawText) : null;
        } catch  {
            throw new Error(`Token refresh failed: invalid server response (${response.status})`);
        }
        if (!response.ok) {
            throw new Error(refreshed?.message || "Failed to refresh token");
        }
        const result = {
            accessToken: refreshed.access_token,
            refreshToken: refreshed.refresh_token ?? refreshToken,
            expires_at: Math.floor(Date.now() / 1000) + refreshed.expires_in,
            refresh_expires_in: refreshed.refresh_expires_in ?? 86400
        };
        pendingResolve?.(result);
        return result;
    } catch (error) {
        pendingReject?.(error);
        throw error;
    } finally{
        pendingRefreshPromise = null;
        pendingResolve = null;
        pendingReject = null;
    }
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

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
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/src/lib/redis.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isRedisAvailable",
    ()=>isRedisAvailable,
    "redisDel",
    ()=>redisDel,
    "redisExists",
    ()=>redisExists,
    "redisExpire",
    ()=>redisExpire,
    "redisGet",
    ()=>redisGet,
    "redisGetJson",
    ()=>redisGetJson,
    "redisIncr",
    ()=>redisIncr,
    "redisRemember",
    ()=>redisRemember,
    "redisSet",
    ()=>redisSet,
    "redisSetJson",
    ()=>redisSetJson,
    "redisTtl",
    ()=>redisTtl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ioredis$2f$built$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ioredis/built/index.js [app-route] (ecmascript)");
;
const memoryStore = globalThis.redisMemoryStore ??= new Map();
function getMemory(key) {
    const entry = memoryStore.get(key);
    if (!entry) return null;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
        memoryStore.delete(key);
        return null;
    }
    return entry.value;
}
function setMemory(key, value, ttlSeconds) {
    const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
    memoryStore.set(key, {
        value,
        expiresAt
    });
}
function delMemory(keys) {
    keys.forEach((k)=>memoryStore.delete(k));
}
function existsMemory(key) {
    return getMemory(key) !== null;
}
function incrMemory(key) {
    const currentVal = getMemory(key);
    const num = currentVal ? parseInt(currentVal, 10) || 0 : 0;
    const nextVal = num + 1;
    const entry = memoryStore.get(key);
    memoryStore.set(key, {
        value: String(nextVal),
        expiresAt: entry?.expiresAt
    });
    return nextVal;
}
function expireMemory(key, ttlSeconds) {
    const entry = memoryStore.get(key);
    if (entry) {
        entry.expiresAt = Date.now() + ttlSeconds * 1000;
    }
}
function ttlMemory(key) {
    const entry = memoryStore.get(key);
    if (!entry) return -2;
    if (!entry.expiresAt) return -1;
    const remaining = Math.ceil((entry.expiresAt - Date.now()) / 1000);
    if (remaining <= 0) {
        memoryStore.delete(key);
        return -2;
    }
    return remaining;
}
let isRedisConnected = false;
function createRedisClient() {
    const url = process.env.REDIS_URL || "redis://localhost:6379";
    const options = {
        maxRetriesPerRequest: 1,
        enableReadyCheck: true,
        lazyConnect: true,
        enableOfflineQueue: false,
        connectTimeout: 2000,
        retryStrategy (times) {
            if (times > 2) {
                if (!globalThis.redisErrorLogged) {
                    console.warn("[Redis] ⚠️ Redis server is offline. Falling back to in-memory store for dev.");
                    globalThis.redisErrorLogged = true;
                }
                return null;
            }
            return 1000;
        }
    };
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ioredis$2f$built$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](url, options);
    client.on("connect", ()=>{
        isRedisConnected = true;
        globalThis.redisErrorLogged = false;
        console.log("[Redis] ✅ Connected successfully");
    });
    client.on("error", (err)=>{
        isRedisConnected = false;
        if (!globalThis.redisErrorLogged) {
            console.warn(`[Redis] ⚠️ Connection notice: ${err.message}. Using in-memory fallback.`);
            globalThis.redisErrorLogged = true;
        }
    });
    client.on("close", ()=>{
        isRedisConnected = false;
    });
    client.connect().catch(()=>{});
    return client;
}
const redis = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : globalThis.redisClient ??= createRedisClient();
const __TURBOPACK__default__export__ = redis;
function isRedisAvailable() {
    return isRedisConnected;
}
async function redisSet(key, value, ttlSeconds) {
    try {
        if (isRedisConnected) {
            if (ttlSeconds) {
                await redis.set(key, value, "EX", ttlSeconds);
            } else {
                await redis.set(key, value);
            }
            return;
        }
    } catch  {}
    setMemory(key, value, ttlSeconds);
}
async function redisGet(key) {
    try {
        if (isRedisConnected) {
            return await redis.get(key);
        }
    } catch  {}
    return getMemory(key);
}
async function redisSetJson(key, value, ttlSeconds) {
    const serialized = JSON.stringify(value);
    await redisSet(key, serialized, ttlSeconds);
}
async function redisGetJson(key) {
    const value = await redisGet(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
}
async function redisDel(key) {
    const keys = Array.isArray(key) ? key : [
        key
    ];
    try {
        if (isRedisConnected && keys.length > 0) {
            await redis.del(...keys);
            return;
        }
    } catch  {}
    delMemory(keys);
}
async function redisExists(key) {
    try {
        if (isRedisConnected) {
            const result = await redis.exists(key);
            return result === 1;
        }
    } catch  {}
    return existsMemory(key);
}
async function redisIncr(key) {
    try {
        if (isRedisConnected) {
            return await redis.incr(key);
        }
    } catch  {}
    return incrMemory(key);
}
async function redisExpire(key, ttlSeconds) {
    try {
        if (isRedisConnected) {
            await redis.expire(key, ttlSeconds);
            return;
        }
    } catch  {}
    expireMemory(key, ttlSeconds);
}
async function redisTtl(key) {
    try {
        if (isRedisConnected) {
            return await redis.ttl(key);
        }
    } catch  {}
    return ttlMemory(key);
}
async function redisRemember(key, ttlSeconds, fetcher) {
    const cached = await redisGetJson(key);
    if (cached !== null) {
        return cached;
    }
    const fresh = await fetcher();
    if (fresh !== undefined && fresh !== null) {
        await redisSetJson(key, fresh, ttlSeconds);
    }
    return fresh;
}
}),
"[project]/src/lib/rate-limiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blacklistToken",
    ()=>blacklistToken,
    "isTokenBlacklisted",
    ()=>isTokenBlacklisted,
    "loginRateLimit",
    ()=>loginRateLimit,
    "rateLimit",
    ()=>rateLimit,
    "refreshRateLimit",
    ()=>refreshRateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/redis.ts [app-route] (ecmascript)");
;
async function rateLimit(config) {
    const { keyPrefix, identifier, maxRequests, windowSeconds } = config;
    const safeId = identifier.replace(/[^a-zA-Z0-9@._-]/g, "_");
    const key = `rate_limit:${keyPrefix}:${safeId}`;
    try {
        const current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redisIncr"])(key);
        if (current === 1) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redisExpire"])(key, windowSeconds);
        }
        const ttl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redisTtl"])(key);
        const allowed = current <= maxRequests;
        const remaining = Math.max(0, maxRequests - current);
        return {
            allowed,
            remaining,
            retryAfter: allowed ? 0 : Math.max(0, ttl),
            limit: maxRequests
        };
    } catch (err) {
        console.error("[RateLimit] Error – failing open:", err);
        return {
            allowed: true,
            remaining: maxRequests,
            retryAfter: 0,
            limit: maxRequests
        };
    }
}
async function loginRateLimit(ip) {
    return rateLimit({
        keyPrefix: "login",
        identifier: ip,
        maxRequests: 5,
        windowSeconds: 60
    });
}
async function refreshRateLimit(ip) {
    return rateLimit({
        keyPrefix: "refresh",
        identifier: ip,
        maxRequests: 30,
        windowSeconds: 60
    });
}
const BLACKLIST_PREFIX = "blacklist:token:";
async function blacklistToken(token, expiresAt) {
    try {
        const now = Math.floor(Date.now() / 1000);
        const ttl = expiresAt - now;
        if (ttl <= 0) {
            return;
        }
        const tokenHash = simpleHash(token);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redisSet"])(`${BLACKLIST_PREFIX}${tokenHash}`, "1", ttl);
        console.log(`[Redis] 🚫 Token blacklisted (TTL: ${ttl}s)`);
    } catch (err) {
        console.error("[Redis] Failed to blacklist token:", err);
    }
}
async function isTokenBlacklisted(token) {
    try {
        const tokenHash = simpleHash(token);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redisExists"])(`${BLACKLIST_PREFIX}${tokenHash}`);
    } catch (err) {
        console.error("[Redis] Failed to check blacklist:", err);
        return false;
    }
}
function simpleHash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        hash = hash * 33 ^ str.charCodeAt(i);
    }
    return (hash >>> 0).toString(16);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/auth/refresh/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$refresh$2d$token$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/refresh-token.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rate-limiter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
;
async function POST() {
    try {
        const headerStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["headers"])();
        const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "unknown";
        const rateLimitResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refreshRateLimit"])(ip);
        if (!rateLimitResult.allowed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Too many refresh requests. Please wait."
            }, {
                status: 429,
                headers: {
                    "Retry-After": String(rateLimitResult.retryAfter),
                    "X-RateLimit-Limit": String(rateLimitResult.limit),
                    "X-RateLimit-Remaining": "0"
                }
            });
        }
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const refreshToken = cookieStore.get("refresh_token")?.value;
        if (!refreshToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No refresh token found"
            }, {
                status: 401
            });
        }
        const refreshed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$refresh$2d$token$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refreshAccessToken"])(refreshToken);
        if (refreshed.refreshToken !== refreshToken) {
            cookieStore.set("refresh_token", refreshed.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
                path: "/",
                maxAge: refreshed.refresh_expires_in ?? 60 * 60 * 24
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            accessToken: refreshed.accessToken,
            expires_at: refreshed.expires_at
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Token refresh failed"
        }, {
            status: 401
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cfcba837._.js.map