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
"[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverviewTab",
    ()=>OverviewTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
"use client";
;
;
;
function OverviewTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(210);
    if ($[0] !== "4c5a3c6e517b5baa12d55186cf4517d61016a131d3d34686fc4a071254f71e1f") {
        for(let $i = 0; $i < 210; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c5a3c6e517b5baa12d55186cf4517d61016a131d3d34686fc4a071254f71e1f";
    }
    const { expert, t, formatDate, getStatusBadge } = t0;
    const ratingAvg = typeof expert.rating_avg === "number" ? expert.rating_avg : parseFloat(expert.rating_avg || "0");
    const totalBookings = expert.total_bookings ?? expert.consultions ?? 0;
    const respondedBookings = expert.responded_bookings ?? 0;
    const yearsExp = expert.years_experience ?? 0;
    const currency = expert.currency || "AED";
    const startingPrice = expert.starting_from ?? 0;
    let t1;
    if ($[1] !== expert.stars_distribution) {
        t1 = Array.isArray(expert.stars_distribution) && expert.stars_distribution.length > 0 ? expert.stars_distribution : [
            5,
            4,
            3,
            2,
            1
        ].map(_OverviewTabAnonymous);
        $[1] = expert.stars_distribution;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const starDistList = t1;
    const totalReviewsInDist = starDistList.reduce(_OverviewTabStarDistListReduce, 0);
    let t2;
    if ($[3] !== expert.cover_photo) {
        t2 = expert.cover_photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-48 md:h-64 rounded-xl overflow-hidden relative border border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: expert.cover_photo,
                alt: "Cover",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                lineNumber: 44,
                columnNumber: 128
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 44,
            columnNumber: 32
        }, this);
        $[3] = expert.cover_photo;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== expert.bio || $[6] !== t) {
        t3 = expert.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 border border-gray-100 rounded-lg p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "h-4 w-4 text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 52,
                            columnNumber: 136
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm font-semibold text-gray-900",
                            children: t("experts.details.bio") || "About Expert"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 52,
                            columnNumber: 178
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 52,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700 leading-relaxed whitespace-pre-line",
                    children: expert.bio
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 52,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 52,
            columnNumber: 24
        }, this);
        $[5] = expert.bio;
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t) {
        t4 = t("experts.details.profileSummary") || "Profile Summary";
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-semibold text-gray-900 mb-3",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t) {
        t7 = t("experts.details.totalConsultations") || "Total Bookings";
        $[13] = t;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 92,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== totalBookings) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: totalBookings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[17] = totalBookings;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t) {
        t10 = t("experts.details.responded") || "responded";
        $[19] = t;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== respondedBookings || $[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                respondedBookings,
                " ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[21] = respondedBookings;
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t8 || $[26] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t8,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t8;
        $[26] = t9;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t) {
        t14 = t("experts.details.avgRating") || "Average Rating";
        $[29] = t;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 150,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== ratingAvg) {
        t16 = ratingAvg.toFixed(1);
        $[33] = ratingAvg;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    const t18 = expert.rating_count || 0;
    let t19;
    if ($[37] !== t) {
        t19 = t("experts.details.reviews") || "reviews";
        $[37] = t;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t18 || $[40] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                t18,
                " ",
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t19;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t15 || $[43] !== t17 || $[44] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t15,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t17;
        $[44] = t20;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t) {
        t23 = t("experts.details.experience") || "Experience";
        $[47] = t;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: t23
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 217,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t) {
        t25 = t("experts.details.years") || "Years";
        $[51] = t;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-normal text-gray-600",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== t26 || $[56] !== yearsExp) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: [
                yearsExp,
                " ",
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[55] = t26;
        $[56] = yearsExp;
        $[57] = t27;
    } else {
        t27 = $[57];
    }
    const t28 = expert.categories?.length || 0;
    let t29;
    if ($[58] !== t) {
        t29 = t("experts.details.specializationsCount") || "specializations";
        $[58] = t;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== t28 || $[61] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                t28,
                " ",
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[60] = t28;
        $[61] = t29;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t24 || $[64] !== t27 || $[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t24,
                t27,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[63] = t24;
        $[64] = t27;
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== t) {
        t33 = t("experts.details.startingFrom") || "Starting From";
        $[68] = t;
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-2",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 293,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[70] = t33;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] !== currency) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-normal text-gray-600",
            children: currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[72] = currency;
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] !== startingPrice || $[75] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: [
                startingPrice,
                " ",
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[74] = startingPrice;
        $[75] = t35;
        $[76] = t36;
    } else {
        t36 = $[76];
    }
    const t37 = expert.packages?.length || 0;
    let t38;
    if ($[77] !== t) {
        t38 = t("experts.details.packages") || "packages available";
        $[77] = t;
        $[78] = t38;
    } else {
        t38 = $[78];
    }
    let t39;
    if ($[79] !== t37 || $[80] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                t37,
                " ",
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[79] = t37;
        $[80] = t38;
        $[81] = t39;
    } else {
        t39 = $[81];
    }
    let t40;
    if ($[82] !== t34 || $[83] !== t36 || $[84] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t34,
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[82] = t34;
        $[83] = t36;
        $[84] = t39;
        $[85] = t40;
    } else {
        t40 = $[85];
    }
    let t41;
    if ($[86] !== t12 || $[87] !== t21 || $[88] !== t31 || $[89] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
                t12,
                t21,
                t31,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[86] = t12;
        $[87] = t21;
        $[88] = t31;
        $[89] = t40;
        $[90] = t41;
    } else {
        t41 = $[90];
    }
    let t42;
    if ($[91] !== t41 || $[92] !== t5) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[91] = t41;
        $[92] = t5;
        $[93] = t42;
    } else {
        t42 = $[93];
    }
    let t43;
    if ($[94] !== currency || $[95] !== expert.packages || $[96] !== t) {
        t43 = Array.isArray(expert.packages) && expert.packages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-semibold text-gray-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "h-4 w-4 text-teal-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 366,
                                columnNumber: 212
                            }, this),
                            t("experts.details.packages") || "Consultation Packages",
                            " (",
                            expert.packages.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                        lineNumber: 366,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 366,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                    children: expert.packages.map({
                        "OverviewTab[expert.packages.map()]": (pkg, idx)=>{
                            const pkgName = pkg.package_name || pkg.name || `Package #${idx + 1}`;
                            const pkgMinutes = pkg.minutes || 30;
                            const pkgPrice = pkg.price_cents ?? pkg.price ?? 0;
                            const pkgCurrency = pkg.currency || currency;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white border border-gray-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "h-4 w-4 text-teal-600 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 294
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "font-semibold text-gray-900 text-sm truncate",
                                                            children: pkgName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 358
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 253
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs text-gray-500 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-3.5 w-3.5 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 507
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                pkgMinutes,
                                                                " ",
                                                                t("common.minutes") || "minutes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 554
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 439
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                            lineNumber: 372,
                                            columnNumber: 221
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-end flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md inline-block",
                                                children: [
                                                    pkgPrice,
                                                    " ",
                                                    pkgCurrency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                lineNumber: 372,
                                                columnNumber: 666
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                            lineNumber: 372,
                                            columnNumber: 626
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 372,
                                    columnNumber: 165
                                }, this)
                            }, pkg.package_id || idx, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 372,
                                columnNumber: 20
                            }, this);
                        }
                    }["OverviewTab[expert.packages.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 366,
                    columnNumber: 353
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 366,
            columnNumber: 75
        }, this);
        $[94] = currency;
        $[95] = expert.packages;
        $[96] = t;
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== expert.availability_exceptions || $[99] !== expert.availability_rules || $[100] !== formatDate || $[101] !== t) {
        t44 = (expert.availability_rules?.length > 0 || expert.availability_exceptions?.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-sm font-semibold text-gray-900 flex items-center gap-2 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                            className: "h-4 w-4 text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 384,
                            columnNumber: 186
                        }, this),
                        t("experts.details.availability") || "Availability"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 384,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        expert.availability_rules?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3",
                                    children: t("experts.details.regularRules") || "Regular Rules"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 384,
                                    columnNumber: 455
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: expert.availability_rules.map({
                                        "OverviewTab[expert.availability_rules.map()]": (rule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700 font-medium",
                                                        children: t(`common.days.${rule.dow_bitmask}`) || `Day Bitmask: ${rule.dow_bitmask}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 149
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: [
                                                            rule.time_start,
                                                            " - ",
                                                            rule.time_end
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 276
                                                    }, this)
                                                ]
                                            }, rule.rule_id, true, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                lineNumber: 385,
                                                columnNumber: 71
                                            }, this)
                                    }["OverviewTab[expert.availability_rules.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 384,
                                    columnNumber: 596
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 384,
                            columnNumber: 391
                        }, this),
                        expert.availability_exceptions?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                            lineNumber: 386,
                                            columnNumber: 294
                                        }, this),
                                        t("experts.details.exceptions") || "Exceptions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 386,
                                    columnNumber: 188
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-h-48 overflow-y-auto",
                                    children: expert.availability_exceptions.map({
                                        "OverviewTab[expert.availability_exceptions.map()]": (exc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col text-sm border-b border-gray-100 last:border-0 pb-2 last:pb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700 font-medium",
                                                                children: formatDate(exc.start_date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 242
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-2 py-0.5 rounded-full ${exc.available ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                                                                children: exc.available ? "Available" : "Unavailable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 321
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 191
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-xs",
                                                        children: [
                                                            exc.start_date.split(" ")[1],
                                                            " - ",
                                                            exc.end_date.split(" ")[1]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 507
                                                    }, this)
                                                ]
                                            }, exc.exception_id, true, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                                lineNumber: 387,
                                                columnNumber: 75
                                            }, this)
                                    }["OverviewTab[expert.availability_exceptions.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 386,
                                    columnNumber: 389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 386,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 384,
                    columnNumber: 294
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 384,
            columnNumber: 100
        }, this);
        $[98] = expert.availability_exceptions;
        $[99] = expert.availability_rules;
        $[100] = formatDate;
        $[101] = t;
        $[102] = t44;
    } else {
        t44 = $[102];
    }
    let t45;
    if ($[103] !== t) {
        t45 = t("experts.details.ratingOverview") || "Rating Overview";
        $[103] = t;
        $[104] = t45;
    } else {
        t45 = $[104];
    }
    let t46;
    if ($[105] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-semibold text-gray-900 mb-3",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[105] = t45;
        $[106] = t46;
    } else {
        t46 = $[106];
    }
    let t47;
    if ($[107] !== ratingAvg) {
        t47 = ratingAvg.toFixed(1);
        $[107] = ratingAvg;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-bold text-gray-900",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[109] = t47;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = [
            1,
            2,
            3,
            4,
            5
        ];
        $[111] = t49;
    } else {
        t49 = $[111];
    }
    let t50;
    if ($[112] !== ratingAvg) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-0.5 mt-1 justify-center",
            children: t49.map({
                "OverviewTab[(anonymous)()]": (star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: `h-4 w-4 ${star <= Math.round(ratingAvg) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`
                    }, star, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                        lineNumber: 439,
                        columnNumber: 47
                    }, this)
            }["OverviewTab[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[112] = ratingAvg;
        $[113] = t50;
    } else {
        t50 = $[113];
    }
    let t51;
    if ($[114] !== expert.rating_count || $[115] !== t) {
        t51 = expert.rating_count === 1 ? t("experts.details.reviewsCount", {
            count: 1
        }) : t("experts.details.reviewsCountPlural", {
            count: expert.rating_count || 0
        });
        $[114] = expert.rating_count;
        $[115] = t;
        $[116] = t51;
    } else {
        t51 = $[116];
    }
    let t52;
    if ($[117] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[117] = t51;
        $[118] = t52;
    } else {
        t52 = $[118];
    }
    let t53;
    if ($[119] !== t48 || $[120] !== t50 || $[121] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center sm:border-r sm:border-gray-200 sm:pr-6 min-w-[120px]",
            children: [
                t48,
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[119] = t48;
        $[120] = t50;
        $[121] = t52;
        $[122] = t53;
    } else {
        t53 = $[122];
    }
    let t54;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = [
            5,
            4,
            3,
            2,
            1
        ];
        $[123] = t54;
    } else {
        t54 = $[123];
    }
    let t55;
    if ($[124] !== starDistList || $[125] !== totalReviewsInDist) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 w-full space-y-2",
            children: t54.map({
                "OverviewTab[(anonymous)()]": (starNum)=>{
                    const distItem = starDistList.find({
                        "OverviewTab[(anonymous)() > starDistList.find()]": (d)=>Number(d.star) === starNum
                    }["OverviewTab[(anonymous)() > starDistList.find()]"]);
                    const count = distItem ? Number(distItem.count) || 0 : 0;
                    const percentage = totalReviewsInDist > 0 ? Math.round(count / totalReviewsInDist * 100) : 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600 font-medium w-3",
                                children: starNum
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 493,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "h-3 w-3 text-yellow-400 fill-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 493,
                                columnNumber: 145
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-yellow-400 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${percentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 493,
                                    columnNumber: 276
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 493,
                                columnNumber: 205
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 w-10 text-end",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                lineNumber: 495,
                                columnNumber: 26
                            }, this)
                        ]
                    }, starNum, true, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                        lineNumber: 493,
                        columnNumber: 18
                    }, this);
                }
            }["OverviewTab[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[124] = starDistList;
        $[125] = totalReviewsInDist;
        $[126] = t55;
    } else {
        t55 = $[126];
    }
    let t56;
    if ($[127] !== t53 || $[128] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center gap-6 p-5 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t53,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[127] = t53;
        $[128] = t55;
        $[129] = t56;
    } else {
        t56 = $[129];
    }
    let t57;
    if ($[130] !== t46 || $[131] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[130] = t46;
        $[131] = t56;
        $[132] = t57;
    } else {
        t57 = $[132];
    }
    let t58;
    if ($[133] !== t) {
        t58 = t("experts.details.accountInfo") || "Account Information";
        $[133] = t;
        $[134] = t58;
    } else {
        t58 = $[134];
    }
    let t59;
    if ($[135] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-semibold text-gray-900 mb-3",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[135] = t58;
        $[136] = t59;
    } else {
        t59 = $[136];
    }
    let t60;
    if ($[137] !== t) {
        t60 = t("experts.details.expertId") || "Expert ID";
        $[137] = t;
        $[138] = t60;
    } else {
        t60 = $[138];
    }
    let t61;
    if ($[139] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[139] = t60;
        $[140] = t61;
    } else {
        t61 = $[140];
    }
    let t62;
    if ($[141] !== expert.expert_id) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: [
                "#",
                expert.expert_id
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[141] = expert.expert_id;
        $[142] = t62;
    } else {
        t62 = $[142];
    }
    let t63;
    if ($[143] !== t61 || $[144] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                t61,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 564,
            columnNumber: 11
        }, this);
        $[143] = t61;
        $[144] = t62;
        $[145] = t63;
    } else {
        t63 = $[145];
    }
    let t64;
    if ($[146] !== expert.user_id || $[147] !== t) {
        t64 = expert.user_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600",
                    children: t("experts.details.userId") || "User ID"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 573,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-900 font-medium",
                    children: [
                        "#",
                        expert.user_id
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 573,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 573,
            columnNumber: 29
        }, this);
        $[146] = expert.user_id;
        $[147] = t;
        $[148] = t64;
    } else {
        t64 = $[148];
    }
    let t65;
    if ($[149] !== t) {
        t65 = t("experts.details.currency") || "Currency";
        $[149] = t;
        $[150] = t65;
    } else {
        t65 = $[150];
    }
    let t66;
    if ($[151] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t65
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[151] = t65;
        $[152] = t66;
    } else {
        t66 = $[152];
    }
    let t67;
    if ($[153] !== currency) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[153] = currency;
        $[154] = t67;
    } else {
        t67 = $[154];
    }
    let t68;
    if ($[155] !== t66 || $[156] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                t66,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[155] = t66;
        $[156] = t67;
        $[157] = t68;
    } else {
        t68 = $[157];
    }
    let t69;
    if ($[158] !== t) {
        t69 = t("experts.details.startingFrom") || "Starting Price";
        $[158] = t;
        $[159] = t69;
    } else {
        t69 = $[159];
    }
    let t70;
    if ($[160] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t69
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[160] = t69;
        $[161] = t70;
    } else {
        t70 = $[161];
    }
    let t71;
    if ($[162] !== currency || $[163] !== startingPrice) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-teal-700 font-semibold",
            children: [
                startingPrice,
                " ",
                currency
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[162] = currency;
        $[163] = startingPrice;
        $[164] = t71;
    } else {
        t71 = $[164];
    }
    let t72;
    if ($[165] !== t70 || $[166] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                t70,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[165] = t70;
        $[166] = t71;
        $[167] = t72;
    } else {
        t72 = $[167];
    }
    let t73;
    if ($[168] !== currency || $[169] !== expert.rate_per_30min_cents || $[170] !== t) {
        t73 = expert.rate_per_30min_cents ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600",
                    children: t("experts.details.ratePer30Min") || "Rate (30 min)"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 649,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-900 font-medium",
                    children: [
                        expert.rate_per_30min_cents,
                        " ",
                        currency
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 649,
                    columnNumber: 223
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 649,
            columnNumber: 41
        }, this) : null;
        $[168] = currency;
        $[169] = expert.rate_per_30min_cents;
        $[170] = t;
        $[171] = t73;
    } else {
        t73 = $[171];
    }
    let t74;
    if ($[172] !== expert.created_at || $[173] !== formatDate || $[174] !== t) {
        t74 = expert.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2 border-b border-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-600",
                    children: t("experts.details.memberSince") || "Member Since"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 659,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-900 font-medium",
                    children: formatDate(expert.created_at)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 659,
                    columnNumber: 212
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 659,
            columnNumber: 32
        }, this);
        $[172] = expert.created_at;
        $[173] = formatDate;
        $[174] = t;
        $[175] = t74;
    } else {
        t74 = $[175];
    }
    let t75;
    if ($[176] !== currency || $[177] !== expert.wallet || $[178] !== t) {
        t75 = expert.wallet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-2 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-600 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                                    lineNumber: 669,
                                    columnNumber: 175
                                }, this),
                                " ",
                                t("experts.details.walletBalance") || "Wallet Balance"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 669,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-medium",
                            children: [
                                (expert.wallet.balance_cents / 100).toFixed(2),
                                " ",
                                currency
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 669,
                            columnNumber: 273
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 669,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-2 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-600",
                            children: t("experts.details.pendingBalance") || "Pending Balance"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 669,
                            columnNumber: 478
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-900 font-medium",
                            children: [
                                (expert.wallet.pending_cents / 100).toFixed(2),
                                " ",
                                currency
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                            lineNumber: 669,
                            columnNumber: 583
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
                    lineNumber: 669,
                    columnNumber: 397
                }, this)
            ]
        }, void 0, true);
        $[176] = currency;
        $[177] = expert.wallet;
        $[178] = t;
        $[179] = t75;
    } else {
        t75 = $[179];
    }
    let t76;
    if ($[180] !== t) {
        t76 = t("experts.columns.status") || "Status";
        $[180] = t;
        $[181] = t76;
    } else {
        t76 = $[181];
    }
    let t77;
    if ($[182] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 687,
            columnNumber: 11
        }, this);
        $[182] = t76;
        $[183] = t77;
    } else {
        t77 = $[183];
    }
    let t78;
    if ($[184] !== expert.status || $[185] !== getStatusBadge) {
        t78 = getStatusBadge(expert.status);
        $[184] = expert.status;
        $[185] = getStatusBadge;
        $[186] = t78;
    } else {
        t78 = $[186];
    }
    let t79;
    if ($[187] !== t77 || $[188] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-2",
            children: [
                t77,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 704,
            columnNumber: 11
        }, this);
        $[187] = t77;
        $[188] = t78;
        $[189] = t79;
    } else {
        t79 = $[189];
    }
    let t80;
    if ($[190] !== t63 || $[191] !== t64 || $[192] !== t68 || $[193] !== t72 || $[194] !== t73 || $[195] !== t74 || $[196] !== t75 || $[197] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 bg-white border border-gray-200 rounded-lg p-5",
            children: [
                t63,
                t64,
                t68,
                t72,
                t73,
                t74,
                t75,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 713,
            columnNumber: 11
        }, this);
        $[190] = t63;
        $[191] = t64;
        $[192] = t68;
        $[193] = t72;
        $[194] = t73;
        $[195] = t74;
        $[196] = t75;
        $[197] = t79;
        $[198] = t80;
    } else {
        t80 = $[198];
    }
    let t81;
    if ($[199] !== t59 || $[200] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t59,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[199] = t59;
        $[200] = t80;
        $[201] = t81;
    } else {
        t81 = $[201];
    }
    let t82;
    if ($[202] !== t2 || $[203] !== t3 || $[204] !== t42 || $[205] !== t43 || $[206] !== t44 || $[207] !== t57 || $[208] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t42,
                t43,
                t44,
                t57,
                t81
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[202] = t2;
        $[203] = t3;
        $[204] = t42;
        $[205] = t43;
        $[206] = t44;
        $[207] = t57;
        $[208] = t81;
        $[209] = t82;
    } else {
        t82 = $[209];
    }
    return t82;
}
_c = OverviewTab;
function _OverviewTabStarDistListReduce(sum, item) {
    return sum + (Number(item.count) || 0);
}
function _OverviewTabAnonymous(s) {
    return {
        star: s,
        count: 0
    };
}
var _c;
__turbopack_context__.k.register(_c, "OverviewTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsTab",
    ()=>ReviewsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
"use client";
;
;
;
function ReviewsTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "0b47c73c14aff4fb8e4944f57a3f8f54c439e0e73e0ede239bd8fdb82158164d") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b47c73c14aff4fb8e4944f57a3f8f54c439e0e73e0ede239bd8fdb82158164d";
    }
    const { loadingReviews, reviewsData, expert, t, formatDate } = t0;
    let t1;
    if ($[1] !== expert?.rating_avg || $[2] !== formatDate || $[3] !== loadingReviews || $[4] !== reviewsData || $[5] !== t) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: loadingReviews ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                    lineNumber: 30,
                    columnNumber: 111
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                lineNumber: 30,
                columnNumber: 55
            }, this) : reviewsData?.data && reviewsData.data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: parseFloat(expert?.rating_avg || "0").toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                        lineNumber: 30,
                                        columnNumber: 418
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.avgRating") || "Average Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                        lineNumber: 30,
                                        columnNumber: 520
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                lineNumber: 30,
                                columnNumber: 363
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: reviewsData.data.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                        lineNumber: 30,
                                        columnNumber: 679
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.totalReviews") || "Total Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                        lineNumber: 30,
                                        columnNumber: 756
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                lineNumber: 30,
                                columnNumber: 624
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                        lineNumber: 30,
                        columnNumber: 323
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-100",
                        children: reviewsData.data.map({
                            "ReviewsTab[reviewsData.data.map()]": (review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold",
                                                            children: review.customer?.first_name?.charAt(0) || "U"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 195
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: [
                                                                        review.customer?.first_name,
                                                                        " ",
                                                                        review.customer?.last_name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                                    lineNumber: 31,
                                                                    columnNumber: 366
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: formatDate(review.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                                    lineNumber: 31,
                                                                    columnNumber: 469
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 361
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 154
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map({
                                                        "ReviewsTab[reviewsData.data.map() > (anonymous)()]": (star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: `h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`
                                                            }, star, false, {
                                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 83
                                                            }, this)
                                                    }["ReviewsTab[reviewsData.data.map() > (anonymous)()]"])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 553
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                            lineNumber: 31,
                                            columnNumber: 104
                                        }, this),
                                        review.comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm text-gray-600",
                                            children: review.comment
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                            lineNumber: 33,
                                            columnNumber: 107
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                                    lineNumber: 31,
                                    columnNumber: 70
                                }, this)
                        }["ReviewsTab[reviewsData.data.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                        lineNumber: 30,
                        columnNumber: 868
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                lineNumber: 30,
                columnNumber: 296
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "h-8 w-8 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                            lineNumber: 34,
                            columnNumber: 222
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                        lineNumber: 34,
                        columnNumber: 132
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: t("experts.details.reviews") || "Reviews & Ratings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                        lineNumber: 34,
                        columnNumber: 270
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-6 text-center max-w-sm",
                        children: t("experts.details.noReviews") || "No reviews yet for this expert."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                        lineNumber: 34,
                        columnNumber: 385
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
                lineNumber: 34,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = expert?.rating_avg;
        $[2] = formatDate;
        $[3] = loadingReviews;
        $[4] = reviewsData;
        $[5] = t;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    return t1;
}
_c = ReviewsTab;
var _c;
__turbopack_context__.k.register(_c, "ReviewsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionsTab",
    ()=>TransactionsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
"use client";
;
;
;
;
function TransactionsTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4aa8d3b2dc855cca4b84643866ae9701154e78aa2f8fcfcb18faa245ae68b01c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4aa8d3b2dc855cca4b84643866ae9701154e78aa2f8fcfcb18faa245ae68b01c";
    }
    const { loadingTransactions, transactionsData, expert, t, formatDate } = t0;
    let t1;
    if ($[1] !== expert?.consultions || $[2] !== expert?.rate_per_30min_cents || $[3] !== formatDate || $[4] !== loadingTransactions || $[5] !== t || $[6] !== transactionsData) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: loadingTransactions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                    lineNumber: 31,
                    columnNumber: 116
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                lineNumber: 31,
                columnNumber: 60
            }, this) : transactionsData?.data && transactionsData.data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: expert?.consultions || 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 433
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.totalConsultations") || "Total Consultations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 511
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                lineNumber: 31,
                                columnNumber: 378
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: [
                                            "$",
                                            ((expert?.rate_per_30min_cents || 0) / 100).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 684
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.ratePer30Min") || "Rate per 30min"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 793
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                lineNumber: 31,
                                columnNumber: 629
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                        lineNumber: 31,
                        columnNumber: 338
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.details.transactionId") || "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 999
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.details.name") || "Client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1129
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.details.package") || "Package"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1254
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.columns.actions") || "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1383
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.details.amount") || "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1511
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.columns.status") || "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1638
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase",
                                                children: t("experts.details.date") || "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 31,
                                                columnNumber: 1765
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 995
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                    lineNumber: 31,
                                    columnNumber: 965
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100",
                                    children: transactionsData.data.map({
                                        "TransactionsTab[transactionsData.data.map()]": (transaction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-900",
                                                        children: [
                                                            "#",
                                                            transaction.tx_id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 105
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-900",
                                                        children: transaction.client_name || t("experts.table.na") || "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 178
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-600",
                                                        children: transaction.package_name || t("experts.table.na") || "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 290
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-600",
                                                        children: transaction.action?.replace(/_/g, " ") || t("experts.table.na") || "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 403
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-900",
                                                        children: transaction.amount_cents ? `$${(transaction.amount_cents / 100).toFixed(2)}` : transaction.minutes ? `${transaction.minutes} min` : "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 530
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: transaction.status === "confirmed" || transaction.status === "completed" ? "bg-green-100 text-green-800" : transaction.status === "pending" ? "bg-yellow-100 text-yellow-800" : transaction.status === "ongoing" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800",
                                                            children: transaction.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 746
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 720
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-sm text-gray-500",
                                                        children: transaction.transaction_date ? formatDate(transaction.transaction_date) : t("experts.table.na") || "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 1067
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                                lineNumber: 32,
                                                columnNumber: 89
                                            }, this)
                                    }["TransactionsTab[transactionsData.data.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                                    lineNumber: 31,
                                    columnNumber: 1901
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                            lineNumber: 31,
                            columnNumber: 939
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                        lineNumber: 31,
                        columnNumber: 906
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                lineNumber: 31,
                columnNumber: 311
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-8 w-8 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                            lineNumber: 33,
                            columnNumber: 252
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                        lineNumber: 33,
                        columnNumber: 162
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: t("experts.details.transactions") || "Transaction History"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                        lineNumber: 33,
                        columnNumber: 304
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-6 text-center max-w-sm",
                        children: t("experts.details.noTransactions") || "No transactions yet for this expert."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                        lineNumber: 33,
                        columnNumber: 426
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
                lineNumber: 33,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = expert?.consultions;
        $[2] = expert?.rate_per_30min_cents;
        $[3] = formatDate;
        $[4] = loadingTransactions;
        $[5] = t;
        $[6] = transactionsData;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
}
_c = TransactionsTab;
var _c;
__turbopack_context__.k.register(_c, "TransactionsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpcomingMeetingsTab",
    ()=>UpcomingMeetingsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
"use client";
;
;
;
;
;
function UpcomingMeetingsTab(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "68e3924fe467620f2e97383cfa898035578d4ea0430dea92bb098a9bf6e7c61c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68e3924fe467620f2e97383cfa898035578d4ea0430dea92bb098a9bf6e7c61c";
    }
    const { loadingBookings, bookingsData, processingBookingId, handleConfirm, handleDecline, handleReschedule, t, formatDate } = t0;
    let t1;
    if ($[1] !== bookingsData || $[2] !== formatDate || $[3] !== handleConfirm || $[4] !== handleDecline || $[5] !== handleReschedule || $[6] !== loadingBookings || $[7] !== processingBookingId || $[8] !== t) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: loadingBookings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                    lineNumber: 38,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                lineNumber: 38,
                columnNumber: 56
            }, this) : bookingsData?.data && bookingsData.data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: bookingsData.data.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                        lineNumber: 38,
                                        columnNumber: 404
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.totalBookings") || "Total Bookings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                        lineNumber: 38,
                                        columnNumber: 482
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                lineNumber: 38,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: bookingsData.data.filter(_UpcomingMeetingsTabBookingsDataDataFilter).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                        lineNumber: 38,
                                        columnNumber: 645
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: t("experts.details.upcomingMeetings") || "Upcoming Meetings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                        lineNumber: 38,
                                        columnNumber: 774
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                lineNumber: 38,
                                columnNumber: 590
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                        lineNumber: 38,
                        columnNumber: 304
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: bookingsData.data.map({
                            "UpcomingMeetingsTab[bookingsData.data.map()]": (booking, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold",
                                                            children: booking.customer?.first_name?.charAt(0) || "C"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 287
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: [
                                                                        booking.customer?.first_name,
                                                                        " ",
                                                                        booking.customer?.last_name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 459
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: booking.customer?.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 564
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 454
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 246
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: booking.status === "confirmed" ? "bg-green-100 text-green-800" : booking.status === "pending" ? "bg-yellow-100 text-yellow-800" : booking.status === "completed" ? "bg-blue-100 text-blue-800" : booking.status === "cancelled" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800",
                                                    children: booking.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 642
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                            lineNumber: 39,
                                            columnNumber: 191
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "h-4 w-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1068
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: booking.start_time ? formatDate(booking.start_time) : "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1114
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 1005
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-4 w-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1257
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: booking.minutes ? `${booking.minutes} min` : "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1300
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 1194
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "h-4 w-4 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1432
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: booking.meeting_provider || "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 1478
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 1369
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                            lineNumber: 39,
                                            columnNumber: 973
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "flex-1 bg-green-600 hover:bg-green-700 text-white",
                                                    disabled: processingBookingId === booking.booking_id,
                                                    onClick: {
                                                        "UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]": ()=>handleConfirm(booking.booking_id)
                                                    }["UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]"],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 87
                                                        }, this),
                                                        t("experts.details.confirm") || "Confirm"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 1566
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "flex-1 border-red-200 text-red-600 hover:bg-red-50",
                                                    disabled: processingBookingId === booking.booking_id,
                                                    onClick: {
                                                        "UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]": ()=>handleDecline(booking.booking_id)
                                                    }["UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]"],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 87
                                                        }, this),
                                                        t("experts.details.decline") || "Decline"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 179
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "flex-1 border-gray-200 text-gray-600 hover:bg-gray-50",
                                                    disabled: processingBookingId === booking.booking_id,
                                                    onClick: {
                                                        "UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]": ()=>handleReschedule(booking.booking_id)
                                                    }["UpcomingMeetingsTab[bookingsData.data.map() > <Button>.onClick]"],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 87
                                                        }, this),
                                                        t("experts.details.reschedule") || "Reschedule"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 175
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                            lineNumber: 39,
                                            columnNumber: 1538
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                                    lineNumber: 39,
                                    columnNumber: 81
                                }, this)
                        }["UpcomingMeetingsTab[bookingsData.data.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                        lineNumber: 38,
                        columnNumber: 894
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                lineNumber: 38,
                columnNumber: 299
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "h-8 w-8 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                            lineNumber: 46,
                            columnNumber: 232
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                        lineNumber: 46,
                        columnNumber: 142
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: t("experts.details.upcomingMeetings") || "Upcoming Meetings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                        lineNumber: 46,
                        columnNumber: 284
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-6 text-center max-w-sm",
                        children: t("experts.details.noMeetings") || "No bookings yet for this expert."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                        lineNumber: 46,
                        columnNumber: 408
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
                lineNumber: 46,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[1] = bookingsData;
        $[2] = formatDate;
        $[3] = handleConfirm;
        $[4] = handleDecline;
        $[5] = handleReschedule;
        $[6] = loadingBookings;
        $[7] = processingBookingId;
        $[8] = t;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    return t1;
}
_c = UpcomingMeetingsTab;
function _UpcomingMeetingsTabBookingsDataDataFilter(b) {
    return new Date(b.start_time) >= new Date();
}
var _c;
__turbopack_context__.k.register(_c, "UpcomingMeetingsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/hooks/useExpertDetailLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpertDetailLogic",
    ()=>useExpertDetailLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/experts.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function useExpertDetailLogic(expertId) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [processingBookingId, setProcessingBookingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const expertDetailsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "expertDetails",
            expertId
        ],
        queryFn: {
            "useExpertDetailLogic.useQuery[expertDetailsQuery]": async ()=>{
                try {
                    const adminRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminExpertsService"].getExpert(Number(expertId));
                    const resBody = adminRes?.data ?? adminRes;
                    if (resBody && (resBody.expert_id || resBody.id || resBody.display_name || resBody.data || resBody.user)) {
                        return resBody;
                    }
                } catch (err) {
                    console.warn("AdminExpertsService.getExpert failed in details, fallback to fetchExpertDetails", err);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchExpertDetails"])(Number(expertId), token);
            }
        }["useExpertDetailLogic.useQuery[expertDetailsQuery]"],
        enabled: !!token && !!expertId
    });
    const apiBase = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"];
    const reviewsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "expertReviews",
            expertId
        ],
        queryFn: {
            "useExpertDetailLogic.useQuery[reviewsQuery]": async ()=>{
                if (!token || !expertId) throw new Error("Not authenticated");
                const response = await fetch(`${apiBase}/experts/${expertId}/reviews`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error("Failed to fetch reviews");
                return response.json();
            }
        }["useExpertDetailLogic.useQuery[reviewsQuery]"],
        enabled: !!token && !!expertId && activeTab === "reviews",
        staleTime: Infinity
    });
    const transactionsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "expertTransactions",
            expertId
        ],
        queryFn: {
            "useExpertDetailLogic.useQuery[transactionsQuery]": async ()=>{
                if (!token || !expertId) throw new Error("Not authenticated");
                const response_0 = await fetch(`${apiBase}/experts/${expertId}/transactions`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response_0.ok) throw new Error("Failed to fetch transactions");
                return response_0.json();
            }
        }["useExpertDetailLogic.useQuery[transactionsQuery]"],
        enabled: !!token && !!expertId && activeTab === "transactions",
        staleTime: Infinity
    });
    const bookingsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "expertBookings",
            expertId
        ],
        queryFn: {
            "useExpertDetailLogic.useQuery[bookingsQuery]": async ()=>{
                if (!token || !expertId) throw new Error("Not authenticated");
                const response_1 = await fetch(`${apiBase}/experts/${expertId}/bookings`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response_1.ok) throw new Error("Failed to fetch bookings");
                return response_1.json();
            }
        }["useExpertDetailLogic.useQuery[bookingsQuery]"],
        enabled: !!token && !!expertId && activeTab === "upcoming-meetings",
        staleTime: Infinity
    });
    const confirmBookingMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExpertDetailLogic.useMutation[confirmBookingMutation]": async (bookingId)=>{
                const response_2 = await fetch(`${apiBase}/experts/bookings/${bookingId}/confirm`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response_2.ok) throw new Error("Failed to confirm booking");
                return response_2.json();
            }
        }["useExpertDetailLogic.useMutation[confirmBookingMutation]"],
        onSuccess: {
            "useExpertDetailLogic.useMutation[confirmBookingMutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("meetings.messages.approveSuccess") || "Booking confirmed successfully");
                setProcessingBookingId(null);
                queryClient.invalidateQueries({
                    queryKey: [
                        "expertBookings",
                        expertId
                    ]
                });
            }
        }["useExpertDetailLogic.useMutation[confirmBookingMutation]"],
        onError: {
            "useExpertDetailLogic.useMutation[confirmBookingMutation]": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message || t("meetings.messages.approveFailed") || "Failed to confirm booking");
                setProcessingBookingId(null);
            }
        }["useExpertDetailLogic.useMutation[confirmBookingMutation]"]
    });
    const declineBookingMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExpertDetailLogic.useMutation[declineBookingMutation]": async (bookingId_0)=>{
                const response_3 = await fetch(`${apiBase}/experts/bookings/${bookingId_0}/decline`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response_3.ok) throw new Error("Failed to decline booking");
                return response_3.json();
            }
        }["useExpertDetailLogic.useMutation[declineBookingMutation]"],
        onSuccess: {
            "useExpertDetailLogic.useMutation[declineBookingMutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("meetings.messages.rejectSuccess") || "Booking declined successfully");
                setProcessingBookingId(null);
                queryClient.invalidateQueries({
                    queryKey: [
                        "expertBookings",
                        expertId
                    ]
                });
            }
        }["useExpertDetailLogic.useMutation[declineBookingMutation]"],
        onError: {
            "useExpertDetailLogic.useMutation[declineBookingMutation]": (error_0)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_0.message || t("meetings.messages.rejectFailed") || "Failed to decline booking");
                setProcessingBookingId(null);
            }
        }["useExpertDetailLogic.useMutation[declineBookingMutation]"]
    });
    const rescheduleBookingMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExpertDetailLogic.useMutation[rescheduleBookingMutation]": async (bookingId_1)=>{
                const response_4 = await fetch(`${apiBase}/experts/bookings/${bookingId_1}/reschedule`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response_4.ok) throw new Error("Failed to reschedule booking");
                return response_4.json();
            }
        }["useExpertDetailLogic.useMutation[rescheduleBookingMutation]"],
        onSuccess: {
            "useExpertDetailLogic.useMutation[rescheduleBookingMutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("meetings.messages.rescheduleSuccess") || "Booking rescheduled successfully");
                setProcessingBookingId(null);
                queryClient.invalidateQueries({
                    queryKey: [
                        "expertBookings",
                        expertId
                    ]
                });
            }
        }["useExpertDetailLogic.useMutation[rescheduleBookingMutation]"],
        onError: {
            "useExpertDetailLogic.useMutation[rescheduleBookingMutation]": (error_1)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_1.message || t("meetings.messages.rescheduleFailed") || "Failed to reschedule booking");
                setProcessingBookingId(null);
            }
        }["useExpertDetailLogic.useMutation[rescheduleBookingMutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useExpertDetailLogic.useEffect": ()=>{
            const rawData = expertDetailsQuery.data?.data ?? expertDetailsQuery.data;
            const item = rawData?.data ?? rawData;
            if (item?.status) {
                setIsActive(item.status === "approved" || item.status === "active");
            }
        }
    }["useExpertDetailLogic.useEffect"], [
        expertDetailsQuery.data
    ]);
    const toggleStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExpertDetailLogic.useMutation[toggleStatusMutation]": async (newStatus)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminExpertsService"].toggleExpertStatus(Number(expertId), newStatus);
            }
        }["useExpertDetailLogic.useMutation[toggleStatusMutation]"],
        onSuccess: {
            "useExpertDetailLogic.useMutation[toggleStatusMutation]": async ()=>{
                queryClient.removeQueries({
                    queryKey: [
                        "expertDetails",
                        expertId
                    ]
                });
                queryClient.removeQueries({
                    queryKey: [
                        "expertDetails",
                        Number(expertId)
                    ]
                });
                await Promise.all([
                    queryClient.invalidateQueries({
                        queryKey: [
                            "experts"
                        ],
                        refetchType: "all"
                    }),
                    queryClient.invalidateQueries({
                        queryKey: [
                            "expertDetails"
                        ],
                        refetchType: "all"
                    })
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("experts.messages.statusUpdateSuccess") || "Status updated successfully");
            }
        }["useExpertDetailLogic.useMutation[toggleStatusMutation]"],
        onError: {
            "useExpertDetailLogic.useMutation[toggleStatusMutation]": (error_2)=>{
                setIsActive({
                    "useExpertDetailLogic.useMutation[toggleStatusMutation]": (prev)=>!prev
                }["useExpertDetailLogic.useMutation[toggleStatusMutation]"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error_2?.message || t("experts.messages.statusUpdateFailed") || "Failed to update status");
            }
        }["useExpertDetailLogic.useMutation[toggleStatusMutation]"]
    });
    const handleToggleStatus = (newStatus_0)=>{
        setIsActive(newStatus_0);
        toggleStatusMutation.mutate(newStatus_0);
    };
    const handleConfirm = (bookingId_2)=>{
        setProcessingBookingId(bookingId_2);
        confirmBookingMutation.mutate(bookingId_2);
    };
    const handleDecline = (bookingId_3)=>{
        setProcessingBookingId(bookingId_3);
        declineBookingMutation.mutate(bookingId_3);
    };
    const handleReschedule = (bookingId_4)=>{
        setProcessingBookingId(bookingId_4);
        rescheduleBookingMutation.mutate(bookingId_4);
    };
    return {
        expertDetailsQuery,
        reviewsQuery,
        transactionsQuery,
        bookingsQuery,
        activeTab,
        setActiveTab,
        isActive,
        setIsActive: handleToggleStatus,
        handleToggleStatus,
        processingBookingId,
        handleConfirm,
        handleDecline,
        handleReschedule,
        token,
        t
    };
}
_s(useExpertDetailLogic, "/qsu6zcnmqohhIgu4lIClRrGAMk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertHeaderCard",
    ()=>ExpertHeaderCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
;
;
;
function ExpertHeaderCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(147);
    if ($[0] !== "aa03af32447060950315013ca38f48eb647e73515ec35bf25025febeea1368ba") {
        for(let $i = 0; $i < 147; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa03af32447060950315013ca38f48eb647e73515ec35bf25025febeea1368ba";
    }
    const { expert, t } = t0;
    const getInitials = _ExpertHeaderCardGetInitials;
    const getRatingColor = _ExpertHeaderCardGetRatingColor;
    const getRatingBg = _ExpertHeaderCardGetRatingBg;
    const getStatusBadge = _ExpertHeaderCardGetStatusBadge;
    const displayName = expert.display_name || expert.name || "Expert";
    const avatarUrl = expert.image_url || expert.photo_url || null;
    let t1;
    if ($[1] !== expert.image_url) {
        t1 = typeof expert.image_url === "string" ? expert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1] : undefined;
        $[1] = expert.image_url;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const extractedEmail = t1;
    let t2;
    if ($[3] !== expert.email || $[4] !== expert.user?.email || $[5] !== extractedEmail || $[6] !== t) {
        t2 = expert.user?.email || expert.email || extractedEmail || t("experts.table.na") || "N/A";
        $[3] = expert.email;
        $[4] = expert.user?.email;
        $[5] = extractedEmail;
        $[6] = t;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const email = t2;
    let t3;
    if ($[8] !== expert.phone || $[9] !== expert.phone_number || $[10] !== expert.user?.phone_number || $[11] !== t) {
        t3 = expert.user?.phone_number || expert.phone_number || expert.phone || t("experts.table.na") || "N/A";
        $[8] = expert.phone;
        $[9] = expert.phone_number;
        $[10] = expert.user?.phone_number;
        $[11] = t;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    const phoneNumber = t3;
    const primaryCategory = Array.isArray(expert.categories) && expert.categories.length > 0 ? typeof expert.categories[0] === "string" ? expert.categories[0] : expert.categories[0]?.name : null;
    let t4;
    if ($[13] !== expert.title || $[14] !== primaryCategory || $[15] !== t) {
        t4 = expert.title || primaryCategory || t("experts.details.defaultSubtitle") || "Professional Consultant";
        $[13] = expert.title;
        $[14] = primaryCategory;
        $[15] = t;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const subtitle = t4;
    const totalBookings = expert.total_bookings ?? expert.consultions ?? 0;
    const respondedBookings = expert.responded_bookings ?? 0;
    const yearsExp = expert.years_experience ?? 0;
    const startingPrice = expert.starting_from ?? 0;
    const currency = expert.currency || "AED";
    const ratingAvg = typeof expert.rating_avg === "number" ? expert.rating_avg : parseFloat(expert.rating_avg || "0");
    let t5;
    if ($[17] !== ratingAvg) {
        t5 = isNaN(ratingAvg) ? "0.0" : ratingAvg.toFixed(1);
        $[17] = ratingAvg;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const ratingDisplay = t5;
    const ratingCount = expert.rating_count ?? 0;
    let t6;
    if ($[19] !== avatarUrl || $[20] !== displayName) {
        t6 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: displayName,
            className: "w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-sm flex-shrink-0",
            onError: _ExpertHeaderCardImgOnError
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 118,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-xl font-bold text-white flex-shrink-0 shadow-sm",
            children: getInitials(displayName)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 118,
            columnNumber: 201
        }, this);
        $[19] = avatarUrl;
        $[20] = displayName;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== displayName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-900",
            children: displayName
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[22] = displayName;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== expert.status) {
        t8 = getStatusBadge(expert.status);
        $[24] = expert.status;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== subtitle) {
        t9 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 143,
            columnNumber: 22
        }, this);
        $[26] = subtitle;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== t7 || $[29] !== t8 || $[30] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 flex-wrap",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[28] = t7;
        $[29] = t8;
        $[30] = t9;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== email) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: email
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
                    lineNumber: 168,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[33] = email;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== phoneNumber) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: phoneNumber
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
                    lineNumber: 183,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[36] = phoneNumber;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== t12 || $[39] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mt-2 text-sm text-gray-600 flex-wrap",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[38] = t12;
        $[39] = t14;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== t10 || $[42] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[41] = t10;
        $[42] = t15;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== t16 || $[45] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    t6,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
                lineNumber: 209,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[44] = t16;
        $[45] = t6;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t) {
        t18 = t("experts.details.totalConsultations") || "Bookings";
        $[47] = t;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[49] = t18;
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    let t21;
    if ($[52] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[52] = t19;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== totalBookings) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: totalBookings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[54] = totalBookings;
        $[55] = t22;
    } else {
        t22 = $[55];
    }
    let t23;
    if ($[56] !== t) {
        t23 = t("experts.details.responded") || "responded";
        $[56] = t;
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    let t24;
    if ($[58] !== respondedBookings || $[59] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                respondedBookings,
                " ",
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[58] = respondedBookings;
        $[59] = t23;
        $[60] = t24;
    } else {
        t24 = $[60];
    }
    let t25;
    if ($[61] !== t21 || $[62] !== t22 || $[63] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t21,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[61] = t21;
        $[62] = t22;
        $[63] = t24;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    const t26 = `p-4 rounded-lg border ${getRatingBg(expert.rating_avg)}`;
    let t27;
    if ($[65] !== t) {
        t27 = t("experts.details.rating") || "Rating";
        $[65] = t;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[67] = t27;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    const t29 = `h-4 w-4 ${getRatingColor(expert.rating_avg)}`;
    let t30;
    if ($[69] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: t29,
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[69] = t29;
        $[70] = t30;
    } else {
        t30 = $[70];
    }
    let t31;
    if ($[71] !== t28 || $[72] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[71] = t28;
        $[72] = t30;
        $[73] = t31;
    } else {
        t31 = $[73];
    }
    const t32 = `text-2xl font-bold ${getRatingColor(expert.rating_avg)}`;
    let t33;
    if ($[74] !== ratingDisplay || $[75] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t32,
            children: ratingDisplay
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[74] = ratingDisplay;
        $[75] = t32;
        $[76] = t33;
    } else {
        t33 = $[76];
    }
    let t34;
    if ($[77] !== t) {
        t34 = t("experts.details.reviews") || "reviews";
        $[77] = t;
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    let t35;
    if ($[79] !== ratingCount || $[80] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500",
            children: [
                "(",
                ratingCount,
                " ",
                t34,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[79] = ratingCount;
        $[80] = t34;
        $[81] = t35;
    } else {
        t35 = $[81];
    }
    let t36;
    if ($[82] !== t33 || $[83] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-baseline gap-1.5",
            children: [
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[82] = t33;
        $[83] = t35;
        $[84] = t36;
    } else {
        t36 = $[84];
    }
    let t37;
    if ($[85] !== ratingCount || $[86] !== t) {
        t37 = ratingCount > 0 ? t("experts.details.verifiedFeedback") || "Verified feedback" : t("experts.details.newExpert") || "New expert";
        $[85] = ratingCount;
        $[86] = t;
        $[87] = t37;
    } else {
        t37 = $[87];
    }
    let t38;
    if ($[88] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[88] = t37;
        $[89] = t38;
    } else {
        t38 = $[89];
    }
    let t39;
    if ($[90] !== t26 || $[91] !== t31 || $[92] !== t36 || $[93] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t26,
            children: [
                t31,
                t36,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[90] = t26;
        $[91] = t31;
        $[92] = t36;
        $[93] = t38;
        $[94] = t39;
    } else {
        t39 = $[94];
    }
    let t40;
    if ($[95] !== t) {
        t40 = t("experts.details.experience") || "Experience";
        $[95] = t;
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    let t41;
    if ($[97] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[97] = t40;
        $[98] = t41;
    } else {
        t41 = $[98];
    }
    let t42;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[99] = t42;
    } else {
        t42 = $[99];
    }
    let t43;
    if ($[100] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t41,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[100] = t41;
        $[101] = t43;
    } else {
        t43 = $[101];
    }
    let t44;
    if ($[102] !== t) {
        t44 = t("experts.details.years") || "Years";
        $[102] = t;
        $[103] = t44;
    } else {
        t44 = $[103];
    }
    let t45;
    if ($[104] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-normal text-gray-600",
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[104] = t44;
        $[105] = t45;
    } else {
        t45 = $[105];
    }
    let t46;
    if ($[106] !== t45 || $[107] !== yearsExp) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: [
                yearsExp,
                " ",
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[106] = t45;
        $[107] = yearsExp;
        $[108] = t46;
    } else {
        t46 = $[108];
    }
    const t47 = expert.experiences?.length || 0;
    let t48;
    if ($[109] !== t) {
        t48 = t("experts.details.certifications") || "certifications";
        $[109] = t;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] !== t47 || $[112] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                t47,
                " ",
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[111] = t47;
        $[112] = t48;
        $[113] = t49;
    } else {
        t49 = $[113];
    }
    let t50;
    if ($[114] !== t43 || $[115] !== t46 || $[116] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t43,
                t46,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[114] = t43;
        $[115] = t46;
        $[116] = t49;
        $[117] = t50;
    } else {
        t50 = $[117];
    }
    let t51;
    if ($[118] !== t) {
        t51 = t("experts.details.startingFrom") || "Starting From";
        $[118] = t;
        $[119] = t51;
    } else {
        t51 = $[119];
    }
    let t52;
    if ($[120] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[120] = t51;
        $[121] = t52;
    } else {
        t52 = $[121];
    }
    let t53;
    if ($[122] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[122] = t53;
    } else {
        t53 = $[122];
    }
    let t54;
    if ($[123] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[123] = t52;
        $[124] = t54;
    } else {
        t54 = $[124];
    }
    let t55;
    if ($[125] !== currency) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-normal text-gray-600",
            children: currency
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[125] = currency;
        $[126] = t55;
    } else {
        t55 = $[126];
    }
    let t56;
    if ($[127] !== startingPrice || $[128] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-gray-900",
            children: [
                startingPrice,
                " ",
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[127] = startingPrice;
        $[128] = t55;
        $[129] = t56;
    } else {
        t56 = $[129];
    }
    const t57 = expert.packages?.length || 0;
    let t58;
    if ($[130] !== t) {
        t58 = t("experts.details.packages") || "packages";
        $[130] = t;
        $[131] = t58;
    } else {
        t58 = $[131];
    }
    let t59;
    if ($[132] !== t57 || $[133] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-0.5",
            children: [
                t57,
                " ",
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[132] = t57;
        $[133] = t58;
        $[134] = t59;
    } else {
        t59 = $[134];
    }
    let t60;
    if ($[135] !== t54 || $[136] !== t56 || $[137] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 rounded-lg border border-gray-100",
            children: [
                t54,
                t56,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[135] = t54;
        $[136] = t56;
        $[137] = t59;
        $[138] = t60;
    } else {
        t60 = $[138];
    }
    let t61;
    if ($[139] !== t25 || $[140] !== t39 || $[141] !== t50 || $[142] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
            children: [
                t25,
                t39,
                t50,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[139] = t25;
        $[140] = t39;
        $[141] = t50;
        $[142] = t60;
        $[143] = t61;
    } else {
        t61 = $[143];
    }
    let t62;
    if ($[144] !== t17 || $[145] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6 shadow-sm",
            children: [
                t17,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[144] = t17;
        $[145] = t61;
        $[146] = t62;
    } else {
        t62 = $[146];
    }
    return t62;
}
_c = ExpertHeaderCard;
function _ExpertHeaderCardImgOnError(e) {
    e.currentTarget.style.display = "none";
}
function _ExpertHeaderCardGetStatusBadge(status) {
    const styles = {
        approved: "bg-green-50 text-green-700 border-green-200",
        pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
        rejected: "bg-red-50 text-red-700 border-red-200"
    };
    const key = (status || "approved").toLowerCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        className: `${styles[key] || "bg-gray-50 text-gray-700 border-gray-200"} border text-xs capitalize`,
        children: status || "approved"
    }, void 0, false, {
        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx",
        lineNumber: 573,
        columnNumber: 10
    }, this);
}
function _ExpertHeaderCardGetRatingBg(rating_0) {
    const num_0 = typeof rating_0 === "string" ? parseFloat(rating_0) : rating_0 || 0;
    if (num_0 >= 4) {
        return "bg-green-50 border-green-200";
    }
    if (num_0 >= 3) {
        return "bg-yellow-50 border-yellow-200";
    }
    return "bg-red-50 border-red-200";
}
function _ExpertHeaderCardGetRatingColor(rating) {
    const num = typeof rating === "string" ? parseFloat(rating) : rating || 0;
    if (num >= 4) {
        return "text-green-600";
    }
    if (num >= 3) {
        return "text-yellow-600";
    }
    return "text-red-600";
}
function _ExpertHeaderCardGetInitials(name) {
    if (!name) {
        return "EX";
    }
    return name.split(" ").filter(Boolean).map(_ExpertHeaderCardGetInitialsAnonymous).join("").toUpperCase().slice(0, 2) || "EX";
}
function _ExpertHeaderCardGetInitialsAnonymous(n) {
    return n.charAt(0);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertHeaderCard");
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
"[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertContactInfoCard",
    ()=>ExpertContactInfoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
;
;
;
function ExpertContactInfoCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(110);
    if ($[0] !== "ebce956f2066cfb9b4b2167b517259e2f69ec18f88a8e7d31a6a3ad69c199c31") {
        for(let $i = 0; $i < 110; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebce956f2066cfb9b4b2167b517259e2f69ec18f88a8e7d31a6a3ad69c199c31";
    }
    const { expert, isActive, setIsActive, t } = t0;
    const firstName = expert?.user?.first_name || "";
    const lastName = expert?.user?.last_name || "";
    let t1;
    if ($[1] !== expert || $[2] !== firstName || $[3] !== lastName || $[4] !== t) {
        t1 = [
            firstName,
            lastName
        ].filter(Boolean).join(" ") || expert?.display_name || expert?.name || t("experts.table.na") || "N/A";
        $[1] = expert;
        $[2] = firstName;
        $[3] = lastName;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const fullName = t1;
    let t2;
    if ($[6] !== expert) {
        t2 = typeof expert?.image_url === "string" ? expert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1] : undefined;
        $[6] = expert;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const extractedEmail = t2;
    let t3;
    if ($[8] !== expert?.email || $[9] !== expert?.user?.email || $[10] !== extractedEmail || $[11] !== t) {
        t3 = expert?.user?.email || expert?.email || extractedEmail || t("experts.table.na") || "N/A";
        $[8] = expert?.email;
        $[9] = expert?.user?.email;
        $[10] = extractedEmail;
        $[11] = t;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    const email = t3;
    let t4;
    if ($[13] !== expert || $[14] !== t) {
        t4 = expert?.user?.phone_number || expert?.phone_number || expert?.phone || t("experts.table.na") || "N/A";
        $[13] = expert;
        $[14] = t;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    const phone = t4;
    const primaryCategory = Array.isArray(expert?.categories) && expert.categories.length > 0 ? typeof expert.categories[0] === "string" ? expert.categories[0] : expert.categories[0]?.name : null;
    let t5;
    if ($[16] !== expert?.title || $[17] !== primaryCategory || $[18] !== t) {
        t5 = expert?.title || primaryCategory || t("experts.table.na") || "N/A";
        $[16] = expert?.title;
        $[17] = primaryCategory;
        $[18] = t;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    const title = t5;
    const yearsExp = expert?.years_experience ?? 0;
    const startingRate = expert?.starting_from ? `${expert.starting_from} ${expert.currency || "AED"}` : "N/A";
    let t6;
    if ($[20] !== t) {
        t6 = t("experts.details.contactInformation") || "Contact Information";
        $[20] = t;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-4",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== t) {
        t8 = t("experts.details.name") || "Name";
        $[24] = t;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[26] = t8;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== fullName) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: fullName
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[28] = fullName;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t10 || $[31] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t9;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t) {
        t12 = t("experts.columns.email") || "Email";
        $[33] = t;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[35] = t12;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== email) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: email
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[37] = email;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== t13 || $[40] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t14;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] !== t) {
        t16 = t("experts.details.phone") || "Phone";
        $[42] = t;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[44] = t16;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] !== phone) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: phone
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[46] = phone;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    let t19;
    if ($[48] !== t17 || $[49] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[48] = t17;
        $[49] = t18;
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] !== t) {
        t20 = t("experts.details.specializationTitle") || "Title";
        $[51] = t;
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    let t21;
    if ($[53] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    let t22;
    if ($[55] !== title) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[55] = title;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t21 || $[58] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[57] = t21;
        $[58] = t22;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    let t24;
    if ($[60] !== t) {
        t24 = t("experts.details.experience") || "Experience";
        $[60] = t;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[62] = t24;
        $[63] = t25;
    } else {
        t25 = $[63];
    }
    let t26;
    if ($[64] !== t) {
        t26 = t("experts.details.years") || "Years";
        $[64] = t;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    let t27;
    if ($[66] !== t26 || $[67] !== yearsExp) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: [
                yearsExp,
                " ",
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[66] = t26;
        $[67] = yearsExp;
        $[68] = t27;
    } else {
        t27 = $[68];
    }
    let t28;
    if ($[69] !== t25 || $[70] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[69] = t25;
        $[70] = t27;
        $[71] = t28;
    } else {
        t28 = $[71];
    }
    let t29;
    if ($[72] !== t) {
        t29 = t("experts.details.startingRate") || "Starting Rate";
        $[72] = t;
        $[73] = t29;
    } else {
        t29 = $[73];
    }
    let t30;
    if ($[74] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[74] = t29;
        $[75] = t30;
    } else {
        t30 = $[75];
    }
    let t31;
    if ($[76] !== startingRate) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-teal-700 font-semibold",
            children: startingRate
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[76] = startingRate;
        $[77] = t31;
    } else {
        t31 = $[77];
    }
    let t32;
    if ($[78] !== t30 || $[79] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[78] = t30;
        $[79] = t31;
        $[80] = t32;
    } else {
        t32 = $[80];
    }
    let t33;
    if ($[81] !== t) {
        t33 = t("experts.columns.status") || "Status";
        $[81] = t;
        $[82] = t33;
    } else {
        t33 = $[82];
    }
    let t34;
    if ($[83] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[83] = t33;
        $[84] = t34;
    } else {
        t34 = $[84];
    }
    let t35;
    if ($[85] !== isActive || $[86] !== setIsActive) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            checked: isActive,
            onCheckedChange: setIsActive,
            className: "data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[85] = isActive;
        $[86] = setIsActive;
        $[87] = t35;
    } else {
        t35 = $[87];
    }
    let t36;
    if ($[88] !== isActive || $[89] !== t) {
        t36 = isActive ? t("common.active") || "Active" : t("common.inactive") || "Inactive";
        $[88] = isActive;
        $[89] = t;
        $[90] = t36;
    } else {
        t36 = $[90];
    }
    let t37;
    if ($[91] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[91] = t36;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    let t38;
    if ($[93] !== t35 || $[94] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[93] = t35;
        $[94] = t37;
        $[95] = t38;
    } else {
        t38 = $[95];
    }
    let t39;
    if ($[96] !== t34 || $[97] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-2 border-t border-gray-100",
            children: [
                t34,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[96] = t34;
        $[97] = t38;
        $[98] = t39;
    } else {
        t39 = $[98];
    }
    let t40;
    if ($[99] !== t11 || $[100] !== t15 || $[101] !== t19 || $[102] !== t23 || $[103] !== t28 || $[104] !== t32 || $[105] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t11,
                t15,
                t19,
                t23,
                t28,
                t32,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[99] = t11;
        $[100] = t15;
        $[101] = t19;
        $[102] = t23;
        $[103] = t28;
        $[104] = t32;
        $[105] = t39;
        $[106] = t40;
    } else {
        t40 = $[106];
    }
    let t41;
    if ($[107] !== t40 || $[108] !== t7) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6 shadow-sm",
            children: [
                t7,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[107] = t40;
        $[108] = t7;
        $[109] = t41;
    } else {
        t41 = $[109];
    }
    return t41;
}
_c = ExpertContactInfoCard;
var _c;
__turbopack_context__.k.register(_c, "ExpertContactInfoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertSpecializationsCard",
    ()=>ExpertSpecializationsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
;
;
function ExpertSpecializationsCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "463b52a92d5efe2e74d1615352747ac492b8bcaaa2ba01f0beb26c67cb551239") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "463b52a92d5efe2e74d1615352747ac492b8bcaaa2ba01f0beb26c67cb551239";
    }
    const { categories: t1, t } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const categories = t2;
    let t3;
    if ($[3] !== categories) {
        t3 = Array.isArray(categories) ? categories : [];
        $[3] = categories;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const categoryList = t3;
    let t4;
    if ($[5] !== t) {
        t4 = t("experts.columns.specializations") || "Specializations";
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-4",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== categoryList || $[10] !== t) {
        t6 = categoryList.length > 0 ? categoryList.map(_ExpertSpecializationsCardCategoryListMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-400",
            children: t("experts.details.noSpecializations") || "No specializations listed"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx",
            lineNumber: 57,
            columnNumber: 98
        }, this);
        $[9] = categoryList;
        $[10] = t;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t5 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_c = ExpertSpecializationsCard;
function _ExpertSpecializationsCardCategoryListMap(category, index) {
    const name = typeof category === "string" ? category : category?.name || String(category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "bg-teal-50 text-teal-700 border-teal-200 px-2.5 py-1 text-xs font-medium",
        children: name
    }, index, false, {
        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertSpecializationsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertCountriesCard",
    ()=>ExpertCountriesCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
;
;
function ExpertCountriesCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "36f55f19911d6da3029dc150a940dfea3ebaf1410e3dd5756db989a47ab8063e") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36f55f19911d6da3029dc150a940dfea3ebaf1410e3dd5756db989a47ab8063e";
    }
    const { countries: t1, currency, t } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const countries = t2;
    let t3;
    if ($[3] !== countries) {
        t3 = Array.isArray(countries) ? countries : [];
        $[3] = countries;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const countryList = t3;
    let t4;
    if ($[5] !== t) {
        t4 = t("experts.details.countries") || "Countries";
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-4",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== countryList || $[10] !== currency || $[11] !== t) {
        t6 = countryList.length > 0 ? countryList.map(_ExpertCountriesCardCountryListMap) : currency ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "h-4 w-4 text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
                    lineNumber: 59,
                    columnNumber: 163
                }, this),
                currency === "AED" ? "UAE (AED)" : currency
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
            lineNumber: 59,
            columnNumber: 100
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-400",
            children: t("experts.details.noCountries") || "No countries listed"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
            lineNumber: 59,
            columnNumber: 260
        }, this);
        $[9] = countryList;
        $[10] = currency;
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t5 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_c = ExpertCountriesCard;
function _ExpertCountriesCardCountryListMap(country, index) {
    const name = typeof country === "string" ? country : country?.name || String(country);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-sm text-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "h-4 w-4 text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
                lineNumber: 88,
                columnNumber: 85
            }, this),
            name
        ]
    }, index, true, {
        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx",
        lineNumber: 88,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertCountriesCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertExperiencesCard",
    ()=>ExpertExperiencesCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
;
;
function ExpertExperiencesCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "f40a2400fc6b687c81e37e99314daef69ea930083f1a69c56e21a89a1e74ec0f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f40a2400fc6b687c81e37e99314daef69ea930083f1a69c56e21a89a1e74ec0f";
    }
    const { experiences: t1, t } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const experiences = t2;
    let t3;
    if ($[3] !== experiences) {
        t3 = Array.isArray(experiences) ? experiences : [];
        $[3] = experiences;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const expList = t3;
    let t4;
    if ($[5] !== t) {
        t4 = t("experts.details.experience") || "Experience & Certifications";
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900 mb-4",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== expList || $[10] !== t) {
        t6 = expList.length > 0 ? expList.map(_ExpertExperiencesCardExpListMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-400",
            children: t("experts.details.noExperience") || "No experience listed"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
            lineNumber: 62,
            columnNumber: 79
        }, this);
        $[9] = expList;
        $[10] = t;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t5 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_c = ExpertExperiencesCard;
function _ExpertExperiencesCardExpListMap(exp, index) {
    const name = exp.cert_name || exp.name || exp.title || "Certification";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                    className: "h-4 w-4 text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                    lineNumber: 90,
                    columnNumber: 210
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                lineNumber: 90,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-gray-900 truncate",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                        lineNumber: 90,
                        columnNumber: 291
                    }, this),
                    exp.cert_year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-0.5",
                        children: exp.cert_year
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                        lineNumber: 90,
                        columnNumber: 377
                    }, this),
                    exp.cert_desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 mt-1 leading-relaxed",
                        children: exp.cert_desc
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                        lineNumber: 90,
                        columnNumber: 459
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
                lineNumber: 90,
                columnNumber: 259
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertExperiencesCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/experts/[id]/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$OverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/tabs/OverviewTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$ReviewsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/tabs/ReviewsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$TransactionsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/tabs/TransactionsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$UpcomingMeetingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/tabs/UpcomingMeetingsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$hooks$2f$useExpertDetailLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/hooks/useExpertDetailLogic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertHeaderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/ExpertHeaderCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertContactInfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/ExpertContactInfoCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertSpecializationsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/ExpertSpecializationsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertCountriesCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/ExpertCountriesCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertExperiencesCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/experts/[id]/components/ExpertExperiencesCard.tsx [app-client] (ecmascript)");
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
;
function ExpertDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(152);
    if ($[0] !== "f59e4d68e173698cbfaf82da94fd16390cde8153bb68bebbdb5941af694a882f") {
        for(let $i = 0; $i < 152; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f59e4d68e173698cbfaf82da94fd16390cde8153bb68bebbdb5941af694a882f";
    }
    const { params } = t0;
    const { id: expertId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { expertDetailsQuery, reviewsQuery, transactionsQuery, bookingsQuery, activeTab, setActiveTab, isActive, setIsActive, processingBookingId, handleConfirm, handleDecline, handleReschedule, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$hooks$2f$useExpertDetailLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpertDetailLogic"])(expertId);
    const { data: apiResponse, isLoading, isError, error } = expertDetailsQuery;
    const { data: reviewsData, isLoading: loadingReviews } = reviewsQuery;
    const { data: transactionsData, isLoading: loadingTransactions } = transactionsQuery;
    const { data: bookingsData, isLoading: loadingBookings } = bookingsQuery;
    let rawExpert = apiResponse?.data ?? apiResponse;
    if (rawExpert?.data && (rawExpert.data.expert_id || rawExpert.data.id || rawExpert.data.display_name)) {
        rawExpert = rawExpert.data;
    }
    let t1;
    if ($[1] !== expertId || $[2] !== rawExpert) {
        t1 = rawExpert && (rawExpert.expert_id || rawExpert.id || rawExpert.display_name || rawExpert.user) ? {
            ...rawExpert,
            expert_id: rawExpert.expert_id || rawExpert.id || expertId,
            display_name: rawExpert.display_name || rawExpert.name || "Expert",
            status: rawExpert.status || "approved",
            rating_avg: String(rawExpert.rating_avg || "0.00"),
            rating_count: rawExpert.rating_count ?? 0,
            consultions: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
            total_bookings: rawExpert.total_bookings ?? rawExpert.consultions ?? 0,
            responded_bookings: rawExpert.responded_bookings ?? 0,
            years_experience: rawExpert.years_experience ?? 0,
            starting_from: rawExpert.starting_from ?? 0,
            currency: rawExpert.currency || "AED",
            bio: rawExpert.bio || "",
            image_url: rawExpert.image_url || rawExpert.photo_url || null,
            packages: Array.isArray(rawExpert.packages) ? rawExpert.packages : [],
            stars_distribution: Array.isArray(rawExpert.stars_distribution) ? rawExpert.stars_distribution : [],
            countries: Array.isArray(rawExpert.countries) ? rawExpert.countries : [],
            categories: Array.isArray(rawExpert.categories) ? rawExpert.categories : [],
            experiences: Array.isArray(rawExpert.experiences) ? rawExpert.experiences : [],
            languages: Array.isArray(rawExpert.languages) ? rawExpert.languages : [],
            user: rawExpert.user || {
                first_name: rawExpert.first_name || rawExpert.display_name?.split(" ")[0] || "",
                last_name: rawExpert.last_name || rawExpert.display_name?.split(" ").slice(1).join(" ") || "",
                email: rawExpert.email || (typeof rawExpert.image_url === "string" ? rawExpert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1] : "") || "",
                phone_number: rawExpert.phone_number || rawExpert.phone || ""
            }
        } : null;
        $[1] = expertId;
        $[2] = rawExpert;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const expert = t1;
    const getStatusBadge = _ExpertDetailsPageGetStatusBadge;
    const formatDate = _ExpertDetailsPageFormatDate;
    if (isLoading) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-r-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 114,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        let t3;
        if ($[5] !== t) {
            t3 = t("experts.messages.loading") || "Loading expert details...";
            $[5] = t;
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        let t4;
        if ($[7] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-sm text-gray-600",
                            children: t3
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                            lineNumber: 129,
                            columnNumber: 104
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                    lineNumber: 129,
                    columnNumber: 71
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 129,
                columnNumber: 12
            }, this);
            $[7] = t3;
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        return t4;
    }
    if (isError) {
        const t2 = error;
        let t3;
        if ($[9] !== t2.message) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center text-red-500",
                children: [
                    "Error: ",
                    t2.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 141,
                columnNumber: 12
            }, this);
            $[9] = t2.message;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        return t3;
    }
    if (!expert) {
        let t2;
        if ($[11] !== t) {
            t2 = t("experts.table.noExperts") || "No data available";
            $[11] = t;
            $[12] = t2;
        } else {
            t2 = $[12];
        }
        let t3;
        if ($[13] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center text-gray-500",
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 160,
                columnNumber: 12
            }, this);
            $[13] = t2;
            $[14] = t3;
        } else {
            t3 = $[14];
        }
        return t3;
    }
    let t2;
    if ($[15] !== t) {
        t2 = t("common.home") || "Home";
        $[15] = t;
        $[16] = t2;
    } else {
        t2 = $[16];
    }
    let t3;
    if ($[17] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/admin/home",
            className: "hover:text-teal-600 transition-colors",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[17] = t2;
        $[18] = t3;
    } else {
        t3 = $[18];
    }
    let t4;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== t) {
        t5 = t("experts.title") || "Experts";
        $[20] = t;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/admin/experts",
            className: "hover:text-teal-600 transition-colors",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[22] = t5;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, this);
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== expert.display_name) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-900",
            children: expert.display_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        $[25] = expert.display_name;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== t3 || $[28] !== t6 || $[29] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-gray-500",
            children: [
                t3,
                t4,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[27] = t3;
        $[28] = t6;
        $[29] = t8;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== router) {
        t10 = ({
            "ExpertDetailsPage[<Button>.onClick]": ()=>router.push("/admin/experts")
        })["ExpertDetailsPage[<Button>.onClick]"];
        $[31] = router;
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    let t11;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== t) {
        t13 = t("experts.details.title") || "Expert Details";
        $[36] = t;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[38] = t13;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t12 || $[41] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t14;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== t) {
        t17 = t("experts.columns.contact") || "Contact";
        $[44] = t;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "gap-2",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[46] = t17;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    let t19;
    if ($[48] !== expert.expert_id || $[49] !== router) {
        t19 = ({
            "ExpertDetailsPage[<Button>.onClick]": ()=>router.push(`/admin/experts/${expert.expert_id}/edit`)
        })["ExpertDetailsPage[<Button>.onClick]"];
        $[48] = expert.expert_id;
        $[49] = router;
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    let t21;
    if ($[52] !== t) {
        t21 = t("common.edit") || "Edit";
        $[52] = t;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== t19 || $[55] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2",
            onClick: t19,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[54] = t19;
        $[55] = t21;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t18 || $[58] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t18,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[57] = t18;
        $[58] = t22;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    let t24;
    if ($[60] !== t15 || $[61] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[60] = t15;
        $[61] = t23;
        $[62] = t24;
    } else {
        t24 = $[62];
    }
    let t25;
    if ($[63] !== expert || $[64] !== t) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertHeaderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertHeaderCard"], {
            expert: expert,
            t: t
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[63] = expert;
        $[64] = t;
        $[65] = t25;
    } else {
        t25 = $[65];
    }
    let t26;
    if ($[66] !== expert || $[67] !== isActive || $[68] !== setIsActive || $[69] !== t) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertContactInfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertContactInfoCard"], {
            expert: expert,
            isActive: isActive,
            setIsActive: setIsActive,
            t: t
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[66] = expert;
        $[67] = isActive;
        $[68] = setIsActive;
        $[69] = t;
        $[70] = t26;
    } else {
        t26 = $[70];
    }
    let t27;
    if ($[71] !== expert.categories || $[72] !== t) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertSpecializationsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertSpecializationsCard"], {
            categories: expert.categories,
            t: t
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[71] = expert.categories;
        $[72] = t;
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    let t28;
    if ($[74] !== expert.countries || $[75] !== expert.currency || $[76] !== t) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertCountriesCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertCountriesCard"], {
            countries: expert.countries,
            currency: expert.currency,
            t: t
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[74] = expert.countries;
        $[75] = expert.currency;
        $[76] = t;
        $[77] = t28;
    } else {
        t28 = $[77];
    }
    let t29;
    if ($[78] !== expert.experiences || $[79] !== t) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$ExpertExperiencesCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertExperiencesCard"], {
            experiences: expert.experiences,
            t: t
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[78] = expert.experiences;
        $[79] = t;
        $[80] = t29;
    } else {
        t29 = $[80];
    }
    let t30;
    if ($[81] !== t26 || $[82] !== t27 || $[83] !== t28 || $[84] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t26,
                t27,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[81] = t26;
        $[82] = t27;
        $[83] = t28;
        $[84] = t29;
        $[85] = t30;
    } else {
        t30 = $[85];
    }
    let t31;
    if ($[86] !== t) {
        t31 = t("experts.details.overview") || "Overview";
        $[86] = t;
        $[87] = t31;
    } else {
        t31 = $[87];
    }
    let t32;
    if ($[88] !== t31) {
        t32 = {
            id: "overview",
            label: t31,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        };
        $[88] = t31;
        $[89] = t32;
    } else {
        t32 = $[89];
    }
    let t33;
    if ($[90] !== t) {
        t33 = t("experts.details.reviews") || "Reviews";
        $[90] = t;
        $[91] = t33;
    } else {
        t33 = $[91];
    }
    let t34;
    if ($[92] !== t33) {
        t34 = {
            id: "reviews",
            label: t33,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        };
        $[92] = t33;
        $[93] = t34;
    } else {
        t34 = $[93];
    }
    let t35;
    if ($[94] !== t) {
        t35 = t("experts.details.transactions") || "Transactions";
        $[94] = t;
        $[95] = t35;
    } else {
        t35 = $[95];
    }
    let t36;
    if ($[96] !== t35) {
        t36 = {
            id: "transactions",
            label: t35,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        };
        $[96] = t35;
        $[97] = t36;
    } else {
        t36 = $[97];
    }
    let t37;
    if ($[98] !== t) {
        t37 = t("experts.details.upcomingMeetings") || "Upcoming Meetings";
        $[98] = t;
        $[99] = t37;
    } else {
        t37 = $[99];
    }
    let t38;
    if ($[100] !== t37) {
        t38 = {
            id: "upcoming-meetings",
            label: t37,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        };
        $[100] = t37;
        $[101] = t38;
    } else {
        t38 = $[101];
    }
    let t39;
    if ($[102] !== t32 || $[103] !== t34 || $[104] !== t36 || $[105] !== t38) {
        t39 = [
            t32,
            t34,
            t36,
            t38
        ];
        $[102] = t32;
        $[103] = t34;
        $[104] = t36;
        $[105] = t38;
        $[106] = t39;
    } else {
        t39 = $[106];
    }
    let t40;
    if ($[107] !== activeTab || $[108] !== setActiveTab || $[109] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-200 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex overflow-x-auto",
                children: t39.map({
                    "ExpertDetailsPage[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ExpertDetailsPage[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab.id)
                            }["ExpertDetailsPage[(anonymous)() > <button>.onClick]"],
                            className: `flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id ? "border-teal-600 text-teal-600 bg-teal-50/50" : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    className: `h-4 w-4 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                                    lineNumber: 513,
                                    columnNumber: 327
                                }, this),
                                tab.label
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                            lineNumber: 511,
                            columnNumber: 54
                        }, this)
                }["ExpertDetailsPage[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 510,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[107] = activeTab;
        $[108] = setActiveTab;
        $[109] = t39;
        $[110] = t40;
    } else {
        t40 = $[110];
    }
    let t41;
    if ($[111] !== activeTab || $[112] !== expert || $[113] !== t) {
        t41 = activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$OverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverviewTab"], {
            expert: expert,
            t: t,
            formatDate: formatDate,
            getStatusBadge: getStatusBadge
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 524,
            columnNumber: 39
        }, this);
        $[111] = activeTab;
        $[112] = expert;
        $[113] = t;
        $[114] = t41;
    } else {
        t41 = $[114];
    }
    let t42;
    if ($[115] !== activeTab || $[116] !== expert || $[117] !== loadingReviews || $[118] !== reviewsData || $[119] !== t) {
        t42 = activeTab === "reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$ReviewsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewsTab"], {
            loadingReviews: loadingReviews,
            reviewsData: reviewsData,
            expert: expert,
            t: t,
            formatDate: formatDate
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 534,
            columnNumber: 38
        }, this);
        $[115] = activeTab;
        $[116] = expert;
        $[117] = loadingReviews;
        $[118] = reviewsData;
        $[119] = t;
        $[120] = t42;
    } else {
        t42 = $[120];
    }
    let t43;
    if ($[121] !== activeTab || $[122] !== expert || $[123] !== loadingTransactions || $[124] !== t || $[125] !== transactionsData) {
        t43 = activeTab === "transactions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$TransactionsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsTab"], {
            loadingTransactions: loadingTransactions,
            transactionsData: transactionsData,
            expert: expert,
            t: t,
            formatDate: formatDate
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 546,
            columnNumber: 43
        }, this);
        $[121] = activeTab;
        $[122] = expert;
        $[123] = loadingTransactions;
        $[124] = t;
        $[125] = transactionsData;
        $[126] = t43;
    } else {
        t43 = $[126];
    }
    let t44;
    if ($[127] !== activeTab || $[128] !== bookingsData || $[129] !== handleConfirm || $[130] !== handleDecline || $[131] !== handleReschedule || $[132] !== loadingBookings || $[133] !== processingBookingId || $[134] !== t) {
        t44 = activeTab === "upcoming-meetings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$components$2f$tabs$2f$UpcomingMeetingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpcomingMeetingsTab"], {
            loadingBookings: loadingBookings,
            bookingsData: bookingsData,
            processingBookingId: processingBookingId,
            handleConfirm: handleConfirm,
            handleDecline: handleDecline,
            handleReschedule: handleReschedule,
            t: t,
            formatDate: formatDate
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 558,
            columnNumber: 48
        }, this);
        $[127] = activeTab;
        $[128] = bookingsData;
        $[129] = handleConfirm;
        $[130] = handleDecline;
        $[131] = handleReschedule;
        $[132] = loadingBookings;
        $[133] = processingBookingId;
        $[134] = t;
        $[135] = t44;
    } else {
        t44 = $[135];
    }
    let t45;
    if ($[136] !== t41 || $[137] !== t42 || $[138] !== t43 || $[139] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t41,
                t42,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[136] = t41;
        $[137] = t42;
        $[138] = t43;
        $[139] = t44;
        $[140] = t45;
    } else {
        t45 = $[140];
    }
    let t46;
    if ($[141] !== t40 || $[142] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200",
                children: [
                    t40,
                    t45
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
                lineNumber: 584,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[141] = t40;
        $[142] = t45;
        $[143] = t46;
    } else {
        t46 = $[143];
    }
    let t47;
    if ($[144] !== t30 || $[145] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                t30,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[144] = t30;
        $[145] = t46;
        $[146] = t47;
    } else {
        t47 = $[146];
    }
    let t48;
    if ($[147] !== t24 || $[148] !== t25 || $[149] !== t47 || $[150] !== t9) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 px-3 space-y-4 max-w-full overflow-hidden",
            children: [
                t9,
                t24,
                t25,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
            lineNumber: 602,
            columnNumber: 11
        }, this);
        $[147] = t24;
        $[148] = t25;
        $[149] = t47;
        $[150] = t9;
        $[151] = t48;
    } else {
        t48 = $[151];
    }
    return t48;
}
_s(ExpertDetailsPage, "Mkiwgk0OykMN/oc1Elh1FI2a3yA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$experts$2f5b$id$5d2f$hooks$2f$useExpertDetailLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpertDetailLogic"]
    ];
});
_c = ExpertDetailsPage;
function _ExpertDetailsPageFormatDate(dateString) {
    if (!dateString) {
        return "N/A";
    }
    const date = new Date(dateString.replace(" ", "T"));
    if (isNaN(date.getTime())) {
        return "N/A";
    }
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
function _ExpertDetailsPageGetStatusBadge(status) {
    const styles = {
        approved: "bg-green-50 text-green-700 border-green-200",
        pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
        rejected: "bg-red-50 text-red-700 border-red-200"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        className: `${styles[status] || "bg-gray-50 text-gray-700 border-gray-200"} border text-xs capitalize`,
        children: status
    }, void 0, false, {
        fileName: "[project]/src/app/admin/experts/[id]/page.client.tsx",
        lineNumber: 633,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1f92e24b._.js.map