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
"[project]/src/features/developers/utils/map-developer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapDeveloper",
    ()=>mapDeveloper,
    "unpackDevelopersResponse",
    ()=>unpackDevelopersResponse
]);
function unpackDevelopersResponse(devData) {
    const rawData = devData?.data;
    let itemsArray = [];
    if (Array.isArray(rawData)) {
        itemsArray = rawData;
    } else {
        const nested = rawData?.developers;
        if (Array.isArray(nested)) itemsArray = nested;
    }
    let totalItems = itemsArray.length;
    if (typeof devData?.total === "number") {
        totalItems = devData.total;
    } else if (rawData && typeof rawData === "object" && "total" in rawData) {
        totalItems = rawData.total;
    }
    return {
        itemsArray,
        totalItems
    };
}
function mapDeveloper(dev) {
    return {
        id: dev.developer_id,
        name: dev.developer_name || "N/A",
        countries: dev.countries || "N/A",
        cities: dev.cities || "N/A",
        projects: dev.projects_count || 0,
        website: dev.website || "N/A",
        email: dev.email || "N/A",
        contact: dev.phone_number || "N/A",
        status: dev.status === "active" || Boolean(dev.is_active),
        logo: dev.logo
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/developers/services/AdminDevelopersService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDevelopersService",
    ()=>AdminDevelopersService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
const AdminDevelopersService = {
    getDevelopersPaginated: async (page = 1, perPage = 10, search, status, countryId)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search) params.append("search", search);
        if (status && status !== "all") params.append("status", status);
        if (countryId && countryId !== "all") params.append("country_id", countryId);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/developers?${params.toString()}`);
        return response.data;
    },
    getAllDevelopers: async (countryId)=>{
        const params = new URLSearchParams();
        if (countryId && countryId !== "all") params.append("country_id", countryId.toString());
        const query = params.toString() ? `?${params.toString()}` : "";
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/developers/all${query}`);
        return response.data;
    },
    getDeveloper: async (developerId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/developers/${developerId}`);
        return response.data;
    },
    createDeveloper: (data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/developers", data);
    },
    updateDeveloper: (developerId, data)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/developers/${developerId}`, data);
    },
    deleteDeveloper: (developerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/developers/${developerId}`);
    },
    toggleStatus: (developerId, status)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/developers/${developerId}/toggle-status`, {
            status: status,
            is_active: status === "active" ? 1 : 0
        });
    },
    bulkImportDevelopers: (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/import/developers", formData);
    },
    getCountries: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/countries");
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-ad-edit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdEditData",
    ()=>useAdEditData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/utils/map-project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/utils/map-developer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/services/AdminDevelopersService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
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
function useAdEditData(adId, isOpen, country, developerId, linkTo) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "ebdcde323831f1beffdbda0a536655d68a3e5efac3a91c2d3b01067caac1a307") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebdcde323831f1beffdbda0a536655d68a3e5efac3a91c2d3b01067caac1a307";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [developerSearch, setDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSearch, setProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [propertySearch, setPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedDeveloperSearch, setDebouncedDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedProjectSearch, setDebouncedProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedPropertySearch, setDebouncedPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] !== developerSearch) {
        t0 = ({
            "useAdEditData[useEffect()]": ()=>{
                const timer = setTimeout({
                    "useAdEditData[useEffect() > setTimeout()]": ()=>setDebouncedDeveloperSearch(developerSearch)
                }["useAdEditData[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer);
            }
        })["useAdEditData[useEffect()]"];
        t1 = [
            developerSearch
        ];
        $[1] = developerSearch;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[4] !== projectSearch) {
        t2 = ({
            "useAdEditData[useEffect()]": ()=>{
                const timer_0 = setTimeout({
                    "useAdEditData[useEffect() > setTimeout()]": ()=>setDebouncedProjectSearch(projectSearch)
                }["useAdEditData[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer_0);
            }
        })["useAdEditData[useEffect()]"];
        t3 = [
            projectSearch
        ];
        $[4] = projectSearch;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[7] !== propertySearch) {
        t4 = ({
            "useAdEditData[useEffect()]": ()=>{
                const timer_1 = setTimeout({
                    "useAdEditData[useEffect() > setTimeout()]": ()=>setDebouncedPropertySearch(propertySearch)
                }["useAdEditData[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer_1);
            }
        })["useAdEditData[useEffect()]"];
        t5 = [
            propertySearch
        ];
        $[7] = propertySearch;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "useAdEditData[useEffect()]": ()=>{
                setProjectSearch("");
                setPropertySearch("");
            }
        })["useAdEditData[useEffect()]"];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== linkTo) {
        t7 = [
            linkTo
        ];
        $[11] = linkTo;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const parsedCountry = parseInt(country);
    let t8;
    if ($[13] !== country || $[14] !== parsedCountry) {
        t8 = !isNaN(parsedCountry) ? parsedCountry.toString() : country === "Egypt" ? "1" : country === "UAE" ? "2" : country === "Oman" ? "3" : "1";
        $[13] = country;
        $[14] = parsedCountry;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const countryId = t8;
    let t9;
    if ($[16] !== adId) {
        t9 = [
            "ad",
            adId
        ];
        $[16] = adId;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== adId || $[19] !== token) {
        t10 = async ()=>{
            if (!adId || !token) {
                return null;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAd"])(adId.toString(), token);
            return response?.data || response;
        };
        $[18] = adId;
        $[19] = token;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const t11 = !!adId && !!token && isOpen;
    let t12;
    if ($[21] !== t10 || $[22] !== t11 || $[23] !== t9) {
        t12 = {
            queryKey: t9,
            queryFn: t10,
            enabled: t11,
            staleTime: 0,
            gcTime: 0
        };
        $[21] = t10;
        $[22] = t11;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const { data: adData, isLoading: loadingAd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t12);
    let t13;
    if ($[25] !== countryId || $[26] !== debouncedDeveloperSearch) {
        t13 = [
            "developers",
            countryId,
            debouncedDeveloperSearch
        ];
        $[25] = countryId;
        $[26] = debouncedDeveloperSearch;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== country || $[29] !== countryId || $[30] !== debouncedDeveloperSearch) {
        t14 = async ()=>{
            const countryParam = country && country !== "all" ? countryId : undefined;
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].getDevelopersPaginated(1, 50, debouncedDeveloperSearch || undefined, undefined, countryParam);
            const { itemsArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackDevelopersResponse"])(data);
            return itemsArray.map(_useAdEditDataAnonymousItemsArrayMap).filter(_useAdEditDataAnonymousAnonymous);
        };
        $[28] = country;
        $[29] = countryId;
        $[30] = debouncedDeveloperSearch;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    const t15 = !!token && isOpen;
    let t16;
    if ($[32] !== t13 || $[33] !== t14 || $[34] !== t15) {
        t16 = {
            queryKey: t13,
            queryFn: t14,
            enabled: t15,
            staleTime: 300000
        };
        $[32] = t13;
        $[33] = t14;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    const { data: developersData, isLoading: developersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t16);
    let t17;
    if ($[36] !== countryId || $[37] !== debouncedProjectSearch || $[38] !== developerId) {
        t17 = [
            "projects",
            developerId,
            countryId,
            debouncedProjectSearch
        ];
        $[36] = countryId;
        $[37] = debouncedProjectSearch;
        $[38] = developerId;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== countryId || $[41] !== debouncedProjectSearch || $[42] !== developerId || $[43] !== token) {
        t18 = async ()=>{
            const devIdNum = developerId ? parseInt(developerId) : undefined;
            const params = {
                page: 1,
                per_page: 100
            };
            if (devIdNum && !isNaN(devIdNum)) {
                params.developer_id = devIdNum;
            }
            if (countryId) {
                params.country_id = countryId;
            }
            if (debouncedProjectSearch && debouncedProjectSearch.trim()) {
                params.search = debouncedProjectSearch.trim();
            }
            const results = await Promise.allSettled([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/projects", {
                    params
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchV2Projects"])(token, 1, 100, devIdNum, debouncedProjectSearch || undefined),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectsDropdown"])(token, devIdNum, debouncedProjectSearch || undefined, countryId)
            ]);
            const allItemsMap = new Map();
            results.forEach({
                "useAdEditData[<anonymous> > results.forEach()]": (res)=>{
                    if (res.status === "fulfilled" && res.value) {
                        const val = res.value?.data || res.value;
                        const { itemsArray: itemsArray_0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackProjectsResponse"])(val);
                        const devProjects = Array.isArray(val?.data?.projects) ? val.data.projects : Array.isArray(val?.projects) ? val.projects : Array.isArray(val?.data) ? val.data : [];
                        const combined = [
                            ...itemsArray_0,
                            ...devProjects
                        ];
                        combined.forEach({
                            "useAdEditData[<anonymous> > results.forEach() > combined.forEach()]": (proj)=>{
                                if (!proj) {
                                    return;
                                }
                                const rawId = proj.project_id || proj.id || proj.projectId || proj.value;
                                const name = proj.project_name || proj.name || proj.title || proj.projectName || proj.label || (rawId ? `Project #${rawId}` : "");
                                if (devIdNum) {
                                    const pDevId = proj.developer_id || proj.developer?.developer_id || proj.developer?.id || proj.developerId;
                                    if (pDevId && !isNaN(parseInt(pDevId)) && parseInt(pDevId) !== devIdNum) {
                                        return;
                                    }
                                }
                                if (rawId && name) {
                                    const id = typeof rawId === "number" ? rawId : parseInt(rawId);
                                    if (!isNaN(id)) {
                                        allItemsMap.set(id.toString(), {
                                            id,
                                            name
                                        });
                                    }
                                }
                            }
                        }["useAdEditData[<anonymous> > results.forEach() > combined.forEach()]"]);
                    }
                }
            }["useAdEditData[<anonymous> > results.forEach()]"]);
            return Array.from(allItemsMap.values());
        };
        $[40] = countryId;
        $[41] = debouncedProjectSearch;
        $[42] = developerId;
        $[43] = token;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    const t19 = !!token && isOpen && (linkTo === "PROJECTS" || !linkTo);
    let t20;
    if ($[45] !== t17 || $[46] !== t18 || $[47] !== t19) {
        t20 = {
            queryKey: t17,
            queryFn: t18,
            enabled: t19,
            staleTime: 300000
        };
        $[45] = t17;
        $[46] = t18;
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    const { data: projectsData, isLoading: projectsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t20);
    let t21;
    let t22;
    if ($[49] !== debouncedPropertySearch || $[50] !== developerId) {
        t21 = [
            "properties",
            developerId,
            debouncedPropertySearch
        ];
        t22 = async ()=>{
            const devIdNum_0 = developerId ? parseInt(developerId) : undefined;
            const params_0 = {
                page: 1,
                per_page: 100
            };
            if (devIdNum_0 && !isNaN(devIdNum_0)) {
                params_0.developer_id = devIdNum_0;
            }
            if (debouncedPropertySearch && debouncedPropertySearch.trim()) {
                params_0.property_name = debouncedPropertySearch.trim();
            }
            const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/properties", {
                params: params_0
            });
            const raw = response_0.data;
            const propItems = (()=>{
                if (!raw) {
                    return [];
                }
                if (Array.isArray(raw)) {
                    return raw;
                }
                if (Array.isArray(raw.data)) {
                    return raw.data;
                }
                if (raw.data && Array.isArray(raw.data.data)) {
                    return raw.data.data;
                }
                if (raw.data && Array.isArray(raw.data.properties)) {
                    return raw.data.properties;
                }
                if (Array.isArray(raw.properties)) {
                    return raw.properties;
                }
                return [];
            })();
            return propItems.filter({
                "useAdEditData[<anonymous> > propItems.filter()]": (prop)=>{
                    if (!prop) {
                        return false;
                    }
                    if (devIdNum_0) {
                        const propDevId = prop.developer_id || prop.developer?.developer_id || prop.developer?.id || prop.developerId;
                        if (propDevId && !isNaN(parseInt(propDevId)) && parseInt(propDevId) !== devIdNum_0) {
                            return false;
                        }
                    }
                    return true;
                }
            }["useAdEditData[<anonymous> > propItems.filter()]"]).map(_useAdEditDataAnonymousAnonymous2).filter(_useAdEditDataAnonymousAnonymous3);
        };
        $[49] = debouncedPropertySearch;
        $[50] = developerId;
        $[51] = t21;
        $[52] = t22;
    } else {
        t21 = $[51];
        t22 = $[52];
    }
    const t23 = !!token && isOpen && linkTo === "PROPERTIES";
    let t24;
    if ($[53] !== t21 || $[54] !== t22 || $[55] !== t23) {
        t24 = {
            queryKey: t21,
            queryFn: t22,
            enabled: t23,
            staleTime: 300000
        };
        $[53] = t21;
        $[54] = t22;
        $[55] = t23;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    const { data: propertiesData, isLoading: propertiesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t24);
    let t25;
    if ($[57] !== developersData) {
        t25 = developersData || [];
        $[57] = developersData;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== projectsData) {
        t26 = projectsData || [];
        $[59] = projectsData;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] !== propertiesData) {
        t27 = propertiesData || [];
        $[61] = propertiesData;
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== adData || $[64] !== developerSearch || $[65] !== developersLoading || $[66] !== loadingAd || $[67] !== projectSearch || $[68] !== projectsLoading || $[69] !== propertiesLoading || $[70] !== propertySearch || $[71] !== t25 || $[72] !== t26 || $[73] !== t27) {
        t28 = {
            loadingAd,
            adData,
            developers: t25,
            developerSearch,
            setDeveloperSearch,
            developersLoading,
            developerHasMore: false,
            projects: t26,
            properties: t27,
            projectsLoading,
            propertiesLoading,
            projectSearch,
            setProjectSearch,
            propertySearch,
            setPropertySearch
        };
        $[63] = adData;
        $[64] = developerSearch;
        $[65] = developersLoading;
        $[66] = loadingAd;
        $[67] = projectSearch;
        $[68] = projectsLoading;
        $[69] = propertiesLoading;
        $[70] = propertySearch;
        $[71] = t25;
        $[72] = t26;
        $[73] = t27;
        $[74] = t28;
    } else {
        t28 = $[74];
    }
    return t28;
}
_s(useAdEditData, "O0aLahei+C4M4XV0/Ob1fI3v1Gg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _useAdEditDataAnonymousAnonymous3(prop_1) {
    return prop_1.id !== undefined && prop_1.id !== null;
}
function _useAdEditDataAnonymousAnonymous2(prop_0) {
    const propId = prop_0.property_id ?? prop_0.id ?? prop_0.property_no;
    const propName = (prop_0.property_name != null && String(prop_0.property_name).trim() !== "" ? String(prop_0.property_name) : null) || (prop_0.name != null && String(prop_0.name).trim() !== "" ? String(prop_0.name) : null) || (prop_0.title != null && String(prop_0.title).trim() !== "" ? String(prop_0.title) : null) || (prop_0.property_no != null && String(prop_0.property_no).trim() !== "" ? String(prop_0.property_no) : null) || (prop_0.unitNumber ? `Unit ${prop_0.unitNumber}` : "") || `Property #${propId}`;
    return {
        id: propId,
        name: propName
    };
}
function _useAdEditDataAnonymousAnonymous(dev_0) {
    return dev_0.id;
}
function _useAdEditDataAnonymousItemsArrayMap(dev) {
    return {
        id: dev.developer_id || dev.id,
        name: dev.developer_name || dev.name || `Developer #${dev.developer_id || dev.id}`
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAdModalHeader",
    ()=>EditAdModalHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditAdModalHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "524cf182c9456dbe291dc9db786ec2134c3fc691a2235c61025b2865c3751d4e") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "524cf182c9456dbe291dc9db786ec2134c3fc691a2235c61025b2865c3751d4e";
    }
    const { adId } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
                lineNumber: 27,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== isAr || $[3] !== t) {
        t2 = t("ads.details.editAd") || (isAr ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Edit Advertisement");
        $[2] = isAr;
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = adId ? isAr ? `تعديل تفاصيل الإعلان #${adId}` : `Update details for Ad #${adId}` : "";
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-neutral-500 dark:text-neutral-400 font-normal",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t3,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
                    lineNumber: 60,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(EditAdModalHeader, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EditAdModalHeader;
var _c;
__turbopack_context__.k.register(_c, "EditAdModalHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAdModalFooter",
    ()=>EditAdModalFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function EditAdModalFooter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9461c22ff7d006481745ba3a84002aac15f72b99eac2b536b6748b6d0f13d8f5") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9461c22ff7d006481745ba3a84002aac15f72b99eac2b536b6748b6d0f13d8f5";
    }
    const { onClose, onSubmit, isUpdating } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const t1 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t2;
    if ($[1] !== isUpdating || $[2] !== onClose || $[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: isUpdating,
            className: "h-9 text-xs sm:text-sm font-medium border-neutral-200 dark:border-neutral-700",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = isUpdating;
        $[2] = onClose;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isAr || $[6] !== isUpdating || $[7] !== t) {
        t3 = isUpdating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent mr-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
                    lineNumber: 42,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u062F\u064A\u062B..." : "Updating..."
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
                    lineNumber: 42,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t("ads.details.editAd") || (isAr ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Update Ad")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
            lineNumber: 42,
            columnNumber: 255
        }, this);
        $[5] = isAr;
        $[6] = isUpdating;
        $[7] = t;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== isUpdating || $[10] !== onSubmit || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20",
            onClick: onSubmit,
            disabled: isUpdating,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[9] = isUpdating;
        $[10] = onSubmit;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-3 w-full pt-2",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    return t5;
}
_s(EditAdModalFooter, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = EditAdModalFooter;
var _c;
__turbopack_context__.k.register(_c, "EditAdModalFooter");
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
"[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdTitleSection",
    ()=>AdTitleSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdTitleSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "5efed0e2277d00b03019010d093aa7cf8763faf978dc2c5c96367e05bb4e687f") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5efed0e2277d00b03019010d093aa7cf8763faf978dc2c5c96367e05bb4e687f";
    }
    const { register } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== isAr || $[3] !== t) {
        t2 = t("ads.createStepOne.campaignOverview") || (isAr ? "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0645\u0644\u0629" : "Campaign Overview");
        $[2] = isAr;
        $[3] = t;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
                    lineNumber: 45,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== isAr || $[8] !== t) {
        t4 = t("ads.createStepOne.adTitle") || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Title");
        $[7] = isAr;
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t4,
                " ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== isAr || $[14] !== t) {
        t7 = t("ads.createStepOne.adTitleHint") || (isAr ? "\u0627\u0644\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u0627\u0644\u0639\u0627\u0645" : "Internal & public identifier");
        $[13] = isAr;
        $[14] = t;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== isAr || $[22] !== t) {
        t10 = t("ads.createStepOne.adTitlePlaceholder") || (isAr ? "\u0645\u062B\u0627\u0644: \u0641\u0644\u0644 \u0641\u0627\u062E\u0631\u0629 \u0639\u0644\u0649 \u0634\u0627\u0637\u0626 \u0627\u0644\u0628\u062D\u0631" : "e.g., Luxury Beachfront Villas");
        $[21] = isAr;
        $[22] = t;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== isAr || $[25] !== register || $[26] !== t) {
        t11 = register("title", {
            required: t("ads.createStepOne.adTitleRequired") || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required"),
            minLength: {
                value: 2,
                message: t("ads.createStepOne.adTitleMinLength") || (isAr ? "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0639\u0646 \u062D\u0631\u0641\u064A\u0646" : "Title must be at least 2 characters")
            }
        });
        $[24] = isAr;
        $[25] = register;
        $[26] = t;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10 || $[29] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t10,
            ...t11,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t12 || $[32] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t9;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== t13 || $[35] !== t3) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t3,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t3;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    return t14;
}
_s(AdTitleSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AdTitleSection;
var _c;
__turbopack_context__.k.register(_c, "AdTitleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlacementSection",
    ()=>PlacementSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
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
const LOCATIONS = [
    {
        value: "Home Top",
        key: "ads.createStepOne.locHomeTop",
        defaultLabel: "Home Top"
    },
    {
        value: "Home Bottom",
        key: "ads.createStepOne.locHomeBottom",
        defaultLabel: "Home Bottom"
    },
    {
        value: "Featured Cards",
        key: "ads.createStepOne.locFeaturedCards",
        defaultLabel: "Featured Cards"
    },
    {
        value: "Project Listing",
        key: "ads.createStepOne.locProjectListing",
        defaultLabel: "Project Listing"
    },
    {
        value: "property Listing",
        key: "ads.createStepOne.locPropertyListing",
        defaultLabel: "Property Listing"
    },
    {
        value: "Unit Listing",
        key: "ads.createStepOne.locUnitListing",
        defaultLabel: "Unit Listing"
    },
    {
        value: "Developer Listing",
        key: "ads.createStepOne.locDeveloperListing",
        defaultLabel: "Developer Listing"
    }
];
function PlacementSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(215);
    if ($[0] !== "f9c14dc4adebab0bc142d844a1fc6a79f7f252ed3bcd104af38a55aab3509e60") {
        for(let $i = 0; $i < 215; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f9c14dc4adebab0bc142d844a1fc6a79f7f252ed3bcd104af38a55aab3509e60";
    }
    const { watch, setValue } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== watch) {
        t1 = watch("type") || "banner";
        $[1] = watch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const type = t1;
    let t2;
    if ($[3] !== watch) {
        t2 = watch("platform") || "web";
        $[3] = watch;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const platform = t2;
    let t3;
    if ($[5] !== watch) {
        t3 = watch("width") || "medium";
        $[5] = watch;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const width = t3;
    let t4;
    if ($[7] !== watch) {
        t4 = watch("position") || "bottom_right";
        $[7] = watch;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const position = t4;
    let t5;
    if ($[9] !== watch) {
        t5 = watch("country") || "Egypt";
        $[9] = watch;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const country = t5;
    let T0;
    let T1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[11] !== isAr || $[12] !== platform || $[13] !== position || $[14] !== setValue || $[15] !== t || $[16] !== type || $[17] !== watch || $[18] !== width) {
        const selectedLocations = watch("location") || [];
        const toggleLocation = {
            "PlacementSection[toggleLocation]": (locationVal)=>{
                const current = Array.isArray(selectedLocations) ? selectedLocations : [];
                const updated = current.includes(locationVal) ? current.filter({
                    "PlacementSection[toggleLocation > current.filter()]": (l)=>l !== locationVal
                }["PlacementSection[toggleLocation > current.filter()]"]) : [
                    ...current,
                    locationVal
                ];
                setValue("location", updated, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                });
            }
        }["PlacementSection[toggleLocation]"];
        let t16;
        if ($[31] !== isAr || $[32] !== t) {
            t16 = ({
                "PlacementSection[getLocationLabel]": (locValue)=>{
                    const found = LOCATIONS.find({
                        "PlacementSection[getLocationLabel > LOCATIONS.find()]": (l_0)=>l_0.value.toLowerCase() === locValue.toLowerCase()
                    }["PlacementSection[getLocationLabel > LOCATIONS.find()]"]);
                    if (found) {
                        const translated = t(found.key);
                        return translated && translated !== found.key ? translated : isAr ? found.value === "Home" ? "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : found.defaultLabel : found.defaultLabel;
                    }
                    return locValue;
                }
            })["PlacementSection[getLocationLabel]"];
            $[31] = isAr;
            $[32] = t;
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        const getLocationLabel = t16;
        t12 = "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4";
        let t17;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: "h-4 w-4 text-teal-600 dark:text-teal-400"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this);
            $[34] = t17;
        } else {
            t17 = $[34];
        }
        let t18;
        if ($[35] !== isAr || $[36] !== t) {
            t18 = t("ads.createStepOne.placementAudience") || (isAr ? "\u0627\u0644\u0645\u0648\u0636\u0639 \u0648\u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641" : "Placement & Audience");
            $[35] = isAr;
            $[36] = t;
            $[37] = t18;
        } else {
            t18 = $[37];
        }
        if ($[38] !== t18) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                        children: t18
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 171,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this);
            $[38] = t18;
            $[39] = t13;
        } else {
            t13 = $[39];
        }
        let t19;
        if ($[40] !== isAr || $[41] !== t) {
            t19 = t("ads.createStepOne.adFormat") || (isAr ? "\u062A\u0646\u0633\u064A\u0642 / \u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Format / Type");
            $[40] = isAr;
            $[41] = t;
            $[42] = t19;
        } else {
            t19 = $[42];
        }
        let t20;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this);
            $[43] = t20;
        } else {
            t20 = $[43];
        }
        let t21;
        if ($[44] !== t19) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t19,
                    " ",
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[44] = t19;
            $[45] = t21;
        } else {
            t21 = $[45];
        }
        let t22;
        if ($[46] !== setValue) {
            t22 = ({
                "PlacementSection[<Select>.onValueChange]": (val)=>setValue("type", val, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true
                    })
            })["PlacementSection[<Select>.onValueChange]"];
            $[46] = setValue;
            $[47] = t22;
        } else {
            t22 = $[47];
        }
        let t23;
        if ($[48] !== isAr || $[49] !== t) {
            t23 = t("ads.createStepOne.selectFormat") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0646\u0633\u064A\u0642" : "Select Format");
            $[48] = isAr;
            $[49] = t;
            $[50] = t23;
        } else {
            t23 = $[50];
        }
        let t24;
        if ($[51] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: t23
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 226,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this);
            $[51] = t23;
            $[52] = t24;
        } else {
            t24 = $[52];
        }
        let t25;
        if ($[53] !== isAr || $[54] !== t) {
            t25 = t("ads.createStepOne.formatBanner") || (isAr ? "\u0628\u0646\u0631" : "Banner");
            $[53] = isAr;
            $[54] = t;
            $[55] = t25;
        } else {
            t25 = $[55];
        }
        let t26;
        if ($[56] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "banner",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[56] = t25;
            $[57] = t26;
        } else {
            t26 = $[57];
        }
        let t27;
        if ($[58] !== isAr || $[59] !== t) {
            t27 = t("ads.createStepOne.formatCard") || (isAr ? "\u0628\u0637\u0627\u0642\u0629" : "Card");
            $[58] = isAr;
            $[59] = t;
            $[60] = t27;
        } else {
            t27 = $[60];
        }
        let t28;
        if ($[61] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "card",
                children: t27
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this);
            $[61] = t27;
            $[62] = t28;
        } else {
            t28 = $[62];
        }
        let t29;
        if ($[63] !== isAr || $[64] !== t) {
            t29 = t("ads.createStepOne.formatPopUp") || (isAr ? "\u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629" : "Pop-up");
            $[63] = isAr;
            $[64] = t;
            $[65] = t29;
        } else {
            t29 = $[65];
        }
        let t30;
        if ($[66] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "pop_up",
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, this);
            $[66] = t29;
            $[67] = t30;
        } else {
            t30 = $[67];
        }
        let t31;
        if ($[68] !== isAr || $[69] !== t) {
            t31 = t("ads.createStepOne.formatFullPage") || (isAr ? "\u0635\u0641\u062D\u0629 \u0643\u0627\u0645\u0644\u0629" : "Full Page");
            $[68] = isAr;
            $[69] = t;
            $[70] = t31;
        } else {
            t31 = $[70];
        }
        let t32;
        if ($[71] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "full_page",
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[71] = t31;
            $[72] = t32;
        } else {
            t32 = $[72];
        }
        let t33;
        if ($[73] !== t26 || $[74] !== t28 || $[75] !== t30 || $[76] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: [
                    t26,
                    t28,
                    t30,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 302,
                columnNumber: 13
            }, this);
            $[73] = t26;
            $[74] = t28;
            $[75] = t30;
            $[76] = t32;
            $[77] = t33;
        } else {
            t33 = $[77];
        }
        let t34;
        if ($[78] !== t22 || $[79] !== t24 || $[80] !== t33 || $[81] !== type) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: type,
                onValueChange: t22,
                children: [
                    t24,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[78] = t22;
            $[79] = t24;
            $[80] = t33;
            $[81] = type;
            $[82] = t34;
        } else {
            t34 = $[82];
        }
        let t35;
        if ($[83] !== t21 || $[84] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t21,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 324,
                columnNumber: 13
            }, this);
            $[83] = t21;
            $[84] = t34;
            $[85] = t35;
        } else {
            t35 = $[85];
        }
        let t36;
        if ($[86] !== isAr || $[87] !== t) {
            t36 = t("ads.createStepOne.targetPlatform") || (isAr ? "\u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Target Platform");
            $[86] = isAr;
            $[87] = t;
            $[88] = t36;
        } else {
            t36 = $[88];
        }
        let t37;
        if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 342,
                columnNumber: 13
            }, this);
            $[89] = t37;
        } else {
            t37 = $[89];
        }
        let t38;
        if ($[90] !== t36) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t36,
                    " ",
                    t37
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 349,
                columnNumber: 13
            }, this);
            $[90] = t36;
            $[91] = t38;
        } else {
            t38 = $[91];
        }
        let t39;
        if ($[92] !== setValue) {
            t39 = ({
                "PlacementSection[<Select>.onValueChange]": (val_0)=>setValue("platform", val_0, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true
                    })
            })["PlacementSection[<Select>.onValueChange]"];
            $[92] = setValue;
            $[93] = t39;
        } else {
            t39 = $[93];
        }
        let t40;
        if ($[94] !== isAr || $[95] !== t) {
            t40 = t("ads.createStepOne.selectPlatform") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0635\u0629" : "Select Platform");
            $[94] = isAr;
            $[95] = t;
            $[96] = t40;
        } else {
            t40 = $[96];
        }
        let t41;
        if ($[97] !== t40) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: t40
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 380,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, this);
            $[97] = t40;
            $[98] = t41;
        } else {
            t41 = $[98];
        }
        let t42;
        if ($[99] !== isAr || $[100] !== t) {
            t42 = t("ads.createStepOne.platformWeb") || (isAr ? "\u0627\u0644\u0648\u064A\u0628" : "Web");
            $[99] = isAr;
            $[100] = t;
            $[101] = t42;
        } else {
            t42 = $[101];
        }
        let t43;
        if ($[102] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "web",
                children: t42
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 397,
                columnNumber: 13
            }, this);
            $[102] = t42;
            $[103] = t43;
        } else {
            t43 = $[103];
        }
        let t44;
        if ($[104] !== isAr || $[105] !== t) {
            t44 = t("ads.createStepOne.platformMobile") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062C\u0648\u0627\u0644" : "Mobile App");
            $[104] = isAr;
            $[105] = t;
            $[106] = t44;
        } else {
            t44 = $[106];
        }
        let t45;
        if ($[107] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "mobile",
                children: t44
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 414,
                columnNumber: 13
            }, this);
            $[107] = t44;
            $[108] = t45;
        } else {
            t45 = $[108];
        }
        let t46;
        if ($[109] !== isAr || $[110] !== t) {
            t46 = t("ads.createStepOne.platformAndroid") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0623\u0646\u062F\u0631\u0648\u064A\u062F" : "Android App");
            $[109] = isAr;
            $[110] = t;
            $[111] = t46;
        } else {
            t46 = $[111];
        }
        let t47;
        if ($[112] !== t46) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "android",
                children: t46
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 431,
                columnNumber: 13
            }, this);
            $[112] = t46;
            $[113] = t47;
        } else {
            t47 = $[113];
        }
        let t48;
        if ($[114] !== isAr || $[115] !== t) {
            t48 = t("ads.createStepOne.platformIos") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0622\u064A \u0623\u0648 \u0625\u0633" : "iOS App");
            $[114] = isAr;
            $[115] = t;
            $[116] = t48;
        } else {
            t48 = $[116];
        }
        let t49;
        if ($[117] !== t48) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ios",
                children: t48
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 448,
                columnNumber: 13
            }, this);
            $[117] = t48;
            $[118] = t49;
        } else {
            t49 = $[118];
        }
        let t50;
        if ($[119] !== t43 || $[120] !== t45 || $[121] !== t47 || $[122] !== t49) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: [
                    t43,
                    t45,
                    t47,
                    t49
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 456,
                columnNumber: 13
            }, this);
            $[119] = t43;
            $[120] = t45;
            $[121] = t47;
            $[122] = t49;
            $[123] = t50;
        } else {
            t50 = $[123];
        }
        let t51;
        if ($[124] !== platform || $[125] !== t39 || $[126] !== t41 || $[127] !== t50) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: platform,
                onValueChange: t39,
                children: [
                    t41,
                    t50
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 467,
                columnNumber: 13
            }, this);
            $[124] = platform;
            $[125] = t39;
            $[126] = t41;
            $[127] = t50;
            $[128] = t51;
        } else {
            t51 = $[128];
        }
        let t52;
        if ($[129] !== t38 || $[130] !== t51) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t38,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 478,
                columnNumber: 13
            }, this);
            $[129] = t38;
            $[130] = t51;
            $[131] = t52;
        } else {
            t52 = $[131];
        }
        if ($[132] !== t35 || $[133] !== t52) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    t35,
                    t52
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 486,
                columnNumber: 13
            }, this);
            $[132] = t35;
            $[133] = t52;
            $[134] = t14;
        } else {
            t14 = $[134];
        }
        if ($[135] !== isAr || $[136] !== position || $[137] !== setValue || $[138] !== t || $[139] !== type || $[140] !== width) {
            t15 = type === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                                children: t("ads.createStepOne.popUpDimensions") || (isAr ? "\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629" : "Pop-up Dimensions")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 494,
                                columnNumber: 200
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: width,
                                onValueChange: {
                                    "PlacementSection[<Select>.onValueChange]": (val_1)=>setValue("width", val_1, {
                                            shouldDirty: true,
                                            shouldTouch: true,
                                            shouldValidate: true
                                        })
                                }["PlacementSection[<Select>.onValueChange]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t("ads.createStepOne.selectWidth") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0631\u0636" : "Select Width")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                            lineNumber: 500,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 500,
                                        columnNumber: 58
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "full_screen",
                                                children: t("ads.createStepOne.dimensionFullScreen") || (isAr ? "\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629" : "Full Screen")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 351
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "large",
                                                children: t("ads.createStepOne.dimensionLarge") || (isAr ? "\u0643\u0628\u064A\u0631 (600 \u0628\u0643\u0633\u0644)" : "Large (600px)")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 526
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "medium",
                                                children: t("ads.createStepOne.dimensionMedium") || (isAr ? "\u0645\u062A\u0648\u0633\u0637 (450 \u0628\u0643\u0633\u0644)" : "Medium (450px)")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 692
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "small",
                                                children: t("ads.createStepOne.dimensionSmall") || (isAr ? "\u0635\u063A\u064A\u0631 (320 \u0628\u0643\u0633\u0644)" : "Small (320px)")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 867
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "custom",
                                                children: t("ads.createStepOne.dimensionCustom") || (isAr ? "\u0645\u062E\u0635\u0635" : "Custom")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 1033
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 500,
                                        columnNumber: 336
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 494,
                                columnNumber: 498
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 494,
                        columnNumber: 195
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                                children: t("ads.createStepOne.screenPosition") || (isAr ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0638\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0634\u0627\u0634\u0629" : "Screen Position")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 500,
                                columnNumber: 1199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: position,
                                onValueChange: {
                                    "PlacementSection[<Select>.onValueChange]": (val_2)=>setValue("position", val_2, {
                                            shouldDirty: true,
                                            shouldTouch: true,
                                            shouldValidate: true
                                        })
                                }["PlacementSection[<Select>.onValueChange]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: t("ads.createStepOne.selectPosition") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0636\u0639" : "Select Position")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                            lineNumber: 506,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 506,
                                        columnNumber: 58
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_center",
                                                children: t("ads.createStepOne.posTopCenter") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u0648\u0633\u0637" : "Top Center")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 363
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "middle_center",
                                                children: t("ads.createStepOne.posMiddleCenter") || (isAr ? "\u0627\u0644\u0648\u0633\u0637 (\u0627\u0641\u062A\u0631\u0627\u0636\u064A)" : "Center (Default)")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 529
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_center",
                                                children: t("ads.createStepOne.posBottomCenter") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u0648\u0633\u0637" : "Bottom Banner")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 727
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_right",
                                                children: t("ads.createStepOne.posBottomRight") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u064A\u0645\u064A\u0646" : "Bottom Right")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 902
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_left",
                                                children: t("ads.createStepOne.posBottomLeft") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u064A\u0633\u0627\u0631" : "Bottom Left")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 1080
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_right",
                                                children: t("ads.createStepOne.posTopRight") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646" : "Top Right")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 1255
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_left",
                                                children: t("ads.createStepOne.posTopLeft") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631" : "Top Left")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 506,
                                                columnNumber: 1424
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 506,
                                        columnNumber: 348
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 500,
                                columnNumber: 1483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 500,
                        columnNumber: 1194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 494,
                columnNumber: 34
            }, this);
            $[135] = isAr;
            $[136] = position;
            $[137] = setValue;
            $[138] = t;
            $[139] = type;
            $[140] = width;
            $[141] = t15;
        } else {
            t15 = $[141];
        }
        t11 = "grid grid-cols-1 sm:grid-cols-2 gap-4";
        let t53;
        if ($[142] !== isAr || $[143] !== t) {
            t53 = t("ads.createStepOne.placementLocations") || (isAr ? "\u0623\u0645\u0627\u0643\u0646 \u0648\u0645\u0648\u0627\u0636\u0639 \u0627\u0644\u0638\u0647\u0648\u0631" : "Placement Locations");
            $[142] = isAr;
            $[143] = t;
            $[144] = t53;
        } else {
            t53 = $[144];
        }
        let t54;
        if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 529,
                columnNumber: 13
            }, this);
            $[145] = t54;
        } else {
            t54 = $[145];
        }
        if ($[146] !== t53) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t53,
                    " ",
                    t54
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this);
            $[146] = t53;
            $[147] = t10;
        } else {
            t10 = $[147];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"];
        const t55 = selectedLocations.length > 0 ? `${selectedLocations.length} ${t("ads.createStepOne.locationsCount") || (isAr ? "\u0645\u0648\u0627\u0636\u0639" : "locations")} (${selectedLocations.map(getLocationLabel).join(", ")})` : t("ads.createStepOne.selectPages") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u062D\u0627\u062A..." : "Select Pages...");
        let t56;
        if ($[148] !== t55) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: t55
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 545,
                columnNumber: 13
            }, this);
            $[148] = t55;
            $[149] = t56;
        } else {
            t56 = $[149];
        }
        let t57;
        if ($[150] === Symbol.for("react.memo_cache_sentinel")) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "h-4 w-4 opacity-50 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 553,
                columnNumber: 13
            }, this);
            $[150] = t57;
        } else {
            t57 = $[150];
        }
        if ($[151] !== t56) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "w-full justify-between bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 font-normal hover:bg-white dark:hover:bg-neutral-900 text-start h-9 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200",
                    children: [
                        t56,
                        t57
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 559,
                    columnNumber: 48
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 559,
                columnNumber: 12
            }, this);
            $[151] = t56;
            $[152] = t9;
        } else {
            t9 = $[152];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"];
        t6 = "w-60";
        t7 = "start";
        t8 = LOCATIONS.map({
            "PlacementSection[LOCATIONS.map()]": (loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                    checked: selectedLocations.includes(loc.value),
                    onCheckedChange: {
                        "PlacementSection[LOCATIONS.map() > <DropdownMenuCheckboxItem>.onCheckedChange]": ()=>toggleLocation(loc.value)
                    }["PlacementSection[LOCATIONS.map() > <DropdownMenuCheckboxItem>.onCheckedChange]"],
                    className: "text-xs",
                    children: getLocationLabel(loc.value)
                }, loc.value, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 569,
                    columnNumber: 51
                }, this)
        }["PlacementSection[LOCATIONS.map()]"]);
        $[11] = isAr;
        $[12] = platform;
        $[13] = position;
        $[14] = setValue;
        $[15] = t;
        $[16] = type;
        $[17] = watch;
        $[18] = width;
        $[19] = T0;
        $[20] = T1;
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
        $[30] = t9;
    } else {
        T0 = $[19];
        T1 = $[20];
        t10 = $[21];
        t11 = $[22];
        t12 = $[23];
        t13 = $[24];
        t14 = $[25];
        t15 = $[26];
        t6 = $[27];
        t7 = $[28];
        t8 = $[29];
        t9 = $[30];
    }
    let t16;
    if ($[153] !== T0 || $[154] !== t6 || $[155] !== t7 || $[156] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t6,
            align: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[153] = T0;
        $[154] = t6;
        $[155] = t7;
        $[156] = t8;
        $[157] = t16;
    } else {
        t16 = $[157];
    }
    let t17;
    if ($[158] !== T1 || $[159] !== t16 || $[160] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t9,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[158] = T1;
        $[159] = t16;
        $[160] = t9;
        $[161] = t17;
    } else {
        t17 = $[161];
    }
    let t18;
    if ($[162] !== t10 || $[163] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[162] = t10;
        $[163] = t17;
        $[164] = t18;
    } else {
        t18 = $[164];
    }
    let t19;
    if ($[165] !== isAr || $[166] !== t) {
        t19 = t("ads.createStepOne.country") || (isAr ? "\u0627\u0644\u062F\u0648\u0644\u0629" : "Country");
        $[165] = isAr;
        $[166] = t;
        $[167] = t19;
    } else {
        t19 = $[167];
    }
    let t20;
    if ($[168] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[168] = t20;
    } else {
        t20 = $[168];
    }
    let t21;
    if ($[169] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t19,
                " ",
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 655,
            columnNumber: 11
        }, this);
        $[169] = t19;
        $[170] = t21;
    } else {
        t21 = $[170];
    }
    let t22;
    if ($[171] !== setValue) {
        t22 = ({
            "PlacementSection[<Select>.onValueChange]": (val_3)=>{
                setValue("country", val_3, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                });
                setValue("developerId", "", {
                    shouldDirty: true
                });
                setValue("projectId", "", {
                    shouldDirty: true
                });
            }
        })["PlacementSection[<Select>.onValueChange]"];
        $[171] = setValue;
        $[172] = t22;
    } else {
        t22 = $[172];
    }
    let t23;
    if ($[173] !== isAr || $[174] !== t) {
        t23 = t("ads.createStepOne.selectCountry") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629" : "Select Country");
        $[173] = isAr;
        $[174] = t;
        $[175] = t23;
    } else {
        t23 = $[175];
    }
    let t24;
    if ($[176] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t23
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 694,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[176] = t23;
        $[177] = t24;
    } else {
        t24 = $[177];
    }
    let t25;
    if ($[178] !== isAr || $[179] !== t) {
        t25 = t("ads.createStepOne.countryEgypt") || (isAr ? "\u0645\u0635\u0631" : "Egypt");
        $[178] = isAr;
        $[179] = t;
        $[180] = t25;
    } else {
        t25 = $[180];
    }
    let t26;
    if ($[181] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Egypt",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, this);
        $[181] = t25;
        $[182] = t26;
    } else {
        t26 = $[182];
    }
    let t27;
    if ($[183] !== isAr || $[184] !== t) {
        t27 = t("ads.createStepOne.countryUAE") || (isAr ? "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629" : "United Arab Emirates");
        $[183] = isAr;
        $[184] = t;
        $[185] = t27;
    } else {
        t27 = $[185];
    }
    let t28;
    if ($[186] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "UAE",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[186] = t27;
        $[187] = t28;
    } else {
        t28 = $[187];
    }
    let t29;
    if ($[188] !== isAr || $[189] !== t) {
        t29 = t("ads.createStepOne.countryOman") || (isAr ? "\u0639\u064F\u0645\u0627\u0646" : "Oman");
        $[188] = isAr;
        $[189] = t;
        $[190] = t29;
    } else {
        t29 = $[190];
    }
    let t30;
    if ($[191] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Oman",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, this);
        $[191] = t29;
        $[192] = t30;
    } else {
        t30 = $[192];
    }
    let t31;
    if ($[193] !== t26 || $[194] !== t28 || $[195] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t26,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        $[193] = t26;
        $[194] = t28;
        $[195] = t30;
        $[196] = t31;
    } else {
        t31 = $[196];
    }
    let t32;
    if ($[197] !== country || $[198] !== t22 || $[199] !== t24 || $[200] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: country,
            onValueChange: t22,
            children: [
                t24,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 763,
            columnNumber: 11
        }, this);
        $[197] = country;
        $[198] = t22;
        $[199] = t24;
        $[200] = t31;
        $[201] = t32;
    } else {
        t32 = $[201];
    }
    let t33;
    if ($[202] !== t21 || $[203] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 774,
            columnNumber: 11
        }, this);
        $[202] = t21;
        $[203] = t32;
        $[204] = t33;
    } else {
        t33 = $[204];
    }
    let t34;
    if ($[205] !== t11 || $[206] !== t18 || $[207] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t18,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 783,
            columnNumber: 11
        }, this);
        $[205] = t11;
        $[206] = t18;
        $[207] = t33;
        $[208] = t34;
    } else {
        t34 = $[208];
    }
    let t35;
    if ($[209] !== t12 || $[210] !== t13 || $[211] !== t14 || $[212] !== t15 || $[213] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t14,
                t15,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 793,
            columnNumber: 11
        }, this);
        $[209] = t12;
        $[210] = t13;
        $[211] = t14;
        $[212] = t15;
        $[213] = t34;
        $[214] = t35;
    } else {
        t35 = $[214];
    }
    return t35;
}
_s(PlacementSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PlacementSection;
var _c;
__turbopack_context__.k.register(_c, "PlacementSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CampaignSettingsSection",
    ()=>CampaignSettingsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
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
;
function CampaignSettingsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(192);
    if ($[0] !== "9ebd08dcdecaca5a79512b9ace9b602f6cb45e641a488095d744efb4d9f6acf7") {
        for(let $i = 0; $i < 192; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ebd08dcdecaca5a79512b9ace9b602f6cb45e641a488095d744efb4d9f6acf7";
    }
    const { register, watch, setValue, dateErrors, validateDateTimeRange } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== watch) {
        t1 = watch("startDate");
        $[1] = watch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const startDate = t1;
    let t2;
    if ($[3] !== watch) {
        t2 = watch("endDate");
        $[3] = watch;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const endDate = t2;
    let t3;
    if ($[5] !== watch) {
        t3 = watch("status") || "draft";
        $[5] = watch;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const status = t3;
    let t4;
    if ($[7] !== watch) {
        t4 = watch("billing_unit") || "impression";
        $[7] = watch;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const billingUnit = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== isAr || $[11] !== t) {
        t6 = t("ads.createStepOne.campaignSchedule") || (isAr ? "\u062C\u062F\u0648\u0644 \u0627\u0644\u062D\u0645\u0644\u0629 \u0648\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0641\u0648\u062A\u0631\u0629" : "Campaign Schedule & Billing");
        $[10] = isAr;
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 94,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== isAr || $[16] !== t) {
        t8 = t("ads.createStepOne.startDate") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "Start Date");
        $[15] = isAr;
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            htmlFor: "startDate",
            children: [
                t8,
                " ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[19] = t8;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== register) {
        t11 = register("startDate", {
            required: true
        });
        $[21] = register;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const t12 = `bg-white dark:bg-neutral-900 pl-10 h-9 text-xs sm:text-sm ${dateErrors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t13;
    if ($[23] !== endDate || $[24] !== register || $[25] !== validateDateTimeRange) {
        t13 = ({
            "CampaignSettingsSection[<Input>.onChange]": (e)=>{
                register("startDate").onChange(e);
                validateDateTimeRange(e.target.value, endDate);
            }
        })["CampaignSettingsSection[<Input>.onChange]"];
        $[23] = endDate;
        $[24] = register;
        $[25] = validateDateTimeRange;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t11 || $[28] !== t12 || $[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            ...t11,
            className: t12,
            onChange: t13
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== dateErrors.startDate) {
        t17 = dateErrors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 177,
                    columnNumber: 112
                }, this),
                dateErrors.startDate
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 177,
            columnNumber: 35
        }, this);
        $[34] = dateErrors.startDate;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t10 || $[37] !== t16 || $[38] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[36] = t10;
        $[37] = t16;
        $[38] = t17;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== isAr || $[41] !== t) {
        t19 = t("ads.createStepOne.endDate") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" : "End Date (Optional)");
        $[40] = isAr;
        $[41] = t;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== isAr || $[46] !== t) {
        t21 = t("ads.createStepOne.endDateHint") || (isAr ? "\u0645\u0633\u062A\u0645\u0631 \u0641\u064A \u062D\u0627\u0644 \u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u0627\u064B" : "Continuous if empty");
        $[45] = isAr;
        $[46] = t;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== t20 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            htmlFor: "endDate",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[50] = t20;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== register) {
        t24 = register("endDate");
        $[53] = register;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    const t25 = `bg-white dark:bg-neutral-900 pl-10 h-9 text-xs sm:text-sm ${dateErrors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    const t26 = startDate || undefined;
    let t27;
    if ($[55] !== register || $[56] !== startDate || $[57] !== validateDateTimeRange) {
        t27 = ({
            "CampaignSettingsSection[<Input>.onChange]": (e_0)=>{
                register("endDate").onChange(e_0);
                validateDateTimeRange(startDate, e_0.target.value);
            }
        })["CampaignSettingsSection[<Input>.onChange]"];
        $[55] = register;
        $[56] = startDate;
        $[57] = validateDateTimeRange;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] !== t24 || $[60] !== t25 || $[61] !== t26 || $[62] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            ...t24,
            className: t25,
            min: t26,
            onChange: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[59] = t24;
        $[60] = t25;
        $[61] = t26;
        $[62] = t27;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    let t30;
    if ($[65] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[65] = t28;
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    let t31;
    if ($[67] !== dateErrors.endDate) {
        t31 = dateErrors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 289,
                    columnNumber: 110
                }, this),
                dateErrors.endDate
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 289,
            columnNumber: 33
        }, this);
        $[67] = dateErrors.endDate;
        $[68] = t31;
    } else {
        t31 = $[68];
    }
    let t32;
    if ($[69] !== t23 || $[70] !== t30 || $[71] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[69] = t23;
        $[70] = t30;
        $[71] = t31;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== t18 || $[74] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t18,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[73] = t18;
        $[74] = t32;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== dateErrors.general) {
        t34 = dateErrors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 316,
                    columnNumber: 214
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: dateErrors.general
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 316,
                    columnNumber: 263
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 316,
            columnNumber: 33
        }, this);
        $[76] = dateErrors.general;
        $[77] = t34;
    } else {
        t34 = $[77];
    }
    let t35;
    if ($[78] !== isAr || $[79] !== t) {
        t35 = t("ads.createStepOne.initialStatus") || (isAr ? "\u0627\u0644\u062D\u0627\u0644\u0629" : "Status");
        $[78] = isAr;
        $[79] = t;
        $[80] = t35;
    } else {
        t35 = $[80];
    }
    let t36;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[81] = t36;
    } else {
        t36 = $[81];
    }
    let t37;
    if ($[82] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t35,
                " ",
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[82] = t35;
        $[83] = t37;
    } else {
        t37 = $[83];
    }
    let t38;
    if ($[84] !== setValue) {
        t38 = ({
            "CampaignSettingsSection[<Select>.onValueChange]": (val)=>setValue("status", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CampaignSettingsSection[<Select>.onValueChange]"];
        $[84] = setValue;
        $[85] = t38;
    } else {
        t38 = $[85];
    }
    let t39;
    if ($[86] !== isAr || $[87] !== t) {
        t39 = t("ads.createStepOne.selectStatus") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" : "Select Status");
        $[86] = isAr;
        $[87] = t;
        $[88] = t39;
    } else {
        t39 = $[88];
    }
    let t40;
    if ($[89] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t39
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                lineNumber: 371,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[89] = t39;
        $[90] = t40;
    } else {
        t40 = $[90];
    }
    let t41;
    if ($[91] !== isAr || $[92] !== t) {
        t41 = t("ads.createStepOne.statusActive") || (isAr ? "\u0646\u0634\u0637" : "Active");
        $[91] = isAr;
        $[92] = t;
        $[93] = t41;
    } else {
        t41 = $[93];
    }
    let t42;
    if ($[94] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[94] = t41;
        $[95] = t42;
    } else {
        t42 = $[95];
    }
    let t43;
    if ($[96] !== isAr || $[97] !== t) {
        t43 = t("ads.createStepOne.statusDraft") || (isAr ? "\u0645\u0633\u0648\u062F\u0629" : "Draft");
        $[96] = isAr;
        $[97] = t;
        $[98] = t43;
    } else {
        t43 = $[98];
    }
    let t44;
    if ($[99] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[99] = t43;
        $[100] = t44;
    } else {
        t44 = $[100];
    }
    let t45;
    if ($[101] !== isAr || $[102] !== t) {
        t45 = t("ads.createStepOne.statusPaused") || (isAr ? "\u0645\u0648\u0642\u0648\u0641 \u0645\u0624\u0642\u062A\u0627\u064B" : "Paused");
        $[101] = isAr;
        $[102] = t;
        $[103] = t45;
    } else {
        t45 = $[103];
    }
    let t46;
    if ($[104] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[104] = t45;
        $[105] = t46;
    } else {
        t46 = $[105];
    }
    let t47;
    if ($[106] !== isAr || $[107] !== t) {
        t47 = t("ads.createStepOne.statusEnded") || (isAr ? "\u0645\u0646\u062A\u0647\u064A" : "Ended");
        $[106] = isAr;
        $[107] = t;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[109] = t47;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] !== t42 || $[112] !== t44 || $[113] !== t46 || $[114] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t42,
                t44,
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[111] = t42;
        $[112] = t44;
        $[113] = t46;
        $[114] = t48;
        $[115] = t49;
    } else {
        t49 = $[115];
    }
    let t50;
    if ($[116] !== status || $[117] !== t38 || $[118] !== t40 || $[119] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t38,
            children: [
                t40,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[116] = status;
        $[117] = t38;
        $[118] = t40;
        $[119] = t49;
        $[120] = t50;
    } else {
        t50 = $[120];
    }
    let t51;
    if ($[121] !== t37 || $[122] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[121] = t37;
        $[122] = t50;
        $[123] = t51;
    } else {
        t51 = $[123];
    }
    let t52;
    if ($[124] !== isAr || $[125] !== t) {
        t52 = t("ads.createStepOne.priorityLevel") || (isAr ? "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 (1 - 10)" : "Priority Level (1 - 10)");
        $[124] = isAr;
        $[125] = t;
        $[126] = t52;
    } else {
        t52 = $[126];
    }
    let t53;
    if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[127] = t53;
    } else {
        t53 = $[127];
    }
    let t54;
    if ($[128] !== t52) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t52,
                " ",
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[128] = t52;
        $[129] = t54;
    } else {
        t54 = $[129];
    }
    let t55;
    if ($[130] !== register) {
        t55 = register("priority", {
            required: true,
            min: 1,
            max: 10
        });
        $[130] = register;
        $[131] = t55;
    } else {
        t55 = $[131];
    }
    let t56;
    if ($[132] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "number",
            min: "1",
            max: "10",
            placeholder: "1",
            ...t55,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[132] = t55;
        $[133] = t56;
    } else {
        t56 = $[133];
    }
    let t57;
    if ($[134] !== t54 || $[135] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t54,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[134] = t54;
        $[135] = t56;
        $[136] = t57;
    } else {
        t57 = $[136];
    }
    let t58;
    if ($[137] !== isAr || $[138] !== t) {
        t58 = t("ads.createStepOne.billingUnit") || (isAr ? "\u0648\u062D\u062F\u0629 \u0627\u0644\u0641\u0648\u062A\u0631\u0629" : "Billing Unit");
        $[137] = isAr;
        $[138] = t;
        $[139] = t58;
    } else {
        t58 = $[139];
    }
    let t59;
    if ($[140] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[140] = t59;
    } else {
        t59 = $[140];
    }
    let t60;
    if ($[141] !== t58) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t58,
                " ",
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[141] = t58;
        $[142] = t60;
    } else {
        t60 = $[142];
    }
    let t61;
    if ($[143] !== setValue) {
        t61 = ({
            "CampaignSettingsSection[<Select>.onValueChange]": (val_0)=>setValue("billing_unit", val_0, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CampaignSettingsSection[<Select>.onValueChange]"];
        $[143] = setValue;
        $[144] = t61;
    } else {
        t61 = $[144];
    }
    let t62;
    if ($[145] !== isAr || $[146] !== t) {
        t62 = t("ads.createStepOne.selectBilling") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0648\u062A\u0631\u0629" : "Select Billing Unit");
        $[145] = isAr;
        $[146] = t;
        $[147] = t62;
    } else {
        t62 = $[147];
    }
    let t63;
    if ($[148] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t62
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                lineNumber: 578,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, this);
        $[148] = t62;
        $[149] = t63;
    } else {
        t63 = $[149];
    }
    let t64;
    if ($[150] !== isAr || $[151] !== t) {
        t64 = t("ads.createStepOne.billingImpression") || (isAr ? "\u0627\u0644\u0638\u0647\u0648\u0631 (CPM)" : "Impression (CPM)");
        $[150] = isAr;
        $[151] = t;
        $[152] = t64;
    } else {
        t64 = $[152];
    }
    let t65;
    if ($[153] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "impression",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[153] = t64;
        $[154] = t65;
    } else {
        t65 = $[154];
    }
    let t66;
    if ($[155] !== isAr || $[156] !== t) {
        t66 = t("ads.createStepOne.billingClick") || (isAr ? "\u0627\u0644\u0646\u0642\u0631\u0629 (CPC)" : "Click (CPC)");
        $[155] = isAr;
        $[156] = t;
        $[157] = t66;
    } else {
        t66 = $[157];
    }
    let t67;
    if ($[158] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "click",
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, this);
        $[158] = t66;
        $[159] = t67;
    } else {
        t67 = $[159];
    }
    let t68;
    if ($[160] !== isAr || $[161] !== t) {
        t68 = t("ads.createStepOne.billingView") || (isAr ? "\u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629 (CPV)" : "View (CPV)");
        $[160] = isAr;
        $[161] = t;
        $[162] = t68;
    } else {
        t68 = $[162];
    }
    let t69;
    if ($[163] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "view",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[163] = t68;
        $[164] = t69;
    } else {
        t69 = $[164];
    }
    let t70;
    if ($[165] !== isAr || $[166] !== t) {
        t70 = t("ads.createStepOne.billingMonth") || (isAr ? "\u0634\u0647\u0631\u064A \u062B\u0627\u0628\u062A" : "Monthly Flat");
        $[165] = isAr;
        $[166] = t;
        $[167] = t70;
    } else {
        t70 = $[167];
    }
    let t71;
    if ($[168] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "month",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 646,
            columnNumber: 11
        }, this);
        $[168] = t70;
        $[169] = t71;
    } else {
        t71 = $[169];
    }
    let t72;
    if ($[170] !== t65 || $[171] !== t67 || $[172] !== t69 || $[173] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t65,
                t67,
                t69,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 654,
            columnNumber: 11
        }, this);
        $[170] = t65;
        $[171] = t67;
        $[172] = t69;
        $[173] = t71;
        $[174] = t72;
    } else {
        t72 = $[174];
    }
    let t73;
    if ($[175] !== billingUnit || $[176] !== t61 || $[177] !== t63 || $[178] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: billingUnit,
            onValueChange: t61,
            children: [
                t63,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[175] = billingUnit;
        $[176] = t61;
        $[177] = t63;
        $[178] = t72;
        $[179] = t73;
    } else {
        t73 = $[179];
    }
    let t74;
    if ($[180] !== t60 || $[181] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t60,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[180] = t60;
        $[181] = t73;
        $[182] = t74;
    } else {
        t74 = $[182];
    }
    let t75;
    if ($[183] !== t51 || $[184] !== t57 || $[185] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1",
            children: [
                t51,
                t57,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 685,
            columnNumber: 11
        }, this);
        $[183] = t51;
        $[184] = t57;
        $[185] = t74;
        $[186] = t75;
    } else {
        t75 = $[186];
    }
    let t76;
    if ($[187] !== t33 || $[188] !== t34 || $[189] !== t7 || $[190] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t7,
                t33,
                t34,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 695,
            columnNumber: 11
        }, this);
        $[187] = t33;
        $[188] = t34;
        $[189] = t7;
        $[190] = t75;
        $[191] = t76;
    } else {
        t76 = $[191];
    }
    return t76;
}
_s(CampaignSettingsSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = CampaignSettingsSection;
var _c;
__turbopack_context__.k.register(_c, "CampaignSettingsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetLinkSection",
    ()=>TargetLinkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
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
;
function TargetLinkSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(181);
    if ($[0] !== "e4a740b381b38f5b29248f5fc649ed85f85fd7b49001ece8594c5ae0066bf5f9") {
        for(let $i = 0; $i < 181; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4a740b381b38f5b29248f5fc649ed85f85fd7b49001ece8594c5ae0066bf5f9";
    }
    const { watch, setValue, developers, developerSearch, setDeveloperSearch, developersLoading, projects, properties, projectsLoading, propertiesLoading, projectSearch, setProjectSearch, propertySearch, setPropertySearch } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== watch) {
        t1 = watch("developerId");
        $[1] = watch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const developerId = t1;
    let t2;
    if ($[3] !== watch) {
        t2 = watch("linkTo") || "PROJECTS";
        $[3] = watch;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const linkTo = t2;
    let t3;
    if ($[5] !== watch) {
        t3 = watch("projectId");
        $[5] = watch;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const projectId = t3;
    let t4;
    if ($[7] !== setValue) {
        t4 = ({
            "TargetLinkSection[handleDeveloperChange]": (val)=>{
                setValue("developerId", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                });
                setValue("projectId", "", {
                    shouldDirty: true
                });
            }
        })["TargetLinkSection[handleDeveloperChange]"];
        $[7] = setValue;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleDeveloperChange = t4;
    let t5;
    bb0: {
        if (!developerId) {
            t5 = developers;
            break bb0;
        }
        const exists = developers.some({
            "TargetLinkSection[developers.some()]": (d)=>d.id?.toString() === developerId?.toString()
        }["TargetLinkSection[developers.some()]"]);
        if (!exists) {
            const t6 = Number(developerId) || developerId;
            const t7 = `Developer #${developerId}`;
            let t8;
            if ($[9] !== t6 || $[10] !== t7) {
                t8 = {
                    id: t6,
                    name: t7
                };
                $[9] = t6;
                $[10] = t7;
                $[11] = t8;
            } else {
                t8 = $[11];
            }
            let t9;
            if ($[12] !== developers || $[13] !== t8) {
                t9 = [
                    t8,
                    ...developers
                ];
                $[12] = developers;
                $[13] = t8;
                $[14] = t9;
            } else {
                t9 = $[14];
            }
            t5 = t9;
            break bb0;
        }
        t5 = developers;
    }
    const allDevelopers = t5;
    let t6;
    bb1: {
        if (!developerId) {
            t6 = "";
            break bb1;
        }
        let t7;
        if ($[15] !== allDevelopers || $[16] !== developerId) {
            let t8;
            if ($[18] !== developerId) {
                t8 = ({
                    "TargetLinkSection[allDevelopers.find()]": (d_0)=>d_0.id?.toString() === developerId?.toString()
                })["TargetLinkSection[allDevelopers.find()]"];
                $[18] = developerId;
                $[19] = t8;
            } else {
                t8 = $[19];
            }
            t7 = allDevelopers.find(t8);
            $[15] = allDevelopers;
            $[16] = developerId;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        const found = t7;
        t6 = found ? found.name : `Developer #${developerId}`;
    }
    const selectedDeveloperName = t6;
    let t7;
    bb2: {
        if (!projectId || linkTo !== "PROJECTS") {
            t7 = projects;
            break bb2;
        }
        const exists_0 = projects.some({
            "TargetLinkSection[projects.some()]": (p)=>p.id?.toString() === projectId?.toString()
        }["TargetLinkSection[projects.some()]"]);
        if (!exists_0) {
            const t8 = Number(projectId) || projectId;
            const t9 = `Project #${projectId}`;
            let t10;
            if ($[20] !== t8 || $[21] !== t9) {
                t10 = {
                    id: t8,
                    name: t9
                };
                $[20] = t8;
                $[21] = t9;
                $[22] = t10;
            } else {
                t10 = $[22];
            }
            let t11;
            if ($[23] !== projects || $[24] !== t10) {
                t11 = [
                    t10,
                    ...projects
                ];
                $[23] = projects;
                $[24] = t10;
                $[25] = t11;
            } else {
                t11 = $[25];
            }
            t7 = t11;
            break bb2;
        }
        t7 = projects;
    }
    const allProjects = t7;
    let t8;
    bb3: {
        if (!projectId || linkTo !== "PROPERTIES") {
            t8 = properties;
            break bb3;
        }
        const exists_1 = properties.some({
            "TargetLinkSection[properties.some()]": (p_0)=>p_0.id?.toString() === projectId?.toString()
        }["TargetLinkSection[properties.some()]"]);
        if (!exists_1) {
            const t9 = `Property #${projectId}`;
            let t10;
            if ($[26] !== projectId || $[27] !== t9) {
                t10 = {
                    id: projectId,
                    name: t9
                };
                $[26] = projectId;
                $[27] = t9;
                $[28] = t10;
            } else {
                t10 = $[28];
            }
            let t11;
            if ($[29] !== properties || $[30] !== t10) {
                t11 = [
                    t10,
                    ...properties
                ];
                $[29] = properties;
                $[30] = t10;
                $[31] = t11;
            } else {
                t11 = $[31];
            }
            t8 = t11;
            break bb3;
        }
        t8 = properties;
    }
    const allProperties = t8;
    let t9;
    bb4: {
        if (!projectId) {
            t9 = "";
            break bb4;
        }
        if (linkTo === "PROJECTS") {
            let t10;
            if ($[32] !== allProjects || $[33] !== projectId) {
                let t11;
                if ($[35] !== projectId) {
                    t11 = ({
                        "TargetLinkSection[allProjects.find()]": (p_1)=>p_1.id?.toString() === projectId?.toString()
                    })["TargetLinkSection[allProjects.find()]"];
                    $[35] = projectId;
                    $[36] = t11;
                } else {
                    t11 = $[36];
                }
                t10 = allProjects.find(t11);
                $[32] = allProjects;
                $[33] = projectId;
                $[34] = t10;
            } else {
                t10 = $[34];
            }
            const found_0 = t10;
            t9 = found_0 ? found_0.name : `Project #${projectId}`;
            break bb4;
        } else {
            if (linkTo === "PROPERTIES") {
                let t10;
                if ($[37] !== allProperties || $[38] !== projectId) {
                    let t11;
                    if ($[40] !== projectId) {
                        t11 = ({
                            "TargetLinkSection[allProperties.find()]": (p_2)=>p_2.id?.toString() === projectId?.toString()
                        })["TargetLinkSection[allProperties.find()]"];
                        $[40] = projectId;
                        $[41] = t11;
                    } else {
                        t11 = $[41];
                    }
                    t10 = allProperties.find(t11);
                    $[37] = allProperties;
                    $[38] = projectId;
                    $[39] = t10;
                } else {
                    t10 = $[39];
                }
                const found_1 = t10;
                t9 = found_1 ? found_1.name : `Property #${projectId}`;
                break bb4;
            }
        }
        t9 = "";
    }
    const selectedProjectName = t9;
    let t10;
    bb5: {
        if (!projectSearch || !projectSearch.trim()) {
            t10 = allProjects;
            break bb5;
        }
        let t11;
        if ($[42] !== allProjects || $[43] !== projectSearch) {
            const s = projectSearch.toLowerCase().trim();
            t11 = allProjects.filter({
                "TargetLinkSection[allProjects.filter()]": (p_3)=>(p_3.name || "").toLowerCase().includes(s)
            }["TargetLinkSection[allProjects.filter()]"]);
            $[42] = allProjects;
            $[43] = projectSearch;
            $[44] = t11;
        } else {
            t11 = $[44];
        }
        t10 = t11;
    }
    const filteredProjects = t10;
    let t11;
    bb6: {
        if (!propertySearch || !propertySearch.trim()) {
            t11 = allProperties;
            break bb6;
        }
        let t12;
        if ($[45] !== allProperties || $[46] !== propertySearch) {
            const s_0 = propertySearch.toLowerCase().trim();
            t12 = allProperties.filter({
                "TargetLinkSection[allProperties.filter()]": (p_4)=>(p_4.name || "").toLowerCase().includes(s_0)
            }["TargetLinkSection[allProperties.filter()]"]);
            $[45] = allProperties;
            $[46] = propertySearch;
            $[47] = t12;
        } else {
            t12 = $[47];
        }
        t11 = t12;
    }
    const filteredProperties = t11;
    let t12;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[48] = t12;
    } else {
        t12 = $[48];
    }
    let t13;
    if ($[49] !== isAr || $[50] !== t) {
        t13 = t("ads.createStepTwo.developerAndTargetLink") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631 \u0648\u0627\u0644\u0648\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Developer & Target Link");
        $[49] = isAr;
        $[50] = t;
        $[51] = t13;
    } else {
        t13 = $[51];
    }
    let t14;
    if ($[52] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 365,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[52] = t13;
        $[53] = t14;
    } else {
        t14 = $[53];
    }
    let t15;
    if ($[54] !== developerId || $[55] !== isAr) {
        t15 = developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-medium text-teal-600 dark:text-teal-400",
            children: isAr ? `المطور #${developerId}` : `Developer #${developerId}`
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 373,
            columnNumber: 26
        }, this);
        $[54] = developerId;
        $[55] = isAr;
        $[56] = t15;
    } else {
        t15 = $[56];
    }
    let t16;
    if ($[57] !== t14 || $[58] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[57] = t14;
        $[58] = t15;
        $[59] = t16;
    } else {
        t16 = $[59];
    }
    let t17;
    if ($[60] !== isAr || $[61] !== t) {
        t17 = t("ads.createStepTwo.developer") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631" : "Developer");
        $[60] = isAr;
        $[61] = t;
        $[62] = t17;
    } else {
        t17 = $[62];
    }
    let t18;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[63] = t18;
    } else {
        t18 = $[63];
    }
    let t19;
    if ($[64] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t17,
                " ",
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[64] = t17;
        $[65] = t19;
    } else {
        t19 = $[65];
    }
    let t20;
    if ($[66] !== developers.length || $[67] !== isAr || $[68] !== t) {
        t20 = developers.length > 0 ? `${developers.length} ${t("ads.createStepTwo.developersAvailable") || (isAr ? "\u0645\u062A\u0627\u062D" : "available")}` : "";
        $[66] = developers.length;
        $[67] = isAr;
        $[68] = t;
        $[69] = t20;
    } else {
        t20 = $[69];
    }
    let t21;
    if ($[70] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[70] = t20;
        $[71] = t21;
    } else {
        t21 = $[71];
    }
    let t22;
    if ($[72] !== t19 || $[73] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[72] = t19;
        $[73] = t21;
        $[74] = t22;
    } else {
        t22 = $[74];
    }
    let t23;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[75] = t23;
    } else {
        t23 = $[75];
    }
    let t24;
    if ($[76] !== isAr || $[77] !== t) {
        t24 = t("ads.createStepTwo.searchDeveloperPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631 \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search developers...");
        $[76] = isAr;
        $[77] = t;
        $[78] = t24;
    } else {
        t24 = $[78];
    }
    let t25;
    if ($[79] !== setDeveloperSearch) {
        t25 = ({
            "TargetLinkSection[<Input>.onChange]": (e)=>setDeveloperSearch(e.target.value)
        })["TargetLinkSection[<Input>.onChange]"];
        $[79] = setDeveloperSearch;
        $[80] = t25;
    } else {
        t25 = $[80];
    }
    let t26;
    if ($[81] !== developerSearch || $[82] !== t24 || $[83] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t24,
            value: developerSearch,
            onChange: t25,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 pl-9 pr-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[81] = developerSearch;
        $[82] = t24;
        $[83] = t25;
        $[84] = t26;
    } else {
        t26 = $[84];
    }
    let t27;
    if ($[85] !== developerSearch || $[86] !== setDeveloperSearch) {
        t27 = developerSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "TargetLinkSection[<button>.onClick]": ()=>setDeveloperSearch("")
            }["TargetLinkSection[<button>.onClick]"],
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 480,
                columnNumber: 171
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 478,
            columnNumber: 30
        }, this);
        $[85] = developerSearch;
        $[86] = setDeveloperSearch;
        $[87] = t27;
    } else {
        t27 = $[87];
    }
    let t28;
    if ($[88] !== t26 || $[89] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-2",
            children: [
                t23,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[88] = t26;
        $[89] = t27;
        $[90] = t28;
    } else {
        t28 = $[90];
    }
    let t29;
    if ($[91] !== developerId) {
        t29 = developerId ? developerId.toString() : undefined;
        $[91] = developerId;
        $[92] = t29;
    } else {
        t29 = $[92];
    }
    let t30;
    if ($[93] !== developersLoading || $[94] !== isAr || $[95] !== t) {
        t30 = developersLoading ? t("ads.createStepTwo.loadingDevelopers") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646..." : "Loading developers...") : t("ads.createStepTwo.selectDeveloper") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631" : "Select Developer");
        $[93] = developersLoading;
        $[94] = isAr;
        $[95] = t;
        $[96] = t30;
    } else {
        t30 = $[96];
    }
    const t31 = selectedDeveloperName || undefined;
    let t32;
    if ($[97] !== t30 || $[98] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t30,
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 517,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[97] = t30;
        $[98] = t31;
        $[99] = t32;
    } else {
        t32 = $[99];
    }
    let t33;
    if ($[100] !== allDevelopers || $[101] !== developerSearch || $[102] !== developers.length || $[103] !== developersLoading || $[104] !== isAr || $[105] !== t) {
        t33 = developersLoading && developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.loadingDevelopers") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646..." : "Loading developers...")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 526,
            columnNumber: 58
        }, this) : developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.noDevelopersFound") || (isAr ? "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0637\u0648\u0631\u064A\u0646" : "No developers found")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 526,
            columnNumber: 341
        }, this) : allDevelopers.filter({
            "TargetLinkSection[allDevelopers.filter()]": (dev)=>!developerSearch || (dev.name || "").toLowerCase().includes(developerSearch.toLowerCase())
        }["TargetLinkSection[allDevelopers.filter()]"]).map(_TargetLinkSectionAnonymous);
        $[100] = allDevelopers;
        $[101] = developerSearch;
        $[102] = developers.length;
        $[103] = developersLoading;
        $[104] = isAr;
        $[105] = t;
        $[106] = t33;
    } else {
        t33 = $[106];
    }
    let t34;
    if ($[107] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "max-h-56 overflow-y-auto",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[107] = t33;
        $[108] = t34;
    } else {
        t34 = $[108];
    }
    let t35;
    if ($[109] !== handleDeveloperChange || $[110] !== t29 || $[111] !== t32 || $[112] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t29,
            onValueChange: handleDeveloperChange,
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[109] = handleDeveloperChange;
        $[110] = t29;
        $[111] = t32;
        $[112] = t34;
        $[113] = t35;
    } else {
        t35 = $[113];
    }
    let t36;
    if ($[114] !== t22 || $[115] !== t28 || $[116] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t28,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[114] = t22;
        $[115] = t28;
        $[116] = t35;
        $[117] = t36;
    } else {
        t36 = $[117];
    }
    let t37;
    if ($[118] !== isAr || $[119] !== t) {
        t37 = t("ads.createStepTwo.linkDestinationType") || (isAr ? "\u0646\u0648\u0639 \u0648\u062C\u0647\u0629 \u0627\u0644\u0631\u0627\u0628\u0637" : "Link To");
        $[118] = isAr;
        $[119] = t;
        $[120] = t37;
    } else {
        t37 = $[120];
    }
    let t38;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[121] = t38;
    } else {
        t38 = $[121];
    }
    let t39;
    if ($[122] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t37,
                " ",
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[122] = t37;
        $[123] = t39;
    } else {
        t39 = $[123];
    }
    let t40;
    if ($[124] !== setValue) {
        t40 = ({
            "TargetLinkSection[<Select>.onValueChange]": (val_0)=>{
                setValue("linkTo", val_0, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                });
                if (val_0 === "NONE") {
                    setValue("projectId", "", {
                        shouldDirty: true
                    });
                }
            }
        })["TargetLinkSection[<Select>.onValueChange]"];
        $[124] = setValue;
        $[125] = t40;
    } else {
        t40 = $[125];
    }
    let t41;
    if ($[126] !== isAr || $[127] !== t) {
        t41 = t("ads.createStepTwo.selectDestination") || (isAr ? "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0648\u062C\u0647\u0629" : "Select Link Type");
        $[126] = isAr;
        $[127] = t;
        $[128] = t41;
    } else {
        t41 = $[128];
    }
    let t42;
    if ($[129] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t41
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 624,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[129] = t41;
        $[130] = t42;
    } else {
        t42 = $[130];
    }
    let t43;
    if ($[131] !== isAr || $[132] !== t) {
        t43 = t("ads.createStepTwo.destinationSpecificProject") || (isAr ? "\u0645\u0634\u0631\u0648\u0639 \u0645\u062D\u062F\u062F" : "Project");
        $[131] = isAr;
        $[132] = t;
        $[133] = t43;
    } else {
        t43 = $[133];
    }
    let t44;
    if ($[134] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROJECTS",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[134] = t43;
        $[135] = t44;
    } else {
        t44 = $[135];
    }
    let t45;
    if ($[136] !== isAr || $[137] !== t) {
        t45 = t("ads.createStepTwo.destinationSpecificProperty") || (isAr ? "\u0639\u0642\u0627\u0631 / \u0648\u062D\u062F\u0629 \u0645\u062D\u062F\u062F\u0629" : "Property");
        $[136] = isAr;
        $[137] = t;
        $[138] = t45;
    } else {
        t45 = $[138];
    }
    let t46;
    if ($[139] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROPERTIES",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 658,
            columnNumber: 11
        }, this);
        $[139] = t45;
        $[140] = t46;
    } else {
        t46 = $[140];
    }
    let t47;
    if ($[141] !== isAr || $[142] !== t) {
        t47 = t("ads.createStepTwo.destinationCustomUrl") || (isAr ? "\u0631\u0627\u0628\u0637 \u0645\u062E\u0635\u0635 / \u0628\u062F\u0648\u0646 \u0631\u0627\u0628\u0637" : "None");
        $[141] = isAr;
        $[142] = t;
        $[143] = t47;
    } else {
        t47 = $[143];
    }
    let t48;
    if ($[144] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "NONE",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, this);
        $[144] = t47;
        $[145] = t48;
    } else {
        t48 = $[145];
    }
    let t49;
    if ($[146] !== t44 || $[147] !== t46 || $[148] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t44,
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[146] = t44;
        $[147] = t46;
        $[148] = t48;
        $[149] = t49;
    } else {
        t49 = $[149];
    }
    let t50;
    if ($[150] !== linkTo || $[151] !== t40 || $[152] !== t42 || $[153] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: linkTo,
            onValueChange: t40,
            children: [
                t42,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[150] = linkTo;
        $[151] = t40;
        $[152] = t42;
        $[153] = t49;
        $[154] = t50;
    } else {
        t50 = $[154];
    }
    let t51;
    if ($[155] !== t39 || $[156] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 704,
            columnNumber: 11
        }, this);
        $[155] = t39;
        $[156] = t50;
        $[157] = t51;
    } else {
        t51 = $[157];
    }
    let t52;
    if ($[158] !== developerId || $[159] !== filteredProjects || $[160] !== filteredProperties || $[161] !== isAr || $[162] !== linkTo || $[163] !== projectId || $[164] !== projectSearch || $[165] !== projectsLoading || $[166] !== propertiesLoading || $[167] !== propertySearch || $[168] !== selectedProjectName || $[169] !== setProjectSearch || $[170] !== setPropertySearch || $[171] !== setValue || $[172] !== t) {
        t52 = linkTo !== "NONE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                linkTo === "PROJECTS" ? isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Select Project" : isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631" : "Select Property",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-500",
                                    children: "*"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                    lineNumber: 713,
                                    columnNumber: 381
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 713,
                            columnNumber: 156
                        }, this),
                        developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-neutral-400 font-normal",
                            children: linkTo === "PROJECTS" ? `${filteredProjects.length} ${t("ads.createStepTwo.itemsFound") || (isAr ? "\u0645\u062A\u0637\u0627\u0628\u0642" : "found")}` : `${filteredProperties.length} ${t("ads.createStepTwo.itemsFound") || (isAr ? "\u0645\u062A\u0637\u0627\u0628\u0642" : "found")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 713,
                            columnNumber: 443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 713,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 713,
                            columnNumber: 832
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B..." : "Select a developer first to search...") : linkTo === "PROJECTS" ? t("ads.createStepTwo.searchProjectsPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search projects...") : t("ads.createStepTwo.searchPropertiesPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search properties..."),
                            value: linkTo === "PROJECTS" ? projectSearch : propertySearch,
                            onChange: {
                                "TargetLinkSection[<Input>.onChange]": (e_0)=>{
                                    if (linkTo === "PROJECTS") {
                                        setProjectSearch(e_0.target.value);
                                    } else {
                                        setPropertySearch(e_0.target.value);
                                    }
                                }
                            }["TargetLinkSection[<Input>.onChange]"],
                            disabled: !developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading),
                            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 pl-9 pr-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 713,
                            columnNumber: 924
                        }, this),
                        (linkTo === "PROJECTS" ? projectSearch : propertySearch) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "TargetLinkSection[<button>.onClick]": ()=>{
                                    if (linkTo === "PROJECTS") {
                                        setProjectSearch("");
                                    } else {
                                        setPropertySearch("");
                                    }
                                }
                            }["TargetLinkSection[<button>.onClick]"],
                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 729,
                                columnNumber: 175
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 721,
                            columnNumber: 345
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 713,
                    columnNumber: 801
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: projectId ? projectId.toString() : undefined,
                    onValueChange: {
                        "TargetLinkSection[<Select>.onValueChange]": (val_1)=>setValue("projectId", val_1, {
                                shouldDirty: true,
                                shouldTouch: true,
                                shouldValidate: true
                            })
                    }["TargetLinkSection[<Select>.onValueChange]"],
                    disabled: !developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B" : "Please select a developer first") : linkTo === "PROJECTS" ? projectsLoading ? t("ads.createStepTwo.loadingProjects") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639..." : "Loading projects...") : t("ads.createStepTwo.chooseProject") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Select Project") : propertiesLoading ? t("ads.createStepTwo.loadingProperties") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A..." : "Loading properties...") : t("ads.createStepTwo.chooseProperty") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631" : "Select Property"),
                                children: selectedProjectName || undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 266
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 735,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-56 overflow-y-auto",
                            children: !developerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B" : "Please select a developer first")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 1368
                            }, this) : linkTo === "PROJECTS" ? projectsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProjects") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639..." : "Loading projects...")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 1690
                            }, this) : filteredProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.noMatchingProjects") || (isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u062A\u0627\u062D\u0629" : "No projects available")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 1975
                            }, this) : filteredProjects.map(_TargetLinkSectionFilteredProjectsMap) : propertiesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProperties") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A..." : "Loading properties...")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 2313
                            }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.noMatchingProperties") || (isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0642\u0627\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629" : "No properties available")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 735,
                                columnNumber: 2604
                            }, this) : filteredProperties.map(_TargetLinkSectionFilteredPropertiesMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 735,
                            columnNumber: 1300
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 729,
                    columnNumber: 220
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 713,
            columnNumber: 32
        }, this);
        $[158] = developerId;
        $[159] = filteredProjects;
        $[160] = filteredProperties;
        $[161] = isAr;
        $[162] = linkTo;
        $[163] = projectId;
        $[164] = projectSearch;
        $[165] = projectsLoading;
        $[166] = propertiesLoading;
        $[167] = propertySearch;
        $[168] = selectedProjectName;
        $[169] = setProjectSearch;
        $[170] = setPropertySearch;
        $[171] = setValue;
        $[172] = t;
        $[173] = t52;
    } else {
        t52 = $[173];
    }
    let t53;
    if ($[174] !== t51 || $[175] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 757,
            columnNumber: 11
        }, this);
        $[174] = t51;
        $[175] = t52;
        $[176] = t53;
    } else {
        t53 = $[176];
    }
    let t54;
    if ($[177] !== t16 || $[178] !== t36 || $[179] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t16,
                t36,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[177] = t16;
        $[178] = t36;
        $[179] = t53;
        $[180] = t54;
    } else {
        t54 = $[180];
    }
    return t54;
}
_s(TargetLinkSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TargetLinkSection;
function _TargetLinkSectionFilteredPropertiesMap(prop) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: prop.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: prop.name
    }, prop.id, false, {
        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
        lineNumber: 777,
        columnNumber: 10
    }, this);
}
function _TargetLinkSectionFilteredProjectsMap(proj) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: proj.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: proj.name
    }, proj.id, false, {
        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
        lineNumber: 780,
        columnNumber: 10
    }, this);
}
function _TargetLinkSectionAnonymous(dev_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: dev_0.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: dev_0.name
    }, dev_0.id, false, {
        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
        lineNumber: 783,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TargetLinkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#008081] data-[state=checked]:border-[#008081] data-[state=checked]:text-white", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextEditor",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
;
;
const RichTextEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/src/components/ui/rich-text-editor.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.RichTextEditor), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/rich-text-editor.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = RichTextEditor;
;
;
;
;
;
;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "RichTextEditor$dynamic");
__turbopack_context__.k.register(_c1, "RichTextEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreativeDetailsSection",
    ()=>CreativeDetailsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreativeDetailsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "49f4003e06b59c9f17b73a820b1cc3995843989f5463891d7bfc67b9ae6d7a7c") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49f4003e06b59c9f17b73a820b1cc3995843989f5463891d7bfc67b9ae6d7a7c";
    }
    const { watch, setValue, adImagePreview, handleImageUpload } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== watch) {
        t1 = watch("description");
        $[1] = watch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const description = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== isAr || $[5] !== t) {
        t3 = t("ads.createStepTwo.creativeBannerAsset") || (isAr ? "\u0635\u0648\u0631\u0629 / \u0628\u0646\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Image");
        $[4] = isAr;
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 61,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== isAr || $[10] !== t) {
        t5 = t("ads.createStepTwo.imageFormatHint") || (isAr ? "PNG, JPG, WEBP \u2022 \u0628\u062D\u062F \u0623\u0642\u0635\u0649 2 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "PNG, JPG, WEBP \u2022 Max 2MB");
        $[9] = isAr;
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== adImagePreview || $[18] !== isAr || $[19] !== t) {
        t8 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: "Ad Preview",
                    className: "max-h-36 w-auto mx-auto object-contain rounded-md border border-neutral-200 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        className: "h-7 text-xs font-medium border-neutral-200 dark:border-neutral-700",
                        onClick: _CreativeDetailsSectionButtonOnClick,
                        children: t("ads.createStepTwo.changeImage") || (isAr ? "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629" : "Change Image")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                        lineNumber: 95,
                        columnNumber: 253
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 95,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center py-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                        lineNumber: 95,
                        columnNumber: 787
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 637
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-800 dark:text-neutral-200 font-medium",
                    children: t("ads.createStepTwo.clickToUpload") || (isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629" : "Click to upload new banner image")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 823
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-neutral-400 mt-0.5",
                    children: t("ads.createStepTwo.aspectRatioHint") || (isAr ? "16:9 \u0644\u0644\u0628\u0646\u0631\u0627\u062A \u2022 4:5 \u0644\u0644\u0628\u0637\u0627\u0642\u0627\u062A" : "16:9 for banners \u2022 4:5 for card placements")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 95,
                    columnNumber: 1096
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 95,
            columnNumber: 588
        }, this);
        $[17] = adImagePreview;
        $[18] = isAr;
        $[19] = t;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== handleImageUpload) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload-edit",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[21] = handleImageUpload;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t8 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-teal-500/60 bg-white dark:bg-neutral-900 transition-colors",
            onClick: _CreativeDetailsSectionDivOnClick,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[23] = t8;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10 || $[27] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t7;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== isAr || $[31] !== t) {
        t13 = t("ads.createStepTwo.shortDescription") || (isAr ? "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062E\u062A\u0635\u0631" : "Short Description");
        $[30] = isAr;
        $[31] = t;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 147,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    const t15 = description || "";
    let t16;
    if ($[35] !== setValue) {
        t16 = ({
            "CreativeDetailsSection[<RichTextEditor>.onChange]": (content)=>setValue("description", content, {
                    shouldDirty: true
                })
        })["CreativeDetailsSection[<RichTextEditor>.onChange]"];
        $[35] = setValue;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RichTextEditor"], {
            content: t15,
            onChange: t16
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t14 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[40] = t14;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== t11 || $[44] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t11,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[43] = t11;
        $[44] = t18;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    return t19;
}
_s(CreativeDetailsSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = CreativeDetailsSection;
function _CreativeDetailsSectionButtonOnClick(e) {
    e.stopPropagation();
    document.getElementById("ad-image-upload-edit")?.click();
}
function _CreativeDetailsSectionDivOnClick() {
    return document.getElementById("ad-image-upload-edit")?.click();
}
var _c;
__turbopack_context__.k.register(_c, "CreativeDetailsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaSettingsSection",
    ()=>CtaSettingsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
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
function CtaSettingsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "ee48eca05df211b6ec51046b4591d02a2742c8927ec9327d420f5545d0807875") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee48eca05df211b6ec51046b4591d02a2742c8927ec9327d420f5545d0807875";
    }
    const { register, watch, setValue } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== watch) {
        t1 = watch("handover");
        $[1] = watch;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handover = t1;
    let t2;
    if ($[3] !== watch) {
        t2 = watch("developer");
        $[3] = watch;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const developer = t2;
    let t3;
    if ($[5] !== watch) {
        t3 = watch("price");
        $[5] = watch;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const price = t3;
    let t4;
    if ($[7] !== watch) {
        t4 = watch("rate");
        $[7] = watch;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const rate = t4;
    let t5;
    if ($[9] !== isAr || $[10] !== t) {
        t5 = t("ads.createStepTwo.badgeHandover") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645" : "Handover");
        $[9] = isAr;
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== handover || $[13] !== t5) {
        t6 = {
            name: "handover",
            label: t5,
            value: handover
        };
        $[12] = handover;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== isAr || $[16] !== t) {
        t7 = t("ads.createStepTwo.badgeDeveloper") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631" : "Developer");
        $[15] = isAr;
        $[16] = t;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== developer || $[19] !== t7) {
        t8 = {
            name: "developer",
            label: t7,
            value: developer
        };
        $[18] = developer;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== isAr || $[22] !== t) {
        t9 = t("ads.createStepTwo.badgePrice") || (isAr ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0639\u0631" : "Price");
        $[21] = isAr;
        $[22] = t;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== price || $[25] !== t9) {
        t10 = {
            name: "price",
            label: t9,
            value: price
        };
        $[24] = price;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== isAr || $[28] !== t) {
        t11 = t("ads.createStepTwo.badgeRating") || (isAr ? "\u0627\u0644\u062A\u0642\u064A\u064A\u0645" : "Rating");
        $[27] = isAr;
        $[28] = t;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== rate || $[31] !== t11) {
        t12 = {
            name: "rate",
            label: t11,
            value: rate
        };
        $[30] = rate;
        $[31] = t11;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    let t13;
    if ($[33] !== t10 || $[34] !== t12 || $[35] !== t6 || $[36] !== t8) {
        t13 = [
            t6,
            t8,
            t10,
            t12
        ];
        $[33] = t10;
        $[34] = t12;
        $[35] = t6;
        $[36] = t8;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    const badges = t13;
    let t14;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== isAr || $[40] !== t) {
        t15 = t("ads.createStepTwo.displayBadges") || (isAr ? "\u0627\u0644\u0634\u0627\u0631\u0627\u062A \u0648\u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (CTA)" : "Badges & Call to Action");
        $[39] = isAr;
        $[40] = t;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                    lineNumber: 186,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== isAr || $[45] !== t) {
        t17 = t("ads.createStepTwo.displayBadges") || (isAr ? "\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Display Badges on Ad");
        $[44] = isAr;
        $[45] = t;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[47] = t17;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] !== badges || $[50] !== setValue) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
            children: badges.map({
                "CtaSettingsSection[badges.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center justify-between p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-700 dark:text-neutral-300",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                                lineNumber: 212,
                                columnNumber: 301
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                checked: Boolean(item.value),
                                onCheckedChange: {
                                    "CtaSettingsSection[badges.map() > <Switch>.onCheckedChange]": (checked)=>setValue(item.name, checked, {
                                            shouldDirty: true
                                        })
                                }["CtaSettingsSection[badges.map() > <Switch>.onCheckedChange]"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                                lineNumber: 212,
                                columnNumber: 385
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                        lineNumber: 212,
                        columnNumber: 53
                    }, this)
            }["CtaSettingsSection[badges.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[49] = badges;
        $[50] = setValue;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    let t20;
    if ($[52] !== t18 || $[53] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[52] = t18;
        $[53] = t19;
        $[54] = t20;
    } else {
        t20 = $[54];
    }
    let t21;
    if ($[55] !== isAr || $[56] !== t) {
        t21 = t("ads.createStepTwo.ctaButtonLabel") || (isAr ? "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (CTA)" : "Call-to-Action Button Label");
        $[55] = isAr;
        $[56] = t;
        $[57] = t21;
    } else {
        t21 = $[57];
    }
    let t22;
    if ($[58] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[58] = t21;
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    let t23;
    if ($[60] !== isAr || $[61] !== t) {
        t23 = t("ads.createStepTwo.ctaButtonPlaceholder") || (isAr ? "\u0645\u062B\u0627\u0644: \u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646" : "e.g., Learn More, Book Unit");
        $[60] = isAr;
        $[61] = t;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== register) {
        t24 = register("ctaButtonText");
        $[63] = register;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== t23 || $[66] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t23,
            ...t24,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[65] = t23;
        $[66] = t24;
        $[67] = t25;
    } else {
        t25 = $[67];
    }
    let t26;
    if ($[68] !== t22 || $[69] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[68] = t22;
        $[69] = t25;
        $[70] = t26;
    } else {
        t26 = $[70];
    }
    let t27;
    if ($[71] !== isAr || $[72] !== t) {
        t27 = t("ads.createStepTwo.ctaTargetUrl") || (isAr ? "\u0631\u0627\u0628\u0637 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (URL)" : "Call-to-Action Target URL");
        $[71] = isAr;
        $[72] = t;
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    let t28;
    if ($[74] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[74] = t27;
        $[75] = t28;
    } else {
        t28 = $[75];
    }
    let t29;
    if ($[76] !== t) {
        t29 = t("ads.createStepTwo.ctaUrlPlaceholder") || "https://example.com";
        $[76] = t;
        $[77] = t29;
    } else {
        t29 = $[77];
    }
    let t30;
    if ($[78] !== register) {
        t30 = register("ctaUrl");
        $[78] = register;
        $[79] = t30;
    } else {
        t30 = $[79];
    }
    let t31;
    if ($[80] !== t29 || $[81] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t29,
            ...t30,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[80] = t29;
        $[81] = t30;
        $[82] = t31;
    } else {
        t31 = $[82];
    }
    let t32;
    if ($[83] !== t28 || $[84] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[83] = t28;
        $[84] = t31;
        $[85] = t32;
    } else {
        t32 = $[85];
    }
    let t33;
    if ($[86] !== t26 || $[87] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t26,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[86] = t26;
        $[87] = t32;
        $[88] = t33;
    } else {
        t33 = $[88];
    }
    let t34;
    if ($[89] !== t16 || $[90] !== t20 || $[91] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t16,
                t20,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[89] = t16;
        $[90] = t20;
        $[91] = t33;
        $[92] = t34;
    } else {
        t34 = $[92];
    }
    return t34;
}
_s(CtaSettingsSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = CtaSettingsSection;
var _c;
__turbopack_context__.k.register(_c, "CtaSettingsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/utils/ad-image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns true when the stored ad image URL is a real, displayable URL.
 * Filters out broken values such as PHP temp upload paths ("/tmp/phpXXXX")
 * that were saved when a File was sent under `image_url`.
 */ __turbopack_context__.s([
    "appendAdImageToFormData",
    ()=>appendAdImageToFormData,
    "isValidStoredAdImageUrl",
    ()=>isValidStoredAdImageUrl
]);
function isValidStoredAdImageUrl(url) {
    if (typeof url !== "string") return false;
    const clean = url.trim();
    if (!clean || clean === "null" || clean === "undefined") return false;
    if (/^\/?tmp\//i.test(clean) || /[\\/]php[A-Za-z0-9]+$/.test(clean)) return false;
    if (clean.startsWith("data:") || clean.startsWith("blob:")) return false;
    return true;
}
function appendAdImageToFormData(formData, newImage, preview, existingImageUrl) {
    if (newImage) {
        formData.append("image_url", newImage);
        return;
    }
    if (!preview) {
        formData.append("image_url", "");
        return;
    }
    if (isValidStoredAdImageUrl(existingImageUrl)) {
        formData.append("image_url", existingImageUrl.trim());
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAdModal",
    ()=>EditAdModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-edit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$AdTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$PlacementSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CampaignSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$TargetLinkSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CreativeDetailsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CtaSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-image.ts [app-client] (ecmascript)");
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
function EditAdModal({ ad, isOpen, onClose, onSuccess }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { updateAd, isUpdating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const rawAdId = ad?.creative_id ?? ad?.id;
    const [adImage, setAdImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adImagePreview, setAdImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { register, handleSubmit, setValue, watch, trigger, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: "",
            type: "banner",
            platform: "web",
            location: [],
            country: "Egypt",
            startDate: "",
            endDate: "",
            status: "draft",
            priority: 1,
            billing_unit: "impression",
            linkTo: "PROJECTS",
            projectId: "",
            description: "",
            handover: false,
            developer: false,
            price: false,
            rate: false,
            ctaButtonText: "",
            ctaUrl: "",
            width: "medium",
            position: "bottom_right",
            developerId: ""
        }
    });
    const { adData, developers, developerSearch, setDeveloperSearch, developersLoading, projects, properties, projectsLoading, propertiesLoading, projectSearch, setProjectSearch, propertySearch, setPropertySearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdEditData"])(rawAdId || null, isOpen, watch("country"), watch("developerId"), watch("linkTo"));
    const [dateErrors, setDateErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const isValidDateFormat = (dateStr)=>{
        return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
    };
    const convertToUTCDateTime = (dateStr_0, isEndDate = false)=>{
        if (!dateStr_0) return "";
        const date = new Date(dateStr_0);
        if (isEndDate) {
            date.setUTCHours(23, 59, 59, 999);
        } else {
            date.setUTCHours(0, 0, 0, 0);
        }
        return date.toISOString();
    };
    const validateDateTimeRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditAdModal.useCallback[validateDateTimeRange]": (startDate, endDate)=>{
            if (startDate && !isValidDateFormat(startDate)) {
                setDateErrors({
                    startDate: isAr ? "صيغة التاريخ غير صالحة" : "Invalid date format"
                });
                return false;
            }
            if (endDate && !isValidDateFormat(endDate)) {
                setDateErrors({
                    endDate: isAr ? "صيغة التاريخ غير صالحة" : "Invalid date format"
                });
                return false;
            }
            if (!startDate) {
                setDateErrors({
                    startDate: isAr ? "تاريخ البدء مطلوب" : "Start date is required"
                });
                return false;
            }
            if (!endDate) {
                setDateErrors({});
                return true;
            }
            const start = new Date(convertToUTCDateTime(startDate));
            const end = new Date(convertToUTCDateTime(endDate, true));
            if (start >= end) {
                setDateErrors({
                    endDate: isAr ? "يجب أن يكون تاريخ الانتهاء بعد تاريخ البدء" : "End date must be after start date"
                });
                return false;
            }
            setDateErrors({});
            return true;
        }
    }["EditAdModal.useCallback[validateDateTimeRange]"], [
        isAr
    ]);
    const startDate_0 = watch("startDate");
    const endDate_0 = watch("endDate");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditAdModal.useEffect": ()=>{
            if (startDate_0 || endDate_0) {
                validateDateTimeRange(startDate_0, endDate_0);
            }
        }
    }["EditAdModal.useEffect"], [
        startDate_0,
        endDate_0,
        validateDateTimeRange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditAdModal.useEffect": ()=>{
            if (!isOpen) {
                setAdImage(null);
                setAdImagePreview("");
                reset();
            }
        }
    }["EditAdModal.useEffect"], [
        isOpen,
        reset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditAdModal.useEffect": ()=>{
            if (adData) {
                setValue("title", adData.title || "");
                setValue("type", adData.placement?.format || "banner");
                setValue("platform", adData.placement?.platform || "web");
                setValue("location", adData.placement?.location ? [
                    adData.placement.location
                ] : []);
                const countryMap = {
                    1: "Egypt",
                    2: "UAE",
                    3: "Oman"
                };
                setValue("country", countryMap[adData.country_id] || "Egypt");
                const formatDate = {
                    "EditAdModal.useEffect.formatDate": (dateStr_1)=>{
                        if (!dateStr_1) return "";
                        if (dateStr_1.includes("T")) {
                            return dateStr_1.split("T")[0];
                        }
                        return dateStr_1.split(" ")[0];
                    }
                }["EditAdModal.useEffect.formatDate"];
                setValue("startDate", formatDate(adData.campaign?.start_at));
                setValue("endDate", formatDate(adData.campaign?.end_at));
                setValue("status", adData.status || "draft");
                setValue("priority", adData.weight || 1);
                setValue("linkTo", adData.entity_type === "URL" || !adData.entity_id && adData.cta_url || adData.entity_type === "NONE" && adData.cta_url ? "URL" : adData.entity_type || "PROJECTS");
                setValue("projectId", adData.entity_id?.toString() || "");
                setValue("description", adData.subtitle || "");
                setValue("ctaButtonText", adData.cta_label || "");
                setValue("ctaUrl", adData.cta_url || "");
                setValue("width", adData.placement?.width || "medium");
                setValue("position", adData.placement?.position || "bottom_right");
                const devId = adData.campaign?.developer?.developer_id || adData.campaign?.developer_id || adData.developer_id;
                if (devId) {
                    setValue("developerId", devId.toString());
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidStoredAdImageUrl"])(adData.image_url)) {
                    setAdImagePreview(adData.image_url);
                }
            }
        }
    }["EditAdModal.useEffect"], [
        adData,
        setValue
    ]);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "حجم الصورة يجب أن يكون أقل من 2 ميجابايت" : "Image file size must be less than 2MB", {
                    id: "ad-action-toast"
                });
                e.target.value = "";
                return;
            }
            setAdImage(file);
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setAdImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        // Reset input value so the same file can be re-selected
        e.target.value = "";
    };
    const onSubmit = async (data)=>{
        if (!rawAdId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "معرف الإعلان مفقود" : "Ad ID is missing", {
                id: "ad-action-toast"
            });
            return;
        }
        if (!validateDateTimeRange(watch("startDate"), watch("endDate"))) return;
        const isValid = await trigger([
            "title",
            "type",
            "platform",
            "location",
            "country",
            "startDate",
            "status",
            "priority",
            "billing_unit"
        ]);
        if (!isValid) return;
        const currentUrl = (data.ctaUrl || data.cta_url || "").trim();
        if ((data.linkTo === "NONE" || data.linkTo === "URL") && data.ctaButtonText && !currentUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "رابط زر الإجراء مطلوب عند كتابة نص الزر وتعيين الوجهة إلى مخصص" : "Call-to-Action Link is required when CTA Button Text is provided and Link To is None", {
                id: "ad-action-toast"
            });
            return;
        }
        if (currentUrl) {
            try {
                const formatted = /^https?:\/\//i.test(currentUrl) ? currentUrl : `https://${currentUrl}`;
                new URL(formatted);
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "يرجى إدخال رابط URL صالح لزر الإجراء" : "Please enter a valid URL for Call-to-Action Link", {
                    id: "ad-action-toast"
                });
                return;
            }
        }
        const formData = new FormData();
        formData.append("campaign[name]", data.title.trim());
        formData.append("campaign[title]", data.title.trim());
        formData.append("campaign[start_at]", data.startDate);
        if (data.endDate) {
            formData.append("campaign[end_at]", data.endDate);
        }
        formData.append("campaign[daily_cap_credits]", "");
        formData.append("campaign[status]", data.status);
        formData.append("placement[platform]", data.platform.toLowerCase().replace(" only", ""));
        const normalizeLocation = (loc)=>{
            const l = (loc || "").toLowerCase().trim().replace(/\s+/g, "_");
            if (l === "home") return "home";
            if (l === "home_top" || l === "web_home") return "home_top";
            if (l === "home_bottom") return "home_bottom";
            if (l === "featured_cards") return "featured_cards";
            if (l === "project_listing" || l === "explore_projects" || l === "projects") return "project_listing";
            if (l === "unit_listing" || l === "units" || l === "property_listing" || l === "explore_properties" || l === "properties") return "unit_listing";
            if (l === "developer_listing" || l === "explore_developers" || l === "developers") return "developer_listing";
            if (l === "expert_listing" || l === "explore_experts" || l === "experts") return "expert_listing";
            if (l === "podcast_listing" || l === "podcast" || l === "podcasts") return "podcast_listing";
            return l;
        };
        formData.append("placement[location]", normalizeLocation(data.location?.[0] || "home"));
        formData.append("placement[format]", data.type.toLowerCase());
        formData.append("placement[billing_unit]", data.billing_unit);
        if (data.type === "pop_up") {
            formData.append("placement[width]", data.width || "medium");
            formData.append("placement[position]", data.position || "bottom_right");
        }
        const countryId = data.country === "Egypt" ? 1 : data.country === "UAE" ? 2 : data.country === "Oman" ? 3 : 1;
        formData.append("country_id", countryId.toString());
        let externalUrl = (data.ctaUrl || data.cta_url || "").trim();
        if (externalUrl && !/^https?:\/\//i.test(externalUrl)) {
            externalUrl = `https://${externalUrl}`;
        }
        if (data.linkTo === "URL") {
            if (!externalUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "يرجى إدخال الرابط الخارجي (URL)" : "Please enter the External Link (URL)", {
                    id: "ad-action-toast"
                });
                return;
            }
            formData.append("cta_url", externalUrl);
        } else if (data.linkTo && data.linkTo !== "NONE") {
            formData.append("entity_type", data.linkTo);
            if (data.projectId) {
                formData.append("entity_id", data.projectId);
            }
            if (externalUrl) {
                formData.append("cta_url", externalUrl);
            }
        } else if (externalUrl) {
            formData.append("cta_url", externalUrl);
        }
        if (data.developerId) {
            formData.append("campaign[developer_id]", data.developerId);
        }
        formData.append("title", data.title);
        formData.append("subtitle", data.description || "");
        if (data.ctaButtonText) {
            formData.append("cta_label", data.ctaButtonText);
        }
        formData.append("weight", data.priority.toString());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendAdImageToFormData"])(formData, adImage, adImagePreview, adData?.image_url);
        try {
            await updateAd({
                adId: Number(rawAdId),
                formData
            });
            onSuccess?.();
            onClose();
        } catch (error) {
            console.error("Error updating ad:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAdModalHeader"], {
            adId: rawAdId
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 319,
            columnNumber: 58
        }, void 0),
        size: "2xl",
        showCloseButton: true,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAdModalFooter"], {
            onClose: onClose,
            onSubmit: handleSubmit(onSubmit),
            isUpdating: isUpdating
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 319,
            columnNumber: 138
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-h-[68vh] overflow-y-auto pr-1 sm:pr-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$AdTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdTitleSection"], {
                    register: register
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$PlacementSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlacementSection"], {
                    watch: watch,
                    setValue: setValue
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CampaignSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignSettingsSection"], {
                    register: register,
                    watch: watch,
                    setValue: setValue,
                    dateErrors: dateErrors,
                    validateDateTimeRange: validateDateTimeRange
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$TargetLinkSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetLinkSection"], {
                    watch: watch,
                    setValue: setValue,
                    developers: developers,
                    developerSearch: developerSearch,
                    setDeveloperSearch: setDeveloperSearch,
                    developersLoading: developersLoading,
                    projects: projects,
                    properties: properties,
                    projectsLoading: projectsLoading,
                    propertiesLoading: propertiesLoading,
                    projectSearch: projectSearch,
                    setProjectSearch: setProjectSearch,
                    propertySearch: propertySearch,
                    setPropertySearch: setPropertySearch
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CreativeDetailsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreativeDetailsSection"], {
                    watch: watch,
                    setValue: setValue,
                    adImagePreview: adImagePreview,
                    handleImageUpload: handleImageUpload
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CtaSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaSettingsSection"], {
                    register: register,
                    watch: watch,
                    setValue: setValue
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 320,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
        lineNumber: 319,
        columnNumber: 10
    }, this);
}
_s(EditAdModal, "YlDL/uysY0N5F4TZiNKpincmBNY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdEditData"]
    ];
});
_c = EditAdModal;
var _c;
__turbopack_context__.k.register(_c, "EditAdModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_bfc4e743._.js.map