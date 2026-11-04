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
"[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminPropertiesService",
    ()=>AdminPropertiesService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
const AdminPropertiesService = {
    getProperties: async (params)=>{
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append("page", params.page.toString());
        if (params.per_page) queryParams.append("per_page", params.per_page.toString());
        if (params.search) queryParams.append("property_name", params.search);
        if (params.status) queryParams.append("availability_status", params.status);
        if (params.sort_by) {
            params.sort_by.forEach((s)=>queryParams.append("sort_by[]", s));
        }
        if (params.sort_order) {
            params.sort_order.forEach((s)=>queryParams.append("sort_order[]", s));
        }
        if (Array.isArray(params.project_id)) {
            params.project_id.forEach((id)=>queryParams.append("project_id[]", id.toString()));
        } else if (params.project_id) {
            queryParams.append("project_id", params.project_id.toString());
        }
        if (Array.isArray(params.country_id)) {
            params.country_id.forEach((id)=>queryParams.append("country_id[]", id.toString()));
        } else if (params.country_id) {
            queryParams.append("country_id", params.country_id.toString());
        }
        if (Array.isArray(params.developer_id)) {
            params.developer_id.forEach((id)=>queryParams.append("developer_id[]", id.toString()));
        } else if (params.developer_id) {
            queryParams.append("developer_id", params.developer_id.toString());
        }
        if (params.property_type_id) {
            queryParams.append("property_type_id", params.property_type_id.toString());
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/properties?${queryParams.toString()}`);
        return response.data;
    },
    getPropertyTypes: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/propertyTypes");
        return response.data;
    },
    getPropertySubtypes: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/propertySubtypes");
        return response.data;
    },
    getProjects: async (page, perPage, search)=>{
        const params = new URLSearchParams();
        if (page !== undefined) params.append("page", page.toString());
        if (perPage !== undefined) params.append("per_page", perPage.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/projects?${params.toString()}`);
        return response.data;
    },
    createProperty: async (data)=>{
        const payload = buildPayload(data);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/properties", payload);
        return response.data;
    },
    deleteProperty: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/properties/${propertyId}`);
        return response.data;
    },
    getProperty: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/properties/${propertyId}`);
        return response.data;
    },
    updateProperty: async (propertyId, data)=>{
        const payload = buildPayload(data);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/properties/${propertyId}`, payload);
        return response.data;
    },
    addPropertyMedia: async (propertyId, file, isPrimary = false)=>{
        const formData = new FormData();
        formData.append("property_id", propertyId.toString());
        formData.append("media_type", "image");
        formData.append("media_url", file);
        formData.append("is_primary", isPrimary ? "1" : "0");
        formData.append("my_order", "1");
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/properties/medias", formData);
        return response.data;
    },
    addPropertyFloorPlan: async (propertyId, file)=>{
        const formData = new FormData();
        formData.append("property_id", propertyId.toString());
        formData.append("medias[0]", file);
        formData.append("meta[0][media_type]", "floor_plan");
        formData.append("meta[0][description]", "Floor Plan");
        formData.append("meta[0][is_primary]", "0");
        formData.append("meta[0][my_order]", "1");
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/properties/medias", formData);
        return response.data;
    },
    deletePropertyMedia: async (mediaId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/properties/medias/${mediaId}`);
        return response.data;
    },
    getAvailableFeatures: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/features");
        const raw = response.data;
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw?.data)) return raw.data;
        if (Array.isArray(raw?.data?.data)) return raw.data.data;
        return [];
    },
    getPropertyFeature: async (propertyId, featureId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/properties/${propertyId}/features/${featureId}`);
        return response.data;
    },
    savePropertyFeatures: async (propertyId, features)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/properties/features", {
            property_id: propertyId,
            features
        });
        return response.data;
    },
    deletePropertyFeature: async (propertyId, featureId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/properties/${propertyId}/features/${featureId}`);
        return response.data;
    }
};
function buildPayload(data) {
    const { property_name_en, ...rest } = data;
    return Object.fromEntries(Object.entries(rest).filter(([, v])=>v !== undefined && v !== ""));
}
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
"[project]/src/features/properties/components/property-details/PropertyMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyMedia",
    ()=>PropertyMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
function resolveMediaUrl(m) {
    if (!m) return "";
    const raw = typeof m === "string" ? m : m.media_url || m.url || m.image_url || m.file_path || "";
    if (!raw) return "";
    return raw.trim().replace(/\\+/g, "");
}
function PropertyMedia(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "32cefaa442b288204ba679c6a0d24ab188a19d289eb72987f50b895c105f8fd7") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "32cefaa442b288204ba679c6a0d24ab188a19d289eb72987f50b895c105f8fd7";
    }
    const { medias, projectMedias, propertyName } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const rawMediaList = [
        ...(medias ?? []).map(_PropertyMediaAnonymous),
        ...(projectMedias ?? []).map(_PropertyMediaAnonymous2)
    ].filter(_PropertyMediaAnonymous3);
    const seenUrls = new Set();
    const allMediaList = [];
    for (const item of rawMediaList){
        if (item.media_url && !seenUrls.has(item.media_url)) {
            seenUrls.add(item.media_url);
            allMediaList.push(item);
        }
    }
    const imageMediaList = allMediaList.filter(_PropertyMediaAllMediaListFilter);
    const displayMediaList = imageMediaList.length > 0 ? imageMediaList : allMediaList;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLightboxOpen, setIsLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedUrl, setCopiedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeMedia = displayMediaList[activeIndex] || displayMediaList[0];
    const activeUrl = resolveMediaUrl(activeMedia);
    let t1;
    if ($[1] !== isAr) {
        t1 = ({
            "PropertyMedia[handleCopy]": (url)=>{
                if (!url) {
                    return;
                }
                navigator.clipboard.writeText(url);
                setCopiedUrl(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isAr ? "\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0648\u0633\u0627\u0626\u0637!" : "Media URL copied to clipboard!");
                setTimeout({
                    "PropertyMedia[handleCopy > setTimeout()]": ()=>{
                        setCopiedUrl(null);
                    }
                }["PropertyMedia[handleCopy > setTimeout()]"], 2500);
            }
        })["PropertyMedia[handleCopy]"];
        $[1] = isAr;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCopy = t1;
    const handlePrev = {
        "PropertyMedia[handlePrev]": (e)=>{
            e.stopPropagation();
            setActiveIndex({
                "PropertyMedia[handlePrev > setActiveIndex()]": (prev)=>prev > 0 ? prev - 1 : displayMediaList.length - 1
            }["PropertyMedia[handlePrev > setActiveIndex()]"]);
        }
    }["PropertyMedia[handlePrev]"];
    const handleNext = {
        "PropertyMedia[handleNext]": (e_0)=>{
            e_0.stopPropagation();
            setActiveIndex({
                "PropertyMedia[handleNext > setActiveIndex()]": (prev_0)=>prev_0 < displayMediaList.length - 1 ? prev_0 + 1 : 0
            }["PropertyMedia[handleNext > setActiveIndex()]"]);
        }
    }["PropertyMedia[handleNext]"];
    const t2 = "space-y-6";
    const t3 = displayMediaList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 group overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                        src: activeUrl,
                        alt: `${propertyName} - ${activeIndex + 1}`,
                        fill: true,
                        className: "object-cover transition-transform duration-500 group-hover:scale-[1.02]",
                        fallbackSrc: "/images/default-logo.svg",
                        priority: true,
                        sizes: "(max-width: 1024px) 100vw, 66vw"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 110,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 110,
                        columnNumber: 438
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 end-3 flex items-center gap-1 z-10 bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/15 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                onClick: {
                                    "PropertyMedia[<Button>.onClick]": ()=>handleCopy(activeUrl)
                                }["PropertyMedia[<Button>.onClick]"],
                                className: "h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 sm:px-2.5 gap-1.5 cursor-pointer",
                                title: isAr ? "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629" : "Copy Media URL",
                                children: [
                                    copiedUrl === activeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3.5 h-3.5 text-teal-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 112,
                                        columnNumber: 329
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 112,
                                        columnNumber: 379
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: copiedUrl === activeUrl ? isAr ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "Copied" : isAr ? "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637" : "Copy URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 112,
                                        columnNumber: 412
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 110,
                                columnNumber: 750
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                asChild: true,
                                className: "h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer",
                                title: isAr ? "\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637 \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629" : "Open in new tab",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: activeUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 112,
                                        columnNumber: 1078
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 112,
                                    columnNumber: 1016
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 112,
                                columnNumber: 634
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                onClick: {
                                    "PropertyMedia[<Button>.onClick]": ()=>setIsLightboxOpen(true)
                                }["PropertyMedia[<Button>.onClick]"],
                                className: "h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer",
                                title: isAr ? "\u062A\u0643\u0628\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629" : "Expand Image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 114,
                                    columnNumber: 269
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 112,
                                columnNumber: 1131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 110,
                        columnNumber: 606
                    }, this),
                    displayMediaList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handlePrev,
                                className: "absolute start-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10",
                                "aria-label": "Previous image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 114,
                                    columnNumber: 687
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 114,
                                columnNumber: 352
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNext,
                                className: "absolute end-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10",
                                "aria-label": "Next image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-5 h-5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 114,
                                    columnNumber: 1075
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 114,
                                columnNumber: 746
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 start-3 end-3 flex items-center justify-between text-white text-xs z-10 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "bg-black/60 text-white border-none backdrop-blur-sm text-[11px] px-2 py-0.5",
                                        children: [
                                            activeIndex + 1,
                                            " / ",
                                            displayMediaList.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1307
                                    }, this),
                                    activeMedia?.is_primary === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "bg-teal-600 text-white border-none text-[11px] px-2 py-0.5",
                                        children: isAr ? "\u0631\u0626\u064A\u0633\u064A" : "Primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 114,
                                        columnNumber: 1489
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 114,
                                columnNumber: 1266
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline-block text-[11px] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md truncate max-w-[280px] md:max-w-[400px] font-mono select-all pointer-events-auto cursor-pointer hover:bg-black/80 transition-colors",
                                onClick: {
                                    "PropertyMedia[<span>.onClick]": (e_1)=>{
                                        e_1.stopPropagation();
                                        handleCopy(activeUrl);
                                    }
                                }["PropertyMedia[<span>.onClick]"],
                                title: activeUrl,
                                children: activeUrl
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 114,
                                columnNumber: 1635
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 114,
                        columnNumber: 1139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 110,
                columnNumber: 71
            }, this),
            displayMediaList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 p-2 overflow-x-auto pb-2 scrollbar-thin",
                children: displayMediaList.map({
                    "PropertyMedia[displayMediaList.map()]": (media, index)=>{
                        const u = resolveMediaUrl(media);
                        const isSelected = index === activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "PropertyMedia[displayMediaList.map() > <button>.onClick]": ()=>setActiveIndex(index)
                            }["PropertyMedia[displayMediaList.map() > <button>.onClick]"],
                            className: `relative w-16 sm:w-24 aspect-[4/3] shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${isSelected ? "border-teal-500 ring-2 ring-teal-500/20 shadow-xs scale-[1.02]" : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-300 dark:hover:border-neutral-700"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                                src: u,
                                alt: `Thumbnail ${index + 1}`,
                                fill: true,
                                className: "object-cover",
                                fallbackSrc: "/images/default-logo.svg",
                                sizes: "96px"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 125,
                                columnNumber: 383
                            }, this)
                        }, media.media_id ?? index, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                            lineNumber: 123,
                            columnNumber: 18
                        }, this);
                    }
                }["PropertyMedia[displayMediaList.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 119,
                columnNumber: 125
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 110,
        columnNumber: 44
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-[16/10] sm:aspect-[16/9] bg-muted/30 dark:bg-neutral-800/30 flex flex-col items-center justify-center rounded-lg text-center p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "h-14 w-14 text-muted-foreground/30 mb-2"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 127,
                columnNumber: 220
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                children: isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u0633\u0627\u0626\u0637 \u0645\u062A\u0648\u0641\u0631\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0648\u062D\u062F\u0629" : "No media available for this property"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 127,
                columnNumber: 285
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 127,
        columnNumber: 67
    }, this);
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: t3
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 130,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = allMediaList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row items-center justify-between pb-3 border-b border-gray-100 dark:border-neutral-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 136,
                                    columnNumber: 430
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 136,
                                columnNumber: 297
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                                        children: isAr ? "\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062A" : "Property Media & URLs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 136,
                                        columnNumber: 474
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: isAr ? "\u0642\u0627\u0626\u0645\u0629 \u0628\u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u0645\u0631\u0641\u0648\u0639\u0629" : "Direct links and storage URLs for attached media files"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 136,
                                        columnNumber: 725
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 136,
                                columnNumber: 469
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 136,
                        columnNumber: 256
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "w-3 h-3 me-1"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 136,
                                columnNumber: 1169
                            }, this),
                            allMediaList.length,
                            " ",
                            isAr ? "\u0648\u0633\u0627\u0626\u0637" : "Assets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 136,
                        columnNumber: 1124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 136,
                columnNumber: 132
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-3 sm:p-4 space-y-2.5",
                children: allMediaList.map({
                    "PropertyMedia[allMediaList.map()]": (media_0, index_0)=>{
                        const url_0 = resolveMediaUrl(media_0);
                        const isCopied = copiedUrl === url_0;
                        const isPrimary = media_0.is_primary === 1 || media_0.is_primary === true;
                        const mediaType = media_0.media_type || "image";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50/70 dark:bg-neutral-800/40 hover:border-gray-200 dark:hover:border-neutral-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start sm:items-center gap-3 min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 shrink-0 border border-gray-200 dark:border-neutral-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                                                src: url_0,
                                                alt: `Media #${media_0.media_id ?? index_0 + 1}`,
                                                fill: true,
                                                className: "object-cover",
                                                fallbackSrc: "/images/default-logo.svg",
                                                sizes: "56px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                lineNumber: 142,
                                                columnNumber: 540
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 142,
                                            columnNumber: 373
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 flex-wrap",
                                                    children: [
                                                        media_0.media_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-mono text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                "#",
                                                                media_0.media_id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 828
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider font-semibold",
                                                            children: mediaType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 928
                                                        }, this),
                                                        isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: "bg-teal-600 text-white text-[10px] px-1.5 py-0 h-4",
                                                            children: isAr ? "\u0631\u0626\u064A\u0633\u064A" : "Primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 1067
                                                        }, this),
                                                        media_0.entity_type === "PROJECTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-[10px] px-1.5 py-0 h-4 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 bg-teal-50/50 dark:bg-teal-950/40",
                                                            children: isAr ? "\u0645\u0634\u0631\u0648\u0639" : "Project"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 1238
                                                        }, this),
                                                        media_0.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-gray-400 dark:text-gray-500 hidden sm:inline",
                                                            children: new Date(media_0.created_at).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 1492
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 754
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-[11px] font-semibold text-gray-400 shrink-0",
                                                            children: "media_url:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 1688
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-xs text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/50 dark:border-teal-800/50 px-2 py-0.5 rounded font-mono truncate select-all flex-1 min-w-0 cursor-pointer",
                                                            onClick: {
                                                                "PropertyMedia[allMediaList.map() > <code>.onClick]": ()=>handleCopy(url_0)
                                                            }["PropertyMedia[allMediaList.map() > <code>.onClick]"],
                                                            title: url_0,
                                                            children: url_0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 1787
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 1637
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 142,
                                            columnNumber: 710
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 142,
                                    columnNumber: 302
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 self-end sm:self-center shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-neutral-800 w-full sm:w-auto justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "PropertyMedia[allMediaList.map() > <Button>.onClick]": ()=>handleCopy(url_0)
                                            }["PropertyMedia[allMediaList.map() > <Button>.onClick]"],
                                            className: "h-8 text-xs px-2.5 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 cursor-pointer gap-1",
                                            children: [
                                                isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3.5 h-3.5 text-teal-600 dark:text-teal-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 203
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 272
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isCopied ? isAr ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "Copied" : isAr ? "\u0646\u0633\u062E" : "Copy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 305
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 144,
                                            columnNumber: 303
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            size: "sm",
                                            variant: "ghost",
                                            asChild: true,
                                            className: "h-8 text-xs px-2 hover:bg-white dark:hover:bg-neutral-800 cursor-pointer text-gray-600 dark:text-gray-300",
                                            title: isAr ? "\u0641\u062A\u062D \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u062C\u062F\u064A\u062F\u0629" : "Open URL",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: url_0,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 805
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                lineNumber: 146,
                                                columnNumber: 747
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 146,
                                            columnNumber: 442
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 144,
                                    columnNumber: 122
                                }, this)
                            ]
                        }, media_0.media_id ?? index_0, true, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                            lineNumber: 142,
                            columnNumber: 18
                        }, this);
                    }
                }["PropertyMedia[allMediaList.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 136,
                columnNumber: 1299
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 136,
        columnNumber: 41
    }, this);
    const t6 = activeIndex + 1;
    let t7;
    if ($[5] !== displayMediaList.length || $[6] !== propertyName || $[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            className: "flex flex-row items-center justify-between pb-2 border-b border-gray-100 dark:border-neutral-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 truncate pe-6",
                children: [
                    propertyName,
                    " - ",
                    t6,
                    " / ",
                    displayMediaList.length
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 152,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[5] = displayMediaList.length;
        $[6] = propertyName;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== activeUrl) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/90 mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: activeUrl,
                alt: "Full size media",
                fill: true,
                className: "object-contain",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 1200px) 100vw, 1200px"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 162,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[9] = activeUrl;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== activeUrl) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 font-mono truncate select-all max-w-md",
            children: activeUrl
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[11] = activeUrl;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== activeUrl || $[14] !== handleCopy) {
        t10 = ({
            "PropertyMedia[<Button>.onClick]": ()=>handleCopy(activeUrl)
        })["PropertyMedia[<Button>.onClick]"];
        $[13] = activeUrl;
        $[14] = handleCopy;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== activeUrl || $[17] !== copiedUrl) {
        t11 = copiedUrl === activeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-3.5 h-3.5 text-teal-600 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 189,
            columnNumber: 37
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 189,
            columnNumber: 92
        }, this);
        $[16] = activeUrl;
        $[17] = copiedUrl;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    const t12 = copiedUrl === activeUrl ? isAr ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "Copied" : isAr ? "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637" : "Copy URL";
    let t13;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: t10,
            className: "h-8 text-xs dark:border-neutral-700",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    const t15 = isAr ? "\u0641\u062A\u062D \u0627\u0644\u0623\u0635\u0644" : "Open Original";
    let t16;
    if ($[24] !== activeUrl || $[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            asChild: true,
            className: "h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: activeUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 217,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[24] = activeUrl;
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t13 || $[28] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 shrink-0",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t16;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t17 || $[31] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2",
            children: [
                t9,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t9;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t18 || $[34] !== t7 || $[35] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-full p-4 dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t7,
                t8,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t7;
        $[35] = t8;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== isLightboxOpen || $[38] !== setIsLightboxOpen || $[39] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isLightboxOpen,
            onOpenChange: setIsLightboxOpen,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[37] = isLightboxOpen;
        $[38] = setIsLightboxOpen;
        $[39] = t19;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t20 || $[42] !== t4 || $[43] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t4,
                t5,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[41] = t20;
        $[42] = t4;
        $[43] = t5;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    return t21;
}
_s(PropertyMedia, "4yI3c/L7EMHqL2sxsgIQhnfFEEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PropertyMedia;
function _PropertyMediaAllMediaListFilter(m_2) {
    return (m_2.media_type || "").toLowerCase() === "image" || !m_2.media_type;
}
function _PropertyMediaAnonymous3(m_1) {
    return !!m_1.media_url;
}
function _PropertyMediaAnonymous2(m_0) {
    return typeof m_0 === "string" ? {
        media_url: resolveMediaUrl(m_0),
        media_type: "image",
        entity_type: "PROJECTS"
    } : {
        ...m_0,
        media_url: resolveMediaUrl(m_0),
        entity_type: m_0.entity_type || "PROJECTS"
    };
}
function _PropertyMediaAnonymous(m) {
    return typeof m === "string" ? {
        media_url: resolveMediaUrl(m),
        media_type: "image",
        entity_type: "PROPERTIES"
    } : {
        ...m,
        media_url: resolveMediaUrl(m),
        entity_type: m.entity_type || "PROPERTIES"
    };
}
var _c;
__turbopack_context__.k.register(_c, "PropertyMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertyDescription.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyDescription",
    ()=>PropertyDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PropertyDescription(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "29d4afe4d0371e5e41d2c65af9c2416b53a188d302e8fa5089f7370a1de5ceed") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "29d4afe4d0371e5e41d2c65af9c2416b53a188d302e8fa5089f7370a1de5ceed";
    }
    const { description } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== description || $[2] !== t) {
        t1 = description?.trim() || t("properties.details.noDescription") || "No description available";
        $[1] = description;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const content = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
                lineNumber: 33,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("properties.details.description") || t("properties.create.basicInfo.description") || "Description";
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t3
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
                        lineNumber: 48,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
                lineNumber: 48,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== content) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed break-words",
                dangerouslySetInnerHTML: {
                    __html: content
                }
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
                lineNumber: 56,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = content;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyDescription.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_s(PropertyDescription, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PropertyDescription;
var _c;
__turbopack_context__.k.register(_c, "PropertyDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertyInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyInfo",
    ()=>PropertyInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed.js [app-client] (ecmascript) <export default as Bed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StatCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "c83cc82d867db03031eec9542c19f73176e38df81fd97bd26b6c6c5baf97b50c") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c83cc82d867db03031eec9542c19f73176e38df81fd97bd26b6c6c5baf97b50c";
    }
    const { icon, label, value } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-medium text-gray-500 dark:text-gray-400 truncate",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = value || "N/A";
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate mt-0.5",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t1 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-800/40 hover:border-teal-200 dark:hover:border-teal-800/50 hover:bg-white dark:hover:bg-neutral-800/80 transition-all duration-200",
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = StatCard;
function PropertyInfo(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "c83cc82d867db03031eec9542c19f73176e38df81fd97bd26b6c6c5baf97b50c") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c83cc82d867db03031eec9542c19f73176e38df81fd97bd26b6c6c5baf97b50c";
    }
    const { bedrooms, bathrooms, size, floor, bua_size, plot_size, parking_spaces, maid_room } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isMaidRoomTrue = maid_room === true || maid_room === 1 || maid_room === "1" || maid_room === "true";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 105,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("properties.create.unitDetails.title") || "Unit Details";
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t2
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                        lineNumber: 120,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 120,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bed$3e$__["Bed"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t) {
        t5 = t("properties.create.unitDetails.bedrooms") || "Bedrooms";
        $[7] = t;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== bedrooms || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: t4,
            label: t5,
            value: bedrooms
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[9] = bedrooms;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t) {
        t8 = t("properties.create.unitDetails.bathrooms") || "Bathrooms";
        $[13] = t;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== bathrooms || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: t7,
            label: t8,
            value: bathrooms
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[15] = bathrooms;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t) {
        t11 = t("properties.create.unitDetails.unitSize") || "Unit Size";
        $[19] = t;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const t12 = size ? `${size} m²` : undefined;
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: t10,
            label: t11,
            value: t12
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== bua_size || $[25] !== t) {
        t14 = bua_size != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 201,
                columnNumber: 47
            }, void 0),
            label: t("properties.create.unitDetails.builtSize") || "BUA Size",
            value: `${bua_size} m²`
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 201,
            columnNumber: 31
        }, this);
        $[24] = bua_size;
        $[25] = t;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== plot_size || $[28] !== t) {
        t15 = plot_size != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 210,
                columnNumber: 48
            }, void 0),
            label: t("properties.create.unitDetails.plotSize") || "Plot Size",
            value: `${plot_size} m²`
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 210,
            columnNumber: 32
        }, this);
        $[27] = plot_size;
        $[28] = t;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== floor || $[31] !== t) {
        t16 = floor != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 219,
                columnNumber: 44
            }, void 0),
            label: t("properties.create.unitDetails.floor") || "Floor",
            value: floor
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 219,
            columnNumber: 28
        }, this);
        $[30] = floor;
        $[31] = t;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== parking_spaces || $[34] !== t) {
        t17 = parking_spaces != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 228,
                columnNumber: 53
            }, void 0),
            label: t("properties.create.license.parkingSpaces") || "Parking Spaces",
            value: parking_spaces
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 228,
            columnNumber: 37
        }, this);
        $[33] = parking_spaces;
        $[34] = t;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== isMaidRoomTrue || $[37] !== maid_room || $[38] !== t) {
        t18 = maid_room != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 237,
                columnNumber: 48
            }, void 0),
            label: t("properties.create.unitDetails.maidRoom") || "Maid Room",
            value: isMaidRoomTrue ? t("common.yes") || "Yes" : t("common.no") || "No"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 237,
            columnNumber: 32
        }, this);
        $[36] = isMaidRoomTrue;
        $[37] = maid_room;
        $[38] = t;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== t13 || $[41] !== t14 || $[42] !== t15 || $[43] !== t16 || $[44] !== t17 || $[45] !== t18 || $[46] !== t6 || $[47] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
                children: [
                    t6,
                    t9,
                    t13,
                    t14,
                    t15,
                    t16,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 247,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t14;
        $[42] = t15;
        $[43] = t16;
        $[44] = t17;
        $[45] = t18;
        $[46] = t6;
        $[47] = t9;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t19 || $[50] !== t3) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t3,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t3;
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    return t20;
}
_s(PropertyInfo, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = PropertyInfo;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "PropertyInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertyFeatures.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyFeatures",
    ()=>PropertyFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PropertyFeatures(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "36c991715185820096643bb45576642b770d245e8361e2f405bb94ef15df228c") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36c991715185820096643bb45576642b770d245e8361e2f405bb94ef15df228c";
    }
    const { features } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    if (!features || features.length === 0) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                lineNumber: 42,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("properties.details.featuresAmenities") || t("properties.create.amenities.title") || "Features & Amenities";
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
                    fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                    lineNumber: 57,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = isAr ? "\u0645\u064A\u0632\u0629" : "Features";
    let t5;
    if ($[6] !== features.length || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-xs font-normal",
            children: [
                features.length,
                " ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = features.length;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== features || $[13] !== isAr) {
        let t8;
        if ($[15] !== isAr) {
            t8 = ({
                "PropertyFeatures[features.map()]": (feature, idx)=>{
                    const label = feature.feature_name || feature.name || (typeof feature.value === "string" && !feature.name ? feature.value : null) || feature.title || `${isAr ? "\u0645\u064A\u0632\u0629" : "Feature"} #${feature.feature_id ?? idx + 1}`;
                    const customValue = feature.value && feature.value !== label ? String(feature.value) : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-gray-50 hover:bg-teal-50/50 dark:bg-neutral-800/60 dark:hover:bg-teal-950/30 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-neutral-700/80 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 90,
                                columnNumber: 352
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-[200px] sm:max-w-xs",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 90,
                                columnNumber: 434
                            }, this),
                            customValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-1.5 py-0.5 rounded bg-white dark:bg-neutral-700/80 text-teal-700 dark:text-teal-300 font-normal border border-gray-200 dark:border-neutral-600",
                                children: customValue
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 90,
                                columnNumber: 517
                            }, this)
                        ]
                    }, feature.feature_id ?? feature.id ?? idx, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                        lineNumber: 90,
                        columnNumber: 18
                    }, this);
                }
            })["PropertyFeatures[features.map()]"];
            $[15] = isAr;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        t7 = features.map(t8);
        $[12] = features;
        $[13] = isAr;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 sm:gap-2.5",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                lineNumber: 107,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(PropertyFeatures, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PropertyFeatures;
var _c;
__turbopack_context__.k.register(_c, "PropertyFeatures");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyFloorPlan",
    ()=>PropertyFloorPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-template.js [app-client] (ecmascript) <export default as LayoutTemplate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
function PropertyFloorPlan(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "31608b31f3dcb84862fd229f1419ba9b904948f7b2b89261f6ae78278fd4f405") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "31608b31f3dcb84862fd229f1419ba9b904948f7b2b89261f6ae78278fd4f405";
    }
    const { floorPlanUrl } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== floorPlanUrl) {
        t1 = floorPlanUrl ? floorPlanUrl.trim().replace(/\\+/g, "") : null;
        $[1] = floorPlanUrl;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const cleanUrl = t1;
    if (!cleanUrl) {
        return null;
    }
    let t2;
    if ($[3] !== cleanUrl || $[4] !== isAr) {
        t2 = ({
            "PropertyFloorPlan[handleCopy]": ()=>{
                navigator.clipboard.writeText(cleanUrl);
                setIsCopied(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isAr ? "\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0645\u062E\u0637\u0637 \u0627\u0644\u0637\u0627\u0628\u0642!" : "Floor plan URL copied to clipboard!");
                setTimeout({
                    "PropertyFloorPlan[handleCopy > setTimeout()]": ()=>setIsCopied(false)
                }["PropertyFloorPlan[handleCopy > setTimeout()]"], 2500);
            }
        })["PropertyFloorPlan[handleCopy]"];
        $[3] = cleanUrl;
        $[4] = isAr;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleCopy = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 66,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("properties.create.floorPlan.title") || "Floor Plan";
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                    lineNumber: 81,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== isCopied) {
        t6 = isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-3.5 h-3.5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 89,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 89,
            columnNumber: 90
        }, this);
        $[11] = isCopied;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = isCopied ? isAr ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "Copied" : isAr ? "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637" : "Copy URL";
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== handleCopy || $[16] !== t6 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: handleCopy,
            className: "h-8 text-xs gap-1.5 cursor-pointer dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[15] = handleCopy;
        $[16] = t6;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = isAr ? "\u0641\u062A\u062D \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629" : "Open in new tab";
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== cleanUrl) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: cleanUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[20] = cleanUrl;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            asChild: true,
            className: "h-8 text-xs px-2 cursor-pointer dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800",
            title: t10,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t9;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t14 || $[29] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: [
                t5,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t5;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "PropertyFloorPlan[<button>.onClick]": ()=>setIsDialogOpen(true)
        })["PropertyFloorPlan[<button>.onClick]"];
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== cleanUrl) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-[16/10] sm:aspect-[16/9]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: cleanUrl,
                alt: "Floor Plan",
                fill: true,
                className: "object-contain p-3 sm:p-4",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 768px) 100vw, 66vw"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 168,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[32] = cleanUrl;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== t) {
        t19 = t("properties.floorPlan.clickToExpand") || "Expand Plan";
        $[35] = t;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/0 group-hover:bg-black/15 dark:group-hover:bg-black/30 transition-colors flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-neutral-900/95 rounded-full p-2.5 shadow-lg backdrop-blur-xs flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-200",
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t19
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                        lineNumber: 191,
                        columnNumber: 395
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 191,
                columnNumber: 160
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t17 || $[40] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t16,
            className: "group relative w-full overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50/60 dark:bg-neutral-800/40 cursor-zoom-in transition-all hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-md block",
            title: "Click to expand",
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t20;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t) {
        t22 = t("properties.floorPlan.clickToExpand") || "Click plan to expand full size";
        $[42] = t;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-semibold text-gray-400 shrink-0",
            children: "URL:"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== cleanUrl || $[48] !== handleCopy) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 min-w-0",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "font-mono text-[11px] text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/50 dark:border-teal-800/50 px-2 py-0.5 rounded truncate max-w-[260px] sm:max-w-xs md:max-w-md select-all cursor-pointer",
                    onClick: handleCopy,
                    title: cleanUrl,
                    children: cleanUrl
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                    lineNumber: 231,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[47] = cleanUrl;
        $[48] = handleCopy;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] !== t23 || $[51] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 pt-1",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[50] = t23;
        $[51] = t25;
        $[52] = t26;
    } else {
        t26 = $[52];
    }
    let t27;
    if ($[53] !== t21 || $[54] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5 space-y-3",
            children: [
                t21,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[53] = t21;
        $[54] = t26;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t15 || $[57] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t15,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[56] = t15;
        $[57] = t27;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== t) {
        t30 = t("properties.create.floorPlan.title") || "Floor Plan";
        $[60] = t;
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    let t31;
    if ($[62] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "flex items-center gap-2 text-gray-900 dark:text-gray-100 text-base sm:text-lg",
                children: [
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 282,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[62] = t30;
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] !== cleanUrl) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800/80 mt-2 border border-gray-100 dark:border-neutral-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: cleanUrl,
                alt: "Floor Plan Full Size",
                fill: true,
                className: "object-contain p-2 sm:p-4",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 1200px) 95vw, 1200px"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 290,
                columnNumber: 189
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[64] = cleanUrl;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    let t33;
    if ($[66] !== cleanUrl) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xs font-mono text-gray-500 truncate max-w-sm sm:max-w-md select-all",
            children: cleanUrl
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[66] = cleanUrl;
        $[67] = t33;
    } else {
        t33 = $[67];
    }
    let t34;
    if ($[68] !== isCopied) {
        t34 = isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-3.5 h-3.5 text-teal-600 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 306,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 306,
            columnNumber: 77
        }, this);
        $[68] = isCopied;
        $[69] = t34;
    } else {
        t34 = $[69];
    }
    const t35 = isCopied ? isAr ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E" : "Copied" : isAr ? "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637" : "Copy URL";
    let t36;
    if ($[70] !== handleCopy || $[71] !== t34 || $[72] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: handleCopy,
            className: "h-8 text-xs dark:border-neutral-700",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[70] = handleCopy;
        $[71] = t34;
        $[72] = t35;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    let t37;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[74] = t37;
    } else {
        t37 = $[74];
    }
    const t38 = isAr ? "\u0641\u062A\u062D \u0627\u0644\u0623\u0635\u0644" : "Open Original";
    let t39;
    if ($[75] !== cleanUrl || $[76] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            asChild: true,
            className: "h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cleanUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    t37,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 333,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[75] = cleanUrl;
        $[76] = t38;
        $[77] = t39;
    } else {
        t39 = $[77];
    }
    let t40;
    if ($[78] !== t36 || $[79] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 shrink-0 self-end sm:self-auto",
            children: [
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[78] = t36;
        $[79] = t39;
        $[80] = t40;
    } else {
        t40 = $[80];
    }
    let t41;
    if ($[81] !== t33 || $[82] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2",
            children: [
                t33,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[81] = t33;
        $[82] = t40;
        $[83] = t41;
    } else {
        t41 = $[83];
    }
    let t42;
    if ($[84] !== t31 || $[85] !== t32 || $[86] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-[95vw] p-4 sm:p-6 dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t31,
                t32,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[84] = t31;
        $[85] = t32;
        $[86] = t41;
        $[87] = t42;
    } else {
        t42 = $[87];
    }
    let t43;
    if ($[88] !== isDialogOpen || $[89] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isDialogOpen,
            onOpenChange: setIsDialogOpen,
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[88] = isDialogOpen;
        $[89] = t42;
        $[90] = t43;
    } else {
        t43 = $[90];
    }
    let t44;
    if ($[91] !== t28 || $[92] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t28,
                t43
            ]
        }, void 0, true);
        $[91] = t28;
        $[92] = t43;
        $[93] = t44;
    } else {
        t44 = $[93];
    }
    return t44;
}
_s(PropertyFloorPlan, "XhH+dNRRbMKT3XFdKP4O4m7tedI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PropertyFloorPlan;
var _c;
__turbopack_context__.k.register(_c, "PropertyFloorPlan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/property-details/PropertySidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertySidebar",
    ()=>PropertySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
function InfoRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "60ee6527a21b4968ceb49831f306f235e19d7a7860dd0fb155b8c3d0cde2e5ae") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60ee6527a21b4968ceb49831f306f235e19d7a7860dd0fb155b8c3d0cde2e5ae";
    }
    const { label, value } = t0;
    if (value == null || value === "") {
        return null;
    }
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500 dark:text-gray-400 shrink-0",
            children: [
                label,
                ":"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-end text-gray-900 dark:text-gray-100 break-words max-w-[65%]",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start gap-2 py-2 border-b border-gray-100 dark:border-neutral-800/60 last:border-0 text-xs sm:text-sm",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = InfoRow;
function PropertySidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(190);
    if ($[0] !== "60ee6527a21b4968ceb49831f306f235e19d7a7860dd0fb155b8c3d0cde2e5ae") {
        for(let $i = 0; $i < 190; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60ee6527a21b4968ceb49831f306f235e19d7a7860dd0fb155b8c3d0cde2e5ae";
    }
    const { property } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isCopiedLink, setIsCopiedLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const project = property.project?.[0] ?? property.project ?? null;
    const propertyType = property.property_type?.[0] ?? property.property_type ?? null;
    let t1;
    if ($[1] !== property.status || $[2] !== t) {
        t1 = t(`properties.create.options.status.${property.status}`) || property.status;
        $[1] = property.status;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const statusLabel = t1;
    let t2;
    if ($[4] !== property.availability_status || $[5] !== t) {
        t2 = t(`properties.create.options.availabilityStatus.${property.availability_status}`) || property.availability_status;
        $[4] = property.availability_status;
        $[5] = t;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const availabilityLabel = t2;
    let t3;
    if ($[7] !== property.construction_status || $[8] !== t) {
        t3 = t(`properties.create.options.constructionStatus.${property.construction_status}`) || property.construction_status;
        $[7] = property.construction_status;
        $[8] = t;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const constructionLabel = t3;
    let t4;
    if ($[10] !== property.furnish_status || $[11] !== t) {
        t4 = t(`properties.create.options.furnishStatus.${property.furnish_status}`) || property.furnish_status;
        $[10] = property.furnish_status;
        $[11] = t;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const furnishLabel = t4;
    let t5;
    if ($[13] !== property.finishing_status || $[14] !== t) {
        t5 = t(`properties.create.options.finishingStatus.${property.finishing_status}`) || property.finishing_status;
        $[13] = property.finishing_status;
        $[14] = t;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const finishingLabel = t5;
    let t6;
    if ($[16] !== property.ownership_type || $[17] !== t) {
        t6 = t(`properties.create.options.ownershipType.${property.ownership_type}`) || property.ownership_type;
        $[16] = property.ownership_type;
        $[17] = t;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const ownershipLabel = t6;
    let t7;
    if ($[19] !== property.currency || $[20] !== t) {
        t7 = t(`properties.create.options.currency.${property.currency?.toLowerCase?.() || "aed"}`) || property.currency || "AED";
        $[19] = property.currency;
        $[20] = t;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const currencyLabel = t7;
    let t8;
    if ($[22] !== isAr) {
        t8 = ({
            "PropertySidebar[handleShare]": ()=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    navigator.clipboard.writeText(window.location.href);
                    setIsCopiedLink(true);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isAr ? "\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0639\u0642\u0627\u0631!" : "Property link copied to clipboard!");
                    setTimeout({
                        "PropertySidebar[handleShare > setTimeout()]": ()=>setIsCopiedLink(false)
                    }["PropertySidebar[handleShare > setTimeout()]"], 2500);
                }
            }
        })["PropertySidebar[handleShare]"];
        $[22] = isAr;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    const handleShare = t8;
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t) {
        t10 = t("properties.details.price") || t("properties.create.pricing.price") || "Price";
        $[25] = t;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    const t12 = property.availability_status === "available" ? "success" : property.availability_status === "sold" ? "destructive" : "warning";
    let t13;
    if ($[29] !== availabilityLabel || $[30] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t12,
            className: "text-xs font-medium",
            children: availabilityLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[29] = availabilityLabel;
        $[30] = t12;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t11 || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-2 pt-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t11,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 204,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== currencyLabel || $[36] !== property.price) {
        t15 = property.price ? `${currencyLabel} ${Number(property.price).toLocaleString()}` : "N/A";
        $[35] = currencyLabel;
        $[36] = property.price;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[38] = t15;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== propertyType?.name || $[41] !== t) {
        t17 = propertyType?.name ?? t("properties.title");
        $[40] = propertyType?.name;
        $[41] = t;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    let t18;
    if ($[43] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[43] = t17;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== t16 || $[46] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t18;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== currencyLabel || $[49] !== property.price_per_m2) {
        t20 = property.price_per_m2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-200/60 dark:border-teal-800/60 text-xs font-medium text-teal-700 dark:text-teal-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    currencyLabel,
                    " ",
                    Number(property.price_per_m2).toLocaleString(),
                    " / m²"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 256,
                columnNumber: 243
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 256,
            columnNumber: 36
        }, this);
        $[48] = currencyLabel;
        $[49] = property.price_per_m2;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t19 || $[52] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-3 pb-5",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[51] = t19;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== t14 || $[55] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-teal-500/20 dark:border-teal-500/30 bg-gradient-to-br from-white via-teal-50/20 to-white dark:from-neutral-900 dark:via-teal-950/20 dark:to-neutral-900 shadow-sm overflow-hidden relative",
            children: [
                t9,
                t14,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[54] = t14;
        $[55] = t21;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t) {
        t23 = t("properties.details.propertyInfo") || "Property Overview";
        $[57] = t;
        $[58] = t23;
    } else {
        t23 = $[58];
    }
    let t24;
    if ($[59] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 291,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[59] = t23;
        $[60] = t24;
    } else {
        t24 = $[60];
    }
    let t25;
    if ($[61] !== t) {
        t25 = t("properties.create.basicInfo.status") || "Status";
        $[61] = t;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    const t26 = property.status === "active" ? "success" : "outline";
    let t27;
    if ($[63] !== statusLabel || $[64] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t26,
            className: "text-xs",
            children: statusLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[63] = statusLabel;
        $[64] = t26;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] !== t25 || $[67] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t25,
            value: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[66] = t25;
        $[67] = t27;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    let t29;
    if ($[69] !== t) {
        t29 = t("properties.create.basicInfo.constructionStatus") || "Construction";
        $[69] = t;
        $[70] = t29;
    } else {
        t29 = $[70];
    }
    let t30;
    if ($[71] !== constructionLabel || $[72] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t29,
            value: constructionLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[71] = constructionLabel;
        $[72] = t29;
        $[73] = t30;
    } else {
        t30 = $[73];
    }
    let t31;
    if ($[74] !== t) {
        t31 = t("properties.create.unitDetails.furnishStatus") || "Furnish Status";
        $[74] = t;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== furnishLabel || $[77] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t31,
            value: furnishLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[76] = furnishLabel;
        $[77] = t31;
        $[78] = t32;
    } else {
        t32 = $[78];
    }
    let t33;
    if ($[79] !== t) {
        t33 = t("properties.create.unitDetails.finishingType") || "Finishing";
        $[79] = t;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    let t34;
    if ($[81] !== finishingLabel || $[82] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t33,
            value: finishingLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[81] = finishingLabel;
        $[82] = t33;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    let t35;
    if ($[84] !== t) {
        t35 = t("properties.create.unitDetails.ownershipType") || "Ownership";
        $[84] = t;
        $[85] = t35;
    } else {
        t35 = $[85];
    }
    let t36;
    if ($[86] !== ownershipLabel || $[87] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t35,
            value: ownershipLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[86] = ownershipLabel;
        $[87] = t35;
        $[88] = t36;
    } else {
        t36 = $[88];
    }
    let t37;
    if ($[89] !== t) {
        t37 = t("properties.create.basicInfo.propertyType") || "Property Type";
        $[89] = t;
        $[90] = t37;
    } else {
        t37 = $[90];
    }
    const t38 = propertyType?.name;
    let t39;
    if ($[91] !== t37 || $[92] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t37,
            value: t38
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[91] = t37;
        $[92] = t38;
        $[93] = t39;
    } else {
        t39 = $[93];
    }
    let t40;
    if ($[94] !== t) {
        t40 = t("properties.create.basicInfo.propertySubtype") || "Sub Type";
        $[94] = t;
        $[95] = t40;
    } else {
        t40 = $[95];
    }
    const t41 = property.property_subtype?.name;
    let t42;
    if ($[96] !== t40 || $[97] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t40,
            value: t41
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[96] = t40;
        $[97] = t41;
        $[98] = t42;
    } else {
        t42 = $[98];
    }
    let t43;
    if ($[99] !== t) {
        t43 = t("properties.columns.unitNumber") || "Unit Number";
        $[99] = t;
        $[100] = t43;
    } else {
        t43 = $[100];
    }
    const t44 = property.unit_number || property.property_no;
    let t45;
    if ($[101] !== t43 || $[102] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t43,
            value: t44
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[101] = t43;
        $[102] = t44;
        $[103] = t45;
    } else {
        t45 = $[103];
    }
    let t46;
    if ($[104] !== t) {
        t46 = t("properties.create.license.zoneName") || "Zone / Area";
        $[104] = t;
        $[105] = t46;
    } else {
        t46 = $[105];
    }
    let t47;
    if ($[106] !== property.zone_name || $[107] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t46,
            value: property.zone_name
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[106] = property.zone_name;
        $[107] = t46;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== t) {
        t48 = t("properties.create.license.referenceListed") || "Reference";
        $[109] = t;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] !== property.reference_listed || $[112] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t48,
            value: property.reference_listed
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[111] = property.reference_listed;
        $[112] = t48;
        $[113] = t49;
    } else {
        t49 = $[113];
    }
    let t50;
    if ($[114] !== t) {
        t50 = t("properties.create.unitDetails.maidRoom") || "Maid Room";
        $[114] = t;
        $[115] = t50;
    } else {
        t50 = $[115];
    }
    let t51;
    if ($[116] !== property.maid_room || $[117] !== t) {
        t51 = property.maid_room ? t("common.yes") || "Yes" : t("common.no") || "No";
        $[116] = property.maid_room;
        $[117] = t;
        $[118] = t51;
    } else {
        t51 = $[118];
    }
    let t52;
    if ($[119] !== t50 || $[120] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t50,
            value: t51
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[119] = t50;
        $[120] = t51;
        $[121] = t52;
    } else {
        t52 = $[121];
    }
    let t53;
    if ($[122] !== t28 || $[123] !== t30 || $[124] !== t32 || $[125] !== t34 || $[126] !== t36 || $[127] !== t39 || $[128] !== t42 || $[129] !== t45 || $[130] !== t47 || $[131] !== t49 || $[132] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5 space-y-1",
            children: [
                t28,
                t30,
                t32,
                t34,
                t36,
                t39,
                t42,
                t45,
                t47,
                t49,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[122] = t28;
        $[123] = t30;
        $[124] = t32;
        $[125] = t34;
        $[126] = t36;
        $[127] = t39;
        $[128] = t42;
        $[129] = t45;
        $[130] = t47;
        $[131] = t49;
        $[132] = t52;
        $[133] = t53;
    } else {
        t53 = $[133];
    }
    let t54;
    if ($[134] !== t24 || $[135] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t24,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[134] = t24;
        $[135] = t53;
        $[136] = t54;
    } else {
        t54 = $[136];
    }
    let t55;
    if ($[137] !== currencyLabel || $[138] !== project || $[139] !== t) {
        t55 = project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 227
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: t("properties.create.basicInfo.project") || "Project"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 292
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 535,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("common.name") || "Name",
                            value: project.project_name
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 498
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.type") || "Type",
                            value: project.project_type
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 573
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.status") || "Status",
                            value: project.status
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 660
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalUnits") || "Total Units",
                            value: project.total_units
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 745
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.completion") || "Completion",
                            value: project.completion_date ? new Date(project.completion_date).toLocaleDateString() : null
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 844
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.priceRange") || "Price Range",
                            value: project.price_range ? `${currencyLabel} ${project.price_range}` : null
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 535,
                            columnNumber: 1010
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 535,
                    columnNumber: 452
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 535,
            columnNumber: 22
        }, this);
        $[137] = currencyLabel;
        $[138] = project;
        $[139] = t;
        $[140] = t55;
    } else {
        t55 = $[140];
    }
    let t56;
    if ($[141] !== property.building || $[142] !== t) {
        t56 = property.building && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t("properties.details.building") || "Building"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                        lineNumber: 545,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 545,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("common.name") || "Name",
                            value: property.building.building_name
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 545,
                            columnNumber: 403
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.type") || "Type",
                            value: property.building.building_type
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 545,
                            columnNumber: 489
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalFloors") || "Total Floors",
                            value: property.building.total_floors
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 545,
                            columnNumber: 587
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalUnits") || "Total Units",
                            value: property.building.total_units
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 545,
                            columnNumber: 699
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 545,
                    columnNumber: 357
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 545,
            columnNumber: 32
        }, this);
        $[141] = property.building;
        $[142] = t;
        $[143] = t56;
    } else {
        t56 = $[143];
    }
    let t57;
    if ($[144] !== property.agent_license || $[145] !== property.broker_license || $[146] !== property.dld_barcode || $[147] !== property.dld_permit_number || $[148] !== t) {
        t57 = (property.broker_license || property.agent_license || property.dld_permit_number || property.dld_barcode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 325
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: t("properties.create.license.title") || "License & Compliance"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 393
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 554,
                    columnNumber: 211
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.brokerLicense") || "Broker License",
                            value: property.broker_license
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 608
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.agentLicense") || "Agent License",
                            value: property.agent_license
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 724
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.dldPermitNumber") || "DLD Permit No.",
                            value: property.dld_permit_number
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 837
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.dldBarcode") || "DLD Barcode",
                            value: property.dld_barcode
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 554,
                            columnNumber: 958
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 554,
                    columnNumber: 562
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 554,
            columnNumber: 120
        }, this);
        $[144] = property.agent_license;
        $[145] = property.broker_license;
        $[146] = property.dld_barcode;
        $[147] = property.dld_permit_number;
        $[148] = t;
        $[149] = t57;
    } else {
        t57 = $[149];
    }
    let t58;
    if ($[150] !== t) {
        t58 = t("properties.details.quickActions") || "Quick Actions";
        $[150] = t;
        $[151] = t58;
    } else {
        t58 = $[151];
    }
    let t59;
    if ($[152] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t58
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 574,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[152] = t58;
        $[153] = t59;
    } else {
        t59 = $[153];
    }
    let t60;
    if ($[154] !== isCopiedLink) {
        t60 = isCopiedLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 582,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
            className: "mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 582,
            columnNumber: 114
        }, this);
        $[154] = isCopiedLink;
        $[155] = t60;
    } else {
        t60 = $[155];
    }
    const t61 = isCopiedLink ? isAr ? "\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637!" : "Link Copied!" : isAr ? "\u0645\u0634\u0627\u0631\u0643\u0629 \u0631\u0627\u0628\u0637 \u0627\u0644\u0639\u0642\u0627\u0631" : "Share Property Link";
    let t62;
    if ($[156] !== handleShare || $[157] !== t60 || $[158] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleShare,
            className: "w-full justify-start dark:border-neutral-700 dark:text-gray-200 cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300",
            children: [
                t60,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[156] = handleShare;
        $[157] = t60;
        $[158] = t61;
        $[159] = t62;
    } else {
        t62 = $[159];
    }
    let t63;
    if ($[160] !== isAr) {
        t63 = ({
            "PropertySidebar[<Button>.onClick]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isAr ? "\u0645\u064A\u0632\u0629 \u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0642\u0631\u064A\u0628\u0627\u064B" : "Schedule viewing coming soon")
        })["PropertySidebar[<Button>.onClick]"];
        $[160] = isAr;
        $[161] = t63;
    } else {
        t63 = $[161];
    }
    let t64;
    if ($[162] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[162] = t64;
    } else {
        t64 = $[162];
    }
    let t65;
    if ($[163] !== t) {
        t65 = t("properties.details.scheduleViewing") || "Schedule Viewing";
        $[163] = t;
        $[164] = t65;
    } else {
        t65 = $[164];
    }
    let t66;
    if ($[165] !== t63 || $[166] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            className: "w-full justify-start dark:border-neutral-700 dark:text-gray-200",
            onClick: t63,
            children: [
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[165] = t63;
        $[166] = t65;
        $[167] = t66;
    } else {
        t66 = $[167];
    }
    let t67;
    if ($[168] !== isAr) {
        t67 = ({
            "PropertySidebar[<Button>.onClick]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isAr ? "\u0645\u064A\u0632\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0648\u0643\u064A\u0644 \u0642\u0631\u064A\u0628\u0627\u064B" : "Contact agent coming soon")
        })["PropertySidebar[<Button>.onClick]"];
        $[168] = isAr;
        $[169] = t67;
    } else {
        t67 = $[169];
    }
    let t68;
    if ($[170] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[170] = t68;
    } else {
        t68 = $[170];
    }
    let t69;
    if ($[171] !== t) {
        t69 = t("properties.details.contactAgent") || "Contact Agent";
        $[171] = t;
        $[172] = t69;
    } else {
        t69 = $[172];
    }
    let t70;
    if ($[173] !== t67 || $[174] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            className: "w-full justify-start dark:border-neutral-700 dark:text-gray-200",
            onClick: t67,
            children: [
                t68,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 660,
            columnNumber: 11
        }, this);
        $[173] = t67;
        $[174] = t69;
        $[175] = t70;
    } else {
        t70 = $[175];
    }
    let t71;
    if ($[176] !== t62 || $[177] !== t66 || $[178] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5 space-y-2.5",
            children: [
                t62,
                t66,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 669,
            columnNumber: 11
        }, this);
        $[176] = t62;
        $[177] = t66;
        $[178] = t70;
        $[179] = t71;
    } else {
        t71 = $[179];
    }
    let t72;
    if ($[180] !== t59 || $[181] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t59,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[180] = t59;
        $[181] = t71;
        $[182] = t72;
    } else {
        t72 = $[182];
    }
    let t73;
    if ($[183] !== t22 || $[184] !== t54 || $[185] !== t55 || $[186] !== t56 || $[187] !== t57 || $[188] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t22,
                t54,
                t55,
                t56,
                t57,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 688,
            columnNumber: 11
        }, this);
        $[183] = t22;
        $[184] = t54;
        $[185] = t55;
        $[186] = t56;
        $[187] = t57;
        $[188] = t72;
        $[189] = t73;
    } else {
        t73 = $[189];
    }
    return t73;
}
_s(PropertySidebar, "hCSs7GLDINPNjZ8miDJ3W7ZQ9Qo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = PropertySidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "InfoRow");
__turbopack_context__.k.register(_c1, "PropertySidebar");
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
"[project]/src/app/admin/properties/[id]/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropertyDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$properties$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/properties.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyMedia.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyDescription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFeatures$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyFeatures.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFloorPlan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertySidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
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
function PropertyDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(167);
    if ($[0] !== "d0a7f0df3d528a5ca7eb24701c586e0af737c6f8322efb46486d4c1cb864e003") {
        for(let $i = 0; $i < 167; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0a7f0df3d528a5ca7eb24701c586e0af737c6f8322efb46486d4c1cb864e003";
    }
    const { params } = t0;
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== id) {
        t1 = [
            "propertyDetails",
            id
        ];
        $[1] = id;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== id || $[4] !== token) {
        t2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$properties$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPropertyDetails"])(Number(id), token);
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
            select: _temp,
            enabled: t3
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const { data, isError, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
    let t5;
    if ($[10] !== queryClient || $[11] !== routePrefix || $[12] !== router) {
        t5 = {
            mutationFn: _temp2,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "properties"
                    ]
                });
                router.push(`${routePrefix}/properties`);
            }
        };
        $[10] = queryClient;
        $[11] = routePrefix;
        $[12] = router;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const deletePropertyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t5);
    if (isLoading) {
        let t6;
        if ($[14] !== t) {
            t6 = t("common.loading") || "Loading...";
            $[14] = t;
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        let t7;
        if ($[16] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-screen items-center justify-center text-gray-600 dark:text-gray-400",
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                lineNumber: 118,
                columnNumber: 12
            }, this);
            $[16] = t6;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        return t7;
    }
    if (isError) {
        const t6 = error;
        let t7;
        if ($[18] !== t6.message) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                type: "error",
                message: t6.message
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                lineNumber: 130,
                columnNumber: 12
            }, this);
            $[18] = t6.message;
            $[19] = t7;
        } else {
            t7 = $[19];
        }
        return t7;
    }
    if (!data) {
        let t6;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                type: "default"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                lineNumber: 141,
                columnNumber: 12
            }, this);
            $[20] = t6;
        } else {
            t6 = $[20];
        }
        return t6;
    }
    const property_0 = data;
    const projectObj = Array.isArray(property_0._project) ? property_0._project[0] : Array.isArray(property_0.project) ? property_0.project[0] : property_0._project || property_0.project || null;
    const descriptionHtml = property_0.description || projectObj?.description || null;
    let t6;
    if ($[21] !== projectObj?.images || $[22] !== projectObj?.media || $[23] !== projectObj?.medias || $[24] !== property_0.projectMedias || $[25] !== property_0.project_medias) {
        t6 = projectObj?.medias ?? projectObj?.media ?? projectObj?.images ?? property_0.project_medias ?? property_0.projectMedias ?? [];
        $[21] = projectObj?.images;
        $[22] = projectObj?.media;
        $[23] = projectObj?.medias;
        $[24] = property_0.projectMedias;
        $[25] = property_0.project_medias;
        $[26] = t6;
    } else {
        t6 = $[26];
    }
    const projectMedias = t6;
    let t7;
    if ($[27] !== projectMedias || $[28] !== property_0.floor_plan_url || $[29] !== property_0.medias) {
        t7 = property_0.floor_plan_url || property_0.medias?.find(_PropertyDetailsPageAnonymous)?.media_url || projectMedias?.find(_PropertyDetailsPageAnonymous2)?.media_url || null;
        $[27] = projectMedias;
        $[28] = property_0.floor_plan_url;
        $[29] = property_0.medias;
        $[30] = t7;
    } else {
        t7 = $[30];
    }
    const floorPlanUrl = t7;
    let t8;
    if ($[31] !== property_0.availability_status || $[32] !== t) {
        t8 = t(`properties.create.options.availabilityStatus.${property_0.availability_status}`) || property_0.availability_status;
        $[31] = property_0.availability_status;
        $[32] = t;
        $[33] = t8;
    } else {
        t8 = $[33];
    }
    const availabilityLabel = t8;
    let t9;
    if ($[34] !== routePrefix || $[35] !== router) {
        t9 = ({
            "PropertyDetailsPage[<button>.onClick]": ()=>router.push(`${routePrefix}/properties`)
        })["PropertyDetailsPage[<button>.onClick]"];
        $[34] = routePrefix;
        $[35] = router;
        $[36] = t9;
    } else {
        t9 = $[36];
    }
    let t10;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            className: "h-4 w-4 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    let t11;
    if ($[38] !== t) {
        t11 = t("properties.title") || "Properties";
        $[38] = t;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t12;
    } else {
        t12 = $[41];
    }
    let t13;
    if ($[42] !== t12 || $[43] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[42] = t12;
        $[43] = t9;
        $[44] = t13;
    } else {
        t13 = $[44];
    }
    let t14;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[45] = t14;
    } else {
        t14 = $[45];
    }
    let t15;
    if ($[46] !== property_0.property_name) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-gray-900 dark:text-gray-200 truncate max-w-[200px] sm:max-w-xs",
            children: property_0.property_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[46] = property_0.property_name;
        $[47] = t15;
    } else {
        t15 = $[47];
    }
    let t16;
    if ($[48] !== t13 || $[49] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[48] = t13;
        $[49] = t15;
        $[50] = t16;
    } else {
        t16 = $[50];
    }
    let t17;
    if ($[51] !== property_0.property_id) {
        t17 = property_0.property_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-xs text-gray-600 dark:text-gray-400 font-mono",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "ID:"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 254,
                    columnNumber: 188
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-gray-900 dark:text-gray-200",
                    children: [
                        "#",
                        property_0.property_id
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 254,
                    columnNumber: 204
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 254,
            columnNumber: 37
        }, this);
        $[51] = property_0.property_id;
        $[52] = t17;
    } else {
        t17 = $[52];
    }
    let t18;
    if ($[53] !== t16 || $[54] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-gray-200 dark:border-neutral-800",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[53] = t16;
        $[54] = t17;
        $[55] = t18;
    } else {
        t18 = $[55];
    }
    let t19;
    if ($[56] !== property_0.property_name) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 truncate",
            children: property_0.property_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[56] = property_0.property_name;
        $[57] = t19;
    } else {
        t19 = $[57];
    }
    let t20;
    if ($[58] !== property_0.area_name) {
        t20 = property_0.area_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 279,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: property_0.area_name
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 279,
                    columnNumber: 202
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 279,
            columnNumber: 35
        }, this);
        $[58] = property_0.area_name;
        $[59] = t20;
    } else {
        t20 = $[59];
    }
    const t21 = property_0.availability_status === "available" ? "success" : property_0.availability_status === "sold" ? "destructive" : "warning";
    let t22;
    if ($[60] !== availabilityLabel || $[61] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t21,
            className: "text-xs font-semibold px-2.5 py-0.5",
            children: availabilityLabel
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[60] = availabilityLabel;
        $[61] = t21;
        $[62] = t22;
    } else {
        t22 = $[62];
    }
    let t23;
    if ($[63] !== property_0.unit_number || $[64] !== t) {
        t23 = property_0.unit_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-xs font-mono",
            children: [
                t("properties.columns.unitNumber") || "Unit",
                ": ",
                property_0.unit_number
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 297,
            columnNumber: 37
        }, this);
        $[63] = property_0.unit_number;
        $[64] = t;
        $[65] = t23;
    } else {
        t23 = $[65];
    }
    let t24;
    if ($[66] !== t20 || $[67] !== t22 || $[68] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 flex-wrap",
            children: [
                t20,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[66] = t20;
        $[67] = t22;
        $[68] = t23;
        $[69] = t24;
    } else {
        t24 = $[69];
    }
    let t25;
    if ($[70] !== t19 || $[71] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 min-w-0",
            children: [
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[70] = t19;
        $[71] = t24;
        $[72] = t25;
    } else {
        t25 = $[72];
    }
    let t26;
    if ($[73] !== id || $[74] !== routePrefix || $[75] !== router) {
        t26 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>router.push(`${routePrefix}/properties/${id}/edit`)
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[73] = id;
        $[74] = routePrefix;
        $[75] = router;
        $[76] = t26;
    } else {
        t26 = $[76];
    }
    let t27;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[77] = t27;
    } else {
        t27 = $[77];
    }
    let t28;
    if ($[78] !== t) {
        t28 = t("properties.breadcrumbs.edit") || "Edit Property";
        $[78] = t;
        $[79] = t28;
    } else {
        t28 = $[79];
    }
    let t29;
    if ($[80] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[80] = t28;
        $[81] = t29;
    } else {
        t29 = $[81];
    }
    let t30;
    if ($[82] !== t26 || $[83] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "flex-1 sm:flex-initial gap-2 border-gray-200 dark:border-neutral-700 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:border-teal-300 dark:hover:border-teal-800 text-gray-700 dark:text-gray-200 cursor-pointer",
            onClick: t26,
            children: [
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[82] = t26;
        $[83] = t29;
        $[84] = t30;
    } else {
        t30 = $[84];
    }
    let t31;
    let t32;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>setDeleteDialogOpen(true)
        })["PropertyDetailsPage[<Button>.onClick]"];
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[85] = t31;
        $[86] = t32;
    } else {
        t31 = $[85];
        t32 = $[86];
    }
    let t33;
    if ($[87] !== t) {
        t33 = t("common.delete") || "Delete";
        $[87] = t;
        $[88] = t33;
    } else {
        t33 = $[88];
    }
    let t34;
    if ($[89] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            className: "gap-2 bg-red-600 hover:bg-red-700 cursor-pointer",
            onClick: t31,
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden xs:inline sm:inline",
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 390,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[89] = t33;
        $[90] = t34;
    } else {
        t34 = $[90];
    }
    let t35;
    if ($[91] !== t30 || $[92] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 w-full sm:w-auto shrink-0",
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[91] = t30;
        $[92] = t34;
        $[93] = t35;
    } else {
        t35 = $[93];
    }
    let t36;
    if ($[94] !== t25 || $[95] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t25,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[94] = t25;
        $[95] = t35;
        $[96] = t36;
    } else {
        t36 = $[96];
    }
    let t37;
    if ($[97] !== projectMedias || $[98] !== property_0.medias || $[99] !== property_0.property_name) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyMedia"], {
            medias: property_0.medias,
            projectMedias: projectMedias,
            propertyName: property_0.property_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[97] = projectMedias;
        $[98] = property_0.medias;
        $[99] = property_0.property_name;
        $[100] = t37;
    } else {
        t37 = $[100];
    }
    let t38;
    if ($[101] !== descriptionHtml) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyDescription"], {
            description: descriptionHtml
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[101] = descriptionHtml;
        $[102] = t38;
    } else {
        t38 = $[102];
    }
    let t39;
    if ($[103] !== property_0.bathrooms || $[104] !== property_0.bedrooms || $[105] !== property_0.bua_size || $[106] !== property_0.floor || $[107] !== property_0.maid_room || $[108] !== property_0.parking_spaces || $[109] !== property_0.plot_size || $[110] !== property_0.size) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyInfo"], {
            bedrooms: property_0.bedrooms,
            bathrooms: property_0.bathrooms,
            size: property_0.size,
            floor: property_0.floor,
            bua_size: property_0.bua_size,
            plot_size: property_0.plot_size,
            parking_spaces: property_0.parking_spaces,
            maid_room: property_0.maid_room
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[103] = property_0.bathrooms;
        $[104] = property_0.bedrooms;
        $[105] = property_0.bua_size;
        $[106] = property_0.floor;
        $[107] = property_0.maid_room;
        $[108] = property_0.parking_spaces;
        $[109] = property_0.plot_size;
        $[110] = property_0.size;
        $[111] = t39;
    } else {
        t39 = $[111];
    }
    let t40;
    if ($[112] !== property_0.features) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFeatures$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyFeatures"], {
            features: property_0.features
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[112] = property_0.features;
        $[113] = t40;
    } else {
        t40 = $[113];
    }
    let t41;
    if ($[114] !== floorPlanUrl) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFloorPlan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyFloorPlan"], {
            floorPlanUrl: floorPlanUrl
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[114] = floorPlanUrl;
        $[115] = t41;
    } else {
        t41 = $[115];
    }
    let t42;
    if ($[116] !== t37 || $[117] !== t38 || $[118] !== t39 || $[119] !== t40 || $[120] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6 min-w-0",
            children: [
                t37,
                t38,
                t39,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[116] = t37;
        $[117] = t38;
        $[118] = t39;
        $[119] = t40;
        $[120] = t41;
        $[121] = t42;
    } else {
        t42 = $[121];
    }
    let t43;
    if ($[122] !== property_0) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 space-y-6 lg:sticky lg:top-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertySidebar"], {
                property: property_0
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                lineNumber: 477,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[122] = property_0;
        $[123] = t43;
    } else {
        t43 = $[123];
    }
    let t44;
    if ($[124] !== t42 || $[125] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start",
            children: [
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[124] = t42;
        $[125] = t43;
        $[126] = t44;
    } else {
        t44 = $[126];
    }
    let t45;
    if ($[127] !== t) {
        t45 = t("properties.deleteDialog.title") || "Delete Property";
        $[127] = t;
        $[128] = t45;
    } else {
        t45 = $[128];
    }
    let t46;
    if ($[129] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "dark:text-gray-100",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[129] = t45;
        $[130] = t46;
    } else {
        t46 = $[130];
    }
    let t47;
    if ($[131] !== t) {
        t47 = t("properties.deleteDialog.description") || "Are you sure you want to delete this property? This action cannot be undone.";
        $[131] = t;
        $[132] = t47;
    } else {
        t47 = $[132];
    }
    let t48;
    if ($[133] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "dark:text-gray-400",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[133] = t47;
        $[134] = t48;
    } else {
        t48 = $[134];
    }
    let t49;
    if ($[135] !== t46 || $[136] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[135] = t46;
        $[136] = t48;
        $[137] = t49;
    } else {
        t49 = $[137];
    }
    let t50;
    if ($[138] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>setDeleteDialogOpen(false)
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[138] = t50;
    } else {
        t50 = $[138];
    }
    let t51;
    if ($[139] !== t) {
        t51 = t("common.cancel") || "Cancel";
        $[139] = t;
        $[140] = t51;
    } else {
        t51 = $[140];
    }
    let t52;
    if ($[141] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: t50,
            className: "dark:border-neutral-700 dark:text-gray-200",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[141] = t51;
        $[142] = t52;
    } else {
        t52 = $[142];
    }
    let t53;
    if ($[143] !== deletePropertyMutation || $[144] !== id) {
        t53 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>deletePropertyMutation.mutate(Number(id))
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[143] = deletePropertyMutation;
        $[144] = id;
        $[145] = t53;
    } else {
        t53 = $[145];
    }
    let t54;
    if ($[146] !== deletePropertyMutation.isPending || $[147] !== t) {
        t54 = deletePropertyMutation.isPending ? t("common.deleting") || "Deleting..." : t("common.delete") || "Delete";
        $[146] = deletePropertyMutation.isPending;
        $[147] = t;
        $[148] = t54;
    } else {
        t54 = $[148];
    }
    let t55;
    if ($[149] !== deletePropertyMutation.isPending || $[150] !== t53 || $[151] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            onClick: t53,
            disabled: deletePropertyMutation.isPending,
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[149] = deletePropertyMutation.isPending;
        $[150] = t53;
        $[151] = t54;
        $[152] = t55;
    } else {
        t55 = $[152];
    }
    let t56;
    if ($[153] !== t52 || $[154] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            children: [
                t52,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[153] = t52;
        $[154] = t55;
        $[155] = t56;
    } else {
        t56 = $[155];
    }
    let t57;
    if ($[156] !== t49 || $[157] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t49,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[156] = t49;
        $[157] = t56;
        $[158] = t57;
    } else {
        t57 = $[158];
    }
    let t58;
    if ($[159] !== deleteDialogOpen || $[160] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: deleteDialogOpen,
            onOpenChange: setDeleteDialogOpen,
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[159] = deleteDialogOpen;
        $[160] = t57;
        $[161] = t58;
    } else {
        t58 = $[161];
    }
    let t59;
    if ($[162] !== t18 || $[163] !== t36 || $[164] !== t44 || $[165] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6",
            children: [
                t18,
                t36,
                t44,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[162] = t18;
        $[163] = t36;
        $[164] = t44;
        $[165] = t58;
        $[166] = t59;
    } else {
        t59 = $[166];
    }
    return t59;
}
_s(PropertyDetailsPage, "5b3D96NZ6Sz+LB4UM+BSJtbI61A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = PropertyDetailsPage;
function _PropertyDetailsPageAnonymous2(m) {
    return (m.media_type || "").toLowerCase() === "floor_plan" || (m.media_type || "").toLowerCase() === "floorplan";
}
function _PropertyDetailsPageAnonymous(m_0) {
    return (m_0.media_type || "").toLowerCase() === "floor_plan" || (m_0.media_type || "").toLowerCase() === "floorplan";
}
function _temp2(propertyId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].deleteProperty(propertyId);
}
function _temp(raw) {
    const property = raw?.data ?? raw;
    if (!property) {
        return null;
    }
    return {
        ...property,
        property_type: property.property_type ? [
            property.property_type
        ] : [],
        project: property.project ? [
            property.project
        ] : [],
        _project: property.project ?? null,
        _building: property.building ?? null,
        floor: property.floor ?? null,
        area_name: property.zone_name || null,
        features: (property.features ?? []).map(_PropertyDetailsPageAnonymousAnonymous)
    };
}
function _PropertyDetailsPageAnonymousAnonymous(f, index) {
    return {
        ...f,
        feature_id: f.feature_id ?? index + 1
    };
}
var _c;
__turbopack_context__.k.register(_c, "PropertyDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f2786da2._.js.map