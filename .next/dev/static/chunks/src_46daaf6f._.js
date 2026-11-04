(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    if ($[0] !== "4c00e6a3660f95adea38e41b2d6ced2ce1bfb999d8956902e85d4e7fb03ddcb9") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c00e6a3660f95adea38e41b2d6ced2ce1bfb999d8956902e85d4e7fb03ddcb9";
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
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#008081] data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-neutral-700", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/projects/services/AdminProjectsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminProjectsService",
    ()=>AdminProjectsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
const AdminProjectsService = {
    getProjectsPaginated: async (page = 1, perPage = 10, search, status, projectType, countryId)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search) params.append("search", search);
        if (status && status !== "all") params.append("status", status);
        if (projectType && projectType !== "all") params.append("project_type", projectType);
        if (countryId && countryId !== "all") params.append("country_id", countryId.toString());
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects?${params.toString()}`);
        return response.data;
    },
    getProject: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    syncERPNext: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects/sync-erpnext");
            return response.data;
        } catch  {
            return {
                success: true,
                message: "ERPNext sync initiated"
            };
        }
    },
    toggleFeatured: async (projectId, isFeatured)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/projects/${projectId}/toggle-feature`, {
                is_favourite: isFeatured,
                is_top: isFeatured
            });
            return response.data;
        } catch  {
            // Fallback
            return {
                success: true
            };
        }
    },
    createProject: async (data)=>{
        const formData = new FormData();
        formData.append("project_name", data.project_name);
        formData.append("status", data.status);
        formData.append("project_type", data.project_type);
        if (data.launch_date) formData.append("launch_date", data.launch_date);
        formData.append("developer_id", String(data.developer_id));
        if (data.available_units !== undefined) formData.append("available_units", String(data.available_units));
        if (data.total_units !== undefined) formData.append("total_units", String(data.total_units));
        if (data.price_range) formData.append("price_range", String(data.price_range));
        if (data.price_range_SQ) formData.append("price_range_SQ", String(data.price_range_SQ));
        if (data.min_price) formData.append("min_price", String(data.min_price));
        if (data.max_price) formData.append("max_price", String(data.max_price));
        if (data.completion_date) formData.append("completion_date", data.completion_date);
        if (data.milestone_id) formData.append("milestone_id", String(data.milestone_id));
        if (data.description) formData.append("description", data.description);
        if (data.project_size) formData.append("project_size", String(data.project_size));
        if (data.phase) formData.append("phase", data.phase);
        if (data.is_active !== undefined) formData.append("is_active", String(data.is_active));
        if (data.currency) formData.append("currency", data.currency);
        if (data.permit_no) formData.append("permit_no", data.permit_no);
        if (data.barcode) formData.append("barcode", data.barcode);
        if (data.slug) formData.append("slug", data.slug);
        if (data.meta_title) formData.append("meta_title", data.meta_title);
        if (data.meta_description) formData.append("meta_description", data.meta_description);
        if (data.country_id) formData.append("country_id", String(data.country_id));
        if (data.country) formData.append("country", String(data.country));
        formData.append("location[google_map_link]", data.google_map_link || "");
        formData.append("location[latitude]", String(data.latitude || 0));
        formData.append("location[longitude]", String(data.longitude || 0));
        if (data.area_id) formData.append("location[area_id]", String(data.area_id));
        if (data.city_id) formData.append("location[city_id]", String(data.city_id));
        if (data.north_side) formData.append("location[north_side]", data.north_side);
        if (data.south_side) formData.append("location[south_side]", data.south_side);
        if (data.east_side) formData.append("location[east_side]", data.east_side);
        if (data.west_side) formData.append("location[west_side]", data.west_side);
        if (data.landmark) formData.append("location[landmark]", data.landmark);
        if (data.location_description) formData.append("location[description]", data.location_description);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects", formData);
        return response.data;
    },
    createProjectMedia: async (formData)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects/medias/create", formData);
        return response.data;
    },
    createProjectWithMedia: async (params)=>{
        const { mediaItems, location, ...projectData } = params;
        const flattenedProjectData = {
            ...projectData,
            latitude: location.latitude,
            longitude: location.longitude,
            landmark: location.landmark,
            city_id: location.city_id,
            north_side: location.north_side,
            south_side: location.south_side,
            east_side: location.east_side,
            west_side: location.west_side,
            google_map_link: location.google_map_link,
            ...location.area_id && {
                area_id: location.area_id
            },
            ...(params.country_id || location.country_id) && {
                country_id: params.country_id || location.country_id
            },
            ...(params.country || location.country) && {
                country: params.country || location.country
            }
        };
        const projectResponse = await AdminProjectsService.createProject(flattenedProjectData);
        const projectId = projectResponse.data?.project_id;
        const projectName = projectResponse.data?.project_name || "Project";
        if (!projectId) {
            throw new Error("Project creation failed: no project ID returned");
        }
        if (mediaItems.length > 0) {
            const formData = new FormData();
            formData.append("project_id", projectId.toString());
            const imageItems = mediaItems.filter((item)=>item.media_type === "image" || item.media_type === "floor_plan" || item.media_type === "3D_tour");
            const videoItems = mediaItems.filter((item)=>item.media_type === "video");
            const orderedItems = [
                ...imageItems,
                ...videoItems
            ];
            imageItems.forEach((item)=>{
                if (item.file) {
                    formData.append("medias[]", item.file);
                }
            });
            const mediaMeta = orderedItems.map((item)=>({
                    description: item.description,
                    is_primary: item.is_primary ? 1 : 0,
                    my_order: item.my_order ? 1 : 0,
                    media_type: item.media_type,
                    ...item.media_type === "video" && {
                        media_url: item.media_url
                    }
                }));
            formData.append("media_meta", JSON.stringify(mediaMeta));
            await AdminProjectsService.createProjectMedia(formData);
        }
        return {
            projectId,
            projectName
        };
    },
    updateProject: async (projectId, data)=>{
        const formData = new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if (key === "location" && typeof value === "object" && value !== null) {
                Object.entries(value).forEach(([locKey, locValue])=>{
                    if (locValue !== undefined && locValue !== null) {
                        formData.append(`location[${locKey}]`, String(locValue));
                    }
                });
            } else if (Array.isArray(value)) {
                value.forEach((val)=>formData.append(`${key}[]`, String(val)));
            } else if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/projects/${projectId}`, formData);
        return response.data;
    },
    deleteProject: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    toggleActive: async (projectId, isActive)=>{
        const projectResponse = await AdminProjectsService.getProject(projectId);
        const raw = projectResponse.data ?? projectResponse;
        let mappedProjectType = raw.project_type ?? "residential";
        const lowerType = mappedProjectType.toLowerCase();
        if (lowerType === "mixed use" || lowerType === "mixed-use") mappedProjectType = "mixed-use";
        else if (lowerType === "residential") mappedProjectType = "residential";
        else if (lowerType === "commercial") mappedProjectType = "commercial";
        const cityId = String(raw.location?.city?.city_name || raw.location?.city?.name || raw.location?.city_id || "");
        const areaId = String(raw.location?.area?.area_name || raw.location?.area?.dld_area_name || raw.location?.area?.name || raw.location?.area_id || "");
        const developerId = String(raw.developer?.developer_id || raw.developer_id || "1");
        const payload = {
            project_name: raw.project_name || "Project",
            status: raw.status || "ongoing",
            project_type: mappedProjectType,
            developer_id: developerId,
            is_active: isActive ? "1" : "0",
            is_visible: isActive ? "1" : "0"
        };
        if (raw.total_units != null) payload.total_units = String(raw.total_units);
        if (raw.available_units != null) payload.available_units = String(raw.available_units);
        if (raw.launch_date) payload.launch_date = raw.launch_date;
        if (raw.completion_date) payload.completion_date = raw.completion_date;
        if (raw.currency) payload.currency = raw.currency;
        if (raw.project_size) payload.project_size = String(raw.project_size);
        if (raw.description) payload.description = raw.description;
        if (raw.price_range) payload.price_range = String(raw.price_range);
        if (raw.price_range_SQ) payload.price_range_SQ = String(raw.price_range_SQ);
        payload.location = {
            latitude: raw.location?.latitude ?? 0,
            longitude: raw.location?.longitude ?? 0,
            landmark: raw.location?.landmark || "",
            city_id: cityId,
            area_id: areaId,
            north_side: raw.location?.north_side || "",
            south_side: raw.location?.south_side || "",
            east_side: raw.location?.east_side || "",
            west_side: raw.location?.west_side || "",
            google_map_link: raw.location?.google_map_link || ""
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/projects/${projectId}/visibility`, payload);
        return response.data;
    },
    updateMilestone: async (milestoneId, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/milestones/${milestoneId}`, data);
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectHeader",
    ()=>ProjectHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$services$2f$AdminProjectsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/services/AdminProjectsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
function ProjectHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "531aca0cb5f25e47148fbe52a981905081e1f02c27557bfe26af6dba8589d94b") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "531aca0cb5f25e47148fbe52a981905081e1f02c27557bfe26af6dba8589d94b";
    }
    const { projectId, data } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isActive = data.is_active === 1 || data.is_active === "1";
    let t1;
    if ($[1] !== projectId) {
        t1 = (newIsActive)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$services$2f$AdminProjectsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminProjectsService"].toggleActive(projectId, newIsActive);
        $[1] = projectId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== projectId || $[4] !== queryClient || $[5] !== t) {
        t2 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.messages.statusUpdateSuccess"));
            queryClient.invalidateQueries({
                queryKey: [
                    "projectDetails",
                    projectId.toString()
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "Projects"
                ]
            });
        };
        $[3] = projectId;
        $[4] = queryClient;
        $[5] = t;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t) {
        t3 = (error)=>{
            const axiosError = error;
            const errorList = axiosError?.response?.data?.errors;
            const flatMessages = errorList ? Object.values(errorList).map(_ProjectHeaderAnonymousAnonymous).flat().join(", ") : "";
            const fallbackMessage = axiosError.response?.data?.message || axiosError.message || t("projects.messages.statusUpdateFailed");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(flatMessages || fallbackMessage);
        };
        $[7] = t;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t3) {
        t4 = {
            mutationFn: t1,
            onSuccess: t2,
            onError: t3
        };
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const statusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t4);
    let t5;
    if ($[13] !== data || $[14] !== isActive || $[15] !== statusMutation) {
        t5 = ({
            "ProjectHeader[handleStatusToggle]": ()=>{
                if (!data) {
                    return;
                }
                statusMutation.mutate(!isActive);
            }
        })["ProjectHeader[handleStatusToggle]"];
        $[13] = data;
        $[14] = isActive;
        $[15] = statusMutation;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const handleStatusToggle = t5;
    let t6;
    if ($[17] !== routePrefix || $[18] !== router) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ProjectHeader[<button>.onClick]": ()=>router.push(`${routePrefix}/projects`)
            }["ProjectHeader[<button>.onClick]"],
            className: "hover:text-teal-600 dark:hover:text-teal-400 transition-colors",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[17] = routePrefix;
        $[18] = router;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4 text-slate-400 dark:text-slate-500"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const t8 = data.project_name || "Details";
    let t9;
    if ($[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-800 dark:text-slate-200",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t6 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex items-center text-sm font-medium text-slate-500 mb-6 space-x-2",
            children: [
                t6,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[23] = t6;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== router) {
        t11 = ({
            "ProjectHeader[<Button>.onClick]": ()=>router.back()
        })["ProjectHeader[<Button>.onClick]"];
        $[26] = router;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "icon",
            onClick: t11,
            className: "rounded-full border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors shadow-sm bg-transparent dark:text-slate-300",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    const t14 = data.project_name || "Project Details";
    let t15;
    if ($[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t13 || $[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-4",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    const t17 = `text-sm font-semibold ${isActive ? "text-teal-600 dark:text-teal-400" : "text-slate-500 dark:text-slate-400"}`;
    const t18 = isActive ? "Active" : "Inactive";
    let t19;
    if ($[36] !== t17 || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== handleStatusToggle || $[40] !== isActive) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            checked: isActive,
            onCheckedChange: handleStatusToggle,
            className: "data-[state=checked]:bg-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[39] = handleStatusToggle;
        $[40] = isActive;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19 || $[43] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-700",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== projectId || $[46] !== routePrefix || $[47] !== router) {
        t22 = ({
            "ProjectHeader[<Button>.onClick]": ()=>router.push(`${routePrefix}/projects/${projectId}/edit`)
        })["ProjectHeader[<Button>.onClick]"];
        $[45] = projectId;
        $[46] = routePrefix;
        $[47] = router;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t22,
            variant: "ghost",
            className: "flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors rounded-full px-4",
            children: [
                t23,
                "Edit Project"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[50] = t22;
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] !== t21 || $[53] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm",
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[52] = t21;
        $[53] = t24;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t16 || $[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t16,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[55] = t16;
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t10 || $[59] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t10,
                t26
            ]
        }, void 0, true);
        $[58] = t10;
        $[59] = t26;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    return t27;
}
_s(ProjectHeader, "0rVXEXU04RifCr/7YrPk5MY/B4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = ProjectHeader;
function _ProjectHeaderAnonymousAnonymous(errObj) {
    return Object.values(errObj);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStats",
    ()=>ProjectStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
;
;
function ProjectStats(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "5d012ca637aa360ed9e312fb7a7d2759447798205713664a359236093c3c6598") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d012ca637aa360ed9e312fb7a7d2759447798205713664a359236093c3c6598";
    }
    const { data } = t0;
    const t1 = data?.total_units || 0;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            label: "Total Units",
            value: t1,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
            color: "text-blue-600",
            bg: "bg-blue-50"
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = data?.available_properties_count || data?.available_units || 0;
    let t4;
    if ($[3] !== t3) {
        t4 = {
            label: "Available Units",
            value: t3,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: "text-teal-600",
            bg: "bg-teal-50"
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = data?.active_properties_count || 0;
    let t6;
    if ($[5] !== t5) {
        t6 = {
            label: "Active Units",
            value: t5,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            color: "text-purple-600",
            bg: "bg-purple-50"
        };
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = data?.booked_properties_count || 0;
    let t8;
    if ($[7] !== t7) {
        t8 = {
            label: "Booked Units",
            value: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
            color: "text-amber-600",
            bg: "bg-amber-50"
        };
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const t9 = data?.sold_properties_count || 0;
    let t10;
    if ($[9] !== t9) {
        t10 = {
            label: "Sold Units",
            value: t9,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
            color: "text-rose-600",
            bg: "bg-rose-50"
        };
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const t11 = data?.status || "N/A";
    let t12;
    if ($[11] !== t11) {
        t12 = {
            label: "Status",
            value: t11,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
            color: "text-slate-600 dark:text-slate-300",
            bg: "bg-slate-100 dark:bg-slate-700/50",
            capitalize: true
        };
        $[11] = t11;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== t10 || $[14] !== t12 || $[15] !== t2 || $[16] !== t4 || $[17] !== t6 || $[18] !== t8) {
        t13 = [
            t2,
            t4,
            t6,
            t8,
            t10,
            t12
        ];
        $[13] = t10;
        $[14] = t12;
        $[15] = t2;
        $[16] = t4;
        $[17] = t6;
        $[18] = t8;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    const stats = t13;
    let t14;
    if ($[20] !== stats) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 my-6",
            children: stats.map(_ProjectStatsStatsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[20] = stats;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    return t14;
}
_c = ProjectStats;
function _ProjectStatsStatsMap(stat, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${stat.bg} ${stat.color} p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
                    lineNumber: 134,
                    columnNumber: 383
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
                lineNumber: 134,
                columnNumber: 261
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-2xl font-bold text-slate-900 dark:text-white ${stat.capitalize ? "capitalize" : ""}`,
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
                lineNumber: 134,
                columnNumber: 422
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
                lineNumber: 134,
                columnNumber: 544
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeImage",
    ()=>SafeImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SafeImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "448dc143bd747dd8e0f024cec40d4b73711397c41145fe7376ab180ae00c54b5") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "448dc143bd747dd8e0f024cec40d4b73711397c41145fe7376ab180ae00c54b5";
    }
    let alt;
    let props;
    let src;
    let t1;
    if ($[1] !== t0) {
        ({ src, fallbackSrc: t1, alt, ...props } = t0);
        $[1] = t0;
        $[2] = alt;
        $[3] = props;
        $[4] = src;
        $[5] = t1;
    } else {
        alt = $[2];
        props = $[3];
        src = $[4];
        t1 = $[5];
    }
    const fallbackSrc = t1 === undefined ? "/images/default-avatar.svg" : t1;
    let t2;
    if ($[6] !== fallbackSrc) {
        t2 = ({
            "SafeImage[getFullUrl]": (url)=>{
                if (!url || url === "U" || url.trim() === "") {
                    return fallbackSrc;
                }
                const clean = url.trim().replace(/\\+/g, "");
                if (!clean) {
                    return fallbackSrc;
                }
                let finalUrl;
                if (clean.startsWith("http://") || clean.startsWith("https://") || clean.startsWith("data:") || clean.startsWith("blob:") || clean.startsWith("/") && !clean.startsWith("/storage") && !clean.startsWith("/uploads")) {
                    finalUrl = clean;
                } else {
                    const formatted = clean.startsWith("/") ? clean : `/${clean}`;
                    finalUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${formatted}`;
                }
                try {
                    return encodeURI(decodeURI(finalUrl));
                } catch  {
                    try {
                        return encodeURI(finalUrl);
                    } catch  {
                        return finalUrl;
                    }
                }
            }
        })["SafeImage[getFullUrl]"];
        $[6] = fallbackSrc;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const getFullUrl = t2;
    let t3;
    if ($[8] !== getFullUrl || $[9] !== src) {
        t3 = getFullUrl(src);
        $[8] = getFullUrl;
        $[9] = src;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const resolvedSrc = t3;
    const [imageSrc, setImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(resolvedSrc);
    let t4;
    let t5;
    if ($[11] !== resolvedSrc) {
        t4 = ({
            "SafeImage[useEffect()]": ()=>{
                setImageSrc(resolvedSrc);
            }
        })["SafeImage[useEffect()]"];
        t5 = [
            resolvedSrc
        ];
        $[11] = resolvedSrc;
        $[12] = t4;
        $[13] = t5;
    } else {
        t4 = $[12];
        t5 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[14] !== fallbackSrc || $[15] !== imageSrc) {
        t6 = ({
            "SafeImage[handleError]": ()=>{
                if (imageSrc !== fallbackSrc) {
                    setImageSrc(fallbackSrc);
                }
            }
        })["SafeImage[handleError]"];
        $[14] = fallbackSrc;
        $[15] = imageSrc;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const handleError = t6;
    let t7;
    if ($[17] !== imageSrc) {
        t7 = imageSrc.startsWith("http://") || imageSrc.startsWith("https://");
        $[17] = imageSrc;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const isRemote = t7;
    let t8;
    if ($[19] !== imageSrc || $[20] !== isRemote) {
        t8 = imageSrc.startsWith("blob:") || imageSrc.startsWith("data:") || isRemote || imageSrc.toLowerCase().includes(".svg");
        $[19] = imageSrc;
        $[20] = isRemote;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== alt || $[23] !== handleError || $[24] !== imageSrc || $[25] !== props || $[26] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...props,
            src: imageSrc,
            alt: alt,
            onError: handleError,
            referrerPolicy: "no-referrer",
            unoptimized: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ui/safe-image.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[22] = alt;
        $[23] = handleError;
        $[24] = imageSrc;
        $[25] = props;
        $[26] = t8;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    return t9;
}
_s(SafeImage, "jDGcxwlaBmGAUCkQ4G69qAwDc6E=");
_c = SafeImage;
var _c;
__turbopack_context__.k.register(_c, "SafeImage");
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
    if ($[0] !== "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b";
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
"[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectSidebar",
    ()=>ProjectSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/expand.js [app-client] (ecmascript) <export default as Expand>");
;
;
;
;
;
function ProjectSidebar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "1a3bb9fe65d8a28bbb5aa039c7d4c7cc8dc9bdfca0f0a8555bf39c490eee83f1") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1a3bb9fe65d8a28bbb5aa039c7d4c7cc8dc9bdfca0f0a8555bf39c490eee83f1";
    }
    const { data, buildingsCount } = t0;
    let t1;
    if ($[1] !== data.developer) {
        t1 = data.developer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4",
                    children: "Developer"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 24,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4 mb-5",
                    children: [
                        data.developer.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                                src: data.developer.logo,
                                alt: "Developer Logo",
                                width: 56,
                                height: 56,
                                fallbackSrc: "/images/default-logo.svg",
                                className: "w-14 h-14 rounded-lg object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                lineNumber: 24,
                                columnNumber: 526
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 402
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400",
                            children: data.developer.name?.substring(0, 2).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 703
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-slate-900 dark:text-slate-100 truncate",
                                    children: data.developer.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1010
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-900/50 border-teal-200 dark:border-teal-800 text-xs mt-2 transition-colors",
                                    children: data.developer.status || "Verified Developer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1106
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 972
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 24,
                    columnNumber: 334
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 text-sm mb-5 divide-y divide-slate-100/50 dark:divide-slate-700/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1518
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium truncate ml-4",
                                    children: data.developer.email
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1583
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 1462
                        }, this),
                        data.developer.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "Website"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1780
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium truncate ml-4",
                                    children: data.developer.website
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 1847
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 1724
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 2020
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium",
                                    children: data.developer.phone_number
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 2085
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 1964
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 24,
                    columnNumber: 1368
                }, this),
                data.developer.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed",
                        children: data.developer.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                        lineNumber: 24,
                        columnNumber: 2294
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 24,
                    columnNumber: 2229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 24,
            columnNumber: 28
        }, this);
        $[1] = data.developer;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4",
            children: "Project Overview"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__["Expand"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 39,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Total Area"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 39,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = data.project_size || "N/A";
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-semibold bg-slate-50 dark:bg-slate-700/50 px-2 py-0.5 rounded-md",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 47,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Launch Date"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = data.launch_date || "N/A";
    let t8;
    if ($[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-3",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-medium",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Delivery Date"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 71,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = data.completion_date || "N/A";
    let t11;
    if ($[11] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-3",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-medium",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 79,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 87,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Price Range"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 87,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = data.price_range || "N/A";
    let t14;
    if ($[14] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-3",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-medium",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 95,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 103,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Buildings"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 103,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] !== buildingsCount) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-3",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-medium",
                    children: buildingsCount
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 110,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[17] = buildingsCount;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Project Type"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    const t18 = data.project_type || "N/A";
    let t19;
    if ($[20] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center pt-3",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-900 dark:text-slate-200 font-medium",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 126,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[20] = t18;
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    let t20;
    if ($[22] !== t11 || $[23] !== t14 || $[24] !== t16 || $[25] !== t19 || $[26] !== t5 || $[27] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-sm divide-y divide-slate-100/50 dark:divide-slate-700/50",
                    children: [
                        t5,
                        t8,
                        t11,
                        t14,
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 204
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t14;
        $[24] = t16;
        $[25] = t19;
        $[26] = t5;
        $[27] = t8;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== data.location) {
        t21 = data.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4",
                    children: "Location Data"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 147,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 text-sm divide-y divide-slate-100/50 dark:divide-slate-700/50",
                    children: [
                        data.location.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "City"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 493
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium",
                                    children: data.location.city.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 557
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 450
                        }, this),
                        data.location.area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "Area"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 727
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium",
                                    children: data.location.area.area_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 791
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 684
                        }, this),
                        data.location.north_side && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "North Side"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 972
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 text-right w-1/2 line-clamp-1",
                                    title: data.location.north_side,
                                    children: data.location.north_side
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1042
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 929
                        }, this),
                        data.location.south_side && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "South Side"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 text-right w-1/2 line-clamp-1",
                                    title: data.location.south_side,
                                    children: data.location.south_side
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1340
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 1227
                        }, this),
                        data.location.east_side && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "East Side"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1567
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 text-right w-1/2 line-clamp-1",
                                    title: data.location.east_side,
                                    children: data.location.east_side
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1636
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 1524
                        }, this),
                        data.location.west_side && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400",
                                    children: "West Side"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1861
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 text-right w-1/2 line-clamp-1",
                                    title: data.location.west_side,
                                    children: data.location.west_side
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 1930
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 1818
                        }, this),
                        data.location.landmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400 block mb-1",
                                    children: "Landmark"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 2133
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-medium",
                                    children: data.location.landmark
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 2212
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 2111
                        }, this),
                        data.location.latitude && data.location.longitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 dark:text-slate-400 block mb-1",
                                    children: "Coordinates"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 2391
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900 dark:text-slate-200 font-mono bg-slate-50 dark:bg-slate-700/50 px-2 py-1 rounded",
                                    children: [
                                        data.location.latitude,
                                        "° N, ",
                                        data.location.longitude,
                                        "° E"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 2473
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 2369
                        }, this),
                        data.location.google_map_link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: data.location.google_map_link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center w-full rounded-xl bg-teal-600 hover:bg-teal-700 px-4 py-2.5 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 2978
                                    }, this),
                                    "View on Google Maps",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "ml-2 h-4 w-4 opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 3032
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                                lineNumber: 147,
                                columnNumber: 2714
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                            lineNumber: 147,
                            columnNumber: 2692
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
                    lineNumber: 147,
                    columnNumber: 338
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 147,
            columnNumber: 28
        }, this);
        $[29] = data.location;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t1 || $[32] !== t20 || $[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t1,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[31] = t1;
        $[32] = t20;
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    return t22;
}
_c = ProjectSidebar;
var _c;
__turbopack_context__.k.register(_c, "ProjectSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMedia",
    ()=>ProjectMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
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
const AddProjectMediaModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.AddProjectMediaModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/projects/AddProjectMediaModal/index.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AddProjectMediaModal;
const DeleteProjectMediaModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/projects/delete-project-media-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.DeleteProjectMediaModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/projects/delete-project-media-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = DeleteProjectMediaModal;
const EditProjectMediaModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/projects/edit-project-media-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.EditProjectMediaModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/projects/edit-project-media-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = EditProjectMediaModal;
function ProjectMedia(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "67b6186f37fdfb00d42ba8344c16575034c6e6063e78b5bd007dab2819d26ab6") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67b6186f37fdfb00d42ba8344c16575034c6e6063e78b5bd007dab2819d26ab6";
    }
    const { projectId, medias } = t0;
    const [isAddMediaModalOpen, setIsAddMediaModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingMedia, setEditingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditMediaModalOpen, setIsEditMediaModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaToDelete, setMediaToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteMediaModalOpen, setIsDeleteMediaModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t1 = medias?.length || 0;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight",
            children: [
                "Project Media ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-500 dark:text-slate-400 font-medium text-sm ml-2",
                    children: [
                        "(",
                        t1,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 43,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProjectMedia[<Button>.onClick]": ()=>setIsAddMediaModalOpen(true)
        })["ProjectMedia[<Button>.onClick]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t3,
            className: "bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow-md transition-all gap-2 rounded-full px-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 60,
                    columnNumber: 149
                }, this),
                "Add Media"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== medias) {
        t6 = medias && medias.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
            children: medias.map({
                "ProjectMedia[medias.map()]": (media, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative aspect-[4/3] bg-slate-100 dark:bg-slate-700/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-700",
                        children: [
                            media.media_type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: media.media_url,
                                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                                controls: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                lineNumber: 76,
                                columnNumber: 369
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                                src: media.media_url,
                                alt: media.description || "Project media",
                                fill: true,
                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
                                fallbackSrc: "/images/default-logo.svg",
                                className: "object-cover transition-transform duration-500 group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                lineNumber: 76,
                                columnNumber: 514
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProjectMedia[medias.map() > <button>.onClick]": ()=>{
                                                setEditingMedia(media);
                                                setIsEditMediaModalOpen(true);
                                            }
                                        }["ProjectMedia[medias.map() > <button>.onClick]"],
                                        className: "p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full shadow-sm transition-all hover:scale-110",
                                        title: "Edit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                            lineNumber: 81,
                                            columnNumber: 302
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 76,
                                        columnNumber: 965
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProjectMedia[medias.map() > <button>.onClick]": ()=>{
                                                setMediaToDelete(media);
                                                setIsDeleteMediaModalOpen(true);
                                            }
                                        }["ProjectMedia[medias.map() > <button>.onClick]"],
                                        className: "p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 rounded-full shadow-sm transition-all hover:scale-110",
                                        title: "Delete",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                            lineNumber: 86,
                                            columnNumber: 298
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 81,
                                        columnNumber: 339
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                lineNumber: 76,
                                columnNumber: 790
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3 flex flex-col gap-2 pointer-events-none",
                                children: [
                                    media.media_type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                                lineNumber: 86,
                                                columnNumber: 594
                                            }, this),
                                            "Video"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 86,
                                        columnNumber: 454
                                    }, this) : media.media_type === "floor_plan" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm",
                                        children: "Floor Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 86,
                                        columnNumber: 682
                                    }, this) : media.media_type === "3D_tour" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm",
                                        children: "3D Tour"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 86,
                                        columnNumber: 851
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                                lineNumber: 86,
                                                columnNumber: 1124
                                            }, this),
                                            "Image"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 86,
                                        columnNumber: 983
                                    }, this),
                                    media.is_primary === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-md shadow-sm w-fit",
                                        children: "Primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                        lineNumber: 86,
                                        columnNumber: 1201
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                lineNumber: 86,
                                columnNumber: 343
                            }, this),
                            media.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-4 pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-xs font-medium line-clamp-2 leading-relaxed",
                                    children: media.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                    lineNumber: 86,
                                    columnNumber: 1492
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                                lineNumber: 86,
                                columnNumber: 1366
                            }, this)
                        ]
                    }, `media-${media.media_id || media.id || index}-${index}`, true, {
                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                        lineNumber: 76,
                        columnNumber: 57
                    }, this)
            }["ProjectMedia[medias.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 75,
            columnNumber: 40
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100 dark:border-slate-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                        className: "h-8 w-8 text-slate-300 dark:text-slate-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                        lineNumber: 87,
                        columnNumber: 367
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 87,
                    columnNumber: 198
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-slate-700 dark:text-slate-300 font-medium mb-1",
                    children: "No media found"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 87,
                    columnNumber: 441
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 dark:text-slate-400 text-sm mb-4",
                    children: "Upload images or videos to showcase this project."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 87,
                    columnNumber: 528
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: {
                        "ProjectMedia[<Button>.onClick]": ()=>setIsAddMediaModalOpen(true)
                    }["ProjectMedia[<Button>.onClick]"],
                    variant: "outline",
                    className: "text-teal-600 border-teal-200 hover:bg-teal-50 rounded-full px-6",
                    children: "Upload Media"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
                    lineNumber: 87,
                    columnNumber: 644
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 87,
            columnNumber: 49
        }, this);
        $[7] = medias;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== isAddMediaModalOpen || $[10] !== projectId) {
        t7 = isAddMediaModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddProjectMediaModal, {
            isOpen: isAddMediaModalOpen,
            onClose: {
                "ProjectMedia[<AddProjectMediaModal>.onClose]": ()=>setIsAddMediaModalOpen(false)
            }["ProjectMedia[<AddProjectMediaModal>.onClose]"],
            projectId: projectId
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 97,
            columnNumber: 33
        }, this);
        $[9] = isAddMediaModalOpen;
        $[10] = projectId;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== editingMedia || $[13] !== isEditMediaModalOpen || $[14] !== projectId) {
        t8 = isEditMediaModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditProjectMediaModal, {
            isOpen: isEditMediaModalOpen,
            onClose: {
                "ProjectMedia[<EditProjectMediaModal>.onClose]": ()=>{
                    setIsEditMediaModalOpen(false);
                    setEditingMedia(null);
                }
            }["ProjectMedia[<EditProjectMediaModal>.onClose]"],
            projectId: projectId,
            media: editingMedia
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 108,
            columnNumber: 34
        }, this);
        $[12] = editingMedia;
        $[13] = isEditMediaModalOpen;
        $[14] = projectId;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== isDeleteMediaModalOpen || $[17] !== mediaToDelete || $[18] !== projectId) {
        t9 = isDeleteMediaModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteProjectMediaModal, {
            isOpen: isDeleteMediaModalOpen,
            onClose: {
                "ProjectMedia[<DeleteProjectMediaModal>.onClose]": ()=>{
                    setIsDeleteMediaModalOpen(false);
                    setMediaToDelete(null);
                }
            }["ProjectMedia[<DeleteProjectMediaModal>.onClose]"],
            projectId: projectId,
            media: mediaToDelete
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 123,
            columnNumber: 36
        }, this);
        $[16] = isDeleteMediaModalOpen;
        $[17] = mediaToDelete;
        $[18] = projectId;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t5 || $[21] !== t6 || $[22] !== t7 || $[23] !== t8 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm",
            children: [
                t5,
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    return t10;
}
_s(ProjectMedia, "pOIWhGjNjuRAdjiRp5JDR/jEZaw=");
_c3 = ProjectMedia;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AddProjectMediaModal");
__turbopack_context__.k.register(_c1, "DeleteProjectMediaModal");
__turbopack_context__.k.register(_c2, "EditProjectMediaModal");
__turbopack_context__.k.register(_c3, "ProjectMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/[id]/components/ProjectHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/[id]/components/ProjectStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/[id]/components/ProjectSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/[id]/components/ProjectMedia.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
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
const BuildingsTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/projects/[id]/components/tabs/BuildingsTab.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.BuildingsTab), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/projects/[id]/components/tabs/BuildingsTab.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = BuildingsTab;
const FeaturesTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.FeaturesTab), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/projects/[id]/components/tabs/FeaturesTab.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = FeaturesTab;
const MilestonesTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/projects/[id]/components/tabs/MilestonesTab.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MilestonesTab), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/projects/[id]/components/tabs/MilestonesTab.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = MilestonesTab;
const PaymentPlansTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/projects/[id]/components/tabs/PaymentPlansTab.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.PaymentPlansTab), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/projects/[id]/components/tabs/PaymentPlansTab.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = PaymentPlansTab;
const UnitsTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/admin/projects/[id]/components/tabs/UnitsTab.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.UnitsTab), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/admin/projects/[id]/components/tabs/UnitsTab.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = UnitsTab;
function ProjectDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(90);
    if ($[0] !== "dac41d407eb0f25a5f0758ecc9113664e0cea8615956582dfac5f3bb18c63db7") {
        for(let $i = 0; $i < 90; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dac41d407eb0f25a5f0758ecc9113664e0cea8615956582dfac5f3bb18c63db7";
    }
    const { params } = t0;
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("buildings");
    let t1;
    if ($[1] !== id) {
        t1 = [
            "projectDetails",
            id
        ];
        $[1] = id;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== id || $[4] !== token) {
        t2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectsDetails"])(Number(id), token);
        $[3] = id;
        $[4] = token;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = !!token;
    let t4;
    if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            enabled: t3,
            select: _temp
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const { data, isError, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
    if (isLoading) {
        let t5;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                lineNumber: 91,
                columnNumber: 12
            }, this);
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        return t5;
    }
    if (isError) {
        const t5 = error instanceof Error ? error.message : "Error loading project details";
        let t6;
        if ($[11] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                type: "error",
                message: t5
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                lineNumber: 102,
                columnNumber: 12
            }, this);
            $[11] = t5;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        return t6;
    }
    if (!data) {
        let t5;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500",
                    children: "Project not found."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 33
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                lineNumber: 113,
                columnNumber: 12
            }, this);
            $[13] = t5;
        } else {
            t5 = $[13];
        }
        return t5;
    }
    let t5;
    if ($[14] !== data.buildings) {
        t5 = data.buildings || [];
        $[14] = data.buildings;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const buildings = t5;
    let t6;
    if ($[16] !== data.features) {
        t6 = data.features || [];
        $[16] = data.features;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const features = t6;
    let t7;
    if ($[18] !== data.milestones) {
        t7 = data.milestones || [];
        $[18] = data.milestones;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const milestones = t7;
    let t8;
    if ($[20] !== data.paymentPlans) {
        t8 = data.paymentPlans || [];
        $[20] = data.paymentPlans;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    const paymentPlans = t8;
    let t9;
    if ($[22] !== data.medias) {
        t9 = data.medias || [];
        $[22] = data.medias;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    const medias = t9;
    let t10;
    if ($[24] !== data.properties) {
        t10 = data.properties || [];
        $[24] = data.properties;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    const properties = t10;
    const t11 = Number(id);
    let t12;
    if ($[26] !== data || $[27] !== t11 || $[28] !== token) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectHeader"], {
            projectId: t11,
            token: token,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[26] = data;
        $[27] = t11;
        $[28] = token;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== data) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectStats"], {
            data: data
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[30] = data;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== buildings.length || $[33] !== data) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectSidebar"], {
                data: data,
                buildingsCount: buildings.length
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                lineNumber: 195,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[32] = buildings.length;
        $[33] = data;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3",
            children: "About Project"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const t16 = data.description || "No description available";
    let t17;
    if ($[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 sm:p-8 shadow-sm",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed",
                    dangerouslySetInnerHTML: {
                        __html: t16
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                    lineNumber: 212,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = [
            {
                id: "buildings",
                label: "Buildings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            },
            {
                id: "features",
                label: "Features",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
            },
            {
                id: "milestones",
                label: "Milestones",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"]
            },
            {
                id: "payment",
                label: "Payment Plans",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
            },
            {
                id: "units",
                label: "Units",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
            }
        ];
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== activeTab) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-slate-200/60 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 px-4 sm:px-6 pt-3 overflow-x-auto hide-scrollbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 min-w-max pb-px",
                children: t18.map({
                    "ProjectDetailsPage[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProjectDetailsPage[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab.id)
                            }["ProjectDetailsPage[(anonymous)() > <button>.onClick]"],
                            className: `flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-t-xl transition-all relative ${activeTab === tab.id ? "bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-sm before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-teal-600" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-700/50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    className: `h-4 w-4 transition-colors ${activeTab === tab.id ? "text-teal-600" : "text-slate-400"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 500
                                }, this),
                                tab.label
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                            lineNumber: 250,
                            columnNumber: 55
                        }, this)
                }["ProjectDetailsPage[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
                lineNumber: 249,
                columnNumber: 164
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[39] = activeTab;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== activeTab || $[42] !== buildings || $[43] !== id || $[44] !== token) {
        t20 = activeTab === "buildings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildingsTab, {
            projectId: Number(id),
            token: token,
            buildings: buildings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 261,
            columnNumber: 40
        }, this);
        $[41] = activeTab;
        $[42] = buildings;
        $[43] = id;
        $[44] = token;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== activeTab || $[47] !== features || $[48] !== id || $[49] !== token) {
        t21 = activeTab === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturesTab, {
            projectId: Number(id),
            token: token,
            features: features
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 272,
            columnNumber: 39
        }, this);
        $[46] = activeTab;
        $[47] = features;
        $[48] = id;
        $[49] = token;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== activeTab || $[52] !== id || $[53] !== milestones || $[54] !== token) {
        t22 = activeTab === "milestones" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MilestonesTab, {
            projectId: Number(id),
            token: token,
            milestones: milestones
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 283,
            columnNumber: 41
        }, this);
        $[51] = activeTab;
        $[52] = id;
        $[53] = milestones;
        $[54] = token;
        $[55] = t22;
    } else {
        t22 = $[55];
    }
    let t23;
    if ($[56] !== activeTab || $[57] !== data.currency || $[58] !== data.developer?.developer_id || $[59] !== id || $[60] !== paymentPlans || $[61] !== token) {
        t23 = activeTab === "payment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentPlansTab, {
            projectId: Number(id),
            developerId: data.developer?.developer_id || 0,
            token: token,
            paymentPlans: paymentPlans,
            currency: data.currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 294,
            columnNumber: 38
        }, this);
        $[56] = activeTab;
        $[57] = data.currency;
        $[58] = data.developer?.developer_id;
        $[59] = id;
        $[60] = paymentPlans;
        $[61] = token;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== activeTab || $[64] !== data.currency || $[65] !== properties) {
        t24 = activeTab === "units" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnitsTab, {
            properties: properties,
            currency: data.currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 307,
            columnNumber: 36
        }, this);
        $[63] = activeTab;
        $[64] = data.currency;
        $[65] = properties;
        $[66] = t24;
    } else {
        t24 = $[66];
    }
    let t25;
    if ($[67] !== t20 || $[68] !== t21 || $[69] !== t22 || $[70] !== t23 || $[71] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 overflow-x-auto",
            children: [
                t20,
                t21,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[67] = t20;
        $[68] = t21;
        $[69] = t22;
        $[70] = t23;
        $[71] = t24;
        $[72] = t25;
    } else {
        t25 = $[72];
    }
    let t26;
    if ($[73] !== t19 || $[74] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 shadow-sm overflow-hidden",
            children: [
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[73] = t19;
        $[74] = t25;
        $[75] = t26;
    } else {
        t26 = $[75];
    }
    const t27 = Number(id);
    let t28;
    if ($[76] !== medias || $[77] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f5b$id$5d2f$components$2f$ProjectMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectMedia"], {
            projectId: t27,
            medias: medias
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[76] = medias;
        $[77] = t27;
        $[78] = t28;
    } else {
        t28 = $[78];
    }
    let t29;
    if ($[79] !== t17 || $[80] !== t26 || $[81] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 flex flex-col gap-8",
            children: [
                t17,
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[79] = t17;
        $[80] = t26;
        $[81] = t28;
        $[82] = t29;
    } else {
        t29 = $[82];
    }
    let t30;
    if ($[83] !== t14 || $[84] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8",
            children: [
                t14,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[83] = t14;
        $[84] = t29;
        $[85] = t30;
    } else {
        t30 = $[85];
    }
    let t31;
    if ($[86] !== t12 || $[87] !== t13 || $[88] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 md:p-8 max-w-[1600px] mx-auto min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans",
            children: [
                t12,
                t13,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/[id]/page.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[86] = t12;
        $[87] = t13;
        $[88] = t30;
        $[89] = t31;
    } else {
        t31 = $[89];
    }
    return t31;
}
_s(ProjectDetailsPage, "3Ge9EneDrKhSk92Wr2pUxw5bejM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c5 = ProjectDetailsPage;
function _temp(response) {
    if (response?.data && response.data.project_id) {
        return response.data;
    }
    return response?.data || response;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BuildingsTab");
__turbopack_context__.k.register(_c1, "FeaturesTab");
__turbopack_context__.k.register(_c2, "MilestonesTab");
__turbopack_context__.k.register(_c3, "PaymentPlansTab");
__turbopack_context__.k.register(_c4, "UnitsTab");
__turbopack_context__.k.register(_c5, "ProjectDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_46daaf6f._.js.map