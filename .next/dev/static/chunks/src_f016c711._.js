(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Skeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "6a7f5f0337da53099aa4b9428c5fd25914c5faa3a877908362c2f2c34e28649a") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a7f5f0337da53099aa4b9428c5fd25914c5faa3a877908362c2f2c34e28649a";
    }
    let className;
    let height;
    let props;
    let t1;
    let width;
    if ($[1] !== t0) {
        ({ className, variant: t1, width, height, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = height;
        $[4] = props;
        $[5] = t1;
        $[6] = width;
    } else {
        className = $[2];
        height = $[3];
        props = $[4];
        t1 = $[5];
        width = $[6];
    }
    const variant = t1 === undefined ? "rectangular" : t1;
    const t2 = variant === "text" && "h-4 rounded";
    const t3 = variant === "circular" && "rounded-full";
    const t4 = variant === "rectangular" && "rounded-md";
    let t5;
    if ($[7] !== className || $[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse bg-gray-200", t2, t3, t4, className);
        $[7] = className;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== height || $[13] !== width) {
        t6 = {
            width,
            height
        };
        $[12] = height;
        $[13] = width;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== props || $[16] !== t5 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            style: t6,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/skeleton.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[15] = props;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
}
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell-off.js [app-client] (ecmascript) <export default as BellOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-x.js [app-client] (ecmascript) <export default as CalendarX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-x.js [app-client] (ecmascript) <export default as FileX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-question-mark.js [app-client] (ecmascript) <export default as FileQuestion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const typeConfig = {
    notifications: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOff$3e$__["BellOff"],
        langKey: 'notifications'
    },
    bookings: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarX$3e$__["CalendarX"],
        langKey: 'bookings'
    },
    error: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        langKey: 'error'
    },
    no_results: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        langKey: 'no_results'
    },
    no_connection: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"],
        langKey: 'no_connection'
    },
    not_found: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__["FileQuestion"],
        langKey: 'not_found'
    },
    favorites: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        langKey: 'favorites'
    },
    default: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileX$3e$__["FileX"],
        langKey: 'default'
    }
};
const EmptyState = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "150747db4e97394f53e59bc9ebd85ae9ed51803ed6dea9992b0b6a4141791513") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "150747db4e97394f53e59bc9ebd85ae9ed51803ed6dea9992b0b6a4141791513";
    }
    const { type: t1, title, message, icon, className: t2 } = t0;
    const type = t1 === undefined ? "default" : t1;
    const className = t2 === undefined ? "" : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const config = typeConfig[type] || typeConfig.default;
    const t3 = `empty_states.${config.langKey}.title`;
    let t4;
    if ($[1] !== t || $[2] !== t3) {
        t4 = t(t3);
        $[1] = t;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const defaultTitle = t4;
    const t5 = `empty_states.${config.langKey}.message`;
    let t6;
    if ($[4] !== t || $[5] !== t5) {
        t6 = t(t5);
        $[4] = t;
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const defaultMessage = t6;
    let t7;
    if ($[7] !== config.icon || $[8] !== type) {
        t7 = ()=>{
            switch(type){
                case "not_found":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center -mt-0.5 select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-5 h-5 text-white stroke-[2.5]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 96,
                                    columnNumber: 99
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-extrabold text-white leading-none mt-0.5 tracking-wider",
                                    children: "404"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 96,
                                    columnNumber: 160
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/empty-state.tsx",
                            lineNumber: 96,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                case "no_connection":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "w-6 h-6 text-white stroke-[2]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 100,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-1 -right-1 bg-[#0D7A70] rounded-full p-[1px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-3 h-3 text-white fill-white",
                                        stroke: "#0D7A70",
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/empty-state.tsx",
                                        lineNumber: 100,
                                        columnNumber: 176
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 100,
                                    columnNumber: 97
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/empty-state.tsx",
                            lineNumber: 100,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                case "no_results":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-6 h-6 text-white stroke-[2]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 104,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-0.5 -right-0.5 bg-[#0D7A70] rounded-full w-3.5 h-3.5 flex items-center justify-center border border-[#0D7A70]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-extrabold text-white leading-none -mt-[3px]",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/empty-state.tsx",
                                        lineNumber: 104,
                                        columnNumber: 242
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 104,
                                    columnNumber: 98
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/empty-state.tsx",
                            lineNumber: 104,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                case "favorites":
                    {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-6 h-6 text-white fill-white stroke-[2]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/empty-state.tsx",
                            lineNumber: 108,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                default:
                    {
                        const Icon = config.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-6 h-6 text-white stroke-[2]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/empty-state.tsx",
                            lineNumber: 113,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0));
                    }
            }
        };
        $[7] = config.icon;
        $[8] = type;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const renderInnerIcon = t7;
    const t8 = `flex flex-col items-center justify-center p-8 text-center min-h-[340px] bg-white rounded-xl ${className}`;
    let t9;
    if ($[10] !== icon || $[11] !== renderInnerIcon) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center w-24 h-24 mb-6 bg-white rounded-full shadow-lg shadow-teal-100/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-18 h-18 bg-[#F0FAF7] rounded-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center w-14 h-14 text-[#0D7A70]",
                    children: icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/empty-state.tsx",
                        lineNumber: 127,
                        columnNumber: 313
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                className: "absolute inset-0 w-full h-full fill-current",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 46.5,9.5 C 48.5,8 51.5,8 53.5,9.5 L 85,39 C 88,42 88,46 88,50 L 88,82 C 88,86 84,90 80,90 L 20,90 C 16,90 12,86 12,82 L 12,50 C 12,46 12,42 15,39 Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/empty-state.tsx",
                                    lineNumber: 127,
                                    columnNumber: 444
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/empty-state.tsx",
                                lineNumber: 127,
                                columnNumber: 361
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 text-white flex items-center justify-center mt-1",
                                children: renderInnerIcon()
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/empty-state.tsx",
                                lineNumber: 127,
                                columnNumber: 612
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/empty-state.tsx",
                    lineNumber: 127,
                    columnNumber: 221
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty-state.tsx",
                lineNumber: 127,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/empty-state.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = icon;
        $[11] = renderInnerIcon;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = title || defaultTitle;
    let t11;
    if ($[13] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-900 mb-2",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ui/empty-state.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const t12 = message || defaultMessage;
    let t13;
    if ($[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 max-w-sm leading-relaxed",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ui/empty-state.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t11 || $[18] !== t13 || $[19] !== t8 || $[20] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/empty-state.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t11;
        $[18] = t13;
        $[19] = t8;
        $[20] = t9;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    return t14;
};
_s(EmptyState, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-dashboardAdminLocations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDashboardAdminLocations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/locations.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useDashboardAdminLocations(page, limit, search, city, status) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "5a293cc0b8765112fef677ad7cc050279da882e18bd3c0cec353bd584a583720") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a293cc0b8765112fef677ad7cc050279da882e18bd3c0cec353bd584a583720";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    let t1;
    if ($[1] !== city || $[2] !== limit || $[3] !== page || $[4] !== search || $[5] !== status) {
        t0 = [
            "locations",
            page,
            limit,
            search,
            city,
            status
        ];
        t1 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLocationsService"].getLocations(page, limit, search, city, status);
        $[1] = city;
        $[2] = limit;
        $[3] = page;
        $[4] = search;
        $[5] = status;
        $[6] = t0;
        $[7] = t1;
    } else {
        t0 = $[6];
        t1 = $[7];
    }
    const t2 = !!token;
    let t3;
    if ($[8] !== t0 || $[9] !== t1 || $[10] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            retry: false,
            enabled: t2,
            staleTime: 300000,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const paginatedLocationsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t4;
    if ($[12] !== queryClient) {
        t4 = {
            mutationFn: _temp,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "locations"
                    ]
                });
            }
        };
        $[12] = queryClient;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const deleteLocationMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t4);
    let t5;
    if ($[14] !== deleteLocationMutation || $[15] !== paginatedLocationsData) {
        t5 = {
            paginatedLocationsData,
            deleteLocationMutation
        };
        $[14] = deleteLocationMutation;
        $[15] = paginatedLocationsData;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_s(useDashboardAdminLocations, "JsVpbsvdPA9wm5nG+CMlP3UfNIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLocationsService"].deleteLocation(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, error, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        "data-slot": "select-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-none ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-slate-200 text-start [&>span]:truncate [&>span]:block [&>span]:w-full", error && "border-red-500 focus:ring-red-500 text-red-900", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50 shrink-0 ms-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 53,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 70,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-popover-foreground dark:text-slate-200 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 103,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 113,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none focus:bg-gray-100 dark:focus:bg-slate-700 focus:text-accent-foreground dark:focus:text-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute end-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 133,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 125,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Pagination(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "fce1f5021024c02a79427eca0e6721b07eaa898803bf262f6e350a2dd645d1f4") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fce1f5021024c02a79427eca0e6721b07eaa898803bf262f6e350a2dd645d1f4";
    }
    const { page, totalPages, perPage, totalItems, onPageChange, onPerPageChange, perPageOptions: t1, isLoading: t2, currentItemsCount } = t0;
    let t3;
    if ($[1] !== t1) {
        t3 = t1 === undefined ? [
            "10",
            "15",
            "20",
            "50",
            "100"
        ] : t1;
        $[1] = t1;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const perPageOptions = t3;
    const isLoading = t2 === undefined ? false : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const effectiveTotalPages = currentItemsCount !== undefined && currentItemsCount < perPage && page >= totalPages ? page : Math.max(1, totalPages);
    let t4;
    if ($[3] !== effectiveTotalPages || $[4] !== page) {
        t4 = ({
            "Pagination[getPageNumbers]": ()=>{
                const pages = [];
                if (effectiveTotalPages <= 5) {
                    for(let i = 1; i <= effectiveTotalPages; i++){
                        pages.push(i);
                    }
                } else {
                    pages.push(1);
                    if (page > 3) {
                        pages.push("...");
                    }
                    let start = Math.max(2, page - 1);
                    let end = Math.min(effectiveTotalPages - 1, page + 1);
                    if (page <= 2) {
                        start = 2;
                        end = Math.min(3, effectiveTotalPages - 1);
                    }
                    if (page >= effectiveTotalPages - 1) {
                        start = Math.max(2, effectiveTotalPages - 2);
                        end = effectiveTotalPages - 1;
                    }
                    for(let i_0 = start; i_0 <= end; i_0++){
                        pages.push(i_0);
                    }
                    if (page < effectiveTotalPages - 2) {
                        pages.push("...");
                    }
                    pages.push(effectiveTotalPages);
                }
                return pages;
            }
        })["Pagination[getPageNumbers]"];
        $[3] = effectiveTotalPages;
        $[4] = page;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const getPageNumbers = t4;
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);
    if (effectiveTotalPages <= 1 && totalItems === 0) {
        return null;
    }
    let t5;
    if ($[6] !== t) {
        t5 = t("common.pagination.show");
        $[6] = t;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs sm:text-sm text-gray-500",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== perPage) {
        t7 = perPage.toString();
        $[10] = perPage;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[70px] h-8 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/Pagination.tsx",
                lineNumber: 123,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== perPageOptions) {
        t9 = perPageOptions.map(_PaginationPerPageOptionsMap);
        $[13] = perPageOptions;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== isLoading || $[18] !== onPerPageChange || $[19] !== t10 || $[20] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t7,
            onValueChange: onPerPageChange,
            disabled: isLoading,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[17] = isLoading;
        $[18] = onPerPageChange;
        $[19] = t10;
        $[20] = t7;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t) {
        t12 = t("common.pagination.showing");
        $[22] = t;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = totalItems > 0 ? startIndex + 1 : 0;
    let t14;
    if ($[24] !== t) {
        t14 = t("common.pagination.of");
        $[24] = t;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t) {
        t15 = t("common.pagination.results");
        $[26] = t;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== endIndex || $[29] !== t12 || $[30] !== t13 || $[31] !== t14 || $[32] !== t15 || $[33] !== totalItems) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs sm:text-sm text-gray-500",
            children: [
                t12,
                " ",
                t13,
                "-",
                endIndex,
                " ",
                t14,
                " ",
                totalItems,
                " ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[28] = endIndex;
        $[29] = t12;
        $[30] = t13;
        $[31] = t14;
        $[32] = t15;
        $[33] = totalItems;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t11 || $[36] !== t16 || $[37] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-start",
            children: [
                t6,
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t16;
        $[37] = t6;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== effectiveTotalPages || $[40] !== getPageNumbers || $[41] !== isLoading || $[42] !== onPageChange || $[43] !== page) {
        t18 = effectiveTotalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-1 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: {
                        "Pagination[<Button>.onClick]": ()=>onPageChange(Math.max(1, page - 1))
                    }["Pagination[<Button>.onClick]"],
                    disabled: page === 1 || isLoading,
                    className: "h-8 w-8 border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-4 w-4 rtl:rotate-180"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Pagination.tsx",
                        lineNumber: 207,
                        columnNumber: 113
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Pagination.tsx",
                    lineNumber: 205,
                    columnNumber: 104
                }, this),
                getPageNumbers().map({
                    "Pagination[(anonymous)()]": (pageNum, index)=>typeof pageNum === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: page === pageNum ? "default" : "outline",
                            size: "icon",
                            onClick: {
                                "Pagination[(anonymous)() > <Button>.onClick]": ()=>onPageChange(pageNum)
                            }["Pagination[(anonymous)() > <Button>.onClick]"],
                            disabled: isLoading,
                            className: page === pageNum ? "h-8 w-8 bg-teal-600 hover:bg-teal-700 text-white border-0" : "h-8 w-8 border-gray-200",
                            children: pageNum
                        }, index, false, {
                            fileName: "[project]/src/components/shared/Pagination.tsx",
                            lineNumber: 208,
                            columnNumber: 88
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-1 text-gray-400",
                            children: pageNum
                        }, index, false, {
                            fileName: "[project]/src/components/shared/Pagination.tsx",
                            lineNumber: 210,
                            columnNumber: 221
                        }, this)
                }["Pagination[(anonymous)()]"]),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: {
                        "Pagination[<Button>.onClick]": ()=>onPageChange(Math.min(effectiveTotalPages, page + 1))
                    }["Pagination[<Button>.onClick]"],
                    disabled: page === effectiveTotalPages || effectiveTotalPages === 0 || isLoading,
                    className: "h-8 w-8 border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4 rtl:rotate-180"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Pagination.tsx",
                        lineNumber: 213,
                        columnNumber: 160
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Pagination.tsx",
                    lineNumber: 211,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 205,
            columnNumber: 38
        }, this);
        $[39] = effectiveTotalPages;
        $[40] = getPageNumbers;
        $[41] = isLoading;
        $[42] = onPageChange;
        $[43] = page;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== t17 || $[46] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 w-full",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[45] = t17;
        $[46] = t18;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    return t19;
}
_s(Pagination, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Pagination;
function _PaginationPerPageOptionsMap(opt) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: opt,
        children: opt
    }, opt, false, {
        fileName: "[project]/src/components/shared/Pagination.tsx",
        lineNumber: 235,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-developers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "developersExportToCsv",
    ()=>developersExportToCsv,
    "developersExportToExcel",
    ()=>developersExportToExcel,
    "developersExportToPDF",
    ()=>developersExportToPDF
]);
const developersExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Developers Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    doc.setFillColor(13, 148, 136); // teal-600
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    const cols = [
        {
            header: "Developer Name",
            key: "developer_name",
            width: 55
        },
        {
            header: "Email",
            key: "email",
            width: 50
        },
        {
            header: "Phone Number",
            key: "phone_number",
            width: 35
        },
        {
            header: "Website",
            key: "website",
            width: 45
        },
        {
            header: "Countries",
            key: "countries",
            width: 35
        },
        {
            header: "Projects",
            key: "projects_count",
            width: 25
        },
        {
            header: "Status",
            key: "status",
            width: 25
        }
    ];
    let xPos = 14;
    let yPos = 28;
    const rowHeight = 8;
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(243, 244, 246);
    doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    cols.forEach((col)=>{
        doc.text(col.header, xPos, yPos);
        xPos += col.width;
    });
    yPos += rowHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(31, 41, 55);
    data.forEach((d, rowIndex)=>{
        if (yPos + rowHeight > pageHeight - 15) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(243, 244, 246);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            let hX = 14;
            cols.forEach((col)=>{
                doc.text(col.header, hX, yPos);
                hX += col.width;
            });
            yPos += rowHeight;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(31, 41, 55);
        }
        if (rowIndex % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
        }
        xPos = 14;
        cols.forEach((col)=>{
            let val = d[col.key] ?? d[col.key.replace("developer_", "")] ?? d.name ?? "—";
            if (col.key === "status") {
                val = d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive";
            }
            if (typeof val === "object") val = JSON.stringify(val);
            const strVal = String(val);
            const truncated = strVal.length > 26 ? strVal.substring(0, 24) + "…" : strVal;
            doc.text(truncated, xPos, yPos);
            xPos += col.width;
        });
        yPos += rowHeight;
    });
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 6, {
            align: "center"
        });
    }
    doc.save("Developers_Report.pdf");
};
const developersExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "developer_id",
        "developer_name",
        "email",
        "phone_number",
        "website",
        "countries",
        "cities",
        "projects_count",
        "status"
    ];
    const header = [
        "ID",
        "Name",
        "Email",
        "Phone Number",
        "Website",
        "Countries",
        "Cities",
        "Projects Count",
        "Status"
    ].join(",");
    const rows = data.map((d)=>columns.map((col)=>{
            let val = d[col] ?? d[col.replace("developer_", "")] ?? "";
            if (col === "status") {
                val = d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive";
            }
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Developers_Report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const developersExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((d)=>({
            "ID": d.developer_id ?? d.id ?? "N/A",
            "Developer Name": d.developer_name ?? d.name ?? "N/A",
            "Email": d.email ?? "N/A",
            "Phone Number": d.phone_number ?? d.contact ?? "N/A",
            "Website": d.website ?? "N/A",
            "Countries": d.countries ?? "N/A",
            "Cities": d.cities ?? "N/A",
            "Projects Count": d.projects_count ?? d.projects ?? 0,
            "Status": d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive",
            "Is Top": d.is_top === 1 || d.is_top === true ? "Yes" : "No"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Developers");
    XLSX.writeFile(workbook, "Developers_Report.xlsx");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsExportToCsv",
    ()=>projectsExportToCsv,
    "projectsExportToExcel",
    ()=>projectsExportToExcel,
    "projectsExportToPDF",
    ()=>projectsExportToPDF
]);
const projectsExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Projects Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    doc.setFillColor(13, 148, 136);
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    const cols = [
        {
            header: "Project Name",
            key: "project_name",
            width: 55
        },
        {
            header: "Type",
            key: "project_type",
            width: 35
        },
        {
            header: "Developer",
            key: "developer_name",
            width: 45
        },
        {
            header: "Status",
            key: "status",
            width: 30
        },
        {
            header: "Total Units",
            key: "total_units",
            width: 25
        },
        {
            header: "Available",
            key: "available_units",
            width: 25
        },
        {
            header: "City",
            key: "city_name",
            width: 30
        },
        {
            header: "Price Range",
            key: "price_range",
            width: 35
        }
    ];
    let xPos = 14;
    let yPos = 28;
    const rowHeight = 8;
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(243, 244, 246);
    doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    cols.forEach((col)=>{
        doc.text(col.header, xPos, yPos);
        xPos += col.width;
    });
    yPos += rowHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(31, 41, 55);
    data.forEach((p, rowIndex)=>{
        if (yPos + rowHeight > pageHeight - 15) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(243, 244, 246);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            let hX = 14;
            cols.forEach((col)=>{
                doc.text(col.header, hX, yPos);
                hX += col.width;
            });
            yPos += rowHeight;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(31, 41, 55);
        }
        if (rowIndex % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
        }
        xPos = 14;
        cols.forEach((col)=>{
            let val = p[col.key] ?? p.project?.[col.key] ?? "—";
            if (typeof val === "object") val = JSON.stringify(val);
            const strVal = String(val);
            const truncated = strVal.length > 28 ? strVal.substring(0, 26) + "…" : strVal;
            doc.text(truncated, xPos, yPos);
            xPos += col.width;
        });
        yPos += rowHeight;
    });
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 6, {
            align: "center"
        });
    }
    doc.save("Projects_Report.pdf");
};
const projectsExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "project_id",
        "project_name",
        "project_type",
        "developer_name",
        "status",
        "is_active",
        "total_units",
        "available_units",
        "properties_count",
        "launch_date",
        "completion_date",
        "price_range",
        "price_range_SQ",
        "project_currency",
        "city_name",
        "country_name",
        "location_landmark",
        "project_size",
        "permit_no",
        "barcode",
        "slug",
        "created_at"
    ];
    const header = columns.join(",");
    const rows = data.map((p)=>columns.map((col)=>{
            let val = p[col] ?? "";
            if (col === "is_active") {
                val = p.is_active === 1 || p.is_active === true || p.is_active === "1" ? "Yes" : "No";
            }
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Projects_Report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const projectsExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map(({ project_id, project_name, project_type, total_units, available_units, status, launch_date, completion_date, price_range, price_range_SQ, description, project_size, phase, is_active, project_currency, permit_no, barcode, slug, properties_count, active_properties_count, available_properties_count, booked_properties_count, sold_properties_count, developer_name, city_name, country_name, country_currency, country_dimension_unit, location_landmark, created_at })=>({
            "Project ID": project_id ?? "N/A",
            "Project Name": project_name ?? "N/A",
            "Project Type": project_type ?? "N/A",
            "Developer": developer_name ?? "N/A",
            "Status": status ?? "N/A",
            "Is Active": is_active === 1 || is_active === true || is_active === "1" ? "Yes" : "No",
            "Total Units": total_units ?? "N/A",
            "Available Units": available_units ?? "N/A",
            "Properties Count": properties_count ?? 0,
            "Active Properties Count": active_properties_count ?? 0,
            "Available Properties Count": available_properties_count ?? 0,
            "Booked Properties Count": booked_properties_count ?? 0,
            "Sold Properties Count": sold_properties_count ?? 0,
            "Launch Date": launch_date ?? "N/A",
            "Completion Date": completion_date ?? "N/A",
            "Price Range": price_range ?? "N/A",
            "Price Range SQ": price_range_SQ ?? "N/A",
            "Project Currency": project_currency ?? "N/A",
            "Country Name": country_name ?? "N/A",
            "City Name": city_name ?? "N/A",
            "Location Landmark": location_landmark ?? "N/A",
            "Country Currency": country_currency ?? "N/A",
            "Country Dimension Unit": country_dimension_unit ?? "N/A",
            "Project Size": project_size ?? "N/A",
            "Description": description ? description.replace(/<[^>]*>?/gm, "") : "N/A",
            "Phase": phase ?? "N/A",
            "Permit No": permit_no ?? "N/A",
            "Barcode": barcode ?? "N/A",
            "Slug": slug ?? "N/A",
            "Created At": created_at ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "Projects_Report.xlsx");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CitiesTemplate",
    ()=>CitiesTemplate,
    "ExpertsFilledTemplate",
    ()=>ExpertsFilledTemplate,
    "ExpertsTemplate",
    ()=>ExpertsTemplate,
    "ProjectsTemplate",
    ()=>ProjectsTemplate,
    "PropertiesFilledTemplate",
    ()=>PropertiesFilledTemplate,
    "PropertiesTemplate",
    ()=>PropertiesTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
const ProjectsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const headers = [
        "project_id",
        "developer_id",
        "location_id",
        "project_name",
        "project_type",
        "total_units",
        "availabe_units",
        "launch_date",
        "completion_date",
        "status",
        "price_range",
        "price_range_SQ",
        "description"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "Empty_Projects_Template.xlsx");
};
_c = ProjectsTemplate;
const PropertiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const headers = [
        "property_name",
        "property_no",
        "property_type_id",
        "property_subtype_id",
        "plot_size",
        "bua_size",
        "price",
        "size",
        "maid_room ",
        "finishing_status",
        "furnish_status",
        " bedrooms",
        "bathrooms",
        " parking_spaces",
        "building_name",
        "building_community",
        "building_commuinty_compelation_date",
        "description"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "Empty_Properties_Template.xlsx");
};
_c1 = PropertiesTemplate;
const PropertiesFilledTemplate = async (projectId, token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    let enrichedProperties = [];
    let projectName = "";
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/projects/${projectId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const resJson = await res.json();
        const data = await resJson.data;
        projectName = await data.project_name;
        const buildings = await data.buildings || [];
        const allProps = await data.properties || [];
        const props = allProps.filter((property)=>property.project_id === projectId || Number(property.project_id) === Number(projectId));
        enrichedProperties = props.map((property)=>{
            const building = buildings.find((b)=>b.building_id === property.building_id);
            return {
                ...property,
                building_name: building?.building_name || null,
                completion_date: building?.completion_date || null,
                built_type: building?.built_type || null
            };
        });
    } catch (error) {
        console.error(error);
    }
    const headers = [
        "property_name",
        "property_no",
        "property_type_id",
        "property_subtype_id",
        "plot_size",
        "bua_size",
        "price",
        "size",
        "maid_room ",
        "finishing_status",
        "furnish_status",
        " bedrooms",
        "bathrooms",
        " parking_spaces",
        "building_name",
        "building_community",
        "building_commuinty_compelation_date",
        "description"
    ];
    const rows = enrichedProperties.map((item)=>[
            item.property_name || "",
            item.property_no || "",
            item.propertytype == null ? "" : item.propertytype?.name || "",
            item.propertysubtype == null ? "" : item.propertysubtype?.name || "",
            item.plot_size || "",
            item.bua_size || "",
            item.price || "",
            item.size || "",
            item.maid_room || "",
            item.finishing_status || "",
            item.furnish_status || "",
            item.bedrooms || "",
            item.bathrooms || "",
            item.parking_spaces || "",
            item.building_name || "",
            item.built_type || "",
            item.completion_date || "",
            item.description
        ]);
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers,
        ...rows
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, `${projectName}_Properties_Template.xlsx`);
};
_c2 = PropertiesFilledTemplate;
const ExpertsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const headers = [
        "display_name",
        "email",
        "phone_number",
        "title",
        "years_experience",
        "bio",
        "website",
        "linkedin",
        "specializations",
        "service_areas",
        "languages"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");
    XLSX.writeFile(workbook, "Empty_Experts_Template.xlsx");
};
_c3 = ExpertsTemplate;
const ExpertsFilledTemplate = async (token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    let experts = [];
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/experts?page=1&per_page=100`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const resJson = await res.json();
        experts = resJson.data || [];
    } catch (error) {
        console.error(error);
    }
    const headers = [
        "display_name",
        "email",
        "phone_number",
        "title",
        "years_experience",
        "bio",
        "website",
        "linkedin",
        "specializations",
        "service_areas",
        "languages"
    ];
    const rows = experts.map((item)=>[
            item.display_name || "",
            item.email || "",
            item.phone_number || "",
            item.title || "",
            item.years_experience || "",
            item.bio || "",
            item.website || "",
            item.linkedin || "",
            item.categories ? item.categories.join(", ") : "",
            item.countries ? item.countries.join(", ") : "",
            item.languages ? item.languages.map((l)=>l.name || l).join(", ") : ""
        ]);
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers,
        ...rows
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");
    XLSX.writeFile(workbook, "Experts_Template_With_Data.xlsx");
};
_c4 = ExpertsFilledTemplate;
const CitiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const headers = [
        "name",
        "state_id",
        "country_id",
        "status"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cities");
    XLSX.writeFile(workbook, "Empty_Cities_Template.xlsx");
};
_c5 = CitiesTemplate;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ProjectsTemplate");
__turbopack_context__.k.register(_c1, "PropertiesTemplate");
__turbopack_context__.k.register(_c2, "PropertiesFilledTemplate");
__turbopack_context__.k.register(_c3, "ExpertsTemplate");
__turbopack_context__.k.register(_c4, "ExpertsFilledTemplate");
__turbopack_context__.k.register(_c5, "CitiesTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-activity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityExportToExcel",
    ()=>activityExportToExcel,
    "activityExportToPDF",
    ()=>activityExportToPDF
]);
const activityExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((item)=>{
        const rawUserType = item.user_type || item.additional_info?.user_type;
        const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
        const userDisplay = item.user_name || item.user?.name || item.user?.email || formattedUserType || "N/A";
        return {
            ID: item.id || item.log_id || "N/A",
            User: userDisplay,
            Action: item.action || "N/A",
            "Entity Type": item.entity_type || "N/A",
            "IP Address": item.ip_address || "N/A",
            "Date & Time": item.created_at || "N/A"
        };
    });
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Activity Logs");
    XLSX.writeFile(workbook, "Activity_Logs.xlsx");
};
const activityExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Activity Logs Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 20;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach((item)=>{
        const { id, log_id, action, entity_type, ip_address, created_at } = item;
        const rawUserType = item.user_type || item.additional_info?.user_type;
        const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
        const user_name = item.user_name || item.user?.name || item.user?.email || formattedUserType || "N/A";
        const displayId = id || log_id || "N/A";
        if (yPos + 50 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(displayId.toString(), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`User:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(user_name, valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Action:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(action || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Entity Type:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(entity_type || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`IP Address:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(ip_address || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Date & Time:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(created_at || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Activity_Logs_Report.pdf");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locationsExportToExcel",
    ()=>locationsExportToExcel,
    "locationsExportToPDF",
    ()=>locationsExportToPDF
]);
const locationsExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Locations Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 18;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 55;
    data.forEach(({ location_landmark, city_name, area_name, country_name, projects_count, created_at })=>{
        if (yPos + 60 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text("Landmark:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(location_landmark || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("City:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(city_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Area:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(area_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Country:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(country_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Projects:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(projects_count ?? 0), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Created At:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(created_at || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Locations_Report.pdf");
};
const locationsExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map(({ location_landmark, city_name, area_name, country_name, projects_count, created_at })=>({
            Landmark: location_landmark ?? "N/A",
            City: city_name ?? "N/A",
            Area: area_name ?? "N/A",
            Country: country_name ?? "N/A",
            "Projects Count": projects_count ?? 0,
            "Created At": created_at ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Locations");
    XLSX.writeFile(workbook, "Locations_Report.xlsx");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-bookings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardExportToExcel",
    ()=>dashboardExportToExcel
]);
const dashboardExportToExcel = async (statsData, bookingsData)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedStats = statsData.map((item)=>({
            Metric: item.title ?? "N/A",
            Value: item.value ?? "N/A",
            Comparison: item.change ?? "N/A",
            Trend: item.isPositive ? "Up" : "Down"
        }));
    const formattedBookings = bookingsData.map((item)=>({
            ID: item.id ?? "N/A",
            Name: item.name ?? "N/A",
            Property: item.property ?? "N/A",
            Unit: item.unit ?? "N/A",
            Amount: item.amount ?? "N/A",
            Status: item.status ?? "N/A",
            "Last Updated": item.lastUpdated ?? "N/A"
        }));
    const workbook = XLSX.utils.book_new();
    const worksheetStats = XLSX.utils.json_to_sheet(formattedStats);
    XLSX.utils.book_append_sheet(workbook, worksheetStats, "Overview Metrics");
    const worksheetBookings = XLSX.utils.json_to_sheet(formattedBookings);
    XLSX.utils.book_append_sheet(workbook, worksheetBookings, "Bookings");
    XLSX.writeFile(workbook, "Dashboard_Report.xlsx");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-features.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuresExportToExcel",
    ()=>featuresExportToExcel,
    "featuresExportToPDF",
    ()=>featuresExportToPDF
]);
const featuresExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((item)=>({
            ID: item.id ?? "N/A",
            "Feature Name": item.featureName ?? "N/A",
            "Is Amenity": item.isAmenity ? "Yes" : "No",
            Icon: item.icon ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Features");
    XLSX.writeFile(workbook, "Features_Report.xlsx");
};
const featuresExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Features Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 15;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach(({ id, featureName, isAmenity, icon })=>{
        if (yPos + 40 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(id?.toString() || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Feature Name:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(featureName || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Is Amenity:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(isAmenity ? "Yes" : "No", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Icon:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(icon || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Features_Report.pdf");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-areas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areasExportToExcel",
    ()=>areasExportToExcel,
    "areasExportToPDF",
    ()=>areasExportToPDF
]);
const areasExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((item)=>({
            ID: item.area_id ?? "N/A",
            "Area Name": item.area_name ?? "N/A",
            Region: item.region ?? "N/A",
            Population: item.population ?? 0,
            "Major Landmarks": item.major_landmarks?.join(", ") ?? "N/A",
            Created: item.created_at ?? "N/A",
            Status: item.status ? "Active" : "Inactive"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Areas");
    XLSX.writeFile(workbook, "Areas_Report.xlsx");
};
const areasExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Areas Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 15;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach(({ area_id, area_name, region, population, major_landmarks, created_at, status })=>{
        if (yPos + 50 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(area_id?.toString() || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Area Name:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(area_name || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Region:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(region || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Population:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(population?.toString() || "0", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Landmarks:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(major_landmarks?.join(", ") || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Status:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(status ? "Active" : "Inactive", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Areas_Report.pdf");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-properties.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Excel ────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "propertiesExportToCsv",
    ()=>propertiesExportToCsv,
    "propertiesExportToExcel",
    ()=>propertiesExportToExcel,
    "propertiesExportToPdf",
    ()=>propertiesExportToPdf
]);
const propertiesExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    const formattedData = data.map((property)=>({
            property_name: property.property_name ?? "",
            property_no: property.property_no ?? "",
            property_type_id: property.propertytype?.id ?? property.property_type_id ?? "",
            property_subtype_id: property.propertysubtype?.id ?? property.property_subtype_id ?? "",
            project_id: property.project_id ?? "",
            location_id: property.location_id ?? "",
            building_id: property.building_id ?? "",
            plot_size: property.plot_size ?? "",
            bua_size: property.bua_size ?? "",
            maid_room: property.maid_room ? 1 : 0,
            status: property.status ?? "",
            furnish_status: property.furnish_status ?? "",
            finishing_status: property.finishing_status ?? "",
            price: property.price ?? "",
            size: property.size ?? "",
            bedrooms: property.bedrooms ?? 0,
            bathrooms: property.bathrooms ?? 0,
            parking_spaces: property.parking_spaces ?? 0,
            availability_status: property.availability_status ?? "",
            construction_status: property.construction_status ?? "",
            description: property.description ?? "",
            reference_listed: property.reference_listed ?? "",
            ownership_type: property.ownership_type ?? "",
            broker_license: property.broker_license ?? "",
            agent_license: property.agent_license ?? "",
            zone_name: property.zone_name ?? "",
            dld_permit_number: property.dld_permit_number ?? "",
            dld_barcode: property.dld_barcode ?? "",
            created_at: property.created_at ?? "",
            updated_at: property.updated_at ?? "",
            deleted_at: property.deleted_at ?? "",
            views_count: property.views_count ?? 0,
            is_active: property.is_active ? 1 : 0,
            plan_type: property.plan_type ?? "",
            slug: property.slug ?? ""
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h] ? row[h].toString().length : 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "Properties_Export.xlsx");
};
const propertiesExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "property_name",
        "property_no",
        "status",
        "price",
        "size",
        "bedrooms",
        "bathrooms",
        "parking_spaces",
        "floor",
        "availability_status",
        "construction_status",
        "furnish_status",
        "finishing_status",
        "plan_type",
        "ownership_type",
        "zone_name",
        "dld_permit_number",
        "slug",
        "views_count",
        "created_at",
        "updated_at"
    ];
    const header = columns.join(",");
    const rows = data.map((p)=>columns.map((col)=>{
            const val = p[col] ?? "";
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Properties_Export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const propertiesExportToPdf = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Properties Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    // Header bar
    doc.setFillColor(13, 148, 136); // teal-600
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    // Table columns
    const cols = [
        {
            header: "#",
            key: "index",
            width: 10
        },
        {
            header: "Property Name",
            key: "property_name",
            width: 45
        },
        {
            header: "Unit No.",
            key: "property_no",
            width: 22
        },
        {
            header: "Type",
            key: "type",
            width: 28
        },
        {
            header: "Status",
            key: "status",
            width: 22
        },
        {
            header: "Price",
            key: "price",
            width: 28
        },
        {
            header: "Size (m²)",
            key: "size",
            width: 22
        },
        {
            header: "Beds",
            key: "bedrooms",
            width: 14
        },
        {
            header: "Baths",
            key: "bathrooms",
            width: 14
        },
        {
            header: "Floor",
            key: "floor_number",
            width: 14
        },
        {
            header: "Project",
            key: "project_name",
            width: 40
        }
    ];
    const startX = 10;
    const startY = 26;
    const rowHeight = 8;
    const headerHeight = 9;
    const pageW = doc.internal.pageSize.width;
    const pageH = doc.internal.pageSize.height;
    const drawTableHeader = (y)=>{
        doc.setFillColor(240, 253, 250); // teal-50
        doc.rect(startX, y, pageW - 20, headerHeight, "F");
        doc.setFontSize(7.5);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 118, 110);
        let xPos = startX + 2;
        cols.forEach((col)=>{
            doc.text(col.header, xPos, y + 6);
            xPos += col.width;
        });
        doc.setTextColor(0, 0, 0);
    };
    drawTableHeader(startY);
    let y = startY + headerHeight;
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    data.forEach((prop, idx)=>{
        if (y + rowHeight > pageH - 15) {
            // Footer
            doc.setFontSize(7);
            doc.setTextColor(150, 150, 150);
            doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageW / 2, pageH - 8, {
                align: "center"
            });
            doc.addPage();
            drawTableHeader(startY);
            y = startY + headerHeight;
            doc.setFontSize(7);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);
        }
        // Zebra stripe
        if (idx % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(startX, y, pageW - 20, rowHeight, "F");
        }
        const rowData = {
            index: String(idx + 1),
            property_name: prop.property_name ?? "",
            property_no: prop.property_no ?? "",
            type: prop.propertytype?.property_type_name ?? prop.type ?? "",
            status: prop.availability_status ?? prop.status ?? "",
            price: prop.price ? `${Number(prop.price).toLocaleString()}` : "",
            size: prop.size ? `${prop.size}` : prop.bua_size ? `${prop.bua_size}` : "",
            bedrooms: prop.bedrooms != null ? String(prop.bedrooms) : "",
            bathrooms: prop.bathrooms != null ? String(prop.bathrooms) : "",
            floor_number: prop.floor_number != null ? String(prop.floor_number) : "",
            project_name: prop.project?.project_name ?? prop.project_name ?? ""
        };
        let xPos = startX + 2;
        cols.forEach((col)=>{
            const text = doc.splitTextToSize(rowData[col.key] ?? "", col.width - 2);
            doc.text(text[0] ?? "", xPos, y + 5.5);
            xPos += col.width;
        });
        // Row divider
        doc.setDrawColor(229, 231, 235);
        doc.line(startX, y + rowHeight, startX + (pageW - 20), y + rowHeight);
        y += rowHeight;
    });
    // Last page footer
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${doc.internal.getNumberOfPages()} · Total: ${data.length} properties`, pageW / 2, pageH - 8, {
        align: "center"
    });
    doc.save("Properties_Export.pdf");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/handle-export.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$developers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-developers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-activity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-bookings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-features.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$areas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-areas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$properties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-properties.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-yellow-950 shadow hover:bg-yellow-600",
            info: "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e8162700fcf396f6988f2259647e02c569c62a29bb396819953ff757eb902a10") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8162700fcf396f6988f2259647e02c569c62a29bb396819953ff757eb902a10";
    }
    let className;
    let props;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = variant;
    } else {
        className = $[2];
        props = $[3];
        variant = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== variant) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[5] = className;
        $[6] = variant;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/locations/components/LocationsHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationsHeader",
    ()=>LocationsHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const TableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/table/table-settings.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TableSettings), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/table/table-settings.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TableSettings;
function LocationsHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "763934a90566c5d7530d7b990e03cc79b031ab21e66204f1b71ea3c297abf452") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "763934a90566c5d7530d7b990e03cc79b031ab21e66204f1b71ea3c297abf452";
    }
    const { totalLocations, onAddLocation, tableSettings, onExportExcel, onExportPdf, isExporting: t1 } = t0;
    const isExporting = t1 === undefined ? false : t1;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    let t2;
    if ($[1] !== t) {
        t2 = t("locations.title");
        $[1] = t;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== totalLocations) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-900/60 rounded-full px-2.5 py-0.5 text-xs font-semibold",
            children: totalLocations
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = totalLocations;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== isExporting || $[11] !== isRTL || $[12] !== onExportExcel || $[13] !== onExportPdf || $[14] !== t) {
        t6 = (onExportExcel || onExportPdf) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "gap-1.5 h-9 px-3 text-xs font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs cursor-pointer",
                        disabled: isExporting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-3.5 w-3.5 shrink-0 text-gray-500 dark:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                lineNumber: 79,
                                columnNumber: 373
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isExporting ? t("common.exporting") : t("common.export")
                            }, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                lineNumber: 79,
                                columnNumber: 451
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                        lineNumber: 79,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                    lineNumber: 79,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                    align: isRTL ? "start" : "end",
                    className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-lg text-xs",
                    children: [
                        onExportExcel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            onClick: onExportExcel,
                            className: "gap-2 cursor-pointer text-gray-700 dark:text-gray-200 focus:bg-gray-100 dark:focus:bg-neutral-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                    className: "h-4 w-4 text-emerald-600 dark:text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                    lineNumber: 79,
                                    columnNumber: 875
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("tableSettings.exportExcel")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                    lineNumber: 79,
                                    columnNumber: 953
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                            lineNumber: 79,
                            columnNumber: 723
                        }, this),
                        onExportPdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            onClick: onExportPdf,
                            className: "gap-2 cursor-pointer text-gray-700 dark:text-gray-200 focus:bg-gray-100 dark:focus:bg-neutral-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-4 w-4 text-rose-600 dark:text-rose-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                    lineNumber: 79,
                                    columnNumber: 1184
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("tableSettings.exportPdf")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                                    lineNumber: 79,
                                    columnNumber: 1249
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                            lineNumber: 79,
                            columnNumber: 1034
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
                    lineNumber: 79,
                    columnNumber: 553
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 79,
            columnNumber: 44
        }, this);
        $[10] = isExporting;
        $[11] = isRTL;
        $[12] = onExportExcel;
        $[13] = onExportPdf;
        $[14] = t;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== onExportExcel || $[17] !== tableSettings) {
        t7 = tableSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableSettings, {
            settings: tableSettings,
            onExportExcel: onExportExcel
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 91,
            columnNumber: 27
        }, this);
        $[16] = onExportExcel;
        $[17] = tableSettings;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t) {
        t9 = t("locations.addNewLocation");
        $[20] = t;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== onAddLocation || $[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onAddLocation,
            className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[24] = onAddLocation;
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t11 || $[28] !== t6 || $[29] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                t6,
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t6;
        $[29] = t7;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12 || $[32] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsHeader.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t5;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    return t13;
}
_s(LocationsHeader, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = LocationsHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "TableSettings");
__turbopack_context__.k.register(_c1, "LocationsHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/locations/components/LocationsFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationsFilters",
    ()=>LocationsFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LocationsFilters(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "8e322b2c222a1dde6ebe4bd8f254807b67ed78b717eb837e8797fa0bf1423311") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8e322b2c222a1dde6ebe4bd8f254807b67ed78b717eb837e8797fa0bf1423311";
    }
    const { searchQuery, onSearchChange, cities, cityFilter, onCityChange, children } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500 pointer-events-none start-3"
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("locations.filters.search");
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onSearchChange) {
        t3 = ({
            "LocationsFilters[<Input>.onChange]": (e)=>onSearchChange(e.target.value)
        })["LocationsFilters[<Input>.onChange]"];
        $[4] = onSearchChange;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== searchQuery || $[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full sm:w-72 min-w-[220px]",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: t2,
                    value: searchQuery,
                    onChange: t3,
                    className: "h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg shadow-2xs ps-9 pe-3"
                }, void 0, false, {
                    fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
                    lineNumber: 63,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = searchQuery;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t) {
        t5 = t("locations.filters.allCities");
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[150px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg text-gray-700 dark:text-gray-300 shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t5
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
                lineNumber: 81,
                columnNumber: 183
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t) {
        t7 = t("locations.filters.allCities");
        $[14] = t;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== cities) {
        t9 = cities.map(_LocationsFiltersCitiesMap);
        $[18] = cities;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-xs max-h-64",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== cityFilter || $[24] !== onCityChange || $[25] !== t10 || $[26] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: cityFilter,
            onValueChange: onCityChange,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[23] = cityFilter;
        $[24] = onCityChange;
        $[25] = t10;
        $[26] = t6;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 flex-wrap flex-1 min-w-0",
            children: [
                t4,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t4;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== children) {
        t13 = children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 142,
            columnNumber: 23
        }, this);
        $[31] = children;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t12 || $[34] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-between gap-3 w-full",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t13;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    return t14;
}
_s(LocationsFilters, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LocationsFilters;
function _LocationsFiltersCitiesMap(city) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: city,
        children: city
    }, city, false, {
        fileName: "[project]/src/features/locations/components/LocationsFilters.tsx",
        lineNumber: 160,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LocationsFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer group h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#008081] data-[state=checked]:border-[#008081] data-[state=checked]:text-white data-[state=indeterminate]:bg-[#008081] data-[state=indeterminate]:border-[#008081] data-[state=indeterminate]:text-white", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-4 w-4 group-data-[state=indeterminate]:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/checkbox.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                    className: "hidden h-3.5 w-3.5 group-data-[state=indeterminate]:block"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/checkbox.tsx",
                    lineNumber: 25,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Table(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "table-container",
            className: "relative w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                "data-slot": "table",
                className: t1,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/table.tsx",
                lineNumber: 38,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 38,
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
_c = Table;
function TableHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            "data-slot": "table-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 79,
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
_c1 = TableHeader;
function TableBody(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            "data-slot": "table-body",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 120,
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
_c2 = TableBody;
function TableFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
            "data-slot": "table-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 161,
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
_c3 = TableFooter;
function TableRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 px-4 data-[state=selected]:bg-muted border-b transition-colors", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            "data-slot": "table-row",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 202,
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
_c4 = TableRow;
function TableHead(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pe-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            "data-slot": "table-head",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 243,
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
_c5 = TableHead;
function TableCell(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            "data-slot": "table-cell",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 284,
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
_c6 = TableCell;
function TableCaption(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
            "data-slot": "table-caption",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 325,
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
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/locations/components/LocationsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationsTable",
    ()=>LocationsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const DENSITY_CLASS = {
    compact: "py-2",
    comfortable: "py-3",
    spacious: "py-4"
};
const HEAD_CLASS = "h-10 px-4 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap";
/** API placeholders ("N/A", blanks) are shown as an em dash instead of literal text. */ function present(value) {
    const v = value?.trim();
    return v && v.toUpperCase() !== "N/A" ? v : null;
}
function parseDate(value) {
    if (!present(value)) return null;
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
}
function formatDate(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(date);
}
function formatRelative(date, locale) {
    const units = [
        [
            "year",
            31536000
        ],
        [
            "month",
            2592000
        ],
        [
            "week",
            604800
        ],
        [
            "day",
            86400
        ],
        [
            "hour",
            3600
        ],
        [
            "minute",
            60
        ]
    ];
    const seconds = (date.getTime() - Date.now()) / 1000;
    const rtf = new Intl.RelativeTimeFormat(locale, {
        numeric: "auto"
    });
    for (const [unit, size] of units){
        if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
    }
    return rtf.format(0, "minute");
}
const Dash = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "1c0a788b09f1d49771259d06d5f7af19e9b15d33f2fae12a2783ae32abb36ca8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1c0a788b09f1d49771259d06d5f7af19e9b15d33f2fae12a2783ae32abb36ca8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-300 dark:text-neutral-600",
            children: "—"
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = Dash;
function LocationsTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "1c0a788b09f1d49771259d06d5f7af19e9b15d33f2fae12a2783ae32abb36ca8") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1c0a788b09f1d49771259d06d5f7af19e9b15d33f2fae12a2783ae32abb36ca8";
    }
    const { settings, locations, selectedLocations, onSelectAll, onSelectLocation, onView, onEdit, onDelete } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const cellY = DENSITY_CLASS[settings.settings.density] ?? DENSITY_CLASS.comfortable;
    const selectedCount = locations.filter({
        "LocationsTable[locations.filter()]": (l)=>selectedLocations.includes(l.location_id)
    }["LocationsTable[locations.filter()]"]).length;
    const allSelected = locations.length > 0 && selectedCount === locations.length;
    let t1;
    if ($[1] !== settings) {
        t1 = [
            "landmark",
            "details",
            "projects",
            "created",
            "country",
            "actions"
        ].filter({
            "LocationsTable[(anonymous)()]": (c)=>settings.isColumnVisible(c)
        }["LocationsTable[(anonymous)()]"]);
        $[1] = settings;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const visibleColumns = t1.length;
    const t2 = allSelected ? true : selectedCount > 0 ? "indeterminate" : false;
    let t3;
    if ($[3] !== onSelectAll) {
        t3 = ({
            "LocationsTable[<Checkbox>.onCheckedChange]": (checked)=>onSelectAll(checked === true)
        })["LocationsTable[<Checkbox>.onCheckedChange]"];
        $[3] = onSelectAll;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t) {
        t4 = t("common.selectAll");
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "h-10 w-12 ps-4 pe-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                checked: t2,
                onCheckedChange: t3,
                "aria-label": t4
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                lineNumber: 133,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== settings || $[12] !== t) {
        t6 = settings.isColumnVisible("landmark") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "min-w-[220px] text-start"),
            children: t("locations.columns.landmark")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 143,
            columnNumber: 50
        }, this);
        $[11] = settings;
        $[12] = t;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== settings || $[15] !== t) {
        t7 = settings.isColumnVisible("details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "min-w-[200px] text-start"),
            children: t("locations.columns.details")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 152,
            columnNumber: 49
        }, this);
        $[14] = settings;
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== settings || $[18] !== t) {
        t8 = settings.isColumnVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "w-40 text-start"),
            children: t("locations.columns.country")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 161,
            columnNumber: 49
        }, this);
        $[17] = settings;
        $[18] = t;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== settings || $[21] !== t) {
        t9 = settings.isColumnVisible("projects") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "w-28 text-center"),
            children: t("locations.columns.projects")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 170,
            columnNumber: 50
        }, this);
        $[20] = settings;
        $[21] = t;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== settings || $[24] !== t) {
        t10 = settings.isColumnVisible("created") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "w-40 text-start"),
            children: t("locations.columns.created")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 179,
            columnNumber: 50
        }, this);
        $[23] = settings;
        $[24] = t;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== settings || $[27] !== t) {
        t11 = settings.isColumnVisible("actions") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(HEAD_CLASS, "w-32 text-end"),
            children: t("locations.columns.actions")
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 188,
            columnNumber: 50
        }, this);
        $[26] = settings;
        $[27] = t;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t10 || $[30] !== t11 || $[31] !== t5 || $[32] !== t6 || $[33] !== t7 || $[34] !== t8 || $[35] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                className: "border-b border-gray-200 bg-gray-50/80 hover:bg-gray-50/80 dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/50",
                children: [
                    t5,
                    t6,
                    t7,
                    t8,
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                lineNumber: 197,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t11;
        $[31] = t5;
        $[32] = t6;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== cellY || $[38] !== language || $[39] !== locations || $[40] !== onDelete || $[41] !== onEdit || $[42] !== onSelectLocation || $[43] !== onView || $[44] !== selectedLocations || $[45] !== settings || $[46] !== t || $[47] !== visibleColumns) {
        t13 = locations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
            className: "hover:bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                colSpan: visibleColumns + 1,
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    type: "no_results",
                    title: t("locations.table.noLocations"),
                    message: t("locations.table.noLocationsDesc"),
                    className: "py-14"
                }, void 0, false, {
                    fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                    lineNumber: 211,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                lineNumber: 211,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 211,
            columnNumber: 36
        }, this) : locations.map({
            "LocationsTable[locations.map()]": (location)=>{
                const isSelected = selectedLocations.includes(location.location_id);
                const landmark = present(location.location_landmark);
                const city = present(location.city_name);
                const area = present(location.area_name);
                const country = present(location.country_name);
                const created = parseDate(location.created_at);
                const projects = Number(location.projects_count) || 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    "data-state": isSelected ? "selected" : undefined,
                    onClick: {
                        "LocationsTable[locations.map() > <TableRow>.onClick]": ()=>onView(location)
                    }["LocationsTable[locations.map() > <TableRow>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group cursor-pointer border-b border-gray-100 transition-colors last:border-b-0 dark:border-neutral-800/80", isSelected ? "bg-teal-50/60 hover:bg-teal-50 dark:bg-teal-950/20 dark:hover:bg-teal-950/30" : "hover:bg-gray-50/70 dark:hover:bg-neutral-800/40"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ps-4 pe-2", cellY),
                            onClick: _LocationsTableLocationsMapTableCellOnClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: isSelected,
                                onCheckedChange: {
                                    "LocationsTable[locations.map() > <Checkbox>.onCheckedChange]": (checked_0)=>onSelectLocation(location.location_id, checked_0 === true)
                                }["LocationsTable[locations.map() > <Checkbox>.onCheckedChange]"],
                                "aria-label": landmark ?? `#${location.location_id}`
                            }, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 222,
                                columnNumber: 439
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 222,
                            columnNumber: 339
                        }, this),
                        settings.isColumnVisible("landmark") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4", cellY),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/60 dark:bg-teal-950/50 dark:text-teal-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                            lineNumber: 224,
                                            columnNumber: 467
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 277
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "line-clamp-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-teal-700 dark:text-gray-100 dark:group-hover:text-teal-400",
                                                title: landmark ?? undefined,
                                                children: landmark ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dash, {}, void 0, false, {
                                                    fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 730
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                                lineNumber: 224,
                                                columnNumber: 529
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400 dark:text-gray-500",
                                                children: [
                                                    "#",
                                                    location.location_id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                                lineNumber: 224,
                                                columnNumber: 743
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 504
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 228
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 187
                        }, this),
                        settings.isColumnVisible("details") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4", cellY),
                            children: city || area ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-sm font-medium text-gray-800 dark:text-gray-200",
                                        children: city ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dash, {}, void 0, false, {
                                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                            lineNumber: 224,
                                            columnNumber: 1063
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 977
                                    }, this),
                                    area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-xs text-gray-500 dark:text-gray-400",
                                        children: area
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 1085
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 952
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dash, {}, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 1170
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 895
                        }, this),
                        settings.isColumnVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4", cellY),
                            children: country ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex max-w-full items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                        className: "h-3 w-3 shrink-0 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 1500
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: country
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 1553
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 1284
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dash, {}, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 1606
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 1232
                        }, this),
                        settings.isColumnVisible("projects") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 text-center", cellY),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                title: `${projects} ${t("locations.columns.projects")}`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[2.75rem] items-center justify-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums", projects > 0 ? "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:ring-teal-900" : "bg-gray-50 text-gray-400 ring-1 ring-inset ring-gray-200 dark:bg-neutral-800 dark:text-gray-500 dark:ring-neutral-700"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 2182
                                    }, this),
                                    projects
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 1722
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 1669
                        }, this),
                        settings.isColumnVisible("created") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 whitespace-nowrap", cellY),
                            children: created ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                title: created.toLocaleString(language),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                        children: formatDate(created, language)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 2401
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-400 dark:text-gray-500",
                                        children: formatRelative(created, language)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 2492
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 2355
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dash, {}, void 0, false, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 2600
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 2285
                        }, this),
                        settings.isColumnVisible("actions") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4", cellY),
                            onClick: _LocationsTableLocationsMapTableCellOnClick2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "LocationsTable[locations.map() > <button>.onClick]": ()=>onView(location)
                                        }["LocationsTable[locations.map() > <button>.onClick]"],
                                        title: t("common.view"),
                                        "aria-label": t("common.view"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40", "hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950/40"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                            lineNumber: 226,
                                            columnNumber: 381
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 224,
                                        columnNumber: 2813
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "LocationsTable[locations.map() > <button>.onClick]": ()=>onEdit(location)
                                        }["LocationsTable[locations.map() > <button>.onClick]"],
                                        title: t("common.edit"),
                                        "aria-label": t("common.edit"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40", "hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-950/40"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                            lineNumber: 228,
                                            columnNumber: 378
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 226,
                                        columnNumber: 417
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "LocationsTable[locations.map() > <button>.onClick]": ()=>onDelete(location)
                                        }["LocationsTable[locations.map() > <button>.onClick]"],
                                        title: t("common.delete"),
                                        "aria-label": t("common.delete"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40", "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                            lineNumber: 230,
                                            columnNumber: 382
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                        lineNumber: 228,
                                        columnNumber: 416
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                                lineNumber: 224,
                                columnNumber: 2758
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                            lineNumber: 224,
                            columnNumber: 2662
                        }, this)
                    ]
                }, location.location_id, true, {
                    fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                    lineNumber: 220,
                    columnNumber: 16
                }, this);
            }
        }["LocationsTable[locations.map()]"]);
        $[37] = cellY;
        $[38] = language;
        $[39] = locations;
        $[40] = onDelete;
        $[41] = onEdit;
        $[42] = onSelectLocation;
        $[43] = onView;
        $[44] = selectedLocations;
        $[45] = settings;
        $[46] = t;
        $[47] = visibleColumns;
        $[48] = t13;
    } else {
        t13 = $[48];
    }
    let t14;
    if ($[49] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[49] = t13;
        $[50] = t14;
    } else {
        t14 = $[50];
    }
    let t15;
    if ($[51] !== t12 || $[52] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    className: "w-full min-w-[880px]",
                    children: [
                        t12,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                    lineNumber: 258,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
                lineNumber: 258,
                columnNumber: 148
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/locations/components/LocationsTable.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[51] = t12;
        $[52] = t14;
        $[53] = t15;
    } else {
        t15 = $[53];
    }
    return t15;
}
_s(LocationsTable, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = LocationsTable;
function _LocationsTableLocationsMapTableCellOnClick2(e_0) {
    return e_0.stopPropagation();
}
function _LocationsTableLocationsMapTableCellOnClick(e) {
    return e.stopPropagation();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Dash");
__turbopack_context__.k.register(_c1, "LocationsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-table-settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTableSettings",
    ()=>useTableSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useTableSettings(tableId, defaultColumns, defaultItemsPerPage = 15) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        columns: defaultColumns,
        density: "comfortable",
        itemsPerPage: defaultItemsPerPage,
        sort: null
    });
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const stored = localStorage.getItem(`table-settings-${tableId}`);
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored);
                        const parsedColumns = parsed.columns || [];
                        const mergedColumns = defaultColumns.map({
                            "useTableSettings.useEffect.mergedColumns": (defCol)=>{
                                const found = parsedColumns.find({
                                    "useTableSettings.useEffect.mergedColumns.found": (pCol)=>pCol.id === defCol.id
                                }["useTableSettings.useEffect.mergedColumns.found"]);
                                return found ? {
                                    ...defCol,
                                    visible: found.visible
                                } : defCol;
                            }
                        }["useTableSettings.useEffect.mergedColumns"]);
                        const rawItemsPerPage = parsed.itemsPerPage;
                        const validItemsPerPage = typeof rawItemsPerPage === "number" && rawItemsPerPage >= 5 ? rawItemsPerPage : defaultItemsPerPage >= 5 ? defaultItemsPerPage : 10;
                        setSettings({
                            columns: mergedColumns,
                            density: parsed.density || "comfortable",
                            itemsPerPage: validItemsPerPage,
                            sort: parsed.sort || null
                        });
                    } catch (error) {
                        console.error("Failed to parse table settings from localStorage", error);
                    }
                } else {
                    setSettings({
                        "useTableSettings.useEffect": (prev)=>({
                                ...prev,
                                columns: defaultColumns
                            })
                    }["useTableSettings.useEffect"]);
                }
                setIsInitialized(true);
            }
        }
    }["useTableSettings.useEffect"], [
        tableId
    ]);
    const defaultLabelsSerialized = JSON.stringify(defaultColumns.map((c)=>({
            id: c.id,
            label: c.label
        })));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            setSettings({
                "useTableSettings.useEffect": (prev_0)=>{
                    let hasChanged = false;
                    const updatedColumns = prev_0.columns.map({
                        "useTableSettings.useEffect.updatedColumns": (col)=>{
                            const defCol_0 = defaultColumns.find({
                                "useTableSettings.useEffect.updatedColumns.defCol_0": (d)=>d.id === col.id
                            }["useTableSettings.useEffect.updatedColumns.defCol_0"]);
                            if (defCol_0 && defCol_0.label !== col.label) {
                                hasChanged = true;
                                return {
                                    ...col,
                                    label: defCol_0.label
                                };
                            }
                            return col;
                        }
                    }["useTableSettings.useEffect.updatedColumns"]);
                    if (!hasChanged) return prev_0;
                    return {
                        ...prev_0,
                        columns: updatedColumns
                    };
                }
            }["useTableSettings.useEffect"]);
        }
    }["useTableSettings.useEffect"], [
        defaultLabelsSerialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            if (isInitialized && ("TURBOPACK compile-time value", "object") !== "undefined") {
                localStorage.setItem(`table-settings-${tableId}`, JSON.stringify(settings));
            }
        }
    }["useTableSettings.useEffect"], [
        settings,
        tableId,
        isInitialized
    ]);
    const toggleColumn = (columnId)=>{
        setSettings((prev_1)=>({
                ...prev_1,
                columns: prev_1.columns.map((col_0)=>col_0.id === columnId ? {
                        ...col_0,
                        visible: !col_0.visible
                    } : col_0)
            }));
    };
    const setDensity = (density)=>{
        setSettings((prev_2)=>({
                ...prev_2,
                density
            }));
    };
    const setItemsPerPage = (itemsPerPage)=>{
        setSettings((prev_3)=>({
                ...prev_3,
                itemsPerPage
            }));
    };
    const setSort = (sort)=>{
        setSettings((prev_4)=>({
                ...prev_4,
                sort
            }));
    };
    const resetToDefaults = ()=>{
        setSettings({
            columns: defaultColumns,
            density: "comfortable",
            itemsPerPage: defaultItemsPerPage >= 5 ? defaultItemsPerPage : 10,
            sort: null
        });
    };
    const isColumnVisible = (columnId_0)=>{
        return settings.columns.find((col_1)=>col_1.id === columnId_0)?.visible ?? true;
    };
    return {
        settings,
        toggleColumn,
        setDensity,
        setItemsPerPage,
        setSort,
        resetToDefaults,
        isColumnVisible,
        // True once stored settings (e.g. itemsPerPage) have been read from localStorage.
        // Server-paginated pages can gate their list query on it to avoid a first request
        // with the default page size followed by a second one with the stored size.
        isInitialized
    };
}
_s(useTableSettings, "BoMLrMR+tXv5cQOXaJ7CqD+BXuM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/locations/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationsManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminLocations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboardAdminLocations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/handle-export.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/locations/components/LocationsHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/locations/components/LocationsFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/locations/components/LocationsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-table-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
const AddLocationModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/locations/AddLocationModal/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.AddLocationModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/locations/AddLocationModal/index.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AddLocationModal;
const EditLocationModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/locations/EditLocationModal/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.EditLocationModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/locations/EditLocationModal/index.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = EditLocationModal;
const DeleteLocationModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/locations/delete-location-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.DeleteLocationModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/locations/delete-location-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = DeleteLocationModal;
function LocationsManagementPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(114);
    if ($[0] !== "784c912194906808e21337102fdc008882062ba949ab898b8c6aa377ba24c6e7") {
        for(let $i = 0; $i < 114; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "784c912194906808e21337102fdc008882062ba949ab898b8c6aa377ba24c6e7";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t0;
    if ($[1] !== t) {
        t0 = t("locations.columns.landmark");
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = {
            id: "landmark",
            label: t0,
            visible: true
        };
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t) {
        t2 = t("locations.columns.details");
        $[5] = t;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = {
            id: "details",
            label: t2,
            visible: true
        };
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t) {
        t4 = t("locations.columns.projects");
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = {
            id: "projects",
            label: t4,
            visible: true
        };
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t) {
        t6 = t("locations.columns.created");
        $[13] = t;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t6) {
        t7 = {
            id: "created",
            label: t6,
            visible: true
        };
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t) {
        t8 = t("locations.columns.country");
        $[17] = t;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = {
            id: "country",
            label: t8,
            visible: true
        };
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t) {
        t10 = t("locations.columns.actions");
        $[21] = t;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10) {
        t11 = {
            id: "actions",
            label: t10,
            visible: true
        };
        $[23] = t10;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t1 || $[26] !== t11 || $[27] !== t3 || $[28] !== t5 || $[29] !== t7 || $[30] !== t9) {
        t12 = [
            t1,
            t3,
            t5,
            t7,
            t9,
            t11
        ];
        $[25] = t1;
        $[26] = t11;
        $[27] = t3;
        $[28] = t5;
        $[29] = t7;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const DEFAULT_COLUMNS = t12;
    const tableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"])("locations", DEFAULT_COLUMNS);
    const [perPage, setPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tableSettings.settings.itemsPerPage);
    let t13;
    let t14;
    if ($[32] !== tableSettings.settings.itemsPerPage) {
        t13 = ({
            "LocationsManagementPage[useEffect()]": ()=>{
                setPerPage(tableSettings.settings.itemsPerPage);
            }
        })["LocationsManagementPage[useEffect()]"];
        t14 = [
            tableSettings.settings.itemsPerPage
        ];
        $[32] = tableSettings.settings.itemsPerPage;
        $[33] = t13;
        $[34] = t14;
    } else {
        t13 = $[33];
        t14 = $[34];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedSearch, setDebouncedSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            city: "all"
        };
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t15);
    let t16;
    let t17;
    if ($[36] !== searchQuery) {
        t16 = ({
            "LocationsManagementPage[useEffect()]": ()=>{
                const handler = setTimeout({
                    "LocationsManagementPage[useEffect() > setTimeout()]": ()=>{
                        setDebouncedSearch({
                            "LocationsManagementPage[useEffect() > setTimeout() > setDebouncedSearch()]": (prev)=>{
                                if (prev !== searchQuery) {
                                    setPage(1);
                                }
                                return searchQuery;
                            }
                        }["LocationsManagementPage[useEffect() > setTimeout() > setDebouncedSearch()]"]);
                    }
                }["LocationsManagementPage[useEffect() > setTimeout()]"], 500);
                return ()=>clearTimeout(handler);
            }
        })["LocationsManagementPage[useEffect()]"];
        t17 = [
            searchQuery
        ];
        $[36] = searchQuery;
        $[37] = t16;
        $[38] = t17;
    } else {
        t16 = $[37];
        t17 = $[38];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t16, t17);
    let t18;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "LocationsManagementPage[setFilter]": (key, value)=>{
                setFilters({
                    "LocationsManagementPage[setFilter > setFilters()]": (prev_0)=>({
                            ...prev_0,
                            [key]: value
                        })
                }["LocationsManagementPage[setFilter > setFilters()]"]);
                setPage(1);
            }
        })["LocationsManagementPage[setFilter]"];
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    const setFilter = t18;
    let t19;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = [];
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    const [selectedLocations, setSelectedLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t19);
    const [isAddLocationModalOpen, setIsAddLocationModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationToDelete, setLocationToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { paginatedLocationsData: allLocationsData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminLocations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(1, 1000, debouncedSearch);
    const allRaw = allLocationsData.data?.data;
    let t20;
    if ($[41] !== allRaw) {
        t20 = Array.isArray(allRaw) ? allRaw : allRaw?.data ?? [];
        $[41] = allRaw;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    const allItems = t20;
    let t21;
    if ($[43] !== allItems) {
        t21 = Array.from(new Set(allItems.map(_LocationsManagementPageAllItemsMap).filter(_LocationsManagementPageAnonymous))).sort();
        $[43] = allItems;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    const cities = t21;
    const { isLoading, isError, error, refetch } = allLocationsData;
    let t22;
    if ($[45] !== allItems) {
        t22 = allItems.map(_LocationsManagementPageAllItemsMap2);
        $[45] = allItems;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    const locations = t22;
    let t23;
    bb0: {
        if (filters.city !== "all") {
            let t24;
            if ($[47] !== filters.city || $[48] !== locations) {
                let t25;
                if ($[50] !== filters.city) {
                    t25 = ({
                        "LocationsManagementPage[locations.filter()]": (loc_1)=>loc_1.city_name === filters.city
                    })["LocationsManagementPage[locations.filter()]"];
                    $[50] = filters.city;
                    $[51] = t25;
                } else {
                    t25 = $[51];
                }
                t24 = locations.filter(t25);
                $[47] = filters.city;
                $[48] = locations;
                $[49] = t24;
            } else {
                t24 = $[49];
            }
            t23 = t24;
            break bb0;
        }
        t23 = locations;
    }
    const filteredLocations = t23;
    const total = filteredLocations.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    let t24;
    if ($[52] !== filteredLocations || $[53] !== page || $[54] !== perPage) {
        t24 = filteredLocations.slice((page - 1) * perPage, page * perPage);
        $[52] = filteredLocations;
        $[53] = page;
        $[54] = perPage;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    const currentLocations = t24;
    let t25;
    if ($[56] !== locations) {
        t25 = ({
            "LocationsManagementPage[handleSelectAll]": (checked)=>{
                if (checked) {
                    setSelectedLocations(locations.map(_LocationsManagementPageHandleSelectAllLocationsMap));
                } else {
                    setSelectedLocations([]);
                }
            }
        })["LocationsManagementPage[handleSelectAll]"];
        $[56] = locations;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    const handleSelectAll = t25;
    let t26;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "LocationsManagementPage[handleSelectLocation]": (location_id, checked_0)=>{
                if (checked_0) {
                    setSelectedLocations({
                        "LocationsManagementPage[handleSelectLocation > setSelectedLocations()]": (prev_1)=>[
                                ...prev_1,
                                location_id
                            ]
                    }["LocationsManagementPage[handleSelectLocation > setSelectedLocations()]"]);
                } else {
                    setSelectedLocations({
                        "LocationsManagementPage[handleSelectLocation > setSelectedLocations()]": (prev_2)=>prev_2.filter({
                                "LocationsManagementPage[handleSelectLocation > setSelectedLocations() > prev_2.filter()]": (id)=>id !== location_id
                            }["LocationsManagementPage[handleSelectLocation > setSelectedLocations() > prev_2.filter()]"])
                    }["LocationsManagementPage[handleSelectLocation > setSelectedLocations()]"]);
                }
            }
        })["LocationsManagementPage[handleSelectLocation]"];
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    const handleSelectLocation = t26;
    let t27;
    if ($[59] !== queryClient) {
        t27 = ({
            "LocationsManagementPage[handleDeleteSuccess]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "locations"
                    ]
                });
                setIsDeleteModalOpen(false);
                setLocationToDelete(null);
            }
        })["LocationsManagementPage[handleDeleteSuccess]"];
        $[59] = queryClient;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    const handleDeleteSuccess = t27;
    let t28;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "LocationsManagementPage[<LocationsHeader>.onAddLocation]": ()=>setIsAddLocationModalOpen(true)
        })["LocationsManagementPage[<LocationsHeader>.onAddLocation]"];
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    let t30;
    if ($[62] !== locations) {
        t29 = ({
            "LocationsManagementPage[<LocationsHeader>.onExportExcel]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationsExportToExcel"])(locations)
        })["LocationsManagementPage[<LocationsHeader>.onExportExcel]"];
        t30 = ({
            "LocationsManagementPage[<LocationsHeader>.onExportPdf]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationsExportToPDF"])(locations)
        })["LocationsManagementPage[<LocationsHeader>.onExportPdf]"];
        $[62] = locations;
        $[63] = t29;
        $[64] = t30;
    } else {
        t29 = $[63];
        t30 = $[64];
    }
    let t31;
    if ($[65] !== t29 || $[66] !== t30 || $[67] !== tableSettings || $[68] !== total) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationsHeader"], {
            totalLocations: total,
            onAddLocation: t28,
            tableSettings: tableSettings,
            onExportExcel: t29,
            onExportPdf: t30
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[65] = t29;
        $[66] = t30;
        $[67] = tableSettings;
        $[68] = total;
        $[69] = t31;
    } else {
        t31 = $[69];
    }
    let t32;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "LocationsManagementPage[<LocationsFilters>.onSearchChange]": (val)=>{
                setSearchQuery(val);
                setPage(1);
            }
        })["LocationsManagementPage[<LocationsFilters>.onSearchChange]"];
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = ({
            "LocationsManagementPage[<LocationsFilters>.onCityChange]": (val_0)=>{
                setFilter("city", val_0);
                setPage(1);
            }
        })["LocationsManagementPage[<LocationsFilters>.onCityChange]"];
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== cities || $[73] !== filters.city || $[74] !== searchQuery) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationsFilters"], {
            searchQuery: searchQuery,
            onSearchChange: t32,
            cities: cities,
            cityFilter: filters.city,
            onCityChange: t33
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[72] = cities;
        $[73] = filters.city;
        $[74] = searchQuery;
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== isLoading) {
        t35 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-gray-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: Array.from({
                        length: 5
                    }).map(_LocationsManagementPageAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/locations/page.client.tsx",
                    lineNumber: 476,
                    columnNumber: 111
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 476,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 476,
            columnNumber: 24
        }, this);
        $[76] = isLoading;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] !== error || $[79] !== isError || $[80] !== isLoading || $[81] !== refetch || $[82] !== t) {
        t36 = isError && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    type: "error",
                    message: error instanceof Error ? error.message : t("locations.messages.loadFailed")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/locations/page.client.tsx",
                    lineNumber: 486,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    onClick: {
                        "LocationsManagementPage[<Button>.onClick]": ()=>refetch()
                    }["LocationsManagementPage[<Button>.onClick]"],
                    className: "mt-4 border-gray-200 text-gray-700 hover:bg-gray-50",
                    children: t("locations.messages.tryAgain")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/locations/page.client.tsx",
                    lineNumber: 486,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 486,
            columnNumber: 36
        }, this);
        $[78] = error;
        $[79] = isError;
        $[80] = isLoading;
        $[81] = refetch;
        $[82] = t;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    let t37;
    if ($[84] !== currentLocations || $[85] !== handleSelectAll || $[86] !== isError || $[87] !== isLoading || $[88] !== page || $[89] !== perPage || $[90] !== router || $[91] !== selectedLocations || $[92] !== tableSettings || $[93] !== total || $[94] !== totalPages) {
        t37 = !isLoading && !isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$locations$2f$components$2f$LocationsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationsTable"], {
                    settings: tableSettings,
                    locations: currentLocations,
                    selectedLocations: selectedLocations,
                    onSelectAll: handleSelectAll,
                    onSelectLocation: handleSelectLocation,
                    onView: {
                        "LocationsManagementPage[<LocationsTable>.onView]": (loc_2)=>{
                            router.push(`/admin/locations/${loc_2.location_id}`);
                        }
                    }["LocationsManagementPage[<LocationsTable>.onView]"],
                    onEdit: {
                        "LocationsManagementPage[<LocationsTable>.onEdit]": (loc_3)=>{
                            setSelectedLocation(loc_3);
                            setIsEditModalOpen(true);
                        }
                    }["LocationsManagementPage[<LocationsTable>.onEdit]"],
                    onDelete: {
                        "LocationsManagementPage[<LocationsTable>.onDelete]": (loc_4)=>{
                            setLocationToDelete(loc_4);
                            setIsDeleteModalOpen(true);
                        }
                    }["LocationsManagementPage[<LocationsTable>.onDelete]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/locations/page.client.tsx",
                    lineNumber: 500,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                    page: page,
                    totalPages: totalPages,
                    totalItems: total,
                    perPage: perPage,
                    onPageChange: setPage,
                    onPerPageChange: {
                        "LocationsManagementPage[<Pagination>.onPerPageChange]": (val_1)=>{
                            setPerPage(Number(val_1));
                            setPage(1);
                        }
                    }["LocationsManagementPage[<Pagination>.onPerPageChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/locations/page.client.tsx",
                    lineNumber: 514,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true);
        $[84] = currentLocations;
        $[85] = handleSelectAll;
        $[86] = isError;
        $[87] = isLoading;
        $[88] = page;
        $[89] = perPage;
        $[90] = router;
        $[91] = selectedLocations;
        $[92] = tableSettings;
        $[93] = total;
        $[94] = totalPages;
        $[95] = t37;
    } else {
        t37 = $[95];
    }
    let t38;
    if ($[96] !== isAddLocationModalOpen) {
        t38 = isAddLocationModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddLocationModal, {
            isOpen: isAddLocationModalOpen,
            onClose: {
                "LocationsManagementPage[<AddLocationModal>.onClose]": ()=>setIsAddLocationModalOpen(false)
            }["LocationsManagementPage[<AddLocationModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 537,
            columnNumber: 37
        }, this);
        $[96] = isAddLocationModalOpen;
        $[97] = t38;
    } else {
        t38 = $[97];
    }
    let t39;
    if ($[98] !== isEditModalOpen || $[99] !== selectedLocation) {
        t39 = isEditModalOpen && selectedLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditLocationModal, {
            locationId: selectedLocation.location_id,
            isOpen: isEditModalOpen,
            onClose: {
                "LocationsManagementPage[<EditLocationModal>.onClose]": ()=>{
                    setIsEditModalOpen(false);
                    setSelectedLocation(null);
                }
            }["LocationsManagementPage[<EditLocationModal>.onClose]"],
            onSuccess: _LocationsManagementPageEditLocationModalOnSuccess
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 547,
            columnNumber: 50
        }, this);
        $[98] = isEditModalOpen;
        $[99] = selectedLocation;
        $[100] = t39;
    } else {
        t39 = $[100];
    }
    let t40;
    if ($[101] !== handleDeleteSuccess || $[102] !== isDeleteModalOpen || $[103] !== locationToDelete) {
        t40 = isDeleteModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteLocationModal, {
            location: locationToDelete,
            isOpen: isDeleteModalOpen,
            onClose: {
                "LocationsManagementPage[<DeleteLocationModal>.onClose]": ()=>{
                    setIsDeleteModalOpen(false);
                    setLocationToDelete(null);
                }
            }["LocationsManagementPage[<DeleteLocationModal>.onClose]"],
            onSuccess: handleDeleteSuccess
        }, void 0, false, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 561,
            columnNumber: 32
        }, this);
        $[101] = handleDeleteSuccess;
        $[102] = isDeleteModalOpen;
        $[103] = locationToDelete;
        $[104] = t40;
    } else {
        t40 = $[104];
    }
    let t41;
    if ($[105] !== t31 || $[106] !== t34 || $[107] !== t35 || $[108] !== t36 || $[109] !== t37 || $[110] !== t38 || $[111] !== t39 || $[112] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 px-3 space-y-4 max-w-full overflow-hidden",
            children: [
                t31,
                t34,
                t35,
                t36,
                t37,
                t38,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/locations/page.client.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[105] = t31;
        $[106] = t34;
        $[107] = t35;
        $[108] = t36;
        $[109] = t37;
        $[110] = t38;
        $[111] = t39;
        $[112] = t40;
        $[113] = t41;
    } else {
        t41 = $[113];
    }
    return t41;
}
_s(LocationsManagementPage, "cWFroQxw9gBAebJaiSAc6DvCFmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminLocations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c3 = LocationsManagementPage;
function _LocationsManagementPageEditLocationModalOnSuccess() {}
function _LocationsManagementPageAnonymous2(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 593,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-1/4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 593,
                columnNumber: 91
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-1/4"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 593,
                columnNumber: 125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 593,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-[80px]"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/locations/page.client.tsx",
                lineNumber: 593,
                columnNumber: 197
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/admin/locations/page.client.tsx",
        lineNumber: 593,
        columnNumber: 10
    }, this);
}
function _LocationsManagementPageHandleSelectAllLocationsMap(l) {
    return l.location_id;
}
function _LocationsManagementPageAllItemsMap2(loc_0) {
    return {
        location_id: loc_0.location_id,
        location_landmark: loc_0.location_landmark || "N/A",
        city_name: loc_0.city_name || "N/A",
        country_name: loc_0.country_name || "N/A",
        area_name: loc_0.area_name?.trim() || "N/A",
        created_at: loc_0.created_at || "N/A",
        projects_count: loc_0.projects_count || 0,
        status: loc_0.status || loc_0.is_active || "active"
    };
}
function _LocationsManagementPageAnonymous(c) {
    return c && c !== "N/A" && c.trim() !== "";
}
function _LocationsManagementPageAllItemsMap(loc) {
    return loc?.city_name;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AddLocationModal");
__turbopack_context__.k.register(_c1, "EditLocationModal");
__turbopack_context__.k.register(_c2, "DeleteLocationModal");
__turbopack_context__.k.register(_c3, "LocationsManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f016c711._.js.map