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
"[project]/src/hooks/use-create-ad.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateAdData",
    ()=>useCreateAdData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/services/AdminDevelopersService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/utils/map-developer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/utils/map-project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
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
// In-memory cache for clean queries
const developersCache = new Map();
const projectsCache = new Map();
const propertiesCache = new Map();
function useCreateAdData(isOpen, developerSearch, country, projectSearch, propertySearch, developerId) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [developers, setDevelopers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [projectsLoading, setProjectsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [propertiesLoading, setPropertiesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [developerHasMore, setDeveloperHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadDevelopers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCreateAdData.useCallback[loadDevelopers]": async (page = 1, perPage = 15, search, isAppend = false)=>{
            if (!token) return;
            const cacheKey = `${country || "all"}_${page}_${perPage}`;
            const isClean = !search || !search.trim();
            if (isClean && !isAppend && developersCache.has(cacheKey)) {
                const cached = developersCache.get(cacheKey);
                setDevelopers(cached);
                setDeveloperHasMore(cached.length >= perPage);
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const countryParam = country && country !== "all" ? country : undefined;
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].getDevelopersPaginated(page, perPage, search || undefined, undefined, countryParam);
                const { itemsArray, pagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackDevelopersResponse"])(data);
                const mappedDevelopers = itemsArray.map({
                    "useCreateAdData.useCallback[loadDevelopers].mappedDevelopers": (dev)=>({
                            id: dev.developer_id || dev.id,
                            name: dev.developer_name || dev.name || `Developer #${dev.developer_id || dev.id}`
                        })
                }["useCreateAdData.useCallback[loadDevelopers].mappedDevelopers"]).filter({
                    "useCreateAdData.useCallback[loadDevelopers].mappedDevelopers": (dev_0)=>dev_0.id
                }["useCreateAdData.useCallback[loadDevelopers].mappedDevelopers"]);
                if (isAppend) {
                    setDevelopers({
                        "useCreateAdData.useCallback[loadDevelopers]": (prev)=>{
                            const existingIds = new Set(prev.map({
                                "useCreateAdData.useCallback[loadDevelopers]": (d)=>d.id
                            }["useCreateAdData.useCallback[loadDevelopers]"]));
                            const newUnique = mappedDevelopers.filter({
                                "useCreateAdData.useCallback[loadDevelopers].newUnique": (d_0)=>!existingIds.has(d_0.id)
                            }["useCreateAdData.useCallback[loadDevelopers].newUnique"]);
                            return [
                                ...prev,
                                ...newUnique
                            ];
                        }
                    }["useCreateAdData.useCallback[loadDevelopers]"]);
                } else {
                    setDevelopers(mappedDevelopers);
                    if (isClean) {
                        developersCache.set(cacheKey, mappedDevelopers);
                    }
                }
                const total = pagination?.total || data?.meta?.total || 0;
                setDeveloperHasMore(itemsArray.length === perPage);
            } catch (error) {
                console.error("Error fetching developers:", error);
            } finally{
                setLoading(false);
            }
        }
    }["useCreateAdData.useCallback[loadDevelopers]"], [
        token,
        country
    ]);
    const loadProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCreateAdData.useCallback[loadProjects]": async (devId, search_0)=>{
            if (!token) {
                setProjects([]);
                return;
            }
            const cacheKey_0 = `${devId || "all"}`;
            const isClean_0 = !search_0 || !search_0.trim();
            if (isClean_0 && projectsCache.has(cacheKey_0)) {
                setProjects(projectsCache.get(cacheKey_0));
                setProjectsLoading(false);
                return;
            }
            setProjectsLoading(true);
            try {
                const params = {
                    page: 1,
                    per_page: 100
                };
                if (devId && !isNaN(devId)) {
                    params.developer_id = devId;
                }
                if (search_0 && search_0.trim()) {
                    params.search = search_0.trim();
                }
                const results = await Promise.allSettled([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/projects", {
                        params
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchV2Projects"])(token, 1, 100, devId, search_0 || undefined)
                ]);
                const allItemsMap = new Map();
                results.forEach({
                    "useCreateAdData.useCallback[loadProjects]": (res)=>{
                        if (res.status === "fulfilled" && res.value) {
                            const val = res.value?.data || res.value;
                            const { itemsArray: itemsArray_0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackProjectsResponse"])(val);
                            const devProjects = Array.isArray(val?.data?.projects) ? val.data.projects : Array.isArray(val?.projects) ? val.projects : [];
                            const combined = [
                                ...itemsArray_0,
                                ...devProjects
                            ];
                            combined.forEach({
                                "useCreateAdData.useCallback[loadProjects]": (proj)=>{
                                    if (!proj) return;
                                    const rawId = proj.project_id || proj.id || proj.projectId || proj.value;
                                    const name = proj.project_name || proj.name || proj.title || proj.projectName || proj.label || (rawId ? `Project #${rawId}` : "");
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
                            }["useCreateAdData.useCallback[loadProjects]"]);
                        }
                    }
                }["useCreateAdData.useCallback[loadProjects]"]);
                let mappedProjects = Array.from(allItemsMap.values());
                if (isClean_0) {
                    projectsCache.set(cacheKey_0, mappedProjects);
                }
                if (search_0 && search_0.trim()) {
                    const s = search_0.toLowerCase();
                    mappedProjects = mappedProjects.filter({
                        "useCreateAdData.useCallback[loadProjects]": (p)=>p.name.toLowerCase().includes(s)
                    }["useCreateAdData.useCallback[loadProjects]"]);
                }
                setProjects(mappedProjects);
            } catch (error_0) {
                console.error("Error loading projects:", error_0);
            } finally{
                setProjectsLoading(false);
            }
        }
    }["useCreateAdData.useCallback[loadProjects]"], [
        token
    ]);
    const loadProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCreateAdData.useCallback[loadProperties]": async (devId_0, search_1)=>{
            if (!token) {
                setProperties([]);
                return;
            }
            const cacheKey_1 = `${devId_0 || "all"}`;
            const isClean_1 = !search_1 || !search_1.trim();
            if (isClean_1 && propertiesCache.has(cacheKey_1)) {
                setProperties(propertiesCache.get(cacheKey_1));
                setPropertiesLoading(false);
                return;
            }
            setPropertiesLoading(true);
            try {
                const params_0 = {
                    page: 1,
                    per_page: 100
                };
                if (devId_0 && !isNaN(devId_0)) {
                    params_0.developer_id = devId_0;
                }
                if (search_1 && search_1.trim()) {
                    params_0.property_name = search_1.trim();
                }
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/properties", {
                    params: params_0
                });
                const raw = response.data;
                const propItems = ({
                    "useCreateAdData.useCallback[loadProperties].propItems": ()=>{
                        if (!raw) return [];
                        if (Array.isArray(raw)) return raw;
                        if (Array.isArray(raw.data)) return raw.data;
                        if (raw.data && Array.isArray(raw.data.data)) return raw.data.data;
                        if (raw.data && Array.isArray(raw.data.properties)) return raw.data.properties;
                        if (Array.isArray(raw.properties)) return raw.properties;
                        return [];
                    }
                })["useCreateAdData.useCallback[loadProperties].propItems"]();
                const mappedProperties = propItems.map({
                    "useCreateAdData.useCallback[loadProperties].mappedProperties": (prop)=>{
                        const propId = prop.property_id ?? prop.id ?? prop.property_no;
                        const propName = (prop.property_name != null && String(prop.property_name).trim() !== "" ? String(prop.property_name) : null) || (prop.name != null && String(prop.name).trim() !== "" ? String(prop.name) : null) || (prop.title != null && String(prop.title).trim() !== "" ? String(prop.title) : null) || (prop.property_no != null && String(prop.property_no).trim() !== "" ? String(prop.property_no) : null) || (prop.unitNumber ? `Unit ${prop.unitNumber}` : "") || `Property #${propId}`;
                        return {
                            id: propId,
                            name: propName
                        };
                    }
                }["useCreateAdData.useCallback[loadProperties].mappedProperties"]).filter({
                    "useCreateAdData.useCallback[loadProperties].mappedProperties": (prop_0)=>prop_0.id !== undefined && prop_0.id !== null
                }["useCreateAdData.useCallback[loadProperties].mappedProperties"]);
                if (isClean_1) {
                    propertiesCache.set(cacheKey_1, mappedProperties);
                }
                setProperties(mappedProperties);
            } catch (error_1) {
                console.error("Error fetching properties from /dashboard/properties:", error_1);
            } finally{
                setPropertiesLoading(false);
            }
        }
    }["useCreateAdData.useCallback[loadProperties]"], [
        token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdData.useEffect": ()=>{
            if (isOpen && token) {
                loadDevelopers(1, 15, developerSearch || "", false);
            }
        }
    }["useCreateAdData.useEffect"], [
        developerSearch,
        isOpen,
        token,
        country,
        loadDevelopers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdData.useEffect": ()=>{
            if (isOpen && developerId) {
                const devIdNum = parseInt(developerId);
                if (!isNaN(devIdNum)) {
                    loadProjects(devIdNum, projectSearch || "");
                }
            } else {
                setProjects([]);
            }
        }
    }["useCreateAdData.useEffect"], [
        isOpen,
        developerId,
        projectSearch,
        loadProjects
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdData.useEffect": ()=>{
            if (isOpen && developerId) {
                const devIdNum_0 = parseInt(developerId);
                if (!isNaN(devIdNum_0)) {
                    loadProperties(devIdNum_0, propertySearch || "");
                }
            } else {
                setProperties([]);
            }
        }
    }["useCreateAdData.useEffect"], [
        isOpen,
        developerId,
        propertySearch,
        loadProperties
    ]);
    return {
        developers,
        projects,
        properties,
        loading,
        projectsLoading,
        propertiesLoading,
        developerHasMore,
        loadDevelopers,
        loadProjects,
        loadProperties
    };
}
_s(useCreateAdData, "V1WA60pRHUlDqHliMdFsRpIahKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
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
"[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateAdStepOne",
    ()=>CreateAdStepOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const LOCATIONS = [
    {
        value: "home",
        key: "ads.createStepOne.locHome",
        defaultLabel: "Home Page (home)"
    },
    {
        value: "home_top",
        key: "ads.createStepOne.locHomeTop",
        defaultLabel: "Home Top (home_top)"
    },
    {
        value: "home_bottom",
        key: "ads.createStepOne.locHomeBottom",
        defaultLabel: "Home Bottom (home_bottom)"
    },
    {
        value: "featured_cards",
        key: "ads.createStepOne.locFeaturedCards",
        defaultLabel: "Featured Cards (featured_cards)"
    },
    {
        value: "project_listing",
        key: "ads.createStepOne.locProjectListing",
        defaultLabel: "Project Listing (project_listing)"
    },
    {
        value: "unit_listing",
        key: "ads.createStepOne.locUnitListing",
        defaultLabel: "Unit Listing (unit_listing)"
    },
    {
        value: "developer_listing",
        key: "ads.createStepOne.locDeveloperListing",
        defaultLabel: "Developer Listing (developer_listing)"
    },
    {
        value: "expert_listing",
        key: "ads.createStepOne.locExpertListing",
        defaultLabel: "Expert Listing (expert_listing)"
    },
    {
        value: "podcast_listing",
        key: "ads.createStepOne.locPodcastListing",
        defaultLabel: "Podcast Listing (podcast_listing)"
    }
];
function CreateAdStepOne(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(449);
    if ($[0] !== "6f1df0ccd162c7b899b9b6527d01670d0ecd5f59f7af372f2e434dec10cc0c57") {
        for(let $i = 0; $i < 449; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f1df0ccd162c7b899b9b6527d01670d0ecd5f59f7af372f2e434dec10cc0c57";
    }
    const { dateErrors, validateDateTimeRange } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, setValue, clearErrors, control, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "type"
    }) || "banner";
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "platform"
    }) || "web";
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "width"
    }) || "medium";
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "position"
    }) || "bottom_right";
    const selectedLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "location"
    }) || [];
    let t2;
    if ($[1] !== control) {
        t2 = {
            control,
            name: "country"
        };
        $[1] = control;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t2);
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "status"
    }) || "draft";
    const billing_unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "billing_unit"
    }) || "impression";
    let t3;
    if ($[3] !== control) {
        t3 = {
            control,
            name: "startDate"
        };
        $[3] = control;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t3);
    let t4;
    if ($[5] !== control) {
        t4 = {
            control,
            name: "endDate"
        };
        $[5] = control;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t4);
    const toggleLocation = {
        "CreateAdStepOne[toggleLocation]": (loc)=>{
            const current = Array.isArray(selectedLocations) ? selectedLocations : [];
            const updated = current.includes(loc) ? current.filter({
                "CreateAdStepOne[toggleLocation > current.filter()]": (l)=>l !== loc
            }["CreateAdStepOne[toggleLocation > current.filter()]"]) : [
                ...current,
                loc
            ];
            setValue("location", updated, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            });
            if (updated.length > 0) {
                clearErrors("location");
            }
        }
    }["CreateAdStepOne[toggleLocation]"];
    let t5;
    if ($[7] !== t) {
        t5 = ({
            "CreateAdStepOne[getLocationLabel]": (locValue)=>{
                const norm = locValue?.toLowerCase().replace(/\s+/g, "_");
                const found = LOCATIONS.find({
                    "CreateAdStepOne[getLocationLabel > LOCATIONS.find()]": (l_0)=>l_0.value.toLowerCase() === norm || l_0.defaultLabel.toLowerCase() === locValue.toLowerCase()
                }["CreateAdStepOne[getLocationLabel > LOCATIONS.find()]"]);
                if (found) {
                    const translated = t(found.key);
                    return translated && translated !== found.key ? translated : found.defaultLabel;
                }
                return locValue;
            }
        })["CreateAdStepOne[getLocationLabel]"];
        $[7] = t;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const getLocationLabel = t5;
    const t6 = "space-y-4";
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== isAr || $[11] !== t) {
        t8 = t("ads.createStepOne.campaignOverview") || (isAr ? "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0645\u0644\u0629" : "Campaign Overview");
        $[10] = isAr;
        $[11] = t;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 202,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== isAr || $[16] !== t) {
        t10 = t("ads.createStepOne.adTitle") || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Title");
        $[15] = isAr;
        $[16] = t;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t10,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== isAr || $[22] !== t) {
        t13 = t("ads.createStepOne.adTitleHint") || (isAr ? "\u0627\u0644\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u0627\u0644\u0639\u0627\u0645" : "Internal & public identifier");
        $[21] = isAr;
        $[22] = t;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t12 || $[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== isAr || $[30] !== t) {
        t16 = t("ads.createStepOne.adTitlePlaceholder") || (isAr ? "\u0645\u062B\u0627\u0644: \u0641\u0644\u0644 \u0641\u0627\u062E\u0631\u0629 \u0639\u0644\u0649 \u0634\u0627\u0637\u0626 \u0627\u0644\u0628\u062D\u0631" : "e.g., Luxury Beachfront Villas");
        $[29] = isAr;
        $[30] = t;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== isAr || $[33] !== register || $[34] !== t) {
        t17 = register("title", {
            required: t("ads.createStepOne.adTitleRequired") || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required"),
            minLength: {
                value: 2,
                message: t("ads.createStepOne.adTitleMinLength") || (isAr ? "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0639\u0646 \u062D\u0631\u0641\u064A\u0646" : "Title must be at least 2 characters")
            }
        });
        $[32] = isAr;
        $[33] = register;
        $[34] = t;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    const t18 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.title ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700 focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30"}`;
    let t19;
    if ($[36] !== t16 || $[37] !== t17 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t16,
            ...t17,
            className: t18
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[36] = t16;
        $[37] = t17;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== errors.title || $[41] !== isAr) {
        t20 = errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 296,
                    columnNumber: 104
                }, this),
                String(errors.title.message || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 296,
            columnNumber: 27
        }, this);
        $[40] = errors.title;
        $[41] = isAr;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== t15 || $[44] !== t19 || $[45] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t19;
        $[45] = t20;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== isAr || $[48] !== t) {
        t22 = t("ads.createStepOne.initialStatus") || (isAr ? "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0648\u0644\u064A\u0629" : "Initial Status");
        $[47] = isAr;
        $[48] = t;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t22,
                " ",
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[51] = t22;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== setValue) {
        t25 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val)=>setValue("status", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[53] = setValue;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== isAr || $[56] !== t) {
        t26 = t("ads.createStepOne.selectStatus") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" : "Select Status");
        $[55] = isAr;
        $[56] = t;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t26
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 362,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[58] = t26;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] !== isAr || $[61] !== t) {
        t28 = t("ads.createStepOne.statusActive") || (isAr ? "\u0646\u0634\u0637" : "Active");
        $[60] = isAr;
        $[61] = t;
        $[62] = t28;
    } else {
        t28 = $[62];
    }
    let t29;
    if ($[63] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[63] = t28;
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    let t30;
    if ($[65] !== isAr || $[66] !== t) {
        t30 = t("ads.createStepOne.statusDraft") || (isAr ? "\u0645\u0633\u0648\u062F\u0629" : "Draft");
        $[65] = isAr;
        $[66] = t;
        $[67] = t30;
    } else {
        t30 = $[67];
    }
    let t31;
    if ($[68] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[68] = t30;
        $[69] = t31;
    } else {
        t31 = $[69];
    }
    let t32;
    if ($[70] !== isAr || $[71] !== t) {
        t32 = t("ads.createStepOne.statusPaused") || (isAr ? "\u0645\u0648\u0642\u0648\u0641 \u0645\u0624\u0642\u062A\u0627\u064B" : "Paused");
        $[70] = isAr;
        $[71] = t;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[73] = t32;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[75] !== isAr || $[76] !== t) {
        t34 = t("ads.createStepOne.statusEnded") || (isAr ? "\u0645\u0646\u062A\u0647\u064A" : "Ended");
        $[75] = isAr;
        $[76] = t;
        $[77] = t34;
    } else {
        t34 = $[77];
    }
    let t35;
    if ($[78] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[78] = t34;
        $[79] = t35;
    } else {
        t35 = $[79];
    }
    let t36;
    if ($[80] !== t29 || $[81] !== t31 || $[82] !== t33 || $[83] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t29,
                t31,
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[80] = t29;
        $[81] = t31;
        $[82] = t33;
        $[83] = t35;
        $[84] = t36;
    } else {
        t36 = $[84];
    }
    let t37;
    if ($[85] !== status || $[86] !== t25 || $[87] !== t27 || $[88] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t25,
            children: [
                t27,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[85] = status;
        $[86] = t25;
        $[87] = t27;
        $[88] = t36;
        $[89] = t37;
    } else {
        t37 = $[89];
    }
    let t38;
    if ($[90] !== t24 || $[91] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[90] = t24;
        $[91] = t37;
        $[92] = t38;
    } else {
        t38 = $[92];
    }
    let t39;
    if ($[93] !== isAr || $[94] !== t) {
        t39 = t("ads.createStepOne.priorityLevel") || (isAr ? "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 (1 - 10)" : "Priority Level (1 - 10)");
        $[93] = isAr;
        $[94] = t;
        $[95] = t39;
    } else {
        t39 = $[95];
    }
    let t40;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    let t41;
    if ($[97] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t39,
                " ",
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[97] = t39;
        $[98] = t41;
    } else {
        t41 = $[98];
    }
    let t42;
    if ($[99] !== isAr || $[100] !== register || $[101] !== t) {
        t42 = register("priority", {
            required: t("ads.createStepOne.priorityRequired") || (isAr ? "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" : "Priority is required"),
            min: {
                value: 1,
                message: t("ads.createStepOne.priorityMin") || (isAr ? "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0647\u0648 1" : "Min priority is 1")
            },
            max: {
                value: 10,
                message: t("ads.createStepOne.priorityMax") || (isAr ? "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0647\u0648 10" : "Max priority is 10")
            }
        });
        $[99] = isAr;
        $[100] = register;
        $[101] = t;
        $[102] = t42;
    } else {
        t42 = $[102];
    }
    const t43 = `bg-white dark:bg-neutral-900 h-9 text-xs ${errors.priority ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t44;
    if ($[103] !== t42 || $[104] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "number",
            min: "1",
            max: "10",
            placeholder: "1",
            ...t42,
            className: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[103] = t42;
        $[104] = t43;
        $[105] = t44;
    } else {
        t44 = $[105];
    }
    let t45;
    if ($[106] !== errors.priority || $[107] !== isAr) {
        t45 = errors.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: String(errors.priority.message || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0628\u064A\u0646 1 \u0648 10" : "Priority must be 1-10"))
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 523,
            columnNumber: 30
        }, this);
        $[106] = errors.priority;
        $[107] = isAr;
        $[108] = t45;
    } else {
        t45 = $[108];
    }
    let t46;
    if ($[109] !== t41 || $[110] !== t44 || $[111] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t41,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[109] = t41;
        $[110] = t44;
        $[111] = t45;
        $[112] = t46;
    } else {
        t46 = $[112];
    }
    let t47;
    if ($[113] !== isAr || $[114] !== t) {
        t47 = t("ads.createStepOne.billingUnit") || (isAr ? "\u0648\u062D\u062F\u0629 \u0627\u0644\u0641\u0648\u062A\u0631\u0629" : "Billing Unit");
        $[113] = isAr;
        $[114] = t;
        $[115] = t47;
    } else {
        t47 = $[115];
    }
    let t48;
    if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[116] = t48;
    } else {
        t48 = $[116];
    }
    let t49;
    if ($[117] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t47,
                " ",
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, this);
        $[117] = t47;
        $[118] = t49;
    } else {
        t49 = $[118];
    }
    let t50;
    if ($[119] !== setValue) {
        t50 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_0)=>setValue("billing_unit", val_0, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[119] = setValue;
        $[120] = t50;
    } else {
        t50 = $[120];
    }
    let t51;
    if ($[121] !== isAr || $[122] !== t) {
        t51 = t("ads.createStepOne.selectBilling") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0648\u062A\u0631\u0629" : "Select Billing");
        $[121] = isAr;
        $[122] = t;
        $[123] = t51;
    } else {
        t51 = $[123];
    }
    let t52;
    if ($[124] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t51
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 589,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[124] = t51;
        $[125] = t52;
    } else {
        t52 = $[125];
    }
    let t53;
    if ($[126] !== isAr || $[127] !== t) {
        t53 = t("ads.createStepOne.billingImpression") || (isAr ? "\u0627\u0644\u0638\u0647\u0648\u0631 (CPM)" : "Impression (CPM)");
        $[126] = isAr;
        $[127] = t;
        $[128] = t53;
    } else {
        t53 = $[128];
    }
    let t54;
    if ($[129] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "impression",
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[129] = t53;
        $[130] = t54;
    } else {
        t54 = $[130];
    }
    let t55;
    if ($[131] !== isAr || $[132] !== t) {
        t55 = t("ads.createStepOne.billingClick") || (isAr ? "\u0627\u0644\u0646\u0642\u0631\u0629 (CPC)" : "Click (CPC)");
        $[131] = isAr;
        $[132] = t;
        $[133] = t55;
    } else {
        t55 = $[133];
    }
    let t56;
    if ($[134] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "click",
            children: t55
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[134] = t55;
        $[135] = t56;
    } else {
        t56 = $[135];
    }
    let t57;
    if ($[136] !== isAr || $[137] !== t) {
        t57 = t("ads.createStepOne.billingView") || (isAr ? "\u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629 (CPV)" : "View (CPV)");
        $[136] = isAr;
        $[137] = t;
        $[138] = t57;
    } else {
        t57 = $[138];
    }
    let t58;
    if ($[139] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "view",
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[139] = t57;
        $[140] = t58;
    } else {
        t58 = $[140];
    }
    let t59;
    if ($[141] !== isAr || $[142] !== t) {
        t59 = t("ads.createStepOne.billingMonth") || (isAr ? "\u0634\u0647\u0631\u064A \u062B\u0627\u0628\u062A" : "Monthly Flat");
        $[141] = isAr;
        $[142] = t;
        $[143] = t59;
    } else {
        t59 = $[143];
    }
    let t60;
    if ($[144] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "month",
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[144] = t59;
        $[145] = t60;
    } else {
        t60 = $[145];
    }
    let t61;
    if ($[146] !== t54 || $[147] !== t56 || $[148] !== t58 || $[149] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t54,
                t56,
                t58,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[146] = t54;
        $[147] = t56;
        $[148] = t58;
        $[149] = t60;
        $[150] = t61;
    } else {
        t61 = $[150];
    }
    let t62;
    if ($[151] !== billing_unit || $[152] !== t50 || $[153] !== t52 || $[154] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: billing_unit,
            onValueChange: t50,
            children: [
                t52,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[151] = billing_unit;
        $[152] = t50;
        $[153] = t52;
        $[154] = t61;
        $[155] = t62;
    } else {
        t62 = $[155];
    }
    let t63;
    if ($[156] !== t49 || $[157] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t49,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 687,
            columnNumber: 11
        }, this);
        $[156] = t49;
        $[157] = t62;
        $[158] = t63;
    } else {
        t63 = $[158];
    }
    let t64;
    if ($[159] !== t38 || $[160] !== t46 || $[161] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1",
            children: [
                t38,
                t46,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 696,
            columnNumber: 11
        }, this);
        $[159] = t38;
        $[160] = t46;
        $[161] = t63;
        $[162] = t64;
    } else {
        t64 = $[162];
    }
    let t65;
    if ($[163] !== t21 || $[164] !== t64 || $[165] !== t9) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t9,
                t21,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 706,
            columnNumber: 11
        }, this);
        $[163] = t21;
        $[164] = t64;
        $[165] = t9;
        $[166] = t65;
    } else {
        t65 = $[166];
    }
    const t66 = "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4";
    let t67;
    if ($[167] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 717,
            columnNumber: 11
        }, this);
        $[167] = t67;
    } else {
        t67 = $[167];
    }
    let t68;
    if ($[168] !== isAr || $[169] !== t) {
        t68 = t("ads.createStepOne.placementAudience") || (isAr ? "\u0627\u0644\u0645\u0648\u0636\u0639 \u0648\u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641" : "Placement & Audience");
        $[168] = isAr;
        $[169] = t;
        $[170] = t68;
    } else {
        t68 = $[170];
    }
    let t69;
    if ($[171] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t67,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t68
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 733,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 733,
            columnNumber: 11
        }, this);
        $[171] = t68;
        $[172] = t69;
    } else {
        t69 = $[172];
    }
    let t70;
    if ($[173] !== isAr || $[174] !== t) {
        t70 = t("ads.createStepOne.adFormat") || (isAr ? "\u062A\u0646\u0633\u064A\u0642 / \u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Format / Type");
        $[173] = isAr;
        $[174] = t;
        $[175] = t70;
    } else {
        t70 = $[175];
    }
    let t71;
    if ($[176] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 750,
            columnNumber: 11
        }, this);
        $[176] = t71;
    } else {
        t71 = $[176];
    }
    let t72;
    if ($[177] !== t70) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t70,
                " ",
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 757,
            columnNumber: 11
        }, this);
        $[177] = t70;
        $[178] = t72;
    } else {
        t72 = $[178];
    }
    let t73;
    if ($[179] !== setValue) {
        t73 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_1)=>setValue("type", val_1, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[179] = setValue;
        $[180] = t73;
    } else {
        t73 = $[180];
    }
    let t74;
    if ($[181] !== isAr || $[182] !== t) {
        t74 = t("ads.createStepOne.selectFormat") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0646\u0633\u064A\u0642" : "Select Format");
        $[181] = isAr;
        $[182] = t;
        $[183] = t74;
    } else {
        t74 = $[183];
    }
    let t75;
    if ($[184] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t74
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 788,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 788,
            columnNumber: 11
        }, this);
        $[184] = t74;
        $[185] = t75;
    } else {
        t75 = $[185];
    }
    let t76;
    if ($[186] !== isAr || $[187] !== t) {
        t76 = t("ads.createStepOne.formatBanner") || (isAr ? "\u0628\u0646\u0631" : "Banner");
        $[186] = isAr;
        $[187] = t;
        $[188] = t76;
    } else {
        t76 = $[188];
    }
    let t77;
    if ($[189] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "banner",
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 805,
            columnNumber: 11
        }, this);
        $[189] = t76;
        $[190] = t77;
    } else {
        t77 = $[190];
    }
    let t78;
    if ($[191] !== isAr || $[192] !== t) {
        t78 = t("ads.createStepOne.formatCard") || (isAr ? "\u0628\u0637\u0627\u0642\u0629" : "Card");
        $[191] = isAr;
        $[192] = t;
        $[193] = t78;
    } else {
        t78 = $[193];
    }
    let t79;
    if ($[194] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "card",
            children: t78
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 822,
            columnNumber: 11
        }, this);
        $[194] = t78;
        $[195] = t79;
    } else {
        t79 = $[195];
    }
    let t80;
    if ($[196] !== isAr || $[197] !== t) {
        t80 = t("ads.createStepOne.formatPopUp") || (isAr ? "\u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629" : "Pop-up");
        $[196] = isAr;
        $[197] = t;
        $[198] = t80;
    } else {
        t80 = $[198];
    }
    let t81;
    if ($[199] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "pop_up",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 839,
            columnNumber: 11
        }, this);
        $[199] = t80;
        $[200] = t81;
    } else {
        t81 = $[200];
    }
    let t82;
    if ($[201] !== isAr || $[202] !== t) {
        t82 = t("ads.createStepOne.formatFullPage") || (isAr ? "\u0635\u0641\u062D\u0629 \u0643\u0627\u0645\u0644\u0629" : "Full Page");
        $[201] = isAr;
        $[202] = t;
        $[203] = t82;
    } else {
        t82 = $[203];
    }
    let t83;
    if ($[204] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "full_page",
            children: t82
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 856,
            columnNumber: 11
        }, this);
        $[204] = t82;
        $[205] = t83;
    } else {
        t83 = $[205];
    }
    let t84;
    if ($[206] !== t77 || $[207] !== t79 || $[208] !== t81 || $[209] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t77,
                t79,
                t81,
                t83
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 864,
            columnNumber: 11
        }, this);
        $[206] = t77;
        $[207] = t79;
        $[208] = t81;
        $[209] = t83;
        $[210] = t84;
    } else {
        t84 = $[210];
    }
    let t85;
    if ($[211] !== t73 || $[212] !== t75 || $[213] !== t84 || $[214] !== type) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: type,
            onValueChange: t73,
            children: [
                t75,
                t84
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 875,
            columnNumber: 11
        }, this);
        $[211] = t73;
        $[212] = t75;
        $[213] = t84;
        $[214] = type;
        $[215] = t85;
    } else {
        t85 = $[215];
    }
    let t86;
    if ($[216] !== t72 || $[217] !== t85) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t72,
                t85
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 886,
            columnNumber: 11
        }, this);
        $[216] = t72;
        $[217] = t85;
        $[218] = t86;
    } else {
        t86 = $[218];
    }
    let t87;
    if ($[219] !== isAr || $[220] !== t) {
        t87 = t("ads.createStepOne.targetPlatform") || (isAr ? "\u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Target Platform");
        $[219] = isAr;
        $[220] = t;
        $[221] = t87;
    } else {
        t87 = $[221];
    }
    let t88;
    if ($[222] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 904,
            columnNumber: 11
        }, this);
        $[222] = t88;
    } else {
        t88 = $[222];
    }
    let t89;
    if ($[223] !== t87) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t87,
                " ",
                t88
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 911,
            columnNumber: 11
        }, this);
        $[223] = t87;
        $[224] = t89;
    } else {
        t89 = $[224];
    }
    let t90;
    if ($[225] !== setValue) {
        t90 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_2)=>setValue("platform", val_2, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[225] = setValue;
        $[226] = t90;
    } else {
        t90 = $[226];
    }
    let t91;
    if ($[227] !== isAr || $[228] !== t) {
        t91 = t("ads.createStepOne.selectPlatform") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0635\u0629" : "Select Platform");
        $[227] = isAr;
        $[228] = t;
        $[229] = t91;
    } else {
        t91 = $[229];
    }
    let t92;
    if ($[230] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t91
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 942,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 942,
            columnNumber: 11
        }, this);
        $[230] = t91;
        $[231] = t92;
    } else {
        t92 = $[231];
    }
    let t93;
    if ($[232] !== isAr || $[233] !== t) {
        t93 = t("ads.createStepOne.platformWeb") || (isAr ? "\u0627\u0644\u0648\u064A\u0628" : "Web");
        $[232] = isAr;
        $[233] = t;
        $[234] = t93;
    } else {
        t93 = $[234];
    }
    let t94;
    if ($[235] !== t93) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "web",
            children: t93
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 959,
            columnNumber: 11
        }, this);
        $[235] = t93;
        $[236] = t94;
    } else {
        t94 = $[236];
    }
    let t95;
    if ($[237] !== isAr || $[238] !== t) {
        t95 = t("ads.createStepOne.platformMobile") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062C\u0648\u0627\u0644" : "Mobile App");
        $[237] = isAr;
        $[238] = t;
        $[239] = t95;
    } else {
        t95 = $[239];
    }
    let t96;
    if ($[240] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "mobile",
            children: t95
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 976,
            columnNumber: 11
        }, this);
        $[240] = t95;
        $[241] = t96;
    } else {
        t96 = $[241];
    }
    let t97;
    if ($[242] !== isAr || $[243] !== t) {
        t97 = t("ads.createStepOne.platformAndroid") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0623\u0646\u062F\u0631\u0648\u064A\u062F" : "Android App");
        $[242] = isAr;
        $[243] = t;
        $[244] = t97;
    } else {
        t97 = $[244];
    }
    let t98;
    if ($[245] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "android",
            children: t97
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 993,
            columnNumber: 11
        }, this);
        $[245] = t97;
        $[246] = t98;
    } else {
        t98 = $[246];
    }
    let t99;
    if ($[247] !== isAr || $[248] !== t) {
        t99 = t("ads.createStepOne.platformIos") || (isAr ? "\u062A\u0637\u0628\u064A\u0642 \u0622\u064A \u0623\u0648 \u0625\u0633" : "iOS App");
        $[247] = isAr;
        $[248] = t;
        $[249] = t99;
    } else {
        t99 = $[249];
    }
    let t100;
    if ($[250] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ios",
            children: t99
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1010,
            columnNumber: 12
        }, this);
        $[250] = t99;
        $[251] = t100;
    } else {
        t100 = $[251];
    }
    let t101;
    if ($[252] !== t100 || $[253] !== t94 || $[254] !== t96 || $[255] !== t98) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t94,
                t96,
                t98,
                t100
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1018,
            columnNumber: 12
        }, this);
        $[252] = t100;
        $[253] = t94;
        $[254] = t96;
        $[255] = t98;
        $[256] = t101;
    } else {
        t101 = $[256];
    }
    let t102;
    if ($[257] !== platform || $[258] !== t101 || $[259] !== t90 || $[260] !== t92) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: platform,
            onValueChange: t90,
            children: [
                t92,
                t101
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1029,
            columnNumber: 12
        }, this);
        $[257] = platform;
        $[258] = t101;
        $[259] = t90;
        $[260] = t92;
        $[261] = t102;
    } else {
        t102 = $[261];
    }
    let t103;
    if ($[262] !== t102 || $[263] !== t89) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t89,
                t102
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1040,
            columnNumber: 12
        }, this);
        $[262] = t102;
        $[263] = t89;
        $[264] = t103;
    } else {
        t103 = $[264];
    }
    let t104;
    if ($[265] !== t103 || $[266] !== t86) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t86,
                t103
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1049,
            columnNumber: 12
        }, this);
        $[265] = t103;
        $[266] = t86;
        $[267] = t104;
    } else {
        t104 = $[267];
    }
    let t105;
    if ($[268] !== isAr || $[269] !== position || $[270] !== setValue || $[271] !== t || $[272] !== type || $[273] !== width) {
        t105 = type === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                            children: t("ads.createStepOne.popUpDimensions") || (isAr ? "\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629" : "Pop-up Dimensions")
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1058,
                            columnNumber: 199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: width,
                            onValueChange: {
                                "CreateAdStepOne[<Select>.onValueChange]": (val_3)=>setValue("width", val_3, {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true
                                    })
                            }["CreateAdStepOne[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: t("ads.createStepOne.selectWidth") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0631\u0636" : "Select Width")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1064,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "full_screen",
                                            children: t("ads.createStepOne.dimensionFullScreen") || (isAr ? "\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629" : "Full Screen")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 348
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "large",
                                            children: t("ads.createStepOne.dimensionLarge") || (isAr ? "\u0643\u0628\u064A\u0631 (600 \u0628\u0643\u0633\u0644)" : "Large (600px)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 523
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "medium",
                                            children: t("ads.createStepOne.dimensionMedium") || (isAr ? "\u0645\u062A\u0648\u0633\u0637 (450 \u0628\u0643\u0633\u0644)" : "Medium (450px)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 689
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "small",
                                            children: t("ads.createStepOne.dimensionSmall") || (isAr ? "\u0635\u063A\u064A\u0631 (320 \u0628\u0643\u0633\u0644)" : "Small (320px)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 864
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "custom",
                                            children: t("ads.createStepOne.dimensionCustom") || (isAr ? "\u0645\u062E\u0635\u0635" : "Custom")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 1030
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1064,
                                    columnNumber: 333
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1058,
                            columnNumber: 497
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1058,
                    columnNumber: 194
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                            children: t("ads.createStepOne.screenPosition") || (isAr ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0638\u0647\u0648\u0631 \u0641\u064A \u0627\u0644\u0634\u0627\u0634\u0629" : "Screen Position")
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1064,
                            columnNumber: 1196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: position,
                            onValueChange: {
                                "CreateAdStepOne[<Select>.onValueChange]": (val_4)=>setValue("position", val_4, {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true
                                    })
                            }["CreateAdStepOne[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: t("ads.createStepOne.selectPosition") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0636\u0639" : "Select Position")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1070,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_center",
                                            children: t("ads.createStepOne.posTopCenter") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u0648\u0633\u0637" : "Top Center")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 360
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "middle_center",
                                            children: t("ads.createStepOne.posMiddleCenter") || (isAr ? "\u0627\u0644\u0648\u0633\u0637 (\u0627\u0641\u062A\u0631\u0627\u0636\u064A)" : "Center (Default)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 526
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_center",
                                            children: t("ads.createStepOne.posBottomCenter") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u0648\u0633\u0637" : "Bottom Banner")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 724
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_right",
                                            children: t("ads.createStepOne.posBottomRight") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u064A\u0645\u064A\u0646" : "Bottom Right")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 899
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_left",
                                            children: t("ads.createStepOne.posBottomLeft") || (isAr ? "\u0623\u0633\u0641\u0644 \u0627\u0644\u064A\u0633\u0627\u0631" : "Bottom Left")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 1077
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_right",
                                            children: t("ads.createStepOne.posTopRight") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646" : "Top Right")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 1252
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_left",
                                            children: t("ads.createStepOne.posTopLeft") || (isAr ? "\u0623\u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631" : "Top Left")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 1421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1070,
                                    columnNumber: 345
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1064,
                            columnNumber: 1480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1064,
                    columnNumber: 1191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1058,
            columnNumber: 33
        }, this);
        $[268] = isAr;
        $[269] = position;
        $[270] = setValue;
        $[271] = t;
        $[272] = type;
        $[273] = width;
        $[274] = t105;
    } else {
        t105 = $[274];
    }
    const t106 = "grid grid-cols-1 sm:grid-cols-2 gap-4";
    let t107;
    if ($[275] !== isAr || $[276] !== t) {
        t107 = t("ads.createStepOne.placementLocations") || (isAr ? "\u0623\u0645\u0627\u0643\u0646 \u0648\u0645\u0648\u0627\u0636\u0639 \u0627\u0644\u0638\u0647\u0648\u0631" : "Placement Locations");
        $[275] = isAr;
        $[276] = t;
        $[277] = t107;
    } else {
        t107 = $[277];
    }
    let t108;
    if ($[278] === Symbol.for("react.memo_cache_sentinel")) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1093,
            columnNumber: 12
        }, this);
        $[278] = t108;
    } else {
        t108 = $[278];
    }
    let t109;
    if ($[279] !== t107) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t107,
                " ",
                t108
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1100,
            columnNumber: 12
        }, this);
        $[279] = t107;
        $[280] = t109;
    } else {
        t109 = $[280];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"];
    const T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"];
    const t110 = true;
    const T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"];
    const t111 = "outline";
    const t112 = `w-full justify-between bg-white dark:bg-neutral-900 font-normal hover:bg-white dark:hover:bg-neutral-900 text-start h-9 text-xs sm:text-sm ${errors.location ? "border-red-500 text-red-500" : "border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"}`;
    const t113 = "truncate";
    const t114 = selectedLocations.length > 0 ? `${selectedLocations.length} ${t("ads.createStepOne.locationsCount") || (isAr ? "\u0645\u0648\u0627\u0636\u0639" : "locations")} (${selectedLocations.map(getLocationLabel).join(", ")})` : t("ads.createStepOne.selectPages") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u062D\u0627\u062A..." : "Select Pages...");
    let t115;
    if ($[281] !== t114) {
        t115 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t113,
            children: t114
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1116,
            columnNumber: 12
        }, this);
        $[281] = t114;
        $[282] = t115;
    } else {
        t115 = $[282];
    }
    let t116;
    if ($[283] === Symbol.for("react.memo_cache_sentinel")) {
        t116 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 opacity-50 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1124,
            columnNumber: 12
        }, this);
        $[283] = t116;
    } else {
        t116 = $[283];
    }
    let t117;
    if ($[284] !== T2 || $[285] !== t112 || $[286] !== t115) {
        t117 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            variant: t111,
            className: t112,
            children: [
                t115,
                t116
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1131,
            columnNumber: 12
        }, this);
        $[284] = T2;
        $[285] = t112;
        $[286] = t115;
        $[287] = t117;
    } else {
        t117 = $[287];
    }
    let t118;
    if ($[288] !== T1 || $[289] !== t117) {
        t118 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            asChild: t110,
            children: t117
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1141,
            columnNumber: 12
        }, this);
        $[288] = T1;
        $[289] = t117;
        $[290] = t118;
    } else {
        t118 = $[290];
    }
    let t119;
    if ($[291] !== getLocationLabel || $[292] !== selectedLocations || $[293] !== toggleLocation) {
        t119 = LOCATIONS.map({
            "CreateAdStepOne[LOCATIONS.map()]": (loc_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                    checked: selectedLocations.some({
                        "CreateAdStepOne[LOCATIONS.map() > selectedLocations.some()]": (s)=>(s || "").toLowerCase().replace(/\s+/g, "_") === loc_0.value
                    }["CreateAdStepOne[LOCATIONS.map() > selectedLocations.some()]"]),
                    onCheckedChange: {
                        "CreateAdStepOne[LOCATIONS.map() > <DropdownMenuCheckboxItem>.onCheckedChange]": ()=>toggleLocation(loc_0.value)
                    }["CreateAdStepOne[LOCATIONS.map() > <DropdownMenuCheckboxItem>.onCheckedChange]"],
                    className: "text-xs",
                    children: getLocationLabel(loc_0.value)
                }, loc_0.value, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1151,
                    columnNumber: 52
                }, this)
        }["CreateAdStepOne[LOCATIONS.map()]"]);
        $[291] = getLocationLabel;
        $[292] = selectedLocations;
        $[293] = toggleLocation;
        $[294] = t119;
    } else {
        t119 = $[294];
    }
    let t120;
    if ($[295] !== t119) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            className: "w-60",
            align: "start",
            children: t119
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1166,
            columnNumber: 12
        }, this);
        $[295] = t119;
        $[296] = t120;
    } else {
        t120 = $[296];
    }
    let t121;
    if ($[297] !== T0 || $[298] !== t118 || $[299] !== t120) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: [
                t118,
                t120
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1174,
            columnNumber: 12
        }, this);
        $[297] = T0;
        $[298] = t118;
        $[299] = t120;
        $[300] = t121;
    } else {
        t121 = $[300];
    }
    let t122;
    if ($[301] !== errors.location || $[302] !== isAr || $[303] !== t) {
        t122 = errors.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1184,
                    columnNumber: 108
                }, this),
                String(errors.location.message || t("ads.createStepOne.locationRequired") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0648\u0636\u0639 \u0638\u0647\u0648\u0631 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644" : "Please select at least one location"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1184,
            columnNumber: 31
        }, this);
        $[301] = errors.location;
        $[302] = isAr;
        $[303] = t;
        $[304] = t122;
    } else {
        t122 = $[304];
    }
    let t123;
    if ($[305] !== t109 || $[306] !== t121 || $[307] !== t122) {
        t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t109,
                t121,
                t122
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1194,
            columnNumber: 12
        }, this);
        $[305] = t109;
        $[306] = t121;
        $[307] = t122;
        $[308] = t123;
    } else {
        t123 = $[308];
    }
    let t124;
    if ($[309] !== isAr || $[310] !== t) {
        t124 = t("ads.createStepOne.country") || (isAr ? "\u0627\u0644\u062F\u0648\u0644\u0629" : "Country");
        $[309] = isAr;
        $[310] = t;
        $[311] = t124;
    } else {
        t124 = $[311];
    }
    let t125;
    if ($[312] === Symbol.for("react.memo_cache_sentinel")) {
        t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1213,
            columnNumber: 12
        }, this);
        $[312] = t125;
    } else {
        t125 = $[312];
    }
    let t126;
    if ($[313] !== t124) {
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t124,
                " ",
                t125
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1220,
            columnNumber: 12
        }, this);
        $[313] = t124;
        $[314] = t126;
    } else {
        t126 = $[314];
    }
    const t127 = country || undefined;
    let t128;
    if ($[315] !== clearErrors || $[316] !== setValue) {
        t128 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_5)=>{
                setValue("country", val_5, {
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
                clearErrors("country");
                clearErrors("developerId");
                clearErrors("projectId");
            }
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[315] = clearErrors;
        $[316] = setValue;
        $[317] = t128;
    } else {
        t128 = $[317];
    }
    const t129 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.country ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t130;
    if ($[318] !== isAr || $[319] !== t) {
        t130 = t("ads.createStepOne.selectCountry") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0648\u0644\u0629" : "Select Country");
        $[318] = isAr;
        $[319] = t;
        $[320] = t130;
    } else {
        t130 = $[320];
    }
    let t131;
    if ($[321] !== t130) {
        t131 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t130
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1265,
            columnNumber: 12
        }, this);
        $[321] = t130;
        $[322] = t131;
    } else {
        t131 = $[322];
    }
    let t132;
    if ($[323] !== t129 || $[324] !== t131) {
        t132 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: t129,
            children: t131
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1273,
            columnNumber: 12
        }, this);
        $[323] = t129;
        $[324] = t131;
        $[325] = t132;
    } else {
        t132 = $[325];
    }
    let t133;
    if ($[326] !== isAr || $[327] !== t) {
        t133 = t("ads.createStepOne.countryEgypt") || (isAr ? "\u0645\u0635\u0631" : "Egypt");
        $[326] = isAr;
        $[327] = t;
        $[328] = t133;
    } else {
        t133 = $[328];
    }
    let t134;
    if ($[329] !== t133) {
        t134 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Egypt",
            children: t133
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1291,
            columnNumber: 12
        }, this);
        $[329] = t133;
        $[330] = t134;
    } else {
        t134 = $[330];
    }
    let t135;
    if ($[331] !== isAr || $[332] !== t) {
        t135 = t("ads.createStepOne.countryUAE") || (isAr ? "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629" : "United Arab Emirates");
        $[331] = isAr;
        $[332] = t;
        $[333] = t135;
    } else {
        t135 = $[333];
    }
    let t136;
    if ($[334] !== t135) {
        t136 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "UAE",
            children: t135
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1308,
            columnNumber: 12
        }, this);
        $[334] = t135;
        $[335] = t136;
    } else {
        t136 = $[335];
    }
    let t137;
    if ($[336] !== isAr || $[337] !== t) {
        t137 = t("ads.createStepOne.countryOman") || (isAr ? "\u0639\u064F\u0645\u0627\u0646" : "Oman");
        $[336] = isAr;
        $[337] = t;
        $[338] = t137;
    } else {
        t137 = $[338];
    }
    let t138;
    if ($[339] !== t137) {
        t138 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Oman",
            children: t137
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1325,
            columnNumber: 12
        }, this);
        $[339] = t137;
        $[340] = t138;
    } else {
        t138 = $[340];
    }
    let t139;
    if ($[341] !== t134 || $[342] !== t136 || $[343] !== t138) {
        t139 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t134,
                t136,
                t138
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1333,
            columnNumber: 12
        }, this);
        $[341] = t134;
        $[342] = t136;
        $[343] = t138;
        $[344] = t139;
    } else {
        t139 = $[344];
    }
    let t140;
    if ($[345] !== t127 || $[346] !== t128 || $[347] !== t132 || $[348] !== t139) {
        t140 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t127,
            onValueChange: t128,
            children: [
                t132,
                t139
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1343,
            columnNumber: 12
        }, this);
        $[345] = t127;
        $[346] = t128;
        $[347] = t132;
        $[348] = t139;
        $[349] = t140;
    } else {
        t140 = $[349];
    }
    let t141;
    if ($[350] !== errors.country || $[351] !== isAr || $[352] !== t) {
        t141 = errors.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1354,
                    columnNumber: 107
                }, this),
                String(errors.country.message || t("ads.createStepOne.countryRequired") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u062F\u0648\u0644\u0629" : "Please select a country"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1354,
            columnNumber: 30
        }, this);
        $[350] = errors.country;
        $[351] = isAr;
        $[352] = t;
        $[353] = t141;
    } else {
        t141 = $[353];
    }
    let t142;
    if ($[354] !== t126 || $[355] !== t140 || $[356] !== t141) {
        t142 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t126,
                t140,
                t141
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1364,
            columnNumber: 12
        }, this);
        $[354] = t126;
        $[355] = t140;
        $[356] = t141;
        $[357] = t142;
    } else {
        t142 = $[357];
    }
    let t143;
    if ($[358] !== t123 || $[359] !== t142) {
        t143 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t106,
            children: [
                t123,
                t142
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1374,
            columnNumber: 12
        }, this);
        $[358] = t123;
        $[359] = t142;
        $[360] = t143;
    } else {
        t143 = $[360];
    }
    let t144;
    if ($[361] !== t104 || $[362] !== t105 || $[363] !== t143 || $[364] !== t69) {
        t144 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t66,
            children: [
                t69,
                t104,
                t105,
                t143
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1383,
            columnNumber: 12
        }, this);
        $[361] = t104;
        $[362] = t105;
        $[363] = t143;
        $[364] = t69;
        $[365] = t144;
    } else {
        t144 = $[365];
    }
    let t145;
    if ($[366] === Symbol.for("react.memo_cache_sentinel")) {
        t145 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1394,
            columnNumber: 12
        }, this);
        $[366] = t145;
    } else {
        t145 = $[366];
    }
    let t146;
    if ($[367] !== isAr || $[368] !== t) {
        t146 = t("ads.createStepOne.campaignSchedule") || (isAr ? "\u062C\u062F\u0648\u0644 \u0627\u0644\u062D\u0645\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629" : "Campaign Schedule");
        $[367] = isAr;
        $[368] = t;
        $[369] = t146;
    } else {
        t146 = $[369];
    }
    let t147;
    if ($[370] !== t146) {
        t147 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t145,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t146
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1410,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1410,
            columnNumber: 12
        }, this);
        $[370] = t146;
        $[371] = t147;
    } else {
        t147 = $[371];
    }
    let t148;
    if ($[372] !== isAr || $[373] !== t) {
        t148 = t("ads.createStepOne.startDate") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "Start Date");
        $[372] = isAr;
        $[373] = t;
        $[374] = t148;
    } else {
        t148 = $[374];
    }
    let t149;
    if ($[375] === Symbol.for("react.memo_cache_sentinel")) {
        t149 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1427,
            columnNumber: 12
        }, this);
        $[375] = t149;
    } else {
        t149 = $[375];
    }
    let t150;
    if ($[376] !== t148) {
        t150 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            htmlFor: "startDate",
            children: [
                t148,
                " ",
                t149
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1434,
            columnNumber: 12
        }, this);
        $[376] = t148;
        $[377] = t150;
    } else {
        t150 = $[377];
    }
    let t151;
    if ($[378] !== isAr || $[379] !== register || $[380] !== t) {
        t151 = register("startDate", {
            required: t("ads.createStepOne.startDateRequired") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0645\u0637\u0644\u0648\u0628" : "Start date is required")
        });
        $[378] = isAr;
        $[379] = register;
        $[380] = t;
        $[381] = t151;
    } else {
        t151 = $[381];
    }
    const t152 = `bg-white dark:bg-neutral-900 pl-10 h-9 text-xs sm:text-sm ${dateErrors.startDate || errors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t153;
    if ($[382] !== clearErrors || $[383] !== endDate || $[384] !== register || $[385] !== validateDateTimeRange) {
        t153 = ({
            "CreateAdStepOne[<Input>.onChange]": (e)=>{
                register("startDate").onChange(e);
                clearErrors("startDate");
                validateDateTimeRange(e.target.value, endDate || "");
            }
        })["CreateAdStepOne[<Input>.onChange]"];
        $[382] = clearErrors;
        $[383] = endDate;
        $[384] = register;
        $[385] = validateDateTimeRange;
        $[386] = t153;
    } else {
        t153 = $[386];
    }
    let t154;
    if ($[387] !== t151 || $[388] !== t152 || $[389] !== t153) {
        t154 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            ...t151,
            className: t152,
            onChange: t153
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1472,
            columnNumber: 12
        }, this);
        $[387] = t151;
        $[388] = t152;
        $[389] = t153;
        $[390] = t154;
    } else {
        t154 = $[390];
    }
    let t155;
    if ($[391] === Symbol.for("react.memo_cache_sentinel")) {
        t155 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1482,
            columnNumber: 12
        }, this);
        $[391] = t155;
    } else {
        t155 = $[391];
    }
    let t156;
    if ($[392] !== t154) {
        t156 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t154,
                t155
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1489,
            columnNumber: 12
        }, this);
        $[392] = t154;
        $[393] = t156;
    } else {
        t156 = $[393];
    }
    let t157;
    if ($[394] !== dateErrors.startDate || $[395] !== errors.startDate || $[396] !== isAr || $[397] !== t) {
        t157 = (dateErrors.startDate || errors.startDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1497,
                    columnNumber: 135
                }, this),
                dateErrors.startDate || String(errors.startDate?.message || t("ads.createStepOne.startDateRequired") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0645\u0637\u0644\u0648\u0628" : "Start date is required"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1497,
            columnNumber: 58
        }, this);
        $[394] = dateErrors.startDate;
        $[395] = errors.startDate;
        $[396] = isAr;
        $[397] = t;
        $[398] = t157;
    } else {
        t157 = $[398];
    }
    let t158;
    if ($[399] !== t150 || $[400] !== t156 || $[401] !== t157) {
        t158 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t150,
                t156,
                t157
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1508,
            columnNumber: 12
        }, this);
        $[399] = t150;
        $[400] = t156;
        $[401] = t157;
        $[402] = t158;
    } else {
        t158 = $[402];
    }
    let t159;
    if ($[403] !== isAr || $[404] !== t) {
        t159 = t("ads.createStepOne.endDate") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" : "End Date (Optional)");
        $[403] = isAr;
        $[404] = t;
        $[405] = t159;
    } else {
        t159 = $[405];
    }
    let t160;
    if ($[406] !== t159) {
        t160 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t159
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1527,
            columnNumber: 12
        }, this);
        $[406] = t159;
        $[407] = t160;
    } else {
        t160 = $[407];
    }
    let t161;
    if ($[408] !== isAr || $[409] !== t) {
        t161 = t("ads.createStepOne.endDateHint") || (isAr ? "\u0645\u0633\u062A\u0645\u0631 \u0641\u064A \u062D\u0627\u0644 \u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u0627\u064B" : "Continuous if empty");
        $[408] = isAr;
        $[409] = t;
        $[410] = t161;
    } else {
        t161 = $[410];
    }
    let t162;
    if ($[411] !== t161) {
        t162 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t161
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1544,
            columnNumber: 12
        }, this);
        $[411] = t161;
        $[412] = t162;
    } else {
        t162 = $[412];
    }
    let t163;
    if ($[413] !== t160 || $[414] !== t162) {
        t163 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            htmlFor: "endDate",
            children: [
                t160,
                t162
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1552,
            columnNumber: 12
        }, this);
        $[413] = t160;
        $[414] = t162;
        $[415] = t163;
    } else {
        t163 = $[415];
    }
    let t164;
    if ($[416] !== register) {
        t164 = register("endDate");
        $[416] = register;
        $[417] = t164;
    } else {
        t164 = $[417];
    }
    const t165 = `bg-white dark:bg-neutral-900 pl-10 h-9 text-xs sm:text-sm ${dateErrors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    const t166 = startDate || undefined;
    let t167;
    if ($[418] !== register || $[419] !== startDate || $[420] !== validateDateTimeRange) {
        t167 = ({
            "CreateAdStepOne[<Input>.onChange]": (e_0)=>{
                register("endDate").onChange(e_0);
                validateDateTimeRange(startDate || "", e_0.target.value);
            }
        })["CreateAdStepOne[<Input>.onChange]"];
        $[418] = register;
        $[419] = startDate;
        $[420] = validateDateTimeRange;
        $[421] = t167;
    } else {
        t167 = $[421];
    }
    let t168;
    if ($[422] !== t164 || $[423] !== t165 || $[424] !== t166 || $[425] !== t167) {
        t168 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            ...t164,
            className: t165,
            min: t166,
            onChange: t167
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1586,
            columnNumber: 12
        }, this);
        $[422] = t164;
        $[423] = t165;
        $[424] = t166;
        $[425] = t167;
        $[426] = t168;
    } else {
        t168 = $[426];
    }
    let t169;
    if ($[427] === Symbol.for("react.memo_cache_sentinel")) {
        t169 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1597,
            columnNumber: 12
        }, this);
        $[427] = t169;
    } else {
        t169 = $[427];
    }
    let t170;
    if ($[428] !== t168) {
        t170 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t168,
                t169
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1604,
            columnNumber: 12
        }, this);
        $[428] = t168;
        $[429] = t170;
    } else {
        t170 = $[429];
    }
    let t171;
    if ($[430] !== dateErrors.endDate) {
        t171 = dateErrors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1612,
                    columnNumber: 111
                }, this),
                dateErrors.endDate
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1612,
            columnNumber: 34
        }, this);
        $[430] = dateErrors.endDate;
        $[431] = t171;
    } else {
        t171 = $[431];
    }
    let t172;
    if ($[432] !== t163 || $[433] !== t170 || $[434] !== t171) {
        t172 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t163,
                t170,
                t171
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1620,
            columnNumber: 12
        }, this);
        $[432] = t163;
        $[433] = t170;
        $[434] = t171;
        $[435] = t172;
    } else {
        t172 = $[435];
    }
    let t173;
    if ($[436] !== t158 || $[437] !== t172) {
        t173 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t158,
                t172
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1630,
            columnNumber: 12
        }, this);
        $[436] = t158;
        $[437] = t172;
        $[438] = t173;
    } else {
        t173 = $[438];
    }
    let t174;
    if ($[439] !== dateErrors.general) {
        t174 = dateErrors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1639,
                    columnNumber: 215
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: dateErrors.general
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1639,
                    columnNumber: 264
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1639,
            columnNumber: 34
        }, this);
        $[439] = dateErrors.general;
        $[440] = t174;
    } else {
        t174 = $[440];
    }
    let t175;
    if ($[441] !== t147 || $[442] !== t173 || $[443] !== t174) {
        t175 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t147,
                t173,
                t174
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1647,
            columnNumber: 12
        }, this);
        $[441] = t147;
        $[442] = t173;
        $[443] = t174;
        $[444] = t175;
    } else {
        t175 = $[444];
    }
    let t176;
    if ($[445] !== t144 || $[446] !== t175 || $[447] !== t65) {
        t176 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t65,
                t144,
                t175
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1657,
            columnNumber: 12
        }, this);
        $[445] = t144;
        $[446] = t175;
        $[447] = t65;
        $[448] = t176;
    } else {
        t176 = $[448];
    }
    return t176;
}
_s(CreateAdStepOne, "nBz+gIMfD5ODok4GPlkPV3Du4rM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = CreateAdStepOne;
var _c;
__turbopack_context__.k.register(_c, "CreateAdStepOne");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperLinkSection",
    ()=>DeveloperLinkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function DeveloperLinkSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(172);
    if ($[0] !== "ce69cf3a1d1c179e1c93e85b1c045393159a3ceba5f4ad59f2e5e50706b2c777") {
        for(let $i = 0; $i < 172; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ce69cf3a1d1c179e1c93e85b1c045393159a3ceba5f4ad59f2e5e50706b2c777";
    }
    const { developerSearch, setDeveloperSearch, developersLoading, developers, handleDeveloperChange, projectSearch, setProjectSearch, projectsLoading, projects, propertySearch, setPropertySearch, propertiesLoading, properties } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { setValue, clearErrors, control, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    let t2;
    if ($[1] !== control) {
        t2 = {
            control,
            name: "developerId"
        };
        $[1] = control;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const developerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t2);
    const linkTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "linkTo"
    }) || "PROJECTS";
    let t3;
    if ($[3] !== control) {
        t3 = {
            control,
            name: "projectId"
        };
        $[3] = control;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t3);
    let t4;
    bb0: {
        if (!developerId) {
            t4 = "";
            break bb0;
        }
        let t5;
        if ($[5] !== developerId || $[6] !== developers) {
            let t6;
            if ($[8] !== developerId) {
                t6 = ({
                    "DeveloperLinkSection[developers.find()]": (d)=>d.id?.toString() === developerId?.toString()
                })["DeveloperLinkSection[developers.find()]"];
                $[8] = developerId;
                $[9] = t6;
            } else {
                t6 = $[9];
            }
            t5 = developers.find(t6);
            $[5] = developerId;
            $[6] = developers;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        const found = t5;
        t4 = found ? found.name : "";
    }
    const selectedDeveloperName = t4;
    let t5;
    bb1: {
        if (!projectId) {
            t5 = "";
            break bb1;
        }
        if (linkTo === "PROJECTS") {
            let t6;
            if ($[10] !== projectId || $[11] !== projects) {
                let t7;
                if ($[13] !== projectId) {
                    t7 = ({
                        "DeveloperLinkSection[projects.find()]": (p)=>p.id?.toString() === projectId?.toString()
                    })["DeveloperLinkSection[projects.find()]"];
                    $[13] = projectId;
                    $[14] = t7;
                } else {
                    t7 = $[14];
                }
                t6 = projects.find(t7);
                $[10] = projectId;
                $[11] = projects;
                $[12] = t6;
            } else {
                t6 = $[12];
            }
            const found_0 = t6;
            t5 = found_0 ? found_0.name : "";
            break bb1;
        } else {
            if (linkTo === "PROPERTIES") {
                let t6;
                if ($[15] !== projectId || $[16] !== properties) {
                    let t7;
                    if ($[18] !== projectId) {
                        t7 = ({
                            "DeveloperLinkSection[properties.find()]": (p_0)=>p_0.id?.toString() === projectId?.toString()
                        })["DeveloperLinkSection[properties.find()]"];
                        $[18] = projectId;
                        $[19] = t7;
                    } else {
                        t7 = $[19];
                    }
                    t6 = properties.find(t7);
                    $[15] = projectId;
                    $[16] = properties;
                    $[17] = t6;
                } else {
                    t6 = $[17];
                }
                const found_1 = t6;
                t5 = found_1 ? found_1.name : "";
                break bb1;
            }
        }
        t5 = "";
    }
    const selectedProjectName = t5;
    let t6;
    bb2: {
        if (!projectSearch || !projectSearch.trim()) {
            t6 = projects;
            break bb2;
        }
        let t7;
        if ($[20] !== projectSearch || $[21] !== projects) {
            const s = projectSearch.toLowerCase().trim();
            t7 = projects.filter({
                "DeveloperLinkSection[projects.filter()]": (p_1)=>(p_1.name || "").toLowerCase().includes(s)
            }["DeveloperLinkSection[projects.filter()]"]);
            $[20] = projectSearch;
            $[21] = projects;
            $[22] = t7;
        } else {
            t7 = $[22];
        }
        t6 = t7;
    }
    const filteredProjects = t6;
    let t7;
    bb3: {
        if (!propertySearch || !propertySearch.trim()) {
            t7 = properties;
            break bb3;
        }
        let t8;
        if ($[23] !== properties || $[24] !== propertySearch) {
            const s_0 = propertySearch.toLowerCase().trim();
            t8 = properties.filter({
                "DeveloperLinkSection[properties.filter()]": (p_2)=>(p_2.name || "").toLowerCase().includes(s_0)
            }["DeveloperLinkSection[properties.filter()]"]);
            $[23] = properties;
            $[24] = propertySearch;
            $[25] = t8;
        } else {
            t8 = $[25];
        }
        t7 = t8;
    }
    const filteredProperties = t7;
    let t8;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== isAr || $[28] !== t) {
        t9 = t("ads.createStepTwo.developerAndTargetLink") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631 \u0648\u0627\u0644\u0648\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Developer & Target Link");
        $[27] = isAr;
        $[28] = t;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 236,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[30] = t9;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] !== developerId || $[33] !== isAr) {
        t11 = developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-medium text-teal-600 dark:text-teal-400",
            children: isAr ? `المطور المحدد #${developerId}` : `Selected Developer #${developerId}`
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 244,
            columnNumber: 26
        }, this);
        $[32] = developerId;
        $[33] = isAr;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    let t12;
    if ($[35] !== t10 || $[36] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t11;
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    let t13;
    if ($[38] !== isAr || $[39] !== t) {
        t13 = t("ads.createStepTwo.developer") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631" : "Developer");
        $[38] = isAr;
        $[39] = t;
        $[40] = t13;
    } else {
        t13 = $[40];
    }
    let t14;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[41] = t14;
    } else {
        t14 = $[41];
    }
    let t15;
    if ($[42] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t13,
                " ",
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[42] = t13;
        $[43] = t15;
    } else {
        t15 = $[43];
    }
    let t16;
    if ($[44] !== developers.length || $[45] !== isAr || $[46] !== t) {
        t16 = developers.length > 0 ? `${developers.length} ${t("ads.createStepTwo.developersAvailable") || (isAr ? "\u0645\u062A\u0627\u062D" : "available")}` : "";
        $[44] = developers.length;
        $[45] = isAr;
        $[46] = t;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[48] = t16;
        $[49] = t17;
    } else {
        t17 = $[49];
    }
    let t18;
    if ($[50] !== t15 || $[51] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[50] = t15;
        $[51] = t17;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    let t19;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    let t20;
    if ($[54] !== isAr || $[55] !== t) {
        t20 = t("ads.createStepTwo.searchDeveloperPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631 \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search developer by name...");
        $[54] = isAr;
        $[55] = t;
        $[56] = t20;
    } else {
        t20 = $[56];
    }
    let t21;
    if ($[57] !== setDeveloperSearch) {
        t21 = ({
            "DeveloperLinkSection[<Input>.onChange]": (e)=>setDeveloperSearch(e.target.value)
        })["DeveloperLinkSection[<Input>.onChange]"];
        $[57] = setDeveloperSearch;
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    let t22;
    if ($[59] !== developerSearch || $[60] !== t20 || $[61] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t20,
            value: developerSearch,
            onChange: t21,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 pl-9 pr-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[59] = developerSearch;
        $[60] = t20;
        $[61] = t21;
        $[62] = t22;
    } else {
        t22 = $[62];
    }
    let t23;
    if ($[63] !== developerSearch || $[64] !== setDeveloperSearch) {
        t23 = developerSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "DeveloperLinkSection[<button>.onClick]": ()=>setDeveloperSearch("")
            }["DeveloperLinkSection[<button>.onClick]"],
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                lineNumber: 351,
                columnNumber: 174
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 349,
            columnNumber: 30
        }, this);
        $[63] = developerSearch;
        $[64] = setDeveloperSearch;
        $[65] = t23;
    } else {
        t23 = $[65];
    }
    let t24;
    if ($[66] !== t22 || $[67] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-2",
            children: [
                t19,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[66] = t22;
        $[67] = t23;
        $[68] = t24;
    } else {
        t24 = $[68];
    }
    let t25;
    if ($[69] !== developerId) {
        t25 = developerId ? developerId.toString() : undefined;
        $[69] = developerId;
        $[70] = t25;
    } else {
        t25 = $[70];
    }
    let t26;
    if ($[71] !== clearErrors || $[72] !== handleDeveloperChange) {
        t26 = ({
            "DeveloperLinkSection[<Select>.onValueChange]": (val)=>{
                handleDeveloperChange(val);
                clearErrors("developerId");
            }
        })["DeveloperLinkSection[<Select>.onValueChange]"];
        $[71] = clearErrors;
        $[72] = handleDeveloperChange;
        $[73] = t26;
    } else {
        t26 = $[73];
    }
    const t27 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.developerId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t28;
    if ($[74] !== developersLoading || $[75] !== isAr || $[76] !== t) {
        t28 = developersLoading ? t("ads.createStepTwo.loadingDevelopers") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646..." : "Loading developers...") : t("ads.createStepTwo.selectDeveloper") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631" : "Select Developer");
        $[74] = developersLoading;
        $[75] = isAr;
        $[76] = t;
        $[77] = t28;
    } else {
        t28 = $[77];
    }
    const t29 = selectedDeveloperName || undefined;
    let t30;
    if ($[78] !== t28 || $[79] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t28,
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[78] = t28;
        $[79] = t29;
        $[80] = t30;
    } else {
        t30 = $[80];
    }
    let t31;
    if ($[81] !== t27 || $[82] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: t27,
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[81] = t27;
        $[82] = t30;
        $[83] = t31;
    } else {
        t31 = $[83];
    }
    let t32;
    if ($[84] !== developerSearch || $[85] !== developers || $[86] !== developersLoading || $[87] !== isAr || $[88] !== t) {
        t32 = developersLoading && developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.loadingDevelopers") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646..." : "Loading developers...")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 421,
            columnNumber: 58
        }, this) : developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.noDevelopersFound") || (isAr ? "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0637\u0648\u0631\u064A\u0646 \u0644\u0644\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629" : "No developers found for the selected country")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 421,
            columnNumber: 341
        }, this) : developers.filter({
            "DeveloperLinkSection[developers.filter()]": (dev)=>!developerSearch || (dev.name || "").toLowerCase().includes(developerSearch.toLowerCase())
        }["DeveloperLinkSection[developers.filter()]"]).map(_DeveloperLinkSectionAnonymous);
        $[84] = developerSearch;
        $[85] = developers;
        $[86] = developersLoading;
        $[87] = isAr;
        $[88] = t;
        $[89] = t32;
    } else {
        t32 = $[89];
    }
    let t33;
    if ($[90] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "max-h-56 overflow-y-auto",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[90] = t32;
        $[91] = t33;
    } else {
        t33 = $[91];
    }
    let t34;
    if ($[92] !== t25 || $[93] !== t26 || $[94] !== t31 || $[95] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t25,
            onValueChange: t26,
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[92] = t25;
        $[93] = t26;
        $[94] = t31;
        $[95] = t33;
        $[96] = t34;
    } else {
        t34 = $[96];
    }
    let t35;
    if ($[97] !== errors.developerId || $[98] !== isAr || $[99] !== t) {
        t35 = errors.developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 454,
                    columnNumber: 110
                }, this),
                String(errors.developerId.message || t("ads.createStepTwo.developerRequired") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631" : "Please select a developer"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 454,
            columnNumber: 33
        }, this);
        $[97] = errors.developerId;
        $[98] = isAr;
        $[99] = t;
        $[100] = t35;
    } else {
        t35 = $[100];
    }
    let t36;
    if ($[101] !== t18 || $[102] !== t24 || $[103] !== t34 || $[104] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t24,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[101] = t18;
        $[102] = t24;
        $[103] = t34;
        $[104] = t35;
        $[105] = t36;
    } else {
        t36 = $[105];
    }
    let t37;
    if ($[106] !== isAr || $[107] !== t) {
        t37 = t("ads.createStepTwo.linkDestinationType") || (isAr ? "\u0646\u0648\u0639 \u0648\u062C\u0647\u0629 \u0627\u0644\u0631\u0627\u0628\u0637" : "Link Destination Type");
        $[106] = isAr;
        $[107] = t;
        $[108] = t37;
    } else {
        t37 = $[108];
    }
    let t38;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 484,
            columnNumber: 11
        }, this);
        $[109] = t38;
    } else {
        t38 = $[109];
    }
    let t39;
    if ($[110] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t37,
                " ",
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[110] = t37;
        $[111] = t39;
    } else {
        t39 = $[111];
    }
    let t40;
    if ($[112] !== clearErrors || $[113] !== setValue) {
        t40 = ({
            "DeveloperLinkSection[<Select>.onValueChange]": (val_0)=>{
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
                clearErrors("projectId");
            }
        })["DeveloperLinkSection[<Select>.onValueChange]"];
        $[112] = clearErrors;
        $[113] = setValue;
        $[114] = t40;
    } else {
        t40 = $[114];
    }
    let t41;
    if ($[115] !== isAr || $[116] !== t) {
        t41 = t("ads.createStepTwo.selectDestination") || (isAr ? "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0648\u062C\u0647\u0629" : "Select Destination");
        $[115] = isAr;
        $[116] = t;
        $[117] = t41;
    } else {
        t41 = $[117];
    }
    let t42;
    if ($[118] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t41
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                lineNumber: 531,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[118] = t41;
        $[119] = t42;
    } else {
        t42 = $[119];
    }
    let t43;
    if ($[120] !== isAr || $[121] !== t) {
        t43 = t("ads.createStepTwo.destinationSpecificProject") || (isAr ? "\u0645\u0634\u0631\u0648\u0639 \u0645\u062D\u062F\u062F" : "Specific Project");
        $[120] = isAr;
        $[121] = t;
        $[122] = t43;
    } else {
        t43 = $[122];
    }
    let t44;
    if ($[123] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROJECTS",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[123] = t43;
        $[124] = t44;
    } else {
        t44 = $[124];
    }
    let t45;
    if ($[125] !== isAr || $[126] !== t) {
        t45 = t("ads.createStepTwo.destinationSpecificProperty") || (isAr ? "\u0639\u0642\u0627\u0631 / \u0648\u062D\u062F\u0629 \u0645\u062D\u062F\u062F\u0629" : "Specific Property / Unit");
        $[125] = isAr;
        $[126] = t;
        $[127] = t45;
    } else {
        t45 = $[127];
    }
    let t46;
    if ($[128] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROPERTIES",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        $[128] = t45;
        $[129] = t46;
    } else {
        t46 = $[129];
    }
    let t47;
    if ($[130] !== isAr || $[131] !== t) {
        t47 = t("ads.createStepTwo.destinationCustomUrl") || (isAr ? "\u0631\u0627\u0628\u0637 \u0645\u062E\u0635\u0635 / \u0628\u062F\u0648\u0646 \u0631\u0627\u0628\u0637" : "Custom URL / No Link");
        $[130] = isAr;
        $[131] = t;
        $[132] = t47;
    } else {
        t47 = $[132];
    }
    let t48;
    if ($[133] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "NONE",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[133] = t47;
        $[134] = t48;
    } else {
        t48 = $[134];
    }
    let t49;
    if ($[135] !== t44 || $[136] !== t46 || $[137] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t44,
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[135] = t44;
        $[136] = t46;
        $[137] = t48;
        $[138] = t49;
    } else {
        t49 = $[138];
    }
    let t50;
    if ($[139] !== linkTo || $[140] !== t40 || $[141] !== t42 || $[142] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: linkTo,
            onValueChange: t40,
            children: [
                t42,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[139] = linkTo;
        $[140] = t40;
        $[141] = t42;
        $[142] = t49;
        $[143] = t50;
    } else {
        t50 = $[143];
    }
    let t51;
    if ($[144] !== t39 || $[145] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[144] = t39;
        $[145] = t50;
        $[146] = t51;
    } else {
        t51 = $[146];
    }
    let t52;
    if ($[147] !== clearErrors || $[148] !== developerId || $[149] !== errors.projectId || $[150] !== filteredProjects || $[151] !== filteredProperties || $[152] !== isAr || $[153] !== linkTo || $[154] !== projectId || $[155] !== projectSearch || $[156] !== projectsLoading || $[157] !== propertiesLoading || $[158] !== propertySearch || $[159] !== selectedProjectName || $[160] !== setProjectSearch || $[161] !== setPropertySearch || $[162] !== setValue || $[163] !== t) {
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
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                    lineNumber: 620,
                                    columnNumber: 381
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 620,
                            columnNumber: 156
                        }, this),
                        developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-neutral-400 font-normal",
                            children: linkTo === "PROJECTS" ? `${filteredProjects.length} ${t("ads.createStepTwo.itemsFound") || (isAr ? "\u0645\u062A\u0637\u0627\u0628\u0642" : "found")}` : `${filteredProperties.length} ${t("ads.createStepTwo.itemsFound") || (isAr ? "\u0645\u062A\u0637\u0627\u0628\u0642" : "found")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 620,
                            columnNumber: 443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 620,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 620,
                            columnNumber: 832
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B..." : "Select a developer first...") : linkTo === "PROJECTS" ? t("ads.createStepTwo.searchProjectsPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search projects by name...") : t("ads.createStepTwo.searchPropertiesPlaceholder") || (isAr ? "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A \u0628\u0627\u0644\u0627\u0633\u0645..." : "Search properties by name..."),
                            value: linkTo === "PROJECTS" ? projectSearch : propertySearch,
                            onChange: {
                                "DeveloperLinkSection[<Input>.onChange]": (e_0)=>{
                                    if (linkTo === "PROJECTS") {
                                        setProjectSearch(e_0.target.value);
                                    } else {
                                        setPropertySearch(e_0.target.value);
                                    }
                                }
                            }["DeveloperLinkSection[<Input>.onChange]"],
                            disabled: !developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading),
                            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 pl-9 pr-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 620,
                            columnNumber: 924
                        }, this),
                        (linkTo === "PROJECTS" ? projectSearch : propertySearch) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "DeveloperLinkSection[<button>.onClick]": ()=>{
                                    if (linkTo === "PROJECTS") {
                                        setProjectSearch("");
                                    } else {
                                        setPropertySearch("");
                                    }
                                }
                            }["DeveloperLinkSection[<button>.onClick]"],
                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 636,
                                columnNumber: 178
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 628,
                            columnNumber: 348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 620,
                    columnNumber: 801
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: projectId ? projectId.toString() : undefined,
                    onValueChange: {
                        "DeveloperLinkSection[<Select>.onValueChange]": (val_1)=>{
                            setValue("projectId", val_1, {
                                shouldDirty: true,
                                shouldTouch: true,
                                shouldValidate: true
                            });
                            clearErrors("projectId");
                        }
                    }["DeveloperLinkSection[<Select>.onValueChange]"],
                    disabled: !developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.projectId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B..." : "Select developer first") : linkTo === "PROJECTS" ? projectsLoading ? t("ads.createStepTwo.loadingProjects") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639..." : "Loading projects...") : t("ads.createStepTwo.chooseProject") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Choose Project") : propertiesLoading ? t("ads.createStepTwo.loadingProperties") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A..." : "Loading properties...") : t("ads.createStepTwo.chooseProperty") || (isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631" : "Choose Property"),
                                children: selectedProjectName || undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 314
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 645,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-56 overflow-y-auto",
                            children: !developerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.selectDeveloperFirst") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B" : "Please select a developer first")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 1385
                            }, this) : linkTo === "PROJECTS" ? projectsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProjects") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639..." : "Loading projects...")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 1707
                            }, this) : filteredProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: projectSearch ? t("ads.createStepTwo.noMatchingProjects") || (isAr ? "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0637\u0627\u0628\u0642\u0629" : "No matching projects found") : t("ads.createStepTwo.noProjectsForDeveloper") || (isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0648\u0631" : "No projects found for this developer")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 1992
                            }, this) : filteredProjects.map(_DeveloperLinkSectionFilteredProjectsMap) : propertiesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProperties") || (isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A..." : "Loading properties...")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 2650
                            }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: propertySearch ? t("ads.createStepTwo.noMatchingProperties") || (isAr ? "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0639\u0642\u0627\u0631\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629" : "No matching properties found") : t("ads.createStepTwo.noPropertiesForDeveloper") || (isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0642\u0627\u0631\u0627\u062A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0637\u0648\u0631" : "No properties found for this developer")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 645,
                                columnNumber: 2941
                            }, this) : filteredProperties.map(_DeveloperLinkSectionFilteredPropertiesMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 645,
                            columnNumber: 1317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 636,
                    columnNumber: 223
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 645,
                            columnNumber: 3713
                        }, this),
                        String(errors.projectId.message || (linkTo === "PROJECTS" ? t("ads.createStepTwo.projectRequired") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0634\u0631\u0648\u0639" : "Please select a project") : t("ads.createStepTwo.propertyRequired") || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0639\u0642\u0627\u0631" : "Please select a property")))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 645,
                    columnNumber: 3636
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 620,
            columnNumber: 32
        }, this);
        $[147] = clearErrors;
        $[148] = developerId;
        $[149] = errors.projectId;
        $[150] = filteredProjects;
        $[151] = filteredProperties;
        $[152] = isAr;
        $[153] = linkTo;
        $[154] = projectId;
        $[155] = projectSearch;
        $[156] = projectsLoading;
        $[157] = propertiesLoading;
        $[158] = propertySearch;
        $[159] = selectedProjectName;
        $[160] = setProjectSearch;
        $[161] = setPropertySearch;
        $[162] = setValue;
        $[163] = t;
        $[164] = t52;
    } else {
        t52 = $[164];
    }
    let t53;
    if ($[165] !== t51 || $[166] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 669,
            columnNumber: 11
        }, this);
        $[165] = t51;
        $[166] = t52;
        $[167] = t53;
    } else {
        t53 = $[167];
    }
    let t54;
    if ($[168] !== t12 || $[169] !== t36 || $[170] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t12,
                t36,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 678,
            columnNumber: 11
        }, this);
        $[168] = t12;
        $[169] = t36;
        $[170] = t53;
        $[171] = t54;
    } else {
        t54 = $[171];
    }
    return t54;
}
_s(DeveloperLinkSection, "6W0FArnBfqx1vQuuAuzdf9k1laY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = DeveloperLinkSection;
function _DeveloperLinkSectionFilteredPropertiesMap(prop) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: prop.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: prop.name
    }, prop.id, false, {
        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
        lineNumber: 689,
        columnNumber: 10
    }, this);
}
function _DeveloperLinkSectionFilteredProjectsMap(proj) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: proj.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: proj.name
    }, proj.id, false, {
        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
        lineNumber: 692,
        columnNumber: 10
    }, this);
}
function _DeveloperLinkSectionAnonymous(dev_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: dev_0.id.toString(),
        className: "text-xs sm:text-sm py-1.5",
        children: dev_0.name
    }, dev_0.id, false, {
        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
        lineNumber: 695,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperLinkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreativeAssetSection",
    ()=>CreativeAssetSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function CreativeAssetSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "d684a67f3a0601b80b7d358edd4b433dd8c6727ec7cbbc37cb07290905345a7d") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d684a67f3a0601b80b7d358edd4b433dd8c6727ec7cbbc37cb07290905345a7d";
    }
    const { adImagePreview, handleImageUpload } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== isAr || $[3] !== t) {
        t3 = t("ads.createStepTwo.creativeBannerAsset") || (isAr ? "\u0635\u0648\u0631\u0629 / \u0628\u0646\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Creative Banner Asset");
        $[2] = isAr;
        $[3] = t;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: [
                        t3,
                        " ",
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 59,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== isAr || $[9] !== t) {
        t6 = t("ads.createStepTwo.imageFormatHint") || (isAr ? "PNG, JPG, WEBP \u2022 \u0628\u062D\u062F \u0623\u0642\u0635\u0649 2 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "PNG, JPG, WEBP \u2022 Max 2MB");
        $[8] = isAr;
        $[9] = t;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 76,
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
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = `border border-dashed rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${adImagePreview ? "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" : errors.image ? "border-red-500 bg-red-50/20 dark:bg-red-950/10" : "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-teal-500/60"}`;
    let t10;
    if ($[16] !== adImagePreview || $[17] !== isAr || $[18] !== t) {
        t10 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: "Ad Preview",
                    className: "max-h-36 w-auto mx-auto object-contain rounded-md border border-neutral-200 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 94,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        className: "h-7 text-xs font-medium border-neutral-200 dark:border-neutral-700",
                        onClick: _CreativeAssetSectionButtonOnClick,
                        children: t("ads.createStepTwo.changeImage") || (isAr ? "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629" : "Change Image")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                        lineNumber: 94,
                        columnNumber: 254
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 94,
                    columnNumber: 230
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 94,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center py-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                        lineNumber: 94,
                        columnNumber: 786
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 94,
                    columnNumber: 636
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-800 dark:text-neutral-200 font-medium",
                    children: t("ads.createStepTwo.clickToUpload") || (isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Click to upload banner image")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 94,
                    columnNumber: 822
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-neutral-400 mt-0.5",
                    children: t("ads.createStepTwo.aspectRatioHint") || (isAr ? "16:9 \u0644\u0644\u0628\u0646\u0631\u0627\u062A \u2022 4:5 \u0644\u0644\u0628\u0637\u0627\u0642\u0627\u062A" : "16:9 for banners \u2022 4:5 for card placements")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 94,
                    columnNumber: 1103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 94,
            columnNumber: 587
        }, this);
        $[16] = adImagePreview;
        $[17] = isAr;
        $[18] = t;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== handleImageUpload) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[20] = handleImageUpload;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: _CreativeAssetSectionDivOnClick,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== errors.image || $[27] !== isAr || $[28] !== t) {
        t13 = errors.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 122,
                    columnNumber: 104
                }, this),
                String(errors.image.message || t("ads.createStepTwo.imageRequired") || (isAr ? "\u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628\u0629" : "Ad image is required"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 122,
            columnNumber: 27
        }, this);
        $[26] = errors.image;
        $[27] = isAr;
        $[28] = t;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t12 || $[31] !== t13 || $[32] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t8,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t13;
        $[32] = t8;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    return t14;
}
_s(CreativeAssetSection, "i82nJnFxwMK/LrvUrXVhysnhZoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c = CreativeAssetSection;
function _CreativeAssetSectionButtonOnClick(e) {
    e.stopPropagation();
    document.getElementById("ad-image-upload")?.click();
}
function _CreativeAssetSectionDivOnClick() {
    return document.getElementById("ad-image-upload")?.click();
}
var _c;
__turbopack_context__.k.register(_c, "CreativeAssetSection");
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
"[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentFeaturesSection",
    ()=>ContentFeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ContentFeaturesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(125);
    if ($[0] !== "9b3a0e671993beb4cd8de39882f9691287a2ebbe9a0acae259b3cda6bf563132") {
        for(let $i = 0; $i < 125; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b3a0e671993beb4cd8de39882f9691287a2ebbe9a0acae259b3cda6bf563132";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, setValue, clearErrors, control, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    let t1;
    if ($[1] !== control) {
        t1 = {
            control,
            name: "description"
        };
        $[1] = control;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t1);
    let t2;
    if ($[3] !== control) {
        t2 = {
            control,
            name: "handover"
        };
        $[3] = control;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t2);
    let t3;
    if ($[5] !== control) {
        t3 = {
            control,
            name: "developer"
        };
        $[5] = control;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const developer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t3);
    let t4;
    if ($[7] !== control) {
        t4 = {
            control,
            name: "price"
        };
        $[7] = control;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t4);
    let t5;
    if ($[9] !== control) {
        t5 = {
            control,
            name: "rate"
        };
        $[9] = control;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const rate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t5);
    let t6;
    if ($[11] !== isAr || $[12] !== t) {
        t6 = t("ads.createStepTwo.badgeHandover") || (isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645" : "Handover Date");
        $[11] = isAr;
        $[12] = t;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== handover || $[15] !== t6) {
        t7 = {
            name: "handover",
            label: t6,
            value: handover
        };
        $[14] = handover;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== isAr || $[18] !== t) {
        t8 = t("ads.createStepTwo.badgeDeveloper") || (isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631" : "Developer");
        $[17] = isAr;
        $[18] = t;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== developer || $[21] !== t8) {
        t9 = {
            name: "developer",
            label: t8,
            value: developer
        };
        $[20] = developer;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== isAr || $[24] !== t) {
        t10 = t("ads.createStepTwo.badgePrice") || (isAr ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0639\u0631" : "Price Range");
        $[23] = isAr;
        $[24] = t;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== price || $[27] !== t10) {
        t11 = {
            name: "price",
            label: t10,
            value: price
        };
        $[26] = price;
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== isAr || $[30] !== t) {
        t12 = t("ads.createStepTwo.badgeRating") || (isAr ? "\u0627\u0644\u062A\u0642\u064A\u064A\u0645" : "Rating");
        $[29] = isAr;
        $[30] = t;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== rate || $[33] !== t12) {
        t13 = {
            name: "rate",
            label: t12,
            value: rate
        };
        $[32] = rate;
        $[33] = t12;
        $[34] = t13;
    } else {
        t13 = $[34];
    }
    let t14;
    if ($[35] !== t11 || $[36] !== t13 || $[37] !== t7 || $[38] !== t9) {
        t14 = [
            t7,
            t9,
            t11,
            t13
        ];
        $[35] = t11;
        $[36] = t13;
        $[37] = t7;
        $[38] = t9;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    const badges = t14;
    let t15;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== isAr || $[42] !== t) {
        t16 = t("ads.createStepTwo.adCopyAndFeatures") || (isAr ? "\u0646\u0635 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0648\u0627\u0644\u0645\u064A\u0632\u0627\u062A" : "Ad Copy & Features");
        $[41] = isAr;
        $[42] = t;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                    lineNumber: 211,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[44] = t16;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] !== isAr || $[47] !== t) {
        t18 = t("ads.createStepTwo.shortDescription") || (isAr ? "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062E\u062A\u0635\u0631" : "Short Description");
        $[46] = isAr;
        $[47] = t;
        $[48] = t18;
    } else {
        t18 = $[48];
    }
    let t19;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    if ($[50] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t18,
                " ",
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[50] = t18;
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    const t21 = errors.description ? "border border-red-500 rounded-lg" : "";
    const t22 = description || "";
    let t23;
    if ($[52] !== clearErrors || $[53] !== setValue) {
        t23 = ({
            "ContentFeaturesSection[<RichTextEditor>.onChange]": (content)=>{
                setValue("description", content, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                });
                if (content.replace(/<[^>]*>/g, "").trim()) {
                    clearErrors("description");
                }
            }
        })["ContentFeaturesSection[<RichTextEditor>.onChange]"];
        $[52] = clearErrors;
        $[53] = setValue;
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] !== t22 || $[56] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RichTextEditor"], {
            content: t22,
            onChange: t23
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[55] = t22;
        $[56] = t23;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== t21 || $[59] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[58] = t21;
        $[59] = t24;
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    let t26;
    if ($[61] !== errors.description || $[62] !== isAr || $[63] !== t) {
        t26 = errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                    lineNumber: 283,
                    columnNumber: 112
                }, this),
                String(errors.description.message || t("ads.createStepTwo.descriptionRequired") || (isAr ? "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062E\u062A\u0635\u0631 \u0645\u0637\u0644\u0648\u0628" : "Short description is required"))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 283,
            columnNumber: 33
        }, this);
        $[61] = errors.description;
        $[62] = isAr;
        $[63] = t;
        $[64] = t26;
    } else {
        t26 = $[64];
    }
    let t27;
    if ($[65] !== t20 || $[66] !== t25 || $[67] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[65] = t20;
        $[66] = t25;
        $[67] = t26;
        $[68] = t27;
    } else {
        t27 = $[68];
    }
    let t28;
    if ($[69] !== isAr || $[70] !== t) {
        t28 = t("ads.createStepTwo.displayBadges") || (isAr ? "\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Display Badges on Ad");
        $[69] = isAr;
        $[70] = t;
        $[71] = t28;
    } else {
        t28 = $[71];
    }
    let t29;
    if ($[72] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[72] = t28;
        $[73] = t29;
    } else {
        t29 = $[73];
    }
    let t30;
    if ($[74] !== badges || $[75] !== setValue) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
            children: badges.map({
                "ContentFeaturesSection[badges.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center justify-between p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-700 dark:text-neutral-300",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                                lineNumber: 321,
                                columnNumber: 305
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                checked: Boolean(item.value),
                                onCheckedChange: {
                                    "ContentFeaturesSection[badges.map() > <Switch>.onCheckedChange]": (checked)=>setValue(item.name, checked, {
                                            shouldDirty: true
                                        })
                                }["ContentFeaturesSection[badges.map() > <Switch>.onCheckedChange]"]
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                                lineNumber: 321,
                                columnNumber: 389
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                        lineNumber: 321,
                        columnNumber: 57
                    }, this)
            }["ContentFeaturesSection[badges.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[74] = badges;
        $[75] = setValue;
        $[76] = t30;
    } else {
        t30 = $[76];
    }
    let t31;
    if ($[77] !== t29 || $[78] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[77] = t29;
        $[78] = t30;
        $[79] = t31;
    } else {
        t31 = $[79];
    }
    let t32;
    if ($[80] !== isAr || $[81] !== t) {
        t32 = t("ads.createStepTwo.ctaButtonLabel") || (isAr ? "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (CTA)" : "Call-to-Action Button Label");
        $[80] = isAr;
        $[81] = t;
        $[82] = t32;
    } else {
        t32 = $[82];
    }
    let t33;
    if ($[83] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[83] = t32;
        $[84] = t33;
    } else {
        t33 = $[84];
    }
    let t34;
    if ($[85] !== isAr || $[86] !== t) {
        t34 = t("ads.createStepTwo.ctaButtonPlaceholder") || (isAr ? "\u0645\u062B\u0627\u0644: \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F\u060C \u0627\u062D\u062C\u0632 \u0648\u062D\u062F\u062A\u0643" : "e.g., Learn More, Book Unit");
        $[85] = isAr;
        $[86] = t;
        $[87] = t34;
    } else {
        t34 = $[87];
    }
    let t35;
    if ($[88] !== register) {
        t35 = register("ctaButtonText");
        $[88] = register;
        $[89] = t35;
    } else {
        t35 = $[89];
    }
    let t36;
    if ($[90] !== t34 || $[91] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t34,
            ...t35,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[90] = t34;
        $[91] = t35;
        $[92] = t36;
    } else {
        t36 = $[92];
    }
    let t37;
    if ($[93] !== t33 || $[94] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[93] = t33;
        $[94] = t36;
        $[95] = t37;
    } else {
        t37 = $[95];
    }
    let t38;
    if ($[96] !== isAr || $[97] !== t) {
        t38 = t("ads.createStepTwo.ctaTargetUrl") || (isAr ? "\u0631\u0627\u0628\u0637 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (URL)" : "Call-to-Action Target URL");
        $[96] = isAr;
        $[97] = t;
        $[98] = t38;
    } else {
        t38 = $[98];
    }
    let t39;
    if ($[99] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[99] = t38;
        $[100] = t39;
    } else {
        t39 = $[100];
    }
    let t40;
    if ($[101] !== t) {
        t40 = t("ads.createStepTwo.ctaUrlPlaceholder") || "https://example.com";
        $[101] = t;
        $[102] = t40;
    } else {
        t40 = $[102];
    }
    let t41;
    if ($[103] !== register) {
        t41 = register("ctaUrl");
        $[103] = register;
        $[104] = t41;
    } else {
        t41 = $[104];
    }
    const t42 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.ctaUrl ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t43;
    if ($[105] !== t40 || $[106] !== t41 || $[107] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t40,
            ...t41,
            className: t42
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[105] = t40;
        $[106] = t41;
        $[107] = t42;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    let t44;
    if ($[109] !== errors.ctaUrl || $[110] !== isAr || $[111] !== t) {
        t44 = errors.ctaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: String(errors.ctaUrl.message || t("ads.createStepTwo.ctaUrlInvalid") || (isAr ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0631\u0627\u0628\u0637 \u0635\u0627\u0644\u062D" : "Please enter a valid URL"))
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 440,
            columnNumber: 28
        }, this);
        $[109] = errors.ctaUrl;
        $[110] = isAr;
        $[111] = t;
        $[112] = t44;
    } else {
        t44 = $[112];
    }
    let t45;
    if ($[113] !== t39 || $[114] !== t43 || $[115] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[113] = t39;
        $[114] = t43;
        $[115] = t44;
        $[116] = t45;
    } else {
        t45 = $[116];
    }
    let t46;
    if ($[117] !== t37 || $[118] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t37,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[117] = t37;
        $[118] = t45;
        $[119] = t46;
    } else {
        t46 = $[119];
    }
    let t47;
    if ($[120] !== t17 || $[121] !== t27 || $[122] !== t31 || $[123] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t17,
                t27,
                t31,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[120] = t17;
        $[121] = t27;
        $[122] = t31;
        $[123] = t46;
        $[124] = t47;
    } else {
        t47 = $[124];
    }
    return t47;
}
_s(ContentFeaturesSection, "WKzsviI44qZyeMtJFyx5JnId51E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = ContentFeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "ContentFeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateAdStepTwo",
    ()=>CreateAdStepTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$DeveloperLinkSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$CreativeAssetSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$ContentFeaturesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx [app-client] (ecmascript)");
;
;
;
;
;
function CreateAdStepTwo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "7d1acda9ade14b33a93edc031148ffc0517cd6b82b58cfaac5e9733886c2fc31") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d1acda9ade14b33a93edc031148ffc0517cd6b82b58cfaac5e9733886c2fc31";
    }
    const { developerSearch, setDeveloperSearch, developersLoading, developers, handleDeveloperChange, projectSearch, setProjectSearch, projectsLoading, projects, propertySearch, setPropertySearch, propertiesLoading, properties, adImagePreview, handleImageUpload } = t0;
    let t1;
    if ($[1] !== developerSearch || $[2] !== developers || $[3] !== developersLoading || $[4] !== handleDeveloperChange || $[5] !== projectSearch || $[6] !== projects || $[7] !== projectsLoading || $[8] !== properties || $[9] !== propertiesLoading || $[10] !== propertySearch || $[11] !== setDeveloperSearch || $[12] !== setProjectSearch || $[13] !== setPropertySearch) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$DeveloperLinkSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperLinkSection"], {
            developerSearch: developerSearch,
            setDeveloperSearch: setDeveloperSearch,
            developersLoading: developersLoading,
            developers: developers,
            handleDeveloperChange: handleDeveloperChange,
            projectSearch: projectSearch,
            setProjectSearch: setProjectSearch,
            projectsLoading: projectsLoading,
            projects: projects,
            propertySearch: propertySearch,
            setPropertySearch: setPropertySearch,
            propertiesLoading: propertiesLoading,
            properties: properties
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = developerSearch;
        $[2] = developers;
        $[3] = developersLoading;
        $[4] = handleDeveloperChange;
        $[5] = projectSearch;
        $[6] = projects;
        $[7] = projectsLoading;
        $[8] = properties;
        $[9] = propertiesLoading;
        $[10] = propertySearch;
        $[11] = setDeveloperSearch;
        $[12] = setProjectSearch;
        $[13] = setPropertySearch;
        $[14] = t1;
    } else {
        t1 = $[14];
    }
    let t2;
    if ($[15] !== adImagePreview || $[16] !== handleImageUpload) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$CreativeAssetSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreativeAssetSection"], {
            adImagePreview: adImagePreview,
            handleImageUpload: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[15] = adImagePreview;
        $[16] = handleImageUpload;
        $[17] = t2;
    } else {
        t2 = $[17];
    }
    let t3;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$step$2d$two$2f$ContentFeaturesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentFeaturesSection"], {}, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[18] = t3;
    } else {
        t3 = $[18];
    }
    let t4;
    if ($[19] !== t1 || $[20] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[19] = t1;
        $[20] = t2;
        $[21] = t4;
    } else {
        t4 = $[21];
    }
    return t4;
}
_c = CreateAdStepTwo;
var _c;
__turbopack_context__.k.register(_c, "CreateAdStepTwo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/hooks/use-ad-date-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdDateValidation",
    ()=>useAdDateValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAdDateValidation(startDate, endDate, isOpen) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "66018a779209a196e4bab1840c96200804bf67ca53c84ca8ad7f598fe15edfb1") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66018a779209a196e4bab1840c96200804bf67ca53c84ca8ad7f598fe15edfb1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [dateErrors, setDateErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const isValidDateFormat = _useAdDateValidationIsValidDateFormat;
    const convertToUTCDateTime = _useAdDateValidationConvertToUTCDateTime;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useAdDateValidation[validateDateTimeRange]": (start, end)=>{
                if (start && !isValidDateFormat(start)) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors);
                    return false;
                }
                if (end && !isValidDateFormat(end)) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors2);
                    return false;
                }
                if (!start) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors3);
                    return false;
                }
                setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors4);
                if (!end) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors5);
                    return true;
                }
                const startDateTime = new Date(convertToUTCDateTime(start, false));
                const endDateTime = new Date(convertToUTCDateTime(end, true));
                if (startDateTime >= endDateTime) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors6);
                    return false;
                }
                setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors7);
                return true;
            }
        })["useAdDateValidation[validateDateTimeRange]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const validateDateTimeRange = t1;
    let t2;
    let t3;
    if ($[3] !== endDate || $[4] !== startDate) {
        t2 = ({
            "useAdDateValidation[useEffect()]": ()=>{
                if (startDate || endDate) {
                    validateDateTimeRange(startDate, endDate);
                }
            }
        })["useAdDateValidation[useEffect()]"];
        t3 = [
            startDate,
            endDate,
            validateDateTimeRange
        ];
        $[3] = endDate;
        $[4] = startDate;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[7] !== isOpen) {
        t4 = ({
            "useAdDateValidation[useEffect()]": ()=>{
                if (!isOpen) {
                    setDateErrors({});
                }
            }
        })["useAdDateValidation[useEffect()]"];
        t5 = [
            isOpen
        ];
        $[7] = isOpen;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] !== dateErrors) {
        t6 = {
            dateErrors,
            validateDateTimeRange,
            setDateErrors
        };
        $[10] = dateErrors;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(useAdDateValidation, "dCKLYdrlvIpZOym2xhfeY+Op3IU=");
function _useAdDateValidationValidateDateTimeRangeSetDateErrors7(prev_5) {
    return {
        ...prev_5,
        endDate: undefined,
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors6(prev_4) {
    return {
        ...prev_4,
        endDate: "End DateTime must be after start DateTime",
        general: "Please select an end date that is after the start date"
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors5(prev_3) {
    return {
        ...prev_3,
        endDate: undefined,
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors4(prev_2) {
    return {
        ...prev_2,
        startDate: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors3(prev_1) {
    return {
        ...prev_1,
        startDate: "Start date is required",
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors2(prev_0) {
    return {
        ...prev_0,
        endDate: "Date must be in YYYY-MM-DD format",
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors(prev) {
    return {
        ...prev,
        startDate: "Date must be in YYYY-MM-DD format",
        general: undefined
    };
}
function _useAdDateValidationConvertToUTCDateTime(dateStr_0, t0) {
    const isEndDate = t0 === undefined ? false : t0;
    if (!dateStr_0) {
        return "";
    }
    const date = new Date(dateStr_0);
    if (isEndDate) {
        date.setUTCHours(23, 59, 59, 999);
    } else {
        date.setUTCHours(0, 0, 0, 0);
    }
    return date.toISOString();
}
function _useAdDateValidationIsValidDateFormat(dateStr) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateStr);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/hooks/use-create-ad-form.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateAdForm",
    ()=>useCreateAdForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useCreateAdForm({ isOpen, onClose, onSuccess, createAd, isCreating, session, validateDateTimeRange }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [adImage, setAdImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adImagePreview, setAdImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const getCountryId = (countryName)=>{
        if (!countryName) return "";
        const countryMap = {
            Egypt: "1",
            UAE: "2",
            Oman: "3"
        };
        return countryMap[countryName] || "";
    };
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: "",
            type: "banner",
            platform: "web",
            location: [],
            country: "",
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
            developerId: "",
            image_url: ""
        },
        mode: "onTouched"
    });
    const { register, handleSubmit, setValue, clearErrors, setError, watch, reset } = methods;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdForm.useEffect": ()=>{
            if (!isOpen) {
                setStep(1);
                setAdImage(null);
                setAdImagePreview("");
                reset();
            }
        }
    }["useCreateAdForm.useEffect"], [
        isOpen,
        reset
    ]);
    const watchCountry = watch("country");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdForm.useEffect": ()=>{
            setValue("developerId", "", {
                shouldDirty: true
            });
            setValue("projectId", "", {
                shouldDirty: true
            });
            clearErrors("developerId");
            clearErrors("projectId");
        }
    }["useCreateAdForm.useEffect"], [
        watchCountry,
        setValue,
        clearErrors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCreateAdForm.useEffect": ()=>{
            setValue("projectId", "", {
                shouldDirty: true
            });
            clearErrors("projectId");
        }
    }["useCreateAdForm.useEffect"], [
        watch("linkTo"),
        setValue,
        clearErrors
    ]);
    const handleDeveloperChange = (val)=>{
        setValue("developerId", val, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
        setValue("projectId", "", {
            shouldDirty: true
        });
        clearErrors("developerId");
        clearErrors("projectId");
    };
    const selectedLocations = watch("location") || [];
    const toggleLocation = (location)=>{
        const current = Array.isArray(selectedLocations) ? selectedLocations : [];
        const updated = current.includes(location) ? current.filter((l)=>l !== location) : [
            ...current,
            location
        ];
        setValue("location", updated, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
        if (updated.length > 0) {
            clearErrors("location");
        }
    };
    const handleNext = async ()=>{
        let hasError = false;
        const titleVal = watch("title");
        if (!titleVal || !titleVal.trim()) {
            setError("title", {
                type: "required",
                message: "Ad Title is required"
            });
            hasError = true;
        } else if (titleVal.trim().length < 2) {
            setError("title", {
                type: "minLength",
                message: "Title must be at least 2 characters"
            });
            hasError = true;
        } else {
            clearErrors("title");
        }
        const locs = watch("location") || [];
        const typeVal = watch("type");
        if (!locs || locs.length === 0) {
            setError("location", {
                type: "required",
                message: "Please select at least one placement location"
            });
            hasError = true;
        } else {
            clearErrors("location");
        }
        const countryVal = watch("country");
        if (!countryVal) {
            setError("country", {
                type: "required",
                message: "Please select a country"
            });
            hasError = true;
        } else {
            clearErrors("country");
        }
        const startVal = watch("startDate");
        const endVal = watch("endDate");
        if (!startVal) {
            setError("startDate", {
                type: "required",
                message: "Start date is required"
            });
            hasError = true;
        } else {
            clearErrors("startDate");
        }
        if (!validateDateTimeRange(startVal, endVal || "")) {
            hasError = true;
        }
        const priorityVal = Number(watch("priority"));
        if (isNaN(priorityVal) || priorityVal < 1 || priorityVal > 10) {
            setError("priority", {
                type: "range",
                message: "Priority must be between 1 and 10"
            });
            hasError = true;
        } else {
            clearErrors("priority");
        }
        if (hasError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all required fields on Step 1", {
                id: "create-ad-toast"
            });
            return;
        }
        setStep(2);
    };
    const handleBack = ()=>{
        setStep(1);
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Image file size must be less than 2MB", {
                    id: "create-ad-toast"
                });
                return;
            }
            setAdImage(file);
            clearErrors("image");
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setAdImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const onSubmit = async (data)=>{
        try {
            if (!session?.user?.accessToken) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Authentication required", {
                    id: "create-ad-toast"
                });
                return;
            }
            let hasError_0 = false;
            // Developer is required only when linking to a project or property
            if ((data.linkTo === "PROJECTS" || data.linkTo === "PROPERTIES") && !data.developerId) {
                setError("developerId", {
                    type: "required",
                    message: "Please select a developer first"
                });
                hasError_0 = true;
            } else {
                clearErrors("developerId");
            }
            if (data.linkTo === "PROJECTS" && !data.projectId) {
                setError("projectId", {
                    type: "required",
                    message: "Please select a project"
                });
                hasError_0 = true;
            } else if (data.linkTo === "PROPERTIES" && !data.projectId) {
                setError("projectId", {
                    type: "required",
                    message: "Please select a property"
                });
                hasError_0 = true;
            } else {
                clearErrors("projectId");
            }
            if (!adImage && !adImagePreview) {
                setError("image", {
                    type: "required",
                    message: "Ad image is required"
                });
                hasError_0 = true;
            } else {
                clearErrors("image");
            }
            const descText = (data.description || "").replace(/<[^>]*>/g, '').trim();
            if (!descText) {
                setError("description", {
                    type: "required",
                    message: "Short description is required"
                });
                hasError_0 = true;
            } else {
                clearErrors("description");
            }
            if (data.linkTo === "NONE" && data.ctaButtonText && !data.ctaUrl) {
                setError("ctaUrl", {
                    type: "required",
                    message: "Call-to-Action Link is required when CTA text is provided"
                });
                hasError_0 = true;
            } else if (data.ctaUrl) {
                try {
                    new URL(data.ctaUrl);
                    clearErrors("ctaUrl");
                } catch  {
                    setError("ctaUrl", {
                        type: "pattern",
                        message: "Please enter a valid URL (e.g. https://example.com)"
                    });
                    hasError_0 = true;
                }
            }
            if (hasError_0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all required fields on Step 2", {
                    id: "create-ad-toast"
                });
                return;
            }
            const locationsList = Array.isArray(data.location) ? data.location : [];
            const normalizeLocation = (loc)=>{
                const l_0 = (loc || "").toLowerCase().trim().replace(/\s+/g, "_");
                if (l_0 === "home") return "home";
                if (l_0 === "home_top" || l_0 === "web_home") return "home_top";
                if (l_0 === "home_bottom") return "home_bottom";
                if (l_0 === "featured_cards") return "featured_cards";
                if (l_0 === "project_listing" || l_0 === "explore_projects" || l_0 === "projects") return "project_listing";
                if (l_0 === "unit_listing" || l_0 === "units" || l_0 === "property_listing" || l_0 === "explore_properties" || l_0 === "properties") return "unit_listing";
                if (l_0 === "developer_listing" || l_0 === "explore_developers" || l_0 === "developers") return "developer_listing";
                if (l_0 === "expert_listing" || l_0 === "explore_experts" || l_0 === "experts") return "expert_listing";
                if (l_0 === "podcast_listing" || l_0 === "podcast" || l_0 === "podcasts") return "podcast_listing";
                return l_0;
            };
            const locKey = normalizeLocation(locationsList[0] || "home");
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
            formData.append("placement[location]", locKey);
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
            } else if (data.linkTo !== "NONE") {
                formData.append("entity_type", data.linkTo);
                if (data.projectId) {
                    const id = parseInt(data.projectId);
                    if (!isNaN(id)) formData.append("entity_id", id.toString());
                }
                if (externalUrl) {
                    formData.append("cta_url", externalUrl);
                }
            } else if (externalUrl) {
                formData.append("cta_url", externalUrl);
            }
            if (data.developerId) {
                const devId = parseInt(data.developerId);
                if (!isNaN(devId)) {
                    formData.append("campaign[developer_id]", devId.toString());
                }
            }
            formData.append("title", data.title.trim());
            formData.append("subtitle", data.description || "");
            if (data.ctaButtonText) {
                formData.append("cta_label", data.ctaButtonText);
            }
            formData.append("weight", data.priority.toString());
            if (adImage) {
                formData.append("image_url", adImage);
            }
            await createAd(formData);
            await queryClient.invalidateQueries({
                queryKey: [
                    "ads"
                ],
                refetchType: "all"
            });
            await queryClient.invalidateQueries({
                queryKey: [
                    "adsTotals"
                ],
                refetchType: "all"
            });
            await queryClient.refetchQueries({
                queryKey: [
                    "ads"
                ]
            });
            await queryClient.refetchQueries({
                queryKey: [
                    "adsTotals"
                ]
            });
            onSuccess?.();
            onClose();
        } catch (error) {
            console.error("Error creating ad:", error);
        }
    };
    return {
        methods,
        step,
        adImage,
        adImagePreview,
        getCountryId,
        handleDeveloperChange,
        selectedLocations,
        toggleLocation,
        handleNext,
        handleBack,
        handleImageUpload,
        onSubmit: handleSubmit(onSubmit)
    };
}
_s(useCreateAdForm, "iXObLUIuxugTQTwDUrYcUS+ZbZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/create-ad-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateAdModal",
    ()=>CreateAdModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$ad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-create-ad.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$CreateAdStepOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$CreateAdStepTwo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ads/create-ad-components/CreateAdStepTwo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$ad$2d$date$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/hooks/use-ad-date-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$create$2d$ad$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/hooks/use-create-ad-form.ts [app-client] (ecmascript)");
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
function CreateAdModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(148);
    if ($[0] !== "f6ab2c7304c7431f7f92000bbf4431fd2b3e9b16e16a1a446b7dbedf19e4858a") {
        for(let $i = 0; $i < 148; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f6ab2c7304c7431f7f92000bbf4431fd2b3e9b16e16a1a446b7dbedf19e4858a";
    }
    const { isOpen, onClose, onSuccess } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { createAd, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [developerSearch, setDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [developerPerPage, setDeveloperPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [debouncedDeveloperSearch, setDebouncedDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSearch, setProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [propertySearch, setPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedProjectSearch, setDebouncedProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedPropertySearch, setDebouncedPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const developerScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== developerSearch) {
        t1 = ({
            "CreateAdModal[useEffect()]": ()=>{
                const timer = setTimeout({
                    "CreateAdModal[useEffect() > setTimeout()]": ()=>setDebouncedDeveloperSearch(developerSearch)
                }["CreateAdModal[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer);
            }
        })["CreateAdModal[useEffect()]"];
        t2 = [
            developerSearch
        ];
        $[1] = developerSearch;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== projectSearch) {
        t3 = ({
            "CreateAdModal[useEffect()]": ()=>{
                const timer_0 = setTimeout({
                    "CreateAdModal[useEffect() > setTimeout()]": ()=>setDebouncedProjectSearch(projectSearch)
                }["CreateAdModal[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer_0);
            }
        })["CreateAdModal[useEffect()]"];
        t4 = [
            projectSearch
        ];
        $[4] = projectSearch;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== propertySearch) {
        t5 = ({
            "CreateAdModal[useEffect()]": ()=>{
                const timer_1 = setTimeout({
                    "CreateAdModal[useEffect() > setTimeout()]": ()=>setDebouncedPropertySearch(propertySearch)
                }["CreateAdModal[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(timer_1);
            }
        })["CreateAdModal[useEffect()]"];
        t6 = [
            propertySearch
        ];
        $[7] = propertySearch;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const [tempStart, setTempStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tempEnd, setTempEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { dateErrors, validateDateTimeRange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$ad$2d$date$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdDateValidation"])(tempStart, tempEnd, isOpen);
    let t7;
    if ($[10] !== createAd || $[11] !== isCreating || $[12] !== isOpen || $[13] !== onClose || $[14] !== onSuccess || $[15] !== session || $[16] !== validateDateTimeRange) {
        t7 = {
            isOpen,
            onClose,
            onSuccess,
            createAd,
            isCreating,
            session,
            validateDateTimeRange
        };
        $[10] = createAd;
        $[11] = isCreating;
        $[12] = isOpen;
        $[13] = onClose;
        $[14] = onSuccess;
        $[15] = session;
        $[16] = validateDateTimeRange;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const { methods, step, adImagePreview, getCountryId, handleDeveloperChange, handleNext, handleBack, handleImageUpload, onSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$create$2d$ad$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdForm"])(t7);
    const { watch, control } = methods;
    let t8;
    if ($[18] !== control) {
        t8 = {
            control,
            name: "startDate"
        };
        $[18] = control;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const watchStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t8);
    let t9;
    if ($[20] !== control) {
        t9 = {
            control,
            name: "endDate"
        };
        $[20] = control;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const watchEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t9);
    let t10;
    if ($[22] !== control) {
        t10 = {
            control,
            name: "developerId"
        };
        $[22] = control;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const watchDeveloperId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t10);
    let t11;
    if ($[24] !== control) {
        t11 = {
            control,
            name: "country"
        };
        $[24] = control;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    const watchCountry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t11);
    let t12;
    let t13;
    if ($[26] !== watchEndDate || $[27] !== watchStartDate) {
        t12 = ({
            "CreateAdModal[useEffect()]": ()=>{
                setTempStart(watchStartDate || "");
                setTempEnd(watchEndDate || "");
            }
        })["CreateAdModal[useEffect()]"];
        t13 = [
            watchStartDate,
            watchEndDate
        ];
        $[26] = watchEndDate;
        $[27] = watchStartDate;
        $[28] = t12;
        $[29] = t13;
    } else {
        t12 = $[28];
        t13 = $[29];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    const t14 = watchCountry || "";
    let t15;
    if ($[30] !== getCountryId || $[31] !== t14) {
        t15 = getCountryId(t14);
        $[30] = getCountryId;
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    const { developers, projects, properties, loading: developersLoading, projectsLoading, propertiesLoading, developerHasMore, loadDevelopers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$ad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdData"])(isOpen, debouncedDeveloperSearch, t15, debouncedProjectSearch, debouncedPropertySearch, watchDeveloperId);
    let t16;
    let t17;
    if ($[33] !== developerHasMore || $[34] !== developerPerPage || $[35] !== developersLoading || $[36] !== loadDevelopers) {
        t16 = ({
            "CreateAdModal[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    if (entries[0].isIntersecting && developerHasMore && !developersLoading) {
                        const newPerPage = developerPerPage + 15;
                        setDeveloperPerPage(newPerPage);
                        loadDevelopers(1, newPerPage, "", true);
                    }
                }, {
                    threshold: 0.1
                });
                if (developerScrollRef.current) {
                    observer.observe(developerScrollRef.current);
                }
                return ()=>observer.disconnect();
            }
        })["CreateAdModal[useEffect()]"];
        t17 = [
            developerHasMore,
            developersLoading,
            developerPerPage,
            loadDevelopers
        ];
        $[33] = developerHasMore;
        $[34] = developerPerPage;
        $[35] = developersLoading;
        $[36] = loadDevelopers;
        $[37] = t16;
        $[38] = t17;
    } else {
        t16 = $[37];
        t17 = $[38];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t16, t17);
    let t18;
    if ($[39] !== watch) {
        t18 = watch("linkTo");
        $[39] = watch;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    const linkToValue = t18;
    let t19;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "CreateAdModal[useEffect()]": ()=>{
                setProjectSearch("");
                setPropertySearch("");
                setDebouncedProjectSearch("");
                setDebouncedPropertySearch("");
            }
        })["CreateAdModal[useEffect()]"];
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== linkToValue) {
        t20 = [
            linkToValue
        ];
        $[42] = linkToValue;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t19, t20);
    let t21;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                lineNumber: 311,
                columnNumber: 191
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== isAr || $[46] !== t) {
        t22 = t("ads.createModal.title") || (isAr ? "\u0625\u0646\u0634\u0627\u0621 \u0625\u0639\u0644\u0627\u0646 \u062C\u062F\u064A\u062F" : "Create New Advertisement");
        $[45] = isAr;
        $[46] = t;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[48] = t22;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== isAr || $[51] !== step || $[52] !== t) {
        t24 = step === 1 ? t("ads.createModal.step1Subtitle") || (isAr ? "\u0627\u0644\u062E\u0637\u0648\u0629 1 \u0645\u0646 2: \u0627\u0644\u0645\u0648\u0636\u0639\u060C \u0627\u0644\u0627\u0633\u062A\u0647\u062F\u0627\u0641 \u0648\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A" : "Step 1 of 2: Placement, targeting & schedule") : t("ads.createModal.step2Subtitle") || (isAr ? "\u0627\u0644\u062E\u0637\u0648\u0629 2 \u0645\u0646 2: \u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u060C \u0631\u0627\u0628\u0637 \u0627\u0644\u0643\u064A\u0627\u0646 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649" : "Step 2 of 2: Creative asset, entity link & content");
        $[50] = isAr;
        $[51] = step;
        $[52] = t;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    let t25;
    if ($[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-neutral-500 dark:text-neutral-400 font-normal",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 345,
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
            className: "flex items-center gap-2.5",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t23,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                    lineNumber: 353,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[56] = t23;
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    const t27 = `h-2 w-7 rounded-full transition-all duration-300 ${step === 1 ? "bg-teal-600" : "bg-teal-200 dark:bg-teal-900"}`;
    let t28;
    if ($[59] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[59] = t27;
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    const t29 = `h-2 w-7 rounded-full transition-all duration-300 ${step === 2 ? "bg-teal-600" : "bg-gray-200 dark:bg-neutral-700"}`;
    let t30;
    if ($[61] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t29
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[61] = t29;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t28 || $[64] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[63] = t28;
        $[64] = t30;
        $[65] = t31;
    } else {
        t31 = $[65];
    }
    const t32 = isAr ? `الخطوة ${step} من 2` : `Step ${step} of 2`;
    let t33;
    if ($[66] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500 dark:text-gray-400 font-medium",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[66] = t32;
        $[67] = t33;
    } else {
        t33 = $[67];
    }
    let t34;
    if ($[68] !== t31 || $[69] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[68] = t31;
        $[69] = t33;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] !== handleBack || $[72] !== isAr || $[73] !== onClose || $[74] !== step || $[75] !== t) {
        t35 = step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: handleBack,
            className: "gap-1.5 h-9 text-xs sm:text-sm font-medium border-gray-200 dark:border-neutral-700",
            children: t("ads.createModal.back") || (isAr ? "\u0627\u0644\u0633\u0627\u0628\u0642" : "Back")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 407,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            className: "h-9 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 border-gray-200 dark:border-neutral-700",
            children: t("ads.createModal.cancel") || (isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 407,
            columnNumber: 265
        }, this);
        $[71] = handleBack;
        $[72] = isAr;
        $[73] = onClose;
        $[74] = step;
        $[75] = t;
        $[76] = t35;
    } else {
        t35 = $[76];
    }
    let t36;
    if ($[77] !== handleNext || $[78] !== isAr || $[79] !== isCreating || $[80] !== onSubmit || $[81] !== step || $[82] !== t) {
        t36 = step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5 h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20",
            onClick: handleNext,
            children: t("ads.createModal.continueToCreative") || (isAr ? "\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A" : "Continue to Creative")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 419,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20",
            onClick: onSubmit,
            disabled: isCreating,
            children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                        lineNumber: 419,
                        columnNumber: 632
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t("ads.createModal.publishingAd") || (isAr ? "\u062C\u0627\u0631\u064A \u0646\u0634\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646..." : "Publishing Ad...")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                        lineNumber: 419,
                        columnNumber: 741
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t("ads.createModal.publishAd") || (isAr ? "\u0646\u0634\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Publish Advertisement")
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                lineNumber: 419,
                columnNumber: 920
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 419,
            columnNumber: 437
        }, this);
        $[77] = handleNext;
        $[78] = isAr;
        $[79] = isCreating;
        $[80] = onSubmit;
        $[81] = step;
        $[82] = t;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    let t37;
    if ($[84] !== t35 || $[85] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[84] = t35;
        $[85] = t36;
        $[86] = t37;
    } else {
        t37 = $[86];
    }
    let t38;
    if ($[87] !== t34 || $[88] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between w-full pt-2",
            children: [
                t34,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[87] = t34;
        $[88] = t37;
        $[89] = t38;
    } else {
        t38 = $[89];
    }
    let t39;
    if ($[90] !== handleBack || $[91] !== step) {
        t39 = ({
            "CreateAdModal[<button>.onClick]": ()=>{
                if (step === 2) {
                    handleBack();
                }
            }
        })["CreateAdModal[<button>.onClick]"];
        $[90] = handleBack;
        $[91] = step;
        $[92] = t39;
    } else {
        t39 = $[92];
    }
    const t40 = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${step === 1 ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t41;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold",
            children: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[93] = t41;
    } else {
        t41 = $[93];
    }
    let t42;
    if ($[94] !== isAr || $[95] !== t) {
        t42 = t("ads.createModal.tabPlacement") || (isAr ? "\u0627\u0644\u0645\u0648\u0636\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u0647\u062F\u0627\u0641" : "Placement & Targeting");
        $[94] = isAr;
        $[95] = t;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    let t43;
    if ($[97] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[97] = t42;
        $[98] = t43;
    } else {
        t43 = $[98];
    }
    let t44;
    if ($[99] !== t39 || $[100] !== t40 || $[101] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t39,
            className: t40,
            children: [
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[99] = t39;
        $[100] = t40;
        $[101] = t43;
        $[102] = t44;
    } else {
        t44 = $[102];
    }
    let t45;
    if ($[103] !== handleNext || $[104] !== step) {
        t45 = ({
            "CreateAdModal[<button>.onClick]": ()=>{
                if (step === 1) {
                    handleNext();
                }
            }
        })["CreateAdModal[<button>.onClick]"];
        $[103] = handleNext;
        $[104] = step;
        $[105] = t45;
    } else {
        t45 = $[105];
    }
    const t46 = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${step === 2 ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t47;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold",
            children: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[106] = t47;
    } else {
        t47 = $[106];
    }
    let t48;
    if ($[107] !== isAr || $[108] !== t) {
        t48 = t("ads.createModal.tabCreative") || (isAr ? "\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0648\u0627\u0644\u0635\u0648\u0631" : "Creative & Content");
        $[107] = isAr;
        $[108] = t;
        $[109] = t48;
    } else {
        t48 = $[109];
    }
    let t49;
    if ($[110] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[110] = t48;
        $[111] = t49;
    } else {
        t49 = $[111];
    }
    let t50;
    if ($[112] !== t45 || $[113] !== t46 || $[114] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t45,
            className: t46,
            children: [
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[112] = t45;
        $[113] = t46;
        $[114] = t49;
        $[115] = t50;
    } else {
        t50 = $[115];
    }
    let t51;
    if ($[116] !== t44 || $[117] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 p-1.5 bg-gray-100/70 dark:bg-neutral-800/60 rounded-xl border border-gray-200/60 dark:border-neutral-700/60 mb-5",
            children: [
                t44,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[116] = t44;
        $[117] = t50;
        $[118] = t51;
    } else {
        t51 = $[118];
    }
    let t52;
    if ($[119] !== adImagePreview || $[120] !== dateErrors || $[121] !== developerHasMore || $[122] !== developerSearch || $[123] !== developers || $[124] !== developersLoading || $[125] !== handleDeveloperChange || $[126] !== handleImageUpload || $[127] !== projectSearch || $[128] !== projects || $[129] !== projectsLoading || $[130] !== properties || $[131] !== propertiesLoading || $[132] !== propertySearch || $[133] !== step || $[134] !== validateDateTimeRange) {
        t52 = step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$CreateAdStepOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAdStepOne"], {
            dateErrors: dateErrors,
            validateDateTimeRange: validateDateTimeRange
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 559,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$CreateAdStepTwo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAdStepTwo"], {
            developerSearch: developerSearch,
            setDeveloperSearch: setDeveloperSearch,
            developersLoading: developersLoading,
            developers: developers,
            developerHasMore: developerHasMore,
            developerScrollRef: developerScrollRef,
            handleDeveloperChange: handleDeveloperChange,
            projectSearch: projectSearch,
            setProjectSearch: setProjectSearch,
            projectsLoading: projectsLoading,
            projects: projects,
            propertySearch: propertySearch,
            setPropertySearch: setPropertySearch,
            propertiesLoading: propertiesLoading,
            properties: properties,
            adImagePreview: adImagePreview,
            handleImageUpload: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 559,
            columnNumber: 116
        }, this);
        $[119] = adImagePreview;
        $[120] = dateErrors;
        $[121] = developerHasMore;
        $[122] = developerSearch;
        $[123] = developers;
        $[124] = developersLoading;
        $[125] = handleDeveloperChange;
        $[126] = handleImageUpload;
        $[127] = projectSearch;
        $[128] = projects;
        $[129] = projectsLoading;
        $[130] = properties;
        $[131] = propertiesLoading;
        $[132] = propertySearch;
        $[133] = step;
        $[134] = validateDateTimeRange;
        $[135] = t52;
    } else {
        t52 = $[135];
    }
    let t53;
    if ($[136] !== t51 || $[137] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 max-h-[68vh] overflow-y-auto pr-1 sm:pr-2",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[136] = t51;
        $[137] = t52;
        $[138] = t53;
    } else {
        t53 = $[138];
    }
    let t54;
    if ($[139] !== methods || $[140] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
            ...methods,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[139] = methods;
        $[140] = t53;
        $[141] = t54;
    } else {
        t54 = $[141];
    }
    let t55;
    if ($[142] !== isOpen || $[143] !== onClose || $[144] !== t26 || $[145] !== t38 || $[146] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t26,
            size: "2xl",
            showCloseButton: true,
            footer: t38,
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[142] = isOpen;
        $[143] = onClose;
        $[144] = t26;
        $[145] = t38;
        $[146] = t54;
        $[147] = t55;
    } else {
        t55 = $[147];
    }
    return t55;
}
_s(CreateAdModal, "u/qs+67cGjIoS+OvAhiSwoyq2H0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$ad$2d$date$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdDateValidation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$create$2d$ad$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$ad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdData"]
    ];
});
_c = CreateAdModal;
var _c;
__turbopack_context__.k.register(_c, "CreateAdModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/ads/create-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/modals/ads/create-ad-modal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_e442c2d6._.js.map