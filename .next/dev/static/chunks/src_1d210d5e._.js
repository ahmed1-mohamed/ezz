(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6";
    }
    const { isOpen, onClose, title, description, children, footer, size: t1, showCloseButton: t2, scrollable: t3 } = t0;
    const size = t1 === undefined ? "lg" : t1;
    t2 === undefined ? true : t2;
    const scrollable = t3 === undefined ? false : t3;
    const t4 = `${sizeClasses[size]} ${scrollable ? "max-h-[85vh] flex flex-col" : ""}`;
    let t5;
    if ($[1] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== description || $[4] !== title) {
        t6 = description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 60,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "sr-only",
            children: [
                typeof title === "string" ? title : "Dialog",
                " Modal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 60,
            columnNumber: 79
        }, this);
        $[3] = description;
        $[4] = title;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== t5 || $[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `py-4 ${scrollable ? "flex-1 overflow-y-auto" : ""}`;
    let t9;
    if ($[9] !== children || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== footer) {
        t10 = footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            children: footer
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 88,
            columnNumber: 21
        }, this);
        $[12] = footer;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t4 || $[16] !== t7 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: t4,
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t4;
        $[16] = t7;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== isOpen || $[20] !== onClose || $[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[19] = isOpen;
        $[20] = onClose;
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
}
_c = Modal;
function ConfirmModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6";
    }
    const { isOpen, onClose, onConfirm, title, description, confirmText: t1, cancelText: t2, variant: t3, isLoading: t4 } = t0;
    const confirmText = t1 === undefined ? "Confirm" : t1;
    const cancelText = t2 === undefined ? "Cancel" : t2;
    const variant = t3 === undefined ? "default" : t3;
    const isLoading = t4 === undefined ? false : t4;
    let t5;
    if ($[1] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== t5 || $[6] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== cancelText || $[9] !== isLoading || $[10] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: isLoading,
            children: cancelText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[8] = cancelText;
        $[9] = isLoading;
        $[10] = onClose;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = variant === "destructive" ? "destructive" : "default";
    const t10 = variant === "default" ? "bg-teal-600 hover:bg-teal-700 text-white" : "";
    const t11 = isLoading ? "Loading..." : confirmText;
    let t12;
    if ($[12] !== isLoading || $[13] !== onConfirm || $[14] !== t10 || $[15] !== t11 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onConfirm,
            variant: t9,
            disabled: isLoading,
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[12] = isLoading;
        $[13] = onConfirm;
        $[14] = t10;
        $[15] = t11;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "gap-2",
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t8;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t13 || $[22] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md",
            children: [
                t7,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t7;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== isOpen || $[25] !== onClose || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[24] = isOpen;
        $[25] = onClose;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_c1 = ConfirmModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/validators/create-new-user.schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNewUserSchema",
    ()=>createNewUserSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const createNewUserSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    first_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    last_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required").email("validation.email_invalid"),
    phone_number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required").min(8, "validation.password_min"),
    password_confirmation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    role_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "validation.required"
    }),
    user_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    developer_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    developer_role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "active",
        "inactive",
        "banned"
    ]).optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    profile_picture: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
}).refine((data)=>data.password === data.password_confirmation, {
    message: "validation.passwords_must_match",
    path: [
        "password_confirmation"
    ]
}).refine((data)=>{
    if (data.user_type?.toLowerCase() === "developer") {
        return !!data.developer_id;
    }
    return true;
}, {
    message: "validation.developer_required",
    path: [
        "developer_id"
    ]
}).refine((data)=>{
    if (data.user_type?.toLowerCase() === "developer") {
        return !!data.developer_role;
    }
    return true;
}, {
    message: "validation.developer_role_required",
    path: [
        "developer_role"
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-developers-select.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDevelopersSelect",
    ()=>useDevelopersSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useDevelopersSelect(countryId) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "62f1ce42966de6ab13895d0cc367a8213816b428da7d17355907101ba74d39cb") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "62f1ce42966de6ab13895d0cc367a8213816b428da7d17355907101ba74d39cb";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    let t1;
    if ($[1] !== countryId) {
        t0 = [
            "developers",
            "all",
            countryId
        ];
        t1 = async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/developers/all", {
                params: {
                    ...countryId && {
                        country_id: countryId
                    }
                }
            });
            const raw = response.data;
            const items = (()=>{
                if (!raw) {
                    return [];
                }
                if (Array.isArray(raw)) {
                    return raw;
                }
                if (Array.isArray(raw.data)) {
                    return raw.data;
                }
                if (raw.data && Array.isArray(raw.data.developers)) {
                    return raw.data.developers;
                }
                if (Array.isArray(raw.developers)) {
                    return raw.developers;
                }
                return [];
            })();
            return items.map(_useDevelopersSelectAnonymousItemsMap);
        };
        $[1] = countryId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!token;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            enabled: t2,
            staleTime: 300000
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const { data: t4, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t5;
    if ($[8] !== t4) {
        t5 = t4 === undefined ? [] : t4;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const developers = t5;
    let t6;
    if ($[10] !== developers || $[11] !== isLoading) {
        t6 = {
            developers,
            isLoading
        };
        $[10] = developers;
        $[11] = isLoading;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_s(useDevelopersSelect, "B/ZTsKZMTDSYCX2b7SeLXY6jync=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _useDevelopersSelectAnonymousItemsMap(item) {
    return {
        ...item,
        developer_id: item.developer_id || item.id,
        developer_name: item.developer_name || item.name || ""
    };
}
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
"[project]/src/components/modals/users/components/BasicInfoFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasicInfoFields",
    ()=>BasicInfoFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function BasicInfoFields(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(178);
    if ($[0] !== "0ba17292c4f4731684412d7ce1ccb1bdc043d6cef80a79cb7fd8aba92b395863") {
        for(let $i = 0; $i < 178; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ba17292c4f4731684412d7ce1ccb1bdc043d6cef80a79cb7fd8aba92b395863";
    }
    const { roles, rolesLoading, onRoleChange, onUserTypeChange } = t0;
    const { register, control, formState: t1, setValue, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] !== watch) {
        t2 = watch("profile_picture");
        $[1] = watch;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const profilePicture = t2;
    let t3;
    let t4;
    if ($[3] !== profilePicture) {
        t3 = ({
            "BasicInfoFields[useEffect()]": ()=>{
                if (!profilePicture) {
                    setPreview(null);
                    return;
                }
                if (typeof profilePicture === "string" && profilePicture.trim() !== "") {
                    setPreview(profilePicture);
                    return;
                }
                let file = null;
                const p = profilePicture;
                if (p) {
                    if (p instanceof File || p instanceof Blob) {
                        file = p;
                    } else {
                        if (typeof p === "object" && "size" in p && "type" in p) {
                            file = p;
                        } else {
                            if (p instanceof FileList && p.length > 0) {
                                file = p[0];
                            } else {
                                if (Array.isArray(p) && p.length > 0 && typeof p[0] === "object" && "size" in p[0]) {
                                    file = p[0];
                                }
                            }
                        }
                    }
                }
                if (file) {
                    const objectUrl = URL.createObjectURL(file);
                    setPreview(objectUrl);
                    return ()=>{
                        URL.revokeObjectURL(objectUrl);
                    };
                } else {
                    setPreview(null);
                }
            }
        })["BasicInfoFields[useEffect()]"];
        t4 = [
            profilePicture
        ];
        $[3] = profilePicture;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== t) {
        t5 = t("experts.settings.imagePicker.label") || "Upload profile picture";
        $[6] = t;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 self-start",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== preview) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 rounded-xl border border-gray-100 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0",
            children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: preview,
                alt: "Profile photo preview",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                lineNumber: 126,
                columnNumber: 201
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-teal-600 dark:text-teal-400 font-bold text-xl",
                children: "U"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                lineNumber: 126,
                columnNumber: 292
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[10] = preview;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "BasicInfoFields[<Controller>.render]": (t9)=>{
                const { field } = t9;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: fileInputRef,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: {
                        "BasicInfoFields[<Controller>.render > <input>.onChange]": (e)=>{
                            const files = e.target.files;
                            if (files && files.length > 0) {
                                field.onChange(files[0]);
                            }
                        }
                    }["BasicInfoFields[<Controller>.render > <input>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 139,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoFields[<Controller>.render]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== control) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "profile_picture",
            control: control,
            render: t8
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[13] = control;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "BasicInfoFields[<button>.onClick]": ()=>fileInputRef.current?.click()
        })["BasicInfoFields[<button>.onClick]"];
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t) {
        t11 = t("experts.settings.imagePicker.choose") || "Choose image";
        $[16] = t;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t10,
            className: "px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg dark:bg-teal-950/30 dark:text-teal-400 dark:hover:bg-teal-950/50 border border-teal-200/50 dark:border-teal-900/50 transition-colors",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== preview || $[21] !== setValue || $[22] !== t) {
        t13 = preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "BasicInfoFields[<button>.onClick]": ()=>setValue("profile_picture", "")
            }["BasicInfoFields[<button>.onClick]"],
            className: "px-4 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 border border-red-200/50 dark:border-red-900/50 transition-colors",
            children: t("common.delete") || "Remove"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 188,
            columnNumber: 22
        }, this);
        $[20] = preview;
        $[21] = setValue;
        $[22] = t;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t12 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t) {
        t15 = t("experts.settings.imagePicker.formats") || "SVG, PNG, JPG or GIF (MAX. 800x400px)";
        $[27] = t;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-gray-400",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t14 || $[32] !== t16 || $[33] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 flex-1 w-full",
            children: [
                t9,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t16;
        $[33] = t9;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t17 || $[36] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 w-full",
            children: [
                t7,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t7;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t18 || $[39] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 items-center justify-center p-4 border border-dashed rounded-xl bg-gray-55/50 border-gray-200 dark:border-neutral-800 dark:bg-neutral-900/50 mb-4",
            children: [
                t6,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t6;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== t) {
        t20 = t("users.addModal.firstName") || "First name";
        $[41] = t;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "first-name",
            children: [
                t20,
                " ",
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== t) {
        t24 = t("users.addModal.firstNamePlaceholder") || "e.g. Bonnie";
        $[47] = t;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== register) {
        t25 = register("first_name");
        $[49] = register;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    const t26 = !!errors.first_name;
    let t27;
    if ($[51] !== t24 || $[52] !== t25 || $[53] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "first-name",
                    placeholder: t24,
                    ...t25,
                    className: "pl-10",
                    error: t26
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 300,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t25;
        $[53] = t26;
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] !== errors.first_name || $[56] !== t) {
        t28 = errors.first_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.first_name.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 310,
            columnNumber: 32
        }, this);
        $[55] = errors.first_name;
        $[56] = t;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== t22 || $[59] !== t27 || $[60] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[58] = t22;
        $[59] = t27;
        $[60] = t28;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] !== t) {
        t30 = t("users.addModal.lastName") || "Last name";
        $[62] = t;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    let t31;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "last-name",
            children: [
                t30,
                " ",
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[65] = t30;
        $[66] = t32;
    } else {
        t32 = $[66];
    }
    let t33;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[67] = t33;
    } else {
        t33 = $[67];
    }
    let t34;
    if ($[68] !== t) {
        t34 = t("users.addModal.lastNamePlaceholder") || "e.g. Green";
        $[68] = t;
        $[69] = t34;
    } else {
        t34 = $[69];
    }
    let t35;
    if ($[70] !== register) {
        t35 = register("last_name");
        $[70] = register;
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    const t36 = !!errors.last_name;
    let t37;
    if ($[72] !== t34 || $[73] !== t35 || $[74] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "last-name",
                    placeholder: t34,
                    ...t35,
                    className: "pl-10",
                    error: t36
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 376,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[72] = t34;
        $[73] = t35;
        $[74] = t36;
        $[75] = t37;
    } else {
        t37 = $[75];
    }
    let t38;
    if ($[76] !== errors.last_name || $[77] !== t) {
        t38 = errors.last_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.last_name.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 386,
            columnNumber: 31
        }, this);
        $[76] = errors.last_name;
        $[77] = t;
        $[78] = t38;
    } else {
        t38 = $[78];
    }
    let t39;
    if ($[79] !== t32 || $[80] !== t37 || $[81] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[79] = t32;
        $[80] = t37;
        $[81] = t38;
        $[82] = t39;
    } else {
        t39 = $[82];
    }
    let t40;
    if ($[83] !== t29 || $[84] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t29,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[83] = t29;
        $[84] = t39;
        $[85] = t40;
    } else {
        t40 = $[85];
    }
    let t41;
    if ($[86] !== t) {
        t41 = t("users.addModal.email") || "Email address";
        $[86] = t;
        $[87] = t41;
    } else {
        t41 = $[87];
    }
    let t42;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[88] = t42;
    } else {
        t42 = $[88];
    }
    let t43;
    if ($[89] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "email",
            children: [
                t41,
                " ",
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[89] = t41;
        $[90] = t43;
    } else {
        t43 = $[90];
    }
    let t44;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[91] = t44;
    } else {
        t44 = $[91];
    }
    let t45;
    if ($[92] !== t) {
        t45 = t("users.addModal.emailPlaceholder") || "e.g. name@company.com";
        $[92] = t;
        $[93] = t45;
    } else {
        t45 = $[93];
    }
    let t46;
    if ($[94] !== register) {
        t46 = register("email");
        $[94] = register;
        $[95] = t46;
    } else {
        t46 = $[95];
    }
    const t47 = !!errors.email;
    let t48;
    if ($[96] !== t45 || $[97] !== t46 || $[98] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "email",
                    type: "email",
                    placeholder: t45,
                    ...t46,
                    className: "pl-10",
                    error: t47
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 461,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[96] = t45;
        $[97] = t46;
        $[98] = t47;
        $[99] = t48;
    } else {
        t48 = $[99];
    }
    let t49;
    if ($[100] !== errors.email || $[101] !== t) {
        t49 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.email.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 471,
            columnNumber: 27
        }, this);
        $[100] = errors.email;
        $[101] = t;
        $[102] = t49;
    } else {
        t49 = $[102];
    }
    let t50;
    if ($[103] !== t43 || $[104] !== t48 || $[105] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t43,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[103] = t43;
        $[104] = t48;
        $[105] = t49;
        $[106] = t50;
    } else {
        t50 = $[106];
    }
    let t51;
    if ($[107] !== t) {
        t51 = t("users.addModal.phoneNumber") || "Phone number";
        $[107] = t;
        $[108] = t51;
    } else {
        t51 = $[108];
    }
    let t52;
    if ($[109] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "phone-number",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[109] = t51;
        $[110] = t52;
    } else {
        t52 = $[110];
    }
    let t53;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[111] = t53;
    } else {
        t53 = $[111];
    }
    let t54;
    if ($[112] !== t) {
        t54 = t("users.addModal.phoneNumberPlaceholder") || "+1 234 567 890";
        $[112] = t;
        $[113] = t54;
    } else {
        t54 = $[113];
    }
    let t55;
    if ($[114] !== setValue) {
        t55 = (e_0)=>{
            let val = e_0.target.value;
            if (!val.startsWith("+")) {
                val = "+" + val.replace(/\+/g, "");
            } else {
                val = "+" + val.slice(1).replace(/\+/g, "");
            }
            setValue("phone_number", val);
        };
        $[114] = setValue;
        $[115] = t55;
    } else {
        t55 = $[115];
    }
    let t56;
    if ($[116] !== register || $[117] !== t55) {
        t56 = register("phone_number", {
            onChange: t55
        });
        $[116] = register;
        $[117] = t55;
        $[118] = t56;
    } else {
        t56 = $[118];
    }
    const t57 = !!errors.phone_number;
    let t58;
    if ($[119] !== t54 || $[120] !== t56 || $[121] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "phone-number",
                    type: "tel",
                    placeholder: t54,
                    ...t56,
                    className: "pl-10",
                    error: t57
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 549,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[119] = t54;
        $[120] = t56;
        $[121] = t57;
        $[122] = t58;
    } else {
        t58 = $[122];
    }
    let t59;
    if ($[123] !== errors.phone_number || $[124] !== t) {
        t59 = errors.phone_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.phone_number.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 559,
            columnNumber: 34
        }, this);
        $[123] = errors.phone_number;
        $[124] = t;
        $[125] = t59;
    } else {
        t59 = $[125];
    }
    let t60;
    if ($[126] !== t52 || $[127] !== t58 || $[128] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t52,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[126] = t52;
        $[127] = t58;
        $[128] = t59;
        $[129] = t60;
    } else {
        t60 = $[129];
    }
    let t61;
    if ($[130] !== t) {
        t61 = t("users.addModal.userType") || "User Type";
        $[130] = t;
        $[131] = t61;
    } else {
        t61 = $[131];
    }
    let t62;
    if ($[132] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "user-type",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[132] = t61;
        $[133] = t62;
    } else {
        t62 = $[133];
    }
    let t63;
    if ($[134] !== errors.user_type || $[135] !== onUserTypeChange || $[136] !== t) {
        t63 = ({
            "BasicInfoFields[<Controller>.render]": (t64)=>{
                const { field: field_0 } = t64;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: field_0.value || "",
                    onValueChange: {
                        "BasicInfoFields[<Controller>.render > <Select>.onValueChange]": (val_0)=>{
                            field_0.onChange(val_0);
                            if (onUserTypeChange) {
                                onUserTypeChange(val_0);
                            }
                        }
                    }["BasicInfoFields[<Controller>.render > <Select>.onValueChange]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "mt-1",
                            error: !!errors.user_type,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("users.addModal.selectUserType") || "Select User Type"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                                lineNumber: 606,
                                columnNumber: 136
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                            lineNumber: 606,
                            columnNumber: 77
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "admin",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                                    lineNumber: 606,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "developer",
                                    children: "Developer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                                    lineNumber: 606,
                                    columnNumber: 297
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "expert",
                                    children: "Expert"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                                    lineNumber: 606,
                                    columnNumber: 349
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                            lineNumber: 606,
                            columnNumber: 238
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 599,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoFields[<Controller>.render]"];
        $[134] = errors.user_type;
        $[135] = onUserTypeChange;
        $[136] = t;
        $[137] = t63;
    } else {
        t63 = $[137];
    }
    let t64;
    if ($[138] !== control || $[139] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "user_type",
            control: control,
            render: t63
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[138] = control;
        $[139] = t63;
        $[140] = t64;
    } else {
        t64 = $[140];
    }
    let t65;
    if ($[141] !== errors.user_type || $[142] !== t) {
        t65 = errors.user_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.user_type.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 627,
            columnNumber: 31
        }, this);
        $[141] = errors.user_type;
        $[142] = t;
        $[143] = t65;
    } else {
        t65 = $[143];
    }
    let t66;
    if ($[144] !== t62 || $[145] !== t64 || $[146] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t62,
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[144] = t62;
        $[145] = t64;
        $[146] = t65;
        $[147] = t66;
    } else {
        t66 = $[147];
    }
    let t67;
    if ($[148] !== t60 || $[149] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t60,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 646,
            columnNumber: 11
        }, this);
        $[148] = t60;
        $[149] = t66;
        $[150] = t67;
    } else {
        t67 = $[150];
    }
    let t68;
    if ($[151] !== t) {
        t68 = t("users.addModal.role") || "Role";
        $[151] = t;
        $[152] = t68;
    } else {
        t68 = $[152];
    }
    let t69;
    if ($[153] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[153] = t69;
    } else {
        t69 = $[153];
    }
    let t70;
    if ($[154] !== t68) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "role",
            children: [
                t68,
                " ",
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 670,
            columnNumber: 11
        }, this);
        $[154] = t68;
        $[155] = t70;
    } else {
        t70 = $[155];
    }
    let t71;
    if ($[156] !== errors.role_id || $[157] !== onRoleChange || $[158] !== roles || $[159] !== rolesLoading || $[160] !== t) {
        t71 = ({
            "BasicInfoFields[<Controller>.render]": (t72)=>{
                const { field: field_1 } = t72;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: field_1.value?.toString() || "",
                    onValueChange: {
                        "BasicInfoFields[<Controller>.render > <Select>.onValueChange]": (value)=>onRoleChange(Number(value))
                    }["BasicInfoFields[<Controller>.render > <Select>.onValueChange]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "mt-1",
                            error: !!errors.role_id,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: rolesLoading ? t("users.addModal.loadingRoles") || "Loading roles..." : t("users.addModal.selectRole") || "Select Role"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                                lineNumber: 685,
                                columnNumber: 134
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                            lineNumber: 685,
                            columnNumber: 77
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: roles.filter(_BasicInfoFieldsControllerRenderAnonymous).map(_BasicInfoFieldsControllerRenderAnonymous2)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                            lineNumber: 685,
                            columnNumber: 299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
                    lineNumber: 683,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoFields[<Controller>.render]"];
        $[156] = errors.role_id;
        $[157] = onRoleChange;
        $[158] = roles;
        $[159] = rolesLoading;
        $[160] = t;
        $[161] = t71;
    } else {
        t71 = $[161];
    }
    let t72;
    if ($[162] !== control || $[163] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "role_id",
            control: control,
            render: t71
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[162] = control;
        $[163] = t71;
        $[164] = t72;
    } else {
        t72 = $[164];
    }
    let t73;
    if ($[165] !== errors.role_id || $[166] !== t) {
        t73 = errors.role_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.role_id.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 708,
            columnNumber: 29
        }, this);
        $[165] = errors.role_id;
        $[166] = t;
        $[167] = t73;
    } else {
        t73 = $[167];
    }
    let t74;
    if ($[168] !== t70 || $[169] !== t72 || $[170] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t70,
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
            lineNumber: 717,
            columnNumber: 11
        }, this);
        $[168] = t70;
        $[169] = t72;
        $[170] = t73;
        $[171] = t74;
    } else {
        t74 = $[171];
    }
    let t75;
    if ($[172] !== t19 || $[173] !== t40 || $[174] !== t50 || $[175] !== t67 || $[176] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t19,
                t40,
                t50,
                t67,
                t74
            ]
        }, void 0, true);
        $[172] = t19;
        $[173] = t40;
        $[174] = t50;
        $[175] = t67;
        $[176] = t74;
        $[177] = t75;
    } else {
        t75 = $[177];
    }
    return t75;
}
_s(BasicInfoFields, "GE5j8sbBAosJhApMCQgkrUrCSzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BasicInfoFields;
function _BasicInfoFieldsControllerRenderAnonymous2(role_0) {
    const rId = role_0.role_id ?? role_0.id;
    const rName = role_0.role_name ?? role_0.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: String(rId),
        children: rName
    }, rId, false, {
        fileName: "[project]/src/components/modals/users/components/BasicInfoFields.tsx",
        lineNumber: 742,
        columnNumber: 10
    }, this);
}
function _BasicInfoFieldsControllerRenderAnonymous(role) {
    const name = String(role.role_name ?? role.name ?? "").toLowerCase();
    const type = String(role.role_type ?? role.type ?? "").toLowerCase();
    return name.includes("admin") || name.includes("developer") || name.includes("expert") || type.includes("admin") || type.includes("developer") || type.includes("expert");
}
var _c;
__turbopack_context__.k.register(_c, "BasicInfoFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/users/components/DeveloperFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperFields",
    ()=>DeveloperFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
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
function DeveloperFields(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "abb5792c3f2c1c4cf1babc9103368c83ff7ab1cb2d391274ee6c4e0cdb9d90c6") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "abb5792c3f2c1c4cf1babc9103368c83ff7ab1cb2d391274ee6c4e0cdb9d90c6";
    }
    const { countries, countriesLoading, selectedCountryId, setSelectedCountryId, developers, developersLoading, developerRoleOptions } = t0;
    const { control, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] !== t) {
        t2 = t("users.addModal.selectCountry") || "Select Country";
        $[1] = t;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "country",
            children: [
                t2,
                " ",
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== selectedCountryId) {
        t5 = selectedCountryId?.toString() || "";
        $[6] = selectedCountryId;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== setSelectedCountryId) {
        t6 = ({
            "DeveloperFields[<Select>.onValueChange]": (value)=>setSelectedCountryId(Number(value))
        })["DeveloperFields[<Select>.onValueChange]"];
        $[8] = setSelectedCountryId;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== countriesLoading || $[11] !== t) {
        t7 = countriesLoading ? t("users.addModal.loadingCountries") || "Loading countries..." : t("users.addModal.selectCountry") || "Select Country";
        $[10] = countriesLoading;
        $[11] = t;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "mt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t7
            }, void 0, false, {
                fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                lineNumber: 100,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== countries || $[16] !== countriesLoading || $[17] !== t) {
        t9 = countriesLoading && countries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 text-sm text-gray-500 text-center",
            children: t("users.addModal.loadingCountries") || "Loading countries..."
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 108,
            columnNumber: 55
        }, this) : countries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 text-sm text-gray-500 text-center",
            children: t("users.addModal.noCountries") || "No countries available"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 108,
            columnNumber: 208
        }, this) : countries.map(_DeveloperFieldsCountriesMap);
        $[15] = countries;
        $[16] = countriesLoading;
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "max-h-60 overflow-y-auto",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t5 || $[23] !== t6 || $[24] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t5,
            onValueChange: t6,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t5;
        $[23] = t6;
        $[24] = t8;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t11 || $[27] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t4;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== control || $[30] !== developers || $[31] !== developersLoading || $[32] !== errors || $[33] !== selectedCountryId || $[34] !== t) {
        t13 = selectedCountryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    htmlFor: "developer",
                    children: [
                        t("users.addModal.selectDeveloper") || "Select Developer",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                            lineNumber: 146,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 146,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    name: "developer_id",
                    control: control,
                    render: {
                        "DeveloperFields[<Controller>.render]": (t14)=>{
                            const { field } = t14;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: field.value?.toString() || "",
                                onValueChange: {
                                    "DeveloperFields[<Controller>.render > <Select>.onValueChange]": (value_0)=>field.onChange(Number(value_0))
                                }["DeveloperFields[<Controller>.render > <Select>.onValueChange]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "mt-1",
                                        error: !!errors.developer_id,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: developersLoading ? t("users.addModal.loadingDevelopers") || "Loading developers..." : t("users.addModal.selectDeveloper") || "Select Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                            lineNumber: 153,
                                            columnNumber: 141
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                        lineNumber: 153,
                                        columnNumber: 79
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "max-h-60 overflow-y-auto",
                                        children: developersLoading && developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 text-sm text-gray-500 text-center",
                                            children: t("users.addModal.loadingDevelopers") || "Loading developers..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                            lineNumber: 153,
                                            columnNumber: 431
                                        }, void 0) : developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 text-sm text-gray-500 text-center",
                                            children: t("users.addModal.noDevelopers") || "No developers available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                            lineNumber: 153,
                                            columnNumber: 587
                                        }, void 0) : developers.map(_DeveloperFieldsControllerRenderDevelopersMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                        lineNumber: 153,
                                        columnNumber: 331
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                lineNumber: 151,
                                columnNumber: 18
                            }, void 0);
                        }
                    }["DeveloperFields[<Controller>.render]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 146,
                    columnNumber: 171
                }, this),
                errors.developer_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 mt-1",
                    children: t(errors.developer_id.message || "")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 155,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 146,
            columnNumber: 32
        }, this);
        $[29] = control;
        $[30] = developers;
        $[31] = developersLoading;
        $[32] = errors;
        $[33] = selectedCountryId;
        $[34] = t;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== t12 || $[37] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t13;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== control || $[40] !== developerRoleOptions || $[41] !== errors || $[42] !== selectedCountryId || $[43] !== t) {
        t15 = selectedCountryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    htmlFor: "developer_role",
                    children: [
                        t("users.addModal.developerRole") || "Developer Role",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-500",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                            lineNumber: 177,
                            columnNumber: 125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 177,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    name: "developer_role",
                    control: control,
                    render: {
                        "DeveloperFields[<Controller>.render]": (t16)=>{
                            const { field: field_0 } = t16;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: field_0.value || "",
                                onValueChange: field_0.onChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "mt-1",
                                        error: !!errors.developer_role,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t("users.addModal.selectDeveloperRole") || "Select Developer Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                            lineNumber: 182,
                                            columnNumber: 151
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                        lineNumber: 182,
                                        columnNumber: 87
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: developerRoleOptions.map(_DeveloperFieldsControllerRenderDeveloperRoleOptionsMap)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                        lineNumber: 182,
                                        columnNumber: 263
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                                lineNumber: 182,
                                columnNumber: 18
                            }, void 0);
                        }
                    }["DeveloperFields[<Controller>.render]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 177,
                    columnNumber: 172
                }, this),
                errors.developer_role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 mt-1",
                    children: t(errors.developer_role.message || "")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
                    lineNumber: 184,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
            lineNumber: 177,
            columnNumber: 32
        }, this);
        $[39] = control;
        $[40] = developerRoleOptions;
        $[41] = errors;
        $[42] = selectedCountryId;
        $[43] = t;
        $[44] = t15;
    } else {
        t15 = $[44];
    }
    let t16;
    if ($[45] !== t14 || $[46] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t14,
                t15
            ]
        }, void 0, true);
        $[45] = t14;
        $[46] = t15;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    return t16;
}
_s(DeveloperFields, "+yiBv/bO/5lHlQCbV3XS31aXOfI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperFields;
function _DeveloperFieldsControllerRenderDeveloperRoleOptionsMap(option) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: option.value,
        children: option.label
    }, option.value, false, {
        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
        lineNumber: 206,
        columnNumber: 10
    }, this);
}
function _DeveloperFieldsControllerRenderDevelopersMap(developer) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: developer.developer_id.toString(),
        children: developer.developer_name
    }, developer.developer_id, false, {
        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
        lineNumber: 209,
        columnNumber: 10
    }, this);
}
function _DeveloperFieldsCountriesMap(country) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: country.country_id.toString(),
        children: country.country_name
    }, country.country_id, false, {
        fileName: "[project]/src/components/modals/users/components/DeveloperFields.tsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/users/components/PasswordFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordFields",
    ()=>PasswordFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
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
function PasswordFields() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "dfac17de589caf5a75b7a6633098a5bb458e0d3950d28d01e9840a3992ef3aff") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dfac17de589caf5a75b7a6633098a5bb458e0d3950d28d01e9840a3992ef3aff";
    }
    const { register, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("users.addModal.password") || "Password";
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "password",
            children: [
                t1,
                " ",
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== register) {
        t5 = register("password");
        $[7] = register;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = !!errors.password;
    let t7;
    if ($[9] !== t5 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "password",
                    type: "password",
                    placeholder: "password",
                    ...t5,
                    className: "pl-10",
                    error: t6
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
                    lineNumber: 69,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== errors.password || $[13] !== t) {
        t8 = errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.password.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 78,
            columnNumber: 29
        }, this);
        $[12] = errors.password;
        $[13] = t;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t3 || $[16] !== t7 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t) {
        t10 = t("users.addModal.confirmPassword") || "Confirm password";
        $[19] = t;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "password-confirmation",
            children: [
                t10,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== register) {
        t14 = register("password_confirmation");
        $[25] = register;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = !!errors.password_confirmation;
    let t16;
    if ($[27] !== t14 || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "password-confirmation",
                    type: "password",
                    placeholder: "confirm password",
                    ...t14,
                    className: "pl-10",
                    error: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
                    lineNumber: 136,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== errors.password_confirmation || $[31] !== t) {
        t17 = errors.password_confirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.password_confirmation.message || "")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 145,
            columnNumber: 43
        }, this);
        $[30] = errors.password_confirmation;
        $[31] = t;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t12 || $[34] !== t16 || $[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t16;
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t18 || $[38] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t9,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/components/PasswordFields.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t9;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
}
_s(PasswordFields, "BhXPlTftuRr7paFq7vroUv5I+EU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PasswordFields;
var _c;
__turbopack_context__.k.register(_c, "PasswordFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountriesSelect",
    ()=>useCountriesSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useCountriesSelect() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9085e9d851598b0eb188476c5041beffdaf61be96174bc7af26c1c7bb27098b3") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9085e9d851598b0eb188476c5041beffdaf61be96174bc7af26c1c7bb27098b3";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "countries",
            "select"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const t1 = !!token;
    let t2;
    if ($[2] !== t1) {
        t2 = {
            queryKey: t0,
            queryFn: _temp,
            enabled: t1,
            staleTime: 300000
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const { data: t3, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
    let t4;
    if ($[4] !== t3) {
        t4 = t3 === undefined ? [] : t3;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const countries = t4;
    let t5;
    if ($[6] !== countries || $[7] !== isLoading) {
        t5 = {
            countries,
            isLoading
        };
        $[6] = countries;
        $[7] = isLoading;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(useCountriesSelect, "ypUOG/0lQzZNvhz7AhRa/SfsgEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/countries");
    const raw = response.data;
    const items = (()=>{
        if (!raw) {
            return [];
        }
        if (Array.isArray(raw)) {
            return raw;
        }
        if (Array.isArray(raw.data)) {
            return raw.data;
        }
        if (raw.data && Array.isArray(raw.data.countries)) {
            return raw.data.countries;
        }
        if (Array.isArray(raw.countries)) {
            return raw.countries;
        }
        return [];
    })();
    return items.map(_useCountriesSelectAnonymousItemsMap);
}
function _useCountriesSelectAnonymousItemsMap(item) {
    return {
        country_id: item.country_id || item.id,
        country_name: item.country_name || item.name || ""
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/users/add-user-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddUserModal",
    ()=>AddUserModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$roles$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-roles-select.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$create$2d$new$2d$user$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/validators/create-new-user.schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developers$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-developers-select.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$BasicInfoFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/users/components/BasicInfoFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$DeveloperFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/users/components/DeveloperFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$PasswordFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/users/components/PasswordFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/form-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)");
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
function AddUserModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(88);
    if ($[0] !== "3ba0b00b612becbc8780ae2c1069355433e741689451cd763a90304418481e0e") {
        for(let $i = 0; $i < 88; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ba0b00b612becbc8780ae2c1069355433e741689451cd763a90304418481e0e";
    }
    const { isOpen, onClose, onSubmit, isPending: t1 } = t0;
    const isPending = t1 === undefined ? false : t1;
    const { roles, isLoading: rolesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$roles$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolesSelect"])();
    const [selectedCountryId, setSelectedCountryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { countries, isLoading: countriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"])();
    const { developers, isLoading: developersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developers$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevelopersSelect"])(selectedCountryId);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isDeveloper, setIsDeveloper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== t) {
        t2 = t("users.addModal.developerRoleAdmin") || "Admin";
        $[1] = t;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t2) {
        t3 = {
            label: t2,
            value: "developer_admin"
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t) {
        t4 = t("users.addModal.developerRoleAgent") || "Agent";
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = {
            label: t4,
            value: "developer_agent"
        };
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = [
            t3,
            t5
        ];
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const developerRoleOptions = t6;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$create$2d$new$2d$user$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNewUserSchema"]);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            resolver: t7,
            defaultValues: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "+",
                password: "",
                password_confirmation: "",
                role_id: undefined,
                status: "active",
                description: "",
                profile_picture: "",
                developer_id: undefined,
                developer_role: ""
            }
        };
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t8);
    let t9;
    if ($[14] !== methods || $[15] !== roles) {
        t9 = ({
            "AddUserModal[handleUserTypeChange]": (selectedUserType)=>{
                methods.setValue("user_type", selectedUserType);
                const isDev = selectedUserType?.toLowerCase() === "developer";
                setIsDeveloper(isDev);
                if (!isDev) {
                    methods.setValue("developer_id", undefined);
                    methods.setValue("developer_role", "");
                }
                if (selectedUserType?.toLowerCase() === "expert") {
                    const expertRole = roles.find(_AddUserModalHandleUserTypeChangeAnonymous);
                    if (expertRole) {
                        methods.setValue("role_id", Number(expertRole.role_id ?? expertRole.id));
                    }
                }
            }
        })["AddUserModal[handleUserTypeChange]"];
        $[14] = methods;
        $[15] = roles;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const handleUserTypeChange = t9;
    let t10;
    if ($[17] !== handleUserTypeChange || $[18] !== methods || $[19] !== roles) {
        t10 = ({
            "AddUserModal[handleRoleChange]": (selectedRoleId)=>{
                methods.setValue("role_id", selectedRoleId);
                const selectedRole = roles.find({
                    "AddUserModal[handleRoleChange > (anonymous)()]": (r_0)=>(r_0.role_id ?? r_0.id) === selectedRoleId
                }["AddUserModal[handleRoleChange > (anonymous)()]"]);
                const roleName = (selectedRole?.role_name ?? selectedRole?.name)?.toLowerCase();
                if (roleName === "expert") {
                    methods.setValue("user_type", "expert");
                    setIsDeveloper(false);
                    methods.setValue("developer_id", undefined);
                    methods.setValue("developer_role", "");
                } else {
                    if (roleName === "developer") {
                        handleUserTypeChange("developer");
                    } else {
                        if (roleName === "admin") {
                            const current = methods.getValues("user_type");
                            if (!current || current === "developer") {
                                methods.setValue("user_type", "admin");
                                setIsDeveloper(false);
                                methods.setValue("developer_id", undefined);
                                methods.setValue("developer_role", "");
                            }
                        }
                    }
                }
            }
        })["AddUserModal[handleRoleChange]"];
        $[17] = handleUserTypeChange;
        $[18] = methods;
        $[19] = roles;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const handleRoleChange = t10;
    let t11;
    if ($[21] !== methods || $[22] !== onClose) {
        t11 = ({
            "AddUserModal[handleClose]": ()=>{
                methods.reset();
                setIsDeveloper(false);
                setSelectedCountryId(undefined);
                onClose();
            }
        })["AddUserModal[handleClose]"];
        $[21] = methods;
        $[22] = onClose;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const handleClose = t11;
    let t12;
    if ($[24] !== methods.setError || $[25] !== onSubmit) {
        t12 = ({
            "AddUserModal[onSubmitForm]": async (data)=>{
                ;
                try {
                    await onSubmit(data);
                } catch (t13) {
                    const error = t13;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleServerValidationError"])(error, methods.setError);
                }
            }
        })["AddUserModal[onSubmitForm]"];
        $[24] = methods.setError;
        $[25] = onSubmit;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const onSubmitForm = t12;
    let t13;
    if ($[27] !== t) {
        t13 = ({
            "AddUserModal[onInvalidForm]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("validation.fillRequiredFields") || "Please fill in all required fields correctly.");
            }
        })["AddUserModal[onInvalidForm]"];
        $[27] = t;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const onInvalidForm = t13;
    let t14;
    if ($[29] !== t) {
        t14 = t("users.addModal.title") || "Add New User";
        $[29] = t;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t) {
        t15 = t("users.addModal.close") || "Close";
        $[31] = t;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== handleClose || $[34] !== isPending || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: handleClose,
            disabled: isPending,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[33] = handleClose;
        $[34] = isPending;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== methods || $[38] !== onInvalidForm || $[39] !== onSubmitForm) {
        t17 = methods.handleSubmit(onSubmitForm, onInvalidForm);
        $[37] = methods;
        $[38] = onInvalidForm;
        $[39] = onSubmitForm;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== isPending) {
        t18 = isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 293,
            columnNumber: 24
        }, this);
        $[41] = isPending;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== isPending || $[44] !== t) {
        t19 = isPending ? t("users.addModal.adding") || "Adding..." : t("users.addModal.addUser") || "Add User";
        $[43] = isPending;
        $[44] = t;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== isPending || $[47] !== t17 || $[48] !== t18 || $[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2",
            onClick: t17,
            disabled: isPending,
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[46] = isPending;
        $[47] = t17;
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t16 || $[52] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 justify-end w-full",
            children: [
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[51] = t16;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== methods || $[55] !== onInvalidForm || $[56] !== onSubmitForm) {
        t22 = methods.handleSubmit(onSubmitForm, onInvalidForm);
        $[54] = methods;
        $[55] = onInvalidForm;
        $[56] = onSubmitForm;
        $[57] = t22;
    } else {
        t22 = $[57];
    }
    let t23;
    if ($[58] !== handleRoleChange || $[59] !== handleUserTypeChange || $[60] !== roles || $[61] !== rolesLoading) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$BasicInfoFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BasicInfoFields"], {
            roles: roles,
            rolesLoading: rolesLoading,
            onRoleChange: handleRoleChange,
            onUserTypeChange: handleUserTypeChange
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[58] = handleRoleChange;
        $[59] = handleUserTypeChange;
        $[60] = roles;
        $[61] = rolesLoading;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== countries || $[64] !== countriesLoading || $[65] !== developerRoleOptions || $[66] !== developers || $[67] !== developersLoading || $[68] !== isDeveloper || $[69] !== selectedCountryId) {
        t24 = isDeveloper && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$DeveloperFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperFields"], {
            countries: countries,
            countriesLoading: countriesLoading,
            selectedCountryId: selectedCountryId,
            setSelectedCountryId: setSelectedCountryId,
            developers: developers,
            developersLoading: developersLoading,
            developerRoleOptions: developerRoleOptions
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 351,
            columnNumber: 26
        }, this);
        $[63] = countries;
        $[64] = countriesLoading;
        $[65] = developerRoleOptions;
        $[66] = developers;
        $[67] = developersLoading;
        $[68] = isDeveloper;
        $[69] = selectedCountryId;
        $[70] = t24;
    } else {
        t24 = $[70];
    }
    let t25;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$users$2f$components$2f$PasswordFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordFields"], {}, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[71] = t25;
    } else {
        t25 = $[71];
    }
    let t26;
    if ($[72] !== methods.formState.errors.root) {
        t26 = methods.formState.errors.root && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-2",
            children: methods.formState.errors.root.message
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 372,
            columnNumber: 44
        }, this);
        $[72] = methods.formState.errors.root;
        $[73] = t26;
    } else {
        t26 = $[73];
    }
    let t27;
    if ($[74] !== t22 || $[75] !== t23 || $[76] !== t24 || $[77] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t22,
            className: "space-y-5",
            children: [
                t23,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[74] = t22;
        $[75] = t23;
        $[76] = t24;
        $[77] = t26;
        $[78] = t27;
    } else {
        t27 = $[78];
    }
    let t28;
    if ($[79] !== methods || $[80] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
            ...methods,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[79] = methods;
        $[80] = t27;
        $[81] = t28;
    } else {
        t28 = $[81];
    }
    let t29;
    if ($[82] !== handleClose || $[83] !== isOpen || $[84] !== t14 || $[85] !== t21 || $[86] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: handleClose,
            title: t14,
            size: "md",
            scrollable: true,
            showCloseButton: false,
            footer: t21,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/modals/users/add-user-modal.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[82] = handleClose;
        $[83] = isOpen;
        $[84] = t14;
        $[85] = t21;
        $[86] = t28;
        $[87] = t29;
    } else {
        t29 = $[87];
    }
    return t29;
}
_s(AddUserModal, "zEdJKEbvgIS3V1cMh88FJm6kc5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$roles$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolesSelect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developers$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevelopersSelect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = AddUserModal;
function _AddUserModalHandleUserTypeChangeAnonymous(r) {
    return (r.role_name ?? r.name)?.toLowerCase?.() === "expert";
}
var _c;
__turbopack_context__.k.register(_c, "AddUserModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/users/add-user-modal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/modals/users/add-user-modal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_1d210d5e._.js.map