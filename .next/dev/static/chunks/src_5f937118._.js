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
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
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
"[project]/src/lib/payment-plans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYMENT_PLAN_ITEM_TYPES",
    ()=>PAYMENT_PLAN_ITEM_TYPES,
    "addDraftPlanItems",
    ()=>addDraftPlanItems,
    "buildDraftPlanItems",
    ()=>buildDraftPlanItems,
    "buildPaymentPlanPayload",
    ()=>buildPaymentPlanPayload,
    "draftFromPlanItems",
    ()=>draftFromPlanItems,
    "draftRowsForExistingItems",
    ()=>draftRowsForExistingItems,
    "extractPaymentPlans",
    ()=>extractPaymentPlans,
    "getCreatedPlanId",
    ()=>getCreatedPlanId,
    "getInstallmentItemType",
    ()=>getInstallmentItemType,
    "getPaymentPlanItemTypeLabel",
    ()=>getPaymentPlanItemTypeLabel,
    "mergeEntityPaymentPlans",
    ()=>mergeEntityPaymentPlans,
    "normalizeItemType",
    ()=>normalizeItemType,
    "savePlanItems",
    ()=>savePlanItems,
    "toApiItemType",
    ()=>toApiItemType,
    "toPaymentPlanItemList",
    ()=>toPaymentPlanItemList,
    "toPaymentPlanList",
    ()=>toPaymentPlanList,
    "toPaymentPlanView",
    ()=>toPaymentPlanView,
    "withPlanItems",
    ()=>withPlanItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
;
const PAYMENT_PLAN_ITEM_TYPES = [
    {
        value: "Booking",
        labelKey: "projects.paymentPlans.types.booking"
    },
    {
        value: "Reservation",
        labelKey: "projects.paymentPlans.types.reservation"
    },
    {
        value: "Down payment",
        labelKey: "projects.paymentPlans.types.downPayment"
    },
    {
        value: "Monthly installment",
        labelKey: "projects.paymentPlans.types.monthlyInstallment"
    },
    {
        value: "Quarterly installment",
        labelKey: "projects.paymentPlans.types.quarterlyInstallment"
    },
    {
        value: "Half year installment",
        labelKey: "projects.paymentPlans.types.halfYearInstallment"
    },
    {
        value: "Yearly installment",
        labelKey: "projects.paymentPlans.types.yearlyInstallment"
    },
    {
        value: "installments before handover",
        labelKey: "projects.paymentPlans.types.installmentsBeforeHandover"
    },
    {
        value: "Handover installment",
        labelKey: "projects.paymentPlans.types.handoverInstallment"
    },
    {
        value: "installments after handover",
        labelKey: "projects.paymentPlans.types.installmentsAfterHandover"
    },
    {
        value: "Maintenance yearly fees",
        labelKey: "projects.paymentPlans.types.maintenanceYearlyFees"
    },
    {
        value: "Maintenance deposit",
        labelKey: "projects.paymentPlans.types.maintenanceDeposit"
    },
    {
        value: "Registration fees",
        labelKey: "projects.paymentPlans.types.registrationFees"
    },
    {
        value: "DLD payment",
        labelKey: "projects.paymentPlans.types.dldPayment"
    },
    {
        value: "Handover fees",
        labelKey: "projects.paymentPlans.types.handoverFees"
    },
    {
        value: "Other fees",
        labelKey: "projects.paymentPlans.types.otherFees"
    }
];
function normalizeItemType(type) {
    return type.trim().toLowerCase().replace(/[\s-]+/g, "_");
}
function toApiItemType(type) {
    const key = normalizeItemType(type);
    return PAYMENT_PLAN_ITEM_TYPES.find((o)=>normalizeItemType(o.value) === key)?.value ?? type;
}
function getPaymentPlanItemTypeLabel(type, t) {
    const key = normalizeItemType(type);
    const option = PAYMENT_PLAN_ITEM_TYPES.find((o)=>normalizeItemType(o.value) === key);
    return option ? t(option.labelKey) : type;
}
const PERIOD_ITEM_TYPE = {
    Monthly: "Monthly installment",
    Quarterly: "Quarterly installment",
    "Semi-Annually": "Half year installment",
    Yearly: "Yearly installment",
    "During Construction": "installments before handover",
    "Post Handover (2 Years)": "installments after handover",
    "Post Handover (3 Years)": "installments after handover",
    Immediate: "Down payment"
};
function getInstallmentItemType(period) {
    return PERIOD_ITEM_TYPE[period] ?? "Monthly installment";
}
const PERIOD_MONTHS = {
    Monthly: 1,
    Quarterly: 3,
    "Semi-Annually": 6,
    Yearly: 12
};
function estimatePeriodByYears(plan) {
    if (plan.period === "Immediate") return 0;
    if (plan.period === "Post Handover (2 Years)") return 2;
    if (plan.period === "Post Handover (3 Years)") return 3;
    const months = PERIOD_MONTHS[plan.period ?? ""];
    if (months && plan.installments_count) {
        return Math.max(1, Math.ceil(months * plan.installments_count / 12));
    }
    return 1;
}
function buildPaymentPlanPayload(plan, fallbackUserId) {
    const userId = plan.user_id || fallbackUserId;
    return {
        name: plan.name.trim(),
        payment_plan_type: plan.payment_plan_type?.trim() || "developer",
        description: plan.description?.trim() || "",
        total_cost: Number(plan.total_cost) || 0,
        status: plan.status || "active",
        ...userId ? {
            user_id: String(userId)
        } : {},
        period_by_years: plan.period_by_years ?? estimatePeriodByYears(plan)
    };
}
const ITEM_TYPE_PERIOD = {
    monthly_installment: "Monthly",
    quarterly_installment: "Quarterly",
    half_year_installment: "Semi-Annually",
    yearly_installment: "Yearly",
    installments_before_handover: "During Construction",
    installments_after_handover: "Post Handover (2 Years)"
};
function draftFromPlanItems(items) {
    const byType = (type)=>items.filter((i)=>normalizeItemType(i.type) === type);
    const sum = (rows)=>rows.reduce((total, row)=>total + row.percentage, 0);
    const installment = items.find((i)=>ITEM_TYPE_PERIOD[normalizeItemType(i.type)]);
    return {
        down_payment_percentage: sum(byType("down_payment")),
        handover_percentage: sum(byType("handover_installment")),
        installments_count: installment?.intervals || 1,
        period: installment ? ITEM_TYPE_PERIOD[normalizeItemType(installment.type)] : "Immediate"
    };
}
function getCreatedPlanId(response) {
    const res = response;
    const id = res?.data?.payment_plan_id ?? res?.payment_plan_id ?? res?.data?.id ?? res?.id;
    return id ? Number(id) : undefined;
}
function buildDraftPlanItems(plan) {
    const downPayment = plan.down_payment_percentage || 0;
    const handover = plan.handover_percentage || 0;
    const installments = Math.max(1, plan.installments_count || 1);
    const remaining = Number(Math.max(0, 100 - downPayment - handover).toFixed(2));
    const items = [];
    if (downPayment > 0) items.push({
        type: "Down payment",
        percentage: downPayment,
        intervals: 1
    });
    if (remaining > 0) {
        items.push({
            type: getInstallmentItemType(plan.period),
            percentage: remaining,
            intervals: installments
        });
    }
    if (handover > 0) items.push({
        type: "Handover installment",
        percentage: handover,
        intervals: 1
    });
    return items;
}
async function addDraftPlanItems(paymentPlanId, plan, token) {
    for (const item of buildDraftPlanItems(plan)){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])({
            payment_plan_id: paymentPlanId,
            ...item
        }, token);
    }
}
function extractPaymentPlans(entity) {
    const raw = entity?.paymentPlans ?? entity?.payment_plans ?? entity?.paymentplans ?? [];
    if (!Array.isArray(raw)) return [];
    return raw.map((plan, planIndex)=>{
        const rawItems = plan?.paymentplanitems ?? plan?.payment_plan_items ?? plan?.paymentPlanItems ?? plan?.items ?? [];
        const planId = plan?.payment_plan_id ?? plan?.id;
        return {
            id: String(planId ?? `plan-${planIndex}`),
            paymentPlanId: planId !== undefined ? Number(planId) : undefined,
            name: plan?.name ?? "",
            description: plan?.description ?? "",
            paymentPlanType: plan?.payment_plan_type ?? undefined,
            totalCost: plan?.total_cost ?? null,
            status: plan?.status,
            userId: plan?.user_id != null ? String(plan.user_id) : undefined,
            periodByYears: plan?.period_by_years ?? null,
            developerId: plan?.developer_id != null ? Number(plan.developer_id) : undefined,
            entityType: typeof plan?.type === "string" ? plan.type : undefined,
            entityId: plan?.entity_id != null ? Number(plan.entity_id) : undefined,
            items: (Array.isArray(rawItems) ? rawItems : []).map((item, itemIndex)=>({
                    id: String(item?.payment_plan_item_id ?? item?.id ?? `item-${itemIndex}`),
                    type: toApiItemType(String(item?.type ?? "")),
                    percentage: Number(item?.percentage ?? 0),
                    intervals: Number(item?.intervals ?? 1)
                }))
        };
    });
}
function toPaymentPlanView(response) {
    const body = response;
    const plan = body?.data?.payment_plan_id !== undefined || body?.data?.name !== undefined ? body.data : body;
    if (!plan || typeof plan !== "object") return null;
    return extractPaymentPlans({
        paymentPlans: [
            plan
        ]
    })[0] ?? null;
}
function toPaymentPlanList(response) {
    const body = response;
    const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
    return extractPaymentPlans({
        paymentPlans: raw
    });
}
function mergeEntityPaymentPlans(summaries, list, entityType, entityId) {
    if (!list || !entityId) return summaries;
    const known = new Set(summaries.map((p)=>p.paymentPlanId).filter(Boolean));
    const linked = list.filter((p)=>p.entityType?.toUpperCase() === entityType && p.entityId === entityId && p.paymentPlanId && !known.has(p.paymentPlanId));
    return linked.length ? [
        ...summaries,
        ...linked
    ] : summaries;
}
function toPaymentPlanItemList(response) {
    const body = response;
    const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
    return raw.map((item, index)=>({
            id: String(item?.id ?? item?.payment_plan_item_id ?? `item-${index}`),
            paymentPlanId: item?.payment_plan_id != null ? Number(item.payment_plan_id) : undefined,
            type: toApiItemType(String(item?.type ?? "")),
            percentage: Number(item?.percentage ?? 0),
            intervals: Number(item?.intervals ?? 1) || 1
        }));
}
function withPlanItems(plan, allItems) {
    if (plan.items.length > 0 || !allItems || !plan.paymentPlanId) return plan;
    const items = allItems.filter((item)=>item.paymentPlanId === plan.paymentPlanId);
    return items.length ? {
        ...plan,
        items
    } : plan;
}
async function savePlanItems(paymentPlanId, rows, originalItems, token) {
    const originalById = new Map(originalItems.map((item)=>[
            item.id,
            item
        ]));
    for (const row of rows){
        const body = {
            payment_plan_id: paymentPlanId,
            type: row.type,
            percentage: row.percentage,
            intervals: row.intervals
        };
        if (!row.paymentPlanItemId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])(body, token);
            continue;
        }
        const original = originalById.get(String(row.paymentPlanItemId));
        const changed = !original || original.type !== row.type || original.percentage !== row.percentage || original.intervals !== row.intervals;
        if (changed) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePaymentPlanItem"])(row.paymentPlanItemId, body, token);
    }
}
function draftRowsForExistingItems(plan, existing) {
    return buildDraftPlanItems(plan).map((item, index)=>{
        const id = existing[index]?.id;
        return {
            ...item,
            paymentPlanItemId: id && /^\d+$/.test(id) ? Number(id) : undefined
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/PaymentPlansList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentPlansList",
    ()=>PaymentPlansList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaymentPlansList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9a2e8bb80b6dc22a3b7d8fc798855494fc543ecd44429bd97abd371d8fa5ab42") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a2e8bb80b6dc22a3b7d8fc798855494fc543ecd44429bd97abd371d8fa5ab42";
    }
    const { plans, currency, renderActions } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (plans.length === 0) {
        let t1;
        if ($[1] !== t) {
            t1 = t("paymentPlansView.empty");
            $[1] = t;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        let t2;
        if ($[3] !== t1) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10 text-sm text-gray-500 dark:text-gray-400",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                lineNumber: 39,
                columnNumber: 12
            }, this);
            $[3] = t1;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t1;
    if ($[5] !== currency || $[6] !== plans || $[7] !== renderActions || $[8] !== t) {
        let t2;
        if ($[10] !== currency || $[11] !== renderActions || $[12] !== t) {
            t2 = ({
                "PaymentPlansList[plans.map()]": (plan)=>{
                    const totalPercentage = plan.items.reduce(_PaymentPlansListPlansMapPlanItemsReduce, 0);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-200 dark:border-neutral-800 p-4 sm:p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-semibold text-gray-900 dark:text-gray-100 break-words",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                lineNumber: 54,
                                                columnNumber: 199
                                            }, this),
                                            plan.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-gray-600 dark:text-gray-400 break-words",
                                                children: plan.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                lineNumber: 54,
                                                columnNumber: 321
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 174
                                    }, this),
                                    renderActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 gap-1",
                                        children: renderActions(plan)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 441
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                lineNumber: 54,
                                columnNumber: 118
                            }, this),
                            plan.totalCost !== null && plan.totalCost !== undefined && Number(plan.totalCost) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-lg bg-gray-50 dark:bg-neutral-800/60 p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-gray-900 dark:text-gray-100",
                                        children: [
                                            plan.totalCost,
                                            " ",
                                            currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 685
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-gray-600 dark:text-gray-400",
                                        children: t("paymentPlansView.totalCost")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 783
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                lineNumber: 54,
                                columnNumber: 602
                            }, this),
                            plan.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
                                                children: t("paymentPlansView.schedule")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                lineNumber: 54,
                                                columnNumber: 992
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: t("paymentPlansView.total", {
                                                    percentage: Number(totalPercentage.toFixed(2))
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                lineNumber: 54,
                                                columnNumber: 1098
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 936
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800 flex",
                                        children: plan.items.map(_PaymentPlansListPlansMapPlanItemsMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 56,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 divide-y divide-gray-100 dark:divide-neutral-800",
                                        children: plan.items.map({
                                            "PaymentPlansList[plans.map() > plan.items.map()]": (item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between gap-3 py-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700 dark:text-gray-300",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymentPlanItemTypeLabel"])(item_1.type, t),
                                                                item_1.intervals > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ms-2 text-xs text-gray-500 dark:text-gray-400",
                                                                    children: t("paymentPlansView.payments", {
                                                                        count: item_1.intervals
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 287
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 166
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-gray-900 dark:text-gray-100",
                                                            children: [
                                                                item_1.percentage,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, item_1.id, true, {
                                                    fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 81
                                                }, this)
                                        }["PaymentPlansList[plans.map() > plan.items.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                        lineNumber: 56,
                                        columnNumber: 190
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                                lineNumber: 54,
                                columnNumber: 914
                            }, this)
                        ]
                    }, plan.id, true, {
                        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
                        lineNumber: 54,
                        columnNumber: 18
                    }, this);
                }
            })["PaymentPlansList[plans.map()]"];
            $[10] = currency;
            $[11] = renderActions;
            $[12] = t;
            $[13] = t2;
        } else {
            t2 = $[13];
        }
        t1 = plans.map(t2);
        $[5] = currency;
        $[6] = plans;
        $[7] = renderActions;
        $[8] = t;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    let t2;
    if ($[14] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t2;
    } else {
        t2 = $[15];
    }
    return t2;
}
_s(PaymentPlansList, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PaymentPlansList;
function _PaymentPlansListPlansMapPlanItemsMap(item_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: index % 2 === 0 ? "bg-teal-600" : "bg-teal-300 dark:bg-teal-700",
        style: {
            width: `${Math.min(100, Math.max(0, item_0.percentage))}%`
        }
    }, item_0.id, false, {
        fileName: "[project]/src/components/shared/PaymentPlansList.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
function _PaymentPlansListPlansMapPlanItemsReduce(sum, item) {
    return sum + item.percentage;
}
var _c;
__turbopack_context__.k.register(_c, "PaymentPlansList");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 29,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 57,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 85,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 113,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 153,
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 193,
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
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t) {
        t4 = t("common.close");
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "absolute end-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 223,
                    columnNumber: 310
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 223,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== children || $[14] !== props || $[15] !== t2 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t2,
                    ...props,
                    children: [
                        children,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 231,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 231,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = props;
        $[15] = t2;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    return t6;
}
_s(DialogContent, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 274,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 315,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 356,
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
    if ($[0] !== "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42ada75bf385e7b8ab0475e3cf092c522e40d22dbb0f599261d8d03ad649bedd";
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
            lineNumber: 397,
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
"[project]/src/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmModal",
    ()=>ConfirmModal,
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    full: "max-w-full w-[95vw]"
};
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "f8eaa1091fb10c39cc73a4f7dca1f2a440d24aa304d31f8e37428f2f0a903b35") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8eaa1091fb10c39cc73a4f7dca1f2a440d24aa304d31f8e37428f2f0a903b35";
    }
    const { isOpen, onClose, title, description, children, footer, size: t1, showCloseButton: t2, scrollable: t3 } = t0;
    const size = t1 === undefined ? "lg" : t1;
    t2 === undefined ? true : t2;
    const scrollable = t3 === undefined ? false : t3;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t4 = `${sizeClasses[size]} ${scrollable ? "max-h-[85vh] flex flex-col" : ""}`;
    let t5;
    if ($[1] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== description || $[4] !== t || $[5] !== title) {
        t6 = description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 64,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "sr-only",
            children: t("common.modalDescription", {
                title: typeof title === "string" ? title : t("common.dialog")
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 64,
            columnNumber: 79
        }, this);
        $[3] = description;
        $[4] = t;
        $[5] = title;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t5 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = `py-4 ${scrollable ? "flex-1 overflow-y-auto" : ""}`;
    let t9;
    if ($[10] !== children || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== footer) {
        t10 = footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            children: footer
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 95,
            columnNumber: 21
        }, this);
        $[13] = footer;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t4 || $[17] !== t7 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: t4,
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t4;
        $[17] = t7;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== isOpen || $[21] !== onClose || $[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[20] = isOpen;
        $[21] = onClose;
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_s(Modal, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Modal;
function ConfirmModal(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "f8eaa1091fb10c39cc73a4f7dca1f2a440d24aa304d31f8e37428f2f0a903b35") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8eaa1091fb10c39cc73a4f7dca1f2a440d24aa304d31f8e37428f2f0a903b35";
    }
    const { isOpen, onClose, onConfirm, title, description, confirmText, cancelText, variant: t1, isLoading: t2 } = t0;
    const variant = t1 === undefined ? "default" : t1;
    const isLoading = t2 === undefined ? false : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t3;
    if ($[1] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== cancelText || $[9] !== t) {
        t6 = cancelText ?? t("common.cancel");
        $[8] = cancelText;
        $[9] = t;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== isLoading || $[12] !== onClose || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: isLoading,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[11] = isLoading;
        $[12] = onClose;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = variant === "destructive" ? "destructive" : "default";
    const t9 = variant === "default" ? "bg-teal-600 hover:bg-teal-700 text-white" : "";
    let t10;
    if ($[15] !== confirmText || $[16] !== isLoading || $[17] !== t) {
        t10 = isLoading ? t("common.loading") : confirmText ?? t("common.confirm");
        $[15] = confirmText;
        $[16] = isLoading;
        $[17] = t;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== isLoading || $[20] !== onConfirm || $[21] !== t10 || $[22] !== t8 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onConfirm,
            variant: t8,
            disabled: isLoading,
            className: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[19] = isLoading;
        $[20] = onConfirm;
        $[21] = t10;
        $[22] = t8;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11 || $[26] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "gap-2",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t7;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12 || $[29] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md",
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t5;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== isOpen || $[32] !== onClose || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[31] = isOpen;
        $[32] = onClose;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    return t14;
}
_s1(ConfirmModal, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = ConfirmModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentPlanItemsListQueryKey",
    ()=>paymentPlanItemsListQueryKey,
    "paymentPlanQueryKey",
    ()=>paymentPlanQueryKey,
    "paymentPlansListQueryKey",
    ()=>paymentPlansListQueryKey,
    "useEntityPaymentPlans",
    ()=>useEntityPaymentPlans,
    "usePaymentPlanActions",
    ()=>usePaymentPlanActions,
    "usePaymentPlanDetail",
    ()=>usePaymentPlanDetail,
    "usePaymentPlanItemsList",
    ()=>usePaymentPlanItemsList,
    "usePaymentPlansById",
    ()=>usePaymentPlansById,
    "usePaymentPlansList",
    ()=>usePaymentPlansList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const paymentPlanQueryKey = (paymentPlanId)=>[
        "paymentPlan",
        paymentPlanId
    ];
const paymentPlansListQueryKey = [
    "paymentPlan",
    "list"
];
const paymentPlanItemsListQueryKey = [
    "paymentPlan",
    "items"
];
function usePaymentPlanItemsList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] !== token) {
        t1 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaymentPlanItems"])(token);
        $[1] = token;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = {
            queryKey: paymentPlanItemsListQueryKey,
            queryFn: t1,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanItemList"],
            enabled: t2,
            staleTime: 60000
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s(usePaymentPlanItemsList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePaymentPlansList(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] !== token) {
        t1 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaymentPlans"])(token);
        $[1] = token;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = {
            queryKey: paymentPlansListQueryKey,
            queryFn: t1,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanList"],
            enabled: t2,
            staleTime: 60000
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s1(usePaymentPlansList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useEntityPaymentPlans(summaries, entityType, entityId) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: list } = usePaymentPlansList(!!entityId);
    let t0;
    if ($[1] !== entityId || $[2] !== entityType || $[3] !== list || $[4] !== summaries) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeEntityPaymentPlans"])(summaries, list, entityType, entityId);
        $[1] = entityId;
        $[2] = entityType;
        $[3] = list;
        $[4] = summaries;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    return usePaymentPlansById(t0);
}
_s2(useEntityPaymentPlans, "ScXlARpba/sycly+yIraFnY5jgI=", false, function() {
    return [
        usePaymentPlansList,
        usePaymentPlansById
    ];
});
function usePaymentPlanDetail(paymentPlanId, enabled) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const t0 = paymentPlanId ?? 0;
    let t1;
    if ($[1] !== t0) {
        t1 = paymentPlanQueryKey(t0);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== paymentPlanId || $[4] !== token) {
        t2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectPaymentDetails"])(paymentPlanId, token);
        $[3] = paymentPlanId;
        $[4] = token;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = !!token && !!paymentPlanId && enabled;
    let t4;
    if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanView"],
            enabled: t3
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
    const needsItems = !!query.data && query.data.items.length === 0;
    const { data: allItems, isLoading: itemsLoading } = usePaymentPlanItemsList(needsItems);
    let t5;
    if ($[10] !== allItems || $[11] !== query.data) {
        t5 = query.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPlanItems"])(query.data, allItems) : query.data;
        $[10] = allItems;
        $[11] = query.data;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = query.isLoading || needsItems && itemsLoading;
    let t7;
    if ($[13] !== query || $[14] !== t5 || $[15] !== t6) {
        t7 = {
            ...query,
            data: t5,
            isLoading: t6
        };
        $[13] = query;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_s3(usePaymentPlanDetail, "nrUJZSNCvyvmQnSaPsKyKKf4KkE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        usePaymentPlanItemsList
    ];
});
function usePaymentPlansById(summaries) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    if ($[1] !== summaries || $[2] !== token) {
        let t1;
        if ($[4] !== token) {
            t1 = ({
                "usePaymentPlansById[summaries.map()]": (summary)=>({
                        queryKey: paymentPlanQueryKey(summary.paymentPlanId ?? 0),
                        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectPaymentDetails"])(summary.paymentPlanId, token),
                        select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanView"],
                        enabled: !!token && !!summary.paymentPlanId
                    })
            })["usePaymentPlansById[summaries.map()]"];
            $[4] = token;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = summaries.map(t1);
        $[1] = summaries;
        $[2] = token;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[6] !== t0) {
        t1 = {
            queries: t0
        };
        $[6] = t0;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueries"])(t1);
    let t2;
    if ($[8] !== results) {
        t2 = ({
            "usePaymentPlansById[summaries.map()]": (summary_0, index)=>{
                const detail = results[index]?.data;
                if (!detail) {
                    return summary_0;
                }
                return {
                    ...summary_0,
                    ...detail,
                    id: summary_0.id,
                    items: detail.items.length > 0 ? detail.items : summary_0.items
                };
            }
        })["usePaymentPlansById[summaries.map()]"];
        $[8] = results;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const merged = summaries.map(t2);
    const needsItems = merged.some(_usePaymentPlansByIdMergedSome);
    const { data: allItems } = usePaymentPlanItemsList(needsItems);
    let t3;
    if ($[10] !== allItems) {
        t3 = ({
            "usePaymentPlansById[merged.map()]": (plan_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPlanItems"])(plan_0, allItems)
        })["usePaymentPlansById[merged.map()]"];
        $[10] = allItems;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const plans = merged.map(t3);
    let t4;
    if ($[12] !== results) {
        t4 = results.some(_usePaymentPlansByIdResultsSome);
        $[12] = results;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== plans || $[15] !== t4) {
        t5 = {
            plans,
            isLoading: t4
        };
        $[14] = plans;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_s4(usePaymentPlansById, "vVEZNIGjlH7S69PRQz8LnifeAog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueries"],
        usePaymentPlanItemsList
    ];
});
function _usePaymentPlansByIdResultsSome(r) {
    return r.isLoading;
}
function _usePaymentPlansByIdMergedSome(plan) {
    return plan.paymentPlanId && plan.items.length === 0;
}
function usePaymentPlanActions() {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== session?.user?.accessToken) {
        t0 = async (t1)=>{
            const { paymentId, data, items, originalItems: t2 } = t1;
            const originalItems = t2 === undefined ? [] : t2;
            const token = session?.user?.accessToken;
            if (!token) {
                throw new Error("Not authenticated");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editProjectPayment"])(paymentId, data, token);
            if (items) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePlanItems"])(paymentId, items, originalItems, token);
            }
            return result;
        };
        $[1] = session?.user?.accessToken;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== queryClient || $[4] !== t) {
        t1 = (_result, t2)=>{
            const { paymentId: paymentId_0 } = t2;
            queryClient.invalidateQueries({
                queryKey: paymentPlanQueryKey(paymentId_0)
            });
            queryClient.invalidateQueries({
                queryKey: paymentPlansListQueryKey
            });
            queryClient.invalidateQueries({
                queryKey: paymentPlanItemsListQueryKey
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "projectDetails"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "propertyDetails"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.messages.paymentPlanUpdateSuccess"));
        };
        $[3] = queryClient;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t0 || $[7] !== t1) {
        t2 = {
            mutationFn: t0,
            onSuccess: t1
        };
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
    let t3;
    if ($[9] !== updateMutation.isPending || $[10] !== updateMutation.mutateAsync) {
        t3 = {
            updatePaymentPlan: updateMutation.mutateAsync,
            isUpdating: updateMutation.isPending
        };
        $[9] = updateMutation.isPending;
        $[10] = updateMutation.mutateAsync;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_s5(usePaymentPlanActions, "G+TmEuOko5X+wqqjFpE/44TDSuw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewPaymentPlanModal",
    ()=>ViewPaymentPlanModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlansList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PaymentPlansList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
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
function ViewPaymentPlanModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "d060041b999094a7529b821f2ce0141e23500b6901ab88568c164bf825978be3") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d060041b999094a7529b821f2ce0141e23500b6901ab88568c164bf825978be3";
    }
    const { isOpen, onClose, paymentPlanId, currency, onEdit } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: plan, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanDetail"])(paymentPlanId, isOpen);
    let t1;
    if ($[1] !== t) {
        t1 = t("paymentPlansView.viewTitle");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t) {
        t2 = t("common.close");
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== onClose || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onClose,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[5] = onClose;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== onEdit || $[9] !== plan || $[10] !== t) {
        t4 = onEdit && plan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            className: "bg-teal-600 hover:bg-teal-700 text-white",
            onClick: onEdit,
            children: t("common.edit")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 68,
            columnNumber: 28
        }, this);
        $[8] = onEdit;
        $[9] = plan;
        $[10] = t;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2.5",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== currency || $[16] !== isError || $[17] !== isLoading || $[18] !== plan || $[19] !== t) {
        t6 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-6 w-6 animate-spin text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                lineNumber: 87,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 87,
            columnNumber: 22
        }, this) : isError || !plan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-10 text-center text-sm text-gray-500 dark:text-gray-400",
            children: t("paymentPlansView.loadFailed")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 87,
            columnNumber: 151
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 text-xs",
                    children: [
                        plan.paymentPlanType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            children: [
                                t("paymentPlansView.planType"),
                                ": ",
                                plan.paymentPlanType
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 364
                        }, this),
                        plan.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            children: plan.status === "active" ? t("common.active") : plan.status === "inactive" ? t("common.inactive") : plan.status
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 470
                        }, this),
                        plan.periodByYears ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            children: t("paymentPlansView.periodYears", {
                                years: plan.periodByYears
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 639
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                    lineNumber: 87,
                    columnNumber: 293
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlansList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentPlansList"], {
                    plans: [
                        plan
                    ],
                    currency: currency
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
                    lineNumber: 89,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 87,
            columnNumber: 266
        }, this);
        $[15] = currency;
        $[16] = isError;
        $[17] = isLoading;
        $[18] = plan;
        $[19] = t;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== isOpen || $[22] !== onClose || $[23] !== t1 || $[24] !== t5 || $[25] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t1,
            size: "lg",
            footer: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[21] = isOpen;
        $[22] = onClose;
        $[23] = t1;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    return t7;
}
_s(ViewPaymentPlanModal, "FeVoEbZwRGdvgmGVhP5G3kTkVCY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanDetail"]
    ];
});
_c = ViewPaymentPlanModal;
var _c;
__turbopack_context__.k.register(_c, "ViewPaymentPlanModal");
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
"[project]/src/components/shared/PaymentPlanTypeSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PAYMENT_PLAN_TYPE",
    ()=>DEFAULT_PAYMENT_PLAN_TYPE,
    "PaymentPlanTypeSelect",
    ()=>PaymentPlanTypeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_PAYMENT_PLAN_TYPE = "developer";
function PaymentPlanTypeSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "68ce1d833beb0efc73663f3fb6e779fda386b5ce09306a005c062544e8dc194f") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68ce1d833beb0efc73663f3fb6e779fda386b5ce09306a005c062544e8dc194f";
    }
    const { id, value, onChange, className } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"])();
    let t2;
    if ($[1] !== t1 || $[2] !== value) {
        const plans = t1 === undefined ? [] : t1;
        const t3 = [
            DEFAULT_PAYMENT_PLAN_TYPE,
            ...plans.map(_PaymentPlanTypeSelectPlansMap),
            value
        ].map(_PaymentPlanTypeSelectAnonymous);
        let t4;
        if ($[4] !== t3) {
            t4 = new Set(t3.filter(_PaymentPlanTypeSelectAnonymous2));
            $[4] = t3;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        t2 = Array.from(t4);
        $[1] = t1;
        $[2] = value;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const options = t2;
    const t3 = value || DEFAULT_PAYMENT_PLAN_TYPE;
    let t4;
    if ($[6] !== className) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-xs", className);
        $[6] = className;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t) {
        t5 = t("paymentPlansView.planType");
        $[8] = t;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t5
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== id || $[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: id,
            className: t4,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[12] = id;
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== options) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: options.map(_PaymentPlanTypeSelectOptionsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[16] = options;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== onChange || $[19] !== t3 || $[20] !== t7 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t3,
            onValueChange: onChange,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[18] = onChange;
        $[19] = t3;
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(PaymentPlanTypeSelect, "lG8ER8yBwPw83iIcew5NvipU270=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"]
    ];
});
_c = PaymentPlanTypeSelect;
function _PaymentPlanTypeSelectOptionsMap(type_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: type_1,
        className: "text-xs capitalize",
        children: type_1
    }, type_1, false, {
        fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
function _PaymentPlanTypeSelectAnonymous2(type_0) {
    return !!type_0;
}
function _PaymentPlanTypeSelectAnonymous(type) {
    return type?.trim();
}
function _PaymentPlanTypeSelectPlansMap(p) {
    return p.paymentPlanType;
}
var _c;
__turbopack_context__.k.register(_c, "PaymentPlanTypeSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditPaymentPlanModal",
    ()=>EditPaymentPlanModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PaymentPlanTypeSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function EditPaymentPlanModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "68f2dc5d972ccad50427034a6e5c7603e99fdb100bce724f06b2bbfae6baef00") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68f2dc5d972ccad50427034a6e5c7603e99fdb100bce724f06b2bbfae6baef00";
    }
    const { isOpen, onClose, paymentPlanId } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: plan, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanDetail"])(paymentPlanId, isOpen);
    let t1;
    if ($[1] !== t) {
        t1 = t("paymentPlansView.editTitle");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== isError || $[4] !== isLoading || $[5] !== onClose || $[6] !== paymentPlanId || $[7] !== plan || $[8] !== t) {
        t2 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-6 w-6 animate-spin text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 55,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 55,
            columnNumber: 22
        }, this) : isError || !plan || !paymentPlanId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-10 text-center text-sm text-gray-500 dark:text-gray-400",
            children: t("paymentPlansView.loadFailed")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 55,
            columnNumber: 169
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditPaymentPlanForm, {
            plan: plan,
            paymentPlanId: paymentPlanId,
            onDone: onClose
        }, plan.id, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 55,
            columnNumber: 284
        }, this);
        $[3] = isError;
        $[4] = isLoading;
        $[5] = onClose;
        $[6] = paymentPlanId;
        $[7] = plan;
        $[8] = t;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== isOpen || $[11] !== onClose || $[12] !== t1 || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t1,
            size: "lg",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = isOpen;
        $[11] = onClose;
        $[12] = t1;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_s(EditPaymentPlanModal, "FeVoEbZwRGdvgmGVhP5G3kTkVCY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanDetail"]
    ];
});
_c = EditPaymentPlanModal;
let rowSeq = 0;
const newRowKey = ()=>`row-${++rowSeq}`;
function EditPaymentPlanForm({ plan, paymentPlanId, onDone }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { updatePaymentPlan, isUpdating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanActions"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userId = plan.userId || (session?.user?.id ? String(session.user.id) : undefined);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.name);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.description);
    const [planType, setPlanType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.paymentPlanType || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PAYMENT_PLAN_TYPE"]);
    const [totalCost, setTotalCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.totalCost != null ? String(plan.totalCost) : "");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.status === "inactive" ? "inactive" : "active");
    const [periodByYears, setPeriodByYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.periodByYears != null ? String(plan.periodByYears) : "");
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EditPaymentPlanForm.useState": ()=>plan.items.map({
                "EditPaymentPlanForm.useState": (item)=>({
                        key: newRowKey(),
                        paymentPlanItemId: /^\d+$/.test(item.id) ? Number(item.id) : undefined,
                        type: item.type,
                        percentage: String(item.percentage),
                        intervals: String(item.intervals || 1)
                    })
            }["EditPaymentPlanForm.useState"])
    }["EditPaymentPlanForm.useState"]);
    const totalPercentage = Number(rows.reduce((sum, r)=>sum + (Number(r.percentage) || 0), 0).toFixed(2));
    const updateRow = (key, patch)=>setRows((prev)=>prev.map((r_0)=>r_0.key === key ? {
                    ...r_0,
                    ...patch
                } : r_0));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.paymentPlans.nameRequired"));
            return;
        }
        if (rows.some((r_1)=>!r_1.type || !(Number(r_1.percentage) > 0) || !(Number(r_1.intervals) >= 1))) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("paymentPlansView.itemsInvalid"));
            return;
        }
        try {
            await updatePaymentPlan({
                paymentId: paymentPlanId,
                data: {
                    name: name.trim(),
                    ...planType.trim() ? {
                        payment_plan_type: planType.trim()
                    } : {},
                    description: description.trim(),
                    status,
                    ...userId ? {
                        user_id: userId
                    } : {},
                    ...totalCost.trim() !== "" ? {
                        total_cost: Number(totalCost)
                    } : {},
                    ...periodByYears.trim() !== "" ? {
                        period_by_years: Number(periodByYears)
                    } : {}
                },
                items: rows.map((r_2)=>({
                        paymentPlanItemId: r_2.paymentPlanItemId,
                        type: r_2.type,
                        percentage: Number(r_2.percentage),
                        intervals: Number(r_2.intervals)
                    })),
                originalItems: plan.items
            });
            onDone();
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 pt-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "edit_plan_name",
                        children: [
                            t("paymentPlansView.name"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 170,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "edit_plan_name",
                        value: name,
                        onChange: (e_0)=>setName(e_0.target.value),
                        className: "mt-1 text-xs",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "edit_plan_type",
                        children: t("paymentPlansView.planType")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentPlanTypeSelect"], {
                        id: "edit_plan_type",
                        value: planType,
                        onChange: setPlanType
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "edit_plan_description",
                        children: t("paymentPlansView.description")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "edit_plan_description",
                        value: description,
                        onChange: (e_1)=>setDescription(e_1.target.value),
                        rows: 2,
                        className: "mt-1 text-xs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "edit_plan_total",
                                children: t("paymentPlansView.totalCost")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "edit_plan_total",
                                type: "number",
                                min: "0",
                                step: "any",
                                value: totalCost,
                                onChange: (e_2)=>setTotalCost(e_2.target.value),
                                className: "mt-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "edit_plan_period",
                                children: t("paymentPlansView.periodByYears")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "edit_plan_period",
                                type: "number",
                                min: "0",
                                value: periodByYears,
                                onChange: (e_3)=>setPeriodByYears(e_3.target.value),
                                className: "mt-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                children: t("paymentPlansView.status")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: status,
                                onValueChange: setStatus,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "mt-1 text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "active",
                                                children: t("common.active")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "inactive",
                                                children: t("common.inactive")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
                                children: t("paymentPlansView.schedule")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border", Math.round(totalPercentage) === 100 ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700" : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    t("paymentPlansView.total", {
                                        percentage: totalPercentage
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-[300px] overflow-y-auto pe-1",
                        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-12 gap-2 items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 sm:col-span-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-[11px]",
                                                children: t("paymentPlansView.itemType")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: row.type,
                                                onValueChange: (type)=>updateRow(row.key, {
                                                        type
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "mt-1 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: t("paymentPlansView.itemType")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            row.type && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_PLAN_ITEM_TYPES"].some((o)=>o.value === row.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: row.type,
                                                                children: row.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 94
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_PLAN_ITEM_TYPES"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: option.value,
                                                                    children: t(option.labelKey)
                                                                }, option.value, false, {
                                                                    fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 60
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-5 sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-[11px]",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                min: "0",
                                                step: "any",
                                                value: row.percentage,
                                                onChange: (e_4)=>updateRow(row.key, {
                                                        percentage: e_4.target.value
                                                    }),
                                                className: "mt-1 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-5 sm:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-[11px]",
                                                children: t("paymentPlansView.intervals")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                value: row.intervals,
                                                onChange: (e_5)=>updateRow(row.key, {
                                                        intervals: e_5.target.value
                                                    }),
                                                className: "mt-1 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 sm:col-span-1 flex justify-end",
                                        children: !row.paymentPlanItemId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            className: "text-red-600 hover:text-red-700",
                                            "aria-label": t("common.delete"),
                                            onClick: ()=>setRows((prev_0)=>prev_0.filter((r_3)=>r_3.key !== row.key)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                            lineNumber: 250,
                                            columnNumber: 44
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.key, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 220,
                                columnNumber: 28
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        className: "gap-1.5",
                        onClick: ()=>setRows((prev_1)=>[
                                    ...prev_1,
                                    {
                                        key: newRowKey(),
                                        type: "Monthly installment",
                                        percentage: "",
                                        intervals: "1"
                                    }
                                ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            t("paymentPlansView.addItem")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2.5 pt-4 border-t border-gray-100 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: onDone,
                        children: t("common.cancel")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        size: "sm",
                        className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5",
                        disabled: isUpdating || !name.trim(),
                        children: [
                            isUpdating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 273,
                                columnNumber: 26
                            }, this),
                            isUpdating ? t("common.saving") : t("common.save")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
_s1(EditPaymentPlanForm, "KpyoM/wi1aGwmSDIZ3cB/HTWZGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlanActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c1 = EditPaymentPlanForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditPaymentPlanModal");
__turbopack_context__.k.register(_c1, "EditPaymentPlanForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyPaymentPlans",
    ()=>PropertyPaymentPlans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlansList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PaymentPlansList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$payment$2d$plans$2f$view$2d$payment$2d$plan$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/payment-plans/view-payment-plan-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$payment$2d$plans$2f$edit$2d$payment$2d$plan$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
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
function PropertyPaymentPlans(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "f7f9b2c8faf16e7d90b858ba9b657f41348e62907b921a3ce6980cc78620fa82") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7f9b2c8faf16e7d90b858ba9b657f41348e62907b921a3ce6980cc78620fa82";
    }
    const { plans: summaries, propertyId, currency } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { plans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityPaymentPlans"])(summaries, "PROPERTIES", propertyId);
    const [viewPlanId, setViewPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editPlanId, setEditPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                lineNumber: 43,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("paymentPlansView.title");
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                    lineNumber: 58,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== plans.length || $[7] !== t) {
        t4 = plans.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-xs font-normal",
            children: t("paymentPlansView.plansCount", {
                count: plans.length
            })
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 66,
            columnNumber: 30
        }, this);
        $[6] = plans.length;
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t) {
        t6 = ({
            "PropertyPaymentPlans[<PaymentPlansList>.renderActions]": (plan)=>plan.paymentPlanId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": t("paymentPlansView.view"),
                            onClick: {
                                "PropertyPaymentPlans[<PaymentPlansList>.renderActions > <Button>.onClick]": ()=>setViewPlanId(plan.paymentPlanId)
                            }["PropertyPaymentPlans[<PaymentPlansList>.renderActions > <Button>.onClick]"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                                lineNumber: 89,
                                columnNumber: 89
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                            lineNumber: 87,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            "aria-label": t("common.edit"),
                            onClick: {
                                "PropertyPaymentPlans[<PaymentPlansList>.renderActions > <Button>.onClick]": ()=>setEditPlanId(plan.paymentPlanId)
                            }["PropertyPaymentPlans[<PaymentPlansList>.renderActions > <Button>.onClick]"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                                lineNumber: 91,
                                columnNumber: 89
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                            lineNumber: 89,
                            columnNumber: 125
                        }, this)
                    ]
                }, void 0, true) : null
        })["PropertyPaymentPlans[<PaymentPlansList>.renderActions]"];
        $[12] = t;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== currency || $[15] !== plans || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlansList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentPlansList"], {
                plans: plans,
                currency: currency,
                renderActions: t6
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                lineNumber: 100,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[14] = currency;
        $[15] = plans;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== currency || $[19] !== viewPlanId) {
        t8 = viewPlanId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$payment$2d$plans$2f$view$2d$payment$2d$plan$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewPaymentPlanModal"], {
            isOpen: true,
            onClose: {
                "PropertyPaymentPlans[<ViewPaymentPlanModal>.onClose]": ()=>setViewPlanId(null)
            }["PropertyPaymentPlans[<ViewPaymentPlanModal>.onClose]"],
            paymentPlanId: viewPlanId,
            currency: currency,
            onEdit: {
                "PropertyPaymentPlans[<ViewPaymentPlanModal>.onEdit]": ()=>{
                    setEditPlanId(viewPlanId);
                    setViewPlanId(null);
                }
            }["PropertyPaymentPlans[<ViewPaymentPlanModal>.onEdit]"]
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 110,
            columnNumber: 33
        }, this);
        $[18] = currency;
        $[19] = viewPlanId;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== editPlanId) {
        t9 = editPlanId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$payment$2d$plans$2f$edit$2d$payment$2d$plan$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditPaymentPlanModal"], {
            isOpen: true,
            onClose: {
                "PropertyPaymentPlans[<EditPaymentPlanModal>.onClose]": ()=>setEditPlanId(null)
            }["PropertyPaymentPlans[<EditPaymentPlanModal>.onClose]"],
            paymentPlanId: editPlanId
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 126,
            columnNumber: 33
        }, this);
        $[21] = editPlanId;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t5 || $[24] !== t7 || $[25] !== t8 || $[26] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t5,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[23] = t5;
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    return t10;
}
_s(PropertyPaymentPlans, "tYqGCRrv9RLdFPOIwVGfUhtorVA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityPaymentPlans"]
    ];
});
_c = PropertyPaymentPlans;
var _c;
__turbopack_context__.k.register(_c, "PropertyPaymentPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/services/ReadyUnitsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadyUnitsService",
    ()=>ReadyUnitsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
/**
 * The ready-units API exposes show / store / update / accept / reject only
 * (GET /dashboard/ready-units answers "method not supported"), so the list uses the
 * properties index filtered to the ready market. If the backend adds a dedicated list
 * route or uses other filter names, change LIST_ENDPOINT / LIST_MARKET_PARAMS / FILTER_PARAMS only.
 */ const LIST_ENDPOINT = "/dashboard/properties";
const LIST_MARKET_PARAMS = {
    market_type: "ready"
};
/** Query-string names sent for each filter. */ const FILTER_PARAMS = {
    search: "property_name",
    isActive: "is_active",
    listingType: "listing_type",
    countryId: "country_id",
    sellerId: "user_id",
    role: "user_type",
    propertyTypeId: "property_type_id",
    propertySubtypeId: "property_subtype_id",
    city: "city",
    area: "area"
};
const unwrap = (body)=>body?.data !== undefined && body?.status !== undefined ? body.data : body;
const ReadyUnitsService = {
    list: async ({ page, perPage, ...filters })=>{
        const query = new URLSearchParams({
            ...LIST_MARKET_PARAMS,
            page: String(page),
            per_page: String(perPage)
        });
        Object.keys(FILTER_PARAMS).forEach((key)=>{
            const value = filters[key]?.trim();
            if (value) query.append(FILTER_PARAMS[key], value);
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${LIST_ENDPOINT}?${query.toString()}`);
        return response.data;
    },
    get: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/ready-units/${propertyId}`);
        return unwrap(response.data);
    },
    create: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/ready-units", payload);
        return response.data;
    },
    /** The API updates with POST + multipart (partial updates supported). */ update: async (propertyId, payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/ready-units/${propertyId}`, payload);
        return response.data;
    },
    accept: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/ready-units/${propertyId}/accept`, new FormData());
        return response.data;
    },
    reject: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/ready-units/${propertyId}/reject`, new FormData());
        return response.data;
    },
    /** No ready-units delete route is documented; ready units are Property records, so the property delete route is used. */ remove: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/properties/${propertyId}`);
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** `is_active` values returned by the API for ready units. */ __turbopack_context__.s([
    "AVAILABILITY_STATUSES",
    ()=>AVAILABILITY_STATUSES,
    "CONSTRUCTION_STATUSES",
    ()=>CONSTRUCTION_STATUSES,
    "FINISHING_STATUSES",
    ()=>FINISHING_STATUSES,
    "PAYMENT_TYPES",
    ()=>PAYMENT_TYPES,
    "READY_UNIT_STATE",
    ()=>READY_UNIT_STATE
]);
const READY_UNIT_STATE = {
    REJECTED: 0,
    ACCEPTED: 1,
    PENDING: 2
};
const PAYMENT_TYPES = [
    "cash",
    "installments",
    "down_payment",
    "booking",
    "reservation",
    "monthly_installment",
    "quarterly_installment",
    "half_year_installment",
    "yearly_installment",
    "handover",
    "maintenance",
    "other"
];
const AVAILABILITY_STATUSES = [
    "available",
    "reserved",
    "sold"
];
const CONSTRUCTION_STATUSES = [
    "ready",
    "under-construction",
    "off-plan"
];
const FINISHING_STATUSES = [
    "finished",
    "semi-finished",
    "unfinished"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReadyUnitFormData",
    ()=>buildReadyUnitFormData,
    "getReadyUnitPaymentPlan",
    ()=>getReadyUnitPaymentPlan,
    "readyUnitToFormValues",
    ()=>readyUnitToFormValues,
    "toReadyUnitRow",
    ()=>toReadyUnitRow,
    "unpackReadyUnitsList",
    ()=>unpackReadyUnitsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
;
const hasValue = (v)=>v !== undefined && v !== null && v !== "" && !(typeof v === "number" && Number.isNaN(v));
function buildReadyUnitFormData(values, newImages) {
    const fd = new FormData();
    const append = (key, value)=>{
        if (hasValue(value)) fd.append(key, String(value));
    };
    append("property_name", values.property_name.trim());
    append("property_no", values.property_no?.trim());
    append("description", values.description);
    append("property_type_id", values.property_type_id);
    append("property_subtype_id", values.property_subtype_id);
    append("price", values.price);
    append("size", values.size);
    append("bedrooms", values.bedrooms);
    append("bathrooms", values.bathrooms);
    append("parking_spaces", values.parking_spaces);
    append("floor", values.floor);
    append("view", values.view?.trim());
    append("status", values.status);
    append("availability_status", values.availability_status);
    append("construction_status", values.construction_status);
    append("finishing_status", values.finishing_status);
    // UserPropertyRequest
    append("listing_type", values.listing_type);
    append("user_id", values.user_id);
    append("email", values.email.trim());
    append("phone_number", values.phone_number.trim());
    append("whatsapp_number", values.whatsapp_number.trim());
    append("year_built", values.year_built?.trim());
    // Nested location: city / area are names, resolved to ids by the API.
    append("location[google_map_link]", values.google_map_link.trim());
    append("location[latitude]", values.latitude);
    append("location[longitude]", values.longitude);
    append("location[city_id]", values.city?.trim());
    append("location[area_id]", values.area?.trim());
    append("location[description]", values.address?.trim());
    append("location[landmark]", values.address?.trim());
    // payment_plan is only sent with a payment type (required by the API when a plan is provided).
    if (values.payment_type) {
        append("payment_plan[name]", values.payment_name?.trim());
        append("payment_plan[payment_type]", values.payment_type);
        append("payment_plan[total_cost]", hasValue(values.payment_total_cost) ? values.payment_total_cost : values.price);
        if (values.payment_type === "installments") {
            append("payment_plan[intervals]", values.payment_intervals);
            append("payment_plan[down_payment_price]", values.payment_down_payment);
        }
        append("payment_plan[description]", values.payment_description?.trim());
    }
    values.feature_ids.forEach((featureId, index)=>{
        fd.append(`features[${index}][feature_id]`, String(featureId));
    });
    if (newImages.length > 0) {
        newImages.forEach((file)=>fd.append("medias[]", file, file.name));
        fd.append("media_meta", JSON.stringify(newImages.map((_, index)=>({
                file_index: index,
                media_type: "image",
                is_primary: index === 0 ? 1 : 0,
                my_order: index + 1
            }))));
    }
    return fd;
}
const toNumber = (v)=>{
    if (v === null || v === undefined || v === "") return undefined;
    const n = Number(v);
    return Number.isNaN(n) ? undefined : n;
};
/** "Monthly installment" / "monthly-installment" → "monthly_installment" */ const normalizePaymentType = (v)=>typeof v === "string" ? v.trim().toLowerCase().replace(/[\s-]+/g, "_") : "";
const isPaymentType = (v)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_TYPES"].includes(v);
function getReadyUnitPaymentPlan(unit) {
    const anyUnit = unit;
    const list = anyUnit.payment_plans ?? anyUnit.paymentPlans ?? anyUnit.paymentplans;
    const plan = anyUnit.payment_plan ?? anyUnit.paymentPlan ?? (Array.isArray(list) && list.length > 0 ? list[0] : null);
    if (!plan || typeof plan !== "object") return null;
    const items = plan.paymentplanitems ?? plan.payment_plan_items ?? plan.paymentPlanItems ?? plan.items ?? [];
    const itemTypes = (Array.isArray(items) ? items : []).map((item)=>({
            item,
            type: normalizePaymentType(item?.type)
        }));
    const installmentItem = itemTypes.find(({ type })=>type.includes("installment"))?.item;
    const downPaymentItem = itemTypes.find(({ type })=>type === "down_payment")?.item;
    const ownType = normalizePaymentType(plan.payment_type ?? plan.payment_method);
    const itemType = installmentItem && downPaymentItem ? "installments" : itemTypes.find(({ type })=>isPaymentType(type))?.type ?? "";
    // Plans saved without a type keep it only in the generated name / description,
    // e.g. name "Cash", description "Cash payment for property".
    const nameType = normalizePaymentType(plan.name);
    const description = normalizePaymentType(plan.description);
    const descriptionType = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_TYPES"]
    ].sort((a, b)=>b.length - a.length).find((type)=>description === type || description.startsWith(`${type}_`));
    const payment_type = isPaymentType(ownType) ? ownType : itemType || (isPaymentType(nameType) ? nameType : descriptionType ?? "");
    const total_cost = toNumber(plan.total_cost ?? plan.total_price);
    const downPaymentFromItem = (()=>{
        if (!downPaymentItem) return undefined;
        const amount = toNumber(downPaymentItem.price ?? downPaymentItem.amount);
        if (amount !== undefined) return amount;
        const percentage = toNumber(downPaymentItem.percentage);
        const base = total_cost ?? toNumber(unit.price);
        return percentage !== undefined && base !== undefined ? base * percentage / 100 : undefined;
    })();
    const result = {
        name: typeof plan.name === "string" ? plan.name : "",
        payment_type,
        total_cost,
        intervals: toNumber(plan.intervals ?? plan.installments_count ?? installmentItem?.intervals),
        down_payment_price: toNumber(plan.down_payment_price ?? plan.down_payment) ?? downPaymentFromItem,
        description: typeof plan.description === "string" ? plan.description : ""
    };
    const hasData = result.payment_type || result.name || result.description || result.total_cost !== undefined || result.intervals !== undefined || result.down_payment_price !== undefined;
    if (!hasData) return null;
    // The form only shows (and saves) a plan that has a payment type.
    if (!result.payment_type) result.payment_type = "other";
    return result;
}
function readyUnitToFormValues(unit) {
    const up = unit.user_property;
    const owner = up?.user;
    const plan = getReadyUnitPaymentPlan(unit);
    return {
        listing_type: up?.listing_type === "rent" ? "rent" : "sale",
        property_name: unit.property_name ?? "",
        property_no: unit.property_no ?? "",
        description: unit.description ?? "",
        property_type_id: String(unit.property_type?.id ?? unit.property_type_id ?? ""),
        property_subtype_id: String(unit.property_subtype?.id ?? unit.property_subtype_id ?? ""),
        price: toNumber(unit.price),
        size: toNumber(unit.size),
        bedrooms: toNumber(unit.bedrooms),
        bathrooms: toNumber(unit.bathrooms),
        parking_spaces: toNumber(unit.parking_spaces),
        floor: toNumber(unit.floor),
        view: unit.view ?? "",
        year_built: up?.built_year ?? up?.year_built ?? "",
        payment_name: plan?.name ?? "",
        payment_type: plan?.payment_type ?? "",
        payment_total_cost: plan?.total_cost,
        payment_description: plan?.description ?? "",
        payment_intervals: plan?.intervals,
        payment_down_payment: plan?.down_payment_price,
        user_id: up?.user_id ?? owner?.user_id ?? owner?.id ?? null,
        email: up?.address?.email ?? owner?.email ?? "",
        phone_number: up?.address?.phone_number ?? owner?.phone_number ?? owner?.phone ?? "",
        whatsapp_number: up?.address?.whatsapp_number ?? up?.whatsapp_number ?? "",
        status: unit.status === "inactive" ? "inactive" : "active",
        availability_status: [
            "available",
            "reserved",
            "sold"
        ].includes(unit.availability_status ?? "") ? unit.availability_status : "available",
        construction_status: [
            "ready",
            "under-construction",
            "off-plan"
        ].includes(unit.construction_status ?? "") ? unit.construction_status : "ready",
        finishing_status: [
            "finished",
            "semi-finished",
            "unfinished"
        ].includes(unit.finishing_status ?? "") ? unit.finishing_status : "finished",
        google_map_link: unit.location?.google_map_link ?? "",
        latitude: toNumber(unit.location?.latitude),
        longitude: toNumber(unit.location?.longitude),
        country: unit.location?.city?.country?.name ?? "",
        city: unit.location?.city?.name ?? unit.location?.city?.city_name ?? "",
        area: unit.location?.area?.name ?? unit.location?.area?.area_name ?? "",
        address: unit.location?.description ?? unit.location?.landmark ?? up?.address?.street_address ?? "",
        feature_ids: (unit.features ?? []).map((f)=>Number(f.feature_id)).filter((id)=>!Number.isNaN(id))
    };
}
const toState = (v)=>{
    if (v === null || v === undefined || v === "") return null;
    const n = Number(v);
    return n === 0 || n === 1 || n === 2 ? n : null;
};
function toReadyUnitRow(raw) {
    const item = raw?.data && typeof raw.data === "object" && !Array.isArray(raw.data) ? raw.data : raw;
    const owner = item?.user_property?.user ?? item?.user ?? item?.owner;
    const id = Number(item?.property_id ?? item?.id);
    const propertyNo = item?.property_no;
    return {
        id,
        // property_no is "0" when no unit number was entered; fall back to the ID.
        unitNumber: propertyNo && String(propertyNo) !== "0" ? String(propertyNo) : `#${id}`,
        name: item?.property_name ?? "",
        owner: item?.owner_name ?? owner?.name ?? item?.user_name ?? "-",
        location: item?.area_name ?? item?.location?.area?.name ?? item?.city_name ?? item?.location?.city?.name ?? "-",
        size: toNumber(item?.size) ?? null,
        sizeUnit: item?.country_dimension_unit ?? "",
        price: toNumber(item?.price) ?? null,
        currency: item?.country_currency ?? "",
        availability: item?.availability_status ?? "",
        status: item?.status ?? "",
        createdAt: item?.created_at ?? null,
        listingType: item?.user_property?.listing_type ?? item?.listing_type,
        state: toState(item?.is_active)
    };
}
function unpackReadyUnitsList(body) {
    const page = body?.data && !Array.isArray(body.data) && Array.isArray(body.data.data) ? body.data : body;
    const items = Array.isArray(page?.data) ? page.data : Array.isArray(page) ? page : [];
    const total = Number(page?.total ?? page?.meta?.total ?? body?.total ?? items.length) || 0;
    return {
        rows: items.map(toReadyUnitRow).filter((r)=>!Number.isNaN(r.id)),
        total
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readyUnitsKeys",
    ()=>readyUnitsKeys,
    "useReadyUnit",
    ()=>useReadyUnit,
    "useReadyUnitReview",
    ()=>useReadyUnitReview,
    "useReadyUnitsList",
    ()=>useReadyUnitsList,
    "useSaveReadyUnit",
    ()=>useSaveReadyUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/services/ReadyUnitsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const readyUnitsKeys = {
    all: [
        "readyUnits"
    ],
    list: (params)=>[
            "readyUnits",
            "list",
            params
        ],
    detail: (id)=>[
            "readyUnits",
            "detail",
            id
        ]
};
function useReadyUnitsList(params, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t1;
    if ($[1] !== params) {
        t1 = readyUnitsKeys.list(params);
        $[1] = params;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== params) {
        t2 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].list(params);
        $[3] = params;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = !!session?.user?.accessToken && enabled;
    let t4;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackReadyUnitsList"],
            enabled: t3,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"],
            refetchOnMount: true
        };
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
}
_s(useReadyUnitsList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useReadyUnit(id) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t0;
    if ($[1] !== id) {
        t0 = readyUnitsKeys.detail(id);
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== id) {
        t1 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].get(id);
        $[3] = id;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== id || $[6] !== session?.user?.accessToken) {
        t2 = !!session?.user?.accessToken && Number.isFinite(id) && id > 0;
        $[5] = id;
        $[6] = session?.user?.accessToken;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t0 || $[9] !== t1 || $[10] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            enabled: t2,
            staleTime: 0,
            refetchOnMount: true
        };
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s1(useReadyUnit, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useReadyUnitReview() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = ({
            "useReadyUnitReview[refresh]": (id)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "readyUnits",
                        "list"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: readyUnitsKeys.detail(id)
                });
            }
        })["useReadyUnitReview[refresh]"];
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const refresh = t0;
    let t1;
    if ($[3] !== refresh || $[4] !== t) {
        t1 = (_r, id_1)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.acceptSuccess"));
            refresh(id_1);
        };
        $[3] = refresh;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t) {
        t2 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.acceptFailed"));
        $[6] = t;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t1 || $[9] !== t2) {
        t3 = {
            mutationFn: _temp,
            onSuccess: t1,
            onError: t2
        };
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t3);
    let t4;
    if ($[11] !== refresh || $[12] !== t) {
        t4 = (_r_0, id_3)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.rejectSuccess"));
            refresh(id_3);
        };
        $[11] = refresh;
        $[12] = t;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t) {
        t5 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.rejectFailed"));
        $[14] = t;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t4 || $[17] !== t5) {
        t6 = {
            mutationFn: _temp2,
            onSuccess: t4,
            onError: t5
        };
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const reject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t6);
    let t7;
    if ($[19] !== queryClient || $[20] !== t) {
        t7 = (_r_1, id_5)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.deleteSuccess"));
            queryClient.invalidateQueries({
                queryKey: [
                    "readyUnits",
                    "list"
                ]
            });
            queryClient.removeQueries({
                queryKey: readyUnitsKeys.detail(id_5)
            });
        };
        $[19] = queryClient;
        $[20] = t;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== t) {
        t8 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.deleteFailed"));
        $[22] = t;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t7 || $[25] !== t8) {
        t9 = {
            mutationFn: _temp3,
            onSuccess: t7,
            onError: t8
        };
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t9);
    const t10 = accept.isPending ? accept.variables : reject.isPending ? reject.variables : undefined;
    let t11;
    if ($[27] !== accept.mutate || $[28] !== reject.mutate || $[29] !== remove.isPending || $[30] !== remove.mutate || $[31] !== t10) {
        t11 = {
            acceptUnit: accept.mutate,
            rejectUnit: reject.mutate,
            deleteUnit: remove.mutate,
            isDeleting: remove.isPending,
            pendingId: t10
        };
        $[27] = accept.mutate;
        $[28] = reject.mutate;
        $[29] = remove.isPending;
        $[30] = remove.mutate;
        $[31] = t10;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    return t11;
}
_s2(useReadyUnitReview, "Mgkn1I1rWoFgtSsz7Dzw+XEDlTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
/** Create: POST /dashboard/ready-units — Update: POST /dashboard/ready-units/{id} (multipart). */ function _temp3(id_4) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].remove(id_4);
}
function _temp2(id_2) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].reject(id_2);
}
function _temp(id_0) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].accept(id_0);
}
function useSaveReadyUnit(id) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== id) {
        t0 = (payload)=>id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].update(id, payload) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].create(payload);
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== id || $[4] !== queryClient) {
        t1 = ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "readyUnits",
                    "list"
                ]
            });
            if (id) {
                queryClient.invalidateQueries({
                    queryKey: readyUnitsKeys.detail(id)
                });
            }
        };
        $[3] = id;
        $[4] = queryClient;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t0 || $[7] !== t1) {
        t2 = {
            mutationFn: t0,
            onSuccess: t1
        };
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
}
_s3(useSaveReadyUnit, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/use-base-path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadyMarketBasePath",
    ()=>useReadyMarketBasePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useReadyMarketBasePath() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "0cdd8f61e1f23eb388a1f5abf244dbad3ae9d120a72f286555ead83282364673") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0cdd8f61e1f23eb388a1f5abf244dbad3ae9d120a72f286555ead83282364673";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return `${pathname?.startsWith("/developer") ? "/developer" : "/admin"}/ready-market`;
}
_s(useReadyMarketBasePath, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadyUnitStatusBadge",
    ()=>ReadyUnitStatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STYLES = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].PENDING]: "bg-[#fff1ed] text-[#bc3916] border border-[#ffd5cc] dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED]: "bg-[#ecfdf3] text-[#027a48] border border-[#abefc6] dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED]: "bg-[#fef3f2] text-[#b42318] border border-[#fecdca] dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60"
};
const LABEL_KEYS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].PENDING]: "readyMarket.status.pending",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED]: "readyMarket.status.confirmed",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED]: "readyMarket.status.rejected"
};
function ReadyUnitStatusBadge(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "50f2db044a4f271483b643a090fc1cb2984e0cf278cdd54beddbceda88766983") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50f2db044a4f271483b643a090fc1cb2984e0cf278cdd54beddbceda88766983";
    }
    const { state } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (state === null) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-400",
                children: "-"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    const t1 = STYLES[state];
    let t2;
    if ($[2] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium", t1);
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = LABEL_KEYS[state];
    let t4;
    if ($[4] !== t || $[5] !== t3) {
        t4 = t(t3);
        $[4] = t;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(ReadyUnitStatusBadge, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ReadyUnitStatusBadge;
var _c;
__turbopack_context__.k.register(_c, "ReadyUnitStatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadyUnitDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed-double.js [app-client] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyPaymentPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/use-base-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitStatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx [app-client] (ecmascript)");
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
const card = "rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-neutral-800 dark:bg-neutral-900";
const sectionTitle = "mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100";
const isEmpty = (v)=>v === null || v === undefined || v === "";
function DetailRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "5b7cac1d94fa083c1a65229ab195a7eb3152d427936e08a8c9fe1ded14c311ac") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b7cac1d94fa083c1a65229ab195a7eb3152d427936e08a8c9fe1ded14c311ac";
    }
    const { label, value, ltr } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-100",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = ltr ? "ltr" : undefined;
    const t3 = isEmpty(value) ? "-" : value;
    let t4;
    if ($[3] !== t2 || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600 dark:text-gray-300 text-end break-all",
            dir: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t1 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 border-b border-gray-100 py-3 last:border-b-0 dark:border-neutral-800",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_c = DetailRow;
function ReadyUnitDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(428);
    if ($[0] !== "5b7cac1d94fa083c1a65229ab195a7eb3152d427936e08a8c9fe1ded14c311ac") {
        for(let $i = 0; $i < 428; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b7cac1d94fa083c1a65229ab195a7eb3152d427936e08a8c9fe1ded14c311ac";
    }
    const { id } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"])();
    const { data: unit, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnit"])(id);
    const { acceptUnit, rejectUnit, pendingId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnitReview"])();
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPhone, setShowPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const locale = language === "ar" ? "ar-EG" : "en-US";
    if (isLoading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-8 w-80"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        let t2;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-[420px] lg:col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 107,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-[420px]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 107,
                                columnNumber: 146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 107,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 107,
                columnNumber: 12
            }, this);
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (isError || !unit) {
        let t1;
        if ($[3] !== t) {
            t1 = t("readyMarket.details.loadFailed");
            $[3] = t;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        let t2;
        if ($[5] !== t1) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-16 text-center text-sm text-red-600",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 125,
                columnNumber: 12
            }, this);
            $[5] = t1;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        return t2;
    }
    let address;
    let email;
    let hasCoords;
    let lat;
    let lng;
    let location;
    let owner;
    let ownerName;
    let phone;
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
    let whatsapp;
    if ($[7] !== acceptUnit || $[8] !== activeImage || $[9] !== basePath || $[10] !== locale || $[11] !== pendingId || $[12] !== rejectUnit || $[13] !== router || $[14] !== t || $[15] !== unit) {
        const images = (unit.medias ?? []).filter(_ReadyUnitDetailsPageAnonymous);
        const mainImage = images[activeImage] ?? images[0];
        const up = unit.user_property;
        owner = up?.user;
        let t11;
        if ($[36] !== owner?.first_name || $[37] !== owner?.last_name || $[38] !== owner?.name) {
            t11 = owner?.name || [
                owner?.first_name,
                owner?.last_name
            ].filter(Boolean).join(" ") || "-";
            $[36] = owner?.first_name;
            $[37] = owner?.last_name;
            $[38] = owner?.name;
            $[39] = t11;
        } else {
            t11 = $[39];
        }
        ownerName = t11;
        email = up?.address?.email || owner?.email || "";
        phone = up?.address?.phone_number || owner?.phone_number || owner?.phone || "";
        whatsapp = up?.address?.whatsapp_number || up?.whatsapp_number || phone;
        location = unit.location;
        lat = Number(location?.latitude);
        lng = Number(location?.longitude);
        let t12;
        if ($[40] !== lat || $[41] !== lng) {
            t12 = Number.isFinite(lat) && Number.isFinite(lng) && !(lat === 0 && lng === 0);
            $[40] = lat;
            $[41] = lng;
            $[42] = t12;
        } else {
            t12 = $[42];
        }
        hasCoords = t12;
        const t13 = location?.description || location?.landmark;
        const t14 = location?.area?.name ?? location?.area?.area_name;
        const t15 = location?.city?.name ?? location?.city?.city_name;
        let t16;
        if ($[43] !== t13 || $[44] !== t14 || $[45] !== t15) {
            t16 = [
                t13,
                t14,
                t15
            ].filter(Boolean).filter(_ReadyUnitDetailsPageAnonymous2);
            $[43] = t13;
            $[44] = t14;
            $[45] = t15;
            $[46] = t16;
        } else {
            t16 = $[46];
        }
        address = t16.join(" \xB7 ");
        let t17;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = [
                "north_side",
                "south_side",
                "east_side",
                "west_side"
            ];
            $[47] = t17;
        } else {
            t17 = $[47];
        }
        let t18;
        if ($[48] !== location) {
            t18 = t17.filter({
                "ReadyUnitDetailsPage[(anonymous)()]": (k)=>location?.[k]
            }["ReadyUnitDetailsPage[(anonymous)()]"]);
            $[48] = location;
            $[49] = t18;
        } else {
            t18 = $[49];
        }
        const sides = t18;
        const num = _ReadyUnitDetailsPageNum;
        let t19;
        if ($[50] !== locale) {
            t19 = ({
                "ReadyUnitDetailsPage[fmt]": (v_0)=>{
                    const n_0 = num(v_0);
                    return n_0 === null ? null : n_0.toLocaleString(locale);
                }
            })["ReadyUnitDetailsPage[fmt]"];
            $[50] = locale;
            $[51] = t19;
        } else {
            t19 = $[51];
        }
        const fmt = t19;
        const price = num(unit.price);
        let t20;
        if ($[52] !== locale) {
            t20 = ({
                "ReadyUnitDetailsPage[formatDate]": (value)=>{
                    const date = value ? new Date(value) : null;
                    return date && !Number.isNaN(date.getTime()) ? date.toLocaleDateString(locale, {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }) : null;
                }
            })["ReadyUnitDetailsPage[formatDate]"];
            $[52] = locale;
            $[53] = t20;
        } else {
            t20 = $[53];
        }
        const formatDate = t20;
        let t21;
        if ($[54] !== t) {
            t21 = ({
                "ReadyUnitDetailsPage[label]": (group, value_0)=>{
                    if (!value_0) {
                        return null;
                    }
                    const key = `readyMarket.${group}.${value_0}`;
                    const text = t(key);
                    return text === key ? value_0 : text;
                }
            })["ReadyUnitDetailsPage[label]"];
            $[54] = t;
            $[55] = t21;
        } else {
            t21 = $[55];
        }
        const label = t21;
        let t22;
        if ($[56] !== unit) {
            t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractPaymentPlans"])(unit);
            $[56] = unit;
            $[57] = t22;
        } else {
            t22 = $[57];
        }
        const plans = t22;
        const unitPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadyUnitPaymentPlan"])(unit);
        let t23;
        if ($[58] !== locale || $[59] !== t) {
            t23 = ({
                "ReadyUnitDetailsPage[money]": (v_1)=>{
                    const n_1 = num(v_1);
                    return n_1 === null ? null : `${t("common.aed")} ${n_1.toLocaleString(locale)}`;
                }
            })["ReadyUnitDetailsPage[money]"];
            $[58] = locale;
            $[59] = t;
            $[60] = t23;
        } else {
            t23 = $[60];
        }
        const money = t23;
        const t24 = unit.property_type?.name;
        const t25 = unit.property_subtype?.name;
        let t26;
        if ($[61] !== t24 || $[62] !== t25) {
            t26 = [
                t24,
                t25
            ].filter(Boolean);
            $[61] = t24;
            $[62] = t25;
            $[63] = t26;
        } else {
            t26 = $[63];
        }
        const typeName = t26.join(" / ");
        const buildingName = typeof unit.building === "string" ? unit.building : unit.building?.building_name;
        let t27;
        if ($[64] !== unit.agent_license || $[65] !== unit.broker_license || $[66] !== unit.dld_barcode || $[67] !== unit.dld_permit_number || $[68] !== unit.reference_listed || $[69] !== unit.zone_name) {
            t27 = [
                {
                    key: "referenceListed",
                    value: unit.reference_listed
                },
                {
                    key: "brokerLicense",
                    value: unit.broker_license
                },
                {
                    key: "agentLicense",
                    value: unit.agent_license
                },
                {
                    key: "zoneName",
                    value: unit.zone_name
                },
                {
                    key: "dldPermit",
                    value: unit.dld_permit_number
                },
                {
                    key: "dldBarcode",
                    value: unit.dld_barcode
                }
            ].filter(_ReadyUnitDetailsPageAnonymous3);
            $[64] = unit.agent_license;
            $[65] = unit.broker_license;
            $[66] = unit.dld_barcode;
            $[67] = unit.dld_permit_number;
            $[68] = unit.reference_listed;
            $[69] = unit.zone_name;
            $[70] = t27;
        } else {
            t27 = $[70];
        }
        const licenses = t27;
        const state = unit.is_active === 0 || unit.is_active === 1 || unit.is_active === 2 ? unit.is_active : null;
        const isPending = pendingId === unit.property_id;
        t9 = "space-y-4";
        let t28;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 344,
                columnNumber: 13
            }, this);
            $[71] = t28;
        } else {
            t28 = $[71];
        }
        let t29;
        if ($[72] !== t) {
            t29 = t("readyMarket.breadcrumb.home");
            $[72] = t;
            $[73] = t29;
        } else {
            t29 = $[73];
        }
        let t30;
        if ($[74] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 359,
                columnNumber: 13
            }, this);
            $[74] = t29;
            $[75] = t30;
        } else {
            t30 = $[75];
        }
        let t31;
        if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-3 w-3 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 367,
                columnNumber: 13
            }, this);
            $[76] = t31;
        } else {
            t31 = $[76];
        }
        let t32;
        if ($[77] !== t) {
            t32 = t("readyMarket.title");
            $[77] = t;
            $[78] = t32;
        } else {
            t32 = $[78];
        }
        let t33;
        if ($[79] !== basePath || $[80] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: basePath,
                prefetch: false,
                className: "hover:text-[#007b78]",
                children: t32
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 382,
                columnNumber: 13
            }, this);
            $[79] = basePath;
            $[80] = t32;
            $[81] = t33;
        } else {
            t33 = $[81];
        }
        let t34;
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-3 w-3 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 391,
                columnNumber: 13
            }, this);
            $[82] = t34;
        } else {
            t34 = $[82];
        }
        let t35;
        if ($[83] !== unit.property_name) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "max-w-[200px] truncate text-gray-700 dark:text-gray-300",
                children: unit.property_name
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 398,
                columnNumber: 13
            }, this);
            $[83] = unit.property_name;
            $[84] = t35;
        } else {
            t35 = $[84];
        }
        let t36;
        if ($[85] !== t30 || $[86] !== t33 || $[87] !== t35) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1 text-xs text-gray-500",
                children: [
                    t28,
                    t30,
                    t31,
                    t33,
                    t34,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 406,
                columnNumber: 13
            }, this);
            $[85] = t30;
            $[86] = t33;
            $[87] = t35;
            $[88] = t36;
        } else {
            t36 = $[88];
        }
        let t37;
        if ($[89] !== basePath || $[90] !== router) {
            t37 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>router.push(basePath)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[89] = basePath;
            $[90] = router;
            $[91] = t37;
        } else {
            t37 = $[91];
        }
        let t38;
        if ($[92] !== t) {
            t38 = t("common.back");
            $[92] = t;
            $[93] = t38;
        } else {
            t38 = $[93];
        }
        let t39;
        if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-5 w-5 text-gray-700 dark:text-gray-200 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 435,
                columnNumber: 13
            }, this);
            $[94] = t39;
        } else {
            t39 = $[94];
        }
        let t40;
        if ($[95] !== t37 || $[96] !== t38) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t37,
                "aria-label": t38,
                children: t39
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 442,
                columnNumber: 13
            }, this);
            $[95] = t37;
            $[96] = t38;
            $[97] = t40;
        } else {
            t40 = $[97];
        }
        let t41;
        if ($[98] !== unit.property_name) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl",
                children: unit.property_name
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 451,
                columnNumber: 13
            }, this);
            $[98] = unit.property_name;
            $[99] = t41;
        } else {
            t41 = $[99];
        }
        let t42;
        if ($[100] !== state) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitStatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitStatusBadge"], {
                state: state
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 459,
                columnNumber: 13
            }, this);
            $[100] = state;
            $[101] = t42;
        } else {
            t42 = $[101];
        }
        let t43;
        if ($[102] !== t40 || $[103] !== t41 || $[104] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t40,
                    t41,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 467,
                columnNumber: 13
            }, this);
            $[102] = t40;
            $[103] = t41;
            $[104] = t42;
            $[105] = t43;
        } else {
            t43 = $[105];
        }
        let t44;
        if ($[106] !== t36 || $[107] !== t43) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 space-y-1.5",
                children: [
                    t36,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 477,
                columnNumber: 13
            }, this);
            $[106] = t36;
            $[107] = t43;
            $[108] = t44;
        } else {
            t44 = $[108];
        }
        const t45 = isPending || state === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED;
        let t46;
        if ($[109] !== rejectUnit || $[110] !== unit.property_id) {
            t46 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>rejectUnit(unit.property_id)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[109] = rejectUnit;
            $[110] = unit.property_id;
            $[111] = t46;
        } else {
            t46 = $[111];
        }
        let t47;
        if ($[112] !== t) {
            t47 = t("readyMarket.actions.reject");
            $[112] = t;
            $[113] = t47;
        } else {
            t47 = $[113];
        }
        let t48;
        if ($[114] !== t45 || $[115] !== t46 || $[116] !== t47) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: t45,
                onClick: t46,
                className: "h-9 rounded-lg bg-[#f04438] px-4 text-xs font-medium text-white hover:bg-[#d92d20] disabled:opacity-50",
                children: t47
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 506,
                columnNumber: 13
            }, this);
            $[114] = t45;
            $[115] = t46;
            $[116] = t47;
            $[117] = t48;
        } else {
            t48 = $[117];
        }
        const t49 = isPending || state === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED;
        let t50;
        if ($[118] !== acceptUnit || $[119] !== unit.property_id) {
            t50 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>acceptUnit(unit.property_id)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[118] = acceptUnit;
            $[119] = unit.property_id;
            $[120] = t50;
        } else {
            t50 = $[120];
        }
        let t51;
        if ($[121] !== t) {
            t51 = t("readyMarket.actions.approve");
            $[121] = t;
            $[122] = t51;
        } else {
            t51 = $[122];
        }
        let t52;
        if ($[123] !== t49 || $[124] !== t50 || $[125] !== t51) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: t49,
                onClick: t50,
                className: "h-9 rounded-lg bg-[#12b76a] px-4 text-xs font-medium text-white hover:bg-[#039855] disabled:opacity-50",
                children: t51
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 536,
                columnNumber: 13
            }, this);
            $[123] = t49;
            $[124] = t50;
            $[125] = t51;
            $[126] = t52;
        } else {
            t52 = $[126];
        }
        const t53 = `${basePath}/${unit.property_id}/edit`;
        let t54;
        if ($[127] !== t) {
            t54 = t("readyMarket.actions.edit");
            $[127] = t;
            $[128] = t54;
        } else {
            t54 = $[128];
        }
        let t55;
        if ($[129] !== t53 || $[130] !== t54) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t53,
                prefetch: false,
                className: "inline-flex h-9 items-center rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664]",
                children: t54
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 555,
                columnNumber: 13
            }, this);
            $[129] = t53;
            $[130] = t54;
            $[131] = t55;
        } else {
            t55 = $[131];
        }
        let t56;
        if ($[132] !== t48 || $[133] !== t52 || $[134] !== t55) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    t48,
                    t52,
                    t55
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 564,
                columnNumber: 13
            }, this);
            $[132] = t48;
            $[133] = t52;
            $[134] = t55;
            $[135] = t56;
        } else {
            t56 = $[135];
        }
        if ($[136] !== t44 || $[137] !== t56) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    t44,
                    t56
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 573,
                columnNumber: 13
            }, this);
            $[136] = t44;
            $[137] = t56;
            $[138] = t10;
        } else {
            t10 = $[138];
        }
        if ($[139] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-4");
            $[139] = t7;
        } else {
            t7 = $[139];
        }
        let t57;
        if ($[140] !== t) {
            t57 = t("readyMarket.form.basicInfo");
            $[140] = t;
            $[141] = t57;
        } else {
            t57 = $[141];
        }
        if ($[142] !== t57) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t57
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 595,
                columnNumber: 12
            }, this);
            $[142] = t57;
            $[143] = t8;
        } else {
            t8 = $[143];
        }
        t5 = "grid grid-cols-1 gap-4 lg:grid-cols-3";
        const t58 = mainImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: mainImage.media_url,
            alt: unit.property_name,
            fill: true,
            sizes: "(max-width: 1024px) 100vw, 66vw",
            className: "object-cover",
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 602,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center text-sm text-gray-400",
            children: t("readyMarket.details.noImages")
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 602,
            columnNumber: 188
        }, this);
        let t59;
        if ($[144] !== t58) {
            t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800",
                children: t58
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 605,
                columnNumber: 13
            }, this);
            $[144] = t58;
            $[145] = t59;
        } else {
            t59 = $[145];
        }
        const t60 = images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-2",
            children: images.slice(0, 8).map({
                "ReadyUnitDetailsPage[(anonymous)()]": (media, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "ReadyUnitDetailsPage[(anonymous)() > <button>.onClick]": ()=>setActiveImage(index_0)
                        }["ReadyUnitDetailsPage[(anonymous)() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative aspect-[4/3] overflow-hidden rounded-lg border-2", index_0 === activeImage ? "border-[#007b78]" : "border-transparent"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: media.media_url,
                            alt: unit.property_name,
                            fill: true,
                            sizes: "160px",
                            className: "object-cover",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                            lineNumber: 614,
                            columnNumber: 215
                        }, this)
                    }, media.media_id, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 612,
                        columnNumber: 68
                    }, this)
            }["ReadyUnitDetailsPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 611,
            columnNumber: 38
        }, this);
        let t61;
        if ($[146] !== t59 || $[147] !== t60) {
            t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t59,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 618,
                columnNumber: 13
            }, this);
            $[146] = t59;
            $[147] = t60;
            $[148] = t61;
        } else {
            t61 = $[148];
        }
        let t62;
        if ($[149] !== t) {
            t62 = t("readyMarket.details.listingDetails");
            $[149] = t;
            $[150] = t62;
        } else {
            t62 = $[150];
        }
        let t63;
        if ($[151] !== t62) {
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: sectionTitle,
                children: t62
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 635,
                columnNumber: 13
            }, this);
            $[151] = t62;
            $[152] = t63;
        } else {
            t63 = $[152];
        }
        let t64;
        if ($[153] === Symbol.for("react.memo_cache_sentinel")) {
            t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 643,
                columnNumber: 13
            }, this);
            $[153] = t64;
        } else {
            t64 = $[153];
        }
        const t65 = unit.bedrooms ?? 0;
        let t66;
        if ($[154] !== t || $[155] !== t65) {
            t66 = t("readyMarket.details.beds", {
                count: t65
            });
            $[154] = t;
            $[155] = t65;
            $[156] = t66;
        } else {
            t66 = $[156];
        }
        let t67;
        if ($[157] !== t66) {
            t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5",
                children: [
                    t64,
                    t66
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 662,
                columnNumber: 13
            }, this);
            $[157] = t66;
            $[158] = t67;
        } else {
            t67 = $[158];
        }
        let t68;
        if ($[159] === Symbol.for("react.memo_cache_sentinel")) {
            t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 670,
                columnNumber: 13
            }, this);
            $[159] = t68;
        } else {
            t68 = $[159];
        }
        const t69 = unit.bathrooms ?? 0;
        let t70;
        if ($[160] !== t || $[161] !== t69) {
            t70 = t("readyMarket.details.baths", {
                count: t69
            });
            $[160] = t;
            $[161] = t69;
            $[162] = t70;
        } else {
            t70 = $[162];
        }
        let t71;
        if ($[163] !== t70) {
            t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5",
                children: [
                    t68,
                    t70
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 689,
                columnNumber: 13
            }, this);
            $[163] = t70;
            $[164] = t71;
        } else {
            t71 = $[164];
        }
        let t72;
        if ($[165] !== fmt || $[166] !== unit.size) {
            t72 = fmt(unit.size) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 697,
                        columnNumber: 82
                    }, this),
                    fmt(unit.size)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 697,
                columnNumber: 31
            }, this);
            $[165] = fmt;
            $[166] = unit.size;
            $[167] = t72;
        } else {
            t72 = $[167];
        }
        let t73;
        if ($[168] === Symbol.for("react.memo_cache_sentinel")) {
            t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 706,
                columnNumber: 13
            }, this);
            $[168] = t73;
        } else {
            t73 = $[168];
        }
        const t74 = unit.views_count ?? unit.views ?? 0;
        let t75;
        if ($[169] !== t || $[170] !== t74) {
            t75 = t("readyMarket.details.viewsCount", {
                count: t74
            });
            $[169] = t;
            $[170] = t74;
            $[171] = t75;
        } else {
            t75 = $[171];
        }
        let t76;
        if ($[172] !== t75) {
            t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1.5",
                children: [
                    t73,
                    t75
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 725,
                columnNumber: 13
            }, this);
            $[172] = t75;
            $[173] = t76;
        } else {
            t76 = $[173];
        }
        let t77;
        if ($[174] !== t67 || $[175] !== t71 || $[176] !== t72 || $[177] !== t76) {
            t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-4 pb-2 text-xs text-gray-600 dark:text-gray-300",
                children: [
                    t67,
                    t71,
                    t72,
                    t76
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 733,
                columnNumber: 13
            }, this);
            $[174] = t67;
            $[175] = t71;
            $[176] = t72;
            $[177] = t76;
            $[178] = t77;
        } else {
            t77 = $[178];
        }
        let t78;
        if ($[179] !== t) {
            t78 = t("readyMarket.form.unitType");
            $[179] = t;
            $[180] = t78;
        } else {
            t78 = $[180];
        }
        let t79;
        if ($[181] !== t78 || $[182] !== typeName) {
            t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t78,
                value: typeName
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 752,
                columnNumber: 13
            }, this);
            $[181] = t78;
            $[182] = typeName;
            $[183] = t79;
        } else {
            t79 = $[183];
        }
        let t80;
        if ($[184] !== t) {
            t80 = t("readyMarket.form.listingType");
            $[184] = t;
            $[185] = t80;
        } else {
            t80 = $[185];
        }
        const t81 = up?.listing_type;
        let t82;
        if ($[186] !== label || $[187] !== t81) {
            t82 = label("listingType", t81);
            $[186] = label;
            $[187] = t81;
            $[188] = t82;
        } else {
            t82 = $[188];
        }
        let t83;
        if ($[189] !== t80 || $[190] !== t82) {
            t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t80,
                value: t82
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 779,
                columnNumber: 13
            }, this);
            $[189] = t80;
            $[190] = t82;
            $[191] = t83;
        } else {
            t83 = $[191];
        }
        let t84;
        if ($[192] !== t) {
            t84 = t("readyMarket.columns.availability");
            $[192] = t;
            $[193] = t84;
        } else {
            t84 = $[193];
        }
        let t85;
        if ($[194] !== label || $[195] !== unit.availability_status) {
            t85 = label("availability", unit.availability_status);
            $[194] = label;
            $[195] = unit.availability_status;
            $[196] = t85;
        } else {
            t85 = $[196];
        }
        let t86;
        if ($[197] !== t84 || $[198] !== t85) {
            t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t84,
                value: t85
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 805,
                columnNumber: 13
            }, this);
            $[197] = t84;
            $[198] = t85;
            $[199] = t86;
        } else {
            t86 = $[199];
        }
        let t87;
        if ($[200] !== t) {
            t87 = t("readyMarket.details.construction");
            $[200] = t;
            $[201] = t87;
        } else {
            t87 = $[201];
        }
        let t88;
        if ($[202] !== label || $[203] !== unit.construction_status) {
            t88 = label("construction", unit.construction_status);
            $[202] = label;
            $[203] = unit.construction_status;
            $[204] = t88;
        } else {
            t88 = $[204];
        }
        let t89;
        if ($[205] !== t87 || $[206] !== t88) {
            t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t87,
                value: t88
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 831,
                columnNumber: 13
            }, this);
            $[205] = t87;
            $[206] = t88;
            $[207] = t89;
        } else {
            t89 = $[207];
        }
        let t90;
        if ($[208] !== t) {
            t90 = t("readyMarket.details.finishing");
            $[208] = t;
            $[209] = t90;
        } else {
            t90 = $[209];
        }
        let t91;
        if ($[210] !== label || $[211] !== unit.finishing_status) {
            t91 = label("finishing", unit.finishing_status);
            $[210] = label;
            $[211] = unit.finishing_status;
            $[212] = t91;
        } else {
            t91 = $[212];
        }
        let t92;
        if ($[213] !== t90 || $[214] !== t91) {
            t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t90,
                value: t91
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 857,
                columnNumber: 13
            }, this);
            $[213] = t90;
            $[214] = t91;
            $[215] = t92;
        } else {
            t92 = $[215];
        }
        let t93;
        if ($[216] !== t) {
            t93 = t("readyMarket.details.furnishing");
            $[216] = t;
            $[217] = t93;
        } else {
            t93 = $[217];
        }
        let t94;
        if ($[218] !== label || $[219] !== unit.furnish_status) {
            t94 = label("furnish", unit.furnish_status);
            $[218] = label;
            $[219] = unit.furnish_status;
            $[220] = t94;
        } else {
            t94 = $[220];
        }
        let t95;
        if ($[221] !== t93 || $[222] !== t94) {
            t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t93,
                value: t94
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 883,
                columnNumber: 13
            }, this);
            $[221] = t93;
            $[222] = t94;
            $[223] = t95;
        } else {
            t95 = $[223];
        }
        let t96;
        if ($[224] !== t) {
            t96 = t("readyMarket.form.yearBuilt");
            $[224] = t;
            $[225] = t96;
        } else {
            t96 = $[225];
        }
        const t97 = up?.built_year ?? up?.year_built;
        let t98;
        if ($[226] !== t96 || $[227] !== t97) {
            t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t96,
                value: t97
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 901,
                columnNumber: 13
            }, this);
            $[226] = t96;
            $[227] = t97;
            $[228] = t98;
        } else {
            t98 = $[228];
        }
        let t99;
        if ($[229] !== t) {
            t99 = t("readyMarket.details.maidRoom");
            $[229] = t;
            $[230] = t99;
        } else {
            t99 = $[230];
        }
        const t100 = unit.maid_room ? "readyMarket.details.yes" : "readyMarket.details.no";
        let t101;
        if ($[231] !== t || $[232] !== t100) {
            t101 = t(t100);
            $[231] = t;
            $[232] = t100;
            $[233] = t101;
        } else {
            t101 = $[233];
        }
        let t102;
        if ($[234] !== t101 || $[235] !== t99) {
            t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t99,
                value: t101
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 928,
                columnNumber: 14
            }, this);
            $[234] = t101;
            $[235] = t99;
            $[236] = t102;
        } else {
            t102 = $[236];
        }
        let t103;
        if ($[237] !== t || $[238] !== unit.floor) {
            t103 = !isEmpty(unit.floor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.form.floor"),
                value: unit.floor
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 937,
                columnNumber: 38
            }, this);
            $[237] = t;
            $[238] = unit.floor;
            $[239] = t103;
        } else {
            t103 = $[239];
        }
        let t104;
        if ($[240] !== t || $[241] !== unit.view) {
            t104 = !isEmpty(unit.view) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.form.view"),
                value: unit.view
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 946,
                columnNumber: 37
            }, this);
            $[240] = t;
            $[241] = unit.view;
            $[242] = t104;
        } else {
            t104 = $[242];
        }
        let t105;
        if ($[243] !== fmt || $[244] !== t || $[245] !== unit.parking_spaces) {
            t105 = num(unit.parking_spaces) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.parking"),
                value: fmt(unit.parking_spaces)
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 955,
                columnNumber: 51
            }, this);
            $[243] = fmt;
            $[244] = t;
            $[245] = unit.parking_spaces;
            $[246] = t105;
        } else {
            t105 = $[246];
        }
        let t106;
        if ($[247] !== fmt || $[248] !== t || $[249] !== unit.bua_size) {
            t106 = num(unit.bua_size) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.buaSize"),
                value: fmt(unit.bua_size)
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 965,
                columnNumber: 45
            }, this);
            $[247] = fmt;
            $[248] = t;
            $[249] = unit.bua_size;
            $[250] = t106;
        } else {
            t106 = $[250];
        }
        let t107;
        if ($[251] !== fmt || $[252] !== t || $[253] !== unit.plot_size) {
            t107 = num(unit.plot_size) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.plotSize"),
                value: fmt(unit.plot_size)
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 975,
                columnNumber: 46
            }, this);
            $[251] = fmt;
            $[252] = t;
            $[253] = unit.plot_size;
            $[254] = t107;
        } else {
            t107 = $[254];
        }
        let t108;
        if ($[255] !== buildingName || $[256] !== t) {
            t108 = buildingName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.building"),
                value: buildingName
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 985,
                columnNumber: 30
            }, this);
            $[255] = buildingName;
            $[256] = t;
            $[257] = t108;
        } else {
            t108 = $[257];
        }
        let t109;
        if ($[258] !== t || $[259] !== unit.project) {
            t109 = unit.project?.project_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.project"),
                value: unit.project.project_name
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 994,
                columnNumber: 44
            }, this);
            $[258] = t;
            $[259] = unit.project;
            $[260] = t109;
        } else {
            t109 = $[260];
        }
        let t110;
        if ($[261] !== label || $[262] !== t || $[263] !== unit.ownership_type) {
            t110 = unit.ownership_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t("readyMarket.details.ownership"),
                value: label("ownership", unit.ownership_type)
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1003,
                columnNumber: 37
            }, this);
            $[261] = label;
            $[262] = t;
            $[263] = unit.ownership_type;
            $[264] = t110;
        } else {
            t110 = $[264];
        }
        let t111;
        if ($[265] !== t) {
            t111 = t("readyMarket.details.listingId");
            $[265] = t;
            $[266] = t111;
        } else {
            t111 = $[266];
        }
        const t112 = unit.property_no && unit.property_no !== "0" ? unit.property_no : `#${unit.property_id}`;
        let t113;
        if ($[267] !== t111 || $[268] !== t112) {
            t113 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t111,
                value: t112
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1022,
                columnNumber: 14
            }, this);
            $[267] = t111;
            $[268] = t112;
            $[269] = t113;
        } else {
            t113 = $[269];
        }
        let t114;
        if ($[270] !== t) {
            t114 = t("readyMarket.columns.createdAt");
            $[270] = t;
            $[271] = t114;
        } else {
            t114 = $[271];
        }
        let t115;
        if ($[272] !== formatDate || $[273] !== unit.created_at) {
            t115 = formatDate(unit.created_at);
            $[272] = formatDate;
            $[273] = unit.created_at;
            $[274] = t115;
        } else {
            t115 = $[274];
        }
        let t116;
        if ($[275] !== t114 || $[276] !== t115) {
            t116 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t114,
                value: t115
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1048,
                columnNumber: 14
            }, this);
            $[275] = t114;
            $[276] = t115;
            $[277] = t116;
        } else {
            t116 = $[277];
        }
        let t117;
        if ($[278] !== t || $[279] !== unit.description) {
            t117 = unit.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100",
                        children: [
                            t("readyMarket.details.description"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-3.5 w-3.5 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 1057,
                                columnNumber: 196
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1057,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-sm max-w-none text-sm text-gray-600 dark:prose-invert dark:text-gray-300",
                        dangerouslySetInnerHTML: {
                            __html: unit.description
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1057,
                        columnNumber: 247
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1057,
                columnNumber: 34
            }, this);
            $[278] = t;
            $[279] = unit.description;
            $[280] = t117;
        } else {
            t117 = $[280];
        }
        let t118;
        if ($[281] !== t || $[282] !== unit.features) {
            t118 = (unit.features ?? []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100",
                        children: t("readyMarket.form.amenities")
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1068,
                        columnNumber: 72
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: unit.features.map(_ReadyUnitDetailsPageUnitFeaturesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1068,
                        columnNumber: 186
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1068,
                columnNumber: 50
            }, this);
            $[281] = t;
            $[282] = unit.features;
            $[283] = t118;
        } else {
            t118 = $[283];
        }
        let t119;
        if ($[284] !== t102 || $[285] !== t103 || $[286] !== t104 || $[287] !== t105 || $[288] !== t106 || $[289] !== t107 || $[290] !== t108 || $[291] !== t109 || $[292] !== t110 || $[293] !== t113 || $[294] !== t116 || $[295] !== t117 || $[296] !== t118 || $[297] !== t63 || $[298] !== t77 || $[299] !== t79 || $[300] !== t83 || $[301] !== t86 || $[302] !== t89 || $[303] !== t92 || $[304] !== t95 || $[305] !== t98) {
            t119 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: card,
                children: [
                    t63,
                    t77,
                    t79,
                    t83,
                    t86,
                    t89,
                    t92,
                    t95,
                    t98,
                    t102,
                    t103,
                    t104,
                    t105,
                    t106,
                    t107,
                    t108,
                    t109,
                    t110,
                    t113,
                    t116,
                    t117,
                    t118
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1077,
                columnNumber: 14
            }, this);
            $[284] = t102;
            $[285] = t103;
            $[286] = t104;
            $[287] = t105;
            $[288] = t106;
            $[289] = t107;
            $[290] = t108;
            $[291] = t109;
            $[292] = t110;
            $[293] = t113;
            $[294] = t116;
            $[295] = t117;
            $[296] = t118;
            $[297] = t63;
            $[298] = t77;
            $[299] = t79;
            $[300] = t83;
            $[301] = t86;
            $[302] = t89;
            $[303] = t92;
            $[304] = t95;
            $[305] = t98;
            $[306] = t119;
        } else {
            t119 = $[306];
        }
        const t120 = unitPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: card,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: sectionTitle,
                    children: t("readyMarket.form.paymentPlan")
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 52
                }, this),
                unitPlan.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                    label: t("readyMarket.form.paymentPlanName"),
                    value: unitPlan.name
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 139
                }, this),
                unitPlan.payment_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                    label: t("readyMarket.form.paymentMethod"),
                    value: label("paymentTypes", unitPlan.payment_type)
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 247
                }, this),
                num(unitPlan.total_cost) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                    label: t("readyMarket.form.paymentPlanTotalCost"),
                    value: money(unitPlan.total_cost)
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 396
                }, this),
                num(unitPlan.intervals) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                    label: t("readyMarket.form.installmentsCount"),
                    value: fmt(unitPlan.intervals)
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 533
                }, this),
                num(unitPlan.down_payment_price) !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                    label: t("readyMarket.form.downPayment"),
                    value: money(unitPlan.down_payment_price)
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 673
                }, this),
                unitPlan.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1 text-sm font-medium text-gray-900 dark:text-gray-100",
                            children: t("readyMarket.form.paymentPlanDescription")
                        }, void 0, false, {
                            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                            lineNumber: 1104,
                            columnNumber: 819
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "whitespace-pre-line text-sm text-gray-600 dark:text-gray-300",
                            children: unitPlan.description
                        }, void 0, false, {
                            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                            lineNumber: 1104,
                            columnNumber: 942
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1104,
                    columnNumber: 797
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1104,
            columnNumber: 30
        }, this);
        let t121;
        if ($[307] !== plans) {
            t121 = plans.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyPaymentPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyPaymentPlans"], {
                plans: plans
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1107,
                columnNumber: 34
            }, this);
            $[307] = plans;
            $[308] = t121;
        } else {
            t121 = $[308];
        }
        let t122;
        if ($[309] !== t) {
            t122 = t("readyMarket.form.location");
            $[309] = t;
            $[310] = t122;
        } else {
            t122 = $[310];
        }
        let t123;
        if ($[311] !== t122) {
            t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: sectionTitle,
                children: t122
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1123,
                columnNumber: 14
            }, this);
            $[311] = t122;
            $[312] = t123;
        } else {
            t123 = $[312];
        }
        let t124;
        if ($[313] !== t) {
            t124 = t("readyMarket.details.address");
            $[313] = t;
            $[314] = t124;
        } else {
            t124 = $[314];
        }
        let t125;
        if ($[315] !== address || $[316] !== t124) {
            t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t124,
                value: address
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1139,
                columnNumber: 14
            }, this);
            $[315] = address;
            $[316] = t124;
            $[317] = t125;
        } else {
            t125 = $[317];
        }
        let t126;
        if ($[318] !== t) {
            t126 = t("readyMarket.details.coordinates");
            $[318] = t;
            $[319] = t126;
        } else {
            t126 = $[319];
        }
        let t127;
        if ($[320] !== hasCoords || $[321] !== lat || $[322] !== lng) {
            t127 = hasCoords ? `${lat.toFixed(6)}, ${lng.toFixed(6)}` : null;
            $[320] = hasCoords;
            $[321] = lat;
            $[322] = lng;
            $[323] = t127;
        } else {
            t127 = $[323];
        }
        let t128;
        if ($[324] !== t126 || $[325] !== t127) {
            t128 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                label: t126,
                value: t127,
                ltr: true
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1166,
                columnNumber: 14
            }, this);
            $[324] = t126;
            $[325] = t127;
            $[326] = t128;
        } else {
            t128 = $[326];
        }
        let t129;
        if ($[327] !== location || $[328] !== sides || $[329] !== t) {
            t129 = sides.map({
                "ReadyUnitDetailsPage[sides.map()]": (side)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                        label: t(`readyMarket.details.${side}`),
                        value: location?.[side]
                    }, side, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1176,
                        columnNumber: 54
                    }, this)
            }["ReadyUnitDetailsPage[sides.map()]"]);
            $[327] = location;
            $[328] = sides;
            $[329] = t;
            $[330] = t129;
        } else {
            t129 = $[330];
        }
        let t130;
        if ($[331] !== t123 || $[332] !== t125 || $[333] !== t128 || $[334] !== t129) {
            t130 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: card,
                children: [
                    t123,
                    t125,
                    t128,
                    t129
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1187,
                columnNumber: 14
            }, this);
            $[331] = t123;
            $[332] = t125;
            $[333] = t128;
            $[334] = t129;
            $[335] = t130;
        } else {
            t130 = $[335];
        }
        let t131;
        if ($[336] !== licenses || $[337] !== t) {
            t131 = licenses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: sectionTitle,
                        children: t("readyMarket.details.licenses")
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 1198,
                        columnNumber: 59
                    }, this),
                    licenses.map({
                        "ReadyUnitDetailsPage[licenses.map()]": (l_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                label: t(`readyMarket.details.${l_0.key}`),
                                value: l_0.value,
                                ltr: true
                            }, l_0.key, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 1199,
                                columnNumber: 58
                            }, this)
                    }["ReadyUnitDetailsPage[licenses.map()]"])
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1198,
                columnNumber: 37
            }, this);
            $[336] = licenses;
            $[337] = t;
            $[338] = t131;
        } else {
            t131 = $[338];
        }
        if ($[339] !== t119 || $[340] !== t120 || $[341] !== t121 || $[342] !== t130 || $[343] !== t131 || $[344] !== t61) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 lg:col-span-2",
                children: [
                    t61,
                    t119,
                    t120,
                    t121,
                    t130,
                    t131
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 1208,
                columnNumber: 12
            }, this);
            $[339] = t119;
            $[340] = t120;
            $[341] = t121;
            $[342] = t130;
            $[343] = t131;
            $[344] = t61;
            $[345] = t6;
        } else {
            t6 = $[345];
        }
        t4 = "space-y-4";
        if ($[346] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-3");
            $[346] = t3;
        } else {
            t3 = $[346];
        }
        t1 = "text-lg font-bold text-[#7c3aed]";
        t2 = price === null ? "-" : `${t("common.aed")} ${price.toLocaleString(locale)}`;
        $[7] = acceptUnit;
        $[8] = activeImage;
        $[9] = basePath;
        $[10] = locale;
        $[11] = pendingId;
        $[12] = rejectUnit;
        $[13] = router;
        $[14] = t;
        $[15] = unit;
        $[16] = address;
        $[17] = email;
        $[18] = hasCoords;
        $[19] = lat;
        $[20] = lng;
        $[21] = location;
        $[22] = owner;
        $[23] = ownerName;
        $[24] = phone;
        $[25] = t1;
        $[26] = t10;
        $[27] = t2;
        $[28] = t3;
        $[29] = t4;
        $[30] = t5;
        $[31] = t6;
        $[32] = t7;
        $[33] = t8;
        $[34] = t9;
        $[35] = whatsapp;
    } else {
        address = $[16];
        email = $[17];
        hasCoords = $[18];
        lat = $[19];
        lng = $[20];
        location = $[21];
        owner = $[22];
        ownerName = $[23];
        phone = $[24];
        t1 = $[25];
        t10 = $[26];
        t2 = $[27];
        t3 = $[28];
        t4 = $[29];
        t5 = $[30];
        t6 = $[31];
        t7 = $[32];
        t8 = $[33];
        t9 = $[34];
        whatsapp = $[35];
    }
    let t11;
    if ($[347] !== t1 || $[348] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1281,
            columnNumber: 11
        }, this);
        $[347] = t1;
        $[348] = t2;
        $[349] = t11;
    } else {
        t11 = $[349];
    }
    let t12;
    if ($[350] !== t) {
        t12 = t("readyMarket.columns.price");
        $[350] = t;
        $[351] = t12;
    } else {
        t12 = $[351];
    }
    let t13;
    if ($[352] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1298,
            columnNumber: 11
        }, this);
        $[352] = t12;
        $[353] = t13;
    } else {
        t13 = $[353];
    }
    let t14;
    if ($[354] !== t11 || $[355] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1306,
            columnNumber: 11
        }, this);
        $[354] = t11;
        $[355] = t13;
        $[356] = t14;
    } else {
        t14 = $[356];
    }
    let t15;
    if ($[357] !== t || $[358] !== whatsapp) {
        t15 = whatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex h-9 items-center justify-center gap-2 rounded-lg bg-[#007b78] text-xs font-medium text-white hover:bg-[#006664]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1315,
                    columnNumber: 251
                }, this),
                t("readyMarket.details.whatsapp")
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1315,
            columnNumber: 23
        }, this);
        $[357] = t;
        $[358] = whatsapp;
        $[359] = t15;
    } else {
        t15 = $[359];
    }
    let t16;
    if ($[360] !== phone || $[361] !== showPhone || $[362] !== t) {
        t16 = phone && (showPhone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `tel:${phone}`,
            dir: "ltr",
            className: "flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1324,
                    columnNumber: 251
                }, this),
                phone
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1324,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>setShowPhone(true)
            }["ReadyUnitDetailsPage[<button>.onClick]"],
            className: "flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1326,
                    columnNumber: 240
                }, this),
                t("readyMarket.details.phoneNumber")
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1324,
            columnNumber: 294
        }, this));
        $[360] = phone;
        $[361] = showPhone;
        $[362] = t;
        $[363] = t16;
    } else {
        t16 = $[363];
    }
    let t17;
    if ($[364] !== hasCoords || $[365] !== lat || $[366] !== lng || $[367] !== t) {
        t17 = hasCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            title: t("readyMarket.form.location"),
            src: `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            className: "h-56 w-full rounded-lg border-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1336,
            columnNumber: 24
        }, this);
        $[364] = hasCoords;
        $[365] = lat;
        $[366] = lng;
        $[367] = t;
        $[368] = t17;
    } else {
        t17 = $[368];
    }
    let t18;
    if ($[369] !== address) {
        t18 = address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1347,
                    columnNumber: 103
                }, this),
                address
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1347,
            columnNumber: 22
        }, this);
        $[369] = address;
        $[370] = t18;
    } else {
        t18 = $[370];
    }
    let t19;
    if ($[371] !== location || $[372] !== t) {
        t19 = location?.google_map_link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: location.google_map_link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1 text-xs font-medium text-[#007b78] hover:underline",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1355,
                    columnNumber: 211
                }, this),
                t("readyMarket.details.openInMaps")
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1355,
            columnNumber: 40
        }, this);
        $[371] = location;
        $[372] = t;
        $[373] = t19;
    } else {
        t19 = $[373];
    }
    let t20;
    if ($[374] !== t14 || $[375] !== t15 || $[376] !== t16 || $[377] !== t17 || $[378] !== t18 || $[379] !== t19 || $[380] !== t3) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t14,
                t15,
                t16,
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1364,
            columnNumber: 11
        }, this);
        $[374] = t14;
        $[375] = t15;
        $[376] = t16;
        $[377] = t17;
        $[378] = t18;
        $[379] = t19;
        $[380] = t3;
        $[381] = t20;
    } else {
        t20 = $[381];
    }
    let t21;
    if ($[382] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-3");
        $[382] = t21;
    } else {
        t21 = $[382];
    }
    let t22;
    if ($[383] !== owner || $[384] !== ownerName) {
        t22 = owner?.profile_picture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: owner.profile_picture,
            alt: ownerName,
            width: 44,
            height: 44,
            className: "h-11 w-11 shrink-0 rounded-full object-cover",
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1385,
            columnNumber: 36
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700",
            children: ownerName.charAt(0).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1385,
            columnNumber: 191
        }, this);
        $[383] = owner;
        $[384] = ownerName;
        $[385] = t22;
    } else {
        t22 = $[385];
    }
    let t23;
    if ($[386] !== ownerName) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "truncate text-sm font-semibold text-gray-900 dark:text-gray-100",
            children: ownerName
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1394,
            columnNumber: 11
        }, this);
        $[386] = ownerName;
        $[387] = t23;
    } else {
        t23 = $[387];
    }
    let t24;
    if ($[388] !== t) {
        t24 = t("readyMarket.columns.owner");
        $[388] = t;
        $[389] = t24;
    } else {
        t24 = $[389];
    }
    let t25;
    if ($[390] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1410,
            columnNumber: 11
        }, this);
        $[390] = t24;
        $[391] = t25;
    } else {
        t25 = $[391];
    }
    let t26;
    if ($[392] !== t23 || $[393] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1418,
            columnNumber: 11
        }, this);
        $[392] = t23;
        $[393] = t25;
        $[394] = t26;
    } else {
        t26 = $[394];
    }
    let t27;
    if ($[395] !== t22 || $[396] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1427,
            columnNumber: 11
        }, this);
        $[395] = t22;
        $[396] = t26;
        $[397] = t27;
    } else {
        t27 = $[397];
    }
    let t28;
    if ($[398] !== email) {
        t28 = email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "h-3.5 w-3.5 shrink-0 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1436,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate",
                    dir: "ltr",
                    children: email
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1436,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1436,
            columnNumber: 20
        }, this);
        $[398] = email;
        $[399] = t28;
    } else {
        t28 = $[399];
    }
    let t29;
    if ($[400] !== phone) {
        t29 = phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-3.5 w-3.5 shrink-0 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1444,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    dir: "ltr",
                    children: phone
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1444,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1444,
            columnNumber: 20
        }, this);
        $[400] = phone;
        $[401] = t29;
    } else {
        t29 = $[401];
    }
    let t30;
    if ($[402] !== phone || $[403] !== whatsapp) {
        t30 = whatsapp && whatsapp !== phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                    className: "h-3.5 w-3.5 shrink-0 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1452,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    dir: "ltr",
                    children: whatsapp
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 1452,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1452,
            columnNumber: 45
        }, this);
        $[402] = phone;
        $[403] = whatsapp;
        $[404] = t30;
    } else {
        t30 = $[404];
    }
    let t31;
    if ($[405] !== t28 || $[406] !== t29 || $[407] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-700 dark:border-neutral-800 dark:text-gray-300",
            children: [
                t28,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1461,
            columnNumber: 11
        }, this);
        $[405] = t28;
        $[406] = t29;
        $[407] = t30;
        $[408] = t31;
    } else {
        t31 = $[408];
    }
    let t32;
    if ($[409] !== t27 || $[410] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            children: [
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1471,
            columnNumber: 11
        }, this);
        $[409] = t27;
        $[410] = t31;
        $[411] = t32;
    } else {
        t32 = $[411];
    }
    let t33;
    if ($[412] !== t20 || $[413] !== t32 || $[414] !== t4) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t20,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1480,
            columnNumber: 11
        }, this);
        $[412] = t20;
        $[413] = t32;
        $[414] = t4;
        $[415] = t33;
    } else {
        t33 = $[415];
    }
    let t34;
    if ($[416] !== t33 || $[417] !== t5 || $[418] !== t6) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1490,
            columnNumber: 11
        }, this);
        $[416] = t33;
        $[417] = t5;
        $[418] = t6;
        $[419] = t34;
    } else {
        t34 = $[419];
    }
    let t35;
    if ($[420] !== t34 || $[421] !== t7 || $[422] !== t8) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1500,
            columnNumber: 11
        }, this);
        $[420] = t34;
        $[421] = t7;
        $[422] = t8;
        $[423] = t35;
    } else {
        t35 = $[423];
    }
    let t36;
    if ($[424] !== t10 || $[425] !== t35 || $[426] !== t9) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1510,
            columnNumber: 11
        }, this);
        $[424] = t10;
        $[425] = t35;
        $[426] = t9;
        $[427] = t36;
    } else {
        t36 = $[427];
    }
    return t36;
}
_s(ReadyUnitDetailsPage, "dwvCoGVGX25CpL4PgPzUrLPIwaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnitReview"]
    ];
});
_c1 = ReadyUnitDetailsPage;
function _ReadyUnitDetailsPageUnitFeaturesMap(feature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md border border-gray-200 px-2.5 py-1 text-[11px] text-gray-700 dark:border-neutral-700 dark:text-gray-300",
        children: [
            feature.feature_name ?? feature.name,
            feature.pivot?.value ? ` · ${feature.pivot.value}` : ""
        ]
    }, feature.feature_id, true, {
        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
        lineNumber: 1521,
        columnNumber: 10
    }, this);
}
function _ReadyUnitDetailsPageAnonymous3(l) {
    return !isEmpty(l.value);
}
function _ReadyUnitDetailsPageNum(v) {
    const n = Number(v);
    return v === null || v === undefined || v === "" || Number.isNaN(n) ? null : n;
}
function _ReadyUnitDetailsPageAnonymous2(part, index, all) {
    return all.indexOf(part) === index;
}
function _ReadyUnitDetailsPageAnonymous(m) {
    return m.media_url && (!m.media_type || m.media_type === "image");
}
var _c, _c1;
__turbopack_context__.k.register(_c, "DetailRow");
__turbopack_context__.k.register(_c1, "ReadyUnitDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5f937118._.js.map