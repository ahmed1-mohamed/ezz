(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "extractErrorMessage",
    ()=>extractErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountriesSelect",
    ()=>useCountriesSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useCountriesSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9c9b4939bbc25986efd74fec13a9329eaff5a90285f9f0725a94e49b7c789e3") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9c9b4939bbc25986efd74fec13a9329eaff5a90285f9f0725a94e49b7c789e3";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "countries",
            "select"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[2] !== t2) {
        t3 = {
            queryKey: t1,
            queryFn: _temp,
            enabled: t2,
            staleTime: 300000
        };
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const { data: t4, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t5;
    if ($[4] !== t4) {
        t5 = t4 === undefined ? [] : t4;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const countries = t5;
    let t6;
    if ($[6] !== countries || $[7] !== isLoading) {
        t6 = {
            countries,
            isLoading
        };
        $[6] = countries;
        $[7] = isLoading;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_s(useCountriesSelect, "B/ZTsKZMTDSYCX2b7SeLXY6jync=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/countries");
    const raw = response.data;
    const items = (()=>{
        if (!raw) {
            return [];
        }
        if (Array.isArray(raw)) {
            return raw;
        }
        if (Array.isArray(raw.data)) {
            return raw.data;
        }
        if (raw.data && Array.isArray(raw.data.countries)) {
            return raw.data.countries;
        }
        if (Array.isArray(raw.countries)) {
            return raw.countries;
        }
        return [];
    })();
    return items.map(_useCountriesSelectAnonymousItemsMap);
}
function _useCountriesSelectAnonymousItemsMap(item) {
    return {
        country_id: item.country_id || item.id,
        country_name: item.country_name || item.name || ""
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/locations/matched-locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countrySearchKey",
    ()=>countrySearchKey,
    "detectCountryKeyForCity",
    ()=>detectCountryKeyForCity,
    "fetchMatchedLocations",
    ()=>fetchMatchedLocations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
const COUNTRY_KEYS = [
    [
        "uae",
        [
            "uae",
            "united arab emirates",
            "emirates",
            "الإمارات",
            "الامارات"
        ]
    ],
    [
        "egypt",
        [
            "egypt",
            "مصر"
        ]
    ],
    [
        "oman",
        [
            "oman",
            "عمان",
            "سلطنة عمان"
        ]
    ],
    [
        "ksa",
        [
            "ksa",
            "saudi arabia",
            "saudi",
            "السعودية"
        ]
    ]
];
function countrySearchKey(countryName) {
    const name = countryName?.trim().toLowerCase();
    if (!name) return null;
    const match = COUNTRY_KEYS.find(([, aliases])=>aliases.some((alias)=>name === alias || name.includes(alias)));
    return match ? match[0] : name;
}
async function fetchMatchedLocations(params, signal) {
    const query = new URLSearchParams({
        text: params.text.trim()
    });
    if (params.type === "area" && params.cityId != null && params.cityId !== "") query.set("city_id", String(params.cityId));
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/matched-locations?${query.toString()}`, {
        headers: {
            Accept: "application/json",
            country: params.countryKey
        },
        signal
    });
    const body = await res.json().catch(()=>null);
    if (!res.ok || body?.status === false) throw new Error(body?.message || `Location search failed (${res.status})`);
    const items = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : [];
    const seen = new Set();
    const results = [];
    for (const item of items){
        const name = String(item?.name ?? "").trim();
        if (item?.type !== params.type || !name) continue;
        const key = name.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        results.push({
            id: item.id,
            name
        });
    }
    return results;
}
async function detectCountryKeyForCity(cityName, countryKeys) {
    const needle = cityName.trim().toLowerCase();
    if (!needle) return null;
    for (const countryKey of countryKeys){
        try {
            const cities = await fetchMatchedLocations({
                countryKey,
                text: cityName,
                type: "city"
            });
            if (cities.some((c)=>c.name.toLowerCase() === needle)) return countryKey;
        } catch  {
        // Try the next country.
        }
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverDescription",
    ()=>PopoverDescription,
    "PopoverHeader",
    ()=>PopoverHeader,
    "PopoverTitle",
    ()=>PopoverTitle,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Popover(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
            "data-slot": "popover",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Popover;
function PopoverTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
            "data-slot": "popover-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = PopoverTrigger;
function PopoverContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, align: t1, sideOffset: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const align = t1 === undefined ? "center" : t1;
    const sideOffset = t2 === undefined ? 4 : t2;
    let t3;
    if ($[6] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-none outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", className);
        $[6] = className;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== align || $[9] !== props || $[10] !== sideOffset || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Portal, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Content, {
                "data-slot": "popover-content",
                align: align,
                sideOffset: sideOffset,
                className: t3,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/popover.tsx",
                lineNumber: 105,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[8] = align;
        $[9] = props;
        $[10] = sideOffset;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c2 = PopoverContent;
function PopoverAnchor(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Anchor, {
            "data-slot": "popover-anchor",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = PopoverAnchor;
function PopoverHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1 text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "popover-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = PopoverHeader;
function PopoverTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "popover-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = PopoverTitle;
function PopoverDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06790a4f428a32206b853c80d5b3fcd91b508e1caecaa00a10767704ba890d02";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            "data-slot": "popover-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 258,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = PopoverDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverAnchor");
__turbopack_context__.k.register(_c4, "PopoverHeader");
__turbopack_context__.k.register(_c5, "PopoverTitle");
__turbopack_context__.k.register(_c6, "PopoverDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/location/SearchableSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchableSelect",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.js [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SearchableSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "14dc7d5e54dacbb0055d13d1703ced87aa7ed8e8c196c2c25675b6907dbe8aab") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14dc7d5e54dacbb0055d13d1703ced87aa7ed8e8c196c2c25675b6907dbe8aab";
    }
    const { id, value, onChange, options, placeholder, searchPlaceholder, idleHint, emptyText, errorText, retryText, clearText, footnote, search, onSearchChange, filterLocally: t1, isLoading: t2, isError: t3, onRetry, onOpenChange, disabled: t4, invalid: t5, className } = t0;
    const filterLocally = t1 === undefined ? false : t1;
    const isLoading = t2 === undefined ? false : t2;
    const isError = t3 === undefined ? false : t3;
    const disabled = t4 === undefined ? false : t4;
    const invalid = t5 === undefined ? false : t5;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let needle;
    let t6;
    if ($[1] !== filterLocally || $[2] !== options || $[3] !== search) {
        needle = search.trim().toLowerCase();
        t6 = filterLocally && needle ? options.filter({
            "SearchableSelect[options.filter()]": (o)=>o.name.toLowerCase().includes(needle)
        }["SearchableSelect[options.filter()]"]) : options;
        $[1] = filterLocally;
        $[2] = options;
        $[3] = search;
        $[4] = needle;
        $[5] = t6;
    } else {
        needle = $[4];
        t6 = $[5];
    }
    const visible = t6;
    const showIdle = !filterLocally && !needle && !!idleHint;
    let t7;
    if ($[6] !== onOpenChange || $[7] !== onSearchChange) {
        t7 = ({
            "SearchableSelect[setOpenState]": (next)=>{
                setOpen(next);
                onOpenChange?.(next);
                if (!next) {
                    onSearchChange("");
                }
                setActive(0);
            }
        })["SearchableSelect[setOpenState]"];
        $[6] = onOpenChange;
        $[7] = onSearchChange;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const setOpenState = t7;
    let t8;
    if ($[9] !== onChange || $[10] !== setOpenState) {
        t8 = ({
            "SearchableSelect[choose]": (option)=>{
                onChange(option);
                setOpenState(false);
            }
        })["SearchableSelect[choose]"];
        $[9] = onChange;
        $[10] = setOpenState;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const choose = t8;
    let t9;
    if ($[12] !== active || $[13] !== choose || $[14] !== visible) {
        t9 = ({
            "SearchableSelect[onKeyDown]": (e)=>{
                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive({
                        "SearchableSelect[onKeyDown > setActive()]": (i)=>Math.min(i + 1, visible.length - 1)
                    }["SearchableSelect[onKeyDown > setActive()]"]);
                } else {
                    if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActive(_SearchableSelectOnKeyDownSetActive);
                    } else {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            if (visible[active]) {
                                choose(visible[active]);
                            }
                        }
                    }
                }
            }
        })["SearchableSelect[onKeyDown]"];
        $[12] = active;
        $[13] = choose;
        $[14] = visible;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const onKeyDown = t9;
    const t10 = invalid && "border-red-400";
    let t11;
    if ($[16] !== className || $[17] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-3 text-start text-sm shadow-xs transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081]/30 dark:border-neutral-700 dark:bg-neutral-950", "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60 dark:disabled:bg-neutral-900", t10, className);
        $[16] = className;
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const t12 = value ? "text-gray-900 dark:text-gray-100" : "text-gray-400";
    let t13;
    if ($[19] !== t12) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate", t12);
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const t14 = value?.name || placeholder;
    let t15;
    if ($[21] !== t13 || $[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== clearText || $[25] !== disabled || $[26] !== onChange || $[27] !== value) {
        t16 = value && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "button",
            tabIndex: 0,
            "aria-label": clearText,
            onClick: {
                "SearchableSelect[<span>.onClick]": (e_0)=>{
                    e_0.stopPropagation();
                    onChange(null);
                }
            }["SearchableSelect[<span>.onClick]"],
            onKeyDown: {
                "SearchableSelect[<span>.onKeyDown]": (e_1)=>{
                    if (e_1.key === "Enter" || e_1.key === " ") {
                        e_1.preventDefault();
                        e_1.stopPropagation();
                        onChange(null);
                    }
                }
            }["SearchableSelect[<span>.onKeyDown]"],
            className: "rounded p-0.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                lineNumber: 203,
                columnNumber: 131
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 190,
            columnNumber: 33
        }, this);
        $[24] = clearText;
        $[25] = disabled;
        $[26] = onChange;
        $[27] = value;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
            className: "h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex shrink-0 items-center gap-1",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[30] = t16;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== disabled || $[33] !== id || $[34] !== invalid || $[35] !== open || $[36] !== t11 || $[37] !== t15 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: id,
                type: "button",
                role: "combobox",
                "aria-expanded": open,
                "aria-invalid": invalid,
                disabled: disabled,
                className: t11,
                children: [
                    t15,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                lineNumber: 229,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[32] = disabled;
        $[33] = id;
        $[34] = invalid;
        $[35] = open;
        $[36] = t11;
        $[37] = t15;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== isLoading) {
        t20 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "h-4 w-4 shrink-0 animate-spin text-[#008081]"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 243,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-4 w-4 shrink-0 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 243,
            columnNumber: 94
        }, this);
        $[40] = isLoading;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== onSearchChange) {
        t21 = ({
            "SearchableSelect[<input>.onChange]": (e_2)=>{
                onSearchChange(e_2.target.value);
                setActive(0);
            }
        })["SearchableSelect[<input>.onChange]"];
        $[42] = onSearchChange;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== onKeyDown || $[45] !== search || $[46] !== searchPlaceholder || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            autoFocus: true,
            value: search,
            onChange: t21,
            onKeyDown: onKeyDown,
            placeholder: searchPlaceholder,
            "aria-label": searchPlaceholder,
            className: "h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[44] = onKeyDown;
        $[45] = search;
        $[46] = searchPlaceholder;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t20 || $[50] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-gray-100 px-3 dark:border-neutral-800",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[49] = t20;
        $[50] = t22;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== active || $[53] !== choose || $[54] !== emptyText || $[55] !== errorText || $[56] !== idleHint || $[57] !== isError || $[58] !== isLoading || $[59] !== onRetry || $[60] !== retryText || $[61] !== showIdle || $[62] !== value || $[63] !== visible) {
        t24 = isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2 px-3 py-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500",
                    children: errorText
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                    lineNumber: 284,
                    columnNumber: 93
                }, this),
                onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onRetry,
                    className: "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#008081] hover:bg-teal-50 dark:hover:bg-teal-950/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                            lineNumber: 284,
                            columnNumber: 338
                        }, this),
                        retryText
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                    lineNumber: 284,
                    columnNumber: 156
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 284,
            columnNumber: 21
        }, this) : showIdle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "px-3 py-4 text-center text-xs text-gray-500 dark:text-gray-400",
            children: idleHint
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 284,
            columnNumber: 411
        }, this) : isLoading && visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-4 w-4 animate-spin text-[#008081]"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                lineNumber: 284,
                columnNumber: 584
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 284,
            columnNumber: 542
        }, this) : visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "px-3 py-4 text-center text-xs text-gray-500 dark:text-gray-400",
            children: emptyText
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 284,
            columnNumber: 675
        }, this) : visible.map({
            "SearchableSelect[visible.map()]": (option_0, index)=>{
                const selected = !!value && (value.id != null && option_0.id != null ? value.id === option_0.id : value.name === option_0.name);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "option",
                    "aria-selected": selected,
                    onMouseEnter: {
                        "SearchableSelect[visible.map() > <button>.onMouseEnter]": ()=>setActive(index)
                    }["SearchableSelect[visible.map() > <button>.onMouseEnter]"],
                    onClick: {
                        "SearchableSelect[visible.map() > <button>.onClick]": ()=>choose(option_0)
                    }["SearchableSelect[visible.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-start text-sm", index === active ? "bg-teal-50 text-teal-900 dark:bg-teal-950/40 dark:text-teal-100" : "text-gray-700 dark:text-gray-200"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0 text-[#008081]", selected ? "opacity-100" : "opacity-0")
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                            lineNumber: 291,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: option_0.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                            lineNumber: 291,
                            columnNumber: 379
                        }, this)
                    ]
                }, `${option_0.id ?? ""}-${option_0.name}`, true, {
                    fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
                    lineNumber: 287,
                    columnNumber: 16
                }, this);
            }
        }["SearchableSelect[visible.map()]"]);
        $[52] = active;
        $[53] = choose;
        $[54] = emptyText;
        $[55] = errorText;
        $[56] = idleHint;
        $[57] = isError;
        $[58] = isLoading;
        $[59] = onRetry;
        $[60] = retryText;
        $[61] = showIdle;
        $[62] = value;
        $[63] = visible;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "listbox",
            className: "max-h-64 overflow-y-auto p-1",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[65] = t24;
        $[66] = t25;
    } else {
        t25 = $[66];
    }
    let t26;
    if ($[67] !== footnote) {
        t26 = footnote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "border-t border-gray-100 px-3 py-1.5 text-[11px] text-gray-400 dark:border-neutral-800",
            children: footnote
        }, void 0, false, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 320,
            columnNumber: 23
        }, this);
        $[67] = footnote;
        $[68] = t26;
    } else {
        t26 = $[68];
    }
    let t27;
    if ($[69] !== t23 || $[70] !== t25 || $[71] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            align: "start",
            className: "w-[var(--radix-popover-trigger-width)] min-w-[220px] p-0",
            children: [
                t23,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[69] = t23;
        $[70] = t25;
        $[71] = t26;
        $[72] = t27;
    } else {
        t27 = $[72];
    }
    let t28;
    if ($[73] !== open || $[74] !== setOpenState || $[75] !== t19 || $[76] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: open,
            onOpenChange: setOpenState,
            children: [
                t19,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/SearchableSelect.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[73] = open;
        $[74] = setOpenState;
        $[75] = t19;
        $[76] = t27;
        $[77] = t28;
    } else {
        t28 = $[77];
    }
    return t28;
}
_s(SearchableSelect, "Jc5xf6IJ5v09fTMmmWZe3NqZV+k=");
_c = SearchableSelect;
function _SearchableSelectOnKeyDownSetActive(i_0) {
    return Math.max(i_0 - 1, 0);
}
var _c;
__turbopack_context__.k.register(_c, "SearchableSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/location/CascadingLocationSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CascadingLocationSelect",
    ()=>CascadingLocationSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locations/matched-locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/location/SearchableSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const SEARCH_DEBOUNCE_MS = 300;
const CACHE_MS = 10 * 60 * 1000;
function useDebounced(value, delay) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9da44b90abfdfb3e11b49203745634d04ee37a2d78dabbfec88b29ad5215b41d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9da44b90abfdfb3e11b49203745634d04ee37a2d78dabbfec88b29ad5215b41d";
    }
    const [debounced, setDebounced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    let t0;
    let t1;
    if ($[1] !== delay || $[2] !== value) {
        t0 = ({
            "useDebounced[useEffect()]": ()=>{
                const timer = window.setTimeout({
                    "useDebounced[useEffect() > window.setTimeout()]": ()=>setDebounced(value)
                }["useDebounced[useEffect() > window.setTimeout()]"], delay);
                return ()=>window.clearTimeout(timer);
            }
        })["useDebounced[useEffect()]"];
        t1 = [
            value,
            delay
        ];
        $[1] = delay;
        $[2] = value;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return debounced;
}
_s(useDebounced, "33bQBlXg6j7MFSTRBeGy5/ui5G8=");
function CascadingLocationSelect({ value, onChange, required = {}, errors = {}, idPrefix = "location", className, labelClassName, triggerClassName }) {
    _s1();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { countries, isLoading: countriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"])();
    const countryOptions = countries.map((c)=>({
            id: c.country_id,
            name: c.country_name
        }));
    const countryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countrySearchKey"])(value.country?.name);
    const cityId = value.city?.id ?? null;
    const [countrySearch, setCountrySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [citySearch, setCitySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [areaSearch, setAreaSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const cityText = useDebounced(citySearch.trim(), SEARCH_DEBOUNCE_MS);
    const areaText = useDebounced(areaSearch.trim(), SEARCH_DEBOUNCE_MS);
    // Keyed by country / city / text: a late response for an old selection can never replace newer results.
    const citiesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "matched-locations",
            countryKey,
            "city",
            cityText
        ],
        queryFn: {
            "CascadingLocationSelect.useQuery[citiesQuery]": ({ signal })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMatchedLocations"])({
                    countryKey: countryKey,
                    text: cityText,
                    type: "city"
                }, signal)
        }["CascadingLocationSelect.useQuery[citiesQuery]"],
        enabled: !!countryKey && cityText.length > 0,
        staleTime: CACHE_MS,
        placeholderData: {
            "CascadingLocationSelect.useQuery[citiesQuery]": (previous, previousQuery)=>previousQuery?.queryKey[1] === countryKey ? previous : undefined
        }["CascadingLocationSelect.useQuery[citiesQuery]"]
    });
    const areasQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "matched-locations",
            countryKey,
            "area",
            cityId,
            areaText
        ],
        queryFn: {
            "CascadingLocationSelect.useQuery[areasQuery]": ({ signal: signal_0 })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMatchedLocations"])({
                    countryKey: countryKey,
                    text: areaText,
                    type: "area",
                    cityId
                }, signal_0)
        }["CascadingLocationSelect.useQuery[areasQuery]"],
        enabled: !!countryKey && !!value.city && areaText.length > 0,
        staleTime: CACHE_MS,
        placeholderData: {
            "CascadingLocationSelect.useQuery[areasQuery]": (previous_0, previousQuery_0)=>previousQuery_0?.queryKey[1] === countryKey && previousQuery_0?.queryKey[3] === cityId ? previous_0 : undefined
        }["CascadingLocationSelect.useQuery[areasQuery]"]
    });
    // Edit forms may only know the city: find its country so the selects fill in the right order.
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        value,
        onChange
    });
    latest.current = {
        value,
        onChange
    };
    const detectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CascadingLocationSelect.useEffect": ()=>{
            const cityName = value.city?.name;
            if (detectedRef.current || value.country || !cityName || countryOptions.length === 0) return;
            detectedRef.current = true;
            const keyed = countryOptions.map({
                "CascadingLocationSelect.useEffect.keyed": (option)=>({
                        option,
                        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countrySearchKey"])(option.name)
                    })
            }["CascadingLocationSelect.useEffect.keyed"]).filter({
                "CascadingLocationSelect.useEffect.keyed": (entry)=>!!entry.key
            }["CascadingLocationSelect.useEffect.keyed"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locations$2f$matched$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectCountryKeyForCity"])(cityName, keyed.map({
                "CascadingLocationSelect.useEffect": (entry_0)=>entry_0.key
            }["CascadingLocationSelect.useEffect"])).then({
                "CascadingLocationSelect.useEffect": (key)=>{
                    const match = keyed.find({
                        "CascadingLocationSelect.useEffect.match": (entry_1)=>entry_1.key === key
                    }["CascadingLocationSelect.useEffect.match"]);
                    const current = latest.current.value;
                    if (match && !current.country && current.city?.name === cityName) {
                        latest.current.onChange({
                            ...current,
                            country: match.option
                        });
                    }
                }
            }["CascadingLocationSelect.useEffect"]);
        }
    }["CascadingLocationSelect.useEffect"], [
        value.country,
        value.city?.name,
        countryOptions
    ]);
    const common = {
        retryText: t("locationSelect.retry"),
        clearText: t("locationSelect.clear"),
        footnote: language === "ar" ? t("locationSelect.englishOnly") : undefined,
        className: triggerClassName
    };
    const field = (level, control)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: `${idPrefix}-${level}`,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300", labelClassName),
                    children: [
                        t(`locationSelect.${level}`),
                        required[level] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: " *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                            lineNumber: 170,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                    lineNumber: 168,
                    columnNumber: 7
                }, this),
                control,
                errors[level] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-[11px] text-red-500",
                    children: errors[level]
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                    lineNumber: 173,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
            lineNumber: 167,
            columnNumber: 61
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-1 gap-4 sm:grid-cols-3", className),
        children: [
            field("country", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                ...common,
                footnote: undefined,
                id: `${idPrefix}-country`,
                value: value.country,
                onChange: (country)=>{
                    if (country?.id === value.country?.id && country?.name === value.country?.name) return;
                    onChange({
                        country,
                        city: null,
                        area: null
                    });
                },
                options: countryOptions,
                filterLocally: true,
                search: countrySearch,
                onSearchChange: setCountrySearch,
                isLoading: countriesLoading,
                placeholder: t("locationSelect.selectCountry"),
                searchPlaceholder: t("locationSelect.searchCountry"),
                emptyText: countriesLoading ? t("locationSelect.loading") : t("locationSelect.noCountries"),
                errorText: t("locationSelect.loadError"),
                invalid: !!errors.country
            }, void 0, false, {
                fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                lineNumber: 176,
                columnNumber: 25
            }, this)),
            field("city", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                ...common,
                id: `${idPrefix}-city`,
                value: value.city,
                onChange: (city)=>{
                    if (city?.id === value.city?.id && city?.name === value.city?.name) return;
                    onChange({
                        ...value,
                        city,
                        area: null
                    });
                },
                options: citiesQuery.data ?? [],
                search: citySearch,
                onSearchChange: setCitySearch,
                isLoading: citiesQuery.isFetching,
                isError: citiesQuery.isError,
                onRetry: ()=>citiesQuery.refetch(),
                disabled: !value.country,
                placeholder: value.country ? t("locationSelect.selectCity") : t("locationSelect.selectCountryFirst"),
                searchPlaceholder: t("locationSelect.searchCity"),
                idleHint: t("locationSelect.typeToSearchCities"),
                emptyText: t("locationSelect.noCities"),
                errorText: t("locationSelect.loadError"),
                invalid: !!errors.city
            }, void 0, false, {
                fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                lineNumber: 184,
                columnNumber: 22
            }, this)),
            field("area", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                ...common,
                id: `${idPrefix}-area`,
                value: value.area,
                onChange: (area)=>onChange({
                        ...value,
                        area
                    }),
                options: areasQuery.data ?? [],
                search: areaSearch,
                onSearchChange: setAreaSearch,
                isLoading: areasQuery.isFetching,
                isError: areasQuery.isError,
                onRetry: ()=>areasQuery.refetch(),
                disabled: !value.city,
                placeholder: value.city ? t("locationSelect.selectArea") : t("locationSelect.selectCityFirst"),
                searchPlaceholder: t("locationSelect.searchArea"),
                idleHint: t("locationSelect.typeToSearchAreas"),
                emptyText: t("locationSelect.noAreas"),
                errorText: t("locationSelect.loadError"),
                invalid: !!errors.area
            }, void 0, false, {
                fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
                lineNumber: 192,
                columnNumber: 22
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/location/CascadingLocationSelect.tsx",
        lineNumber: 175,
        columnNumber: 10
    }, this);
}
_s1(CascadingLocationSelect, "hbU3XyVEUlW+crjw8fO9AvSdoZY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"],
        useDebounced,
        useDebounced,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = CascadingLocationSelect;
var _c;
__turbopack_context__.k.register(_c, "CascadingLocationSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/auth/location-select-test/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// TEMPORARY visual check — delete after review.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$CascadingLocationSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/location/CascadingLocationSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Preview() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "b8fc93331beac3b84d96271b861fa3962a93eeb764d4161f4528f66f6e9674dc") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8fc93331beac3b84d96271b861fa3962a93eeb764d4161f4528f66f6e9674dc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            country: {
                id: 2,
                name: "UAE"
            },
            city: null,
            area: null
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            country: true,
            city: true,
            area: true
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$location$2f$CascadingLocationSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CascadingLocationSelect"], {
            value: value,
            onChange: setValue,
            required: t1
        }, void 0, false, {
            fileName: "[project]/src/app/auth/location-select-test/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== value) {
        t3 = JSON.stringify(value);
        $[5] = value;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            id: "value",
            className: "mt-6 text-xs",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/auth/location-select-test/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl",
                children: [
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/location-select-test/page.tsx",
                lineNumber: 67,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth/location-select-test/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_s(Preview, "D7ZkbY6c8r1tuHoYEhaY65Xx7G4=");
_c = Preview;
var _c;
__turbopack_context__.k.register(_c, "Preview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08d4e2ef._.js.map