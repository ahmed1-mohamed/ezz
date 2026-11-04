(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/settings/components/SettingsSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsSidebar",
    ()=>SettingsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SettingsSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "1aabe2ac9a609291b9ecfb6eb63e838eadea141360cddc1655d9c9824ad528e9") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aabe2ac9a609291b9ecfb6eb63e838eadea141360cddc1655d9c9824ad528e9";
    }
    const { activeTab, onSelectTab } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const t1 = isRTL ? "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0639\u0627\u0645\u0629" : "General";
    let t2;
    if ($[1] !== t1) {
        t2 = {
            id: "general",
            label: t1,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"]
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = isRTL ? "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "App Settings";
    let t4;
    if ($[3] !== t3) {
        t4 = {
            id: "app_settings",
            label: t3,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = isRTL ? "\u0645\u062D\u062A\u0648\u0649 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631" : "Quotation Content";
    let t6;
    if ($[5] !== t5) {
        t6 = {
            id: "quotation_content",
            label: t5,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        };
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = isRTL ? "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0639\u0642\u062F" : "Contract Content";
    let t8;
    if ($[7] !== t7) {
        t8 = {
            id: "contract_content",
            label: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"]
        };
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const t9 = isRTL ? "\u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639" : "Payment Methods";
    let t10;
    if ($[9] !== t9) {
        t10 = {
            id: "payment_methods",
            label: t9,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
        };
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const t11 = isRTL ? "\u0627\u0644\u0631\u0628\u0637 \u0648\u0627\u0644\u062A\u0643\u0627\u0645\u0644" : "Integrations";
    let t12;
    if ($[11] !== t11) {
        t12 = {
            id: "integrations",
            label: t11,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"]
        };
        $[11] = t11;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    const t13 = isRTL ? "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0628\u0631\u064A\u062F" : "Notifications & Emails";
    let t14;
    if ($[13] !== t13) {
        t14 = {
            id: "sent_notifications",
            label: t13,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
        };
        $[13] = t13;
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    const t15 = isRTL ? "\u0627\u0644\u0633\u064A\u0627\u0633\u0627\u062A" : "Policies";
    let t16;
    if ($[15] !== t15) {
        t16 = {
            id: "policies",
            label: t15,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
        };
        $[15] = t15;
        $[16] = t16;
    } else {
        t16 = $[16];
    }
    let t17;
    if ($[17] !== t10 || $[18] !== t12 || $[19] !== t14 || $[20] !== t16 || $[21] !== t2 || $[22] !== t4 || $[23] !== t6 || $[24] !== t8) {
        t17 = [
            t2,
            t4,
            t6,
            t8,
            t10,
            t12,
            t14,
            t16
        ];
        $[17] = t10;
        $[18] = t12;
        $[19] = t14;
        $[20] = t16;
        $[21] = t2;
        $[22] = t4;
        $[23] = t6;
        $[24] = t8;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    const tabs = t17;
    const t18 = isRTL ? "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639" : "SITE SETTINGS";
    let t19;
    if ($[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 pb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
                lineNumber: 152,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== activeTab || $[29] !== onSelectTab || $[30] !== tabs) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "space-y-1",
            children: tabs.map({
                "SettingsSidebar[tabs.map()]": (tab)=>{
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SettingsSidebar[tabs.map() > <button>.onClick]": ()=>onSelectTab(tab.id)
                        }["SettingsSidebar[tabs.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all text-start cursor-pointer", isActive ? "bg-teal-50/80 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold shadow-2xs border border-teal-100 dark:border-teal-900/60" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-neutral-800/60"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0 transition-colors", isActive ? "text-teal-700 dark:text-teal-300" : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500")
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
                                lineNumber: 166,
                                columnNumber: 495
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
                                lineNumber: 166,
                                columnNumber: 666
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
                        lineNumber: 164,
                        columnNumber: 18
                    }, this);
                }
            }["SettingsSidebar[tabs.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[28] = activeTab;
        $[29] = onSelectTab;
        $[30] = tabs;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== t19 || $[33] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full md:w-64 shrink-0 space-y-2",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/SettingsSidebar.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t20;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    return t21;
}
_s(SettingsSidebar, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SettingsSidebar;
var _c;
__turbopack_context__.k.register(_c, "SettingsSidebar");
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 152,
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
_c4 = DialogOverlay;
function DialogContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 308
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 333
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t2,
                    ...props,
                    children: [
                        children,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 211,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = t2;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-start", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 253,
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
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 294,
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
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 335,
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
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-gray-500", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 376,
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
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = "Label";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-none ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-slate-200 text-left [&>span]:truncate [&>span]:block [&>span]:w-full", error && "border-red-500 focus:ring-red-500 text-red-900", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50 shrink-0 ml-2"
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-gray-100 dark:focus:bg-slate-700 focus:text-accent-foreground dark:focus:text-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
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
"[project]/src/features/settings/components/AppSettingsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSettingsView",
    ()=>AppSettingsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function AppSettingsView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(159);
    if ($[0] !== "9e13f7acf10f0e638519d7e929f2d82c7ffb8f45a9d9fb6e84b7d79cc0be518b") {
        for(let $i = 0; $i < 159; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e13f7acf10f0e638519d7e929f2d82c7ffb8f45a9d9fb6e84b7d79cc0be518b";
    }
    const { countries, setCountries, currencies, setCurrencies, cities, setCities, areas, setAreas, amenities, setAmenities, propertyTypes, setPropertyTypes } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("countries");
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            code: "",
            currency_code: "AED"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [newCountry, setNewCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            code: "",
            name: "",
            symbol: "",
            exchange_rate: "1.0"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newCurrency, setNewCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            name: "",
            country_id: "1"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [newCity, setNewCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            name: "",
            city_id: "1"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const [newArea, setNewArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            name: "",
            category: "General"
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const [newAmenity, setNewAmenity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            name: "",
            code: ""
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const [newPropertyType, setNewPropertyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    const t7 = isRTL ? "\u0627\u0644\u062F\u0648\u0644" : "Countries";
    let t8;
    if ($[7] !== countries.length || $[8] !== t7) {
        t8 = {
            id: "countries",
            label: t7,
            count: countries.length
        };
        $[7] = countries.length;
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = isRTL ? "\u0627\u0644\u0639\u0645\u0644\u0627\u062A" : "Currencies";
    let t10;
    if ($[10] !== currencies.length || $[11] !== t9) {
        t10 = {
            id: "currencies",
            label: t9,
            count: currencies.length
        };
        $[10] = currencies.length;
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = isRTL ? "\u0627\u0644\u0645\u062F\u0646" : "Cities";
    let t12;
    if ($[13] !== cities.length || $[14] !== t11) {
        t12 = {
            id: "cities",
            label: t11,
            count: cities.length
        };
        $[13] = cities.length;
        $[14] = t11;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    const t13 = isRTL ? "\u0627\u0644\u0645\u0646\u0627\u0637\u0642" : "Areas";
    let t14;
    if ($[16] !== areas.length || $[17] !== t13) {
        t14 = {
            id: "areas",
            label: t13,
            count: areas.length
        };
        $[16] = areas.length;
        $[17] = t13;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    const t15 = isRTL ? "\u0627\u0644\u0645\u0631\u0627\u0641\u0642" : "Amenities";
    let t16;
    if ($[19] !== amenities.length || $[20] !== t15) {
        t16 = {
            id: "amenities",
            label: t15,
            count: amenities.length
        };
        $[19] = amenities.length;
        $[20] = t15;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    const t17 = isRTL ? "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A" : "Property Types";
    let t18;
    if ($[22] !== propertyTypes.length || $[23] !== t17) {
        t18 = {
            id: "property_types",
            label: t17,
            count: propertyTypes.length
        };
        $[22] = propertyTypes.length;
        $[23] = t17;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== t10 || $[26] !== t12 || $[27] !== t14 || $[28] !== t16 || $[29] !== t18 || $[30] !== t8) {
        t19 = [
            t8,
            t10,
            t12,
            t14,
            t16,
            t18
        ];
        $[25] = t10;
        $[26] = t12;
        $[27] = t14;
        $[28] = t16;
        $[29] = t18;
        $[30] = t8;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    const subTabs = t19;
    let t20;
    if ($[32] !== activeSubTab || $[33] !== isRTL) {
        t20 = ({
            "AppSettingsView[getAddButtonLabel]": ()=>{
                switch(activeSubTab){
                    case "countries":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u062F\u0648\u0644\u0629" : "+ Add Country";
                        }
                    case "currencies":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0644\u0629" : "+ Add Currency";
                        }
                    case "cities":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u0645\u062F\u064A\u0646\u0629" : "+ Add City";
                        }
                    case "areas":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u0637\u0642\u0629" : "+ Add Area";
                        }
                    case "amenities":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0641\u0642" : "+ Add Amenity";
                        }
                    case "property_types":
                        {
                            return isRTL ? "+ \u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0639\u0642\u0627\u0631" : "+ Add Property Type";
                        }
                }
            }
        })["AppSettingsView[getAddButtonLabel]"];
        $[32] = activeSubTab;
        $[33] = isRTL;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    const getAddButtonLabel = t20;
    let t21;
    if ($[35] !== activeSubTab || $[36] !== cities || $[37] !== countries || $[38] !== isRTL || $[39] !== newAmenity || $[40] !== newArea || $[41] !== newCity || $[42] !== newCountry || $[43] !== newCurrency || $[44] !== newPropertyType || $[45] !== setAmenities || $[46] !== setAreas || $[47] !== setCities || $[48] !== setCountries || $[49] !== setCurrencies || $[50] !== setPropertyTypes) {
        t21 = ({
            "AppSettingsView[handleCreateItem]": (e)=>{
                e.preventDefault();
                if (activeSubTab === "countries") {
                    if (!newCountry.name || !newCountry.code) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in required fields");
                        return;
                    }
                    const item = {
                        id: Date.now(),
                        name: newCountry.name,
                        code: newCountry.code.toUpperCase(),
                        currency_code: newCountry.currency_code.toUpperCase(),
                        cities_count: 0
                    };
                    setCountries({
                        "AppSettingsView[handleCreateItem > setCountries()]": (prev)=>[
                                ...prev,
                                item
                            ]
                    }["AppSettingsView[handleCreateItem > setCountries()]"]);
                    setNewCountry({
                        name: "",
                        code: "",
                        currency_code: "AED"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062F\u0648\u0644\u0629 \u0628\u0646\u062C\u0627\u062D" : "Country added successfully");
                } else {
                    if (activeSubTab === "currencies") {
                        if (!newCurrency.code || !newCurrency.name) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in required fields");
                            return;
                        }
                        const item_0 = {
                            id: Date.now(),
                            code: newCurrency.code.toUpperCase(),
                            name: newCurrency.name,
                            symbol: newCurrency.symbol || newCurrency.code.toUpperCase(),
                            exchange_rate: parseFloat(newCurrency.exchange_rate) || 1,
                            is_default: false
                        };
                        setCurrencies({
                            "AppSettingsView[handleCreateItem > setCurrencies()]": (prev_0)=>[
                                    ...prev_0,
                                    item_0
                                ]
                        }["AppSettingsView[handleCreateItem > setCurrencies()]"]);
                        setNewCurrency({
                            code: "",
                            name: "",
                            symbol: "",
                            exchange_rate: "1.0"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u0644\u0629 \u0628\u0646\u062C\u0627\u062D" : "Currency added successfully");
                    } else {
                        if (activeSubTab === "cities") {
                            if (!newCity.name) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "Please enter city name");
                                return;
                            }
                            const selectedCountry = countries.find({
                                "AppSettingsView[handleCreateItem > countries.find()]": (c)=>c.id === parseInt(newCity.country_id)
                            }["AppSettingsView[handleCreateItem > countries.find()]"]) || countries[0];
                            const item_1 = {
                                id: Date.now(),
                                name: newCity.name,
                                country_id: selectedCountry?.id || 1,
                                country_name: selectedCountry?.name || "Egypt",
                                areas_count: 0
                            };
                            setCities({
                                "AppSettingsView[handleCreateItem > setCities()]": (prev_1)=>[
                                        ...prev_1,
                                        item_1
                                    ]
                            }["AppSettingsView[handleCreateItem > setCities()]"]);
                            setNewCity({
                                name: "",
                                country_id: "1"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0628\u0646\u062C\u0627\u062D" : "City added successfully");
                        } else {
                            if (activeSubTab === "areas") {
                                if (!newArea.name) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" : "Please enter area name");
                                    return;
                                }
                                const selectedCity = cities.find({
                                    "AppSettingsView[handleCreateItem > cities.find()]": (c_0)=>c_0.id === parseInt(newArea.city_id)
                                }["AppSettingsView[handleCreateItem > cities.find()]"]) || cities[0];
                                const item_2 = {
                                    id: Date.now(),
                                    name: newArea.name,
                                    city_id: selectedCity?.id || 1,
                                    city_name: selectedCity?.name || "Cairo",
                                    country_name: selectedCity?.country_name || "Egypt"
                                };
                                setAreas({
                                    "AppSettingsView[handleCreateItem > setAreas()]": (prev_2)=>[
                                            ...prev_2,
                                            item_2
                                        ]
                                }["AppSettingsView[handleCreateItem > setAreas()]"]);
                                setNewArea({
                                    name: "",
                                    city_id: "1"
                                });
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0628\u0646\u062C\u0627\u062D" : "Area added successfully");
                            } else {
                                if (activeSubTab === "amenities") {
                                    if (!newAmenity.name) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u0641\u0642" : "Please enter amenity name");
                                        return;
                                    }
                                    const item_3 = {
                                        id: Date.now(),
                                        name: newAmenity.name,
                                        category: newAmenity.category
                                    };
                                    setAmenities({
                                        "AppSettingsView[handleCreateItem > setAmenities()]": (prev_3)=>[
                                                ...prev_3,
                                                item_3
                                            ]
                                    }["AppSettingsView[handleCreateItem > setAmenities()]"]);
                                    setNewAmenity({
                                        name: "",
                                        category: "General"
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u0641\u0642 \u0628\u0646\u062C\u0627\u062D" : "Amenity added successfully");
                                } else {
                                    if (activeSubTab === "property_types") {
                                        if (!newPropertyType.name) {
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isRTL ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0646\u0648\u0639 \u0627\u0644\u0639\u0642\u0627\u0631" : "Please enter property type");
                                            return;
                                        }
                                        const item_4 = {
                                            id: Date.now(),
                                            name: newPropertyType.name,
                                            code: newPropertyType.code || newPropertyType.name.toLowerCase().replace(/\s+/g, "_"),
                                            properties_count: 0
                                        };
                                        setPropertyTypes({
                                            "AppSettingsView[handleCreateItem > setPropertyTypes()]": (prev_4)=>[
                                                    ...prev_4,
                                                    item_4
                                                ]
                                        }["AppSettingsView[handleCreateItem > setPropertyTypes()]"]);
                                        setNewPropertyType({
                                            name: "",
                                            code: ""
                                        });
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0627\u0644\u0639\u0642\u0627\u0631 \u0628\u0646\u062C\u0627\u062D" : "Property type added successfully");
                                    }
                                }
                            }
                        }
                    }
                }
                setIsAddModalOpen(false);
            }
        })["AppSettingsView[handleCreateItem]"];
        $[35] = activeSubTab;
        $[36] = cities;
        $[37] = countries;
        $[38] = isRTL;
        $[39] = newAmenity;
        $[40] = newArea;
        $[41] = newCity;
        $[42] = newCountry;
        $[43] = newCurrency;
        $[44] = newPropertyType;
        $[45] = setAmenities;
        $[46] = setAreas;
        $[47] = setCities;
        $[48] = setCountries;
        $[49] = setCurrencies;
        $[50] = setPropertyTypes;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    const handleCreateItem = t21;
    const t22 = isRTL ? "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "App Settings";
    let t23;
    if ($[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    const t24 = isRTL ? "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u060C \u0627\u0644\u0639\u0645\u0644\u0627\u062A\u060C \u0627\u0644\u0645\u062F\u0646\u060C \u0627\u0644\u0645\u0646\u0627\u0637\u0642\u060C \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645" : "Manage countries, currencies, cities, areas, amenities and property types";
    let t25;
    if ($[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t23 || $[57] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[56] = t23;
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    let t27;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "AppSettingsView[<Button>.onClick]": ()=>setIsAddModalOpen(true)
        })["AppSettingsView[<Button>.onClick]"];
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    const t28 = getAddButtonLabel();
    let t29;
    if ($[60] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t27,
            className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs cursor-pointer self-start sm:self-auto gap-1.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t28
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                lineNumber: 470,
                columnNumber: 186
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[60] = t28;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] !== t26 || $[63] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[62] = t26;
        $[63] = t29;
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    let t31;
    if ($[65] !== activeSubTab || $[66] !== subTabs) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 border-b border-gray-200 dark:border-neutral-800 overflow-x-auto pb-px",
            children: subTabs.map({
                "AppSettingsView[subTabs.map()]": (tab)=>{
                    const isActive = activeSubTab === tab.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "AppSettingsView[subTabs.map() > <button>.onClick]": ()=>setActiveSubTab(tab.id)
                        }["AppSettingsView[subTabs.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer", isActive ? "text-teal-700 dark:text-teal-400 font-semibold" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"),
                        children: [
                            tab.label,
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 492,
                                columnNumber: 348
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 490,
                        columnNumber: 18
                    }, this);
                }
            }["AppSettingsView[subTabs.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[65] = activeSubTab;
        $[66] = subTabs;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== activeSubTab || $[69] !== countries || $[70] !== isRTL || $[71] !== setCountries) {
        t32 = activeSubTab === "countries" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
            children: countries.map({
                "AppSettingsView[countries.map()]": (country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm tracking-wider text-gray-900 dark:text-gray-100 shrink-0 w-8",
                                        children: country.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 504,
                                        columnNumber: 344
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-gray-900 dark:text-white truncate",
                                                children: country.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 504,
                                                columnNumber: 487
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                                children: [
                                                    country.cities_count,
                                                    " ",
                                                    isRTL ? "\u0645\u062F\u064A\u0646\u0629" : "cities",
                                                    " · ",
                                                    country.currency_code
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 504,
                                                columnNumber: 579
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 504,
                                        columnNumber: 462
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 504,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "AppSettingsView[countries.map() > <button>.onClick]": ()=>{
                                        setCountries({
                                            "AppSettingsView[countries.map() > <button>.onClick > setCountries()]": (prev_5)=>prev_5.filter({
                                                    "AppSettingsView[countries.map() > <button>.onClick > setCountries() > prev_5.filter()]": (c_1)=>c_1.id !== country.id
                                                }["AppSettingsView[countries.map() > <button>.onClick > setCountries() > prev_5.filter()]"])
                                        }["AppSettingsView[countries.map() > <button>.onClick > setCountries()]"]);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? `تم حذف ${country.name}` : `Deleted ${country.name}`);
                                    }
                                }["AppSettingsView[countries.map() > <button>.onClick]"],
                                className: "p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0",
                                title: isRTL ? "\u062D\u0630\u0641" : "Delete",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 513,
                                    columnNumber: 263
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 504,
                                columnNumber: 760
                            }, this)
                        ]
                    }, country.id, true, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 504,
                        columnNumber: 56
                    }, this)
            }["AppSettingsView[countries.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 503,
            columnNumber: 43
        }, this);
        $[68] = activeSubTab;
        $[69] = countries;
        $[70] = isRTL;
        $[71] = setCountries;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== activeSubTab || $[74] !== currencies || $[75] !== isRTL || $[76] !== setCurrencies) {
        t33 = activeSubTab === "currencies" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "w-full min-w-[650px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-24",
                                    children: isRTL ? "\u0627\u0644\u0631\u0645\u0632" : "Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 408
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: `font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`,
                                    children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u0644\u0629" : "Currency Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 588
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-36",
                                    children: isRTL ? "\u0627\u0644\u0639\u0644\u0627\u0645\u0629" : "Symbol"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 837
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-36",
                                    children: isRTL ? "\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641" : "Exchange Rate"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 1031
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-28 text-center",
                                    children: isRTL ? "\u0627\u0644\u062D\u0627\u0644\u0629" : "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 1239
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0625\u062C\u0631\u0627\u0621" : "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 525,
                                    columnNumber: 1439
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 525,
                            columnNumber: 251
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 525,
                        columnNumber: 238
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: currencies.map({
                            "AppSettingsView[currencies.map()]": (currency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 font-bold text-xs text-gray-900 dark:text-gray-100 font-mono",
                                            children: currency.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 221
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white",
                                            children: currency.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 342
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-mono text-gray-600 dark:text-gray-300",
                                            children: currency.symbol || currency.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 454
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-mono text-gray-600 dark:text-gray-300",
                                            children: currency.exchange_rate
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 584
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-center",
                                            children: currency.is_default ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
                                                children: isRTL ? "\u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629" : "Default"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 526,
                                                columnNumber: 772
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400",
                                                children: isRTL ? "\u0646\u0634\u0637\u0629" : "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 526,
                                                columnNumber: 1081
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 704
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-center",
                                            children: !currency.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AppSettingsView[currencies.map() > <button>.onClick]": ()=>{
                                                        setCurrencies({
                                                            "AppSettingsView[currencies.map() > <button>.onClick > setCurrencies()]": (prev_6)=>prev_6.filter({
                                                                    "AppSettingsView[currencies.map() > <button>.onClick > setCurrencies() > prev_6.filter()]": (c_2)=>c_2.id !== currency.id
                                                                }["AppSettingsView[currencies.map() > <button>.onClick > setCurrencies() > prev_6.filter()]"])
                                                        }["AppSettingsView[currencies.map() > <button>.onClick > setCurrencies()]"]);
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0644\u0629" : "Currency deleted");
                                                    }
                                                }["AppSettingsView[currencies.map() > <button>.onClick]"],
                                                className: "p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer",
                                                title: isRTL ? "\u062D\u0630\u0641" : "Delete",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 263
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 526,
                                                columnNumber: 1370
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 526,
                                            columnNumber: 1300
                                        }, this)
                                    ]
                                }, currency.id, true, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 526,
                                    columnNumber: 62
                                }, this)
                        }["AppSettingsView[currencies.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 525,
                        columnNumber: 1659
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                lineNumber: 525,
                columnNumber: 198
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 525,
            columnNumber: 44
        }, this);
        $[73] = activeSubTab;
        $[74] = currencies;
        $[75] = isRTL;
        $[76] = setCurrencies;
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] !== activeSubTab || $[79] !== cities || $[80] !== isRTL || $[81] !== setCities) {
        t34 = activeSubTab === "cities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "w-full min-w-[650px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: `font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`,
                                    children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "City Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 547,
                                    columnNumber: 404
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0627\u0644\u062F\u0648\u0644\u0629" : "Country"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 547,
                                    columnNumber: 655
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider w-40",
                                    children: isRTL ? "\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u0627\u0637\u0642" : "Areas Count"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 547,
                                    columnNumber: 839
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0625\u062C\u0631\u0627\u0621" : "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 547,
                                    columnNumber: 1057
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 547,
                            columnNumber: 247
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 547,
                        columnNumber: 234
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: cities.map({
                            "AppSettingsView[cities.map()]": (city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white",
                                            children: city.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 548,
                                            columnNumber: 209
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300",
                                                children: city.country_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 548,
                                                columnNumber: 358
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 548,
                                            columnNumber: 317
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs text-gray-600 dark:text-gray-400",
                                            children: [
                                                city.areas_count,
                                                " ",
                                                isRTL ? "\u0645\u0646\u0637\u0642\u0629" : "areas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 548,
                                            columnNumber: 548
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AppSettingsView[cities.map() > <button>.onClick]": ()=>{
                                                        setCities({
                                                            "AppSettingsView[cities.map() > <button>.onClick > setCities()]": (prev_7)=>prev_7.filter({
                                                                    "AppSettingsView[cities.map() > <button>.onClick > setCities() > prev_7.filter()]": (c_3)=>c_3.id !== city.id
                                                                }["AppSettingsView[cities.map() > <button>.onClick > setCities() > prev_7.filter()]"])
                                                        }["AppSettingsView[cities.map() > <button>.onClick > setCities()]"]);
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "City deleted");
                                                    }
                                                }["AppSettingsView[cities.map() > <button>.onClick]"],
                                                className: "p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer",
                                                title: isRTL ? "\u062D\u0630\u0641" : "Delete",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 259
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 548,
                                                columnNumber: 750
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 548,
                                            columnNumber: 705
                                        }, this)
                                    ]
                                }, city.id, true, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 548,
                                    columnNumber: 54
                                }, this)
                        }["AppSettingsView[cities.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 547,
                        columnNumber: 1277
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                lineNumber: 547,
                columnNumber: 194
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 547,
            columnNumber: 40
        }, this);
        $[78] = activeSubTab;
        $[79] = cities;
        $[80] = isRTL;
        $[81] = setCities;
        $[82] = t34;
    } else {
        t34 = $[82];
    }
    let t35;
    if ($[83] !== activeSubTab || $[84] !== areas || $[85] !== isRTL || $[86] !== setAreas) {
        t35 = activeSubTab === "areas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "w-full min-w-[650px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: `font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider ${isRTL ? "text-right" : "text-left"}`,
                                    children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" : "Area Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 569,
                                    columnNumber: 403
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "City"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 569,
                                    columnNumber: 654
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0627\u0644\u062F\u0648\u0644\u0629" : "Country"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 569,
                                    columnNumber: 841
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-4 text-[11px] uppercase tracking-wider",
                                    children: isRTL ? "\u0625\u062C\u0631\u0627\u0621" : "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 569,
                                    columnNumber: 1025
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 569,
                            columnNumber: 246
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 569,
                        columnNumber: 233
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: areas.map({
                            "AppSettingsView[areas.map()]": (area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-semibold text-gray-900 dark:text-white",
                                            children: area.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 570,
                                            columnNumber: 208
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-300",
                                            children: area.city_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 570,
                                            columnNumber: 316
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300",
                                                children: area.country_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 570,
                                                columnNumber: 471
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 570,
                                            columnNumber: 430
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "px-4 py-3 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "AppSettingsView[areas.map() > <button>.onClick]": ()=>{
                                                        setAreas({
                                                            "AppSettingsView[areas.map() > <button>.onClick > setAreas()]": (prev_8)=>prev_8.filter({
                                                                    "AppSettingsView[areas.map() > <button>.onClick > setAreas() > prev_8.filter()]": (a)=>a.id !== area.id
                                                                }["AppSettingsView[areas.map() > <button>.onClick > setAreas() > prev_8.filter()]"])
                                                        }["AppSettingsView[areas.map() > <button>.onClick > setAreas()]"]);
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" : "Area deleted");
                                                    }
                                                }["AppSettingsView[areas.map() > <button>.onClick]"],
                                                className: "p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md transition-colors cursor-pointer",
                                                title: isRTL ? "\u062D\u0630\u0641" : "Delete",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 258
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 570,
                                                columnNumber: 706
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                            lineNumber: 570,
                                            columnNumber: 661
                                        }, this)
                                    ]
                                }, area.id, true, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 570,
                                    columnNumber: 53
                                }, this)
                        }["AppSettingsView[areas.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 569,
                        columnNumber: 1245
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                lineNumber: 569,
                columnNumber: 193
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 569,
            columnNumber: 39
        }, this);
        $[83] = activeSubTab;
        $[84] = areas;
        $[85] = isRTL;
        $[86] = setAreas;
        $[87] = t35;
    } else {
        t35 = $[87];
    }
    let t36;
    if ($[88] !== activeSubTab || $[89] !== amenities || $[90] !== isRTL || $[91] !== setAmenities) {
        t36 = activeSubTab === "amenities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: amenities.map({
                "AppSettingsView[amenities.map()]": (amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 592,
                                        columnNumber: 344
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate",
                                                children: amenity.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 592,
                                                columnNumber: 443
                                            }, this),
                                            amenity.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-gray-400 dark:text-gray-500 truncate",
                                                children: amenity.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                                lineNumber: 592,
                                                columnNumber: 571
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 592,
                                        columnNumber: 418
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 592,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "AppSettingsView[amenities.map() > <button>.onClick]": ()=>{
                                        setAmenities({
                                            "AppSettingsView[amenities.map() > <button>.onClick > setAmenities()]": (prev_9)=>prev_9.filter({
                                                    "AppSettingsView[amenities.map() > <button>.onClick > setAmenities() > prev_9.filter()]": (a_0)=>a_0.id !== amenity.id
                                                }["AppSettingsView[amenities.map() > <button>.onClick > setAmenities() > prev_9.filter()]"])
                                        }["AppSettingsView[amenities.map() > <button>.onClick > setAmenities()]"]);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0631\u0641\u0642" : "Amenity deleted");
                                    }
                                }["AppSettingsView[amenities.map() > <button>.onClick]"],
                                className: "p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 601,
                                    columnNumber: 217
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 592,
                                columnNumber: 675
                            }, this)
                        ]
                    }, amenity.id, true, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 592,
                        columnNumber: 56
                    }, this)
            }["AppSettingsView[amenities.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 591,
            columnNumber: 43
        }, this);
        $[88] = activeSubTab;
        $[89] = amenities;
        $[90] = isRTL;
        $[91] = setAmenities;
        $[92] = t36;
    } else {
        t36 = $[92];
    }
    let t37;
    if ($[93] !== activeSubTab || $[94] !== isRTL || $[95] !== propertyTypes || $[96] !== setPropertyTypes) {
        t37 = activeSubTab === "property_types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: propertyTypes.map({
                "AppSettingsView[propertyTypes.map()]": (type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex items-center justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-gray-900 dark:text-white truncate",
                                        children: type.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 614,
                                        columnNumber: 316
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                        children: [
                                            type.properties_count || 0,
                                            " ",
                                            isRTL ? "\u0639\u0642\u0627\u0631" : "properties"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 614,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 614,
                                columnNumber: 291
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "AppSettingsView[propertyTypes.map() > <button>.onClick]": ()=>{
                                        setPropertyTypes({
                                            "AppSettingsView[propertyTypes.map() > <button>.onClick > setPropertyTypes()]": (prev_10)=>prev_10.filter({
                                                    "AppSettingsView[propertyTypes.map() > <button>.onClick > setPropertyTypes() > prev_10.filter()]": (p)=>p.id !== type.id
                                                }["AppSettingsView[propertyTypes.map() > <button>.onClick > setPropertyTypes() > prev_10.filter()]"])
                                        }["AppSettingsView[propertyTypes.map() > <button>.onClick > setPropertyTypes()]"]);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0630\u0641 \u0646\u0648\u0639 \u0627\u0644\u0639\u0642\u0627\u0631" : "Property type deleted");
                                    }
                                }["AppSettingsView[propertyTypes.map() > <button>.onClick]"],
                                className: "p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 623,
                                    columnNumber: 219
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                lineNumber: 614,
                                columnNumber: 558
                            }, this)
                        ]
                    }, type.id, true, {
                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                        lineNumber: 614,
                        columnNumber: 57
                    }, this)
            }["AppSettingsView[propertyTypes.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 613,
            columnNumber: 48
        }, this);
        $[93] = activeSubTab;
        $[94] = isRTL;
        $[95] = propertyTypes;
        $[96] = setPropertyTypes;
        $[97] = t37;
    } else {
        t37 = $[97];
    }
    const t38 = getAddButtonLabel();
    let t39;
    if ($[98] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "text-base font-bold text-gray-900 dark:text-white",
                children: t38
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                lineNumber: 636,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[98] = t38;
        $[99] = t39;
    } else {
        t39 = $[99];
    }
    let t40;
    if ($[100] !== activeSubTab || $[101] !== isRTL || $[102] !== newCountry) {
        t40 = activeSubTab === "countries" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629" : "Country Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 644,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newCountry.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_0)=>setNewCountry({
                                        ...newCountry,
                                        name: e_0.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Saudi Arabia",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 644,
                            columnNumber: 207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 644,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs font-semibold",
                                    children: isRTL ? "\u0631\u0645\u0632 \u0627\u0644\u062F\u0648\u0644\u0629 (ISO)" : "Country Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 649,
                                    columnNumber: 198
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: newCountry.code,
                                    onChange: {
                                        "AppSettingsView[<Input>.onChange]": (e_1)=>setNewCountry({
                                                ...newCountry,
                                                code: e_1.target.value.toUpperCase()
                                            })
                                    }["AppSettingsView[<Input>.onChange]"],
                                    placeholder: "e.g. SA",
                                    maxLength: 3,
                                    className: "h-9 text-xs",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 649,
                                    columnNumber: 337
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 649,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs font-semibold",
                                    children: isRTL ? "\u0627\u0644\u0639\u0645\u0644\u0629" : "Currency"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 654,
                                    columnNumber: 164
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: newCountry.currency_code,
                                    onChange: {
                                        "AppSettingsView[<Input>.onChange]": (e_2)=>setNewCountry({
                                                ...newCountry,
                                                currency_code: e_2.target.value.toUpperCase()
                                            })
                                    }["AppSettingsView[<Input>.onChange]"],
                                    placeholder: "e.g. SAR",
                                    className: "h-9 text-xs",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 654,
                                    columnNumber: 274
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 654,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 649,
                    columnNumber: 129
                }, this)
            ]
        }, void 0, true);
        $[100] = activeSubTab;
        $[101] = isRTL;
        $[102] = newCountry;
        $[103] = t40;
    } else {
        t40 = $[103];
    }
    let t41;
    if ($[104] !== activeSubTab || $[105] !== isRTL || $[106] !== newCurrency) {
        t41 = activeSubTab === "currencies" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u0644\u0629" : "Currency Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 669,
                            columnNumber: 75
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newCurrency.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_3)=>setNewCurrency({
                                        ...newCurrency,
                                        name: e_3.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Saudi Riyal",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 669,
                            columnNumber: 209
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 669,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs font-semibold",
                                    children: isRTL ? "\u0627\u0644\u0631\u0645\u0632" : "Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 674,
                                    columnNumber: 197
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: newCurrency.code,
                                    onChange: {
                                        "AppSettingsView[<Input>.onChange]": (e_4)=>setNewCurrency({
                                                ...newCurrency,
                                                code: e_4.target.value.toUpperCase()
                                            })
                                    }["AppSettingsView[<Input>.onChange]"],
                                    placeholder: "SAR",
                                    className: "h-9 text-xs",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 674,
                                    columnNumber: 297
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 674,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs font-semibold",
                                    children: isRTL ? "\u0627\u0644\u0639\u0644\u0627\u0645\u0629" : "Symbol"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 679,
                                    columnNumber: 146
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: newCurrency.symbol,
                                    onChange: {
                                        "AppSettingsView[<Input>.onChange]": (e_5)=>setNewCurrency({
                                                ...newCurrency,
                                                symbol: e_5.target.value
                                            })
                                    }["AppSettingsView[<Input>.onChange]"],
                                    placeholder: "SAR",
                                    className: "h-9 text-xs"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 679,
                                    columnNumber: 260
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 679,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    className: "text-xs font-semibold",
                                    children: isRTL ? "\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641" : "Rate"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 684,
                                    columnNumber: 130
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    step: "0.01",
                                    value: newCurrency.exchange_rate,
                                    onChange: {
                                        "AppSettingsView[<Input>.onChange]": (e_6)=>setNewCurrency({
                                                ...newCurrency,
                                                exchange_rate: e_6.target.value
                                            })
                                    }["AppSettingsView[<Input>.onChange]"],
                                    placeholder: "1.0",
                                    className: "h-9 text-xs",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 684,
                                    columnNumber: 249
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 684,
                            columnNumber: 101
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 674,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true);
        $[104] = activeSubTab;
        $[105] = isRTL;
        $[106] = newCurrency;
        $[107] = t41;
    } else {
        t41 = $[107];
    }
    let t42;
    if ($[108] !== activeSubTab || $[109] !== countries || $[110] !== isRTL || $[111] !== newCity) {
        t42 = activeSubTab === "cities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "City Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 699,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newCity.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_7)=>setNewCity({
                                        ...newCity,
                                        name: e_7.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Riyadh",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 699,
                            columnNumber: 207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 699,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0644\u062F\u0648\u0644\u0629" : "Country"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 704,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: newCity.country_id,
                            onValueChange: {
                                "AppSettingsView[<Select>.onValueChange]": (val)=>setNewCity({
                                        ...newCity,
                                        country_id: val
                                    })
                            }["AppSettingsView[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "h-9 text-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Select Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 709,
                                        columnNumber: 94
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 709,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: countries.map(_AppSettingsViewCountriesMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 709,
                                    columnNumber: 154
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 704,
                            columnNumber: 261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 704,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true);
        $[108] = activeSubTab;
        $[109] = countries;
        $[110] = isRTL;
        $[111] = newCity;
        $[112] = t42;
    } else {
        t42 = $[112];
    }
    let t43;
    if ($[113] !== activeSubTab || $[114] !== cities || $[115] !== isRTL || $[116] !== newArea) {
        t43 = activeSubTab === "areas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" : "Area Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 720,
                            columnNumber: 70
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newArea.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_8)=>setNewArea({
                                        ...newArea,
                                        name: e_8.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Al Olaya",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 720,
                            columnNumber: 206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 720,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0644\u0645\u062F\u064A\u0646\u0629" : "City"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 725,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: newArea.city_id,
                            onValueChange: {
                                "AppSettingsView[<Select>.onValueChange]": (val_0)=>setNewArea({
                                        ...newArea,
                                        city_id: val_0
                                    })
                            }["AppSettingsView[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "h-9 text-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Select City"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                        lineNumber: 730,
                                        columnNumber: 94
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 730,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: cities.map(_AppSettingsViewCitiesMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                                    lineNumber: 730,
                                    columnNumber: 151
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 725,
                            columnNumber: 266
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 725,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true);
        $[113] = activeSubTab;
        $[114] = cities;
        $[115] = isRTL;
        $[116] = newArea;
        $[117] = t43;
    } else {
        t43 = $[117];
    }
    let t44;
    if ($[118] !== activeSubTab || $[119] !== isRTL || $[120] !== newAmenity) {
        t44 = activeSubTab === "amenities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u0641\u0642" : "Amenity Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 741,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newAmenity.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_9)=>setNewAmenity({
                                        ...newAmenity,
                                        name: e_9.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Private Garden",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 741,
                            columnNumber: 207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 741,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0644\u062A\u0635\u0646\u064A\u0641" : "Category"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 746,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newAmenity.category,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_10)=>setNewAmenity({
                                        ...newAmenity,
                                        category: e_10.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Outdoor / Facilities",
                            className: "h-9 text-xs"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 746,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 746,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true);
        $[118] = activeSubTab;
        $[119] = isRTL;
        $[120] = newAmenity;
        $[121] = t44;
    } else {
        t44 = $[121];
    }
    let t45;
    if ($[122] !== activeSubTab || $[123] !== isRTL || $[124] !== newPropertyType) {
        t45 = activeSubTab === "property_types" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0633\u0645 \u0646\u0648\u0639 \u0627\u0644\u0639\u0642\u0627\u0631" : "Type Name"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 761,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newPropertyType.name,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_11)=>setNewPropertyType({
                                        ...newPropertyType,
                                        name: e_11.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. Studio Apartment",
                            className: "h-9 text-xs",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 761,
                            columnNumber: 228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 761,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-semibold",
                            children: isRTL ? "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u0645\u062C\u064A" : "Code Identifier"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 766,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: newPropertyType.code,
                            onChange: {
                                "AppSettingsView[<Input>.onChange]": (e_12)=>setNewPropertyType({
                                        ...newPropertyType,
                                        code: e_12.target.value
                                    })
                            }["AppSettingsView[<Input>.onChange]"],
                            placeholder: "e.g. studio_apartment",
                            className: "h-9 text-xs"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                            lineNumber: 766,
                            columnNumber: 316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
                    lineNumber: 766,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true);
        $[122] = activeSubTab;
        $[123] = isRTL;
        $[124] = newPropertyType;
        $[125] = t45;
    } else {
        t45 = $[125];
    }
    let t46;
    if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "AppSettingsView[<Button>.onClick]": ()=>setIsAddModalOpen(false)
        })["AppSettingsView[<Button>.onClick]"];
        $[126] = t46;
    } else {
        t46 = $[126];
    }
    const t47 = isRTL ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t48;
    if ($[127] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t46,
            className: "text-xs",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 791,
            columnNumber: 11
        }, this);
        $[127] = t47;
        $[128] = t48;
    } else {
        t48 = $[128];
    }
    const t49 = isRTL ? "\u0625\u0636\u0627\u0641\u0629 \u0648\u062D\u0641\u0638" : "Add & Save";
    let t50;
    if ($[129] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 800,
            columnNumber: 11
        }, this);
        $[129] = t49;
        $[130] = t50;
    } else {
        t50 = $[130];
    }
    let t51;
    if ($[131] !== t48 || $[132] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "pt-3 gap-2 sm:gap-0",
            children: [
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[131] = t48;
        $[132] = t50;
        $[133] = t51;
    } else {
        t51 = $[133];
    }
    let t52;
    if ($[134] !== handleCreateItem || $[135] !== t40 || $[136] !== t41 || $[137] !== t42 || $[138] !== t43 || $[139] !== t44 || $[140] !== t45 || $[141] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleCreateItem,
            className: "space-y-4 pt-2",
            children: [
                t40,
                t41,
                t42,
                t43,
                t44,
                t45,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 817,
            columnNumber: 11
        }, this);
        $[134] = handleCreateItem;
        $[135] = t40;
        $[136] = t41;
        $[137] = t42;
        $[138] = t43;
        $[139] = t44;
        $[140] = t45;
        $[141] = t51;
        $[142] = t52;
    } else {
        t52 = $[142];
    }
    let t53;
    if ($[143] !== t39 || $[144] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
            children: [
                t39,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 832,
            columnNumber: 11
        }, this);
        $[143] = t39;
        $[144] = t52;
        $[145] = t53;
    } else {
        t53 = $[145];
    }
    let t54;
    if ($[146] !== isAddModalOpen || $[147] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isAddModalOpen,
            onOpenChange: setIsAddModalOpen,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 841,
            columnNumber: 11
        }, this);
        $[146] = isAddModalOpen;
        $[147] = t53;
        $[148] = t54;
    } else {
        t54 = $[148];
    }
    let t55;
    if ($[149] !== t30 || $[150] !== t31 || $[151] !== t32 || $[152] !== t33 || $[153] !== t34 || $[154] !== t35 || $[155] !== t36 || $[156] !== t37 || $[157] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-6 min-w-0",
            children: [
                t30,
                t31,
                t32,
                t33,
                t34,
                t35,
                t36,
                t37,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
            lineNumber: 850,
            columnNumber: 11
        }, this);
        $[149] = t30;
        $[150] = t31;
        $[151] = t32;
        $[152] = t33;
        $[153] = t34;
        $[154] = t35;
        $[155] = t36;
        $[156] = t37;
        $[157] = t54;
        $[158] = t55;
    } else {
        t55 = $[158];
    }
    return t55;
}
_s(AppSettingsView, "sgXvtRHP4sy6KB9jMU5mca564t8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AppSettingsView;
function _AppSettingsViewCitiesMap(c_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: c_5.id.toString(),
        children: [
            c_5.name,
            " (",
            c_5.country_name,
            ")"
        ]
    }, c_5.id, true, {
        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
        lineNumber: 867,
        columnNumber: 10
    }, this);
}
function _AppSettingsViewCountriesMap(c_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: c_4.id.toString(),
        children: [
            c_4.name,
            " (",
            c_4.code,
            ")"
        ]
    }, c_4.id, true, {
        fileName: "[project]/src/features/settings/components/AppSettingsView.tsx",
        lineNumber: 870,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AppSettingsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/GeneralSettingsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneralSettingsView",
    ()=>GeneralSettingsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
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
function GeneralSettingsView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(102);
    if ($[0] !== "b815925d6f95b9708136b3d06c95872f7c6ce0bda4e8643217034cbcbbc6a3b3") {
        for(let $i = 0; $i < 102; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b815925d6f95b9708136b3d06c95872f7c6ce0bda4e8643217034cbcbbc6a3b3";
    }
    const { settings, onSave } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings);
    const t1 = isRTL ? "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0639\u0627\u0645\u0629" : "General Settings";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = isRTL ? "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" : "Manage fundamental platform information & branding";
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t2 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== form || $[9] !== isRTL || $[10] !== onSave) {
        t6 = ({
            "GeneralSettingsView[<Button>.onClick]": ()=>{
                onSave(form);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0628\u0646\u062C\u0627\u062D" : "General settings saved successfully");
            }
        })["GeneralSettingsView[<Button>.onClick]"];
        $[8] = form;
        $[9] = isRTL;
        $[10] = onSave;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = isRTL ? "\u062D\u0641\u0638" : "Save";
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t6 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t6,
            className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = t6;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t5;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const t12 = isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 (EN)" : "Site Name (EN)";
    let t13;
    if ($[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== form) {
        t14 = ({
            "GeneralSettingsView[<Input>.onChange]": (e)=>setForm({
                    ...form,
                    site_name: e.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[23] = form;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== form.site_name || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: form.site_name,
            onChange: t14,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[25] = form.site_name;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t13 || $[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    const t17 = isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 (AR)" : "Site Name (AR)";
    let t18;
    if ($[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    const t19 = form.site_name_ar || "";
    let t20;
    if ($[33] !== form) {
        t20 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_0)=>setForm({
                    ...form,
                    site_name_ar: e_0.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[33] = form;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t19 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: t19,
            onChange: t20,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t18 || $[39] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t21;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    const t23 = isRTL ? "\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0646\u0635\u0629 / \u0627\u0644\u0648\u0635\u0641" : "Site Tagline";
    let t24;
    if ($[41] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[41] = t23;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== form) {
        t25 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_1)=>setForm({
                    ...form,
                    site_tagline: e_1.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[43] = form;
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] !== form.site_tagline || $[46] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: form.site_tagline,
            onChange: t25,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[45] = form.site_tagline;
        $[46] = t25;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== t24 || $[49] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 sm:col-span-2",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[48] = t24;
        $[49] = t26;
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    const t28 = isRTL ? "\u0628\u0631\u064A\u062F \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u062F\u0639\u0645" : "Contact Email";
    let t29;
    if ($[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== form) {
        t30 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_2)=>setForm({
                    ...form,
                    contact_email: e_2.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[53] = form;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== form.contact_email || $[56] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "email",
            value: form.contact_email,
            onChange: t30,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[55] = form.contact_email;
        $[56] = t30;
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    let t32;
    if ($[58] !== t29 || $[59] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[58] = t29;
        $[59] = t31;
        $[60] = t32;
    } else {
        t32 = $[60];
    }
    const t33 = isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0631\u0633\u0645\u064A" : "Contact Phone";
    let t34;
    if ($[61] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[61] = t33;
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== form) {
        t35 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_3)=>setForm({
                    ...form,
                    contact_phone: e_3.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[63] = form;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== form.contact_phone || $[66] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: form.contact_phone,
            onChange: t35,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[65] = form.contact_phone;
        $[66] = t35;
        $[67] = t36;
    } else {
        t36 = $[67];
    }
    let t37;
    if ($[68] !== t34 || $[69] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t34,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[68] = t34;
        $[69] = t36;
        $[70] = t37;
    } else {
        t37 = $[70];
    }
    const t38 = isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 \u0644\u0644\u062F\u0639\u0645" : "WhatsApp Support Number";
    let t39;
    if ($[71] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[71] = t38;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    let t40;
    if ($[73] !== form) {
        t40 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_4)=>setForm({
                    ...form,
                    whatsapp_number: e_4.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[73] = form;
        $[74] = t40;
    } else {
        t40 = $[74];
    }
    let t41;
    if ($[75] !== form.whatsapp_number || $[76] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: form.whatsapp_number,
            onChange: t40,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[75] = form.whatsapp_number;
        $[76] = t40;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] !== t39 || $[79] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[78] = t39;
        $[79] = t41;
        $[80] = t42;
    } else {
        t42 = $[80];
    }
    const t43 = isRTL ? "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629" : "Timezone";
    let t44;
    if ($[81] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[81] = t43;
        $[82] = t44;
    } else {
        t44 = $[82];
    }
    let t45;
    if ($[83] !== form) {
        t45 = ({
            "GeneralSettingsView[<Input>.onChange]": (e_5)=>setForm({
                    ...form,
                    timezone: e_5.target.value
                })
        })["GeneralSettingsView[<Input>.onChange]"];
        $[83] = form;
        $[84] = t45;
    } else {
        t45 = $[84];
    }
    let t46;
    if ($[85] !== form.timezone || $[86] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: form.timezone,
            onChange: t45,
            className: "h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[85] = form.timezone;
        $[86] = t45;
        $[87] = t46;
    } else {
        t46 = $[87];
    }
    let t47;
    if ($[88] !== t44 || $[89] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                t44,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[88] = t44;
        $[89] = t46;
        $[90] = t47;
    } else {
        t47 = $[90];
    }
    let t48;
    if ($[91] !== t16 || $[92] !== t22 || $[93] !== t27 || $[94] !== t32 || $[95] !== t37 || $[96] !== t42 || $[97] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t16,
                t22,
                t27,
                t32,
                t37,
                t42,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[91] = t16;
        $[92] = t22;
        $[93] = t27;
        $[94] = t32;
        $[95] = t37;
        $[96] = t42;
        $[97] = t47;
        $[98] = t48;
    } else {
        t48 = $[98];
    }
    let t49;
    if ($[99] !== t11 || $[100] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-6 min-w-0",
            children: [
                t11,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/GeneralSettingsView.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[99] = t11;
        $[100] = t48;
        $[101] = t49;
    } else {
        t49 = $[101];
    }
    return t49;
}
_s(GeneralSettingsView, "UWsy2johf9okjxQ7RgsYkFHjK24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = GeneralSettingsView;
var _c;
__turbopack_context__.k.register(_c, "GeneralSettingsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", error && "border-red-500 focus-visible:ring-red-500", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/data/mock-settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_AMENITIES",
    ()=>INITIAL_AMENITIES,
    "INITIAL_AREAS",
    ()=>INITIAL_AREAS,
    "INITIAL_CITIES",
    ()=>INITIAL_CITIES,
    "INITIAL_CONTRACT_SETTINGS",
    ()=>INITIAL_CONTRACT_SETTINGS,
    "INITIAL_COUNTRIES",
    ()=>INITIAL_COUNTRIES,
    "INITIAL_CURRENCIES",
    ()=>INITIAL_CURRENCIES,
    "INITIAL_GENERAL_SETTINGS",
    ()=>INITIAL_GENERAL_SETTINGS,
    "INITIAL_INTEGRATIONS",
    ()=>INITIAL_INTEGRATIONS,
    "INITIAL_NOTIFICATION_EVENTS",
    ()=>INITIAL_NOTIFICATION_EVENTS,
    "INITIAL_PAYMENT_METHODS",
    ()=>INITIAL_PAYMENT_METHODS,
    "INITIAL_POLICIES",
    ()=>INITIAL_POLICIES,
    "INITIAL_PROPERTY_TYPES",
    ()=>INITIAL_PROPERTY_TYPES,
    "INITIAL_QUOTATION_SETTINGS",
    ()=>INITIAL_QUOTATION_SETTINGS,
    "SUGGESTED_CONTRACT_ARABIC",
    ()=>SUGGESTED_CONTRACT_ARABIC,
    "SUGGESTED_CONTRACT_ENGLISH",
    ()=>SUGGESTED_CONTRACT_ENGLISH,
    "SUGGESTED_QUOTATION_ARABIC",
    ()=>SUGGESTED_QUOTATION_ARABIC,
    "SUGGESTED_QUOTATION_ENGLISH",
    ()=>SUGGESTED_QUOTATION_ENGLISH
]);
const INITIAL_COUNTRIES = [
    {
        id: 1,
        code: "EG",
        name: "Egypt",
        name_ar: "مصر",
        cities_count: 37,
        currency_code: "EGP",
        currency_symbol: "EGP"
    },
    {
        id: 2,
        code: "OM",
        name: "Oman",
        name_ar: "عمان",
        cities_count: 4,
        currency_code: "OMR",
        currency_symbol: "OMR"
    },
    {
        id: 3,
        code: "AE",
        name: "UAE",
        name_ar: "الإمارات",
        cities_count: 10,
        currency_code: "AED",
        currency_symbol: "AED"
    }
];
const INITIAL_CURRENCIES = [
    {
        id: 1,
        code: "AED",
        name: "UAE Dirham",
        symbol: "AED",
        exchange_rate: 1.0,
        is_default: true
    },
    {
        id: 2,
        code: "EGP",
        name: "Egyptian Pound",
        symbol: "EGP",
        exchange_rate: 13.5,
        is_default: false
    },
    {
        id: 3,
        code: "OMR",
        name: "Omani Rial",
        symbol: "OMR",
        exchange_rate: 0.1,
        is_default: false
    },
    {
        id: 4,
        code: "SAR",
        name: "Saudi Riyal",
        symbol: "SAR",
        exchange_rate: 1.02,
        is_default: false
    },
    {
        id: 5,
        code: "USD",
        name: "US Dollar",
        symbol: "$",
        exchange_rate: 0.27,
        is_default: false
    }
];
const INITIAL_CITIES = [
    {
        id: 1,
        name: "Cairo",
        name_ar: "القاهرة",
        country_id: 1,
        country_name: "Egypt",
        areas_count: 24
    },
    {
        id: 2,
        name: "Giza",
        name_ar: "الجيزة",
        country_id: 1,
        country_name: "Egypt",
        areas_count: 18
    },
    {
        id: 3,
        name: "Alexandria",
        name_ar: "الإسكندرية",
        country_id: 1,
        country_name: "Egypt",
        areas_count: 15
    },
    {
        id: 4,
        name: "Muscat",
        name_ar: "مسقط",
        country_id: 2,
        country_name: "Oman",
        areas_count: 8
    },
    {
        id: 5,
        name: "Salalah",
        name_ar: "صلالة",
        country_id: 2,
        country_name: "Oman",
        areas_count: 4
    },
    {
        id: 6,
        name: "Dubai",
        name_ar: "دبي",
        country_id: 3,
        country_name: "UAE",
        areas_count: 32
    },
    {
        id: 7,
        name: "Abu Dhabi",
        name_ar: "أبوظبي",
        country_id: 3,
        country_name: "UAE",
        areas_count: 20
    },
    {
        id: 8,
        name: "Sharjah",
        name_ar: "الشارقة",
        country_id: 3,
        country_name: "UAE",
        areas_count: 14
    }
];
const INITIAL_AREAS = [
    {
        id: 1,
        name: "New Cairo",
        name_ar: "القاهرة الجديدة",
        city_id: 1,
        city_name: "Cairo",
        country_name: "Egypt"
    },
    {
        id: 2,
        name: "Sheikh Zayed",
        name_ar: "الشيخ زايد",
        city_id: 2,
        city_name: "Giza",
        country_name: "Egypt"
    },
    {
        id: 3,
        name: "Downtown Dubai",
        name_ar: "وسط مدينة دبي",
        city_id: 6,
        city_name: "Dubai",
        country_name: "UAE"
    },
    {
        id: 4,
        name: "Dubai Marina",
        name_ar: "دبي مارينا",
        city_id: 6,
        city_name: "Dubai",
        country_name: "UAE"
    },
    {
        id: 5,
        name: "Business Bay",
        name_ar: "الخليج التجاري",
        city_id: 6,
        city_name: "Dubai",
        country_name: "UAE"
    },
    {
        id: 6,
        name: "Al Qurum",
        name_ar: "القرم",
        city_id: 4,
        city_name: "Muscat",
        country_name: "Oman"
    }
];
const INITIAL_AMENITIES = [
    {
        id: 1,
        name: "Swimming Pool",
        name_ar: "حمام سباحة",
        category: "Recreation"
    },
    {
        id: 2,
        name: "Gym & Fitness",
        name_ar: "صالة رياضية",
        category: "Wellness"
    },
    {
        id: 3,
        name: "Covered Parking",
        name_ar: "موقف سيارات مغطى",
        category: "Facilities"
    },
    {
        id: 4,
        name: "24/7 Security",
        name_ar: "أمن وحراسة 24/7",
        category: "Security"
    },
    {
        id: 5,
        name: "Balcony / Terrace",
        name_ar: "شرفة / تراس",
        category: "Interior"
    },
    {
        id: 6,
        name: "Central A/C",
        name_ar: "تكييف مركزي",
        category: "Interior"
    },
    {
        id: 7,
        name: "Children's Play Area",
        name_ar: "منطقة ألعاب أطفال",
        category: "Recreation"
    },
    {
        id: 8,
        name: "Concierge Service",
        name_ar: "خدمة كونسيرج",
        category: "Services"
    }
];
const INITIAL_PROPERTY_TYPES = [
    {
        id: 1,
        name: "Apartment",
        name_ar: "شقة",
        code: "apartment",
        properties_count: 1420
    },
    {
        id: 2,
        name: "Villa",
        name_ar: "فيلا",
        code: "villa",
        properties_count: 650
    },
    {
        id: 3,
        name: "Townhouse",
        name_ar: "تاون هاوس",
        code: "townhouse",
        properties_count: 320
    },
    {
        id: 4,
        name: "Penthouse",
        name_ar: "بنتهاوس",
        code: "penthouse",
        properties_count: 180
    },
    {
        id: 5,
        name: "Duplex",
        name_ar: "دوبلكس",
        code: "duplex",
        properties_count: 240
    },
    {
        id: 6,
        name: "Chalet",
        name_ar: "شاليه",
        code: "chalet",
        properties_count: 410
    },
    {
        id: 7,
        name: "Office",
        name_ar: "مكتب",
        code: "office",
        properties_count: 190
    },
    {
        id: 8,
        name: "Commercial Store",
        name_ar: "محل تجاري",
        code: "commercial",
        properties_count: 95
    }
];
const INITIAL_GENERAL_SETTINGS = {
    site_name: "Property Adviser",
    site_name_ar: "مستشار العقارات",
    site_tagline: "Your Premier Real Estate Gateway in the Middle East",
    contact_email: "support@propertyadviser.site",
    contact_phone: "+971 4 123 4567",
    whatsapp_number: "+971 50 123 4567",
    default_country: "AE",
    default_currency: "AED",
    default_language: "en",
    timezone: "Asia/Dubai"
};
const SUGGESTED_QUOTATION_ARABIC = `شروط وأحكام عرض السعر

1) سريان العرض: هذا العرض ساري لمدة (14) يومًا من تاريخ إصداره، وتظل الأسعار الواردة به قابلة للمراجعة بعد انتهاء هذه المدة وفقًا لأسعار الشركة المعتمدة وتوافر الوحدة.
2) طبيعة العرض: يُعد هذا المستند عرض سعر استرشاديًا ولا يُنشئ التزامًا تعاقديًا بالبيع أو الحجز إلا بعد توقيع استمارة الحجز أو عقد البيع وسداد الدفعة المقررة.
3) الأسعار والعملة: جميع القيم موضحة بالعملة المذكورة بالعرض وتشمل ثمن الوحدة فقط ما لم يُنص على غير ذلك، ولا تشمل رسوم الصيانة أو التسجيل أو الضرائب أو أي مصاريف حكومية.
4) الحجز والجدية: يتم تثبيت سعر الوحدة عند سداد دفعة الحجز (الجدية)، وتُخصم هذه الدفعة من إجمالي الثمن، وتخضع لسياسة الاسترداد المعتمدة لدى الشركة.
5) خطة السداد: تُحسب الأقساط على أساس صافي الثمن بعد الخصم والمقدَّم، ويلتزم العميل بسداد الأقساط في مواعيدها المتفق عليها.
6) التسليم: يكون موعد التسليم تقديريًا وفق ما هو مبيّن بالعرض، وقد يتأثر بالظروف الخارجة عن إرادة الشركة على أن يتم إخطار العميل بأي تعديل.
7) الخصومات: أي خصم وارد بالعرض مشروط بالسداد وفق الخطة المحددة، ويسقط الحق فيه عند الإخلال بمواعيد السداد.
8) بيانات الوحدة: المساحات والمخططات والصور استرشادية وقد تخضع لفروق تنفيذية بسيطة معتادة في أعمال البناء.
9) إخلاء المسؤولية: لا تُعد أي وعود أو تعهدات شفهية جزءًا من هذا العرض، والمعتمد فقط ما ورد كتابةً بهذا المستند وبعقد البيع.`;
const SUGGESTED_QUOTATION_ENGLISH = `Quotation Terms & Conditions

1) Validity: This quotation is valid for fourteen (14) days from its issue date. After this period, prices remain subject to review per the company's approved price list and unit availability.
2) Nature of Quotation: This document is an indicative price quotation and does not constitute a binding sales or reservation contract until a formal reservation form or purchase agreement is signed and the designated deposit is paid.
3) Prices & Currency: All amounts are stated in the indicated currency and cover the unit purchase price only unless specified otherwise. Prices do not include maintenance fees, registration fees, taxes, or any applicable municipal charges.
4) Reservation & Deposit: The unit price is locked upon payment of the reservation deposit, which is credited toward the total purchase price and governed by the company's approved refund policy.
5) Payment Schedule: Installments are calculated based on the net price after applicable discounts and down payment. The client undertakes to pay all installments on agreed due dates.
6) Handover: Estimated completion and handover dates are indicative and may be subject to force majeure or construction adjustments, with prior written notice to the client.
7) Discounts: Any promotional discount is contingent on adherence to the agreed payment schedule and may be revoked in case of default.
8) Unit Specifications: Areas, floor plans, and renderings are illustrative and subject to minor standard construction tolerances.
9) Disclaimer: Verbal promises or representations do not form part of this quotation. Only written terms in this document and the final sales agreement are legally binding.`;
const INITIAL_QUOTATION_SETTINGS = {
    arabic_text: SUGGESTED_QUOTATION_ARABIC,
    english_text: SUGGESTED_QUOTATION_ENGLISH,
    header_title: "OFFICIAL PROPERTY QUOTATION",
    default_validity_days: 14
};
const SUGGESTED_CONTRACT_ARABIC = `الشروط والأحكام العامة لعقد البيع

أولاً: التعريفات
يُقصد بـ«البائع» الشركة/المطوّر، وبـ«المشتري» الطرف المتعاقد على شراء الوحدة، وبـ«الوحدة» العقار محل التعاقد الموضّح بيانه بصدر العقد.

ثانيًا: محل التعاقد
يقر المشتري بمعاينته للوحدة معاينة نافية للجهالة وقبوله لها بحالتها ومواصفاتها ومساحتها المبيّنة، ويُعد المخطط والمواصفات جزءًا لا يتجزأ من هذا العقد.

ثالثًا: الثمن وطريقة السداد
1. الثمن الإجمالي وخطة السداد (المقدَّم والأقساط) موضّحة بصدر العقد.
2. يلتزم المشتري بسداد كل قسط في تاريخ استحقاقه بذات وسيلة السداد المتفق عليها.
3. يُعد سداد الأقساط في مواعيدها شرطًا جوهريًا، ويستحق البائع غرامة تأخير عن كل قسط متأخر وفق النسبة المتفق عليها.

رابعًا: التزامات البائع
تنفيذ الوحدة وتسليمها بالمواصفات المتفق عليها في الموعد المحدد، مع ضمان عيوب البناء الجوهرية للمدة المقررة قانونًا.

خامسًا: التسليم والاستلام
يتم تحرير محضر استلام رسمي عند جاهزية الوحدة، ويحق للمشتري إبداء أي ملاحظات تشطيبية لمعالجتها خلال المدة المحددة.

سادسًا: فسخ العقد
في حال تخلف المشتري عن سداد قسطين متتاليين يحق للبائع فسخ العقد بعد إنذاره كتابيًا وفق الإجراءات القانونية المعتمدة.

سابعًا: الاختصاص القضائي
تختص محاكم الدولة الواقع بها العقار بالفصل في أي نزاع ينشأ عن تنفيذ أو تفسير بنود هذا العقد.`;
const SUGGESTED_CONTRACT_ENGLISH = `General Terms & Conditions of the Sale Contract

1. Definitions
"Seller" means the company/developer; "Buyer" means the party contracting to purchase the unit; "Unit" means the property described at the head of this contract.

2. Subject of Contract
The Buyer acknowledges having inspected the unit (or its blueprints and specifications) and accepts it as described. Architectural plans and technical specs form an integral part of this contract.

3. Price and Payment Terms
1. The total price and payment plan (down payment and installments) are detailed at the head of this contract.
2. The Buyer undertakes to pay each installment on its due date using the agreed payment method.
3. Timely installment settlement is an essential term. The Seller reserves the right to apply agreed late payment fees for overdue installments.

4. Seller Obligations
To construct and deliver the unit according to approved specifications within the designated timeline, and to provide statutory structural warranties.

5. Handover
An official handover certificate shall be signed upon unit completion. The Buyer may submit snagging notes for remediation within the specified period.

6. Contract Termination
In the event of default on two consecutive installments, the Seller reserves the right to terminate the agreement following formal written notice per applicable laws.

7. Governing Law and Jurisdiction
This contract shall be governed by and construed in accordance with the laws of the jurisdiction in which the property is located.`;
const INITIAL_CONTRACT_SETTINGS = {
    arabic_text: SUGGESTED_CONTRACT_ARABIC,
    english_text: SUGGESTED_CONTRACT_ENGLISH,
    contract_title: "PROPERTY PURCHASE & SALE AGREEMENT",
    company_legal_name: "Property Adviser Real Estate Portal LLC"
};
const INITIAL_PAYMENT_METHODS = [
    {
        id: "stripe",
        name: "Stripe",
        code: "stripe",
        description: "Credit / Debit cards, Apple Pay, Google Pay",
        enabled: true,
        type: "gateway",
        fields: {
            publishable_key: "pk_test_51Mz...EXAMPLE",
            secret_key: "sk_test_51Mz...EXAMPLE",
            webhook_secret: "whsec_...EXAMPLE",
            currency: "AED"
        }
    },
    {
        id: "paymob",
        name: "Paymob",
        code: "paymob",
        description: "Cards, Mobile Wallets, Meeza, Fawry",
        enabled: false,
        type: "gateway",
        fields: {
            api_key: "",
            integration_id: "",
            hmac_secret: "",
            iframe_id: ""
        }
    },
    {
        id: "paypal",
        name: "PayPal",
        code: "paypal",
        description: "PayPal Wallet and international cards",
        enabled: false,
        type: "gateway",
        fields: {
            client_id: "",
            client_secret: "",
            sandbox: "true"
        }
    },
    {
        id: "bank_transfer",
        name: "Bank Transfer",
        code: "bank_transfer",
        description: "Direct bank wire deposit with transfer slip upload",
        enabled: false,
        type: "manual",
        fields: {
            bank_name: "Emirates NBD",
            account_name: "Property Adviser Real Estate LLC",
            iban: "AE070260000123456789012",
            swift: "EBILAEADXXX",
            instructions: "Please include your Quotation / Contract number in the transfer description."
        }
    },
    {
        id: "instapay",
        name: "InstaPay",
        code: "instapay",
        description: "Instant bank-to-bank transfer via Egyptian Central Bank network",
        enabled: false,
        type: "manual",
        fields: {
            instapay_address: "propertyadviser@instapay",
            mobile_number: "+20 100 123 4567",
            account_name: "Property Adviser Egypt"
        }
    },
    {
        id: "pay_at_office",
        name: "Pay at Office",
        code: "pay_at_office",
        description: "Cash / Card payment directly at our authorized branch office",
        enabled: false,
        type: "manual",
        fields: {
            office_address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
            working_hours: "Sunday – Thursday, 9:00 AM – 6:00 PM",
            contact_phone: "+971 4 123 4567"
        }
    }
];
const INITIAL_INTEGRATIONS = [
    {
        id: "twilio_sms",
        name: "Twilio — SMS",
        description: "Cloud communications platform for sending automated SMS and OTP alerts",
        enabled: true,
        status: "connected",
        fields: {
            account_sid: "AC2ced3cfef91e97804ec42f6b1f4004d7",
            auth_token: "••••••••",
            sender_number: "+18458510609"
        }
    },
    {
        id: "whatsapp_cloud",
        name: "WhatsApp (Cloud API)",
        description: "Official Meta Cloud API for automated client chats and lead assignment alerts",
        enabled: false,
        status: "disconnected",
        fields: {
            phone_number_id: "",
            waba_id: "",
            access_token: "",
            webhook_verify_token: ""
        }
    },
    {
        id: "sendgrid_email",
        name: "SendGrid — Email",
        description: "Reliable transactional email delivery service for quotations and contracts",
        enabled: true,
        status: "connected",
        fields: {
            api_key: "SG.e83912984kjasd98123EXAMPLE",
            from_email: "noreply@propertyadviser.site",
            from_name: "Property Adviser"
        }
    },
    {
        id: "facebook_lead_ads",
        name: "Facebook Lead Ads",
        description: "Sync incoming leads from Meta Ads campaigns directly into the CRM",
        enabled: false,
        status: "disconnected",
        fields: {
            app_id: "",
            app_secret: "",
            page_access_token: ""
        }
    },
    {
        id: "agora_video",
        name: "Agora — Video calls",
        description: "Real-time HD audio and video calling engine for virtual client meetings",
        enabled: false,
        status: "disconnected",
        fields: {
            app_id: "",
            app_certificate: ""
        }
    },
    {
        id: "google_analytics",
        name: "Google Analytics",
        description: "Web traffic analytics and user engagement tracking",
        enabled: false,
        status: "disconnected",
        fields: {
            measurement_id: "G-XXXXXXXXXX",
            api_secret: ""
        }
    },
    {
        id: "microsoft_clarity",
        name: "Microsoft Clarity",
        description: "Behavior analytics tool with heatmaps and session replays",
        enabled: false,
        status: "disconnected",
        fields: {
            project_id: ""
        }
    }
];
const INITIAL_NOTIFICATION_EVENTS = [
    {
        id: "new_signup",
        title: "New signup",
        title_ar: "تسجيل مستخدم جديد",
        description: "When a new user registers",
        description_ar: "عند تسجيل مستخدم جديد في المنصة",
        template: "{name} just created a new account.",
        template_ar: "قام {name} بإنشاء حساب جديد للتو.",
        enabled: true,
        channel: "bell"
    },
    {
        id: "new_message",
        title: "New message",
        title_ar: "رسالة جديدة",
        description: "When a client sends a message",
        description_ar: "عندما يرسل عميل رسالة جديدة",
        template: "{name} sent a message: {message}",
        template_ar: "أرسل {name} رسالة: {message}",
        enabled: true,
        channel: "bell"
    },
    {
        id: "developer_application",
        title: "Developer application",
        title_ar: "طلب انضمام مطور",
        description: "When a developer application is submitted",
        description_ar: "عند تقديم طلب انضمام جديد كمطور عقاري",
        template: "{name} applied to join as a developer.",
        template_ar: "قدم {name} طلب انضمام كمطور عقاري.",
        enabled: true,
        channel: "bell"
    },
    {
        id: "developer_approved",
        title: "Developer approved",
        title_ar: "اعتماد المطور",
        description: "Sent to a developer when approved",
        description_ar: "يُرسل للمطور عند قبول واعتماد حسابه",
        template: "Your developer account has been approved. You can now manage projects and add properties.",
        template_ar: "تمت الموافقة على حساب المطور الخاص بك. يمكنك الآن إدارة المشاريع وإضافة الوحدات.",
        enabled: true,
        channel: "bell"
    },
    {
        id: "credit_order",
        title: "Credit order",
        title_ar: "طلب باقة رصيد",
        description: "When a developer orders a credit package",
        description_ar: "عندما يطلب مطور شراء باقة رصيد إعلانات",
        template: '{name} ordered the "{package}" package ({credits} credits).',
        template_ar: 'طلب {name} باقة "{package}" ({credits} نقطة).',
        enabled: true,
        channel: "bell"
    },
    {
        id: "credits_granted",
        title: "Credits granted",
        title_ar: "إيداع الرصيد",
        description: "Sent to a developer when granted credits",
        description_ar: "يُرسل للمطور عند إضافة رصيد لحسابه",
        template: "{credits} credits were added to your balance by the team.",
        template_ar: "تمت إضافة {credits} نقطة إلى رصيد حسابك من قبل فريق العمل.",
        enabled: true,
        channel: "bell"
    },
    {
        id: "credit_paid",
        title: "Credit paid",
        title_ar: "تأكيد سداد الرصيد",
        description: "Sent to a developer when a payment is confirmed",
        description_ar: "يُرسل للمطور عند تأكيد نجاح عملية السداد",
        template: "Payment of {amount} for {credits} credits has been confirmed.",
        template_ar: "تم تأكيد سداد مبلغ {amount} لشراء {credits} نقطة رصيد بنجاح.",
        enabled: true,
        channel: "bell"
    },
    {
        id: "email_welcome",
        title: "Welcome Email",
        title_ar: "بريد الترحيب بالمستخدم",
        description: "Sent to user upon successful registration",
        description_ar: "يُرسل للمستخدم فور اكتمال التسجيل",
        email_subject: "Welcome to Property Adviser!",
        template: "Hello {name}, welcome to Property Adviser portal. Your account is now active and ready.",
        template_ar: "مرحبًا {name}، أهلاً بك في منصة مستشار العقارات. تم تفعيل حسابك بنجاح.",
        enabled: true,
        channel: "email"
    },
    {
        id: "email_quotation",
        title: "Quotation Delivery Email",
        title_ar: "بريد تسليم عرض السعر",
        description: "Sent to client with official PDF quotation attached",
        description_ar: "يُرسل للعميل مع ملف عرض السعر PDF المعتمد",
        email_subject: "Official Property Quotation #{quotation_id}",
        template: "Dear {name}, please find attached the quotation for {property_name}. This quotation is valid for 14 days.",
        template_ar: "عزيزي {name}، مرفق لكم عرض السعر الرسمي لعقار {property_name}. العرض ساري لمدة 14 يومًا.",
        enabled: true,
        channel: "email"
    },
    {
        id: "email_developer_approved",
        title: "Developer Approval Email",
        title_ar: "بريد اعتماد المطور",
        description: "Sent to developer when their application is approved",
        description_ar: "يُرسل للمطور عند قبول طلبه الرسمي",
        email_subject: "Your Developer Account is Approved!",
        template: "Dear {name}, your developer portal access has been granted. You can now publish projects and units.",
        template_ar: "عزيزي {name}، تمت الموافقة على حسابكم كمطور رسمي. يمكنكم الآن نشر المشاريع والوحدات.",
        enabled: true,
        channel: "email"
    }
];
const INITIAL_POLICIES = {
    privacy_policy_en: "Property Adviser respects your privacy. We collect personal contact details solely to deliver requested real estate services, investment guidance, and property updates. We do not sell or lease your personal information to third parties without your explicit consent.",
    privacy_policy_ar: "تحترم منصة مستشار العقارات خصوصيتك. نقوم بجمع البيانات الشخصية بغرض تقديم الخدمات العقارية المطلوبة، والتوجيه الاستثماري، وتحديثات المشروعات. نلتزم بعدم بيع أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة دون موافقتك الصريحة.",
    terms_of_service_en: "By accessing and using the Property Adviser portal, users agree to provide accurate information and refrain from unauthorized distribution of property data. All listings and market data are subject to verified developer confirmation.",
    terms_of_service_ar: "باستخدامك لمنصة مستشار العقارات، فإنك توافق على تقديم معلومات صحيحة ودقيقة، والامتناع عن أي استخدام أو إعادة نشر غير مصرح به لبيانات العقارات. تخضع كافة العروض وتفاصيل الأسعار لتأكيد المطورين المعتمدين.",
    refund_policy: "Reservation deposit refundability is subject to the developer's designated cooling-off cancellation policy stated in the reservation form.",
    cookie_policy: "We use essential cookies to maintain secure sessions and performance cookies to optimize your browsing experience."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/QuotationContentView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuotationContentView",
    ()=>QuotationContentView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/data/mock-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
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
function QuotationContentView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "34470ae4c53a7776330eef1268b2fe171810e2f7c2df911370b69beee5d5db14") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "34470ae4c53a7776330eef1268b2fe171810e2f7c2df911370b69beee5d5db14";
    }
    const { settings, onSave } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings);
    let t1;
    if ($[1] !== isRTL) {
        t1 = ({
            "QuotationContentView[handleRestoreArabic]": ()=>{
                setForm(_QuotationContentViewHandleRestoreArabicSetForm);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isRTL ? "\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restored suggested Arabic text");
            }
        })["QuotationContentView[handleRestoreArabic]"];
        $[1] = isRTL;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleRestoreArabic = t1;
    let t2;
    if ($[3] !== isRTL) {
        t2 = ({
            "QuotationContentView[handleRestoreEnglish]": ()=>{
                setForm(_QuotationContentViewHandleRestoreEnglishSetForm);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isRTL ? "\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0646\u0635 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restored suggested English text");
            }
        })["QuotationContentView[handleRestoreEnglish]"];
        $[3] = isRTL;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleRestoreEnglish = t2;
    const t3 = isRTL ? "\u0645\u062D\u062A\u0648\u0649 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631" : "Quotation Content";
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = isRTL ? "\u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u064A \u062A\u064F\u0637\u0628\u0639 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0644\u0643\u0644 \u0639\u0631\u0636 \u0633\u0639\u0631" : "The terms that print on a following page of every quotation";
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t4 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== form || $[13] !== isRTL || $[14] !== onSave) {
        t8 = ({
            "QuotationContentView[<Button>.onClick]": ()=>{
                onSave(form);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0645\u062D\u062A\u0648\u0649 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u0628\u0646\u062C\u0627\u062D" : "Quotation content saved successfully");
            }
        })["QuotationContentView[<Button>.onClick]"];
        $[12] = form;
        $[13] = isRTL;
        $[14] = onSave;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = isRTL ? "\u062D\u0641\u0638" : "Save";
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t8,
            className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer self-start sm:self-auto",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t8;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t7;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = isRTL ? "\u0647\u0630\u0627 \u0645\u062D\u062A\u0648\u0649 \u0645\u0642\u062A\u0631\u062D \u0648\u062C\u0627\u0647\u0632 \u0648\u0645\u062E\u0635\u0635 \u0644\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0642\u0627\u0631\u064A \u2014 \u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644\u0647 \u0644\u064A\u0646\u0627\u0633\u0628 \u0634\u0631\u0643\u062A\u0643. \u064A\u0638\u0647\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0629." : "This is ready, real-estate-specific suggested content \u2014 edit it to fit your company. It appears automatically on printed documents.";
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-teal-200/70 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/30 p-3.5 flex items-center gap-3",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-700 dark:text-gray-300",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
                    lineNumber: 147,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-gray-500 dark:text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    const t18 = isRTL ? "\u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u064A" : "Arabic text";
    let t19;
    if ($[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
                    lineNumber: 163,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    const t21 = isRTL ? "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restore suggested";
    let t22;
    if ($[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] !== handleRestoreArabic || $[35] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleRestoreArabic,
            className: "text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[34] = handleRestoreArabic;
        $[35] = t22;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== t19 || $[38] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t19,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t23;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== form) {
        t25 = ({
            "QuotationContentView[<Textarea>.onChange]": (e)=>setForm({
                    ...form,
                    arabic_text: e.target.value
                })
        })["QuotationContentView[<Textarea>.onChange]"];
        $[40] = form;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== form.arabic_text || $[43] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            dir: "rtl",
            rows: 11,
            value: form.arabic_text,
            onChange: t25,
            className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[42] = form.arabic_text;
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t24 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[45] = t24;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-gray-500 dark:text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    const t29 = isRTL ? "\u0627\u0644\u0646\u0635 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A" : "English text";
    let t30;
    if ($[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: t29
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
                    lineNumber: 244,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    const t32 = isRTL ? "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restore suggested";
    let t33;
    if ($[52] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[52] = t32;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== handleRestoreEnglish || $[55] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleRestoreEnglish,
            className: "text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer",
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[54] = handleRestoreEnglish;
        $[55] = t33;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] !== t30 || $[58] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[57] = t30;
        $[58] = t34;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== form) {
        t36 = ({
            "QuotationContentView[<Textarea>.onChange]": (e_0)=>setForm({
                    ...form,
                    english_text: e_0.target.value
                })
        })["QuotationContentView[<Textarea>.onChange]"];
        $[60] = form;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] !== form.english_text || $[63] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            dir: "ltr",
            rows: 11,
            value: form.english_text,
            onChange: t36,
            className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[62] = form.english_text;
        $[63] = t36;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== t35 || $[66] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[65] = t35;
        $[66] = t37;
        $[67] = t38;
    } else {
        t38 = $[67];
    }
    let t39;
    if ($[68] !== t13 || $[69] !== t16 || $[70] !== t27 || $[71] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-5 min-w-0",
            children: [
                t13,
                t16,
                t27,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/QuotationContentView.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[68] = t13;
        $[69] = t16;
        $[70] = t27;
        $[71] = t38;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    return t39;
}
_s(QuotationContentView, "UWsy2johf9okjxQ7RgsYkFHjK24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = QuotationContentView;
function _QuotationContentViewHandleRestoreEnglishSetForm(prev_0) {
    return {
        ...prev_0,
        english_text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_QUOTATION_ENGLISH"]
    };
}
function _QuotationContentViewHandleRestoreArabicSetForm(prev) {
    return {
        ...prev,
        arabic_text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_QUOTATION_ARABIC"]
    };
}
var _c;
__turbopack_context__.k.register(_c, "QuotationContentView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/ContractContentView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractContentView",
    ()=>ContractContentView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/data/mock-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
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
function ContractContentView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "5dc60256c4a47a213de26927daae0eccde830e16809246ce5e6d25bdb2a376a9") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5dc60256c4a47a213de26927daae0eccde830e16809246ce5e6d25bdb2a376a9";
    }
    const { settings, onSave } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings);
    let t1;
    if ($[1] !== isRTL) {
        t1 = ({
            "ContractContentView[handleRestoreArabic]": ()=>{
                setForm(_ContractContentViewHandleRestoreArabicSetForm);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isRTL ? "\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0646\u0635 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restored suggested Arabic contract text");
            }
        })["ContractContentView[handleRestoreArabic]"];
        $[1] = isRTL;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleRestoreArabic = t1;
    let t2;
    if ($[3] !== isRTL) {
        t2 = ({
            "ContractContentView[handleRestoreEnglish]": ()=>{
                setForm(_ContractContentViewHandleRestoreEnglishSetForm);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isRTL ? "\u062A\u0645\u062A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0646\u0635 \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restored suggested English contract text");
            }
        })["ContractContentView[handleRestoreEnglish]"];
        $[3] = isRTL;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleRestoreEnglish = t2;
    const t3 = isRTL ? "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0639\u0642\u062F" : "Contract Content";
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = isRTL ? "\u062C\u0645\u064A\u0639 \u0628\u0646\u0648\u062F \u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0641\u064A \u0635\u0641\u062D\u0629 \u0627\u0644\u0639\u0642\u062F \u0648\u0645\u0633\u062A\u0646\u062F \u0627\u0644\u0637\u0628\u0627\u0639\u0629" : "All contract clauses shown on the contract page and its printout";
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t4 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== form || $[13] !== isRTL || $[14] !== onSave) {
        t8 = ({
            "ContractContentView[<Button>.onClick]": ()=>{
                onSave(form);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0639\u0642\u062F \u0628\u0646\u062C\u0627\u062D" : "Contract content saved successfully");
            }
        })["ContractContentView[<Button>.onClick]"];
        $[12] = form;
        $[13] = isRTL;
        $[14] = onSave;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = isRTL ? "\u062D\u0641\u0638" : "Save";
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: t8,
            className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer self-start sm:self-auto",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t8;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t7;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = isRTL ? "\u0647\u0630\u0627 \u0645\u062D\u062A\u0648\u0649 \u0645\u0642\u062A\u0631\u062D \u0648\u062C\u0627\u0647\u0632 \u0648\u0645\u062E\u0635\u0635 \u0644\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0642\u0627\u0631\u064A \u2014 \u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644\u0647 \u0644\u064A\u0646\u0627\u0633\u0628 \u0634\u0631\u0643\u062A\u0643. \u064A\u0638\u0647\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0629." : "This is ready, real-estate-specific suggested content \u2014 edit it to fit your company. It appears automatically on printed documents.";
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-teal-200/70 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/30 p-3.5 flex items-center gap-3",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-700 dark:text-gray-300",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
                    lineNumber: 147,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-gray-500 dark:text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    const t18 = isRTL ? "\u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u064A" : "Arabic text";
    let t19;
    if ($[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
                    lineNumber: 163,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    const t21 = isRTL ? "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restore suggested";
    let t22;
    if ($[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] !== handleRestoreArabic || $[35] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleRestoreArabic,
            className: "text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[34] = handleRestoreArabic;
        $[35] = t22;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== t19 || $[38] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t19,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t23;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== form) {
        t25 = ({
            "ContractContentView[<Textarea>.onChange]": (e)=>setForm({
                    ...form,
                    arabic_text: e.target.value
                })
        })["ContractContentView[<Textarea>.onChange]"];
        $[40] = form;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== form.arabic_text || $[43] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            dir: "rtl",
            rows: 11,
            value: form.arabic_text,
            onChange: t25,
            className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[42] = form.arabic_text;
        $[43] = t25;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t24 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[45] = t24;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-gray-500 dark:text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    const t29 = isRTL ? "\u0627\u0644\u0646\u0635 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A" : "English text";
    let t30;
    if ($[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: t29
                }, void 0, false, {
                    fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
                    lineNumber: 244,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    const t32 = isRTL ? "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D" : "Restore suggested";
    let t33;
    if ($[52] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[52] = t32;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== handleRestoreEnglish || $[55] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleRestoreEnglish,
            className: "text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer",
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[54] = handleRestoreEnglish;
        $[55] = t33;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] !== t30 || $[58] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[57] = t30;
        $[58] = t34;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== form) {
        t36 = ({
            "ContractContentView[<Textarea>.onChange]": (e_0)=>setForm({
                    ...form,
                    english_text: e_0.target.value
                })
        })["ContractContentView[<Textarea>.onChange]"];
        $[60] = form;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] !== form.english_text || $[63] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            dir: "ltr",
            rows: 11,
            value: form.english_text,
            onChange: t36,
            className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[62] = form.english_text;
        $[63] = t36;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== t35 || $[66] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[65] = t35;
        $[66] = t37;
        $[67] = t38;
    } else {
        t38 = $[67];
    }
    let t39;
    if ($[68] !== t13 || $[69] !== t16 || $[70] !== t27 || $[71] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-5 min-w-0",
            children: [
                t13,
                t16,
                t27,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/ContractContentView.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[68] = t13;
        $[69] = t16;
        $[70] = t27;
        $[71] = t38;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    return t39;
}
_s(ContractContentView, "UWsy2johf9okjxQ7RgsYkFHjK24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ContractContentView;
function _ContractContentViewHandleRestoreEnglishSetForm(prev_0) {
    return {
        ...prev_0,
        english_text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_CONTRACT_ENGLISH"]
    };
}
function _ContractContentViewHandleRestoreArabicSetForm(prev) {
    return {
        ...prev,
        arabic_text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_CONTRACT_ARABIC"]
    };
}
var _c;
__turbopack_context__.k.register(_c, "ContractContentView");
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
"[project]/src/features/settings/components/PaymentMethodsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentMethodsView",
    ()=>PaymentMethodsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function PaymentMethodsView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "cc7c4afcdd0406d6c2ec9d8dae8cc6dd2b82f6a06f9fcd8f58c6159bca9357bf") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc7c4afcdd0406d6c2ec9d8dae8cc6dd2b82f6a06f9fcd8f58c6159bca9357bf";
    }
    const { methods, setMethods } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("stripe");
    let t1;
    if ($[1] !== methods) {
        t1 = ({
            "PaymentMethodsView[useState()]": ()=>{
                const initial = {};
                methods.forEach({
                    "PaymentMethodsView[useState() > methods.forEach()]": (m)=>{
                        initial[m.id] = m.fields || {};
                    }
                }["PaymentMethodsView[useState() > methods.forEach()]"]);
                return initial;
            }
        })["PaymentMethodsView[useState()]"];
        $[1] = methods;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [fieldValues, setFieldValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PaymentMethodsView[handleFieldChange]": (gatewayId, fieldKey, val)=>{
                setFieldValues({
                    "PaymentMethodsView[handleFieldChange > setFieldValues()]": (prev)=>({
                            ...prev,
                            [gatewayId]: {
                                ...prev[gatewayId] || {},
                                [fieldKey]: val
                            }
                        })
                }["PaymentMethodsView[handleFieldChange > setFieldValues()]"]);
            }
        })["PaymentMethodsView[handleFieldChange]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleFieldChange = t2;
    let t3;
    if ($[4] !== fieldValues || $[5] !== isRTL || $[6] !== setMethods) {
        t3 = ({
            "PaymentMethodsView[handleSaveGateway]": (gatewayId_0)=>{
                setMethods({
                    "PaymentMethodsView[handleSaveGateway > setMethods()]": (prev_0)=>prev_0.map({
                            "PaymentMethodsView[handleSaveGateway > setMethods() > prev_0.map()]": (m_0)=>m_0.id === gatewayId_0 ? {
                                    ...m_0,
                                    fields: fieldValues[gatewayId_0]
                                } : m_0
                        }["PaymentMethodsView[handleSaveGateway > setMethods() > prev_0.map()]"])
                }["PaymentMethodsView[handleSaveGateway > setMethods()]"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0628\u0648\u0627\u0628\u0629 \u0628\u0646\u062C\u0627\u062D" : "Gateway credentials saved successfully");
            }
        })["PaymentMethodsView[handleSaveGateway]"];
        $[4] = fieldValues;
        $[5] = isRTL;
        $[6] = setMethods;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleSaveGateway = t3;
    const t4 = isRTL ? "\u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Payment Gateways";
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = isRTL ? "\u062A\u0641\u0639\u064A\u0644 \u0648\u062A\u0647\u064A\u0626\u0629 \u0628\u0648\u0627\u0628\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u2014 \u064A\u062A\u0645 \u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0645\u0634\u0641\u0631\u0629 \u0628\u0623\u0645\u0627\u0646" : "Enable and configure gateways \u2014 credentials stored encrypted";
    let t7;
    if ($[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t5 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== expandedId || $[16] !== fieldValues || $[17] !== handleSaveGateway || $[18] !== isRTL || $[19] !== methods || $[20] !== setMethods) {
        let t10;
        if ($[22] !== expandedId || $[23] !== fieldValues || $[24] !== handleSaveGateway || $[25] !== isRTL || $[26] !== setMethods) {
            t10 = ({
                "PaymentMethodsView[methods.map()]": (method)=>{
                    const isExpanded = expandedId === method.id;
                    const fields = fieldValues[method.id] || {};
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xs transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: {
                                    "PaymentMethodsView[methods.map() > <div>.onClick]": ()=>setExpandedId(isExpanded ? null : method.id)
                                }["PaymentMethodsView[methods.map() > <div>.onClick]"],
                                className: "p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/60 dark:hover:bg-neutral-800/40 transition-colors select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 dark:text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isExpanded ? "transform rotate-0" : "-rotate-90")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 305
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 135,
                                                columnNumber: 254
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                children: method.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 135,
                                                columnNumber: 437
                                            }, this),
                                            method.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
                                                children: isRTL ? "\u0645\u0641\u0639\u0644" : "On"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 135,
                                                columnNumber: 546
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 135,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: _PaymentMethodsViewMethodsMapDivOnClick,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            checked: method.enabled,
                                            onCheckedChange: {
                                                "PaymentMethodsView[methods.map() > <Switch>.onCheckedChange]": (checked)=>{
                                                    setMethods({
                                                        "PaymentMethodsView[methods.map() > <Switch>.onCheckedChange > setMethods()]": (prev_1)=>prev_1.map({
                                                                "PaymentMethodsView[methods.map() > <Switch>.onCheckedChange > setMethods() > prev_1.map()]": (m_1)=>m_1.id === method.id ? {
                                                                        ...m_1,
                                                                        enabled: checked
                                                                    } : m_1
                                                            }["PaymentMethodsView[methods.map() > <Switch>.onCheckedChange > setMethods() > prev_1.map()]"])
                                                    }["PaymentMethodsView[methods.map() > <Switch>.onCheckedChange > setMethods()]"]);
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(checked ? isRTL ? `تم تفعيل ${method.name}` : `Enabled ${method.name}` : isRTL ? `تم تعطيل ${method.name}` : `Disabled ${method.name}`);
                                                }
                                            }["PaymentMethodsView[methods.map() > <Switch>.onCheckedChange]"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                            lineNumber: 135,
                                            columnNumber: 871
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 135,
                                        columnNumber: 816
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                lineNumber: 133,
                                columnNumber: 180
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 pb-5 pt-2 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/30 dark:bg-neutral-950/30 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: method.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 147,
                                        columnNumber: 244
                                    }, this),
                                    method.id === "stripe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0639\u0627\u0645 (Publishable Key)" : "Publishable Key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 451
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.publishable_key || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_0)=>handleFieldChange("stripe", "publishable_key", e_0.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "pk_live_...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 623
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 408
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0633\u0631\u064A (Secret Key)" : "Secret Key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 189
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.secret_key || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_1)=>handleFieldChange("stripe", "secret_key", e_1.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "sk_live_...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 351
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 149,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0633\u0631 \u0627\u0644\u0640 Webhook" : "Webhook Secret"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 175
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.webhook_secret || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_2)=>handleFieldChange("stripe", "webhook_secret", e_2.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "whsec_...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 294
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 151,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629" : "Default Currency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 173
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.currency || "AED",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_3)=>handleFieldChange("stripe", "currency", e_3.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "AED",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 352
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 153,
                                                columnNumber: 144
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 147,
                                        columnNumber: 351
                                    }, this),
                                    method.id === "paymob" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0640 API" : "API Key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 262
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.api_key || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_4)=>handleFieldChange("paymob", "api_key", e_4.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "ZXlKaGJHY2lPaUpJVX...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 388
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 155,
                                                columnNumber: 219
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u062A\u0643\u0627\u0645\u0644 (Integration ID)" : "Integration ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 185
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.integration_id || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_5)=>handleFieldChange("paymob", "integration_id", e_5.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "e.g. 483921",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 349
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 157,
                                                columnNumber: 156
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u0625\u0637\u0627\u0631 (Iframe ID)" : "Iframe ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 175
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.iframe_id || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_6)=>handleFieldChange("paymob", "iframe_id", e_6.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "e.g. 192834",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 323
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 159,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0641\u062A\u0627\u062D HMAC Secret" : "HMAC Secret"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 189
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.hmac_secret || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_7)=>handleFieldChange("paymob", "hmac_secret", e_7.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "HMAC secret hash...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 308
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 161,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 155,
                                        columnNumber: 162
                                    }, this),
                                    method.id === "paypal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 (Client ID)" : "Client ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 288
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.client_id || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_8)=>handleFieldChange("paypal", "client_id", e_8.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "A219ks82...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 436
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 163,
                                                columnNumber: 245
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0644\u0633\u0631 (Secret)" : "Client Secret"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 189
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.client_secret || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_9)=>handleFieldChange("paypal", "client_secret", e_9.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "ELk19...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 301
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 165,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 163,
                                        columnNumber: 188
                                    }, this),
                                    method.id === "bank_transfer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0628\u0646\u0643" : "Bank Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 270
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.bank_name || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_10)=>handleFieldChange("bank_transfer", "bank_name", e_10.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "e.g. Emirates NBD",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 394
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 167,
                                                columnNumber: 241
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0633\u0645 \u0635\u0627\u062D\u0628 \u0627\u0644\u062D\u0633\u0627\u0628" : "Account Holder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 171
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.account_name || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_11)=>handleFieldChange("bank_transfer", "account_name", e_11.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "e.g. Property Adviser LLC",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 331
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 169,
                                                columnNumber: 142
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0622\u064A\u0628\u0627\u0646 (IBAN)" : "IBAN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 179
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.iban || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_12)=>handleFieldChange("bank_transfer", "iban", e_12.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "AE00 0000 0000 0000 0000 00",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 317
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 171,
                                                columnNumber: 150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0645\u0632 \u0627\u0644\u0633\u0648\u064A\u0641\u062A (SWIFT)" : "SWIFT / BIC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 191
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.swift || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_13)=>handleFieldChange("bank_transfer", "swift", e_13.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "EBILAEADXXX",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 337
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 162
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u0639\u0645\u064A\u0644" : "Payment Instructions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 189
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        rows: 2,
                                                        value: fields.instructions || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Textarea>.onChange]": (e_14)=>handleFieldChange("bank_transfer", "instructions", e_14.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Textarea>.onChange]"],
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 397
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 175,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 167,
                                        columnNumber: 184
                                    }, this),
                                    method.id === "instapay" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0646\u0633\u062A\u0627\u0628\u0627\u064A (InstaPay IPA)" : "InstaPay Address (IPA)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 231
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.instapay_address || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_15)=>handleFieldChange("instapay", "instapay_address", e_15.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "username@instapay",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 413
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 177,
                                                columnNumber: 202
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0631\u062A\u0628\u0637" : "Linked Mobile Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 181
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.mobile_number || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_16)=>handleFieldChange("instapay", "mobile_number", e_16.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "+20 100 123 4567",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 365
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 179,
                                                columnNumber: 152
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 177,
                                        columnNumber: 145
                                    }, this),
                                    method.id === "pay_at_office" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639 \u0648\u0627\u0644\u0645\u0643\u062A\u0628" : "Office Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 282
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.office_address || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_17)=>handleFieldChange("pay_at_office", "office_address", e_17.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "Level 14, Tower 1, Downtown...",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 466
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 181,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644" : "Working Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 184
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.working_hours || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_18)=>handleFieldChange("pay_at_office", "working_hours", e_18.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "Sun - Thu, 9:00 AM - 6:00 PM",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 324
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 155
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0644\u0644\u062A\u0646\u0633\u064A\u0642" : "Contact Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 182
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.contact_phone || "",
                                                        onChange: {
                                                            "PaymentMethodsView[methods.map() > <Input>.onChange]": (e_19)=>handleFieldChange("pay_at_office", "contact_phone", e_19.target.value)
                                                        }["PaymentMethodsView[methods.map() > <Input>.onChange]"],
                                                        placeholder: "+971 4 123 4567",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 359
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 153
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 181,
                                        columnNumber: 182
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: {
                                                "PaymentMethodsView[methods.map() > <Button>.onClick]": ()=>handleSaveGateway(method.id)
                                            }["PaymentMethodsView[methods.map() > <Button>.onClick]"],
                                            className: "h-8 px-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 207
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isRTL ? "\u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A" : "Save Credentials"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 239
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                            lineNumber: 187,
                                            columnNumber: 186
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                        lineNumber: 187,
                                        columnNumber: 147
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                                lineNumber: 147,
                                columnNumber: 113
                            }, this)
                        ]
                    }, method.id, true, {
                        fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
                        lineNumber: 133,
                        columnNumber: 18
                    }, this);
                }
            })["PaymentMethodsView[methods.map()]"];
            $[22] = expandedId;
            $[23] = fieldValues;
            $[24] = handleSaveGateway;
            $[25] = isRTL;
            $[26] = setMethods;
            $[27] = t10;
        } else {
            t10 = $[27];
        }
        t9 = methods.map(t10);
        $[15] = expandedId;
        $[16] = fieldValues;
        $[17] = handleSaveGateway;
        $[18] = isRTL;
        $[19] = methods;
        $[20] = setMethods;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[28] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[28] = t9;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t10 || $[31] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-5 min-w-0",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/PaymentMethodsView.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t8;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    return t11;
}
_s(PaymentMethodsView, "rNtu6RybmgW7Ch3H7ItZYuFcszk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PaymentMethodsView;
function _PaymentMethodsViewMethodsMapDivOnClick(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "PaymentMethodsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/IntegrationsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntegrationsView",
    ()=>IntegrationsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function IntegrationsView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "38bdaefb1cab31d2ec590226b011e9312ef222af24c0602e6836c09283c0ff6f") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38bdaefb1cab31d2ec590226b011e9312ef222af24c0602e6836c09283c0ff6f";
    }
    const { integrations, setIntegrations } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(integrations);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("twilio_sms");
    let t1;
    if ($[1] !== integrations) {
        t1 = ({
            "IntegrationsView[useState()]": ()=>{
                const initial = {};
                integrations.forEach({
                    "IntegrationsView[useState() > integrations.forEach()]": (item)=>{
                        initial[item.id] = item.fields || {};
                    }
                }["IntegrationsView[useState() > integrations.forEach()]"]);
                return initial;
            }
        })["IntegrationsView[useState()]"];
        $[1] = integrations;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [fieldValues, setFieldValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "IntegrationsView[handleFieldChange]": (integrationId, fieldKey, val)=>{
                setFieldValues({
                    "IntegrationsView[handleFieldChange > setFieldValues()]": (prev)=>({
                            ...prev,
                            [integrationId]: {
                                ...prev[integrationId] || {},
                                [fieldKey]: val
                            }
                        })
                }["IntegrationsView[handleFieldChange > setFieldValues()]"]);
            }
        })["IntegrationsView[handleFieldChange]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleFieldChange = t2;
    let t3;
    if ($[4] !== fieldValues || $[5] !== isRTL || $[6] !== setIntegrations) {
        t3 = ({
            "IntegrationsView[handleSaveIntegration]": (integrationId_0)=>{
                setItems({
                    "IntegrationsView[handleSaveIntegration > setItems()]": (prev_0)=>prev_0.map({
                            "IntegrationsView[handleSaveIntegration > setItems() > prev_0.map()]": (item_0)=>item_0.id === integrationId_0 ? {
                                    ...item_0,
                                    fields: fieldValues[integrationId_0]
                                } : item_0
                        }["IntegrationsView[handleSaveIntegration > setItems() > prev_0.map()]"])
                }["IntegrationsView[handleSaveIntegration > setItems()]"]);
                if (setIntegrations) {
                    setIntegrations({
                        "IntegrationsView[handleSaveIntegration > setIntegrations()]": (prev_1)=>prev_1.map({
                                "IntegrationsView[handleSaveIntegration > setIntegrations() > prev_1.map()]": (item_1)=>item_1.id === integrationId_0 ? {
                                        ...item_1,
                                        fields: fieldValues[integrationId_0]
                                    } : item_1
                            }["IntegrationsView[handleSaveIntegration > setIntegrations() > prev_1.map()]"])
                    }["IntegrationsView[handleSaveIntegration > setIntegrations()]"]);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0628\u0637 \u0628\u0646\u062C\u0627\u062D" : "Integration credentials saved successfully");
            }
        })["IntegrationsView[handleSaveIntegration]"];
        $[4] = fieldValues;
        $[5] = isRTL;
        $[6] = setIntegrations;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleSaveIntegration = t3;
    let t4;
    if ($[8] !== isRTL || $[9] !== setIntegrations) {
        t4 = ({
            "IntegrationsView[handleToggle]": (integrationId_1, checked)=>{
                setItems({
                    "IntegrationsView[handleToggle > setItems()]": (prev_2)=>prev_2.map({
                            "IntegrationsView[handleToggle > setItems() > prev_2.map()]": (item_2)=>item_2.id === integrationId_1 ? {
                                    ...item_2,
                                    enabled: checked,
                                    status: checked ? "connected" : "disconnected"
                                } : item_2
                        }["IntegrationsView[handleToggle > setItems() > prev_2.map()]"])
                }["IntegrationsView[handleToggle > setItems()]"]);
                if (setIntegrations) {
                    setIntegrations({
                        "IntegrationsView[handleToggle > setIntegrations()]": (prev_3)=>prev_3.map({
                                "IntegrationsView[handleToggle > setIntegrations() > prev_3.map()]": (item_3)=>item_3.id === integrationId_1 ? {
                                        ...item_3,
                                        enabled: checked,
                                        status: checked ? "connected" : "disconnected"
                                    } : item_3
                            }["IntegrationsView[handleToggle > setIntegrations() > prev_3.map()]"])
                    }["IntegrationsView[handleToggle > setIntegrations()]"]);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(checked ? isRTL ? "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629" : "Integration enabled" : isRTL ? "\u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629" : "Integration disabled");
            }
        })["IntegrationsView[handleToggle]"];
        $[8] = isRTL;
        $[9] = setIntegrations;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const handleToggle = t4;
    const t5 = isRTL ? "\u0627\u0644\u0631\u0628\u0637 \u0648\u0627\u0644\u062A\u0643\u0627\u0645\u0644" : "Integrations";
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = isRTL ? "\u062A\u0647\u064A\u0626\u0629 \u0645\u0632\u0648\u062F\u064A \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u2014 \u064A\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D \u0645\u0634\u0641\u0631\u0629 \u0628\u0623\u0645\u0627\u0646" : "Configure messaging & email providers \u2014 keys stored encrypted";
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t6 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== expandedId || $[19] !== fieldValues || $[20] !== handleSaveIntegration || $[21] !== handleToggle || $[22] !== isRTL || $[23] !== items) {
        let t11;
        if ($[25] !== expandedId || $[26] !== fieldValues || $[27] !== handleSaveIntegration || $[28] !== handleToggle || $[29] !== isRTL) {
            t11 = ({
                "IntegrationsView[items.map()]": (item_4)=>{
                    const isExpanded = expandedId === item_4.id;
                    const fields = fieldValues[item_4.id] || {};
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xs transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: {
                                    "IntegrationsView[items.map() > <div>.onClick]": ()=>setExpandedId(isExpanded ? null : item_4.id)
                                }["IntegrationsView[items.map() > <div>.onClick]"],
                                className: "p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/60 dark:hover:bg-neutral-800/40 transition-colors select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 dark:text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", isExpanded ? "transform rotate-0" : "-rotate-90")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 301
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 179,
                                                columnNumber: 250
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                children: item_4.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 179,
                                                columnNumber: 433
                                            }, this),
                                            item_4.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
                                                children: isRTL ? "\u0645\u0641\u0639\u0644" : "On"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 179,
                                                columnNumber: 542
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 179,
                                        columnNumber: 209
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: _IntegrationsViewItemsMapDivOnClick,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            checked: item_4.enabled,
                                            onCheckedChange: {
                                                "IntegrationsView[items.map() > <Switch>.onCheckedChange]": (checked_0)=>handleToggle(item_4.id, checked_0)
                                            }["IntegrationsView[items.map() > <Switch>.onCheckedChange]"]
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                            lineNumber: 179,
                                            columnNumber: 863
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 179,
                                        columnNumber: 812
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                lineNumber: 177,
                                columnNumber: 180
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 pb-5 pt-2 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/30 dark:bg-neutral-950/30 space-y-4",
                                children: [
                                    item_4.id === "twilio_sms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0633\u0627\u0628 (Account SID)" : "Account SID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 329
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.account_sid || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_0)=>handleFieldChange("twilio_sms", "account_sid", e_0.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "AC2ced3cfef91e97804ec42f6b1f4004d7",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 481
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 181,
                                                columnNumber: 300
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                className: "text-xs font-semibold",
                                                                children: isRTL ? "\u0631\u0645\u0632 \u0627\u0644\u062A\u0641\u0648\u064A\u0636 (Auth Token)" : "Auth Token"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 235
                                                            }, this),
                                                            fields.auth_token && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-medium text-emerald-600 dark:text-emerald-400",
                                                                children: "✓ saved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 407
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 194
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.auth_token || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_1)=>handleFieldChange("twilio_sms", "auth_token", e_1.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 509
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0642\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 (Sender Number)" : "Sender Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 210
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.sender_number || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_2)=>handleFieldChange("twilio_sms", "sender_number", e_2.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "+18458510609",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 366
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 181
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 181,
                                        columnNumber: 271
                                    }, this),
                                    item_4.id === "whatsapp_cloud" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 (Phone Number ID)" : "Phone Number ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 271
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.phone_number_id || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_3)=>handleFieldChange("whatsapp_cloud", "phone_number_id", e_3.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "109283746592834",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 450
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 187,
                                                columnNumber: 242
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u062D\u0633\u0627\u0628 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 (WABA ID)" : "WhatsApp Business Account ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 175
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.waba_id || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_4)=>handleFieldChange("whatsapp_cloud", "waba_id", e_4.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "928374659283741",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 371
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 189,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0645\u0632 \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u062F\u0627\u0626\u0645 (System User Token)" : "Access Token"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 189
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.access_token || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_5)=>handleFieldChange("whatsapp_cloud", "access_token", e_5.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "EAAK...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 379
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 191,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0644\u0644\u0640 Webhook (Verify Token)" : "Webhook Verify Token"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 181
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.webhook_verify_token || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_6)=>handleFieldChange("whatsapp_cloud", "webhook_verify_token", e_6.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "custom_verify_token",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 364
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 193,
                                                columnNumber: 138
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 187,
                                        columnNumber: 185
                                    }, this),
                                    item_4.id === "sendgrid_email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0641\u062A\u0627\u062D SendGrid API" : "SendGrid API Key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 292
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.api_key || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_7)=>handleFieldChange("sendgrid_email", "api_key", e_7.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "SG.e83912...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 417
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 195,
                                                columnNumber: 249
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0628\u0631\u064A\u062F \u0627\u0644\u0645\u0631\u0633\u0644 (From Email)" : "From Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 172
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "email",
                                                        value: fields.from_email || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_8)=>handleFieldChange("sendgrid_email", "from_email", e_8.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "noreply@propertyadviser.site",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 330
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 197,
                                                columnNumber: 143
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u0633\u0644 (From Name)" : "From Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 178
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.from_name || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_9)=>handleFieldChange("sendgrid_email", "from_name", e_9.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "Property Adviser",
                                                        className: "h-9 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 320
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 199,
                                                columnNumber: 149
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 195,
                                        columnNumber: 192
                                    }, this),
                                    item_4.id === "facebook_lead_ads" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u062A\u0637\u0628\u064A\u0642 \u0641\u064A\u0633\u0628\u0648\u0643 (App ID)" : "Facebook App ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 268
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.app_id || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_10)=>handleFieldChange("facebook_lead_ads", "app_id", e_10.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "84920194829104",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 450
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 201,
                                                columnNumber: 239
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0633\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 (App Secret)" : "App Secret"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 174
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.app_secret || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_11)=>handleFieldChange("facebook_lead_ads", "app_secret", e_11.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 318
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 203,
                                                columnNumber: 145
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0631\u0645\u0632 \u0648\u0635\u0648\u0644 \u0627\u0644\u0635\u0641\u062D\u0629 (Page Access Token)" : "Page Access Token"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 224
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.page_access_token || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_12)=>handleFieldChange("facebook_lead_ads", "page_access_token", e_12.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "EAAB...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 407
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 205,
                                                columnNumber: 181
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 201,
                                        columnNumber: 182
                                    }, this),
                                    item_4.id === "agora_video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u062A\u0637\u0628\u064A\u0642 Agora (App ID)" : "Agora App ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 263
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.app_id || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_13)=>handleFieldChange("agora_video", "app_id", e_13.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "9a8b7c6d5e4f...",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 411
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 207,
                                                columnNumber: 234
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 (App Certificate)" : "App Certificate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 175
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.app_certificate || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_14)=>handleFieldChange("agora_video", "app_certificate", e_14.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 347
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 209,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 207,
                                        columnNumber: 177
                                    }, this),
                                    item_4.id === "google_analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u0642\u064A\u0627\u0633 (Measurement ID)" : "Measurement ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 311
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: fields.measurement_id || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_15)=>handleFieldChange("google_analytics", "measurement_id", e_15.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "G-XXXXXXXXXX",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 469
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 211,
                                                columnNumber: 282
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        className: "text-xs font-semibold",
                                                        children: isRTL ? "\u0633\u0631 \u0648\u0627\u062C\u0647\u0629 \u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0642\u064A\u0627\u0633 (API Secret)" : "Measurement Protocol API Secret"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 172
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "password",
                                                        value: fields.api_secret || "",
                                                        onChange: {
                                                            "IntegrationsView[items.map() > <Input>.onChange]": (e_16)=>handleFieldChange("google_analytics", "api_secret", e_16.target.value)
                                                        }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                                        className: "h-9 text-xs font-mono"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 393
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                lineNumber: 213,
                                                columnNumber: 143
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 211,
                                        columnNumber: 225
                                    }, this),
                                    item_4.id === "microsoft_clarity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-semibold",
                                                    children: isRTL ? "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (Project ID)" : "Project ID / Tracking Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 284
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: fields.project_id || "",
                                                    onChange: {
                                                        "IntegrationsView[items.map() > <Input>.onChange]": (e_17)=>handleFieldChange("microsoft_clarity", "project_id", e_17.target.value)
                                                    }["IntegrationsView[items.map() > <Input>.onChange]"],
                                                    placeholder: "e.g. k9s8d7f6",
                                                    className: "h-9 text-xs font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 456
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                            lineNumber: 215,
                                            columnNumber: 255
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 215,
                                        columnNumber: 226
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: {
                                                "IntegrationsView[items.map() > <Button>.onClick]": ()=>handleSaveIntegration(item_4.id)
                                            }["IntegrationsView[items.map() > <Button>.onClick]"],
                                            className: "h-8 px-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 203
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isRTL ? "\u062D\u0641\u0638" : "Save"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 235
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                            lineNumber: 217,
                                            columnNumber: 173
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                        lineNumber: 217,
                                        columnNumber: 151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                                lineNumber: 181,
                                columnNumber: 109
                            }, this)
                        ]
                    }, item_4.id, true, {
                        fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
                        lineNumber: 177,
                        columnNumber: 18
                    }, this);
                }
            })["IntegrationsView[items.map()]"];
            $[25] = expandedId;
            $[26] = fieldValues;
            $[27] = handleSaveIntegration;
            $[28] = handleToggle;
            $[29] = isRTL;
            $[30] = t11;
        } else {
            t11 = $[30];
        }
        t10 = items.map(t11);
        $[18] = expandedId;
        $[19] = fieldValues;
        $[20] = handleSaveIntegration;
        $[21] = handleToggle;
        $[22] = isRTL;
        $[23] = items;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[31] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[31] = t10;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t11 || $[34] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-5 min-w-0",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/IntegrationsView.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t9;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    return t12;
}
_s(IntegrationsView, "6S0rqd1PtmNsEFOCfJqToGy8uGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = IntegrationsView;
function _IntegrationsViewItemsMapDivOnClick(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "IntegrationsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/SentNotificationsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SentNotificationsView",
    ()=>SentNotificationsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/data/mock-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function SentNotificationsView() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "595631589c81248eeb49cfca90496508296e5b3d562b2c5d3abf05b757aace76") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "595631589c81248eeb49cfca90496508296e5b3d562b2c5d3abf05b757aace76";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("bell");
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_NOTIFICATION_EVENTS"]);
    const [editingEvent, setEditingEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let handleSaveEdit;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== activeSubTab || $[2] !== editingEvent || $[3] !== events || $[4] !== isRTL) {
        let t6;
        if ($[12] !== activeSubTab) {
            t6 = ({
                "SentNotificationsView[events.filter()]": (e)=>e.channel === activeSubTab
            })["SentNotificationsView[events.filter()]"];
            $[12] = activeSubTab;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        const filteredEvents = events.filter(t6);
        let t7;
        if ($[14] !== isRTL) {
            t7 = ({
                "SentNotificationsView[handleToggle]": (id, checked)=>{
                    setEvents({
                        "SentNotificationsView[handleToggle > setEvents()]": (prev)=>prev.map({
                                "SentNotificationsView[handleToggle > setEvents() > prev.map()]": (e_0)=>e_0.id === id ? {
                                        ...e_0,
                                        enabled: checked
                                    } : e_0
                            }["SentNotificationsView[handleToggle > setEvents() > prev.map()]"])
                    }["SentNotificationsView[handleToggle > setEvents()]"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(checked ? isRTL ? "\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631" : "Notification enabled" : isRTL ? "\u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631" : "Notification disabled");
                }
            })["SentNotificationsView[handleToggle]"];
            $[14] = isRTL;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        const handleToggle = t7;
        let t8;
        if ($[16] !== editingEvent || $[17] !== isRTL) {
            t8 = ({
                "SentNotificationsView[handleSaveEdit]": (e_1)=>{
                    e_1.preventDefault();
                    if (!editingEvent) {
                        return;
                    }
                    setEvents({
                        "SentNotificationsView[handleSaveEdit > setEvents()]": (prev_0)=>prev_0.map({
                                "SentNotificationsView[handleSaveEdit > setEvents() > prev_0.map()]": (item)=>item.id === editingEvent.id ? editingEvent : item
                            }["SentNotificationsView[handleSaveEdit > setEvents() > prev_0.map()]"])
                    }["SentNotificationsView[handleSaveEdit > setEvents()]"]);
                    setEditingEvent(null);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "\u062A\u0645 \u062D\u0641\u0638 \u0642\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D" : "Notification template updated successfully");
                }
            })["SentNotificationsView[handleSaveEdit]"];
            $[16] = editingEvent;
            $[17] = isRTL;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        handleSaveEdit = t8;
        t2 = "flex-1 space-y-5 min-w-0";
        const t9 = isRTL ? "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Notifications & Emails";
        let t10;
        if ($[19] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this);
            $[19] = t9;
            $[20] = t10;
        } else {
            t10 = $[20];
        }
        const t11 = isRTL ? "\u0643\u0644 \u0645\u0627 \u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644\u0647 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0641\u064A \u062C\u0631\u0633 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u2014 \u0639\u062F\u0651\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0633\u064A\u062A\u0645 \u062A\u0637\u0628\u064A\u0642\u0647\u0627 \u0645\u0628\u0627\u0634\u0631\u0629" : "Everything sent automatically in the bell and by email \u2014 edit the text and title; changes apply to what is actually sent";
        let t12;
        if ($[21] !== t11) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this);
            $[21] = t11;
            $[22] = t12;
        } else {
            t12 = $[22];
        }
        if ($[23] !== t10 || $[24] !== t12) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-2 border-b border-gray-100 dark:border-neutral-800",
                children: [
                    t10,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 116,
                columnNumber: 12
            }, this);
            $[23] = t10;
            $[24] = t12;
            $[25] = t3;
        } else {
            t3 = $[25];
        }
        let t13;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "SentNotificationsView[<button>.onClick]": ()=>setActiveSubTab("bell")
            })["SentNotificationsView[<button>.onClick]"];
            $[26] = t13;
        } else {
            t13 = $[26];
        }
        const t14 = activeSubTab === "bell" ? "text-teal-700 dark:text-teal-400 font-semibold" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200";
        let t15;
        if ($[27] !== t14) {
            t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-3 text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors relative cursor-pointer", t14);
            $[27] = t14;
            $[28] = t15;
        } else {
            t15 = $[28];
        }
        let t16;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this);
            $[29] = t16;
        } else {
            t16 = $[29];
        }
        const t17 = isRTL ? "\u0627\u0644\u062C\u0631\u0633 (\u062F\u0627\u062E\u0644 \u0627\u0644\u0646\u0638\u0627\u0645)" : "Bell (in-app)";
        let t18;
        if ($[30] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this);
            $[30] = t17;
            $[31] = t18;
        } else {
            t18 = $[31];
        }
        let t19;
        if ($[32] !== activeSubTab) {
            t19 = activeSubTab === "bell" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 159,
                columnNumber: 40
            }, this);
            $[32] = activeSubTab;
            $[33] = t19;
        } else {
            t19 = $[33];
        }
        let t20;
        if ($[34] !== t15 || $[35] !== t18 || $[36] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t13,
                className: t15,
                children: [
                    t16,
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this);
            $[34] = t15;
            $[35] = t18;
            $[36] = t19;
            $[37] = t20;
        } else {
            t20 = $[37];
        }
        let t21;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = ({
                "SentNotificationsView[<button>.onClick]": ()=>setActiveSubTab("email")
            })["SentNotificationsView[<button>.onClick]"];
            $[38] = t21;
        } else {
            t21 = $[38];
        }
        const t22 = activeSubTab === "email" ? "text-teal-700 dark:text-teal-400 font-semibold" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200";
        let t23;
        if ($[39] !== t22) {
            t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-3 text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors relative cursor-pointer", t22);
            $[39] = t22;
            $[40] = t23;
        } else {
            t23 = $[40];
        }
        let t24;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[41] = t24;
        } else {
            t24 = $[41];
        }
        const t25 = isRTL ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email";
        let t26;
        if ($[42] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this);
            $[42] = t25;
            $[43] = t26;
        } else {
            t26 = $[43];
        }
        let t27;
        if ($[44] !== activeSubTab) {
            t27 = activeSubTab === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 211,
                columnNumber: 41
            }, this);
            $[44] = activeSubTab;
            $[45] = t27;
        } else {
            t27 = $[45];
        }
        let t28;
        if ($[46] !== t23 || $[47] !== t26 || $[48] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t21,
                className: t23,
                children: [
                    t24,
                    t26,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, this);
            $[46] = t23;
            $[47] = t26;
            $[48] = t27;
            $[49] = t28;
        } else {
            t28 = $[49];
        }
        if ($[50] !== t20 || $[51] !== t28) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 border-b border-gray-200 dark:border-neutral-800 pb-px",
                children: [
                    t20,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 228,
                columnNumber: 12
            }, this);
            $[50] = t20;
            $[51] = t28;
            $[52] = t4;
        } else {
            t4 = $[52];
        }
        let t29;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                className: "h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this);
            $[53] = t29;
        } else {
            t29 = $[53];
        }
        const t30 = activeSubTab === "bell" ? isRTL ? "\u062A\u0638\u0647\u0631 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u062C\u0631\u0633 \u0641\u064A \u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0628\u0627\u0644\u0644\u0648\u062D\u0629 \u2014 \u064A\u062A\u0645 \u0625\u0637\u0644\u0627\u0642\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0639\u0646\u062F \u0623\u062D\u062F\u0627\u062B \u0627\u0644\u0646\u0638\u0627\u0645 (\u062A\u0633\u062C\u064A\u0644\u060C \u0631\u0633\u0627\u0644\u0629\u060C \u0627\u0639\u062A\u0645\u0627\u062F \u0645\u0637\u0648\u0631\u060C \u0631\u0635\u064A\u062F...)." : "Bell notifications appear in the dashboard notifications icon \u2014 triggered automatically on system events (signup, message, developer approval, credits...)." : isRTL ? "\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0639\u0628\u0631 \u062E\u0648\u0627\u062F\u0645 \u0627\u0644\u0628\u0631\u064A\u062F \u2014 \u0639\u062F\u0651\u0644 \u0639\u0646\u0648\u0627\u0646 \u0648\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0628\u0633\u0647\u0648\u0644\u0629." : "Email notifications sent automatically via SMTP / SendGrid \u2014 edit the subject and body template.";
        if ($[54] !== t30) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/30 p-3.5 flex items-center gap-2.5",
                children: [
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-900 dark:text-amber-200",
                        children: t30
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                        lineNumber: 244,
                        columnNumber: 165
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 244,
                columnNumber: 12
            }, this);
            $[54] = t30;
            $[55] = t5;
        } else {
            t5 = $[55];
        }
        t0 = "space-y-3";
        let t31;
        if ($[56] !== handleToggle || $[57] !== isRTL) {
            t31 = ({
                "SentNotificationsView[filteredEvents.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-2.5 hover:border-gray-300 dark:hover:border-neutral-700 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-gray-900 dark:text-white",
                                                children: isRTL ? item_0.title_ar || item_0.title : item_0.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 254,
                                                columnNumber: 412
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 dark:text-gray-500 font-normal",
                                                children: isRTL ? item_0.description_ar || item_0.description : item_0.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 254,
                                                columnNumber: 537
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 254,
                                        columnNumber: 361
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 self-end sm:self-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                checked: item_0.enabled,
                                                onCheckedChange: {
                                                    "SentNotificationsView[filteredEvents.map() > <Switch>.onCheckedChange]": (checked_0)=>handleToggle(item_0.id, checked_0)
                                                }["SentNotificationsView[filteredEvents.map() > <Switch>.onCheckedChange]"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 254,
                                                columnNumber: 758
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: {
                                                    "SentNotificationsView[filteredEvents.map() > <Button>.onClick]": ()=>setEditingEvent(item_0)
                                                }["SentNotificationsView[filteredEvents.map() > <Button>.onClick]"],
                                                className: "h-8 px-3 text-xs gap-1.5 rounded-lg border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "h-3.5 w-3.5 text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 243
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isRTL ? "\u062A\u0639\u062F\u064A\u0644" : "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 291
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 256,
                                                columnNumber: 94
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 254,
                                        columnNumber: 695
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 254,
                                columnNumber: 280
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-gray-50/80 dark:bg-neutral-950/50 border border-gray-100 dark:border-neutral-800/80 px-3.5 py-2.5",
                                children: [
                                    item_0.channel === "email" && item_0.email_subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-semibold text-gray-600 dark:text-gray-400 pb-1 mb-1 border-b border-gray-200/50 dark:border-neutral-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 dark:text-gray-500",
                                                children: isRTL ? "\u0627\u0644\u0645\u0648\u0636\u0648\u0639:" : "Subject:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 258,
                                                columnNumber: 698
                                            }, this),
                                            " ",
                                            item_0.email_subject
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 258,
                                        columnNumber: 560
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 dark:text-gray-300 font-mono leading-relaxed",
                                        children: isRTL ? item_0.template_ar || item_0.template : item_0.template
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 258,
                                        columnNumber: 854
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 258,
                                columnNumber: 376
                            }, this)
                        ]
                    }, item_0.id, true, {
                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                        lineNumber: 254,
                        columnNumber: 66
                    }, this)
            })["SentNotificationsView[filteredEvents.map()]"];
            $[56] = handleToggle;
            $[57] = isRTL;
            $[58] = t31;
        } else {
            t31 = $[58];
        }
        t1 = filteredEvents.map(t31);
        $[1] = activeSubTab;
        $[2] = editingEvent;
        $[3] = events;
        $[4] = isRTL;
        $[5] = handleSaveEdit;
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        handleSaveEdit = $[5];
        t0 = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
    }
    let t6;
    if ($[59] !== t0 || $[60] !== t1) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
            lineNumber: 289,
            columnNumber: 10
        }, this);
        $[59] = t0;
        $[60] = t1;
        $[61] = t6;
    } else {
        t6 = $[61];
    }
    let t7;
    if ($[62] !== editingEvent || $[63] !== handleSaveEdit || $[64] !== isRTL) {
        t7 = editingEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: !!editingEvent,
            onOpenChange: {
                "SentNotificationsView[<Dialog>.onOpenChange]": (open)=>!open && setEditingEvent(null)
            }["SentNotificationsView[<Dialog>.onOpenChange]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "max-w-lg bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-base font-bold text-gray-900 dark:text-white",
                            children: isRTL ? "\u062A\u0639\u062F\u064A\u0644 \u0642\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631" : "Edit Notification Template"
                        }, void 0, false, {
                            fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                            lineNumber: 300,
                            columnNumber: 175
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                        lineNumber: 300,
                        columnNumber: 161
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSaveEdit,
                        className: "space-y-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-xs font-semibold",
                                        children: isRTL ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0634\u0639\u0627\u0631" : "Notification Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 300,
                                        columnNumber: 508
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: editingEvent.title,
                                        onChange: {
                                            "SentNotificationsView[<Input>.onChange]": (e_2)=>setEditingEvent({
                                                    ...editingEvent,
                                                    title: e_2.target.value
                                                })
                                        }["SentNotificationsView[<Input>.onChange]"],
                                        className: "h-9 text-xs",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 300,
                                        columnNumber: 665
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 300,
                                columnNumber: 479
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-xs font-semibold",
                                        children: isRTL ? "\u0648\u0635\u0641 \u0627\u0644\u062D\u062F\u062B" : "Event Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 305,
                                        columnNumber: 136
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: editingEvent.description,
                                        onChange: {
                                            "SentNotificationsView[<Input>.onChange]": (e_3)=>setEditingEvent({
                                                    ...editingEvent,
                                                    description: e_3.target.value
                                                })
                                        }["SentNotificationsView[<Input>.onChange]"],
                                        className: "h-9 text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 305,
                                        columnNumber: 268
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 305,
                                columnNumber: 107
                            }, this),
                            editingEvent.channel === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-xs font-semibold",
                                        children: isRTL ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F (Subject)" : "Email Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 310,
                                        columnNumber: 157
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: editingEvent.email_subject || "",
                                        onChange: {
                                            "SentNotificationsView[<Input>.onChange]": (e_4)=>setEditingEvent({
                                                    ...editingEvent,
                                                    email_subject: e_4.target.value
                                                })
                                        }["SentNotificationsView[<Input>.onChange]"],
                                        className: "h-9 text-xs",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 310,
                                        columnNumber: 313
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 310,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-xs font-semibold",
                                                children: isRTL ? "\u0646\u0635 \u0627\u0644\u0642\u0627\u0644\u0628 (\u0645\u0639 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A)" : "Template Text"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 315,
                                                columnNumber: 188
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-400",
                                                children: isRTL ? "\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629: {name}, {credits}, {package}, {amount}" : "Tags: {name}, {credits}, {package}, {amount}"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                                lineNumber: 315,
                                                columnNumber: 386
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 315,
                                        columnNumber: 137
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        rows: 4,
                                        value: editingEvent.template,
                                        onChange: {
                                            "SentNotificationsView[<Textarea>.onChange]": (e_5)=>setEditingEvent({
                                                    ...editingEvent,
                                                    template: e_5.target.value
                                                })
                                        }["SentNotificationsView[<Textarea>.onChange]"],
                                        className: "text-xs font-mono",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 315,
                                        columnNumber: 641
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 315,
                                columnNumber: 108
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                className: "pt-3 gap-2 sm:gap-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: {
                                            "SentNotificationsView[<Button>.onClick]": ()=>setEditingEvent(null)
                                        }["SentNotificationsView[<Button>.onClick]"],
                                        className: "text-xs",
                                        children: isRTL ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 320,
                                        columnNumber: 162
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold",
                                        children: isRTL ? "\u062D\u0641\u0638 \u0627\u0644\u0642\u0627\u0644\u0628" : "Save Template"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                        lineNumber: 322,
                                        columnNumber: 141
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                                lineNumber: 320,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                        lineNumber: 300,
                        columnNumber: 420
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
                lineNumber: 300,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
            lineNumber: 298,
            columnNumber: 26
        }, this);
        $[62] = editingEvent;
        $[63] = handleSaveEdit;
        $[64] = isRTL;
        $[65] = t7;
    } else {
        t7 = $[65];
    }
    let t8;
    if ($[66] !== t2 || $[67] !== t3 || $[68] !== t4 || $[69] !== t5 || $[70] !== t6 || $[71] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/settings/components/SentNotificationsView.tsx",
            lineNumber: 332,
            columnNumber: 10
        }, this);
        $[66] = t2;
        $[67] = t3;
        $[68] = t4;
        $[69] = t5;
        $[70] = t6;
        $[71] = t7;
        $[72] = t8;
    } else {
        t8 = $[72];
    }
    return t8;
}
_s(SentNotificationsView, "aiAIamI9lq12Ky/jsLDdJTqXs/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SentNotificationsView;
var _c;
__turbopack_context__.k.register(_c, "SentNotificationsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/PoliciesView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoliciesView",
    ()=>PoliciesView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function PoliciesView({ policies, onSave }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isRTL = language === "ar";
    const [selectedLang, setSelectedLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(policies);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 space-y-5 min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
                                children: isRTL ? "السياسات والشروط" : "Policies"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                children: isRTL ? "سياسة الخصوصية والشروط — تُعرض في الصفحات العامة /privacy و /terms" : "Privacy Policy and Terms — shown on the public /privacy and /terms pages"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{
                            onSave(form);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isRTL ? "تم حفظ السياسات بنجاح" : "Policies saved successfully");
                        },
                        className: "h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer self-start sm:self-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isRTL ? "حفظ" : "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedLang("ar"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer", selectedLang === "ar" ? "bg-teal-700 text-white font-semibold shadow-2xs" : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"),
                        children: "العربية"
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedLang("en"),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer", selectedLang === "en" ? "bg-teal-700 text-white font-semibold shadow-2xs" : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"),
                        children: "English"
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                className: "h-4 w-4 text-teal-600 dark:text-teal-400"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                                children: selectedLang === "en" ? "Privacy Policy · EN" : "سياسة الخصوصية · AR"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        dir: selectedLang === "ar" ? "rtl" : "ltr",
                        rows: 11,
                        value: selectedLang === "en" ? form.privacy_policy_en : form.privacy_policy_ar,
                        onChange: (e)=>setForm({
                                ...form,
                                [selectedLang === "en" ? "privacy_policy_en" : "privacy_policy_ar"]: e.target.value
                            }),
                        placeholder: selectedLang === "en" ? "Write the privacy policy in English..." : "اكتب سياسة الخصوصية باللغة العربية...",
                        className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-4 w-4 text-teal-600 dark:text-teal-400"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                                children: selectedLang === "en" ? "Terms & Conditions · EN" : "الشروط والأحكام · AR"
                            }, void 0, false, {
                                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        dir: selectedLang === "ar" ? "rtl" : "ltr",
                        rows: 11,
                        value: selectedLang === "en" ? form.terms_of_service_en : form.terms_of_service_ar,
                        onChange: (e_0)=>setForm({
                                ...form,
                                [selectedLang === "en" ? "terms_of_service_en" : "terms_of_service_ar"]: e_0.target.value
                            }),
                        placeholder: selectedLang === "en" ? "Write the terms & conditions in English..." : "اكتب الشروط والأحكام باللغة العربية...",
                        className: "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg border-gray-200 dark:border-neutral-800 bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/settings/components/PoliciesView.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_s(PoliciesView, "rv59I/uhCNdeFaFdRyZKiDH4HDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PoliciesView;
var _c;
__turbopack_context__.k.register(_c, "PoliciesView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/settings/components/OtherSettingsViews.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$GeneralSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/GeneralSettingsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$QuotationContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/QuotationContentView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$ContractContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/ContractContentView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PaymentMethodsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/PaymentMethodsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$IntegrationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/IntegrationsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$SentNotificationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/SentNotificationsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PoliciesView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/PoliciesView.tsx [app-client] (ecmascript)");
"use client";
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
"[project]/src/app/admin/settings/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteSettingsClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$SettingsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/SettingsSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$AppSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/AppSettingsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$OtherSettingsViews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/settings/components/OtherSettingsViews.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$GeneralSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/GeneralSettingsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$QuotationContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/QuotationContentView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$ContractContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/ContractContentView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PaymentMethodsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/PaymentMethodsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$IntegrationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/IntegrationsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$SentNotificationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/SentNotificationsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PoliciesView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/components/PoliciesView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/settings/data/mock-settings.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SiteSettingsClientPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "7d6ff934f03f4bf03aa9b40227cef125ee1b3c98cfd169ec77c53ff7d3942aee") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d6ff934f03f4bf03aa9b40227cef125ee1b3c98cfd169ec77c53ff7d3942aee";
    }
    const [activeMainTab, setActiveMainTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("app_settings");
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_COUNTRIES"]);
    const [currencies, setCurrencies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CURRENCIES"]);
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CITIES"]);
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_AREAS"]);
    const [amenities, setAmenities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_AMENITIES"]);
    const [propertyTypes, setPropertyTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PROPERTY_TYPES"]);
    const [generalSettings, setGeneralSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_GENERAL_SETTINGS"]);
    const [quotationSettings, setQuotationSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_QUOTATION_SETTINGS"]);
    const [contractSettings, setContractSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CONTRACT_SETTINGS"]);
    const [paymentMethods, setPaymentMethods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PAYMENT_METHODS"]);
    const [integrations, setIntegrations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_INTEGRATIONS"]);
    const [policies, setPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$data$2f$mock$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_POLICIES"]);
    let t0;
    if ($[1] !== activeMainTab) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$SettingsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsSidebar"], {
            activeTab: activeMainTab,
            onSelectTab: setActiveMainTab
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = activeMainTab;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== activeMainTab || $[4] !== amenities || $[5] !== areas || $[6] !== cities || $[7] !== countries || $[8] !== currencies || $[9] !== propertyTypes) {
        t1 = activeMainTab === "app_settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$AppSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppSettingsView"], {
            countries: countries,
            setCountries: setCountries,
            currencies: currencies,
            setCurrencies: setCurrencies,
            cities: cities,
            setCities: setCities,
            areas: areas,
            setAreas: setAreas,
            amenities: amenities,
            setAmenities: setAmenities,
            propertyTypes: propertyTypes,
            setPropertyTypes: setPropertyTypes
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 41,
            columnNumber: 46
        }, this);
        $[3] = activeMainTab;
        $[4] = amenities;
        $[5] = areas;
        $[6] = cities;
        $[7] = countries;
        $[8] = currencies;
        $[9] = propertyTypes;
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    let t2;
    if ($[11] !== activeMainTab || $[12] !== generalSettings) {
        t2 = activeMainTab === "general" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$GeneralSettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralSettingsView"], {
            settings: generalSettings,
            onSave: setGeneralSettings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 55,
            columnNumber: 41
        }, this);
        $[11] = activeMainTab;
        $[12] = generalSettings;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] !== activeMainTab || $[15] !== quotationSettings) {
        t3 = activeMainTab === "quotation_content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$QuotationContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuotationContentView"], {
            settings: quotationSettings,
            onSave: setQuotationSettings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 64,
            columnNumber: 51
        }, this);
        $[14] = activeMainTab;
        $[15] = quotationSettings;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== activeMainTab || $[18] !== contractSettings) {
        t4 = activeMainTab === "contract_content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$ContractContentView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractContentView"], {
            settings: contractSettings,
            onSave: setContractSettings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 73,
            columnNumber: 50
        }, this);
        $[17] = activeMainTab;
        $[18] = contractSettings;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== activeMainTab || $[21] !== paymentMethods) {
        t5 = activeMainTab === "payment_methods" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PaymentMethodsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentMethodsView"], {
            methods: paymentMethods,
            setMethods: setPaymentMethods
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 82,
            columnNumber: 49
        }, this);
        $[20] = activeMainTab;
        $[21] = paymentMethods;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    let t6;
    if ($[23] !== activeMainTab || $[24] !== integrations) {
        t6 = activeMainTab === "integrations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$IntegrationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntegrationsView"], {
            integrations: integrations,
            setIntegrations: setIntegrations
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 91,
            columnNumber: 46
        }, this);
        $[23] = activeMainTab;
        $[24] = integrations;
        $[25] = t6;
    } else {
        t6 = $[25];
    }
    let t7;
    if ($[26] !== activeMainTab) {
        t7 = activeMainTab === "sent_notifications" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$SentNotificationsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentNotificationsView"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 100,
            columnNumber: 52
        }, this);
        $[26] = activeMainTab;
        $[27] = t7;
    } else {
        t7 = $[27];
    }
    let t8;
    if ($[28] !== activeMainTab || $[29] !== policies) {
        t8 = activeMainTab === "policies" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$settings$2f$components$2f$PoliciesView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoliciesView"], {
            policies: policies,
            onSave: setPolicies
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 108,
            columnNumber: 42
        }, this);
        $[28] = activeMainTab;
        $[29] = policies;
        $[30] = t8;
    } else {
        t8 = $[30];
    }
    let t9;
    if ($[31] !== t1 || $[32] !== t2 || $[33] !== t3 || $[34] !== t4 || $[35] !== t5 || $[36] !== t6 || $[37] !== t7 || $[38] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 w-full min-w-0",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[31] = t1;
        $[32] = t2;
        $[33] = t3;
        $[34] = t4;
        $[35] = t5;
        $[36] = t6;
        $[37] = t7;
        $[38] = t8;
        $[39] = t9;
    } else {
        t9 = $[39];
    }
    let t10;
    if ($[40] !== t0 || $[41] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 max-w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-8 items-start",
                children: [
                    t0,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/settings/page.client.tsx",
                lineNumber: 132,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/settings/page.client.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[40] = t0;
        $[41] = t9;
        $[42] = t10;
    } else {
        t10 = $[42];
    }
    return t10;
}
_s(SiteSettingsClientPage, "a9WfsDpFl0JBgC19GOveb0hXAC4=");
_c = SiteSettingsClientPage;
var _c;
__turbopack_context__.k.register(_c, "SiteSettingsClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c2124f6d._.js.map