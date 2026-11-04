(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/developer/home/components/DeveloperChartsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperChartsSection",
    ()=>DeveloperChartsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DeveloperChartsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(207);
    if ($[0] !== "950bd7df88c88ea4baea8c7de59733a612c4796807d6e74cc12e1a9c72066bc1") {
        for(let $i = 0; $i < 207; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "950bd7df88c88ea4baea8c7de59733a612c4796807d6e74cc12e1a9c72066bc1";
    }
    const { statusData, onPeriodChange, currentPeriod, countsData } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const completedCount = countsData?.units_sold?.value || statusData?.data?.completed || 0;
    const inProgressCount = countsData?.sales_offers?.value || (statusData?.data?.pending || 0) + (statusData?.data?.in_progress || 0) || 0;
    const totalBookingsCount = countsData?.total_bookings?.value || statusData?.data?.total || 0;
    const cancelledCount = countsData ? Math.max(totalBookingsCount - (completedCount + inProgressCount), 0) : statusData?.data?.cancelled || 0;
    const maxVal = Math.max(completedCount, inProgressCount, cancelledCount, totalBookingsCount, 1);
    let t1;
    if ($[1] !== completedCount || $[2] !== maxVal) {
        t1 = Math.round(completedCount / maxVal * 100);
        $[1] = completedCount;
        $[2] = maxVal;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const salesPurchaseHeight = Math.max(t1, 5) + "%";
    let t2;
    if ($[4] !== inProgressCount || $[5] !== maxVal) {
        t2 = Math.round(inProgressCount / maxVal * 100);
        $[4] = inProgressCount;
        $[5] = maxVal;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const downPaymentHeight = Math.max(t2, 5) + "%";
    let t3;
    if ($[7] !== cancelledCount || $[8] !== maxVal) {
        t3 = Math.round(cancelledCount / maxVal * 100);
        $[7] = cancelledCount;
        $[8] = maxVal;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const salesOfferHeight = Math.max(t3, 5) + "%";
    let t4;
    if ($[10] !== maxVal || $[11] !== totalBookingsCount) {
        t4 = Math.round(totalBookingsCount / maxVal * 100);
        $[10] = maxVal;
        $[11] = totalBookingsCount;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const identificationHeight = Math.max(t4, 5) + "%";
    const totalSum = completedCount + inProgressCount + cancelledCount || 1;
    const completedPct = completedCount / totalSum * 100;
    const inProgressPct = inProgressCount / totalSum * 100;
    const cancelledPct = cancelledCount / totalSum * 100;
    let t5;
    if ($[13] !== t) {
        t5 = t("dashboardHome.stats.activeProjects");
        $[13] = t;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const t6 = countsData?.active_projects?.value || 0;
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = {
            key: "activeProjects",
            label: t5,
            value: t6
        };
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t) {
        t8 = t("dashboardHome.stats.totalProperties");
        $[18] = t;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = countsData?.total_properties?.value || 0;
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = {
            key: "totalProperties",
            label: t8,
            value: t9
        };
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t) {
        t11 = t("dashboardHome.stats.totalViews");
        $[23] = t;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    const t12 = countsData?.total_views?.value || 0;
    let t13;
    if ($[25] !== t11 || $[26] !== t12) {
        t13 = {
            key: "totalViews",
            label: t11,
            value: t12
        };
        $[25] = t11;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t) {
        t14 = t("dashboardHome.stats.featuredAds");
        $[28] = t;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    const t15 = countsData?.featured_ads?.value || 0;
    let t16;
    if ($[30] !== t14 || $[31] !== t15) {
        t16 = {
            key: "featuredAds",
            label: t14,
            value: t15
        };
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t10 || $[34] !== t13 || $[35] !== t16 || $[36] !== t7) {
        t17 = [
            t7,
            t10,
            t13,
            t16
        ];
        $[33] = t10;
        $[34] = t13;
        $[35] = t16;
        $[36] = t7;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    const stagesToRender = t17;
    let t18;
    if ($[38] !== stagesToRender) {
        t18 = stagesToRender.map(_DeveloperChartsSectionStagesToRenderMap);
        $[38] = stagesToRender;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    const maxStageValue = Math.max(...t18, 1);
    let t19;
    if ($[40] !== t) {
        t19 = t("dashboardHome.charts.salesStagesStatusOverview");
        $[40] = t;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t) {
        t21 = t("dashboardHome.charts.salesStagesStatusSubtitle");
        $[44] = t;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mt-1",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t20 || $[49] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[48] = t20;
        $[49] = t22;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    const t24 = currentPeriod || "all";
    let t25;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[130px] bg-gray-50 border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                lineNumber: 232,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== t) {
        t26 = t("dashboardHome.dateRanges.allTime");
        $[52] = t;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[54] = t26;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t) {
        t28 = t("dashboardHome.dateRanges.last7Days");
        $[56] = t;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last7",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[58] = t28;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== t) {
        t30 = t("dashboardHome.dateRanges.last30Days");
        $[60] = t;
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    let t31;
    if ($[62] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last30",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[62] = t30;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] !== t27 || $[65] !== t29 || $[66] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t27,
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[64] = t27;
        $[65] = t29;
        $[66] = t31;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== currentPeriod || $[69] !== onPeriodChange || $[70] !== t24 || $[71] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            defaultValue: t24,
            value: currentPeriod,
            onValueChange: onPeriodChange,
            children: [
                t25,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[68] = currentPeriod;
        $[69] = onPeriodChange;
        $[70] = t24;
        $[71] = t32;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== t23 || $[74] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
            children: [
                t23,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[73] = t23;
        $[74] = t33;
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== salesPurchaseHeight) {
        t35 = {
            height: salesPurchaseHeight
        };
        $[76] = salesPurchaseHeight;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-green-500 h-full transition-all hover:brightness-110"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[78] = t36;
    } else {
        t36 = $[78];
    }
    let t37;
    if ($[79] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner",
            style: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[79] = t35;
        $[80] = t37;
    } else {
        t37 = $[80];
    }
    let t38;
    if ($[81] !== t) {
        t38 = t("dashboardHome.charts.salesPurchase");
        $[81] = t;
        $[82] = t38;
    } else {
        t38 = $[82];
    }
    let t39;
    if ($[83] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[83] = t38;
        $[84] = t39;
    } else {
        t39 = $[84];
    }
    let t40;
    if ($[85] !== t37 || $[86] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-end h-full",
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[85] = t37;
        $[86] = t39;
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    let t41;
    if ($[88] !== downPaymentHeight) {
        t41 = {
            height: downPaymentHeight
        };
        $[88] = downPaymentHeight;
        $[89] = t41;
    } else {
        t41 = $[89];
    }
    let t42;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-cyan-400 h-full transition-all hover:brightness-110"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[90] = t42;
    } else {
        t42 = $[90];
    }
    let t43;
    if ($[91] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner",
            style: t41,
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[91] = t41;
        $[92] = t43;
    } else {
        t43 = $[92];
    }
    let t44;
    if ($[93] !== t) {
        t44 = t("dashboardHome.charts.downPayment");
        $[93] = t;
        $[94] = t44;
    } else {
        t44 = $[94];
    }
    let t45;
    if ($[95] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center",
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[95] = t44;
        $[96] = t45;
    } else {
        t45 = $[96];
    }
    let t46;
    if ($[97] !== t43 || $[98] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-end h-full",
            children: [
                t43,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[97] = t43;
        $[98] = t45;
        $[99] = t46;
    } else {
        t46 = $[99];
    }
    let t47;
    if ($[100] !== salesOfferHeight) {
        t47 = {
            height: salesOfferHeight
        };
        $[100] = salesOfferHeight;
        $[101] = t47;
    } else {
        t47 = $[101];
    }
    let t48;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-pink-500 h-full transition-all hover:brightness-110"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[102] = t48;
    } else {
        t48 = $[102];
    }
    let t49;
    if ($[103] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner",
            style: t47,
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[103] = t47;
        $[104] = t49;
    } else {
        t49 = $[104];
    }
    let t50;
    if ($[105] !== t) {
        t50 = t("dashboardHome.charts.salesOffer");
        $[105] = t;
        $[106] = t50;
    } else {
        t50 = $[106];
    }
    let t51;
    if ($[107] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[107] = t50;
        $[108] = t51;
    } else {
        t51 = $[108];
    }
    let t52;
    if ($[109] !== t49 || $[110] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-end h-full",
            children: [
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[109] = t49;
        $[110] = t51;
        $[111] = t52;
    } else {
        t52 = $[111];
    }
    let t53;
    if ($[112] !== identificationHeight) {
        t53 = {
            height: identificationHeight
        };
        $[112] = identificationHeight;
        $[113] = t53;
    } else {
        t53 = $[113];
    }
    const t54 = `${cancelledPct}%`;
    let t55;
    if ($[114] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-pink-500 transition-all hover:brightness-110",
            style: {
                height: t54
            }
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[114] = t54;
        $[115] = t55;
    } else {
        t55 = $[115];
    }
    const t56 = `${inProgressPct}%`;
    let t57;
    if ($[116] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-cyan-400 transition-all hover:brightness-110",
            style: {
                height: t56
            }
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[116] = t56;
        $[117] = t57;
    } else {
        t57 = $[117];
    }
    const t58 = `${completedPct}%`;
    let t59;
    if ($[118] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-green-500 transition-all hover:brightness-110",
            style: {
                height: t58
            }
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[118] = t58;
        $[119] = t59;
    } else {
        t59 = $[119];
    }
    let t60;
    if ($[120] !== t53 || $[121] !== t55 || $[122] !== t57 || $[123] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[50px] sm:max-w-[60px] bg-gray-100 rounded-t-xl overflow-hidden flex flex-col justify-end relative shadow-inner",
            style: t53,
            children: [
                t55,
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[120] = t53;
        $[121] = t55;
        $[122] = t57;
        $[123] = t59;
        $[124] = t60;
    } else {
        t60 = $[124];
    }
    let t61;
    if ($[125] !== t) {
        t61 = t("dashboardHome.charts.identification");
        $[125] = t;
        $[126] = t61;
    } else {
        t61 = $[126];
    }
    let t62;
    if ($[127] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium text-gray-600 mt-3 text-center h-8 flex items-center",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[127] = t61;
        $[128] = t62;
    } else {
        t62 = $[128];
    }
    let t63;
    if ($[129] !== t60 || $[130] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-end h-full",
            children: [
                t60,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[129] = t60;
        $[130] = t62;
        $[131] = t63;
    } else {
        t63 = $[131];
    }
    let t64;
    if ($[132] !== t40 || $[133] !== t46 || $[134] !== t52 || $[135] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-around h-64 gap-4 px-2",
            children: [
                t40,
                t46,
                t52,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[132] = t40;
        $[133] = t46;
        $[134] = t52;
        $[135] = t63;
        $[136] = t64;
    } else {
        t64 = $[136];
    }
    let t65;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-3 h-3 rounded-full bg-green-500 shadow-sm"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[137] = t65;
    } else {
        t65 = $[137];
    }
    let t66;
    if ($[138] !== t) {
        t66 = t("dashboardHome.charts.completed");
        $[138] = t;
        $[139] = t66;
    } else {
        t66 = $[139];
    }
    let t67;
    if ($[140] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t65,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm text-gray-700 font-medium",
                    children: t66
                }, void 0, false, {
                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                    lineNumber: 572,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[140] = t66;
        $[141] = t67;
    } else {
        t67 = $[141];
    }
    let t68;
    if ($[142] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-3 h-3 rounded-full bg-cyan-400 shadow-sm"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[142] = t68;
    } else {
        t68 = $[142];
    }
    let t69;
    if ($[143] !== t) {
        t69 = t("dashboardHome.charts.inProgress");
        $[143] = t;
        $[144] = t69;
    } else {
        t69 = $[144];
    }
    let t70;
    if ($[145] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t68,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm text-gray-700 font-medium",
                    children: t69
                }, void 0, false, {
                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                    lineNumber: 595,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[145] = t69;
        $[146] = t70;
    } else {
        t70 = $[146];
    }
    let t71;
    if ($[147] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-3 h-3 rounded-full bg-pink-500 shadow-sm"
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[147] = t71;
    } else {
        t71 = $[147];
    }
    let t72;
    if ($[148] !== t) {
        t72 = t("dashboardHome.charts.rejected");
        $[148] = t;
        $[149] = t72;
    } else {
        t72 = $[149];
    }
    let t73;
    if ($[150] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs sm:text-sm text-gray-700 font-medium",
                    children: t72
                }, void 0, false, {
                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                    lineNumber: 618,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[150] = t72;
        $[151] = t73;
    } else {
        t73 = $[151];
    }
    let t74;
    if ($[152] !== t67 || $[153] !== t70 || $[154] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-gray-100",
            children: [
                t67,
                t70,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[152] = t67;
        $[153] = t70;
        $[154] = t73;
        $[155] = t74;
    } else {
        t74 = $[155];
    }
    let t75;
    if ($[156] !== t64 || $[157] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col justify-center space-y-8",
            children: [
                t64,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[156] = t64;
        $[157] = t74;
        $[158] = t75;
    } else {
        t75 = $[158];
    }
    let t76;
    if ($[159] !== t34 || $[160] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6 flex flex-col",
            children: [
                t34,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[159] = t34;
        $[160] = t75;
        $[161] = t76;
    } else {
        t76 = $[161];
    }
    let t77;
    if ($[162] !== t) {
        t77 = t("dashboardHome.charts.salesStages");
        $[162] = t;
        $[163] = t77;
    } else {
        t77 = $[163];
    }
    let t78;
    if ($[164] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900",
            children: t77
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[164] = t77;
        $[165] = t78;
    } else {
        t78 = $[165];
    }
    let t79;
    if ($[166] !== t) {
        t79 = t("dashboardHome.charts.salesStagesSubtitle");
        $[166] = t;
        $[167] = t79;
    } else {
        t79 = $[167];
    }
    let t80;
    if ($[168] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mt-1",
            children: t79
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 678,
            columnNumber: 11
        }, this);
        $[168] = t79;
        $[169] = t80;
    } else {
        t80 = $[169];
    }
    let t81;
    if ($[170] !== t78 || $[171] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t78,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[170] = t78;
        $[171] = t80;
        $[172] = t81;
    } else {
        t81 = $[172];
    }
    const t82 = currentPeriod || "all";
    let t83;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[130px] bg-gray-50 border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                lineNumber: 696,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 696,
            columnNumber: 11
        }, this);
        $[173] = t83;
    } else {
        t83 = $[173];
    }
    let t84;
    if ($[174] !== t) {
        t84 = t("dashboardHome.dateRanges.allTime");
        $[174] = t;
        $[175] = t84;
    } else {
        t84 = $[175];
    }
    let t85;
    if ($[176] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t84
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, this);
        $[176] = t84;
        $[177] = t85;
    } else {
        t85 = $[177];
    }
    let t86;
    if ($[178] !== t) {
        t86 = t("dashboardHome.dateRanges.last7Days");
        $[178] = t;
        $[179] = t86;
    } else {
        t86 = $[179];
    }
    let t87;
    if ($[180] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last7",
            children: t86
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[180] = t86;
        $[181] = t87;
    } else {
        t87 = $[181];
    }
    let t88;
    if ($[182] !== t) {
        t88 = t("dashboardHome.dateRanges.last30Days");
        $[182] = t;
        $[183] = t88;
    } else {
        t88 = $[183];
    }
    let t89;
    if ($[184] !== t88) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last30",
            children: t88
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 743,
            columnNumber: 11
        }, this);
        $[184] = t88;
        $[185] = t89;
    } else {
        t89 = $[185];
    }
    let t90;
    if ($[186] !== t85 || $[187] !== t87 || $[188] !== t89) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t85,
                t87,
                t89
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 751,
            columnNumber: 11
        }, this);
        $[186] = t85;
        $[187] = t87;
        $[188] = t89;
        $[189] = t90;
    } else {
        t90 = $[189];
    }
    let t91;
    if ($[190] !== currentPeriod || $[191] !== onPeriodChange || $[192] !== t82 || $[193] !== t90) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            defaultValue: t82,
            value: currentPeriod,
            onValueChange: onPeriodChange,
            children: [
                t83,
                t90
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, this);
        $[190] = currentPeriod;
        $[191] = onPeriodChange;
        $[192] = t82;
        $[193] = t90;
        $[194] = t91;
    } else {
        t91 = $[194];
    }
    let t92;
    if ($[195] !== t81 || $[196] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
            children: [
                t81,
                t91
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 772,
            columnNumber: 11
        }, this);
        $[195] = t81;
        $[196] = t91;
        $[197] = t92;
    } else {
        t92 = $[197];
    }
    let t93;
    if ($[198] !== maxStageValue || $[199] !== stagesToRender) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-around h-64 gap-4 px-2",
                children: stagesToRender.map({
                    "DeveloperChartsSection[stagesToRender.map()]": (stageItem, index)=>{
                        const heightPercentage = Math.max(Math.round(Number(stageItem.value) / maxStageValue * 100), 5) + "%";
                        const colors = [
                            "bg-gradient-to-t from-teal-600 to-teal-400 shadow-teal-500/20",
                            "bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-cyan-500/20",
                            "bg-gradient-to-t from-purple-600 to-purple-400 shadow-purple-500/20",
                            "bg-gradient-to-t from-orange-600 to-orange-400 shadow-orange-500/20"
                        ];
                        const color = colors[index % colors.length];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-[50px] sm:max-w-[60px] bg-gray-50 rounded-t-xl overflow-hidden h-56 flex flex-col justify-end relative shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full ${color} transition-all duration-700 ease-out rounded-t-xl opacity-85 group-hover:opacity-100 shadow-lg relative`,
                                        style: {
                                            height: heightPercentage
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg pointer-events-none whitespace-nowrap z-10",
                                            children: [
                                                stageItem.value,
                                                " ",
                                                stageItem.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                                            lineNumber: 788,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                                        lineNumber: 786,
                                        columnNumber: 286
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                                    lineNumber: 786,
                                    columnNumber: 140
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-gray-800 mt-3",
                                    children: stageItem.value
                                }, void 0, false, {
                                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                                    lineNumber: 788,
                                    columnNumber: 296
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 mt-1 text-center font-medium line-clamp-1 max-w-[80px] h-8 flex items-center",
                                    children: stageItem.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                                    lineNumber: 788,
                                    columnNumber: 375
                                }, this)
                            ]
                        }, stageItem.key, true, {
                            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                            lineNumber: 786,
                            columnNumber: 20
                        }, this);
                    }
                }["DeveloperChartsSection[stagesToRender.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
                lineNumber: 781,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 781,
            columnNumber: 11
        }, this);
        $[198] = maxStageValue;
        $[199] = stagesToRender;
        $[200] = t93;
    } else {
        t93 = $[200];
    }
    let t94;
    if ($[201] !== t92 || $[202] !== t93) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-6",
            children: [
                t92,
                t93
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[201] = t92;
        $[202] = t93;
        $[203] = t94;
    } else {
        t94 = $[203];
    }
    let t95;
    if ($[204] !== t76 || $[205] !== t94) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [
                t76,
                t94
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/developer/home/components/DeveloperChartsSection.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[204] = t76;
        $[205] = t94;
        $[206] = t95;
    } else {
        t95 = $[206];
    }
    return t95;
}
_s(DeveloperChartsSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperChartsSection;
function _DeveloperChartsSectionStagesToRenderMap(s) {
    return Number(s.value);
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperChartsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/developer/home/components/DeveloperChartsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/developer/home/components/DeveloperChartsSection.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_developer_home_components_DeveloperChartsSection_tsx_87342932._.js.map