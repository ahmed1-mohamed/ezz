(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/features/ads/components/view/AdBasicInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdBasicInfo",
    ()=>AdBasicInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AdBasicInfo = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdBasicInfo(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    if ($[0] !== "b490452264d0c4f01f90decb76afa4a9df55d0d48f92fa8a86a631993538d9b1") {
        for(let $i = 0; $i < 84; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b490452264d0c4f01f90decb76afa4a9df55d0d48f92fa8a86a631993538d9b1";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let notSetVal;
    let t1;
    let t10;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== adDetails?.campaign_id || $[2] !== adDetails?.creative_id || $[3] !== adDetails?.entity_type || $[4] !== adDetails?.placement_id || $[5] !== t) {
        notSetVal = t("ads.details.notSet") || "Not set";
        const getEntityTypeLabel = {
            "AdBasicInfo[getEntityTypeLabel]": (type)=>{
                if (!type) {
                    return notSetVal;
                }
                const lowerType = type.toLowerCase();
                if (lowerType === "projects") {
                    return t("ads.filters.project") || "Project";
                }
                if (lowerType === "properties") {
                    return t("ads.filters.property") || "Property";
                }
                return type;
            }
        }["AdBasicInfo[getEntityTypeLabel]"];
        t9 = "border-t pt-4";
        let t11;
        if ($[17] !== t) {
            t11 = t("ads.details.basicInfo") || "Basic Information";
            $[17] = t;
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        if ($[19] !== t11) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-medium text-gray-900 mb-3",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this);
            $[19] = t11;
            $[20] = t10;
        } else {
            t10 = $[20];
        }
        t5 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
        let t12;
        if ($[21] !== t) {
            t12 = t("ads.details.creativeId") || "Creative ID";
            $[21] = t;
            $[22] = t12;
        } else {
            t12 = $[22];
        }
        let t13;
        if ($[23] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-500 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                    lineNumber: 85,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this);
            $[23] = t12;
            $[24] = t13;
        } else {
            t13 = $[24];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-gray-900",
                    children: adDetails?.creative_id || notSetVal
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                    lineNumber: 91,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        let t14;
        if ($[25] !== t) {
            t14 = t("ads.details.campaignId") || "Campaign ID";
            $[25] = t;
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        let t15;
        if ($[27] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-500 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                    lineNumber: 102,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this);
            $[27] = t14;
            $[28] = t15;
        } else {
            t15 = $[28];
        }
        const t16 = adDetails?.campaign_id || notSetVal;
        let t17;
        if ($[29] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-gray-900",
                children: t16
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this);
            $[29] = t16;
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        if ($[31] !== t15 || $[32] !== t17) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-50 rounded-lg",
                children: [
                    t15,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 118,
                columnNumber: 12
            }, this);
            $[31] = t15;
            $[32] = t17;
            $[33] = t7;
        } else {
            t7 = $[33];
        }
        let t18;
        if ($[34] !== t) {
            t18 = t("ads.details.placementId") || "Placement ID";
            $[34] = t;
            $[35] = t18;
        } else {
            t18 = $[35];
        }
        let t19;
        if ($[36] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-500 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                    lineNumber: 135,
                    columnNumber: 73
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this);
            $[36] = t18;
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        const t20 = adDetails?.placement_id || notSetVal;
        let t21;
        if ($[38] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-gray-900",
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this);
            $[38] = t20;
            $[39] = t21;
        } else {
            t21 = $[39];
        }
        if ($[40] !== t19 || $[41] !== t21) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-50 rounded-lg",
                children: [
                    t19,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 151,
                columnNumber: 12
            }, this);
            $[40] = t19;
            $[41] = t21;
            $[42] = t8;
        } else {
            t8 = $[42];
        }
        t3 = "p-4 bg-gray-50 rounded-lg";
        let t22;
        if ($[43] !== t) {
            t22 = t("ads.details.entityType") || "Entity Type";
            $[43] = t;
            $[44] = t22;
        } else {
            t22 = $[44];
        }
        if ($[45] !== t22) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-gray-500 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                    lineNumber: 168,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 168,
                columnNumber: 12
            }, this);
            $[45] = t22;
            $[46] = t4;
        } else {
            t4 = $[46];
        }
        t1 = "font-medium text-gray-900 capitalize";
        t2 = getEntityTypeLabel(adDetails?.entity_type);
        $[1] = adDetails?.campaign_id;
        $[2] = adDetails?.creative_id;
        $[3] = adDetails?.entity_type;
        $[4] = adDetails?.placement_id;
        $[5] = t;
        $[6] = notSetVal;
        $[7] = t1;
        $[8] = t10;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        notSetVal = $[6];
        t1 = $[7];
        t10 = $[8];
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[47] !== t1 || $[48] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[47] = t1;
        $[48] = t2;
        $[49] = t11;
    } else {
        t11 = $[49];
    }
    let t12;
    if ($[50] !== t11 || $[51] !== t3 || $[52] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[50] = t11;
        $[51] = t3;
        $[52] = t4;
        $[53] = t12;
    } else {
        t12 = $[53];
    }
    let t13;
    if ($[54] !== t) {
        t13 = t("ads.details.entityId") || "Entity ID";
        $[54] = t;
        $[55] = t13;
    } else {
        t13 = $[55];
    }
    let t14;
    if ($[56] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 234,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[56] = t13;
        $[57] = t14;
    } else {
        t14 = $[57];
    }
    const t15 = adDetails?.entity_id || notSetVal;
    let t16;
    if ($[58] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[58] = t15;
        $[59] = t16;
    } else {
        t16 = $[59];
    }
    let t17;
    if ($[60] !== t14 || $[61] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[60] = t14;
        $[61] = t16;
        $[62] = t17;
    } else {
        t17 = $[62];
    }
    let t18;
    if ($[63] !== t) {
        t18 = t("ads.details.weightPriority") || "Weight/Priority";
        $[63] = t;
        $[64] = t18;
    } else {
        t18 = $[64];
    }
    let t19;
    if ($[65] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
                lineNumber: 268,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[65] = t18;
        $[66] = t19;
    } else {
        t19 = $[66];
    }
    const t20 = adDetails?.weight || notSetVal;
    let t21;
    if ($[67] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[67] = t20;
        $[68] = t21;
    } else {
        t21 = $[68];
    }
    let t22;
    if ($[69] !== t19 || $[70] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[69] = t19;
        $[70] = t21;
        $[71] = t22;
    } else {
        t22 = $[71];
    }
    let t23;
    if ($[72] !== t12 || $[73] !== t17 || $[74] !== t22 || $[75] !== t5 || $[76] !== t6 || $[77] !== t7 || $[78] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                t12,
                t17,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[72] = t12;
        $[73] = t17;
        $[74] = t22;
        $[75] = t5;
        $[76] = t6;
        $[77] = t7;
        $[78] = t8;
        $[79] = t23;
    } else {
        t23 = $[79];
    }
    let t24;
    if ($[80] !== t10 || $[81] !== t23 || $[82] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdBasicInfo.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[80] = t10;
        $[81] = t23;
        $[82] = t9;
        $[83] = t24;
    } else {
        t24 = $[83];
    }
    return t24;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdBasicInfo;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdBasicInfo$memo");
__turbopack_context__.k.register(_c1, "AdBasicInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdViewUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "getCountryName",
    ()=>getCountryName,
    "getPlatformIcon",
    ()=>getPlatformIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
;
const getPlatformIcon = (platform)=>{
    switch(platform?.toLowerCase()){
        case "web":
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                className: "w-4 h-4"
            });
        case "mobile":
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                className: "w-4 h-4"
            });
        default:
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "w-4 h-4"
            });
    }
};
const formatDate = (dateString, t)=>{
    if (!dateString) return t("ads.details.notSet") || "Not set";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
};
const getCountryName = (countryId, t)=>{
    switch(countryId){
        case 1:
            return t("common.countries.egypt") || "Egypt";
        case 2:
            return t("common.countries.uae") || "UAE";
        case 3:
            return t("common.countries.oman") || "Oman";
        default:
            return t("ads.details.notSet") || "Not set";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdDetailsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdDetailsSection",
    ()=>AdDetailsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdViewUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AdDetailsSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdDetailsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(89);
    if ($[0] !== "2420f2b7a43db96890cd82a0e1d9f1815dfc57b829dac3e73ec6ddc1f6131f07") {
        for(let $i = 0; $i < 89; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2420f2b7a43db96890cd82a0e1d9f1815dfc57b829dac3e73ec6ddc1f6131f07";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.notSet") || "Not set";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const notSetVal = t1;
    let t2;
    if ($[3] !== t) {
        t2 = t("ads.details.adDetails") || "Ad Details";
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("ads.details.title") || "Title";
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
                lineNumber: 69,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = adDetails?.title || notSetVal;
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t) {
        t9 = t("ads.details.subtitle") || "Subtitle";
        $[16] = t;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
                lineNumber: 103,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const t11 = adDetails?.subtitle || notSetVal;
    let t12;
    if ($[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium text-gray-900 prose prose-sm max-w-none",
            dangerouslySetInnerHTML: {
                __html: t11
            }
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t) {
        t14 = t("ads.details.typeFormat") || "Type/Format";
        $[25] = t;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
                lineNumber: 139,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== adDetails || $[30] !== notSetVal || $[31] !== t) {
        t16 = adDetails?.placement?.format ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) !== `ads.filters.${adDetails.placement.format.toLowerCase()}` ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) : adDetails.placement.format : notSetVal;
        $[29] = adDetails;
        $[30] = notSetVal;
        $[31] = t;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t15 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const t19 = adDetails?.placement?.platform || "";
    let t20;
    if ($[38] !== t19) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformIcon"])(t19);
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== t) {
        t21 = t("ads.details.platform") || "Platform";
        $[40] = t;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t20 || $[45] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t22;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== adDetails || $[48] !== notSetVal || $[49] !== t) {
        t24 = adDetails?.placement?.platform ? t(`ads.filters.${adDetails.placement.platform.toLowerCase()}`) !== `ads.filters.${adDetails.placement.platform.toLowerCase()}` ? t(`ads.filters.${adDetails.placement.platform.toLowerCase()}`) : adDetails.placement.platform : notSetVal;
        $[47] = adDetails;
        $[48] = notSetVal;
        $[49] = t;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900 capitalize",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t23 || $[54] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[53] = t23;
        $[54] = t25;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t) {
        t28 = t("ads.details.country") || "Country";
        $[57] = t;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
                    lineNumber: 250,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[59] = t28;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    const t30 = adDetails?.country_id;
    let t31;
    if ($[61] !== t || $[62] !== t30) {
        t31 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryName"])(t30, t);
        $[61] = t;
        $[62] = t30;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[64] = t31;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    let t33;
    if ($[66] !== t29 || $[67] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[66] = t29;
        $[67] = t32;
        $[68] = t33;
    } else {
        t33 = $[68];
    }
    let t34;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[69] = t34;
    } else {
        t34 = $[69];
    }
    let t35;
    if ($[70] !== t) {
        t35 = t("ads.details.location") || "Location";
        $[70] = t;
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    let t36;
    if ($[72] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t35
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
                    lineNumber: 300,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[72] = t35;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    const t37 = adDetails?.placement?.location || notSetVal;
    let t38;
    if ($[74] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900 capitalize",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[74] = t37;
        $[75] = t38;
    } else {
        t38 = $[75];
    }
    let t39;
    if ($[76] !== t36 || $[77] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t36,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[76] = t36;
        $[77] = t38;
        $[78] = t39;
    } else {
        t39 = $[78];
    }
    let t40;
    if ($[79] !== t13 || $[80] !== t18 || $[81] !== t26 || $[82] !== t33 || $[83] !== t39 || $[84] !== t8) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
            children: [
                t8,
                t13,
                t18,
                t26,
                t33,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[79] = t13;
        $[80] = t18;
        $[81] = t26;
        $[82] = t33;
        $[83] = t39;
        $[84] = t8;
        $[85] = t40;
    } else {
        t40 = $[85];
    }
    let t41;
    if ($[86] !== t3 || $[87] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t3,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdDetailsSection.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[86] = t3;
        $[87] = t40;
        $[88] = t41;
    } else {
        t41 = $[88];
    }
    return t41;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdDetailsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdDetailsSection$memo");
__turbopack_context__.k.register(_c1, "AdDetailsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdCTADetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdCTADetails",
    ()=>AdCTADetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AdCTADetails = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdCTADetails(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "f7999a7a6f7c827f5ed06dd99311238cc2a47040b6e16ee3c50d28112d210b8b") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7999a7a6f7c827f5ed06dd99311238cc2a47040b6e16ee3c50d28112d210b8b";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.notSet") || "Not set";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const notSetVal = t1;
    let t2;
    if ($[3] !== t) {
        t2 = t("ads.details.ctaDetails") || "CTA Details";
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("ads.details.ctaLabel") || "CTA Label";
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
                lineNumber: 62,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = adDetails?.cta_label || notSetVal;
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t) {
        t10 = t("ads.details.ctaUrl") || "CTA URL";
        $[17] = t;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
                    lineNumber: 103,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== adDetails || $[22] !== notSetVal) {
        t12 = adDetails?.cta_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: adDetails.cta_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-medium text-teal-600 hover:text-teal-700 break-all",
            children: adDetails.cta_url
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 111,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: notSetVal
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 111,
            columnNumber: 196
        }, this);
        $[21] = adDetails;
        $[22] = notSetVal;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t13 || $[28] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t8;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t14 || $[31] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t3,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdCTADetails.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t3;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    return t15;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdCTADetails;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdCTADetails$memo");
__turbopack_context__.k.register(_c1, "AdCTADetails");
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
"[project]/src/features/ads/components/view/AdImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdImage",
    ()=>AdImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AdImage = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "fb747e6580dd7ab399aff8a1cdc03545f86f4cad7bfef658bc60e0f00cf38445") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb747e6580dd7ab399aff8a1cdc03545f86f4cad7bfef658bc60e0f00cf38445";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (!adDetails?.image_url) {
        return null;
    }
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.image") || "Image";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = t("ads.details.imageUrl") || "Image URL";
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-2",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
                    lineNumber: 64,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== adDetails.image_url) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: adDetails.image_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-teal-600 hover:text-teal-700 break-all",
            children: adDetails.image_url
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[10] = adDetails.image_url;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== adDetails.title || $[13] !== t) {
        t7 = adDetails.title || t("ads.details.untitledAd") || "Ad image";
        $[12] = adDetails.title;
        $[13] = t;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== adDetails.image_url || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: adDetails.image_url,
                alt: t7,
                width: 448,
                height: 252,
                fallbackSrc: "/images/default-logo.svg",
                className: "max-w-md w-full h-auto rounded-lg border border-gray-200"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
                lineNumber: 89,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[15] = adDetails.image_url;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t5 || $[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t2 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t2,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdImage.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[22] = t2;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    return t10;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdImage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdImage$memo");
__turbopack_context__.k.register(_c1, "AdImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdPlacementDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdPlacementDetails",
    ()=>AdPlacementDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AdPlacementDetails = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdPlacementDetails(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(79);
    if ($[0] !== "a6cb589f85e23429174bbe1fc8b5f780718b33d31003e609f97b38c07ae7ff2f") {
        for(let $i = 0; $i < 79; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6cb589f85e23429174bbe1fc8b5f780718b33d31003e609f97b38c07ae7ff2f";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.notSet") || "Not set";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const notSetVal = t1;
    if (!adDetails?.placement) {
        return null;
    }
    let t2;
    if ($[3] !== t) {
        t2 = t("ads.details.placementDetails") || "Placement Details";
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("ads.details.placementId") || "Placement ID";
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 70,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== adDetails.placement.placement_id) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: adDetails.placement.placement_id
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = adDetails.placement.placement_id;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t) {
        t8 = t("ads.details.code") || "Code";
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 103,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = adDetails.placement.code || notSetVal;
    let t11;
    if ($[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t) {
        t13 = t("ads.details.name") || "Name";
        $[25] = t;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 137,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    const t15 = adDetails.placement.name || notSetVal;
    let t16;
    if ($[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t14 || $[32] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t16;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t) {
        t18 = t("ads.details.format") || "Format";
        $[34] = t;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 171,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== adDetails.placement.format || $[39] !== notSetVal || $[40] !== t) {
        t20 = adDetails.placement.format ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) !== `ads.filters.${adDetails.placement.format.toLowerCase()}` ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) : adDetails.placement.format : notSetVal;
        $[38] = adDetails.placement.format;
        $[39] = notSetVal;
        $[40] = t;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900 capitalize",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t19 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t) {
        t23 = t("ads.details.billingUnit") || "Billing Unit";
        $[47] = t;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 214,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== adDetails.placement.billing_unit || $[52] !== notSetVal || $[53] !== t) {
        t25 = adDetails.placement.billing_unit ? t(`activity.filters.${adDetails.placement.billing_unit.toLowerCase()}`) !== `activity.filters.${adDetails.placement.billing_unit.toLowerCase()}` ? t(`activity.filters.${adDetails.placement.billing_unit.toLowerCase()}`) : adDetails.placement.billing_unit : notSetVal;
        $[51] = adDetails.placement.billing_unit;
        $[52] = notSetVal;
        $[53] = t;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900 capitalize",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[55] = t25;
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    let t27;
    if ($[57] !== t24 || $[58] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[57] = t24;
        $[58] = t26;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] !== t) {
        t28 = t("ads.details.defaultPriceCredits") || "Default Price Credits";
        $[60] = t;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: t28
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
                lineNumber: 257,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[62] = t28;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    const t30 = adDetails.placement.default_price_credits || notSetVal;
    let t31;
    if ($[64] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[64] = t30;
        $[65] = t31;
    } else {
        t31 = $[65];
    }
    let t32;
    if ($[66] !== t29 || $[67] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[66] = t29;
        $[67] = t31;
        $[68] = t32;
    } else {
        t32 = $[68];
    }
    let t33;
    if ($[69] !== t12 || $[70] !== t17 || $[71] !== t22 || $[72] !== t27 || $[73] !== t32 || $[74] !== t7) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [
                t7,
                t12,
                t17,
                t22,
                t27,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[69] = t12;
        $[70] = t17;
        $[71] = t22;
        $[72] = t27;
        $[73] = t32;
        $[74] = t7;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== t3 || $[77] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t3,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdPlacementDetails.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[76] = t3;
        $[77] = t33;
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    return t34;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdPlacementDetails;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdPlacementDetails$memo");
__turbopack_context__.k.register(_c1, "AdPlacementDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdEntityDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdEntityDetails",
    ()=>AdEntityDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AdEntityDetails = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdEntityDetails(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "881fc0878f66c07cd9c86cec598aa4f02736b1e1e86e8532c298e02c59f57545") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "881fc0878f66c07cd9c86cec598aa4f02736b1e1e86e8532c298e02c59f57545";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.notSet") || "Not set";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const notSetVal = t1;
    if (!adDetails?.entity) {
        return null;
    }
    let t2;
    if ($[3] !== t) {
        t2 = t("ads.details.linkedEntity") || "Linked Entity";
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== adDetails.entity.available_units || $[8] !== adDetails.entity.bathrooms || $[9] !== adDetails.entity.bedrooms || $[10] !== adDetails.entity.price || $[11] !== adDetails.entity.project_id || $[12] !== adDetails.entity.project_name || $[13] !== adDetails.entity.project_type || $[14] !== adDetails.entity.property_id || $[15] !== adDetails.entity.property_name || $[16] !== adDetails.entity.property_no || $[17] !== adDetails.entity.size || $[18] !== adDetails.entity.status || $[19] !== adDetails.entity.total_units || $[20] !== adDetails.entity_type || $[21] !== notSetVal || $[22] !== t) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: adDetails.entity_type === "PROJECTS" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.projectId") || "Project ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 225
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.project_id || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.projectName") || "Project Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 504
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 444
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.project_name || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 591
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 401
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.projectType") || "Project Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 789
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 729
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900 capitalize",
                                children: adDetails.entity.project_type || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 876
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 686
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.status") || "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 1085
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1025
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900 capitalize",
                                children: adDetails.entity.status || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1161
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 982
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.totalUnits") || "Total Units"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 1364
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1304
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.total_units ?? notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1449
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 1261
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.availableUnits") || "Available Units"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 1646
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1586
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.available_units ?? notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1739
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 1543
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.propertyId") || "Property ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 1948
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 1888
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.property_id || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2033
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 1845
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.propertyName") || "Property Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 2230
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2170
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.property_name || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2319
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 2127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.propertyNo") || "Property No"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 2518
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2458
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.property_no || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2603
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 2415
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.status") || "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 2800
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2740
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900 capitalize",
                                children: adDetails.entity.status || notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 2876
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 2697
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.price") || "Price"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 3079
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3019
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.price ? `$${parseFloat(adDetails.entity.price).toLocaleString()}` : notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3153
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 2976
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.size") || "Size"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 3403
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3343
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.size ? `${adDetails.entity.size} sqm` : notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3475
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 3300
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.bedrooms") || "Bedrooms"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 3697
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3637
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.bedrooms ?? notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3777
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 3594
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: t("ads.details.bathrooms") || "Bathrooms"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                    lineNumber: 70,
                                    columnNumber: 3971
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 3911
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-gray-900",
                                children: adDetails.entity.bathrooms ?? notSetVal
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 4053
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
                        lineNumber: 70,
                        columnNumber: 3868
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = adDetails.entity.available_units;
        $[8] = adDetails.entity.bathrooms;
        $[9] = adDetails.entity.bedrooms;
        $[10] = adDetails.entity.price;
        $[11] = adDetails.entity.project_id;
        $[12] = adDetails.entity.project_name;
        $[13] = adDetails.entity.project_type;
        $[14] = adDetails.entity.property_id;
        $[15] = adDetails.entity.property_name;
        $[16] = adDetails.entity.property_no;
        $[17] = adDetails.entity.size;
        $[18] = adDetails.entity.status;
        $[19] = adDetails.entity.total_units;
        $[20] = adDetails.entity_type;
        $[21] = notSetVal;
        $[22] = t;
        $[23] = t4;
    } else {
        t4 = $[23];
    }
    let t5;
    if ($[24] !== t3 || $[25] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdEntityDetails.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
    } else {
        t5 = $[26];
    }
    return t5;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdEntityDetails;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdEntityDetails$memo");
__turbopack_context__.k.register(_c1, "AdEntityDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/view/AdTimestamps.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdTimestamps",
    ()=>AdTimestamps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdViewUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AdTimestamps = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function AdTimestamps(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "262c9fe89efd85edad65a4ded5e4197231d5e5c6a53c2f966a877d2b04a57ed3") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "262c9fe89efd85edad65a4ded5e4197231d5e5c6a53c2f966a877d2b04a57ed3";
    }
    const { adDetails } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("ads.details.timestamps") || "Timestamps";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-medium text-gray-900 mb-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = t("ads.details.createdAt") || "Created At";
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                    lineNumber: 62,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = adDetails?.created_at;
    let t7;
    if ($[10] !== t || $[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(t6, t);
        $[10] = t;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t5 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t) {
        t11 = t("ads.details.updatedAt") || "Updated At";
        $[19] = t;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-gray-500 mb-1",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                    lineNumber: 112,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    const t13 = adDetails?.updated_at;
    let t14;
    if ($[23] !== t || $[24] !== t13) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(t13, t);
        $[23] = t;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t12 || $[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== adDetails || $[32] !== t) {
        t17 = adDetails?.deleted_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-gray-500 mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                            lineNumber: 147,
                            columnNumber: 139
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: t("ads.details.deletedAt") || "Deleted At"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                            lineNumber: 147,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                    lineNumber: 147,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium text-gray-900",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdViewUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(adDetails.deleted_at, t)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
                    lineNumber: 147,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 147,
            columnNumber: 36
        }, this);
        $[31] = adDetails;
        $[32] = t;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t16 || $[35] !== t17 || $[36] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [
                t9,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[34] = t16;
        $[35] = t17;
        $[36] = t9;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t18 || $[39] !== t2) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            children: [
                t2,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/view/AdTimestamps.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t2;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    return t19;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdTimestamps;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdTimestamps$memo");
__turbopack_context__.k.register(_c1, "AdTimestamps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/ads/[id]/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewAdPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdBasicInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdBasicInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdDetailsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdDetailsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdCTADetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdCTADetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdPlacementDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdPlacementDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdEntityDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdEntityDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdTimestamps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/view/AdTimestamps.tsx [app-client] (ecmascript)");
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
function ViewAdPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [adDetails, setAdDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewAdPage.useEffect": ()=>{
            if (id && session?.user?.accessToken) {
                fetchAdDetails();
            }
        }
    }["ViewAdPage.useEffect"], [
        id,
        session
    ]);
    const fetchAdDetails = async ()=>{
        if (!session?.user?.accessToken || !id) return;
        setLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAd"])(id, session.user?.accessToken);
            const actualData = response?.data || response;
            setAdDetails(actualData);
        } catch (error) {
            console.error("Error fetching ad details:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error?.response?.data?.message || t("ads.details.failedLoadDetails") || "Failed to load ad details");
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[60vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm text-gray-600",
                        children: t("ads.details.loading") || "Loading ad details..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
            lineNumber: 52,
            columnNumber: 12
        }, this);
    }
    if (!adDetails && !loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    onClick: ()=>router.back(),
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        t("ads.details.backToAds") || "Back to Ads"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-gray-500",
                    children: t("ads.details.notFound") || "Ad not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-8xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>router.back(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            t("ads.details.backToAds") || "Back to Ads"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-teal-600 hover:bg-teal-700 text-white",
                        onClick: ()=>router.push(`/admin/ads/${id}/edit`),
                        children: t("ads.details.editAd") || "Edit Ad"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-teal-600 font-semibold text-lg",
                                            children: (adDetails?.placement?.format || "A").charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-gray-900",
                                                children: adDetails?.title || adDetails?.creative_title || t("ads.details.untitledAd") || "Untitled Ad"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    t("ads.details.creativeId") || "Creative ID",
                                                    ": ",
                                                    adDetails?.creative_id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: adDetails?.status === "active" ? "success" : "secondary",
                                className: adDetails?.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800",
                                children: adDetails?.status === "active" ? t("ads.details.active") || "Active" : t("ads.details.inactive") || "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdBasicInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBasicInfo"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdDetailsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdDetailsSection"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdCTADetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCTADetails"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdImage"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdPlacementDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlacementDetails"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdEntityDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdEntityDetails"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$view$2f$AdTimestamps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdTimestamps"], {
                        adDetails: adDetails
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/ads/[id]/page.client.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(ViewAdPage, "4WyJIOExF9tJaLy2WjRx7cnw078=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ViewAdPage;
var _c;
__turbopack_context__.k.register(_c, "ViewAdPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ca0b326e._.js.map