(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/home/components/BookingsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingsSection",
    ()=>BookingsSection,
    "getStageLabel",
    ()=>getStageLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
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
const ITEMS_PER_PAGE = 5;
// Booking `status` values stay in English (they drive color lookups); only the rendered label is translated.
const STAGE_LABEL_KEYS = {
    Cancelled: "dashboardHome.charts.rejected",
    Identification: "dashboardHome.charts.identification",
    "Sales Offer": "dashboardHome.charts.salesOffer",
    "Down Payment": "dashboardHome.charts.downPayment",
    "Sales Purchase": "dashboardHome.charts.salesPurchase",
    Completed: "dashboardHome.charts.completed",
    Open: "dashboardHome.charts.open"
};
function getStageLabel(status, t) {
    const key = STAGE_LABEL_KEYS[status];
    return key ? t(key) : status;
}
const BookingsSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function BookingsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "dcdfffa5d87d670c6bbb275eff9879ccc84cf634156e1400dbb49cf2b76de099") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dcdfffa5d87d670c6bbb275eff9879ccc84cf634156e1400dbb49cf2b76de099";
    }
    const { bookings, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE) || 1;
    const safePage = Math.min(currentPage, totalPages);
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== bookings || $[2] !== className || $[3] !== routePrefix || $[4] !== safePage || $[5] !== t) {
        const displayBookings = bookings.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);
        t5 = `bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`;
        let t6;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "h-4 w-4 text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 61,
                columnNumber: 12
            }, this);
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        let t7;
        if ($[11] !== t) {
            t7 = t("dashboardHome.bookings.title");
            $[11] = t;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        let t8;
        if ($[13] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-800",
                        children: t7
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                        lineNumber: 76,
                        columnNumber: 57
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 76,
                columnNumber: 12
            }, this);
            $[13] = t7;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        const t9 = `${routePrefix}/reservations`;
        let t10;
        if ($[15] !== t) {
            t10 = t("dashboardHome.bookings.viewAll");
            $[15] = t;
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        let t11;
        if ($[17] !== t10 || $[18] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t9,
                prefetch: false,
                className: "text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this);
            $[17] = t10;
            $[18] = t9;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        if ($[20] !== t11 || $[21] !== t8) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    t8,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 101,
                columnNumber: 12
            }, this);
            $[20] = t11;
            $[21] = t8;
            $[22] = t4;
        } else {
            t4 = $[22];
        }
        t2 = "space-y-0 min-h-[220px]";
        t3 = displayBookings.length > 0 ? displayBookings.map({
            "BookingsSection[displayBookings.map()]": (booking)=>{
                const bookingCode = `BK-${String(booking.id).padStart(7, "0")}`;
                const targetUrl = booking.id ? `${routePrefix}/reservations/${booking.id}` : `${routePrefix}/reservations`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: targetUrl,
                    prefetch: false,
                    className: "flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors px-1.5 -mx-1.5 rounded-md group cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 435
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 299
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors block truncate",
                                            children: booking.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                            lineNumber: 113,
                                            columnNumber: 512
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: bookingCode
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                            lineNumber: 113,
                                            columnNumber: 644
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 487
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 113,
                            columnNumber: 250
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-orange-500 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded flex-shrink-0",
                            children: booking.status ? getStageLabel(booking.status, t) : t("dashboardHome.charts.open")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 113,
                            columnNumber: 716
                        }, this)
                    ]
                }, booking.id, true, {
                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                    lineNumber: 113,
                    columnNumber: 16
                }, this);
            }
        }["BookingsSection[displayBookings.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-xs text-gray-400 py-12",
            children: t("dashboardHome.bookings.noBookings")
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
            lineNumber: 115,
            columnNumber: 52
        }, this);
        $[1] = bookings;
        $[2] = className;
        $[3] = routePrefix;
        $[4] = safePage;
        $[5] = t;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
    }
    let t6;
    if ($[23] !== t2 || $[24] !== t3) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[23] = t2;
        $[24] = t3;
        $[25] = t6;
    } else {
        t6 = $[25];
    }
    let t7;
    if ($[26] !== t4 || $[27] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[26] = t4;
        $[27] = t6;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    let t8;
    if ($[29] !== bookings.length || $[30] !== safePage || $[31] !== totalPages) {
        t8 = bookings.length > ITEMS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        (safePage - 1) * ITEMS_PER_PAGE + 1,
                        "-",
                        Math.min(safePage * ITEMS_PER_PAGE, bookings.length),
                        " / ",
                        bookings.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                    lineNumber: 151,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                            onClick: {
                                "BookingsSection[<Button>.onClick]": ()=>setCurrentPage(_BookingsSectionButtonOnClickSetCurrentPage)
                            }["BookingsSection[<Button>.onClick]"],
                            disabled: safePage === 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-3.5 w-3.5 rtl:rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 153,
                                columnNumber: 75
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 151,
                            columnNumber: 320
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium text-gray-700 px-1",
                            children: [
                                safePage,
                                " / ",
                                totalPages
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 153,
                            columnNumber: 138
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                            onClick: {
                                "BookingsSection[<Button>.onClick]": ()=>setCurrentPage({
                                        "BookingsSection[<Button>.onClick > setCurrentPage()]": (p_0)=>Math.min(totalPages, p_0 + 1)
                                    }["BookingsSection[<Button>.onClick > setCurrentPage()]"])
                            }["BookingsSection[<Button>.onClick]"],
                            disabled: safePage === totalPages,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-3.5 w-3.5 rtl:rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 157,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 153,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                    lineNumber: 151,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
            lineNumber: 151,
            columnNumber: 46
        }, this);
        $[29] = bookings.length;
        $[30] = safePage;
        $[31] = totalPages;
        $[32] = t8;
    } else {
        t8 = $[32];
    }
    let t9;
    if ($[33] !== t5 || $[34] !== t7 || $[35] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[33] = t5;
        $[34] = t7;
        $[35] = t8;
        $[36] = t9;
    } else {
        t9 = $[36];
    }
    return t9;
}, "kiDUHAUOKyFlWTdqEe2VaGu85Aw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
})), "kiDUHAUOKyFlWTdqEe2VaGu85Aw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = BookingsSection;
function _BookingsSectionButtonOnClickSetCurrentPage(p) {
    return Math.max(1, p - 1);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "BookingsSection$memo");
__turbopack_context__.k.register(_c1, "BookingsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/home/components/BookingsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/home/components/BookingsSection.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_57ac39a8._.js.map