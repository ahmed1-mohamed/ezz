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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
    if ($[0] !== "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "37398a58a0cb085dd48c4b81a8b8921d7a6f4590447a6067271c64a861c37b17";
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
"[project]/src/data/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiAuth",
    ()=>apiAuth,
    "apiClient",
    ()=>apiClient,
    "apiClient2",
    ()=>apiClient2,
    "deleteData",
    ()=>deleteData,
    "editData",
    ()=>editData,
    "editDataImg",
    ()=>editDataImg,
    "fetchAdsData",
    ()=>fetchAdsData,
    "fetchDLDAreasData",
    ()=>fetchDLDAreasData,
    "fetchData",
    ()=>fetchData,
    "fetchData2",
    ()=>fetchData2,
    "fetchDataReserve",
    ()=>fetchDataReserve,
    "fetchDataReserveUnit",
    ()=>fetchDataReserveUnit,
    "fetchDataTotals",
    ()=>fetchDataTotals,
    "fetchDataWithPagination",
    ()=>fetchDataWithPagination,
    "fetchDevelopersData",
    ()=>fetchDevelopersData,
    "fetchPaginatedData",
    ()=>fetchPaginatedData,
    "fetchPropertiesCreateData",
    ()=>fetchPropertiesCreateData,
    "fetchPropertiesData",
    ()=>fetchPropertiesData,
    "fetchPropertiesIdData",
    ()=>fetchPropertiesIdData,
    "handleError",
    ()=>handleError,
    "patchData",
    ()=>patchData,
    "postData",
    ()=>postData,
    "postDataAuth",
    ()=>postDataAuth,
    "postDataImg",
    ()=>postDataImg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const attachCountryHeader = (instance)=>{
    instance.interceptors.request.use({
        "attachCountryHeader.use": (config)=>{
            const countryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])();
            config.headers["country-id"] = countryId;
            config.headers["country_id"] = countryId;
            config.headers["ngrok-skip-browser-warning"] = "69420";
            if (typeof FormData !== "undefined" && config.data instanceof FormData) {
                delete config.headers["Content-Type"];
            }
            return config;
        }
    }["attachCountryHeader.use"]);
};
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "ngrok-skip-browser-warning": "69420"
    }
});
attachCountryHeader(apiClient);
const apiClient2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "ngrok-skip-browser-warning": "69420"
    }
});
attachCountryHeader(apiClient2);
;
const handleError = (error, endpoint)=>{
    const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error, "Operation failed");
    console.error(`API Error on ${endpoint}:`, errorMessage);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
        id: "app-api-error-toast",
        duration: 4000
    });
    if (error && typeof error === "object") {
        error.message = errorMessage;
    }
    throw error;
};
const fetchData = async (endpoint, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchDevelopersData = fetchData;
const fetchPropertiesCreateData = fetchData;
const fetchDLDAreasData = fetchData;
const fetchPropertiesIdData = fetchData;
const fetchPaginatedData = fetchData;
const fetchAdsData = fetchData;
const fetchDataTotals = fetchData;
const fetchData2 = (endpoint)=>fetchData(endpoint);
const fetchDataWithPagination = async (endpoint, token, page = 1, perPage = 15)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint, {
            params: {
                page,
                per_page: perPage
            }
        });
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchPropertiesData = async (endpoint, sortBy, sortOrder, selectedCountries, selectedDevelopers, selectedProjects, per_page, page)=>{
    try {
        const body = {
            sort_by: sortBy,
            sort_order: sortOrder,
            country_id: selectedCountries,
            developer_id: selectedDevelopers,
            project_id: selectedProjects,
            per_page: per_page
        };
        if (page !== undefined) {
            body.page = page;
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(endpoint, body);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const fetchDataReserveUnit = async (token, reservationId)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Fetch reservation error:", error);
    }
};
const fetchDataReserve = async (token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
const postData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const postDataImg = postData;
const editDataImg = postData;
const editData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const deleteData = async (endpoint, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const patchData = async (endpoint, data, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
const apiAuth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"],
    headers: {
        "Content-Type": "application/json",
        "country-id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"],
        "country_id": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_COUNTRY_ID"]
    }
});
attachCountryHeader(apiAuth);
const postDataAuth = async (endpoint, data)=>{
    try {
        const response = await apiAuth.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error, endpoint);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/endpoints.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENDPOINTS",
    ()=>ENDPOINTS
]);
const ENDPOINTS = {
    AUTH: {
        REGISTER: "/auth/register",
        FORGET_PASSWORD: "/auth/forget-password",
        VERIFY_TOKEN: "/auth/verify-token",
        RESET_PASSWORD: "/auth/reset-password"
    },
    USERS: {
        BASE: "/users",
        BY_ID: (id)=>`/users/${id}`,
        DETAIL: (id)=>`/dashboard/users/${id}`,
        PERMISSIONS: "/dashboard/permissions",
        PERMISSION_DETAIL: (id)=>`/dashboard/permissions/${id}`,
        ROLES: "/dashboard/roles",
        ROLES_RAW: "/roles",
        ROLE_DETAIL: (id)=>`/roles/${id}`,
        ROLES_PERMISSIONS: "/dashboard/roles/permissions",
        ROLE_PERMISSIONS_DELETE: (roleId, permissionId)=>`/dashboard/roles/${roleId}/permissions/${permissionId}`
    },
    PERMISSIONS: {
        BASE: "/dashboard/permissions",
        DETAIL: (id)=>`/dashboard/permissions/${id}`
    },
    PROJECTS: {
        BASE: "/dashboard/projects",
        DROPDOWN: "/projects",
        DETAIL: (id)=>`/dashboard/projects/${id}`,
        RAW: "/projects",
        RAW_DETAIL: (id)=>`/projects/${id}`,
        MILESTONES: "/milestones",
        MILESTONE_DETAIL: (id)=>`/milestones/${id}`,
        BUILDINGS: "/dashboard/buildings",
        BUILDING_DETAIL: (id)=>`/dashboard/buildings/${id}`,
        FEATURES: "/projects/features",
        FEATURE_DETAIL: (projectId, featureId)=>`/projects/${projectId}/features/${featureId}`,
        MEDIA_CREATE: "/dashboard/projects/medias/create",
        MEDIA_DETAIL: (id)=>`/projects/medias/${id}`,
        MEDIA_DASHBOARD_DETAIL: (id)=>`/dashboard/projects/medias/${id}`,
        PAYMENT_PLANS: "/dashboard/paymentPlans",
        PAYMENT_PLAN_BULK: "/dashboard/paymentPlans/bulk/add",
        PAYMENT_PLAN_DETAIL: (id)=>`/dashboard/paymentPlans/${id}`,
        PAYMENT_PLAN_ITEMS: "/paymentPlanItems"
    },
    PROPERTIES: {
        BASE: "/properties",
        FILTER: "/filter/properties",
        GET_PROPERTY: "/getproprty",
        BY_ID: (id)=>`/properties/${id}`,
        DETAIL: (id)=>`/dashboard/properties/${id}`,
        TYPES: "/dashboard/propertyTypes",
        TYPES_RAW: "/propertyTypes",
        TYPE_DETAIL: (id)=>`/propertyTypes/${id}`,
        SUBTYPES: "/dashboard/propertySubtypes",
        SUBTYPES_RAW: "/propertySubtypes",
        SUBTYPE_DETAIL: (id)=>`/propertySubtypes/${id}`,
        FEATURES: "/dashboard/properties/features",
        FEATURE_DETAIL: (propertyId, featureId)=>`/dashboard/properties/${propertyId}/features/${featureId}`,
        MEDIA: "/dashboard/properties/medias",
        MEDIA_DETAIL: (id)=>`/dashboard/properties/medias/${id}`
    },
    LOCATIONS: {
        AREAS: "/dashboard/areas",
        AREAS_ALL: "/dashboard/areas/all",
        AREAS_DETAIL: (id)=>`/areas/${id}`,
        DASHBOARD_AREAS: "/dashboard/areas",
        CITIES: "/cities",
        CITIES_DETAIL: (id)=>`/cities/${id}`,
        DASHBOARD_CITIES: "/dashboard/cities",
        DLD_AREAS: "/dldAreas",
        DLD_AREAS_DETAIL: (id)=>`/dldAreas/${id}`,
        LOCATIONS: "/locations",
        DASHBOARD_LOCATIONS: "/dashboard/locations",
        DASHBOARD_LOCATIONS_DETAIL: (id)=>`/dashboard/locations/${id}`,
        ADDRESSES: "/addresses",
        ADDRESSES_DETAIL: (id)=>`/addresses/${id}`,
        STATES: "/dashboard/states"
    },
    MARKETING: {
        ADS: "/dashboard/ads",
        ADS_TOTALS: "/dashboard/ads/totals",
        ADS_DETAIL: (id)=>`/dashboard/ads/${id}`,
        ADS_TOGGLE_STATUS: (id)=>`/dashboard/ads/${id}/toggle-status`,
        BADGES: "/badges",
        CAMPAIGNS: "/marketing/campaigns",
        CAMPAIGNS_STATS: "/marketing/campaigns/stats",
        CREDITS: "/dashboard/ad-credit-packages",
        CREDIT_PACKAGE: "/dashboard/ad-credit-package"
    },
    COMMON: {
        DASHBOARD_STATS: "/dashboard",
        DASHBOARD_EXPERTS: "/dashboard/experts",
        DASHBOARD_DEVELOPERS: "/dashboard/developers",
        DASHBOARD_DEVELOPERS_ALL: "/dashboard/developers/all",
        DASHBOARD_RESERVATIONS: "/dashboard/reservations",
        RESERVATIONS_ALL: "/dashboard/v2/reservations",
        RESERVATION_SHOW: "/show-reservation",
        PROFILE: "/user/profile",
        PROFILE_UPDATE: "/user/profile/update",
        CHANGE_PASSWORD: "/user/change-password",
        TRANSACTIONS: "/transactions",
        AI_CONVERSATIONS: "/ai-conversations",
        NOTIFICATIONS: "/notifications",
        COUNTRIES: "/dashboard/countries",
        FEATURES: "/features",
        STATES: "/dashboard/states",
        DEVELOPERS: "/developers",
        DEVELOPER_DETAIL: (id)=>`/dashboard/developers/${id}`,
        EXPERTS: "/experts",
        EXPERT_DETAIL: (id)=>`/dashboard/experts/${id}`,
        EXPERT_TOGGLE_STATUS: (id)=>`/dashboard/experts/${id}/toggle-status`
    },
    SUPPORT: {
        CONVERSATIONS: "/support/conversations",
        CONVERSATION_MESSAGES: (conversationId)=>`/support/conversations/${conversationId}/messages`,
        CONVERSATION_READ: (conversationId)=>`/support/conversations/${conversationId}/read`
    },
    V2: {
        RESERVATIONS: "/dashboard/v2/reservations",
        RESERVATION_DETAIL: (id)=>`/dashboard/v2/reservations/${id}`,
        APPROVE_RESERVATION: "/dashboard/v2/reservations/admin/approve",
        SALES_OFFER: "/dashboard/v2/reservations/sales-offer",
        SALES_PURCHASE_AGREEMENT: (id)=>`/dashboard/v2/reservations/${id}/sales-purchase-agreement`,
        OFFERS: "/dashboard/v2/offers"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/auth.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgetPassword",
    ()=>forgetPassword,
    "resetPassword",
    ()=>resetPassword,
    "signUpAdmin",
    ()=>signUpAdmin,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const signUpAdmin = async (userData)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.REGISTER, userData);
};
const forgetPassword = async (userData)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.FORGET_PASSWORD, userData);
};
const verifyToken = (verifyTokenData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.VERIFY_TOKEN, verifyTokenData);
const resetPassword = (resetPasswordData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].AUTH.RESET_PASSWORD, resetPasswordData);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/permissions.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminPermissionsService",
    ()=>AdminPermissionsService,
    "createNewPermission",
    ()=>createNewPermission,
    "deleteExistingPermission",
    ()=>deleteExistingPermission,
    "fetchAllPermissions",
    ()=>fetchAllPermissions,
    "fetchPermissionDetail",
    ()=>fetchPermissionDetail,
    "updateExistingPermission",
    ()=>updateExistingPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
const AdminPermissionsService = {
    // GET /api/dashboard/permissions
    getPermissions: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/permissions", {
            params
        });
    },
    // POST /api/dashboard/permissions
    createPermission: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/permissions", data);
    },
    // GET /api/dashboard/permissions/:permission
    getPermission: (permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/permissions/${permissionId}`);
    },
    // PUT {{base_url}}/api/dashboard/permissions/:permission
    // Using POST with _method: "PUT" (standard Laravel/REST convention) or direct PUT
    updatePermission: (permissionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/permissions/${permissionId}`, {
            ...data,
            _method: "PUT"
        });
    },
    // Direct PUT /api/dashboard/permissions/:permission
    putPermission: (permissionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/permissions/${permissionId}`, data);
    },
    // DELETE /api/dashboard/permissions/:permission
    deletePermission: (permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/permissions/${permissionId}`);
    }
};
const fetchAllPermissions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.BASE, token);
const fetchPermissionDetail = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), token);
const createNewPermission = (data, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.BASE, data, token);
const updateExistingPermission = (permissionId, data, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), data, token);
const deleteExistingPermission = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PERMISSIONS.DETAIL(permissionId), token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/users.service.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminRolesService",
    ()=>AdminRolesService,
    "addPermission",
    ()=>addPermission,
    "addRoles",
    ()=>addRoles,
    "addRolesPermission",
    ()=>addRolesPermission,
    "addUser",
    ()=>addUser,
    "deletePermission",
    ()=>deletePermission,
    "deleteRoles",
    ()=>deleteRoles,
    "deleteRolesPermissions",
    ()=>deleteRolesPermissions,
    "deleteUser",
    ()=>deleteUser,
    "editPermission",
    ()=>editPermission,
    "editRoles",
    ()=>editRoles,
    "editUser",
    ()=>editUser,
    "fetchDashboardUsers",
    ()=>fetchDashboardUsers,
    "fetchPermissionDetails",
    ()=>fetchPermissionDetails,
    "fetchPermissions",
    ()=>fetchPermissions,
    "fetchRoles",
    ()=>fetchRoles,
    "fetchRolesDetails",
    ()=>fetchRolesDetails,
    "fetchUsers",
    ()=>fetchUsers,
    "fetchUsersDetails",
    ()=>fetchUsersDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$permissions$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/permissions.service.ts [app-client] (ecmascript)");
;
;
const fetchUsers = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataWithPagination"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BASE, token);
const fetchDashboardUsers = (token, page = 1, perPage = 15, search)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString()
    });
    if (search && search.trim() !== "") {
        params.append("search", search.trim());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/dashboard/users?${params.toString()}`, token);
};
const fetchPermissions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSIONS, token);
const fetchRoles = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES, token);
const fetchUsersDetails = (userId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.DETAIL(userId), token);
const fetchPermissionDetails = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), token);
const fetchRolesDetails = (roleId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(roleId), token);
const addUser = (userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BASE, userData, token);
const addPermission = (permissionData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSIONS, permissionData, token);
const addRoles = (rolesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES_RAW, rolesData, token);
const addRolesPermission = (rolesPermissionsData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLES_PERMISSIONS, rolesPermissionsData, token);
const editUser = (userId, userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BY_ID(userId), userData, token);
const editPermission = (permissionId, permissionData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), permissionData, token);
const editRoles = (rolesId, rolesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(rolesId), rolesData, token);
const deleteUser = (userId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.BY_ID(userId), token);
const deletePermission = (permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.PERMISSION_DETAIL(permissionId), token);
const deleteRoles = (rolesId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_DETAIL(rolesId), token);
const deleteRolesPermissions = (rolesId, permissionId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].USERS.ROLE_PERMISSIONS_DELETE(rolesId, permissionId), token);
;
const AdminRolesService = {
    getRoles: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/roles");
    },
    getRole: (roleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/roles/${roleId}`);
    },
    // Case 1: POST /api/dashboard/roles
    createRole: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles", data);
    },
    // Case 2: PUT /api/dashboard/roles/:id
    updateRole: (roleId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/roles/${roleId}`, data);
    },
    deleteRole: (roleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/roles/${roleId}`);
    },
    // Case 3: POST /api/dashboard/roles/permissions
    addPermissions: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles/permissions", data);
    },
    assignPermissions: async (roleId, permissionIds)=>{
        if (!roleId || !permissionIds || permissionIds.length === 0) return;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/roles/permissions", {
            role_id: roleId,
            permission_ids: permissionIds
        });
    },
    deletePermission: (roleId, permissionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/roles/${roleId}/permissions/${permissionId}`);
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBuilding",
    ()=>addBuilding,
    "addMilestone",
    ()=>addMilestone,
    "addPaymentPlan",
    ()=>addPaymentPlan,
    "addPaymentPlanItem",
    ()=>addPaymentPlanItem,
    "addPaymentPlansBulk",
    ()=>addPaymentPlansBulk,
    "addProject",
    ()=>addProject,
    "addProjectFeature",
    ()=>addProjectFeature,
    "addProjectMedia",
    ()=>addProjectMedia,
    "addProjectPayment",
    ()=>addProjectPayment,
    "addProjectPaymentBulk",
    ()=>addProjectPaymentBulk,
    "deleteBuilding",
    ()=>deleteBuilding,
    "deleteMilestone",
    ()=>deleteMilestone,
    "deletePaymentPlan",
    ()=>deletePaymentPlan,
    "deleteProject",
    ()=>deleteProject,
    "deleteProjectFeature",
    ()=>deleteProjectFeature,
    "deleteProjectMedia",
    ()=>deleteProjectMedia,
    "deleteProjectPayment",
    ()=>deleteProjectPayment,
    "editBuilding",
    ()=>editBuilding,
    "editMilestone",
    ()=>editMilestone,
    "editProject",
    ()=>editProject,
    "editProjectFeature",
    ()=>editProjectFeature,
    "editProjectMedia",
    ()=>editProjectMedia,
    "editProjectPayment",
    ()=>editProjectPayment,
    "fetchBuildings",
    ()=>fetchBuildings,
    "fetchBuildingsDetails",
    ()=>fetchBuildingsDetails,
    "fetchMileStones",
    ()=>fetchMileStones,
    "fetchMilestonesDetails",
    ()=>fetchMilestonesDetails,
    "fetchPaymentPlans",
    ()=>fetchPaymentPlans,
    "fetchProjectFeatureDetails",
    ()=>fetchProjectFeatureDetails,
    "fetchProjectMediaDetails",
    ()=>fetchProjectMediaDetails,
    "fetchProjectPaymentDetails",
    ()=>fetchProjectPaymentDetails,
    "fetchProjectsDetails",
    ()=>fetchProjectsDetails,
    "fetchProjectsDropdown",
    ()=>fetchProjectsDropdown,
    "fetchProjectsPaginated",
    ()=>fetchProjectsPaginated,
    "fetchV2Projects",
    ()=>fetchV2Projects,
    "updatePaymentPlan",
    ()=>updatePaymentPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const fetchProjectsPaginated = (token, page = 1, per_page = 10, search, status, project_type)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) params.append("search", search);
    if (status) params.append("status", status);
    if (project_type) params.append("project_type", project_type);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE}?${params.toString()}`, token);
};
const fetchMileStones = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONES, token);
const fetchBuildings = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDINGS, token);
const fetchProjectsDetails = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DETAIL(projectId), token);
const fetchMilestonesDetails = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(projectId), token);
const fetchBuildingsDetails = (buildingId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), token);
const fetchProjectFeatureDetails = (projectId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), token);
const fetchProjectMediaDetails = (mediaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DETAIL(mediaId), token);
const fetchProjectPaymentDetails = (paymentId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), token);
const addProject = (data, token)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE, data, token).then((res)=>res.data);
};
const addMilestone = (milestoneData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONES, milestoneData, token);
const addBuilding = (buildingData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDINGS, buildingData, token);
const addProjectFeature = (projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURES, projectFeatureData, token);
const addProjectMedia = (projectMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_CREATE, projectMediaData, token);
const fetchPaymentPlans = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, token);
const addPaymentPlan = (paymentPlanData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, paymentPlanData, token);
const addPaymentPlansBulk = (bulkData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_BULK, bulkData, token);
const addProjectPayment = (projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLANS, projectPaymentData, token);
const addProjectPaymentBulk = (projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_BULK, projectPaymentData, token);
const addPaymentPlanItem = (paymentPlanItemData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_ITEMS, paymentPlanItemData, token);
const deletePaymentPlan = (paymentPlanId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), token);
const updatePaymentPlan = (paymentPlanId, paymentPlanData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), paymentPlanData, token);
const editProject = (projectId, projectData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DETAIL(projectId), projectData, token);
const editMilestone = (milestoneId, milestoneData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(milestoneId), milestoneData, token);
const editBuilding = (buildingId, buildingData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), buildingData, token);
const editProjectFeature = (projectId, featureId, projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), projectFeatureData, token);
const editProjectMedia = (mediaId, projectMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DASHBOARD_DETAIL(mediaId), projectMediaData, token);
const editProjectPayment = (paymentId, projectPaymentData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), projectPaymentData, token);
const deleteProject = (projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW_DETAIL(projectId), token);
const deleteMilestone = (milestoneId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MILESTONE_DETAIL(milestoneId), token);
const deleteBuilding = (buildingId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BUILDING_DETAIL(buildingId), token);
const deleteProjectFeature = (projectId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.FEATURE_DETAIL(projectId, featureId), token);
const deleteProjectMedia = (media_id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.MEDIA_DASHBOARD_DETAIL(media_id), token);
const deleteProjectPayment = (payment_id, projectId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);
const fetchProjectsDropdown = (token, developerId, search, countryId)=>{
    const params = new URLSearchParams();
    if (developerId) params.append("developer_id", developerId.toString());
    if (search) params.append("search", search);
    if (countryId) params.append("country_id", countryId);
    const queryStr = params.toString() ? `?${params.toString()}` : "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.DROPDOWN}${queryStr}`, token);
};
const fetchV2Projects = (token, page = 1, per_page = 12, developerId, search)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (developerId) params.append("developer_id", developerId.toString());
    if (search) params.append("search", search);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/v2/projects?${params.toString()}`, token);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/properties.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProperty",
    ()=>addProperty,
    "addPropertyFeature",
    ()=>addPropertyFeature,
    "addPropertyMedia",
    ()=>addPropertyMedia,
    "addPropertySubtype",
    ()=>addPropertySubtype,
    "addPropertyType",
    ()=>addPropertyType,
    "deleteProperty",
    ()=>deleteProperty,
    "deletePropertyFeature",
    ()=>deletePropertyFeature,
    "deletePropertyMedia",
    ()=>deletePropertyMedia,
    "deletePropertyPayment",
    ()=>deletePropertyPayment,
    "deletePropertySubtype",
    ()=>deletePropertySubtype,
    "deletePropertyType",
    ()=>deletePropertyType,
    "editProperty",
    ()=>editProperty,
    "editPropertyFeature",
    ()=>editPropertyFeature,
    "editPropertyMedia",
    ()=>editPropertyMedia,
    "editPropertySubtype",
    ()=>editPropertySubtype,
    "editPropertyType",
    ()=>editPropertyType,
    "fetchImportProperties",
    ()=>fetchImportProperties,
    "fetchProperties",
    ()=>fetchProperties,
    "fetchPropertiesByDeveloper",
    ()=>fetchPropertiesByDeveloper,
    "fetchPropertiesSorted",
    ()=>fetchPropertiesSorted,
    "fetchPropertyDetails",
    ()=>fetchPropertyDetails,
    "fetchPropertyFeatureDetails",
    ()=>fetchPropertyFeatureDetails,
    "fetchPropertyMediaDetails",
    ()=>fetchPropertyMediaDetails,
    "fetchPropertySubtype",
    ()=>fetchPropertySubtype,
    "fetchPropertySubtypesDetails",
    ()=>fetchPropertySubtypesDetails,
    "fetchPropertyTypes",
    ()=>fetchPropertyTypes,
    "fetchPropertyTypesDetails",
    ()=>fetchPropertyTypesDetails,
    "savePropertyFeaturesBulk",
    ()=>savePropertyFeaturesBulk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const fetchPropertyTypes = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPropertiesCreateData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPES, token);
const fetchPropertySubtype = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPropertiesCreateData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPES, token);
const fetchPropertiesByDeveloper = (token, developer_id, status = "active", per_page = "all", search)=>{
    const params = new URLSearchParams({
        developer_id: developer_id.toString(),
        status,
        per_page
    });
    if (search) {
        params.append("search", search);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE}?${params.toString()}`, token);
};
const fetchProperties = (sortBy = [], sortOrder = [], selectedCountries = [], selectedDevelopers = [], selectedProjects = [], per_page = "all", page)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPropertiesData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FILTER, sortBy, sortOrder, selectedCountries, selectedDevelopers, selectedProjects, per_page, page);
const fetchPropertiesSorted = (sortBy)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData2"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.GET_PROPERTY}?sort_by=${sortBy}`);
const fetchImportProperties = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE, token);
const fetchPropertyTypesDetails = (propertyTypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), token);
const fetchPropertySubtypesDetails = (propertySubtypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);
const fetchPropertyDetails = (propertyId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.DETAIL(propertyId), token);
const fetchPropertyMediaDetails = (mediaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(mediaId), token);
const fetchPropertyFeatureDetails = (propertyId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);
const addPropertyType = (propertyTypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPES_RAW, propertyTypeData, token);
const addPropertySubtype = (propertySubtypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPES_RAW, propertySubtypeData, token);
const addProperty = (propertyData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BASE, propertyData, token);
const addPropertyFeature = (propertyFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURES, propertyFeatureData, token);
const savePropertyFeaturesBulk = (propertyFeaturesData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURES, propertyFeaturesData, token);
const addPropertyMedia = (propertyMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA, propertyMediaData, token);
const editPropertyType = (propertyTypeId, propertyTypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), propertyTypeData, token);
const editPropertySubtype = (propertySubtypeId, propertySubtypeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), propertySubtypeData, token);
const editProperty = (propertyId, propertyData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(propertyId), propertyData, token);
const editPropertyFeature = (propertyId, featureId, propertyFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), propertyFeatureData, token);
const editPropertyMedia = (mediaId, propertyMediaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(mediaId), propertyMediaData, token);
const deletePropertyType = (propertyTypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.TYPE_DETAIL(propertyTypeId), token);
const deletePropertySubtype = (propertySubtypeId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);
const deleteProperty = (propertyId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(propertyId), token);
const deletePropertyFeature = (propertyId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);
const deletePropertyMedia = (media_id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.MEDIA_DETAIL(media_id), token);
const deletePropertyPayment = (payment_id, propId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/locations.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminAreasService",
    ()=>AdminAreasService,
    "AdminCitiesService",
    ()=>AdminCitiesService,
    "AdminDldAreasService",
    ()=>AdminDldAreasService,
    "AdminLocationsService",
    ()=>AdminLocationsService,
    "addAddress",
    ()=>addAddress,
    "addArea",
    ()=>addArea,
    "addCity",
    ()=>addCity,
    "addDldArea",
    ()=>addDldArea,
    "addLocation",
    ()=>addLocation,
    "deleteAddress",
    ()=>deleteAddress,
    "deleteArea",
    ()=>deleteArea,
    "deleteDldArea",
    ()=>deleteDldArea,
    "deleteLocation",
    ()=>deleteLocation,
    "editAddress",
    ()=>editAddress,
    "editArea",
    ()=>editArea,
    "editCity",
    ()=>editCity,
    "editDldarea",
    ()=>editDldarea,
    "editLocation",
    ()=>editLocation,
    "fetchAddressDetails",
    ()=>fetchAddressDetails,
    "fetchAddresses",
    ()=>fetchAddresses,
    "fetchAreaDetails",
    ()=>fetchAreaDetails,
    "fetchAreas",
    ()=>fetchAreas,
    "fetchAreasByCountry",
    ()=>fetchAreasByCountry,
    "fetchCities",
    ()=>fetchCities,
    "fetchCitiesWithParams",
    ()=>fetchCitiesWithParams,
    "fetchCityDetails",
    ()=>fetchCityDetails,
    "fetchDldAreaDetails",
    ()=>fetchDldAreaDetails,
    "fetchDldAreas",
    ()=>fetchDldAreas,
    "fetchLocationsDetails",
    ()=>fetchLocationsDetails,
    "fetchStatesByCountry",
    ()=>fetchStatesByCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
;
const fetchDldAreas = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDLDAreasData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_AREAS, token);
const fetchAreas = (token, page, perPage)=>{
    const endpoint = perPage ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS}?page=${page || 1}&per_page=${perPage}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPropertiesIdData"])(endpoint, token);
};
const fetchCities = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_CITIES, token);
const fetchCityDetails = (cityId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES_DETAIL(cityId), token);
const fetchCitiesWithParams = (token, page = 1, perPage = 10, search)=>{
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("per_page", perPage.toString());
    if (search) params.append("search", search);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_CITIES}?${params.toString()}`, token);
};
const fetchAreasByCountry = (countryName, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_ALL}?country=${encodeURIComponent(countryName)}`, token);
const fetchStatesByCountry = (countryName, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.STATES}?country=${encodeURIComponent(countryName)}`, token);
const fetchAddresses = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES, token);
const fetchAreaDetails = (areaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), token);
const fetchDldAreaDetails = (dldAreaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);
const fetchLocationsDetails = (locationId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);
const fetchAddressDetails = (addressId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), token);
const addArea = (areaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS, areaData, token);
const addCity = (cityData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES, cityData, token);
const addDldArea = (dldAreaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS, dldAreaData, token);
const addLocation = (locationData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.LOCATIONS, locationData, token);
const addAddress = (addressData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES, addressData, token);
const editArea = (areaId, areaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), areaData, token);
const editCity = (cityId, cityData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.CITIES_DETAIL(cityId), cityData, token);
const editDldarea = (dldAreaId, dldAreaData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), dldAreaData, token);
const editLocation = (locationId, locationData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), locationData, token);
const editAddress = (addressId, addressData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), addressData, token);
const deleteArea = (areaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.AREAS_DETAIL(areaId), token);
const deleteDldArea = (dldAreaId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);
const deleteLocation = (locationId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);
const deleteAddress = (addressId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.ADDRESSES_DETAIL(addressId), token);
;
const AdminLocationsService = {
    getLocations: (page = 1, perPage = 10, search, city, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        if (city && city !== "all") params.append("city_name", city);
        if (status && status !== "all") params.append("status", status);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/locations?${params.toString()}`);
    },
    getLocation: (locationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/locations/${locationId}`);
    },
    createLocation: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/locations", data);
    },
    updateLocation: (locationId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/locations/${locationId}`, data);
    },
    deleteLocation: (locationId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/locations/${locationId}`);
    }
};
const AdminAreasService = {
    getAreas: (page = 1, perPage = 15, search, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString(),
            request: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        if (status && status !== "all") params.append("status", status);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/dldAreas?${params.toString()}`);
    },
    getAreasByCountry: (country)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/areas/all?country=${country}`);
    },
    getArea: (areaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/dldAreas/${areaId}`);
    },
    createArea: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/dldAreas", data);
    },
    updateArea: (areaId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/dldAreas/${areaId}`, data);
    },
    deleteArea: (areaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/dldAreas/${areaId}`);
    }
};
const AdminCitiesService = {
    getAllCities: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/cities/all");
        const envelope = response.data;
        return envelope.data;
    },
    getCitiesByCountry: (country)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities/all?country=${country}`);
    },
    getCities: (page = 1, perPage = 10, search)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search && search.trim() !== "") params.append("search", search.trim());
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities?${params.toString()}`);
    },
    getCity: (cityId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities/${cityId}`);
    },
    createCity: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/cities", data);
    },
    updateCity: (cityId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/cities/${cityId}`, data);
    },
    deleteCity: (cityId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/cities/${cityId}`);
    }
};
const AdminDldAreasService = {
    getAllDldAreas: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/areas");
        const envelope = response.data;
        return envelope.data;
    },
    getDldArea: (dldAreaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dldAreas/${dldAreaId}`);
    },
    createDldArea: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dldAreas", data);
    },
    updateDldArea: (dldAreaId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dldAreas/${dldAreaId}`, data);
    },
    deleteDldArea: (dldAreaId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dldAreas/${dldAreaId}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminAdsService",
    ()=>AdminAdsService,
    "createAd",
    ()=>createAd,
    "deleteAd",
    ()=>deleteAd,
    "fetchAd",
    ()=>fetchAd,
    "fetchAds",
    ()=>fetchAds,
    "fetchAdsTotals",
    ()=>fetchAdsTotals,
    "toggleAdStatus",
    ()=>toggleAdStatus,
    "updateAd",
    ()=>updateAd,
    "updateAdStatus",
    ()=>updateAdStatus,
    "updateAdStatusUsingCreateEndpoint",
    ()=>updateAdStatusUsingCreateEndpoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const fetchAds = (token, page = 1, per_page = 15, filters)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (filters) {
        if (filters.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters.platform && filters.platform !== "all") {
            params.append("platform", filters.platform);
        }
        if (filters.format && filters.format !== "all") {
            params.append("format", filters.format);
        }
        if (filters.search && filters.search.trim() !== "") {
            params.append("search", filters.search.trim());
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAdsData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS}?${params.toString()}`, token);
};
const fetchAdsTotals = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataTotals"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOTALS, token);
const fetchAd = (adId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), token);
const updateAd = (adId, adData, token)=>{
    if (adData instanceof FormData && adData.has("_method")) {
        adData.delete("_method");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), adData, token);
};
const deleteAd = (adId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), token);
const createAd = (adData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS, adData, token);
const updateAdStatus = (adId, status, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), {
        is_active: status
    }, token);
const updateAdStatusUsingCreateEndpoint = (adId, status, token)=>{
    const adData = {
        campaign: {
            start_at: null,
            end_at: null,
            daily_cap_credits: null,
            status: status
        },
        placement: {
            platform: null,
            location: null,
            format: null,
            billing_unit: null
        },
        country_id: null,
        entity_type: null,
        entity_id: null,
        title: null,
        weight: null
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId), adData, token);
};
const toggleAdStatus = (adId, newStatus, token)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOGGLE_STATUS(adId), newStatus, token);
};
const AdminAdsService = {
    getAds: (page = 1, perPage = 15, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString(),
            type: "ad"
        });
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.platform && filters.platform !== "all") {
            params.append("platform", filters.platform);
        }
        if (filters?.format && filters.format !== "all") {
            params.append("format", filters.format);
        }
        if (filters?.search && filters.search.trim() !== "") {
            params.append("search", filters.search.trim());
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAdsData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS}?${params.toString()}`);
    },
    getAdsTotals: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataTotals"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOTALS),
    getAd: (adId, token)=>fetchAd(adId, token),
    createAd: (data, token)=>createAd(data, token),
    updateAd: (adId, data, token)=>updateAd(adId, data, token),
    deleteAd: (adId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_DETAIL(adId)),
    toggleStatus: (adId, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.ADS_TOGGLE_STATUS(adId), status)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/campaigns.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCampaign",
    ()=>createCampaign,
    "deleteCampaign",
    ()=>deleteCampaign,
    "fetchCampaignStats",
    ()=>fetchCampaignStats,
    "fetchCampaigns",
    ()=>fetchCampaigns,
    "updateCampaign",
    ()=>updateCampaign,
    "updateCampaignStatus",
    ()=>updateCampaignStatus,
    "viewCampaign",
    ()=>viewCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
;
;
const fetchCampaignStats = async (type, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/stats?type=${type}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaign stats for ${type}:`, error);
        throw error;
    }
};
const createCampaign = async (campaignData, token, customBaseUrl)=>{
    try {
        const isFormData = typeof FormData !== "undefined" && campaignData instanceof FormData;
        const baseUrl = customBaseUrl || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"];
        const url = baseUrl ? `${baseUrl.replace(/\/+$/, "")}${baseUrl.includes("/api") ? "" : "/api"}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}` : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS;
        const headers = {
            Authorization: `Bearer ${token}`
        };
        if (isFormData) {
            headers["Content-Type"] = "multipart/form-data";
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].post(url, campaignData, {
            headers
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS);
        throw error;
    }
};
const fetchCampaigns = async (type, token, page, perPage, search)=>{
    try {
        let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}?type=${type}`;
        if (page) url += `&page=${page}`;
        if (perPage) url += `&per_page=${perPage}`;
        if (search) {
            const encoded = encodeURIComponent(search);
            url += `&search=${encoded}&keyword=${encoded}&query=${encoded}`;
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaigns for ${type}:`, error);
        throw error;
    }
};
const viewCampaign = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to fetch campaign details for ${id}:`, error);
        throw error;
    }
};
const updateCampaign = async (id, campaignData, token)=>{
    try {
        const isFormData = campaignData instanceof FormData;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, campaignData, {
            headers: {
                Authorization: `Bearer ${token}`,
                ...isFormData ? {
                    "Content-Type": undefined
                } : {}
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to update campaign ${id}:`, error);
        throw error;
    }
};
const updateCampaignStatus = async (id, status, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}/status`, {
            status
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to update status for campaign ${id}:`, error);
        throw error;
    }
};
const deleteCampaign = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CAMPAIGNS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Failed to delete campaign ${id}:`, error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/credits.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSubscriptionsService",
    ()=>AdminSubscriptionsService,
    "createAdCreditPackage",
    ()=>createAdCreditPackage,
    "deleteAdCreditPackage",
    ()=>deleteAdCreditPackage,
    "fetchAdCreditPackages",
    ()=>fetchAdCreditPackages,
    "generateAdCreditPackageCode",
    ()=>generateAdCreditPackageCode,
    "purchaseAdCreditPackage",
    ()=>purchaseAdCreditPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
const generateAdCreditPackageCode = ()=>{
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `AD-PKG-${timestamp}-${randomSuffix}`;
};
const validateCreateAdCreditPackageParams = (params)=>{
    if (!params.name || params.name.trim() === "") {
        throw new Error("Package name is required");
    }
    if (params.price_cents < 0) {
        throw new Error("Price must be non-negative");
    }
    if (params.credits < 1) {
        throw new Error("Credits must be at least 1");
    }
};
const createAdCreditPackage = async (token, params)=>{
    validateCreateAdCreditPackageParams(params);
    const code = generateAdCreditPackageCode();
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const payload = {
            code,
            name: params.name.trim(),
            price_cents: params.price_cents,
            currency: "AED",
            credits: params.credits,
            sort_order: 0,
            is_active: params.is_active ?? true
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS, payload, {
            headers
        });
        return response.data;
    } catch (error) {
        const axiosError = error;
        const errorData = axiosError.response?.data;
        if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
            const errorMessages = Object.entries(errorData.errors).map(([field, messages])=>`${field}: ${messages.join(", ")}`).join("; ");
            const apiError = new Error(errorData.message || "Validation failed");
            apiError.details = errorMessages;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
            throw apiError;
        }
        const errorMessage = errorData?.message || (axiosError.message ? `Request failed: ${axiosError.message}` : "Failed to create package");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
        throw new Error(errorMessage);
    }
};
const deleteAdCreditPackage = async (token, packageId)=>{
    if (!packageId || packageId <= 0) {
        throw new Error("Invalid package ID");
    }
    if (!token) {
        throw new Error("Authentication token is required");
    }
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        headers["Authorization"] = `Bearer ${token}`;
        const endpoint = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS}/${packageId}`;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(endpoint, {
            headers
        });
        return response.data;
    } catch (error) {
        const axiosError = error;
        const errorData = axiosError.response?.data;
        if (errorData?.errors && Object.keys(errorData.errors).length > 0) {
            const errorMessages = Object.entries(errorData.errors).map(([field, messages])=>`${field}: ${messages.join(", ")}`).join("; ");
            const apiError = new Error(errorData.message || "Validation failed");
            apiError.details = errorMessages;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
            throw apiError;
        }
        const errorMessage = errorData?.message || (axiosError.message ? `Request failed: ${axiosError.message}` : "Failed to delete package");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS);
        throw new Error(errorMessage);
    }
};
const fetchAdCreditPackages = async (token, params)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const queryParams = new URLSearchParams();
        if (params?.page) {
            queryParams.append("page", params.page.toString());
        }
        if (params?.limit) {
            queryParams.append("limit", params.limit.toString());
        }
        if (params?.sort_by) {
            queryParams.append("sort_by", params.sort_by);
        }
        if (params?.sort_order) {
            queryParams.append("sort_order", params.sort_order);
        }
        if (typeof params?.is_active === "boolean") {
            queryParams.append("is_active", params.is_active.toString());
        }
        if (params?.include_inactive) {
            queryParams.append("include_inactive", "true");
        }
        const endpoint = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDITS}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(endpoint, {
            headers
        });
        return {
            packages: response.data.data || [],
            pagination: response.data.pagination || null
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.CREDIT_PACKAGE);
        throw error;
    }
};
const purchaseAdCreditPackage = async (token, developerId, packageId, paymentDetails)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        const payload = paymentDetails || {
            payment_method: "card"
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS}/${developerId}/packages/${packageId}`, payload, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, `/developers/${developerId}/packages/${packageId}`);
        throw error;
    }
};
;
const AdminSubscriptionsService = {
    getCustomerPlans: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/customerPlans");
    },
    getCustomerPlanById: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/subs/customerPlans/${id}`);
    },
    getPackages: (token, params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/ad-credit-packages", {
            params
        });
    },
    createPackage: (tokenOrData, data)=>{
        const actualData = data || tokenOrData;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/ad-credit-packages", actualData);
    },
    updatePackage: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/ad-credit-packages/${id}`, data);
    },
    getBadges: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/badges", {
            params
        });
    },
    getSubscriptionFeatures: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subscription-features");
    },
    createBadge: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/badges", data);
    },
    updateBadge: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/badges/${id}`, data);
    },
    deleteBadge: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/badges/${id}`);
    },
    getAddons: (params)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/add-ons", {
            params
        });
    },
    getAddonTypes: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/subs/add-ons/types");
    },
    createAddon: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/subs/add-ons", data);
    },
    updateAddon: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/subs/add-ons/${id}`, data);
    },
    deleteAddon: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/subs/add-ons/${id}`);
    },
    createCustomerPlan: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/subs/customerPlans", data);
    },
    updateCustomerPlan: (id, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/subs/customerPlans/${id}`, data);
    },
    deletePackage: (tokenOrId, id)=>{
        const actualId = id !== undefined ? id : tokenOrId;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/ad-credit-packages/${actualId}`);
    },
    deleteCustomerPlan: (id)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/subs/customerPlans/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/badges.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBadge",
    ()=>addBadge,
    "addSubscriptionFeature",
    ()=>addSubscriptionFeature,
    "createBadge",
    ()=>createBadge,
    "createBadgeFeature",
    ()=>createBadgeFeature,
    "deleteBadgeFeature",
    ()=>deleteBadgeFeature,
    "fetchBadgeFeatures",
    ()=>fetchBadgeFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
const fetchBadgeFeatures = async (token)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES);
        throw error;
    }
};
const createBadge = async (token, data)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, data, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES} (POST)`);
        throw error;
    }
};
const createBadgeFeature = async (token, data)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, data, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES} (POST)`);
        throw error;
    }
};
const deleteBadgeFeature = async (token, featureId)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES}/${featureId}`, {
            headers
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES}/${featureId} (DELETE)`);
        throw error;
    }
};
const addSubscriptionFeature = (projectFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, projectFeatureData, token);
const addBadge = (badgeData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].MARKETING.BADGES, badgeData, token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/developers.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDeveloper",
    ()=>addDeveloper,
    "addDeveloperFeature",
    ()=>addDeveloperFeature,
    "deleteDeveloper",
    ()=>deleteDeveloper,
    "deleteDeveloperFeature",
    ()=>deleteDeveloperFeature,
    "editDeveloper",
    ()=>editDeveloper,
    "editDeveloperFeature",
    ()=>editDeveloperFeature,
    "fetchDeveloperDetails",
    ()=>fetchDeveloperDetails,
    "fetchDeveloperFeatureDetails",
    ()=>fetchDeveloperFeatureDetails,
    "fetchDeveloperFeaturesDetails",
    ()=>fetchDeveloperFeaturesDetails,
    "fetchDevelopers",
    ()=>fetchDevelopers,
    "fetchDevelopersPaginated",
    ()=>fetchDevelopersPaginated,
    "toggleDeveloperStatus",
    ()=>toggleDeveloperStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
const fetchDevelopersPaginated = async (token, params = {})=>{
    const { page = 1, per_page = 10, search, status } = params;
    const urlParams = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) urlParams.append("search", search);
    if (status) urlParams.append("status", status);
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS}?${urlParams.toString()}`);
        const responseData = response.data;
        return {
            developers: responseData.data || [],
            pagination: {
                page: responseData.page || page,
                per_page: responseData.per_page || per_page,
                total: responseData.total || 0,
                total_pages: responseData.total_pages || Math.ceil((responseData.total || 0) / per_page)
            }
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS);
        throw error;
    }
};
const fetchDevelopers = (token, page, per_page, search, status, country_id)=>{
    const params = new URLSearchParams({
        page: page.toString(),
        per_page: per_page.toString()
    });
    if (search) params.append("search", search);
    if (status) params.append("status", status);
    if (country_id) params.append("country_id", country_id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_DEVELOPERS}?${params.toString()}`, token);
};
const fetchDeveloperDetails = (developerId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDevelopersData"])(`/developers/${developerId}`, token);
const fetchDeveloperFeaturesDetails = (developerFeatureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/feature-developers/${developerFeatureId}`, token);
const fetchDeveloperFeatureDetails = (developerId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/developers/${developerId}/features/${featureId}`, token);
const addDeveloper = (developerData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDataImg"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DEVELOPERS, developerData, token);
const addDeveloperFeature = (developerFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(`/developers/features/create`, developerFeatureData, token);
const editDeveloper = (developerId, developerData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editDataImg"])(`/developers/${developerId}`, developerData, token);
const toggleDeveloperStatus = (developerId, newStatus, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchData"])(`/developers/${developerId}/toggle-status`, newStatus, token);
const editDeveloperFeature = (developerId, featureId, developerFeatureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(`/developers/${developerId}/features/${featureId}`, developerFeatureData, token);
const deleteDeveloper = (developerId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(`/developers/${developerId}`, token);
const deleteDeveloperFeature = (developerId, featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(`/developers/${developerId}/features/${featureId}`, token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/experts.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminExpertsService",
    ()=>AdminExpertsService,
    "addExpert",
    ()=>addExpert,
    "deleteExpert",
    ()=>deleteExpert,
    "editExpert",
    ()=>editExpert,
    "fetchExpertDetails",
    ()=>fetchExpertDetails,
    "fetchExpertsPaginated",
    ()=>fetchExpertsPaginated,
    "toggleExpertStatus",
    ()=>toggleExpertStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
;
const fetchExpertsPaginated = async (token, params)=>{
    try {
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append("page", params.page.toString());
        if (params.per_page) queryParams.append("per_page", params.per_page.toString());
        if (params.search) queryParams.append("search", params.search);
        if (params.status) queryParams.append("status", params.status);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS}?${queryParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return {
            experts: res.data?.data || [],
            total: res.data?.total || 0
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS);
        return {
            experts: [],
            total: 0
        };
    }
};
const deleteExpert = async (id, token)=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].syncToken(token);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const addExpert = async (data, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS);
        throw error;
    }
};
const editExpert = async (id, data, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id), data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const toggleExpertStatus = async (id, token, data)=>{
    try {
        const payload = typeof data === "boolean" ? {
            status: data ? "approved" : "inactive",
            is_active: data ? 1 : 0
        } : data || {};
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(id), payload, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : undefined);
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(id));
        throw error;
    }
};
const fetchExpertDetails = async (id, token)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERTS}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(id));
        throw error;
    }
};
const AdminExpertsService = {
    getLanguages: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/languages`);
    },
    getCategories: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/categories`);
    },
    getCountries: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.COUNTRIES}`);
    },
    getExpert: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), {
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
    },
    getExpertsPaginated: async (page = 1, limit = 10, search, status)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: limit.toString()
        });
        if (search && search.trim() !== "") {
            params.append("search", search.trim());
        }
        if (status && status !== "all") {
            params.append("status", status);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts?${params.toString()}`, {
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
        return response.data;
    },
    createExpert: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_EXPERTS, data);
    },
    updateExpert: (expertId, data)=>{
        if (data instanceof FormData) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), data);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId), data);
    },
    deleteExpert: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_DETAIL(expertId));
    },
    toggleExpertStatus: (expertId, data)=>{
        const payload = typeof data === "boolean" ? {
            status: data ? "approved" : "inactive",
            is_active: data ? 1 : 0
        } : data || {};
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.EXPERT_TOGGLE_STATUS(expertId), payload);
    },
    bulkImportExperts: (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/experts/bulk-import", formData);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/reservations.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminBookingsService",
    ()=>AdminBookingsService,
    "cancelMeetingRequest",
    ()=>cancelMeetingRequest,
    "confirmBooking",
    ()=>confirmBooking,
    "confirmMeetingRequest",
    ()=>confirmMeetingRequest,
    "declineBooking",
    ()=>declineBooking,
    "fetchBookings",
    ()=>fetchBookings,
    "fetchReservationDetails",
    ()=>fetchReservationDetails,
    "fetchReservations",
    ()=>fetchReservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
;
;
;
const fetchReservations = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataReserve"])(token);
const fetchReservationDetails = (token, reservationId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataReserveUnit"])(token, reservationId);
const confirmBooking = (bookingId, token, comments)=>{
    const formData = new FormData();
    formData.append("reservation_id", String(bookingId));
    formData.append("status", "confirmed");
    if (comments) formData.append("comments", comments);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(`/approve-reservation`, formData, token);
};
const declineBooking = (bookingId, token, comments)=>{
    const formData = new FormData();
    formData.append("reservation_id", String(bookingId));
    formData.append("status", "cancelled");
    if (comments) formData.append("comments", comments);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(`/approve-reservation`, formData, token);
};
const fetchBookings = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW_DETAIL(99999), token);
const confirmMeetingRequest = (id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(`/meeting-requests/${id}`, {
        status: "active"
    }, token);
const cancelMeetingRequest = (id, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(`/meeting-requests/${id}`, {
        status: "cancelled"
    }, token);
const AdminBookingsService = {
    getBookings: async (page = 1, perPage = 10, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters?.country && filters.country !== "all") {
            params.append("country", filters.country);
        }
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.type && filters.type !== "all") {
            params.append("type", filters.type.trim().toUpperCase());
        }
        if (filters?.expiryDate && filters.expiryDate !== "all") {
            params.append("expiry_date", filters.expiryDate);
        }
        if (filters?.search && filters.search.trim() !== "") {
            const rawSearch = filters.search.trim();
            const cleanSearch = /^bk-0*(\d+)$/i.test(rawSearch) ? rawSearch.replace(/^bk-0*/i, "") : rawSearch;
            params.append("search", cleanSearch);
        }
        const RESERVATIONS_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations`;
        const queryString = params.toString();
        const fullUrl = queryString ? `${RESERVATIONS_URL}?${queryString}` : RESERVATIONS_URL;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(fullUrl, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    },
    getBookingDetails: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${bookingId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    confirmBooking: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    approveReservation: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    declineBooking: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "cancelled",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    createSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSPA: (reservationId, formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}/sales-purchase-agreement`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/profile.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changePassword",
    ()=>changePassword,
    "fetchTransactions",
    ()=>fetchTransactions,
    "fetchUserProfile",
    ()=>fetchUserProfile,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const fetchUserProfile = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.PROFILE, token);
const updateUserProfile = (userData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.PROFILE_UPDATE, userData, token);
const changePassword = (passwordData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.CHANGE_PASSWORD, passwordData, token);
const fetchTransactions = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.TRANSACTIONS, token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/ai-notifications.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAiTemplate",
    ()=>addAiTemplate,
    "fetchActivityLogs",
    ()=>fetchActivityLogs,
    "fetchAiConversations",
    ()=>fetchAiConversations,
    "fetchAiTemplates",
    ()=>fetchAiTemplates,
    "fetchNotifications",
    ()=>fetchNotifications,
    "markNotificationAsRead",
    ()=>markNotificationAsRead,
    "searchActivityLogs",
    ()=>searchActivityLogs,
    "searchNotifications",
    ()=>searchNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
const fetchAiConversations = (token, params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/ai/conversations${params ? `?${params}` : ""}`, token);
const fetchAiTemplates = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("/ai/templates", token);
const addAiTemplate = (templateData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/ai/templates", templateData, token);
const fetchNotifications = async (token, params)=>{
    try {
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Failed to fetch notifications with apiClient2, trying fallback:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.NOTIFICATIONS}${params ? `?${params}` : ""}`, token);
    }
};
const searchNotifications = (searchData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/notifications/search", searchData, token);
const markNotificationAsRead = async (token, notificationId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient2"].post("/mark-notification-as-read", notificationId ? {
            notification_id: notificationId
        } : {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (error) {
        console.error("Failed to mark notification as read with apiClient2, trying fallback:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/mark-notification-as-read", notificationId ? {
            notification_id: notificationId
        } : {}, token);
    }
};
const fetchActivityLogs = (token, params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/activityLogs${params ? `?${params}` : ""}`, token);
const searchActivityLogs = (searchData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/activityLogs", searchData, token);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/dashboard.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardAdminService",
    ()=>DashboardAdminService,
    "DashboardExpertService",
    ()=>DashboardExpertService,
    "fetchDashboardCounts",
    ()=>fetchDashboardCounts,
    "fetchDashboardReviews",
    ()=>fetchDashboardReviews,
    "fetchDashboardStats",
    ()=>fetchDashboardStats,
    "fetchInProgressReservations",
    ()=>fetchInProgressReservations,
    "fetchReservationStatusMetrics",
    ()=>fetchReservationStatusMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
;
;
;
const fetchDashboardReviews = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROPERTIES.BY_ID(999999), token);
const fetchDashboardCounts = (token, startDate, endDate)=>{
    let url = "/dashboard/test-dashboard-counts";
    if (startDate || endDate) {
        const params = new URLSearchParams();
        if (startDate) params.append("start_date", startDate);
        if (endDate) params.append("end_date", endDate);
        url += `?${params.toString()}`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchReservationStatusMetrics = (token, days)=>{
    let url = "/dashboard/reservation-status-metrics";
    if (days) {
        url += `?days=${days}`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchInProgressReservations = (token, days, stage)=>{
    let url = "/dashboard/inprogress-reservations";
    const params = new URLSearchParams();
    if (days) params.append("days", days.toString());
    if (stage) params.append("stage", stage);
    const paramString = params.toString();
    if (paramString) url += `?${paramString}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(url, token);
};
const fetchDashboardStats = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.DASHBOARD_STATS, token);
const DashboardAdminService = {
    getBookings: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/admin/reservations");
        return response.data;
    },
    getExperts: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/experts");
        return response.data;
    },
    getExpertsPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts?${params.toString()}`);
        return response.data;
    },
    getProjects: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/projects");
        return response.data;
    },
    getProjectsPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("per_page", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects?${params.toString()}`);
        return response.data;
    },
    getProjectDetails: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    getProperties: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/properties");
        return response.data;
    },
    getPropertiesPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/properties?${params.toString()}`);
        return response.data;
    },
    getDevelopers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/developers");
        return response.data;
    },
    getDevelopersPaginated: async (page, limit, search)=>{
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        if (search) params.append("search", search);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/developers?${params.toString()}`);
        return response.data;
    },
    getCities: async (country)=>{
        const params = country ? `?country=${country}` : "";
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/cities/all${params}`);
        return response.data;
    },
    getAreas: async (country)=>{
        const params = country ? `?country=${country}` : "";
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/areas/all${params}`);
        return response.data;
    },
    getFeatures: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/features");
        return response.data;
    },
    getBookingDetails: async (reservationId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/${reservationId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        });
        return response.data;
    },
    confirmBooking: async (bookingId, payload)=>{
        const comments = typeof payload?.comments === "string" ? payload.comments : undefined;
        const status = typeof payload?.status === "string" ? payload.status : "confirmed";
        const type = typeof payload?.reservation_status_type === "string" ? payload.reservation_status_type.toUpperCase() : typeof payload?.type === "string" ? payload.type.toUpperCase() : "IDENTIFICATION";
        const body = {
            reservation_id: bookingId,
            status,
            reservation_status_type: type
        };
        if (comments) body.comments = comments;
        let patchResult = null;
        try {
            patchResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, body, {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then((res)=>res.data);
        } catch (err) {
            console.warn("PATCH approve failed", err?.message);
        }
        return patchResult || {
            status: true,
            message: "Confirmed"
        };
    },
    approveReservation: (bookingId, comments, type = "IDENTIFICATION")=>{
        const resType = (type || "IDENTIFICATION").toUpperCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            reservation_id: bookingId,
            status: "confirmed",
            reservation_status_type: resType,
            comments: comments || undefined
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    declineBooking: (bookingId, payload)=>{
        const type = typeof payload?.reservation_status_type === "string" ? payload.reservation_status_type.toUpperCase() : typeof payload?.type === "string" ? payload.type.toUpperCase() : "IDENTIFICATION";
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/admin/approve`, {
            ...payload,
            status: "cancelled",
            reservation_id: bookingId,
            reservation_status_type: type
        }, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    createSalesOffer: (formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    uploadDownPayment: async (formData)=>{
        // Attempt sales-offer endpoint (handles reservation media) or general reservation upload
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-offer`, formData, {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            }).then((res)=>res.data);
        } catch (_err) {
            return {
                status: true,
                message: "Uploaded"
            };
        }
    },
    uploadSPA: (_reservationId, formData)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_V2_API_BASE_URL"]}/reservations/sales-purchase-agreement`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "69420"
            }
        }).then((res)=>res.data);
    },
    getProfileInformation: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get('auth/me'),
    updateProfileInformation: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post('/auth/me', data),
    sendOtpEmail: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/email/otp/send", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": 'existing-user'
            }
        });
    },
    resendOtpEmail: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/email/otp/resend", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": 'existing-user'
            }
        });
    },
    verifyPhoneOREmail: (data, verificationtype)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/verify", data, {
            headers: {
                "X-Context": "website",
                "verificationtype": verificationtype
            }
        });
    },
    changePassword: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/users/profile/change-password/request", data);
    },
    socialLogin: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/social-login", data, {
            headers: {
                "X-Context": "website"
            }
        }),
    forgetPassword: async (formData)=>{
        const payload = {
            action: "reset_password",
            data: {
                email: formData.email
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/v2/send-otp", payload, {
            headers: {
                "X-Context": "website"
            }
        });
    },
    resetPassword: async (data)=>{
        const payload = {
            email: data.email,
            reset_token: data.reset_token || data.token || data.otp || data.code,
            password: data.password,
            password_confirmation: data.password_confirmation
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/password/reset", payload, {
            headers: {
                "X-Context": "website",
                "X-Guest-Token": data.reset_token || data.token
            }
        });
    },
    verifyOtpPassword: async (data)=>{
        const payload = {
            action: "reset_password",
            otp: data.otp
        };
        if (data.token) {
            payload.token = data.token;
        }
        const headers = {
            "X-Context": "website",
            "X-Guest-Token": data.token || ""
        };
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/auth/v2/verify-otp", payload, {
                headers
            });
        } catch (err) {
            const responseData = err?.response?.data;
            if (responseData && responseData.message === "This action has already been verified") {
                return {
                    data: responseData,
                    status: 200
                };
            }
            throw err;
        }
    }
};
const DashboardExpertService = {
    getMetrics: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/bookings-metrics"),
    getReviews: (expertId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/reviews`),
    getBookings: ({ page, per_page, status, search })=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/bookings", {
            params: {
                page,
                per_page,
                status,
                search
            }
        });
    },
    confirmBooking: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/confirm`);
    },
    declineBooking: (bookingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/decline`);
    },
    rescheduleBookings: (bookingId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/bookings/${bookingId}/reschedule`, data);
    },
    agoraCall: (channelName)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`agora/token?channel_name=${channelName}`);
    },
    getBookingsHistory: ({ page, status, search })=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/experts/me/history", {
            params: {
                page,
                status,
                search
            }
        });
    },
    getWeeklyAvailability (expertId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities`);
    },
    toggleAvailabilityDay: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/experts/${expertId}/availabilities/day-toggle`, data);
    },
    getAvailabilitySlot: (expertId, ruleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/${ruleId}`);
    },
    addAvailabilitySlot: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/availabilities/slots`, data);
    },
    updateAvailabilitySlot: (expertId, ruleId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`, data);
    },
    deleteAvailabilitySlot: (expertId, ruleId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`);
    },
    getAvailabilityException: (expertId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/exceptions`);
    },
    getSingleAvailabilityException: (expertId, exceptionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`);
    },
    setAvailabilityException: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/availabilities/exceptions`, data);
    },
    updateAvailabilityException: (expertId, exceptionId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`, data);
    },
    deleteAvailabilityException: (expertId, exceptionId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`);
    },
    getAllPackages (expertId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/packages`);
    },
    getSinglePackage: (expertId, packageId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}/packages/${packageId}`);
    },
    addPackage: (expertId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}/packages`, data);
    },
    updatePackage: (expertId, packageId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/experts/${expertId}/packages/${packageId}`, data);
    },
    deletePackage: (expertId, packageId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/experts/${expertId}/packages/${packageId}`);
    },
    getMyTransactions: (params)=>{
        const query = new URLSearchParams();
        if (params?.page) query.append("page", String(params.page));
        if (params?.per_page) query.append("per_page", String(params.per_page));
        if (params?.status) query.append("status", params.status);
        if (params?.search) query.append("search", params.search);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/me/transactions?${query.toString()}`);
    },
    requestWithdrawal: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/experts/me/payouts", data);
    },
    getProfileInformation: (expertId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/experts/${expertId}`),
    updateProfileInformation: (expertId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/experts/${expertId}`, data),
    getCountriesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/countries`),
    getLanguagesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/languages`),
    getCategoriesList: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/experts/categories`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/misc.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminFeaturesService",
    ()=>AdminFeaturesService,
    "AdminMeetingsService",
    ()=>AdminMeetingsService,
    "AdminOffersService",
    ()=>AdminOffersService,
    "addFeature",
    ()=>addFeature,
    "addReferral",
    ()=>addReferral,
    "deleteCity",
    ()=>deleteCity,
    "deleteFeature",
    ()=>deleteFeature,
    "deleteReferral",
    ()=>deleteReferral,
    "editFeature",
    ()=>editFeature,
    "editReferral",
    ()=>editReferral,
    "fetchCountries",
    ()=>fetchCountries,
    "fetchFeatures",
    ()=>fetchFeatures,
    "fetchFeaturesDetails",
    ()=>fetchFeaturesDetails,
    "fetchLocations",
    ()=>fetchLocations,
    "fetchProjects",
    ()=>fetchProjects,
    "fetchProjectsByDeveloper",
    ()=>fetchProjectsByDeveloper,
    "fetchRereferralDetails",
    ()=>fetchRereferralDetails,
    "fetchTenants",
    ()=>fetchTenants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
;
;
;
const fetchLocations = (token, page = 1, perPage = 10)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaginatedData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].LOCATIONS.LOCATIONS}?page=${page}&per_page=${perPage}`, token);
const fetchProjects = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.RAW, token);
const fetchProjectsByDeveloper = (token, developer_id, is_active, per_page = "100", search)=>{
    const params = new URLSearchParams({
        developer_id: developer_id.toString(),
        per_page
    });
    if (is_active !== undefined && is_active !== null) {
        params.append("is_active", is_active.toString());
    }
    if (search) {
        params.append("search", search);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PROJECTS.BASE}?${params.toString()}`, token);
};
const fetchCountries = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.COUNTRIES, token);
const fetchFeatures = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].COMMON.FEATURES, token);
const fetchTenants = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])("/tenants", token);
const fetchRereferralDetails = (referralId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/referrals/${referralId}`, token);
const fetchFeaturesDetails = (featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])(`/features/${featureId}`, token);
const addReferral = (referralData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/referrals", referralData, token);
const addFeature = (featureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])("/features", featureData, token);
const editReferral = (referralId, referralData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(`/referrals/${referralId}`, referralData, token);
const editFeature = (featureId, featureData, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editData"])(`/features/${featureId}`, featureData, token);
const deleteReferral = (referralId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(`/referrals/${referralId}`, token);
const deleteCity = (cityId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(`/cities/${cityId}`, token);
const deleteFeature = (featureId, token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteData"])(`/dashboard/features/${featureId}`, token);
const AdminMeetingsService = {
    getMeetingRequests: (page = 1, perPage = 10, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters) {
            if (filters.country && filters.country !== "all") {
                params.append("country", filters.country);
            }
            if (filters.status && filters.status !== "all") {
                params.append("status", filters.status);
            }
            if (filters.search && filters.search.trim() !== "") {
                params.append("search", filters.search.trim());
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/meeting-requests?${params.toString()}`);
    },
    getMeetingRequest: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/meeting-requests/${meetingId}`);
    },
    confirmMeeting: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/meeting-requests/${meetingId}/confirm`);
    },
    cancelMeeting: (meetingId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/meeting-requests/${meetingId}/cancel`);
    }
};
const AdminOffersService = {
    getOffers: async (page = 1, perPage = 15, filters)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (filters?.status && filters.status !== "all") {
            params.append("status", filters.status);
        }
        if (filters?.search && filters.search.trim()) {
            params.append("search", filters.search.trim());
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/offers?${params.toString()}`);
        return response;
    },
    getOffersTotals: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/offers/totals");
        return response.data;
    },
    getOffer: async (offerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/offers/${offerId}`);
    },
    createOffer: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].V2.OFFERS, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    updateOffer: (offerId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/offers/${offerId}`, data);
    },
    deleteOffer: (offerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/offers/${offerId}`);
    },
    toggleStatus: (offerId, fields)=>{
        const formData = new FormData();
        formData.append("entity_type", fields.entity_type);
        formData.append("entity_id", String(fields.entity_id));
        formData.append("discount_type", fields.discount_type);
        formData.append("is_active", fields.is_active ? "1" : "0");
        if (fields.name) formData.append("name", fields.name);
        if (fields.description) formData.append("description", fields.description);
        if (fields.starts_at) formData.append("starts_at", fields.starts_at);
        if (fields.ends_at) formData.append("ends_at", fields.ends_at);
        if (fields.discount_pct != null) formData.append("discount_pct", String(fields.discount_pct));
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/offers/${offerId}`, formData);
    }
};
const AdminFeaturesService = {
    getFeatures: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/features");
    },
    getFeature: (featureId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/features/${featureId}`);
    },
    createFeature: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/features", data);
    },
    updateFeature: (featureId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/features/${featureId}`, data);
    },
    deleteFeature: (featureId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/features/${featureId}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupportConversation",
    ()=>createSupportConversation,
    "extractArrayFromResponse",
    ()=>extractArrayFromResponse,
    "extractNextCursor",
    ()=>extractNextCursor,
    "fetchAllChatsHistory",
    ()=>fetchAllChatsHistory,
    "fetchChatClientHistory",
    ()=>fetchChatClientHistory,
    "fetchChatHistory",
    ()=>fetchChatHistory,
    "fetchSupportConversationMessages",
    ()=>fetchSupportConversationMessages,
    "fetchSupportConversations",
    ()=>fetchSupportConversations,
    "markAsRead",
    ()=>markAsRead,
    "markSupportConversationAsRead",
    ()=>markSupportConversationAsRead,
    "normalizeSupportConversation",
    ()=>normalizeSupportConversation,
    "normalizeSupportMessage",
    ()=>normalizeSupportMessage,
    "releaseSupportConversation",
    ()=>releaseSupportConversation,
    "sendMessage",
    ()=>sendMessage,
    "sendSupportMessage",
    ()=>sendSupportMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"];
const DASHBOARD_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"];
// Several support-chat operations probe a list of candidate endpoints until one responds.
// Remember which candidate worked per operation so later calls try it first instead of
// repeating the failed probes, and drop duplicate URLs from each list.
const resolvedCandidate = new Map();
function orderCandidates(operation, candidates) {
    const unique = Array.from(new Set(candidates));
    const index = resolvedCandidate.get(operation);
    if (index === undefined || index <= 0 || index >= unique.length) return unique;
    return [
        unique[index],
        ...unique.slice(0, index),
        ...unique.slice(index + 1)
    ];
}
function rememberCandidate(operation, candidates, endpoint) {
    const index = Array.from(new Set(candidates)).indexOf(endpoint);
    if (index >= 0) resolvedCandidate.set(operation, index);
}
async function fetchChatHistory(adminId, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/chat/contacts/${adminId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data || [];
    } catch (error) {
        console.error("Error fetching chat history:", error);
        throw error;
    }
}
async function fetchChatClientHistory(adminId, clientId, token) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/chat/history/${adminId}/${clientId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data || [];
    } catch (error) {
        console.error("Error fetching client messages:", error);
        throw error;
    }
}
async function sendMessage(token, messageData) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/chat/send`, messageData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
}
async function markAsRead(clientId, adminId, token) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/chat/mark-as-read/${clientId}/${adminId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("Error marking messages as read:", error);
        throw error;
    }
}
const fetchAllChatsHistory = async (token)=>{
    try {
        const response = await fetch(`${API_URL}/chat/all`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (data.status !== "success" && data.status !== true && data.status !== 200) {
            throw new Error(data.message || "Failed to fetch chat history");
        }
        if (!data.data || !Array.isArray(data.data)) {
            return [];
        }
        if (data.data.length > 0 && !data.data[0].sender) {
            return data.data.map((chat)=>({
                    user_id: chat.id || chat.user_id,
                    first_name: chat.first_name || chat.name?.split(' ')[0] || "",
                    last_name: chat.last_name || chat.name?.split(' ').slice(1).join(' ') || "",
                    email: chat.email || "",
                    profile_picture: chat.profile_picture || chat.avatar || null,
                    last_message: chat.last_message || null,
                    unread_count: chat.unread_count || 0
                }));
        }
        const contactsMap = new Map();
        data.data.forEach((msg)=>{
            const contact = msg.sender.role !== "admin" ? msg.sender : msg.receiver;
            const contactId = msg.sender.role !== "admin" ? msg.sender_id : msg.receiver_id;
            if (!contactsMap.has(contactId)) {
                const nameParts = contact.name.split(" ");
                const firstName = nameParts[0] || "";
                const lastName = nameParts.slice(1).join(" ") || "";
                contactsMap.set(contactId, {
                    user_id: contactId,
                    first_name: firstName,
                    last_name: lastName,
                    email: contact.email,
                    phone_number: null,
                    profile_picture: contact.avatar,
                    last_message: {
                        message_id: msg.message_id,
                        sender_id: msg.sender_id,
                        receiver_id: msg.receiver_id,
                        message_text: msg.message_text,
                        message_type: msg.message_type,
                        created_at: msg.created_at,
                        updated_at: msg.updated_at,
                        read_at: msg.is_read ? msg.updated_at : null
                    },
                    unread_count: 0
                });
            } else {
                const existing = contactsMap.get(contactId);
                if (new Date(msg.created_at) > new Date(existing.last_message.created_at)) {
                    existing.last_message = {
                        message_id: msg.message_id,
                        sender_id: msg.sender_id,
                        receiver_id: msg.receiver_id,
                        message_text: msg.message_text,
                        message_type: msg.message_type,
                        created_at: msg.created_at,
                        updated_at: msg.updated_at,
                        read_at: msg.is_read ? msg.updated_at : null
                    };
                }
            }
            if (msg.is_read === 0 && msg.sender.role !== "admin") {
                const contact = contactsMap.get(contactId);
                contact.unread_count = (contact.unread_count || 0) + 1;
            }
        });
        return Array.from(contactsMap.values());
    } catch (error) {
        throw new Error(`Chat history fetch failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
};
function extractArrayFromResponse(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.items)) return data.items;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.data?.items)) return data.data.items;
    if (Array.isArray(data?.data?.data)) return data.data.data;
    if (Array.isArray(data?.data?.data?.items)) return data.data.data.items;
    if (Array.isArray(data?.conversations)) return data.conversations;
    if (Array.isArray(data?.data?.conversations)) return data.data.conversations;
    if (Array.isArray(data?.messages)) return data.messages;
    if (Array.isArray(data?.data?.messages)) return data.data.messages;
    if (Array.isArray(data?.records)) return data.records;
    if (Array.isArray(data?.data?.records)) return data.data.records;
    if (Array.isArray(data?.results)) return data.results;
    if (Array.isArray(data?.data?.results)) return data.data.results;
    return [];
}
function extractNextCursor(data) {
    if (!data) return null;
    const cursor = data?.next_cursor || data?.data?.next_cursor || data?.meta?.next_cursor || data?.data?.meta?.next_cursor || data?.pagination?.next_cursor || data?.data?.pagination?.next_cursor || data?.links?.next || data?.data?.links?.next || data?.next_page_url || data?.data?.next_page_url || null;
    if (cursor && typeof cursor === "string") {
        try {
            if (cursor.startsWith("http")) {
                const url = new URL(cursor);
                return url.searchParams.get("cursor") || url.searchParams.get("page") || cursor;
            }
        } catch  {
        // ignore
        }
        return cursor;
    }
    if (typeof cursor === "number") return String(cursor);
    return null;
}
function normalizeSupportConversation(item) {
    if (!item || typeof item !== "object") return item;
    const id = item.id ?? item.conversation_id ?? item.support_conversation_id;
    const conversation_id = item.conversation_id ?? item.id ?? id;
    // Normalize user
    let user = item.user || null;
    if (user && typeof user === "object") {
        const userId = user.id ?? user.user_id;
        const firstName = user.first_name || "";
        const lastName = user.last_name || "";
        const fullName = user.name || `${firstName} ${lastName}`.trim() || user.email || `User #${userId}`;
        user = {
            ...user,
            id: userId,
            user_id: userId,
            name: fullName,
            first_name: firstName,
            last_name: lastName,
            email: user.email,
            avatar: user.avatar || user.profile_picture || null,
            profile_picture: user.profile_picture || user.avatar || null
        };
    } else if (item.user_id || item.user_name || item.user_email) {
        user = {
            id: item.user_id,
            user_id: item.user_id,
            name: item.user_name || item.user_email || `User #${item.user_id}`,
            email: item.user_email
        };
    }
    // Normalize admin
    let admin = item.admin || item.assigned_admin || null;
    if (admin && typeof admin === "object") {
        const adminId = admin.id ?? admin.user_id;
        const firstName = admin.first_name || "";
        const lastName = admin.last_name || "";
        const fullName = admin.name || `${firstName} ${lastName}`.trim() || admin.email || `Admin #${adminId}`;
        admin = {
            ...admin,
            id: adminId,
            name: fullName,
            email: admin.email
        };
    }
    // Normalize last / latest message
    const rawMsg = item.latest_message || item.last_message || null;
    let last_message = null;
    if (rawMsg) {
        if (typeof rawMsg === "string") {
            last_message = {
                body: rawMsg
            };
        } else {
            last_message = {
                ...rawMsg,
                id: rawMsg.id ?? rawMsg.message_id,
                conversation_id: rawMsg.conversation_id ?? id,
                sender_id: rawMsg.sender_id ?? rawMsg.user_id,
                sender_type: rawMsg.sender_type || "user",
                body: rawMsg.body ?? rawMsg.message_text ?? "",
                attachment_url: rawMsg.attachment_url ?? (typeof rawMsg.attachment === "string" ? rawMsg.attachment : rawMsg.attachment?.url) ?? rawMsg.file_url ?? null,
                created_at: rawMsg.created_at,
                read_at: rawMsg.read_at
            };
        }
    }
    const unreadCount = Number(item.unread_for_admin ?? item.unread_count ?? item.unread_for_user ?? item.unread ?? 0) || 0;
    const subject = item.subject || item.title || (user?.name ? user.name : null) || `Conversation #${id}`;
    return {
        ...item,
        id,
        conversation_id,
        user,
        admin,
        assigned_admin: admin,
        last_message,
        latest_message: last_message,
        status: item.status || "open",
        last_message_at: item.last_message_at || last_message?.created_at || item.updated_at || item.created_at || null,
        unread_count: unreadCount,
        unread_for_admin: item.unread_for_admin ?? unreadCount,
        unread_for_user: item.unread_for_user ?? 0,
        subject,
        title: subject
    };
}
function normalizeSupportMessage(item, fallbackConvId) {
    if (!item || typeof item !== "object") return item;
    const id = item.id ?? item.message_id;
    const conversation_id = item.conversation_id ?? fallbackConvId;
    const sender_id = item.sender_id ?? item.user_id ?? item.sender?.id ?? item.sender?.user_id;
    let sender = item.sender || null;
    if (sender && typeof sender === "object") {
        const sId = sender.id ?? sender.user_id ?? sender_id;
        const firstName = sender.first_name || "";
        const lastName = sender.last_name || "";
        const fullName = sender.name || `${firstName} ${lastName}`.trim() || sender.email || "";
        sender = {
            ...sender,
            id: sId,
            name: fullName,
            first_name: firstName,
            last_name: lastName,
            email: sender.email,
            role: sender.role || item.sender_type
        };
    }
    const attachmentUrl = item.attachment_url ?? (typeof item.attachment === "string" ? item.attachment : item.attachment?.url) ?? item.file_url ?? (typeof item.file === "string" ? item.file : item.file?.url) ?? null;
    return {
        ...item,
        id,
        message_id: id,
        conversation_id,
        sender_id,
        sender,
        sender_type: item.sender_type || (sender?.role ? sender.role.toLowerCase() : "user"),
        body: item.body ?? item.message_text ?? item.text ?? null,
        message_text: item.message_text ?? item.body ?? null,
        attachment: item.attachment ?? attachmentUrl,
        attachment_url: attachmentUrl,
        created_at: item.created_at || new Date().toISOString(),
        read_at: item.read_at ?? null,
        is_read: item.is_read ?? (Boolean(item.read_at) ? 1 : 0)
    };
}
async function fetchSupportConversations(token, params) {
    try {
        const isAdmin = params?.isAdmin !== false;
        const operation = isAdmin ? "conversations:admin" : "conversations:user";
        const candidates = Array.from(new Set(isAdmin ? [
            `${API_URL}/dashboard/conversations`,
            `${DASHBOARD_API_URL}/conversations`,
            `${API_URL}/support/conversations`,
            `${API_URL}/conversations`
        ] : [
            `${API_URL}/support/conversations`,
            `${API_URL}/dashboard/conversations`,
            `${API_URL}/conversations`
        ]));
        const query = new URLSearchParams();
        if (params?.cursor) query.append("cursor", params.cursor);
        if (params?.search) query.append("search", params.search);
        if (params?.status && params.status !== "all") query.append("status", params.status);
        if (params?.per_page) query.append("per_page", String(params.per_page));
        const queryString = query.toString() ? `?${query.toString()}` : "";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
            "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
        };
        let response = null;
        let lastError = null;
        for (const endpoint of orderCandidates(operation, candidates)){
            try {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${endpoint}${queryString}`, {
                    headers,
                    signal: params?.signal
                });
                if (response?.data) {
                    rememberCandidate(operation, candidates, endpoint);
                    break;
                }
            } catch (err) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
                    return {
                        data: [],
                        next_cursor: null
                    };
                }
                lastError = err;
                if (err?.response?.status === 404) {
                    continue;
                }
                throw err;
            }
        }
        if (!response && lastError) {
            throw lastError;
        }
        const rawData = response?.data;
        const rawItems = extractArrayFromResponse(rawData);
        const items = rawItems.map(normalizeSupportConversation);
        const next_cursor = extractNextCursor(rawData);
        return {
            data: items,
            next_cursor
        };
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
            return {
                data: [],
                next_cursor: null
            };
        }
        console.error("Error fetching support conversations:", error);
        throw error;
    }
}
async function fetchSupportConversationMessages(conversationId, token, cursor, isAdmin = true, signal) {
    try {
        const operation = isAdmin ? "messages:admin" : "messages:user";
        const candidates = Array.from(new Set(isAdmin ? [
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/dashboard/conversations/${conversationId}/messages`,
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`
        ] : [
            `${API_URL}/support/conversations/${conversationId}/messages`,
            `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
            `${API_URL}/conversations/${conversationId}/messages`
        ]));
        const query = new URLSearchParams();
        if (cursor) query.append("cursor", cursor);
        const queryString = query.toString() ? `?${query.toString()}` : "";
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
            "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
        };
        let response = null;
        let lastError = null;
        for (const endpoint of orderCandidates(operation, candidates)){
            try {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${endpoint}${queryString}`, {
                    headers,
                    signal
                });
                if (response?.data) {
                    rememberCandidate(operation, candidates, endpoint);
                    break;
                }
            } catch (err) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(err) || err?.name === "CanceledError" || err?.name === "AbortError") {
                    return {
                        data: [],
                        next_cursor: null
                    };
                }
                lastError = err;
                if (err?.response?.status === 404) {
                    continue;
                }
                throw err;
            }
        }
        if (!response && lastError) {
            throw lastError;
        }
        const rawData = response?.data;
        const rawItems = extractArrayFromResponse(rawData);
        const items = rawItems.map((m)=>normalizeSupportMessage(m, conversationId));
        const next_cursor = extractNextCursor(rawData);
        return {
            data: items,
            next_cursor
        };
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error?.name === "CanceledError" || error?.name === "AbortError") {
            return {
                data: [],
                next_cursor: null
            };
        }
        console.error("Error fetching support messages:", error);
        throw error;
    }
}
async function sendSupportMessage(conversationId, params, token, isAdmin = true) {
    const operation = isAdmin ? "send:admin" : "send:user";
    const candidates = Array.from(new Set(isAdmin ? [
        `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
        `${API_URL}/dashboard/conversations/${conversationId}/messages`,
        `${API_URL}/support/conversations/${conversationId}/messages`,
        `${API_URL}/conversations/${conversationId}/messages`
    ] : [
        `${API_URL}/support/conversations/${conversationId}/messages`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/messages`,
        `${API_URL}/conversations/${conversationId}/messages`
    ]));
    const hasAttachment = Boolean(params.attachment);
    const bodyText = params.body ? params.body.trim() : "";
    if (!bodyText && !hasAttachment) {
        throw new Error("The body field is required when attachment is not present.");
    }
    const formData = new FormData();
    if (bodyText) {
        formData.append("body", bodyText);
    }
    if (hasAttachment && params.attachment) {
        formData.append("attachment", params.attachment, params.attachment.name);
        formData.append("file", params.attachment, params.attachment.name);
    }
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(endpoint, formData, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            const resData = response.data;
            const rawMsg = resData?.data?.message || resData?.message || resData?.data || resData;
            return normalizeSupportMessage(rawMsg, conversationId);
        } catch (err) {
            lastError = err;
            if (err?.response?.status === 404) {
                continue;
            }
            throw err;
        }
    }
    console.error("Error sending support message:", lastError);
    throw lastError;
}
async function createSupportConversation(params, token) {
    try {
        const bodyText = params.body ? params.body.trim() : "";
        const hasAttachment = Boolean(params.attachment);
        if (!bodyText && !hasAttachment) {
            throw new Error("The body field is required when attachment is not present.");
        }
        const formData = new FormData();
        if (bodyText) {
            formData.append("body", bodyText);
        }
        if (params.subject?.trim()) {
            formData.append("subject", params.subject.trim());
        }
        if (hasAttachment && params.attachment) {
            formData.append("attachment", params.attachment, params.attachment.name);
            formData.append("file", params.attachment, params.attachment.name);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/support/conversations`, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        const resData = response.data;
        const rawConv = resData?.data?.conversation || resData?.conversation || resData?.data || resData;
        return normalizeSupportConversation(rawConv);
    } catch (error) {
        console.error("Error creating support conversation:", error);
        throw error;
    }
}
async function markSupportConversationAsRead(conversationId, token, isAdmin = true) {
    const operation = isAdmin ? "markRead:admin" : "markRead:user";
    const candidates = isAdmin ? [
        `${DASHBOARD_API_URL}/conversations/${conversationId}/read`,
        `${API_URL}/dashboard/conversations/${conversationId}/read`,
        `${API_URL}/support/conversations/${conversationId}/read`,
        `${DASHBOARD_API_URL}/support/conversations/${conversationId}/read`,
        `${API_URL}/conversations/${conversationId}/read`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/dashboard/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/support/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/conversations/${conversationId}/mark-as-read`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/messages/read`,
        `${API_URL}/dashboard/conversations/${conversationId}/messages/read`,
        `${API_URL}/support/conversations/${conversationId}/messages/read`
    ] : [
        `${API_URL}/support/conversations/${conversationId}/read`,
        `${DASHBOARD_API_URL}/conversations/${conversationId}/read`,
        `${API_URL}/conversations/${conversationId}/read`,
        `${API_URL}/support/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/conversations/${conversationId}/mark-as-read`,
        `${API_URL}/support/conversations/${conversationId}/messages/read`,
        `${API_URL}/conversations/${conversationId}/messages/read`
    ];
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(endpoint, {}, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            return response.data;
        } catch (err) {
            if (err?.response?.status === 405) {
                try {
                    const patchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(endpoint, {}, {
                        headers
                    });
                    rememberCandidate(operation, candidates, endpoint);
                    return patchRes.data;
                } catch  {}
            }
            lastError = err;
        }
    }
    console.warn("markSupportConversationAsRead failed:", lastError?.response?.data || lastError?.message);
    return null;
}
async function releaseSupportConversation(conversationId, token) {
    const operation = "release";
    const candidates = [
        `${DASHBOARD_API_URL}/conversations/${conversationId}/release`,
        `${API_URL}/dashboard/conversations/${conversationId}/release`,
        `${API_URL}/support/conversations/${conversationId}/release`,
        `${DASHBOARD_API_URL}/support/conversations/${conversationId}/release`,
        `${API_URL}/conversations/${conversationId}/release`
    ];
    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "country-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])(),
        "country_id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCountryId"])()
    };
    let lastError = null;
    for (const endpoint of orderCandidates(operation, candidates)){
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(endpoint, {}, {
                headers
            });
            rememberCandidate(operation, candidates, endpoint);
            return response.data;
        } catch (err) {
            if (err?.response?.status === 405) {
                try {
                    const patchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(endpoint, {}, {
                        headers
                    });
                    rememberCandidate(operation, candidates, endpoint);
                    return patchRes.data;
                } catch  {}
            }
            lastError = err;
        }
    }
    console.error("Error releasing support conversation:", lastError?.response?.data || lastError?.message);
    throw lastError;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api/services/users.service.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$properties$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/properties.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/locations.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$campaigns$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/campaigns.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$credits$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/credits.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$badges$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/badges.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$developers$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/developers.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$experts$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/experts.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$reservations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/reservations.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$profile$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/profile.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ai$2d$notifications$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ai-notifications.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$misc$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/misc.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$chat$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/chat.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$permissions$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/permissions.service.ts [app-client] (ecmascript)");
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
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/projects/utils/map-project.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProject",
    ()=>mapProject,
    "unpackProjectsResponse",
    ()=>unpackProjectsResponse
]);
function unpackProjectsResponse(rawData) {
    let itemsArray = [];
    if (!rawData) return {
        itemsArray: [],
        totalItems: 0
    };
    if (Array.isArray(rawData)) {
        itemsArray = rawData;
    } else if (typeof rawData === "object") {
        const obj = rawData;
        if (Array.isArray(obj.data)) {
            itemsArray = obj.data;
        } else if (Array.isArray(obj.projects)) {
            itemsArray = obj.projects;
        } else if (Array.isArray(obj.items)) {
            itemsArray = obj.items;
        } else if (obj.data && typeof obj.data === "object") {
            if (Array.isArray(obj.data.data)) {
                itemsArray = obj.data.data;
            } else if (Array.isArray(obj.data.projects)) {
                itemsArray = obj.data.projects;
            } else if (Array.isArray(obj.data.items)) {
                itemsArray = obj.data.items;
            }
        }
    }
    let totalItems = itemsArray.length;
    if (Array.isArray(rawData)) {
        totalItems = rawData.length;
    } else if (rawData && typeof rawData.total === "number") {
        totalItems = rawData.total;
    } else if (rawData && typeof rawData.data?.total === "number") {
        totalItems = rawData.data.total;
    }
    return {
        itemsArray,
        totalItems
    };
}
function mapProject(p) {
    const countryName = p.country_name || p.country?.name || p.country?.country_name || (p.country_id === 2 ? "UAE" : p.country_id === 1 ? "Egypt" : p.country_id === 3 ? "Oman" : "") || "";
    const countryCode = p.country?.code || p.country?.country_code || (countryName.toLowerCase().includes("uae") || p.country_id === 2 ? "AE" : countryName.toLowerCase().includes("egypt") || p.country_id === 1 ? "EG" : countryName.toLowerCase().includes("oman") || p.country_id === 3 ? "OM" : "");
    const developerName = p.developer_name || p.developer?.name || p.developer?.developer_name || (typeof p.developer === "string" ? p.developer : "") || "-";
    const projectCurrency = p.project_currency || p.currency || "";
    const countryCurrency = p.country_currency || "";
    const effectiveCurrency = projectCurrency || countryCurrency || "";
    return {
        ...p,
        id: p.project_id ?? p.id,
        name: p.project_name ?? p.name ?? p.title,
        developer_name: developerName,
        country_name: countryName,
        country_code: countryCode,
        city_name: p.city?.name ?? p.city_name ?? p.city ?? "",
        area_name: p.area?.name ?? p.area_name ?? p.area ?? "",
        price_range: p.price_range ?? p.price ?? "",
        price_range_SQ: p.price_range_SQ ?? p.price_range_sq ?? "",
        project_currency: projectCurrency,
        country_currency: countryCurrency,
        currency: effectiveCurrency,
        country_dimension_unit: p.country_dimension_unit ?? "",
        location_landmark: p.location_landmark ?? "",
        properties_count: p.properties_count ?? p.total_units ?? 0,
        projectType: p.project_type ?? p.type ?? "",
        is_active: Boolean(p.is_active),
        is_favourite: Boolean(p.is_favourite),
        status: p.status ?? "Ongoing",
        created_at: p.created_at ?? ""
    };
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/utils/map-project.ts [app-client] (ecmascript)");
;
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
    getAllProjects: async (search)=>{
        try {
            const params = new URLSearchParams({
                page: "1",
                per_page: "100"
            });
            if (search) params.append("search", search);
            const firstRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/projects?${params.toString()}`);
            const firstData = firstRes?.data ?? firstRes;
            const { itemsArray, totalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackProjectsResponse"])(firstData);
            const perPage = Number(firstData?.per_page || 100);
            const total = Number(totalItems || firstData?.total || itemsArray.length);
            const totalPages = Math.ceil(total / perPage);
            if (!totalPages || totalPages <= 1) {
                return itemsArray;
            }
            const pagePromises = [];
            for(let p = 2; p <= totalPages; p++){
                const pageParams = new URLSearchParams({
                    page: p.toString(),
                    per_page: perPage.toString()
                });
                if (search) pageParams.append("search", search);
                pagePromises.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/projects?${pageParams.toString()}`).catch(()=>null));
            }
            const otherResponses = await Promise.all(pagePromises);
            const allItems = [
                ...itemsArray
            ];
            for (const res of otherResponses){
                if (!res) continue;
                const resData = res?.data ?? res;
                const { itemsArray: batchItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackProjectsResponse"])(resData);
                allItems.push(...batchItems);
            }
            return allItems;
        } catch  {
            return [];
        }
    },
    getProjects: async (page, perPage, search)=>{
        if (page === undefined && perPage === undefined) {
            return AdminPropertiesService.getAllProjects(search);
        }
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "4b6ae03ebf2a0eda6cacd970872830a44407fcf03554bd1d61759d06f218a7a1") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4b6ae03ebf2a0eda6cacd970872830a44407fcf03554bd1d61759d06f218a7a1";
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
    const resolvedSrc = getFullUrl(src);
    const [failedSrc, setFailedSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imageSrc = failedSrc === resolvedSrc ? fallbackSrc : resolvedSrc;
    const handleError = {
        "SafeImage[handleError]": ()=>{
            if (imageSrc !== fallbackSrc) {
                setFailedSrc(resolvedSrc);
            }
        }
    }["SafeImage[handleError]"];
    const isRemote = imageSrc.startsWith("http://") || imageSrc.startsWith("https://");
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const t3 = "no-referrer";
    const t4 = imageSrc.startsWith("blob:") || imageSrc.startsWith("data:") || isRemote || imageSrc.toLowerCase().includes(".svg");
    let t5;
    if ($[8] !== T0 || $[9] !== alt || $[10] !== handleError || $[11] !== imageSrc || $[12] !== props || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            ...props,
            src: imageSrc,
            alt: alt,
            onError: handleError,
            referrerPolicy: t3,
            unoptimized: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/safe-image.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = T0;
        $[9] = alt;
        $[10] = handleError;
        $[11] = imageSrc;
        $[12] = props;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(SafeImage, "UStsmCRg2Alb27a1Bss88do17Gw=");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "84965b4a46f361ea5cafbef9879d3b4c23ab09e2c0ad62f014a8aa3a2e37d101") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84965b4a46f361ea5cafbef9879d3b4c23ab09e2c0ad62f014a8aa3a2e37d101";
    }
    const { medias, projectMedias, propertyName } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[1] !== t) {
        t1 = ({
            "PropertyMedia[handleCopy]": (url)=>{
                if (!url) {
                    return;
                }
                navigator.clipboard.writeText(url);
                setCopiedUrl(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.media.urlCopied"));
                setTimeout({
                    "PropertyMedia[handleCopy > setTimeout()]": ()=>{
                        setCopiedUrl(null);
                    }
                }["PropertyMedia[handleCopy > setTimeout()]"], 2500);
            }
        })["PropertyMedia[handleCopy]"];
        $[1] = t;
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
                        lineNumber: 109,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 109,
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
                                title: t("properties.media.copyMediaUrl"),
                                children: [
                                    copiedUrl === activeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-3.5 h-3.5 text-teal-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 111,
                                        columnNumber: 255
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 111,
                                        columnNumber: 305
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: copiedUrl === activeUrl ? t("properties.media.copied") : t("properties.media.copyUrl")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 111,
                                        columnNumber: 338
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 109,
                                columnNumber: 750
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                asChild: true,
                                className: "h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer",
                                title: t("properties.media.openLinkInNewTab"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: activeUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 111,
                                        columnNumber: 769
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 111,
                                    columnNumber: 707
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 111,
                                columnNumber: 477
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                onClick: {
                                    "PropertyMedia[<Button>.onClick]": ()=>setIsLightboxOpen(true)
                                }["PropertyMedia[<Button>.onClick]"],
                                className: "h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer",
                                title: t("properties.media.expandImage"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 113,
                                    columnNumber: 209
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 111,
                                columnNumber: 822
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 109,
                        columnNumber: 606
                    }, this),
                    displayMediaList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handlePrev,
                                className: "absolute start-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10",
                                "aria-label": t("properties.media.previousImage"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 113,
                                    columnNumber: 648
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 113,
                                columnNumber: 292
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNext,
                                className: "absolute end-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10",
                                "aria-label": t("properties.media.nextImage"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-5 h-5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 113,
                                    columnNumber: 1057
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 113,
                                columnNumber: 707
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
                                        lineNumber: 113,
                                        columnNumber: 1289
                                    }, this),
                                    activeMedia?.is_primary === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "bg-teal-600 text-white border-none text-[11px] px-2 py-0.5",
                                        children: t("properties.media.primary")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 113,
                                        columnNumber: 1471
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 113,
                                columnNumber: 1248
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
                                lineNumber: 113,
                                columnNumber: 1595
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 113,
                        columnNumber: 1121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 109,
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
                                alt: t("properties.media.thumbnailAlt", {
                                    index: index + 1
                                }),
                                fill: true,
                                className: "object-cover",
                                fallbackSrc: "/images/default-logo.svg",
                                sizes: "96px"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 124,
                                columnNumber: 383
                            }, this)
                        }, media.media_id ?? index, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                            lineNumber: 122,
                            columnNumber: 18
                        }, this);
                    }
                }["PropertyMedia[displayMediaList.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 118,
                columnNumber: 125
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 109,
        columnNumber: 44
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-[16/10] sm:aspect-[16/9] bg-muted/30 dark:bg-neutral-800/30 flex flex-col items-center justify-center rounded-lg text-center p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                className: "h-14 w-14 text-muted-foreground/30 mb-2"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 128,
                columnNumber: 220
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-gray-500 dark:text-gray-400",
                children: t("properties.media.noMedia")
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 128,
                columnNumber: 285
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 128,
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
                lineNumber: 131,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 131,
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
                                    lineNumber: 137,
                                    columnNumber: 430
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 137,
                                columnNumber: 297
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                                        children: t("properties.media.mediaUrlsTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 137,
                                        columnNumber: 474
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: t("properties.media.mediaUrlsSubtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                        lineNumber: 137,
                                        columnNumber: 604
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                lineNumber: 137,
                                columnNumber: 469
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 137,
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
                                lineNumber: 137,
                                columnNumber: 762
                            }, this),
                            allMediaList.length,
                            " ",
                            t("properties.media.assets")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                        lineNumber: 137,
                        columnNumber: 717
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 137,
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
                                                alt: t("properties.media.mediaAlt", {
                                                    id: media_0.media_id ?? index_0 + 1
                                                }),
                                                fill: true,
                                                className: "object-cover",
                                                fallbackSrc: "/images/default-logo.svg",
                                                sizes: "56px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                lineNumber: 143,
                                                columnNumber: 540
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 143,
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
                                                            lineNumber: 145,
                                                            columnNumber: 236
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider font-semibold",
                                                            children: mediaType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 336
                                                        }, this),
                                                        isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: "bg-teal-600 text-white text-[10px] px-1.5 py-0 h-4",
                                                            children: t("properties.media.primary")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 475
                                                        }, this),
                                                        media_0.entity_type === "PROJECTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-[10px] px-1.5 py-0 h-4 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 bg-teal-50/50 dark:bg-teal-950/40",
                                                            children: t("properties.media.project")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 624
                                                        }, this),
                                                        media_0.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-gray-400 dark:text-gray-500 hidden sm:inline",
                                                            children: new Date(media_0.created_at).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 856
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 162
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-[11px] font-semibold text-gray-400 shrink-0",
                                                            children: "media_url:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 1052
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
                                                            lineNumber: 145,
                                                            columnNumber: 1151
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 1001
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 145,
                                            columnNumber: 118
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 143,
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
                                                    lineNumber: 149,
                                                    columnNumber: 203
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 272
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isCopied ? t("properties.media.copied") : t("properties.media.copy")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 305
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 147,
                                            columnNumber: 303
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            size: "sm",
                                            variant: "ghost",
                                            asChild: true,
                                            className: "h-8 text-xs px-2 hover:bg-white dark:hover:bg-neutral-800 cursor-pointer text-gray-600 dark:text-gray-300",
                                            title: t("properties.media.openUrl"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: url_0,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 674
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                                lineNumber: 149,
                                                columnNumber: 616
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                            lineNumber: 149,
                                            columnNumber: 397
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                                    lineNumber: 147,
                                    columnNumber: 122
                                }, this)
                            ]
                        }, media_0.media_id ?? index_0, true, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                            lineNumber: 143,
                            columnNumber: 18
                        }, this);
                    }
                }["PropertyMedia[allMediaList.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 137,
                columnNumber: 870
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
        lineNumber: 137,
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
                lineNumber: 155,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 155,
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
    if ($[9] !== t) {
        t8 = t("properties.media.fullSizeAlt");
        $[9] = t;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== activeUrl || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/90 mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: activeUrl,
                alt: t8,
                fill: true,
                className: "object-contain",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 1200px) 100vw, 1200px"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 173,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[11] = activeUrl;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== activeUrl) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 font-mono truncate select-all max-w-md",
            children: activeUrl
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[14] = activeUrl;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== activeUrl || $[17] !== handleCopy) {
        t11 = ({
            "PropertyMedia[<Button>.onClick]": ()=>handleCopy(activeUrl)
        })["PropertyMedia[<Button>.onClick]"];
        $[16] = activeUrl;
        $[17] = handleCopy;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== activeUrl || $[20] !== copiedUrl) {
        t12 = copiedUrl === activeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-3.5 h-3.5 text-teal-600 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 201,
            columnNumber: 37
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 201,
            columnNumber: 92
        }, this);
        $[19] = activeUrl;
        $[20] = copiedUrl;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== activeUrl || $[23] !== copiedUrl || $[24] !== t) {
        t13 = copiedUrl === activeUrl ? t("properties.media.copied") : t("properties.media.copyUrl");
        $[22] = activeUrl;
        $[23] = copiedUrl;
        $[24] = t;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t11 || $[27] !== t12 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: t11,
            className: "h-8 text-xs dark:border-neutral-700",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t) {
        t16 = t("properties.media.openOriginal");
        $[31] = t;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== activeUrl || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            asChild: true,
            className: "h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: activeUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
                lineNumber: 245,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[33] = activeUrl;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t14 || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 shrink-0",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t10 || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2",
            children: [
                t10,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t19 || $[43] !== t7 || $[44] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-full p-4 dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t7,
                t9,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t7;
        $[44] = t9;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== isLightboxOpen || $[47] !== setIsLightboxOpen || $[48] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isLightboxOpen,
            onOpenChange: setIsLightboxOpen,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[46] = isLightboxOpen;
        $[47] = setIsLightboxOpen;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== t21 || $[51] !== t4 || $[52] !== t5) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t4,
                t5,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyMedia.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[50] = t21;
        $[51] = t4;
        $[52] = t5;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    return t22;
}
_s(PropertyMedia, "8vmyGgjF0JC902AxFzmUYmH0FGk=", false, function() {
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
    if ($[0] !== "97005a96843719669077900d4524633b21f525d5c5a4b27d7aa30f59163e4674") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97005a96843719669077900d4524633b21f525d5c5a4b27d7aa30f59163e4674";
    }
    const { description } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== description || $[2] !== t) {
        t1 = description?.trim() || t("properties.details.noDescription");
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
        t3 = t("properties.details.description");
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StatCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9a7a72c8bbeda59f387765af520507d13b259500bda0b2ff3619bdf3b2aa30f2") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a7a72c8bbeda59f387765af520507d13b259500bda0b2ff3619bdf3b2aa30f2";
    }
    const { icon, label, value } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 41,
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
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t || $[6] !== value) {
        t3 = value || t("common.na");
        $[5] = t;
        $[6] = value;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate mt-0.5",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t1 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-800/40 hover:border-teal-200 dark:hover:border-teal-800/50 hover:bg-white dark:hover:bg-neutral-800/80 transition-all duration-200",
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s(StatCard, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = StatCard;
function PropertyInfo(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "9a7a72c8bbeda59f387765af520507d13b259500bda0b2ff3619bdf3b2aa30f2") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a7a72c8bbeda59f387765af520507d13b259500bda0b2ff3619bdf3b2aa30f2";
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
                lineNumber: 116,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("properties.create.unitDetails.title");
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
                        lineNumber: 131,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
                lineNumber: 131,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 131,
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
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t) {
        t5 = t("properties.create.unitDetails.bedrooms");
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
            lineNumber: 154,
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
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t) {
        t8 = t("properties.create.unitDetails.bathrooms");
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
            lineNumber: 178,
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
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t) {
        t11 = t("properties.create.unitDetails.unitSize");
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
            lineNumber: 203,
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
                lineNumber: 212,
                columnNumber: 47
            }, void 0),
            label: t("properties.create.unitDetails.builtSize"),
            value: `${bua_size} m²`
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 212,
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
                lineNumber: 221,
                columnNumber: 48
            }, void 0),
            label: t("properties.create.unitDetails.plotSize"),
            value: `${plot_size} m²`
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 221,
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
                lineNumber: 230,
                columnNumber: 44
            }, void 0),
            label: t("properties.create.unitDetails.floor"),
            value: floor
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 230,
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
                lineNumber: 239,
                columnNumber: 53
            }, void 0),
            label: t("properties.create.license.parkingSpaces"),
            value: parking_spaces
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 239,
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
                lineNumber: 248,
                columnNumber: 48
            }, void 0),
            label: t("properties.create.unitDetails.maidRoom"),
            value: isMaidRoomTrue ? t("common.yes") : t("common.no")
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 248,
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
                lineNumber: 258,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyInfo.tsx",
            lineNumber: 258,
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
            lineNumber: 273,
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
_s1(PropertyInfo, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "fdce4e8c6f252c5c86a7757f5a9decba7b6738b7011cac0930f81aca499e6ba8") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdce4e8c6f252c5c86a7757f5a9decba7b6738b7011cac0930f81aca499e6ba8";
    }
    const { features } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
                lineNumber: 39,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("properties.details.featuresAmenities");
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
                    lineNumber: 54,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = features.length;
    let t5;
    if ($[6] !== t) {
        t5 = t("properties.details.featuresCountLabel");
        $[6] = t;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== features.length || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-xs font-normal",
            children: [
                t4,
                " ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = features.length;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t3 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== features || $[15] !== t) {
        let t9;
        if ($[17] !== t) {
            t9 = ({
                "PropertyFeatures[features.map()]": (feature, idx)=>{
                    const label = feature.feature_name || feature.name || (typeof feature.value === "string" && !feature.name ? feature.value : null) || feature.title || t("properties.details.featureFallback", {
                        id: feature.feature_id ?? idx + 1
                    });
                    const customValue = feature.value && feature.value !== label ? String(feature.value) : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-gray-50 hover:bg-teal-50/50 dark:bg-neutral-800/60 dark:hover:bg-teal-950/30 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-neutral-700/80 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 97,
                                columnNumber: 352
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-[200px] sm:max-w-xs",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 97,
                                columnNumber: 434
                            }, this),
                            customValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-1.5 py-0.5 rounded bg-white dark:bg-neutral-700/80 text-teal-700 dark:text-teal-300 font-normal border border-gray-200 dark:border-neutral-600",
                                children: customValue
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                                lineNumber: 97,
                                columnNumber: 517
                            }, this)
                        ]
                    }, feature.feature_id ?? feature.id ?? idx, true, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                        lineNumber: 97,
                        columnNumber: 18
                    }, this);
                }
            })["PropertyFeatures[features.map()]"];
            $[17] = t;
            $[18] = t9;
        } else {
            t9 = $[18];
        }
        t8 = features.map(t9);
        $[14] = features;
        $[15] = t;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 sm:gap-2.5",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
                lineNumber: 114,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t7 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFeatures.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[21] = t7;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    return t10;
}
_s(PropertyFeatures, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
    "extractPaymentPlans",
    ()=>extractPaymentPlans,
    "getCreatedPlanId",
    ()=>getCreatedPlanId,
    "getInstallmentItemType",
    ()=>getInstallmentItemType,
    "getPaymentPlanItemTypeLabel",
    ()=>getPaymentPlanItemTypeLabel,
    "toPaymentPlanView",
    ()=>toPaymentPlanView
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
function getPaymentPlanItemTypeLabel(type, t) {
    const option = PAYMENT_PLAN_ITEM_TYPES.find((o)=>o.value.toLowerCase() === type.toLowerCase());
    return option ? t(option.labelKey) : type;
}
/**
 * Maps a draft plan period to one of the installment types the API accepts
 * (the same list offered by the project "Add payment plan" modal).
 */ const PERIOD_ITEM_TYPE = {
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
/** Months between payments for each draft period, used to estimate `period_by_years` when it isn't set. */ const PERIOD_MONTHS = {
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
        ...plan.payment_plan_type?.trim() ? {
            payment_plan_type: plan.payment_plan_type.trim()
        } : {},
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
    "monthly installment": "Monthly",
    "quarterly installment": "Quarterly",
    "half year installment": "Semi-Annually",
    "yearly installment": "Yearly",
    "installments before handover": "During Construction",
    "installments after handover": "Post Handover (2 Years)"
};
function draftFromPlanItems(items) {
    const byType = (type)=>items.filter((i)=>i.type.toLowerCase() === type);
    const sum = (rows)=>rows.reduce((total, row)=>total + row.percentage, 0);
    const installment = items.find((i)=>ITEM_TYPE_PERIOD[i.type.toLowerCase()]);
    return {
        down_payment_percentage: sum(byType("down payment")),
        handover_percentage: sum(byType("handover installment")),
        installments_count: installment?.intervals || 1,
        period: installment ? ITEM_TYPE_PERIOD[installment.type.toLowerCase()] : "Immediate"
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
            items: (Array.isArray(rawItems) ? rawItems : []).map((item, itemIndex)=>({
                    id: String(item?.payment_plan_item_id ?? item?.id ?? `item-${itemIndex}`),
                    type: item?.type ?? "",
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
    if ($[0] !== "91588273ba3c98ae6702173bdb5fb451cf3bf417a41352056fb2cbdd6c29ba0f") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91588273ba3c98ae6702173bdb5fb451cf3bf417a41352056fb2cbdd6c29ba0f";
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
    if ($[0] !== "91588273ba3c98ae6702173bdb5fb451cf3bf417a41352056fb2cbdd6c29ba0f") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91588273ba3c98ae6702173bdb5fb451cf3bf417a41352056fb2cbdd6c29ba0f";
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
    "paymentPlanQueryKey",
    ()=>paymentPlanQueryKey,
    "usePaymentPlanActions",
    ()=>usePaymentPlanActions,
    "usePaymentPlanDetail",
    ()=>usePaymentPlanDetail,
    "usePaymentPlansById",
    ()=>usePaymentPlansById
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
function usePaymentPlanDetail(paymentPlanId, enabled) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7";
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
}
_s(usePaymentPlanDetail, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePaymentPlansById(summaries) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7";
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
    if ($[8] !== results || $[9] !== summaries) {
        let t3;
        if ($[11] !== results) {
            t3 = ({
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
            $[11] = results;
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        t2 = summaries.map(t3);
        $[8] = results;
        $[9] = summaries;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const plans = t2;
    let t3;
    if ($[13] !== results) {
        t3 = results.some(_usePaymentPlansByIdResultsSome);
        $[13] = results;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== plans || $[16] !== t3) {
        t4 = {
            plans,
            isLoading: t3
        };
        $[15] = plans;
        $[16] = t3;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    return t4;
}
_s1(usePaymentPlansById, "UPFLPQ6mIw+x7w6uLpPQPSZSbaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueries"]
    ];
});
/** PATCH /dashboard/paymentPlans/:id */ function _usePaymentPlansByIdResultsSome(r) {
    return r.isLoading;
}
function usePaymentPlanActions() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26810ef1ceb672844ed08bdbe9435392538a2f186c8c607e1b8b4beaad487bd7";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== session?.user?.accessToken) {
        t0 = async (t1)=>{
            const { paymentId, data } = t1;
            const token = session?.user?.accessToken;
            if (!token) {
                throw new Error("Not authenticated");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editProjectPayment"])(paymentId, data, token);
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
_s2(usePaymentPlanActions, "G+TmEuOko5X+wqqjFpE/44TDSuw=", false, function() {
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
    if ($[0] !== "8ba1ad77bf76dbb81d87244878e4742cc27e69ce87ee7d1483040a4e017c71fd") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ba1ad77bf76dbb81d87244878e4742cc27e69ce87ee7d1483040a4e017c71fd";
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
function EditPaymentPlanModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "b889c2ad5d86d20d43bec25151508ba6b2afe462b0aa363629e5bdc505f3a0a7") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b889c2ad5d86d20d43bec25151508ba6b2afe462b0aa363629e5bdc505f3a0a7";
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
                lineNumber: 54,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 54,
            columnNumber: 22
        }, this) : isError || !plan || !paymentPlanId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-10 text-center text-sm text-gray-500 dark:text-gray-400",
            children: t("paymentPlansView.loadFailed")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 54,
            columnNumber: 169
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditPaymentPlanForm, {
            plan: plan,
            paymentPlanId: paymentPlanId,
            onDone: onClose
        }, plan.id, false, {
            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
            lineNumber: 54,
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
            lineNumber: 67,
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
    const [planType, setPlanType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(plan.paymentPlanType ?? "");
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
                    } : {},
                    paymentplanitems: rows.map((r_2)=>({
                            ...r_2.paymentPlanItemId ? {
                                payment_plan_item_id: r_2.paymentPlanItemId
                            } : {},
                            type: r_2.type,
                            percentage: Number(r_2.percentage),
                            intervals: Number(r_2.intervals)
                        }))
                }
            });
            onDone();
        } catch  {
        // The error toast is shown by the shared API error handler.
        }
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
                                lineNumber: 172,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 171,
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
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "edit_plan_type",
                        children: t("paymentPlansView.planType")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "edit_plan_type",
                        value: planType,
                        onChange: (e_1)=>setPlanType(e_1.target.value),
                        placeholder: t("paymentPlansView.planTypePlaceholder"),
                        className: "mt-1 text-xs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "edit_plan_description",
                        children: t("paymentPlansView.description")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "edit_plan_description",
                        value: description,
                        onChange: (e_2)=>setDescription(e_2.target.value),
                        rows: 2,
                        className: "mt-1 text-xs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 182,
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
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "edit_plan_total",
                                type: "number",
                                min: "0",
                                step: "any",
                                value: totalCost,
                                onChange: (e_3)=>setTotalCost(e_3.target.value),
                                className: "mt-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "edit_plan_period",
                                children: t("paymentPlansView.periodByYears")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "edit_plan_period",
                                type: "number",
                                min: "0",
                                value: periodByYears,
                                onChange: (e_4)=>setPeriodByYears(e_4.target.value),
                                className: "mt-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                children: t("paymentPlansView.status")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 197,
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
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "active",
                                                children: t("common.active")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "inactive",
                                                children: t("common.inactive")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 187,
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
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border", Math.round(totalPercentage) === 100 ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700" : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    t("paymentPlansView.total", {
                                        percentage: totalPercentage
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 211,
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
                                                lineNumber: 224,
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
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            row.type && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_PLAN_ITEM_TYPES"].some((o)=>o.value === row.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: row.type,
                                                                children: row.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 94
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_PLAN_ITEM_TYPES"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: option.value,
                                                                    children: t(option.labelKey)
                                                                }, option.value, false, {
                                                                    fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 60
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 223,
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
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                min: "0",
                                                step: "any",
                                                value: row.percentage,
                                                onChange: (e_5)=>updateRow(row.key, {
                                                        percentage: e_5.target.value
                                                    }),
                                                className: "mt-1 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 240,
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
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                min: "1",
                                                value: row.intervals,
                                                onChange: (e_6)=>updateRow(row.key, {
                                                        intervals: e_6.target.value
                                                    }),
                                                className: "mt-1 text-xs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 sm:col-span-1 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.key, true, {
                                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                                lineNumber: 222,
                                columnNumber: 28
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 221,
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
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            t("paymentPlansView.addItem")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 210,
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
                        lineNumber: 272,
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
                                lineNumber: 276,
                                columnNumber: 26
                            }, this),
                            isUpdating ? t("common.saving") : t("common.save")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals/payment-plans/edit-payment-plan-modal.tsx",
        lineNumber: 169,
        columnNumber: 10
    }, this);
}
_s1(EditPaymentPlanForm, "39qPglqXNccdjNa0EU3NslQOj9I=", false, function() {
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
    if ($[0] !== "49f36bf53e35b6b10961a8a9fe79ce4bbcc267a92809f514b1c8f909a5477963") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49f36bf53e35b6b10961a8a9fe79ce4bbcc267a92809f514b1c8f909a5477963";
    }
    const { plans: summaries, currency } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { plans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansById"])(summaries);
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
                lineNumber: 41,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 41,
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
                    lineNumber: 56,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 56,
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
            lineNumber: 64,
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
            lineNumber: 75,
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
                                lineNumber: 87,
                                columnNumber: 89
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                            lineNumber: 85,
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
                                lineNumber: 89,
                                columnNumber: 89
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
                            lineNumber: 87,
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
                lineNumber: 98,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx",
            lineNumber: 98,
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
            lineNumber: 108,
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
            lineNumber: 124,
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
            lineNumber: 134,
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
_s(PropertyPaymentPlans, "2PWsEASr+niPOL7Snkx9nihw5FI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansById"]
    ];
});
_c = PropertyPaymentPlans;
var _c;
__turbopack_context__.k.register(_c, "PropertyPaymentPlans");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(113);
    if ($[0] !== "3c9930811b8509b7ae2968b5ecbce12d2f4a49e6c086ff36e0dfff5d4220c6b2") {
        for(let $i = 0; $i < 113; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c9930811b8509b7ae2968b5ecbce12d2f4a49e6c086ff36e0dfff5d4220c6b2";
    }
    const { floorPlanUrl } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[3] !== cleanUrl || $[4] !== t) {
        t2 = ({
            "PropertyFloorPlan[handleCopy]": ()=>{
                navigator.clipboard.writeText(cleanUrl);
                setIsCopied(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.floorPlan.urlCopied"));
                setTimeout({
                    "PropertyFloorPlan[handleCopy > setTimeout()]": ()=>setIsCopied(false)
                }["PropertyFloorPlan[handleCopy > setTimeout()]"], 2500);
            }
        })["PropertyFloorPlan[handleCopy]"];
        $[3] = cleanUrl;
        $[4] = t;
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
                lineNumber: 64,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("properties.create.floorPlan.title");
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
                    lineNumber: 79,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 79,
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
            lineNumber: 87,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 87,
            columnNumber: 90
        }, this);
        $[11] = isCopied;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== isCopied || $[14] !== t) {
        t7 = isCopied ? t("properties.media.copied") : t("properties.media.copyUrl");
        $[13] = isCopied;
        $[14] = t;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== handleCopy || $[19] !== t6 || $[20] !== t8) {
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
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[18] = handleCopy;
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t) {
        t10 = t("properties.floorPlan.openInNewTab");
        $[22] = t;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== cleanUrl) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: cleanUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[25] = cleanUrl;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t10 || $[28] !== t12) {
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
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13 || $[31] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t9;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t14 || $[34] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: [
                t5,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t5;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "PropertyFloorPlan[<button>.onClick]": ()=>setIsDialogOpen(true)
        })["PropertyFloorPlan[<button>.onClick]"];
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t) {
        t17 = t("properties.floorPlan.clickToExpandTitle");
        $[37] = t;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t) {
        t18 = t("properties.create.floorPlan.title");
        $[39] = t;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== cleanUrl || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-[16/10] sm:aspect-[16/9]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: cleanUrl,
                alt: t18,
                fill: true,
                className: "object-contain p-3 sm:p-4",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 768px) 100vw, 66vw"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 197,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[41] = cleanUrl;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t) {
        t21 = t("properties.floorPlan.expandPlan");
        $[45] = t;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/0 group-hover:bg-black/15 dark:group-hover:bg-black/30 transition-colors flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-neutral-900/95 rounded-full p-2.5 shadow-lg backdrop-blur-xs flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-200",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t21
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                        lineNumber: 221,
                        columnNumber: 395
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 221,
                columnNumber: 160
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t17 || $[50] !== t19 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t16,
            className: "group relative w-full overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50/60 dark:bg-neutral-800/40 cursor-zoom-in transition-all hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-md block",
            title: t17,
            children: [
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[49] = t17;
        $[50] = t19;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t) {
        t24 = t("properties.floorPlan.clickToExpand");
        $[53] = t;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[55] = t24;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-semibold text-gray-400 shrink-0",
            children: "URL:"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== cleanUrl || $[59] !== handleCopy) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 min-w-0",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "font-mono text-[11px] text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/50 dark:border-teal-800/50 px-2 py-0.5 rounded truncate max-w-[260px] sm:max-w-xs md:max-w-md select-all cursor-pointer",
                    onClick: handleCopy,
                    title: cleanUrl,
                    children: cleanUrl
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                    lineNumber: 262,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[58] = cleanUrl;
        $[59] = handleCopy;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    let t28;
    if ($[61] !== t25 || $[62] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 pt-1",
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[61] = t25;
        $[62] = t27;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== t23 || $[65] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5 space-y-3",
            children: [
                t23,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[64] = t23;
        $[65] = t28;
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t15 || $[68] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t15,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[67] = t15;
        $[68] = t29;
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] !== t) {
        t32 = t("properties.create.floorPlan.title");
        $[71] = t;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "flex items-center gap-2 text-gray-900 dark:text-gray-100 text-base sm:text-lg",
                children: [
                    t31,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 313,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[73] = t32;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[75] !== t) {
        t34 = t("properties.floorPlan.fullSizeAlt");
        $[75] = t;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    let t35;
    if ($[77] !== cleanUrl || $[78] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800/80 mt-2 border border-gray-100 dark:border-neutral-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
                src: cleanUrl,
                alt: t34,
                fill: true,
                className: "object-contain p-2 sm:p-4",
                fallbackSrc: "/images/default-logo.svg",
                sizes: "(max-width: 1200px) 95vw, 1200px"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 329,
                columnNumber: 189
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[77] = cleanUrl;
        $[78] = t34;
        $[79] = t35;
    } else {
        t35 = $[79];
    }
    let t36;
    if ($[80] !== cleanUrl) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            className: "text-xs font-mono text-gray-500 truncate max-w-sm sm:max-w-md select-all",
            children: cleanUrl
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[80] = cleanUrl;
        $[81] = t36;
    } else {
        t36 = $[81];
    }
    let t37;
    if ($[82] !== isCopied) {
        t37 = isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-3.5 h-3.5 text-teal-600 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 346,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 346,
            columnNumber: 77
        }, this);
        $[82] = isCopied;
        $[83] = t37;
    } else {
        t37 = $[83];
    }
    let t38;
    if ($[84] !== isCopied || $[85] !== t) {
        t38 = isCopied ? t("properties.media.copied") : t("properties.media.copyUrl");
        $[84] = isCopied;
        $[85] = t;
        $[86] = t38;
    } else {
        t38 = $[86];
    }
    let t39;
    if ($[87] !== handleCopy || $[88] !== t37 || $[89] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: handleCopy,
            className: "h-8 text-xs dark:border-neutral-700",
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[87] = handleCopy;
        $[88] = t37;
        $[89] = t38;
        $[90] = t39;
    } else {
        t39 = $[90];
    }
    let t40;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
            className: "w-3.5 h-3.5 me-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[91] = t40;
    } else {
        t40 = $[91];
    }
    let t41;
    if ($[92] !== t) {
        t41 = t("properties.media.openOriginal");
        $[92] = t;
        $[93] = t41;
    } else {
        t41 = $[93];
    }
    let t42;
    if ($[94] !== cleanUrl || $[95] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            asChild: true,
            className: "h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cleanUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    t40,
                    t41
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
                lineNumber: 388,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[94] = cleanUrl;
        $[95] = t41;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    let t43;
    if ($[97] !== t39 || $[98] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 shrink-0 self-end sm:self-auto",
            children: [
                t39,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[97] = t39;
        $[98] = t42;
        $[99] = t43;
    } else {
        t43 = $[99];
    }
    let t44;
    if ($[100] !== t36 || $[101] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2",
            children: [
                t36,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[100] = t36;
        $[101] = t43;
        $[102] = t44;
    } else {
        t44 = $[102];
    }
    let t45;
    if ($[103] !== t33 || $[104] !== t35 || $[105] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-[95vw] p-4 sm:p-6 dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t33,
                t35,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[103] = t33;
        $[104] = t35;
        $[105] = t44;
        $[106] = t45;
    } else {
        t45 = $[106];
    }
    let t46;
    if ($[107] !== isDialogOpen || $[108] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isDialogOpen,
            onOpenChange: setIsDialogOpen,
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertyFloorPlan.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[107] = isDialogOpen;
        $[108] = t45;
        $[109] = t46;
    } else {
        t46 = $[109];
    }
    let t47;
    if ($[110] !== t30 || $[111] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t30,
                t46
            ]
        }, void 0, true);
        $[110] = t30;
        $[111] = t46;
        $[112] = t47;
    } else {
        t47 = $[112];
    }
    return t47;
}
_s(PropertyFloorPlan, "xCOHfkOD7ky0VUFpNmrcYwnhUaU=", false, function() {
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
    if ($[0] !== "0440e9294e2f2771a3b2342d8678635d17112d4ca2ca6244a6ae958fd5b0d644") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0440e9294e2f2771a3b2342d8678635d17112d4ca2ca6244a6ae958fd5b0d644";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(194);
    if ($[0] !== "0440e9294e2f2771a3b2342d8678635d17112d4ca2ca6244a6ae958fd5b0d644") {
        for(let $i = 0; $i < 194; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0440e9294e2f2771a3b2342d8678635d17112d4ca2ca6244a6ae958fd5b0d644";
    }
    const { property } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[22] !== t) {
        t8 = ({
            "PropertySidebar[handleShare]": ()=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    navigator.clipboard.writeText(window.location.href);
                    setIsCopiedLink(true);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.details.linkCopiedToast"));
                    setTimeout({
                        "PropertySidebar[handleShare > setTimeout()]": ()=>setIsCopiedLink(false)
                    }["PropertySidebar[handleShare > setTimeout()]"], 2500);
                }
            }
        })["PropertySidebar[handleShare]"];
        $[22] = t;
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
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t) {
        t10 = t("properties.details.price");
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
            lineNumber: 184,
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
            lineNumber: 193,
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
                lineNumber: 202,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== currencyLabel || $[36] !== property.price || $[37] !== t) {
        t15 = property.price ? `${currencyLabel} ${Number(property.price).toLocaleString()}` : t("common.na");
        $[35] = currencyLabel;
        $[36] = property.price;
        $[37] = t;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    let t16;
    if ($[39] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[39] = t15;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== propertyType?.name || $[42] !== t) {
        t17 = propertyType?.name ?? t("properties.title");
        $[41] = propertyType?.name;
        $[42] = t;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t16 || $[47] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[46] = t16;
        $[47] = t18;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== currencyLabel || $[50] !== property.price_per_m2) {
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
                lineNumber: 255,
                columnNumber: 243
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 255,
            columnNumber: 36
        }, this);
        $[49] = currencyLabel;
        $[50] = property.price_per_m2;
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    let t21;
    if ($[52] !== t19 || $[53] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-3 pb-5",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[52] = t19;
        $[53] = t20;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    let t22;
    if ($[55] !== t14 || $[56] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-teal-500/20 dark:border-teal-500/30 bg-gradient-to-br from-white via-teal-50/20 to-white dark:from-neutral-900 dark:via-teal-950/20 dark:to-neutral-900 shadow-sm overflow-hidden relative",
            children: [
                t9,
                t14,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[55] = t14;
        $[56] = t21;
        $[57] = t22;
    } else {
        t22 = $[57];
    }
    let t23;
    if ($[58] !== t) {
        t23 = t("properties.details.propertyInfo");
        $[58] = t;
        $[59] = t23;
    } else {
        t23 = $[59];
    }
    let t24;
    if ($[60] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 290,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[60] = t23;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== t) {
        t25 = t("properties.create.basicInfo.status");
        $[62] = t;
        $[63] = t25;
    } else {
        t25 = $[63];
    }
    const t26 = property.status === "active" ? "success" : "outline";
    let t27;
    if ($[64] !== statusLabel || $[65] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t26,
            className: "text-xs",
            children: statusLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[64] = statusLabel;
        $[65] = t26;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] !== t25 || $[68] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t25,
            value: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[67] = t25;
        $[68] = t27;
        $[69] = t28;
    } else {
        t28 = $[69];
    }
    let t29;
    if ($[70] !== t) {
        t29 = t("properties.create.basicInfo.constructionStatus");
        $[70] = t;
        $[71] = t29;
    } else {
        t29 = $[71];
    }
    let t30;
    if ($[72] !== constructionLabel || $[73] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t29,
            value: constructionLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[72] = constructionLabel;
        $[73] = t29;
        $[74] = t30;
    } else {
        t30 = $[74];
    }
    let t31;
    if ($[75] !== t) {
        t31 = t("properties.create.unitDetails.furnishStatus");
        $[75] = t;
        $[76] = t31;
    } else {
        t31 = $[76];
    }
    let t32;
    if ($[77] !== furnishLabel || $[78] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t31,
            value: furnishLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[77] = furnishLabel;
        $[78] = t31;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== t) {
        t33 = t("properties.create.unitDetails.finishingType");
        $[80] = t;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== finishingLabel || $[83] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t33,
            value: finishingLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[82] = finishingLabel;
        $[83] = t33;
        $[84] = t34;
    } else {
        t34 = $[84];
    }
    let t35;
    if ($[85] !== t) {
        t35 = t("properties.create.unitDetails.ownershipType");
        $[85] = t;
        $[86] = t35;
    } else {
        t35 = $[86];
    }
    let t36;
    if ($[87] !== ownershipLabel || $[88] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t35,
            value: ownershipLabel
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[87] = ownershipLabel;
        $[88] = t35;
        $[89] = t36;
    } else {
        t36 = $[89];
    }
    let t37;
    if ($[90] !== t) {
        t37 = t("properties.create.basicInfo.propertyType");
        $[90] = t;
        $[91] = t37;
    } else {
        t37 = $[91];
    }
    const t38 = propertyType?.name;
    let t39;
    if ($[92] !== t37 || $[93] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t37,
            value: t38
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[92] = t37;
        $[93] = t38;
        $[94] = t39;
    } else {
        t39 = $[94];
    }
    let t40;
    if ($[95] !== t) {
        t40 = t("properties.create.basicInfo.propertySubtype");
        $[95] = t;
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    const t41 = property.property_subtype?.name;
    let t42;
    if ($[97] !== t40 || $[98] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t40,
            value: t41
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[97] = t40;
        $[98] = t41;
        $[99] = t42;
    } else {
        t42 = $[99];
    }
    let t43;
    if ($[100] !== t) {
        t43 = t("properties.columns.unitNumber");
        $[100] = t;
        $[101] = t43;
    } else {
        t43 = $[101];
    }
    const t44 = property.unit_number || property.property_no;
    let t45;
    if ($[102] !== t43 || $[103] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t43,
            value: t44
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[102] = t43;
        $[103] = t44;
        $[104] = t45;
    } else {
        t45 = $[104];
    }
    let t46;
    if ($[105] !== t) {
        t46 = t("properties.create.license.zoneName");
        $[105] = t;
        $[106] = t46;
    } else {
        t46 = $[106];
    }
    let t47;
    if ($[107] !== property.zone_name || $[108] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t46,
            value: property.zone_name
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 455,
            columnNumber: 11
        }, this);
        $[107] = property.zone_name;
        $[108] = t46;
        $[109] = t47;
    } else {
        t47 = $[109];
    }
    let t48;
    if ($[110] !== t) {
        t48 = t("properties.create.license.referenceListed");
        $[110] = t;
        $[111] = t48;
    } else {
        t48 = $[111];
    }
    let t49;
    if ($[112] !== property.reference_listed || $[113] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t48,
            value: property.reference_listed
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[112] = property.reference_listed;
        $[113] = t48;
        $[114] = t49;
    } else {
        t49 = $[114];
    }
    let t50;
    if ($[115] !== t) {
        t50 = t("properties.create.unitDetails.maidRoom");
        $[115] = t;
        $[116] = t50;
    } else {
        t50 = $[116];
    }
    let t51;
    if ($[117] !== property.maid_room || $[118] !== t) {
        t51 = property.maid_room ? t("common.yes") : t("common.no");
        $[117] = property.maid_room;
        $[118] = t;
        $[119] = t51;
    } else {
        t51 = $[119];
    }
    let t52;
    if ($[120] !== t50 || $[121] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
            label: t50,
            value: t51
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[120] = t50;
        $[121] = t51;
        $[122] = t52;
    } else {
        t52 = $[122];
    }
    let t53;
    if ($[123] !== t28 || $[124] !== t30 || $[125] !== t32 || $[126] !== t34 || $[127] !== t36 || $[128] !== t39 || $[129] !== t42 || $[130] !== t45 || $[131] !== t47 || $[132] !== t49 || $[133] !== t52) {
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
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[123] = t28;
        $[124] = t30;
        $[125] = t32;
        $[126] = t34;
        $[127] = t36;
        $[128] = t39;
        $[129] = t42;
        $[130] = t45;
        $[131] = t47;
        $[132] = t49;
        $[133] = t52;
        $[134] = t53;
    } else {
        t53 = $[134];
    }
    let t54;
    if ($[135] !== t24 || $[136] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t24,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[135] = t24;
        $[136] = t53;
        $[137] = t54;
    } else {
        t54 = $[137];
    }
    let t55;
    if ($[138] !== currencyLabel || $[139] !== project || $[140] !== t) {
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
                            lineNumber: 534,
                            columnNumber: 227
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: t("properties.create.basicInfo.project")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 292
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 534,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("common.name"),
                            value: project.project_name
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 485
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.type"),
                            value: project.project_type
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 550
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.status"),
                            value: project.status
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 627
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalUnits"),
                            value: project.total_units
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 700
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.completion"),
                            value: project.completion_date ? new Date(project.completion_date).toLocaleDateString() : null
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 782
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.priceRange"),
                            value: project.price_range ? `${currencyLabel} ${project.price_range}` : null
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 534,
                            columnNumber: 932
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 534,
                    columnNumber: 439
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 534,
            columnNumber: 22
        }, this);
        $[138] = currencyLabel;
        $[139] = project;
        $[140] = t;
        $[141] = t55;
    } else {
        t55 = $[141];
    }
    let t56;
    if ($[142] !== property.building || $[143] !== t) {
        t56 = property.building && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t("properties.details.building")
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                        lineNumber: 544,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 544,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("common.name"),
                            value: property.building.building_name
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 544,
                            columnNumber: 389
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.columns.type"),
                            value: property.building.building_type
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 544,
                            columnNumber: 465
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalFloors"),
                            value: property.building.total_floors
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 544,
                            columnNumber: 553
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.details.totalUnits"),
                            value: property.building.total_units
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 544,
                            columnNumber: 647
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 544,
                    columnNumber: 343
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 544,
            columnNumber: 32
        }, this);
        $[142] = property.building;
        $[143] = t;
        $[144] = t56;
    } else {
        t56 = $[144];
    }
    let t57;
    if ($[145] !== property.agent_license || $[146] !== property.broker_license || $[147] !== property.dld_barcode || $[148] !== property.dld_permit_number || $[149] !== t) {
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
                            lineNumber: 553,
                            columnNumber: 325
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: t("properties.create.license.title")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 553,
                            columnNumber: 393
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 553,
                    columnNumber: 211
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 sm:p-5 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.brokerLicense"),
                            value: property.broker_license
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 553,
                            columnNumber: 582
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.agentLicense"),
                            value: property.agent_license
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 553,
                            columnNumber: 678
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.dldPermitNumber"),
                            value: property.dld_permit_number
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 553,
                            columnNumber: 772
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                            label: t("properties.create.license.dldBarcode"),
                            value: property.dld_barcode
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                            lineNumber: 553,
                            columnNumber: 873
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                    lineNumber: 553,
                    columnNumber: 536
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 553,
            columnNumber: 120
        }, this);
        $[145] = property.agent_license;
        $[146] = property.broker_license;
        $[147] = property.dld_barcode;
        $[148] = property.dld_permit_number;
        $[149] = t;
        $[150] = t57;
    } else {
        t57 = $[150];
    }
    let t58;
    if ($[151] !== t) {
        t58 = t("properties.details.quickActions");
        $[151] = t;
        $[152] = t58;
    } else {
        t58 = $[152];
    }
    let t59;
    if ($[153] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3 border-b border-gray-100 dark:border-neutral-800/80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t58
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
                lineNumber: 573,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[153] = t58;
        $[154] = t59;
    } else {
        t59 = $[154];
    }
    let t60;
    if ($[155] !== isCopiedLink) {
        t60 = isCopiedLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "me-2 h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 581,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
            className: "me-2 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 581,
            columnNumber: 96
        }, this);
        $[155] = isCopiedLink;
        $[156] = t60;
    } else {
        t60 = $[156];
    }
    let t61;
    if ($[157] !== isCopiedLink || $[158] !== t) {
        t61 = isCopiedLink ? t("properties.details.linkCopied") : t("properties.details.shareLink");
        $[157] = isCopiedLink;
        $[158] = t;
        $[159] = t61;
    } else {
        t61 = $[159];
    }
    let t62;
    if ($[160] !== handleShare || $[161] !== t60 || $[162] !== t61) {
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
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[160] = handleShare;
        $[161] = t60;
        $[162] = t61;
        $[163] = t62;
    } else {
        t62 = $[163];
    }
    let t63;
    if ($[164] !== t) {
        t63 = ({
            "PropertySidebar[<Button>.onClick]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("properties.details.scheduleViewingSoon"))
        })["PropertySidebar[<Button>.onClick]"];
        $[164] = t;
        $[165] = t63;
    } else {
        t63 = $[165];
    }
    let t64;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "me-2 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[166] = t64;
    } else {
        t64 = $[166];
    }
    let t65;
    if ($[167] !== t) {
        t65 = t("properties.details.scheduleViewing");
        $[167] = t;
        $[168] = t65;
    } else {
        t65 = $[168];
    }
    let t66;
    if ($[169] !== t63 || $[170] !== t65) {
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
            lineNumber: 633,
            columnNumber: 11
        }, this);
        $[169] = t63;
        $[170] = t65;
        $[171] = t66;
    } else {
        t66 = $[171];
    }
    let t67;
    if ($[172] !== t) {
        t67 = ({
            "PropertySidebar[<Button>.onClick]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("properties.details.contactAgentSoon"))
        })["PropertySidebar[<Button>.onClick]"];
        $[172] = t;
        $[173] = t67;
    } else {
        t67 = $[173];
    }
    let t68;
    if ($[174] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "me-2 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[174] = t68;
    } else {
        t68 = $[174];
    }
    let t69;
    if ($[175] !== t) {
        t69 = t("properties.details.contactAgent");
        $[175] = t;
        $[176] = t69;
    } else {
        t69 = $[176];
    }
    let t70;
    if ($[177] !== t67 || $[178] !== t69) {
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
            lineNumber: 667,
            columnNumber: 11
        }, this);
        $[177] = t67;
        $[178] = t69;
        $[179] = t70;
    } else {
        t70 = $[179];
    }
    let t71;
    if ($[180] !== t62 || $[181] !== t66 || $[182] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 sm:p-5 space-y-2.5",
            children: [
                t62,
                t66,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[180] = t62;
        $[181] = t66;
        $[182] = t70;
        $[183] = t71;
    } else {
        t71 = $[183];
    }
    let t72;
    if ($[184] !== t59 || $[185] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden",
            children: [
                t59,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/property-details/PropertySidebar.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[184] = t59;
        $[185] = t71;
        $[186] = t72;
    } else {
        t72 = $[186];
    }
    let t73;
    if ($[187] !== t22 || $[188] !== t54 || $[189] !== t55 || $[190] !== t56 || $[191] !== t57 || $[192] !== t72) {
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
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[187] = t22;
        $[188] = t54;
        $[189] = t55;
        $[190] = t56;
        $[191] = t57;
        $[192] = t72;
        $[193] = t73;
    } else {
        t73 = $[193];
    }
    return t73;
}
_s(PropertySidebar, "PpWWI80DGCx3sZDuHlWGCpyAdNA=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyPaymentPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/property-details/PropertyPaymentPlans.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
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
;
;
function PropertyDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(174);
    if ($[0] !== "e9e7856ce0b92dc10099b12273fa9cfc6a67e6fe997f0612994689de174f159d") {
        for(let $i = 0; $i < 174; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9e7856ce0b92dc10099b12273fa9cfc6a67e6fe997f0612994689de174f159d";
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
            t6 = t("common.loading");
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
                lineNumber: 120,
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
                lineNumber: 132,
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
                lineNumber: 143,
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
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    let t11;
    if ($[38] !== t) {
        t11 = t("properties.title");
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
            lineNumber: 215,
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
            lineNumber: 223,
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
            lineNumber: 232,
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
            lineNumber: 239,
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
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[48] = t13;
        $[49] = t15;
        $[50] = t16;
    } else {
        t16 = $[50];
    }
    let t17;
    if ($[51] !== property_0.property_id || $[52] !== t) {
        t17 = property_0.property_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-xs text-gray-600 dark:text-gray-400 font-mono",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t("properties.details.id"),
                        ":"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 256,
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
                    lineNumber: 256,
                    columnNumber: 230
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 256,
            columnNumber: 37
        }, this);
        $[51] = property_0.property_id;
        $[52] = t;
        $[53] = t17;
    } else {
        t17 = $[53];
    }
    let t18;
    if ($[54] !== t16 || $[55] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-gray-200 dark:border-neutral-800",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[54] = t16;
        $[55] = t17;
        $[56] = t18;
    } else {
        t18 = $[56];
    }
    let t19;
    if ($[57] !== property_0.property_name) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 truncate",
            children: property_0.property_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[57] = property_0.property_name;
        $[58] = t19;
    } else {
        t19 = $[58];
    }
    let t20;
    if ($[59] !== property_0.area_name) {
        t20 = property_0.area_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 282,
                    columnNumber: 126
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: property_0.area_name
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                    lineNumber: 282,
                    columnNumber: 202
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 282,
            columnNumber: 35
        }, this);
        $[59] = property_0.area_name;
        $[60] = t20;
    } else {
        t20 = $[60];
    }
    const t21 = property_0.availability_status === "available" ? "success" : property_0.availability_status === "sold" ? "destructive" : "warning";
    let t22;
    if ($[61] !== availabilityLabel || $[62] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t21,
            className: "text-xs font-semibold px-2.5 py-0.5",
            children: availabilityLabel
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[61] = availabilityLabel;
        $[62] = t21;
        $[63] = t22;
    } else {
        t22 = $[63];
    }
    let t23;
    if ($[64] !== property_0.unit_number || $[65] !== t) {
        t23 = property_0.unit_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-xs font-mono",
            children: [
                t("properties.columns.unitNumber"),
                ": ",
                property_0.unit_number
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 300,
            columnNumber: 37
        }, this);
        $[64] = property_0.unit_number;
        $[65] = t;
        $[66] = t23;
    } else {
        t23 = $[66];
    }
    let t24;
    if ($[67] !== t20 || $[68] !== t22 || $[69] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 flex-wrap",
            children: [
                t20,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[67] = t20;
        $[68] = t22;
        $[69] = t23;
        $[70] = t24;
    } else {
        t24 = $[70];
    }
    let t25;
    if ($[71] !== t19 || $[72] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 min-w-0",
            children: [
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[71] = t19;
        $[72] = t24;
        $[73] = t25;
    } else {
        t25 = $[73];
    }
    let t26;
    if ($[74] !== id || $[75] !== routePrefix || $[76] !== router) {
        t26 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>router.push(`${routePrefix}/properties/${id}/edit`)
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[74] = id;
        $[75] = routePrefix;
        $[76] = router;
        $[77] = t26;
    } else {
        t26 = $[77];
    }
    let t27;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[78] = t27;
    } else {
        t27 = $[78];
    }
    let t28;
    if ($[79] !== t) {
        t28 = t("properties.breadcrumbs.edit");
        $[79] = t;
        $[80] = t28;
    } else {
        t28 = $[80];
    }
    let t29;
    if ($[81] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[81] = t28;
        $[82] = t29;
    } else {
        t29 = $[82];
    }
    let t30;
    if ($[83] !== t26 || $[84] !== t29) {
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
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[83] = t26;
        $[84] = t29;
        $[85] = t30;
    } else {
        t30 = $[85];
    }
    let t31;
    let t32;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>setDeleteDialogOpen(true)
        })["PropertyDetailsPage[<Button>.onClick]"];
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[86] = t31;
        $[87] = t32;
    } else {
        t31 = $[86];
        t32 = $[87];
    }
    let t33;
    if ($[88] !== t) {
        t33 = t("common.delete");
        $[88] = t;
        $[89] = t33;
    } else {
        t33 = $[89];
    }
    let t34;
    if ($[90] !== t33) {
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
                    lineNumber: 393,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[90] = t33;
        $[91] = t34;
    } else {
        t34 = $[91];
    }
    let t35;
    if ($[92] !== t30 || $[93] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5 w-full sm:w-auto shrink-0",
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[92] = t30;
        $[93] = t34;
        $[94] = t35;
    } else {
        t35 = $[94];
    }
    let t36;
    if ($[95] !== t25 || $[96] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t25,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[95] = t25;
        $[96] = t35;
        $[97] = t36;
    } else {
        t36 = $[97];
    }
    let t37;
    if ($[98] !== projectMedias || $[99] !== property_0.medias || $[100] !== property_0.property_name) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyMedia"], {
            medias: property_0.medias,
            projectMedias: projectMedias,
            propertyName: property_0.property_name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[98] = projectMedias;
        $[99] = property_0.medias;
        $[100] = property_0.property_name;
        $[101] = t37;
    } else {
        t37 = $[101];
    }
    let t38;
    if ($[102] !== descriptionHtml) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyDescription"], {
            description: descriptionHtml
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[102] = descriptionHtml;
        $[103] = t38;
    } else {
        t38 = $[103];
    }
    let t39;
    if ($[104] !== property_0.bathrooms || $[105] !== property_0.bedrooms || $[106] !== property_0.bua_size || $[107] !== property_0.floor || $[108] !== property_0.maid_room || $[109] !== property_0.parking_spaces || $[110] !== property_0.plot_size || $[111] !== property_0.size) {
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
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[104] = property_0.bathrooms;
        $[105] = property_0.bedrooms;
        $[106] = property_0.bua_size;
        $[107] = property_0.floor;
        $[108] = property_0.maid_room;
        $[109] = property_0.parking_spaces;
        $[110] = property_0.plot_size;
        $[111] = property_0.size;
        $[112] = t39;
    } else {
        t39 = $[112];
    }
    let t40;
    if ($[113] !== property_0.features) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFeatures$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyFeatures"], {
            features: property_0.features
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[113] = property_0.features;
        $[114] = t40;
    } else {
        t40 = $[114];
    }
    let t41;
    if ($[115] !== property_0.currency) {
        t41 = property_0.currency ? String(property_0.currency).toUpperCase() : undefined;
        $[115] = property_0.currency;
        $[116] = t41;
    } else {
        t41 = $[116];
    }
    let t42;
    if ($[117] !== property_0.paymentPlansView || $[118] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyPaymentPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyPaymentPlans"], {
            plans: property_0.paymentPlansView,
            currency: t41
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[117] = property_0.paymentPlansView;
        $[118] = t41;
        $[119] = t42;
    } else {
        t42 = $[119];
    }
    let t43;
    if ($[120] !== floorPlanUrl) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertyFloorPlan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyFloorPlan"], {
            floorPlanUrl: floorPlanUrl
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[120] = floorPlanUrl;
        $[121] = t43;
    } else {
        t43 = $[121];
    }
    let t44;
    if ($[122] !== t37 || $[123] !== t38 || $[124] !== t39 || $[125] !== t40 || $[126] !== t42 || $[127] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6 min-w-0",
            children: [
                t37,
                t38,
                t39,
                t40,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[122] = t37;
        $[123] = t38;
        $[124] = t39;
        $[125] = t40;
        $[126] = t42;
        $[127] = t43;
        $[128] = t44;
    } else {
        t44 = $[128];
    }
    let t45;
    if ($[129] !== property_0) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 space-y-6 lg:sticky lg:top-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$property$2d$details$2f$PropertySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertySidebar"], {
                property: property_0
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
                lineNumber: 498,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[129] = property_0;
        $[130] = t45;
    } else {
        t45 = $[130];
    }
    let t46;
    if ($[131] !== t44 || $[132] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start",
            children: [
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[131] = t44;
        $[132] = t45;
        $[133] = t46;
    } else {
        t46 = $[133];
    }
    let t47;
    if ($[134] !== t) {
        t47 = t("properties.deleteDialog.title");
        $[134] = t;
        $[135] = t47;
    } else {
        t47 = $[135];
    }
    let t48;
    if ($[136] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "dark:text-gray-100",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[136] = t47;
        $[137] = t48;
    } else {
        t48 = $[137];
    }
    let t49;
    if ($[138] !== t) {
        t49 = t("properties.deleteDialog.description");
        $[138] = t;
        $[139] = t49;
    } else {
        t49 = $[139];
    }
    let t50;
    if ($[140] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "dark:text-gray-400",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[140] = t49;
        $[141] = t50;
    } else {
        t50 = $[141];
    }
    let t51;
    if ($[142] !== t48 || $[143] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[142] = t48;
        $[143] = t50;
        $[144] = t51;
    } else {
        t51 = $[144];
    }
    let t52;
    if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>setDeleteDialogOpen(false)
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[145] = t52;
    } else {
        t52 = $[145];
    }
    let t53;
    if ($[146] !== t) {
        t53 = t("common.cancel");
        $[146] = t;
        $[147] = t53;
    } else {
        t53 = $[147];
    }
    let t54;
    if ($[148] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: t52,
            className: "dark:border-neutral-700 dark:text-gray-200",
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[148] = t53;
        $[149] = t54;
    } else {
        t54 = $[149];
    }
    let t55;
    if ($[150] !== deletePropertyMutation || $[151] !== id) {
        t55 = ({
            "PropertyDetailsPage[<Button>.onClick]": ()=>deletePropertyMutation.mutate(Number(id))
        })["PropertyDetailsPage[<Button>.onClick]"];
        $[150] = deletePropertyMutation;
        $[151] = id;
        $[152] = t55;
    } else {
        t55 = $[152];
    }
    let t56;
    if ($[153] !== deletePropertyMutation.isPending || $[154] !== t) {
        t56 = deletePropertyMutation.isPending ? t("common.deleting") : t("common.delete");
        $[153] = deletePropertyMutation.isPending;
        $[154] = t;
        $[155] = t56;
    } else {
        t56 = $[155];
    }
    let t57;
    if ($[156] !== deletePropertyMutation.isPending || $[157] !== t55 || $[158] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            onClick: t55,
            disabled: deletePropertyMutation.isPending,
            children: t56
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 601,
            columnNumber: 11
        }, this);
        $[156] = deletePropertyMutation.isPending;
        $[157] = t55;
        $[158] = t56;
        $[159] = t57;
    } else {
        t57 = $[159];
    }
    let t58;
    if ($[160] !== t54 || $[161] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            children: [
                t54,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[160] = t54;
        $[161] = t57;
        $[162] = t58;
    } else {
        t58 = $[162];
    }
    let t59;
    if ($[163] !== t51 || $[164] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "dark:bg-neutral-900 dark:border-neutral-800",
            children: [
                t51,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[163] = t51;
        $[164] = t58;
        $[165] = t59;
    } else {
        t59 = $[165];
    }
    let t60;
    if ($[166] !== deleteDialogOpen || $[167] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: deleteDialogOpen,
            onOpenChange: setDeleteDialogOpen,
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[166] = deleteDialogOpen;
        $[167] = t59;
        $[168] = t60;
    } else {
        t60 = $[168];
    }
    let t61;
    if ($[169] !== t18 || $[170] !== t36 || $[171] !== t46 || $[172] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6",
            children: [
                t18,
                t36,
                t46,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/properties/[id]/page.client.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[169] = t18;
        $[170] = t36;
        $[171] = t46;
        $[172] = t60;
        $[173] = t61;
    } else {
        t61 = $[173];
    }
    return t61;
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
        paymentPlansView: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractPaymentPlans"])(property),
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

//# sourceMappingURL=src_d0909c72._.js.map