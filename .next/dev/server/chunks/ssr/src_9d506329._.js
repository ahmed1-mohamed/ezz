module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "extractErrorMessage",
    ()=>extractErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function extractErrorMessage(error, fallbackMessage = "Something went wrong. Please try again.") {
    if (!error) return fallbackMessage;
    const err = error;
    const data = err?.response?.data || err?.data || (typeof err === "object" ? err : null);
    // 1. Check if backend returned structured validation errors -> extract exactly 1st message
    if (data?.errors) {
        if (Array.isArray(data.errors) && data.errors.length > 0) {
            const first = data.errors[0];
            if (typeof first === "string" && first.trim()) return cleanMessageText(first.trim());
            if (typeof first === "object" && first !== null) {
                const val = Object.values(first)[0];
                if (typeof val === "string" && val.trim()) return cleanMessageText(val.trim());
            }
        } else if (typeof data.errors === "object" && data.errors !== null) {
            const values = Object.values(data.errors);
            if (values.length > 0) {
                const firstVal = values[0];
                if (Array.isArray(firstVal) && firstVal.length > 0 && typeof firstVal[0] === "string" && firstVal[0].trim()) {
                    return cleanMessageText(firstVal[0].trim());
                }
                if (typeof firstVal === "string" && firstVal.trim()) {
                    return cleanMessageText(firstVal.trim());
                }
            }
        }
    }
    // 2. Check for data.message
    if (typeof data?.message === "string" && data.message.trim()) {
        const msg = data.message.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    // 3. Check for data.error
    if (typeof data?.error === "string" && data.error.trim()) {
        const msg = data.error.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    // 4. Check for top-level Error message
    if (typeof err?.message === "string" && err.message.trim()) {
        const msg = err.message.trim();
        if (!isGenericStatusMessage(msg)) {
            return cleanMessageText(msg);
        }
    }
    return fallbackMessage;
}
function isGenericStatusMessage(msg) {
    const lower = msg.toLowerCase();
    return lower.startsWith("request failed with status") || lower.includes("status code") || lower === "operation failed" || lower === "internal server error" || lower === "bad request" || lower === "unprocessable entity";
}
function cleanMessageText(msg) {
    // Strip any leading "field_name: " or "Status 422: "
    return msg.replace(/^([a-zA-Z0-9_.-]+:\s*)+/, "").trim() || msg;
}
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, type, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#6A7282] placeholder:text-[14px] placeholder:font-[400] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "autofill:bg-[#F9FAFB] autofill:text-white", "dark:bg-background dark:border-border dark:text-white dark:placeholder:text-white", "dark:autofill:bg-background dark:autofill:shadow-[inset_0_0_0px_1000px_var(--background)] dark:autofill:![-webkit-text-fill-color:white]", error && "border-red-500 focus-visible:ring-red-500", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = "Label";
;
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildGoogleMapsUrl",
    ()=>buildGoogleMapsUrl,
    "extractCoordinates",
    ()=>extractCoordinates,
    "isCoordinateText",
    ()=>isCoordinateText,
    "isShortMapsUrl",
    ()=>isShortMapsUrl,
    "isValidLatLng",
    ()=>isValidLatLng,
    "parseCoordinateInput",
    ()=>parseCoordinateInput,
    "resolveGoogleMapsUrl",
    ()=>resolveGoogleMapsUrl,
    "roundCoordinate",
    ()=>roundCoordinate,
    "toCoordinate",
    ()=>toCoordinate,
    "toLatLng",
    ()=>toLatLng
]);
const NUM = "(-?\\d{1,3}(?:\\.\\d+)?)";
const SEP = "\\s*(?:,|%2C)\\s*\\+?\\s*";
/**
 * Patterns in priority order. The `!3d…!4d` data block is the exact place pin, so it wins over
 * `@lat,lng`, which is only the viewport centre of the page.
 */ const URL_PATTERNS = [
    {
        regex: new RegExp(`!3d${NUM}!4d${NUM}`),
        latFirst: true
    },
    {
        regex: new RegExp(`!4d${NUM}!3d${NUM}`),
        latFirst: false
    },
    {
        regex: new RegExp(`[?&](?:q|query|destination|daddr|saddr|ll|sll|center|viewpoint)=(?:loc:)?${NUM}${SEP}${NUM}`),
        latFirst: true
    },
    {
        regex: new RegExp(`/(?:search|place|dir)/${NUM}${SEP}${NUM}`),
        latFirst: true
    },
    {
        regex: new RegExp(`@${NUM}${SEP}${NUM}`),
        latFirst: true
    },
    {
        regex: new RegExp(`!2d${NUM}!3d${NUM}`),
        latFirst: false
    }
];
function isValidLatLng(lat, lng) {
    return Number.isFinite(lat) && Number.isFinite(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180 && !(lat === 0 && lng === 0);
}
function roundCoordinate(value) {
    return Math.round(value * 1e6) / 1e6;
}
function parseCoordinateInput(value) {
    const trimmed = value.trim().replace(",", ".");
    if (!/^-?\d+(\.\d+)?$/.test(trimmed)) return null;
    const num = Number(trimmed);
    return Number.isFinite(num) ? num : null;
}
function toCoordinate(value) {
    if (value === null || value === undefined || value === "") return null;
    const num = typeof value === "number" ? value : Number(value);
    return Number.isFinite(num) ? num : null;
}
function toLatLng(lat, lng) {
    const a = toCoordinate(lat);
    const b = toCoordinate(lng);
    return a !== null && b !== null && isValidLatLng(a, b) ? {
        lat: a,
        lng: b
    } : null;
}
function buildGoogleMapsUrl(lat, lng) {
    return `https://www.google.com/maps/search/?api=1&query=${roundCoordinate(lat)},${roundCoordinate(lng)}`;
}
function extractCoordinates(input) {
    if (!input || typeof input !== "string") return null;
    const trimmed = input.trim();
    const direct = trimmed.match(/^\(?\s*(-?\d{1,2}(?:\.\d+)?)\s*[,\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*\)?$/);
    if (direct) {
        const lat = Number(direct[1]);
        const lng = Number(direct[2]);
        return isValidLatLng(lat, lng) ? {
            lat,
            lng
        } : null;
    }
    let decoded = trimmed;
    try {
        decoded = decodeURIComponent(trimmed.replace(/\+/g, " "));
    } catch  {
        decoded = trimmed;
    }
    for (const { regex, latFirst } of URL_PATTERNS){
        const match = decoded.match(regex) ?? trimmed.match(regex);
        if (!match) continue;
        const lat = Number(latFirst ? match[1] : match[2]);
        const lng = Number(latFirst ? match[2] : match[1]);
        if (isValidLatLng(lat, lng)) return {
            lat,
            lng
        };
    }
    return null;
}
function isShortMapsUrl(input) {
    try {
        const host = new URL(input.trim()).hostname.toLowerCase();
        return host === "goo.gl" || host === "maps.app.goo.gl" || host === "g.co" || host.endsWith(".page.link");
    } catch  {
        return false;
    }
}
function isCoordinateText(input) {
    return !/^https?:\/\//i.test(input.trim()) && extractCoordinates(input) !== null;
}
async function resolveGoogleMapsUrl(input, signal) {
    const direct = extractCoordinates(input);
    if (direct) return direct;
    if (!isShortMapsUrl(input)) return null;
    const res = await fetch(`/api/expand-url?shortUrl=${encodeURIComponent(input.trim())}`, {
        signal
    });
    if (!res.ok) return null;
    const data = await res.json().catch(()=>null);
    return typeof data?.longUrl === "string" ? extractCoordinates(data.longUrl) : null;
}
}),
"[project]/src/lib/maps/geocoding.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_DETAILS",
    ()=>EMPTY_DETAILS,
    "googleReverseGeocode",
    ()=>googleReverseGeocode,
    "isAbortError",
    ()=>isAbortError,
    "lookupAddress",
    ()=>lookupAddress,
    "reverseGeocode",
    ()=>reverseGeocode,
    "searchPlaces",
    ()=>searchPlaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)");
;
const EMPTY_DETAILS = {
    address: "",
    city: "",
    area: "",
    country: "",
    countryCode: ""
};
const CACHE_LIMIT = 100;
function remember(cache, key, value) {
    cache.set(key, value);
    if (cache.size > CACHE_LIMIT) {
        const oldest = cache.keys().next().value;
        if (oldest !== undefined) cache.delete(oldest);
    }
}
function abortError() {
    return new DOMException("Aborted", "AbortError");
}
function isAbortError(error) {
    return error instanceof DOMException && error.name === "AbortError";
}
/* ── Reverse geocoding (OpenStreetMap Nominatim) ──────────────────────────────
 * Nominatim's usage policy allows at most 1 request per second, so requests are queued
 * and spaced, cached by rounded coordinates, and skipped when cancelled while waiting. */ const NOMINATIM_GAP_MS = 1100;
const reverseCache = new Map();
let nominatimQueue = Promise.resolve();
let lastNominatimAt = 0;
function scheduleNominatim(task, signal) {
    const run = nominatimQueue.then(async ()=>{
        if (signal?.aborted) throw abortError();
        const wait = lastNominatimAt + NOMINATIM_GAP_MS - Date.now();
        if (wait > 0) await new Promise((resolve)=>setTimeout(resolve, wait));
        if (signal?.aborted) throw abortError();
        lastNominatimAt = Date.now();
        return task();
    });
    nominatimQueue = run.catch(()=>undefined);
    return run;
}
function shortAddress(displayName) {
    return (displayName || "").split(",").slice(0, 3).map((p)=>p.trim()).filter(Boolean).join(", ");
}
async function reverseGeocode(lat, lng, options = {}) {
    const language = options.language === "ar" ? "ar,en" : "en,ar";
    const key = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(lat).toFixed(5)},${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(lng).toFixed(5)}|${language}`;
    const cached = reverseCache.get(key);
    if (cached) return cached;
    return scheduleNominatim(async ()=>{
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&zoom=18` + `&lat=${lat}&lon=${lng}&accept-language=${encodeURIComponent(language)}`;
        const res = await fetch(url, {
            signal: options.signal
        });
        if (!res.ok) throw new Error(`Reverse geocoding failed (${res.status})`);
        const data = await res.json();
        const a = data?.address || {};
        const details = {
            address: shortAddress(data?.display_name),
            city: a.city || a.town || a.municipality || a.village || a.county || a.state || "",
            area: a.suburb || a.neighbourhood || a.quarter || a.city_district || a.district || a.residential || "",
            country: a.country || "",
            countryCode: (a.country_code || "").toUpperCase()
        };
        remember(reverseCache, key, details);
        return details;
    }, options.signal);
}
/* ── Place search / autocomplete (Photon by komoot, OpenStreetMap data) ────────
 * Photon is built for search-as-you-type (unlike Nominatim). Callers debounce input,
 * pass an AbortSignal, and results are cached per query. */ const searchCache = new Map();
const PHOTON_LANGUAGES = new Set([
    "en",
    "de",
    "fr",
    "it"
]);
function photonDetails(p) {
    const street = [
        p.street,
        p.housenumber
    ].filter(Boolean).join(" ");
    return {
        address: [
            p.name,
            street,
            p.district || p.locality
        ].filter(Boolean).join(", "),
        city: p.city || p.county || p.state || "",
        area: p.district || p.locality || (p.type === "district" || p.type === "locality" ? p.name : "") || "",
        country: p.country || "",
        countryCode: (p.countrycode || "").toUpperCase()
    };
}
async function searchPlaces(query, options = {}) {
    const q = query.trim();
    if (q.length < 3) return [];
    const lang = options.language && PHOTON_LANGUAGES.has(options.language) ? options.language : "default";
    const near = options.near ? `${options.near.lat.toFixed(2)},${options.near.lng.toFixed(2)}` : "";
    const key = `${q.toLowerCase()}|${lang}|${near}`;
    const cached = searchCache.get(key);
    if (cached) return cached;
    const params = new URLSearchParams({
        q,
        limit: String(options.limit ?? 6),
        lang
    });
    if (options.near) {
        params.set("lat", String(options.near.lat));
        params.set("lon", String(options.near.lng));
    }
    const res = await fetch(`https://photon.komoot.io/api/?${params.toString()}`, {
        signal: options.signal
    });
    if (!res.ok) throw new Error(`Place search failed (${res.status})`);
    const data = await res.json();
    const seen = new Set();
    const suggestions = [];
    for (const feature of data?.features ?? []){
        const [lng, lat] = feature?.geometry?.coordinates ?? [];
        const p = feature?.properties ?? {};
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
        const name = p.name || [
            p.street,
            p.housenumber
        ].filter(Boolean).join(" ") || p.city || "";
        if (!name) continue;
        const subtitle = [
            p.district || p.locality,
            p.city,
            p.state,
            p.country
        ].filter((part, i, all)=>part && part !== name && all.indexOf(part) === i).join(", ");
        const dedupeKey = `${name}|${subtitle}`;
        if (seen.has(dedupeKey)) continue;
        seen.add(dedupeKey);
        suggestions.push({
            id: `${p.osm_type || "x"}${p.osm_id || suggestions.length}`,
            name,
            subtitle,
            lat,
            lng,
            kind: p.osm_value || p.type || "",
            details: photonDetails(p)
        });
    }
    remember(searchCache, key, suggestions);
    return suggestions;
}
async function googleReverseGeocode(lat, lng, options = {}) {
    const params = new URLSearchParams({
        lat: String(lat),
        lng: String(lng),
        language: options.language === "ar" ? "ar" : "en"
    });
    const res = await fetch(`/api/geocode?${params.toString()}`, {
        signal: options.signal
    });
    if (!res.ok) return null;
    const data = await res.json().catch(()=>null);
    return data?.details ?? null;
}
async function lookupAddress(lat, lng, options = {}) {
    if (options.preferGoogle) {
        try {
            const google = await googleReverseGeocode(lat, lng, options);
            if (google && (google.city || google.address)) return google;
        } catch (error) {
            if (isAbortError(error)) throw error;
        }
    }
    try {
        return await reverseGeocode(lat, lng, options);
    } catch (error) {
        if (isAbortError(error)) throw error;
        return EMPTY_DETAILS;
    }
}
}),
"[project]/src/components/shared/maps/MapSearchBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapSearchBox",
    ()=>MapSearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/geocoding.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const DEBOUNCE_MS = 350;
const MIN_CHARS = 3;
function MapSearchBox({ onSelect, onCoordinates, getBias, className }) {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getBiasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(getBias);
    getBiasRef.current = getBias;
    const coordinateMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractCoordinates"])(query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = query.trim();
        if (q.length < MIN_CHARS || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractCoordinates"])(q)) {
            setResults([]);
            setStatus("idle");
            return;
        }
        const controller = new AbortController();
        const timer = window.setTimeout(async ()=>{
            setStatus("loading");
            try {
                const found = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchPlaces"])(q, {
                    language,
                    near: getBiasRef.current(),
                    signal: controller.signal
                });
                setResults(found);
                setActive(found.length ? 0 : -1);
                setStatus("done");
            } catch (error) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(error)) setStatus("error");
            }
        }, DEBOUNCE_MS);
        return ()=>{
            window.clearTimeout(timer);
            controller.abort();
        };
    }, [
        query,
        language
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onPointerDown = (e)=>{
            if (!rootRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", onPointerDown);
        return ()=>document.removeEventListener("pointerdown", onPointerDown);
    }, [
        open
    ]);
    const choose = (suggestion)=>{
        onSelect(suggestion);
        setQuery(suggestion.name);
        setOpen(false);
    };
    const goToCoordinates = ()=>{
        if (!coordinateMatch) return;
        onCoordinates(coordinateMatch);
        setOpen(false);
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            if (coordinateMatch) goToCoordinates();
            else if (results[active]) choose(results[active]);
            return;
        }
        if (e.key === "Escape") {
            setOpen(false);
            return;
        }
        if (!results.length) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActive((i)=>(i + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i)=>(i - 1 + results.length) % results.length);
        }
    };
    const showPanel = open && query.trim().length >= MIN_CHARS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-white/95 px-2.5 shadow-md backdrop-blur-md focus-within:border-[#008081] focus-within:ring-2 focus-within:ring-[#008081]/20 dark:border-neutral-700 dark:bg-neutral-900/95",
                children: [
                    status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 shrink-0 animate-spin text-[#008081]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-4 w-4 shrink-0 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setOpen(true);
                        },
                        onFocus: ()=>setOpen(true),
                        onKeyDown: onKeyDown,
                        placeholder: t("locations.mapPicker.searchPlaceholder"),
                        "aria-label": t("locations.mapPicker.searchPlaceholder"),
                        role: "combobox",
                        "aria-expanded": showPanel,
                        "aria-controls": listId,
                        "aria-autocomplete": "list",
                        className: "min-w-0 flex-1 bg-transparent text-xs text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setQuery("");
                            setResults([]);
                        },
                        "aria-label": t("locations.mapPicker.clearSearch"),
                        className: "rounded p-0.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            showPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: listId,
                role: "listbox",
                className: "absolute inset-x-0 top-full z-[1100] mt-1 max-h-72 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-xl dark:border-neutral-700 dark:bg-neutral-900",
                children: coordinateMatch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: goToCoordinates,
                    className: "flex w-full items-center gap-2 px-3 py-2 text-start text-xs hover:bg-gray-50 dark:hover:bg-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "h-3.5 w-3.5 shrink-0 text-[#008081]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-gray-800 dark:text-gray-200",
                            children: [
                                coordinateMatch.lat.toFixed(6),
                                ", ",
                                coordinateMatch.lng.toFixed(6)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                    lineNumber: 154,
                    columnNumber: 13
                }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "px-3 py-2 text-xs text-red-500",
                    children: t("locations.mapPicker.searchFailed")
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, this) : status === "done" && results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "px-3 py-2 text-xs text-gray-500 dark:text-gray-400",
                    children: t("locations.mapPicker.noResults")
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                    lineNumber: 167,
                    columnNumber: 13
                }, this) : results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "option",
                        "aria-selected": i === active,
                        onMouseEnter: ()=>setActive(i),
                        onClick: ()=>choose(r),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-start gap-2 px-3 py-2 text-start", i === active ? "bg-teal-50 dark:bg-teal-950/40" : "hover:bg-gray-50 dark:hover:bg-neutral-800"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[#008081]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-xs font-medium text-gray-900 dark:text-gray-100",
                                        children: r.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this),
                                    r.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-[11px] text-gray-500 dark:text-gray-400",
                                        children: r.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                                        lineNumber: 186,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                                lineNumber: 183,
                                columnNumber: 17
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                        lineNumber: 170,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/maps/MapSearchBox.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shared/InteractiveMapPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveMapPicker",
    ()=>InteractiveMapPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-ssr] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/geocoding.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$MapSearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/maps/MapSearchBox.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const FALLBACK_CENTER = {
    lat: 25.2048,
    lng: 55.2708
};
const SELECTED_ZOOM = 16;
const NOTICE_MS = 5000;
const PIN_HTML = `
  <div class="map-pin">
    <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.611 0 0 7.611 0 17c0 10.5 17 25 17 25s17-14.5 17-25C34 7.611 26.389 0 17 0Z" fill="#008081"/>
      <circle cx="17" cy="17" r="6.5" fill="white"/>
      <circle cx="17" cy="17" r="3" fill="#008081"/>
    </svg>
  </div>`;
function validPoint(lat, lng) {
    return typeof lat === "number" && typeof lng === "number" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLatLng"])(lat, lng) ? {
        lat,
        lng
    } : null;
}
function samePoint(a, b) {
    return !!a && !!b && Math.abs(a.lat - b.lat) < 1e-6 && Math.abs(a.lng - b.lng) < 1e-6;
}
/**
 * Animates short moves only. Leaflet's flyTo across a long distance (e.g. another city or country)
 * can leave the tile layer misaligned and the map blank, so far jumps are instant.
 */ function moveMap(map, lat, lng, zoom) {
    if (!map) return;
    map.stop();
    const target = [
        lat,
        lng
    ];
    const isNear = map.getBounds().pad(0.5).contains(target);
    if (isNear) map.flyTo(target, zoom, {
        duration: 0.6
    });
    else map.setView(target, zoom, {
        animate: false
    });
}
function InteractiveMapPicker({ latitude, longitude, defaultCenter, onLocationSelect, height = "h-[320px] sm:h-[420px]", readOnly = false, className = "", defaultZoom = 12, showControls = true, showBadges = true, searchable = !readOnly, markerLabel }) {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRtl = language === "ar";
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastEmittedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lookupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const noticeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Latest values for Leaflet event handlers, which are registered once.
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        onLocationSelect,
        language,
        readOnly,
        markerLabel
    });
    latest.current = {
        onLocationSelect,
        language,
        readOnly,
        markerLabel
    };
    const point = validPoint(latitude, longitude);
    const center = defaultCenter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLatLng"])(defaultCenter.lat, defaultCenter.lng) ? defaultCenter : null;
    const initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        point,
        center,
        defaultZoom
    });
    initial.current = {
        point,
        center,
        defaultZoom
    };
    const [mapReady, setMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(point);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isGeocoding, setIsGeocoding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const showNotice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        setNotice(message);
        if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
        noticeTimerRef.current = window.setTimeout(()=>setNotice(null), NOTICE_MS);
    }, []);
    const placeMarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lat, lng)=>{
        const L = leafletRef.current;
        const map = mapRef.current;
        if (!L || !map) return;
        if (markerRef.current) {
            markerRef.current.setLatLng([
                lat,
                lng
            ]);
            return;
        }
        const marker = L.marker([
            lat,
            lng
        ], {
            icon: L.divIcon({
                className: "map-pin-icon",
                html: PIN_HTML,
                iconSize: [
                    34,
                    42
                ],
                iconAnchor: [
                    17,
                    42
                ]
            }),
            draggable: !latest.current.readOnly,
            keyboard: true,
            autoPan: true
        }).addTo(map);
        marker.on("dragend", ()=>{
            const pos = marker.getLatLng();
            selectRef.current(pos.lat, pos.lng, "map");
        });
        if (latest.current.markerLabel) {
            marker.bindTooltip(latest.current.markerLabel, {
                direction: "top",
                offset: [
                    0,
                    -40
                ]
            });
        }
        markerRef.current = marker;
    }, []);
    const emit = (data)=>latest.current.onLocationSelect?.(data);
    /** Moves the pin, reports the coordinates right away, then reports the address once known. */ const select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (rawLat, rawLng, source, preset)=>{
        const lat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(rawLat);
        const lng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(rawLng);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLatLng"])(lat, lng)) return;
        const base = {
            lat,
            lng,
            googleMapLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(lat, lng),
            source
        };
        lastEmittedRef.current = {
            lat,
            lng
        };
        setCoords({
            lat,
            lng
        });
        placeMarker(lat, lng);
        lookupRef.current?.abort();
        if (preset) {
            setAddress(preset.address);
            emit({
                ...base,
                detailsLoaded: true,
                ...preset,
                landmark: preset.address
            });
            return;
        }
        emit({
            ...base,
            detailsLoaded: false
        });
        const controller = new AbortController();
        lookupRef.current = controller;
        setIsGeocoding(true);
        try {
            const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lookupAddress"])(lat, lng, {
                language: latest.current.language,
                signal: controller.signal
            });
            setAddress(details.address);
            if (!details.address && !details.city) showNotice(t("locations.mapPicker.addressNotFound"));
            emit({
                ...base,
                detailsLoaded: true,
                ...details,
                landmark: details.address
            });
        } catch (error) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(error)) emit({
                ...base,
                detailsLoaded: true
            });
        } finally{
            if (lookupRef.current === controller) {
                lookupRef.current = null;
                setIsGeocoding(false);
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        placeMarker,
        showNotice,
        t
    ]);
    const selectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(select);
    selectRef.current = select;
    // Create the map only once it is (about to be) visible: hidden tabs and modals don't pay for it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        let cancelled = false;
        let resizeObserver = null;
        const init = async ()=>{
            const L = (await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript, async loader)")).default;
            if (cancelled || !containerRef.current || mapRef.current) return;
            leafletRef.current = L;
            const { point: startPoint, center: startCenter, defaultZoom: zoom } = initial.current;
            const start = startPoint ?? startCenter ?? FALLBACK_CENTER;
            const map = L.map(containerRef.current, {
                center: [
                    start.lat,
                    start.lng
                ],
                zoom: startPoint ? SELECTED_ZOOM : zoom,
                zoomControl: false,
                scrollWheelZoom: false,
                attributionControl: true
            });
            mapRef.current = map;
            map.attributionControl.setPrefix(false);
            L.control.zoom({
                position: isRtl ? "bottomleft" : "bottomright"
            }).addTo(map);
            L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
            }).addTo(map);
            // Scrolling the page shouldn't zoom the map until the user interacts with it.
            map.on("focus click", ()=>map.scrollWheelZoom.enable());
            map.on("blur mouseout", ()=>map.scrollWheelZoom.disable());
            map.on("click", (e)=>{
                if (!latest.current.readOnly) selectRef.current(e.latlng.lat, e.latlng.lng, "map");
            });
            if (startPoint) placeMarker(startPoint.lat, startPoint.lng);
            resizeObserver = new ResizeObserver(()=>map.invalidateSize());
            resizeObserver.observe(containerRef.current);
            setMapReady(true);
        };
        let visibility = null;
        if (typeof IntersectionObserver === "undefined") {
            init();
        } else {
            visibility = new IntersectionObserver((entries)=>{
                if (entries.some((entry)=>entry.isIntersecting)) {
                    visibility?.disconnect();
                    init();
                }
            }, {
                rootMargin: "200px"
            });
            visibility.observe(wrapper);
        }
        return ()=>{
            cancelled = true;
            visibility?.disconnect();
            resizeObserver?.disconnect();
            lookupRef.current?.abort();
            mapRef.current?.remove();
            mapRef.current = null;
            markerRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Follow coordinates set from outside (typed, pasted link, loaded record) without echoing our own picks.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!mapReady || !map) return;
        if (point) {
            setCoords(point);
            placeMarker(point.lat, point.lng);
            if (!samePoint(point, lastEmittedRef.current)) {
                lastEmittedRef.current = point;
                setAddress("");
                moveMap(map, point.lat, point.lng, Math.max(map.getZoom(), SELECTED_ZOOM));
            }
        } else {
            markerRef.current?.remove();
            markerRef.current = null;
            lastEmittedRef.current = null;
            setCoords(null);
            setAddress("");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mapReady,
        point?.lat,
        point?.lng
    ]);
    // Without a pin, show the region the user chose (country / city).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!mapReady || !map || point || !center) return;
        moveMap(map, center.lat, center.lng, defaultZoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mapReady,
        center?.lat,
        center?.lng
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mapReady) return;
        const timer = window.setTimeout(()=>mapRef.current?.invalidateSize(), 50);
        if (!expanded) return ()=>window.clearTimeout(timer);
        const onKey = (e)=>e.key === "Escape" && setExpanded(false);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return ()=>{
            window.clearTimeout(timer);
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [
        expanded,
        mapReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (noticeTimerRef.current) window.clearTimeout(noticeTimerRef.current);
        }, []);
    const handleLocateMe = ()=>{
        if (!("geolocation" in navigator) || !window.isSecureContext) {
            showNotice(t("locations.mapPicker.geolocationUnsupported"));
            return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition((pos)=>{
            setIsLocating(false);
            moveMap(mapRef.current, pos.coords.latitude, pos.coords.longitude, SELECTED_ZOOM);
            select(pos.coords.latitude, pos.coords.longitude, "geolocation");
        }, (err)=>{
            setIsLocating(false);
            const key = err.code === err.PERMISSION_DENIED ? "geolocationDenied" : err.code === err.TIMEOUT ? "geolocationTimeout" : "geolocationUnavailable";
            showNotice(t(`locations.mapPicker.${key}`));
        }, {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 60000
        });
    };
    const copyCoordinates = async ()=>{
        if (!coords) return;
        try {
            await navigator.clipboard.writeText(`${coords.lat}, ${coords.lng}`);
            setCopied(true);
            window.setTimeout(()=>setCopied(false), 1500);
        } catch  {
            showNotice(t("locations.mapPicker.copyFailed"));
        }
    };
    const controlButton = "flex h-8 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-60 dark:text-gray-200 dark:hover:bg-neutral-800";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("map-picker relative w-full overflow-hidden border border-gray-200 bg-gray-100 dark:border-neutral-800 dark:bg-neutral-900", expanded ? "fixed inset-0 z-[70] h-dvh rounded-none" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl shadow-sm", height), className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "absolute inset-0 z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            !mapReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[5] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-6 w-6 animate-spin text-[#008081]"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                    lineNumber: 368,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 367,
                columnNumber: 9
            }, this),
            (searchable || showControls) && mapReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-2.5 top-2.5 z-[1000] flex items-start gap-2",
                children: [
                    searchable && !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$MapSearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapSearchBox"], {
                        className: "pointer-events-auto min-w-0 flex-1 sm:max-w-sm",
                        getBias: ()=>{
                            const c = mapRef.current?.getCenter();
                            return c ? {
                                lat: c.lat,
                                lng: c.lng
                            } : null;
                        },
                        onSelect: (s)=>{
                            moveMap(mapRef.current, s.lat, s.lng, SELECTED_ZOOM);
                            select(s.lat, s.lng, "search", s.details);
                        },
                        onCoordinates: (c)=>{
                            moveMap(mapRef.current, c.lat, c.lng, SELECTED_ZOOM);
                            select(c.lat, c.lng, "coordinates");
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 375,
                        columnNumber: 13
                    }, this),
                    showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto ms-auto flex items-center gap-0.5 rounded-lg border border-gray-200 bg-white/95 p-0.5 shadow-md backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/95",
                        children: [
                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleLocateMe,
                                disabled: isLocating,
                                title: t("locations.mapPicker.locateMeTitle"),
                                "aria-label": t("locations.mapPicker.locateMeTitle"),
                                className: controlButton,
                                children: [
                                    isLocating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin text-[#008081]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 403,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                        className: "h-3.5 w-3.5 text-[#008081]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline",
                                        children: t("locations.mapPicker.myLocation")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 407,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 394,
                                columnNumber: 17
                            }, this),
                            coords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(coords.lat, coords.lng),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: t("locations.mapPicker.openInGoogleMaps"),
                                "aria-label": t("locations.mapPicker.openInGoogleMaps"),
                                className: controlButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "h-3.5 w-3.5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 419,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 411,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setExpanded((v)=>!v),
                                title: t(expanded ? "locations.mapPicker.exitFullscreen" : "locations.mapPicker.fullscreen"),
                                "aria-label": t(expanded ? "locations.mapPicker.exitFullscreen" : "locations.mapPicker.fullscreen"),
                                className: controlButton,
                                children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 429,
                                    columnNumber: 69
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 422,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "absolute inset-x-2.5 top-14 z-[1000] mx-auto flex max-w-sm items-start gap-2 rounded-lg border border-amber-200 bg-amber-50/95 px-3 py-2 text-xs text-amber-800 shadow-md dark:border-amber-900 dark:bg-amber-950/90 dark:text-amber-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: notice
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this),
            showBadges && mapReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-2 start-2 z-[1000] max-w-[calc(100%-4.5rem)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto flex min-w-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1.5 text-[11px] text-gray-700 shadow-md backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/95 dark:text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "h-3.5 w-3.5 shrink-0 text-[#008081]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                            lineNumber: 449,
                            columnNumber: 13
                        }, this),
                        coords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono",
                                            dir: "ltr",
                                            children: [
                                                coords.lat.toFixed(6),
                                                ", ",
                                                coords.lng.toFixed(6)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                            lineNumber: 453,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: copyCoordinates,
                                            title: t("locations.mapPicker.copyCoordinates"),
                                            "aria-label": t("locations.mapPicker.copyCoordinates"),
                                            className: "rounded p-0.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
                                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-3 w-3 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                                lineNumber: 463,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                                lineNumber: 463,
                                                columnNumber: 80
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this),
                                isGeocoding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 text-[10px] text-[#008081]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-2.5 w-2.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                            lineNumber: 468,
                                            columnNumber: 21
                                        }, this),
                                        t("locations.mapPicker.detectingAddress")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 467,
                                    columnNumber: 19
                                }, this) : address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block truncate text-[10px] text-gray-500 dark:text-gray-400",
                                    children: address
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                    lineNumber: 472,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                            lineNumber: 451,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t(readOnly ? "locations.mapPicker.noLocation" : "locations.mapPicker.clickToPinpoint")
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                            lineNumber: 476,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                    lineNumber: 448,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 447,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shared/maps/LocationPickerField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationPickerField",
    ()=>LocationPickerField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/InteractiveMapPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/geocoding.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const TYPING_DEBOUNCE_MS = 600;
function formatCoordinate(value) {
    return value === null || !Number.isFinite(value) ? "" : String((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(value));
}
function LocationPickerField({ value, onChange, defaultCenter, mapHeight, showLinkInput = true, showCoordinateInputs = true, required = false, errors, className, idPrefix = "location" }) {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const onChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onChange);
    onChangeRef.current = onChange;
    const [linkInput, setLinkInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value.mapLink);
    const [linkError, setLinkError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isResolving, setIsResolving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [latInput, setLatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatCoordinate(value.latitude));
    const [lngInput, setLngInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatCoordinate(value.longitude));
    const [coordError, setCoordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const editingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editingRef.current !== "link") setLinkInput(value.mapLink);
    }, [
        value.mapLink
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editingRef.current === "coords") return;
        setLatInput(formatCoordinate(value.latitude));
        setLngInput(formatCoordinate(value.longitude));
        setCoordError(null);
    }, [
        value.latitude,
        value.longitude
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            requestRef.current?.abort();
            if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
        }, []);
    const startRequest = ()=>{
        requestRef.current?.abort();
        const controller = new AbortController();
        requestRef.current = controller;
        return controller;
    };
    const resolveLink = async (raw)=>{
        const input = raw.trim();
        if (!input) return;
        const controller = startRequest();
        setIsResolving(true);
        setLinkError(null);
        try {
            const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveGoogleMapsUrl"])(input, controller.signal);
            if (!raw) {
                setLinkError(t("locations.mapPicker.linkInvalid"));
                return;
            }
            const point = {
                latitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(raw.lat),
                longitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(raw.lng)
            };
            const mapLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateText"])(input) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(point.latitude, point.longitude) : input;
            editingRef.current = null;
            setLinkInput(mapLink);
            onChangeRef.current({
                ...point,
                mapLink,
                source: "link"
            });
            const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lookupAddress"])(point.latitude, point.longitude, {
                language,
                signal: controller.signal,
                preferGoogle: true
            });
            onChangeRef.current({
                ...point,
                mapLink,
                source: "link",
                details
            });
        } catch (error) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(error)) setLinkError(t("locations.mapPicker.linkFailed"));
        } finally{
            if (requestRef.current === controller) {
                requestRef.current = null;
                setIsResolving(false);
            }
        }
    };
    const handleMapSelect = (data)=>{
        requestRef.current?.abort();
        editingRef.current = null;
        setLinkError(null);
        onChangeRef.current({
            latitude: data.lat,
            longitude: data.lng,
            mapLink: data.googleMapLink,
            source: data.source,
            details: data.detailsLoaded ? {
                address: data.landmark || "",
                city: data.city || "",
                area: data.area || "",
                country: data.country || "",
                countryCode: data.countryCode || ""
            } : undefined
        });
    };
    const applyTypedCoordinates = (latText, lngText)=>{
        if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
        if (!latText.trim() && !lngText.trim()) {
            setCoordError(null);
            requestRef.current?.abort();
            onChangeRef.current({
                latitude: null,
                longitude: null,
                mapLink: "",
                source: "clear"
            });
            return;
        }
        const lat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCoordinateInput"])(latText);
        const lng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCoordinateInput"])(lngText);
        if (lat === null || lng === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidLatLng"])(lat, lng)) {
            const incomplete = !latText.trim() || !lngText.trim();
            setCoordError(incomplete ? null : t("locations.mapPicker.invalidCoordinates"));
            return;
        }
        setCoordError(null);
        typingTimerRef.current = window.setTimeout(async ()=>{
            const point = {
                latitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(lat),
                longitude: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundCoordinate"])(lng)
            };
            const mapLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(point.latitude, point.longitude);
            onChangeRef.current({
                ...point,
                mapLink,
                source: "coordinates"
            });
            const controller = startRequest();
            try {
                const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$geocoding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lookupAddress"])(point.latitude, point.longitude, {
                    language,
                    signal: controller.signal
                });
                onChangeRef.current({
                    ...point,
                    mapLink,
                    source: "coordinates",
                    details
                });
            } catch  {}
        }, TYPING_DEBOUNCE_MS);
    };
    const clearLocation = ()=>{
        requestRef.current?.abort();
        editingRef.current = null;
        setLinkInput("");
        setLinkError(null);
        setCoordError(null);
        onChangeRef.current({
            latitude: null,
            longitude: null,
            mapLink: "",
            source: "clear"
        });
    };
    const hasPoint = value.latitude !== null && value.longitude !== null;
    const linkErrorText = linkError || errors?.mapLink;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-3", className),
        children: [
            showLinkInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: `${idPrefix}-map-link`,
                        className: "text-xs font-medium text-gray-700 dark:text-gray-300",
                        children: [
                            t("locations.mapPicker.linkLabel"),
                            required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: " *"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                lineNumber: 209,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: `${idPrefix}-map-link`,
                                        value: linkInput,
                                        onFocus: ()=>editingRef.current = "link",
                                        onBlur: ()=>editingRef.current = null,
                                        onChange: (e)=>{
                                            setLinkInput(e.target.value);
                                            setLinkError(null);
                                        },
                                        onPaste: (e)=>{
                                            const pasted = e.clipboardData.getData("text");
                                            if (pasted.trim()) {
                                                e.preventDefault();
                                                setLinkInput(pasted.trim());
                                                resolveLink(pasted);
                                            }
                                        },
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                resolveLink(linkInput);
                                            }
                                        },
                                        placeholder: t("locations.mapPicker.linkPlaceholder"),
                                        "aria-invalid": !!linkErrorText,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-9 bg-white ps-8 text-xs dark:bg-neutral-950", linkErrorText && "border-red-400 focus-visible:ring-red-200"),
                                        dir: "ltr"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                onClick: ()=>resolveLink(linkInput),
                                disabled: isResolving || !linkInput.trim(),
                                className: "h-9 shrink-0 border-teal-600 px-4 text-xs font-medium text-teal-700 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-950/40",
                                children: isResolving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                    lineNumber: 253,
                                    columnNumber: 30
                                }, this) : t("locations.mapPicker.findOnMap")
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    linkErrorText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: linkErrorText
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 257,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-400 dark:text-gray-500",
                        children: t("locations.mapPicker.linkHint")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveMapPicker"], {
                latitude: value.latitude,
                longitude: value.longitude,
                defaultCenter: defaultCenter,
                onLocationSelect: handleMapSelect,
                height: mapHeight
            }, void 0, false, {
                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            showCoordinateInputs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end",
                        children: [
                            [
                                "latitude",
                                "longitude"
                            ].map((field)=>{
                                const isLat = field === "latitude";
                                const fieldError = errors?.[field];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: `${idPrefix}-${field}`,
                                            className: "mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300",
                                            children: [
                                                t(`locations.mapPicker.${field}`),
                                                required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: " *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                            lineNumber: 280,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: `${idPrefix}-${field}`,
                                            inputMode: "decimal",
                                            dir: "ltr",
                                            value: isLat ? latInput : lngInput,
                                            onFocus: ()=>editingRef.current = "coords",
                                            onBlur: ()=>editingRef.current = null,
                                            onChange: (e)=>{
                                                const next = e.target.value;
                                                if (isLat) setLatInput(next);
                                                else setLngInput(next);
                                                applyTypedCoordinates(isLat ? next : latInput, isLat ? lngInput : next);
                                            },
                                            placeholder: isLat ? "25.204800" : "55.270800",
                                            "aria-invalid": !!(fieldError || coordError),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-9 bg-white font-mono text-xs dark:bg-neutral-950", (fieldError || coordError) && "border-red-400 focus-visible:ring-red-200")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this),
                                        fieldError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-500",
                                            children: fieldError
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                            lineNumber: 304,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "ghost",
                                onClick: clearLocation,
                                disabled: !hasPoint && !linkInput,
                                className: "h-9 gap-1.5 text-xs text-gray-500 hover:text-red-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    t("locations.mapPicker.clearLocation")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    coordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: coordError
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                        lineNumber: 319,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/maps/LocationPickerField.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/shared/maps/LocationMapPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationMapPreview",
    ()=>LocationMapPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin-off.js [app-ssr] (ecmascript) <export default as MapPinOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/InteractiveMapPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function LocationMapPreview({ latitude, longitude, mapLink, label, height = "h-56 sm:h-64", className }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toLatLng"])(latitude, longitude);
    const href = mapLink?.trim() || (point ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(point.lat, point.lng) : "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-3", className),
        children: [
            point ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveMapPicker"], {
                latitude: point.lat,
                longitude: point.lng,
                readOnly: true,
                markerLabel: label,
                height: height
            }, void 0, false, {
                fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 bg-gray-50 text-center dark:border-neutral-800 dark:bg-neutral-900/50", href ? "py-6" : height),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinOff$3e$__["MapPinOff"], {
                        className: "h-6 w-6 text-gray-300 dark:text-neutral-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 dark:text-gray-500",
                        children: t("locations.mapPicker.noLocation")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex w-full items-center justify-center gap-2 rounded-xl border border-teal-200 py-2.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50 dark:border-teal-900 dark:text-teal-400 dark:hover:bg-teal-950/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    t("locations.mapPicker.openInGoogleMaps")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/maps/LocationMapPreview.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/auth/map-preview-test/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPreviewTest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// TEMPORARY visual check for the map components — delete after review.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$LocationPickerField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/maps/LocationPickerField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$LocationMapPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/maps/LocationMapPreview.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MapPreviewTest() {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        latitude: 25.197197,
        longitude: 55.274376,
        mapLink: ""
    });
    const [last, setLast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-3xl space-y-6 bg-white p-6 dark:bg-neutral-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$LocationPickerField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationPickerField"], {
                value: value,
                onChange: (c)=>{
                    setValue({
                        latitude: c.latitude,
                        longitude: c.longitude,
                        mapLink: c.mapLink
                    });
                    setLast(c);
                },
                required: true
            }, void 0, false, {
                fileName: "[project]/src/app/auth/map-preview-test/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                id: "last-change",
                className: "whitespace-pre-wrap text-xs",
                children: JSON.stringify(last)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/map-preview-test/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$maps$2f$LocationMapPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationMapPreview"], {
                    latitude: "25.0786",
                    longitude: "55.1352",
                    label: "Dubai Marina"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/map-preview-test/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/map-preview-test/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/map-preview-test/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_9d506329._.js.map