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
function mapDeveloper(dev, na = "N/A") {
    return {
        id: dev.developer_id,
        name: dev.developer_name || na,
        countries: dev.countries || na,
        cities: dev.cities || na,
        projects: dev.projects_count || 0,
        website: dev.website || na,
        email: dev.email || na,
        contact: dev.phone_number || na,
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
                const { itemsArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackDevelopersResponse"])(data);
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
"[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>FieldError,
    "FormErrorAlert",
    ()=>FormErrorAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function FieldError(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "c6a5ee0aced3d9c250b6b50693df6a425a1a87ec0addb70a089b72fee20c3cbd") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c6a5ee0aced3d9c250b6b50693df6a425a1a87ec0addb70a089b72fee20c3cbd";
    }
    const { id, message, className } = t0;
    if (!message) {
        return null;
    }
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs text-red-500 mt-1 text-start", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== id || $[4] !== message || $[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: id,
            role: "alert",
            "data-field-error": "",
            className: t1,
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form-message.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = id;
        $[4] = message;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_c = FieldError;
function FormErrorAlert(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c6a5ee0aced3d9c250b6b50693df6a425a1a87ec0addb70a089b72fee20c3cbd") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c6a5ee0aced3d9c250b6b50693df6a425a1a87ec0addb70a089b72fee20c3cbd";
    }
    const { message, className } = t0;
    if (!message) {
        return null;
    }
    let t1;
    if ($[1] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700 text-start dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "h-4 w-4 mt-0.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form-message.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== message) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form-message.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[4] = message;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "alert",
            "data-form-error": "",
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/form-message.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c1 = FormErrorAlert;
var _c, _c1;
__turbopack_context__.k.register(_c, "FieldError");
__turbopack_context__.k.register(_c1, "FormErrorAlert");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(412);
    if ($[0] !== "7a8cf823603e61186f37f67d4cf887063ec2a5400aeacc5338dbc21f37d088b9") {
        for(let $i = 0; $i < 412; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a8cf823603e61186f37f67d4cf887063ec2a5400aeacc5338dbc21f37d088b9";
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
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t) {
        t8 = t("ads.createStepOne.campaignOverview");
        $[10] = t;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t8) {
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
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t) {
        t10 = t("ads.createStepOne.adTitle");
        $[14] = t;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t10,
                " ",
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t) {
        t13 = t("ads.createStepOne.adTitleHint");
        $[19] = t;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t12 || $[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t) {
        t16 = t("ads.createStepOne.adTitlePlaceholder");
        $[26] = t;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== register || $[29] !== t) {
        t17 = register("title", {
            required: t("ads.createStepOne.adTitleRequired"),
            minLength: {
                value: 2,
                message: t("ads.createStepOne.adTitleMinLength")
            }
        });
        $[28] = register;
        $[29] = t;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    const t18 = !!errors.title;
    const t19 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.title ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700 focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30"}`;
    let t20;
    if ($[31] !== t16 || $[32] !== t17 || $[33] !== t18 || $[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t16,
            ...t17,
            error: t18,
            className: t19
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t17;
        $[33] = t18;
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    const t21 = errors.title ? String(errors.title.message || (isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required")) : undefined;
    let t22;
    if ($[36] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t21
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[36] = t21;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t15 || $[39] !== t20 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[38] = t15;
        $[39] = t20;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t) {
        t24 = t("ads.createStepOne.initialStatus");
        $[42] = t;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t24,
                " ",
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[45] = t24;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] !== setValue) {
        t27 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val)=>setValue("status", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[47] = setValue;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] !== t) {
        t28 = t("ads.createStepOne.selectStatus");
        $[49] = t;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    let t29;
    if ($[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t28
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 358,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== t) {
        t30 = t("ads.createStepOne.statusActive");
        $[53] = t;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t) {
        t32 = t("ads.createStepOne.statusDraft");
        $[57] = t;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    let t33;
    if ($[59] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[59] = t32;
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    let t34;
    if ($[61] !== t) {
        t34 = t("ads.createStepOne.statusPaused");
        $[61] = t;
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[63] = t34;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== t) {
        t36 = t("ads.createStepOne.statusEnded");
        $[65] = t;
        $[66] = t36;
    } else {
        t36 = $[66];
    }
    let t37;
    if ($[67] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[67] = t36;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== t31 || $[70] !== t33 || $[71] !== t35 || $[72] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t31,
                t33,
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[69] = t31;
        $[70] = t33;
        $[71] = t35;
        $[72] = t37;
        $[73] = t38;
    } else {
        t38 = $[73];
    }
    let t39;
    if ($[74] !== status || $[75] !== t27 || $[76] !== t29 || $[77] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t27,
            children: [
                t29,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[74] = status;
        $[75] = t27;
        $[76] = t29;
        $[77] = t38;
        $[78] = t39;
    } else {
        t39 = $[78];
    }
    let t40;
    if ($[79] !== t26 || $[80] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[79] = t26;
        $[80] = t39;
        $[81] = t40;
    } else {
        t40 = $[81];
    }
    let t41;
    if ($[82] !== t) {
        t41 = t("ads.createStepOne.priorityLevel");
        $[82] = t;
        $[83] = t41;
    } else {
        t41 = $[83];
    }
    let t42;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[84] = t42;
    } else {
        t42 = $[84];
    }
    let t43;
    if ($[85] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t41,
                " ",
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[85] = t41;
        $[86] = t43;
    } else {
        t43 = $[86];
    }
    let t44;
    if ($[87] !== register || $[88] !== t) {
        t44 = register("priority", {
            required: t("ads.createStepOne.priorityRequired"),
            min: {
                value: 1,
                message: t("ads.createStepOne.priorityMin")
            },
            max: {
                value: 10,
                message: t("ads.createStepOne.priorityMax")
            }
        });
        $[87] = register;
        $[88] = t;
        $[89] = t44;
    } else {
        t44 = $[89];
    }
    const t45 = !!errors.priority;
    const t46 = `bg-white dark:bg-neutral-900 h-9 text-xs ${errors.priority ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t47;
    if ($[90] !== t44 || $[91] !== t45 || $[92] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "number",
            min: "1",
            max: "10",
            placeholder: "1",
            ...t44,
            error: t45,
            className: t46
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[90] = t44;
        $[91] = t45;
        $[92] = t46;
        $[93] = t47;
    } else {
        t47 = $[93];
    }
    const t48 = errors.priority ? String(errors.priority.message || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0628\u064A\u0646 1 \u0648 10" : "Priority must be 1-10")) : undefined;
    let t49;
    if ($[94] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t48
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[94] = t48;
        $[95] = t49;
    } else {
        t49 = $[95];
    }
    let t50;
    if ($[96] !== t43 || $[97] !== t47 || $[98] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t43,
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[96] = t43;
        $[97] = t47;
        $[98] = t49;
        $[99] = t50;
    } else {
        t50 = $[99];
    }
    let t51;
    if ($[100] !== t) {
        t51 = t("ads.createStepOne.billingUnit");
        $[100] = t;
        $[101] = t51;
    } else {
        t51 = $[101];
    }
    let t52;
    if ($[102] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[102] = t52;
    } else {
        t52 = $[102];
    }
    let t53;
    if ($[103] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t51,
                " ",
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[103] = t51;
        $[104] = t53;
    } else {
        t53 = $[104];
    }
    let t54;
    if ($[105] !== setValue) {
        t54 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_0)=>setValue("billing_unit", val_0, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[105] = setValue;
        $[106] = t54;
    } else {
        t54 = $[106];
    }
    let t55;
    if ($[107] !== t) {
        t55 = t("ads.createStepOne.selectBilling");
        $[107] = t;
        $[108] = t55;
    } else {
        t55 = $[108];
    }
    let t56;
    if ($[109] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t55
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 579,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[109] = t55;
        $[110] = t56;
    } else {
        t56 = $[110];
    }
    let t57;
    if ($[111] !== t) {
        t57 = t("ads.createStepOne.billingImpression");
        $[111] = t;
        $[112] = t57;
    } else {
        t57 = $[112];
    }
    let t58;
    if ($[113] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "impression",
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[113] = t57;
        $[114] = t58;
    } else {
        t58 = $[114];
    }
    let t59;
    if ($[115] !== t) {
        t59 = t("ads.createStepOne.billingClick");
        $[115] = t;
        $[116] = t59;
    } else {
        t59 = $[116];
    }
    let t60;
    if ($[117] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "click",
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[117] = t59;
        $[118] = t60;
    } else {
        t60 = $[118];
    }
    let t61;
    if ($[119] !== t) {
        t61 = t("ads.createStepOne.billingView");
        $[119] = t;
        $[120] = t61;
    } else {
        t61 = $[120];
    }
    let t62;
    if ($[121] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "view",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[121] = t61;
        $[122] = t62;
    } else {
        t62 = $[122];
    }
    let t63;
    if ($[123] !== t) {
        t63 = t("ads.createStepOne.billingMonth");
        $[123] = t;
        $[124] = t63;
    } else {
        t63 = $[124];
    }
    let t64;
    if ($[125] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "month",
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, this);
        $[125] = t63;
        $[126] = t64;
    } else {
        t64 = $[126];
    }
    let t65;
    if ($[127] !== t58 || $[128] !== t60 || $[129] !== t62 || $[130] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t58,
                t60,
                t62,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[127] = t58;
        $[128] = t60;
        $[129] = t62;
        $[130] = t64;
        $[131] = t65;
    } else {
        t65 = $[131];
    }
    let t66;
    if ($[132] !== billing_unit || $[133] !== t54 || $[134] !== t56 || $[135] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: billing_unit,
            onValueChange: t54,
            children: [
                t56,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[132] = billing_unit;
        $[133] = t54;
        $[134] = t56;
        $[135] = t65;
        $[136] = t66;
    } else {
        t66 = $[136];
    }
    let t67;
    if ($[137] !== t53 || $[138] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t53,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[137] = t53;
        $[138] = t66;
        $[139] = t67;
    } else {
        t67 = $[139];
    }
    let t68;
    if ($[140] !== t40 || $[141] !== t50 || $[142] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1",
            children: [
                t40,
                t50,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[140] = t40;
        $[141] = t50;
        $[142] = t67;
        $[143] = t68;
    } else {
        t68 = $[143];
    }
    let t69;
    if ($[144] !== t23 || $[145] !== t68 || $[146] !== t9) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t9,
                t23,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, this);
        $[144] = t23;
        $[145] = t68;
        $[146] = t9;
        $[147] = t69;
    } else {
        t69 = $[147];
    }
    const t70 = "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4";
    let t71;
    if ($[148] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, this);
        $[148] = t71;
    } else {
        t71 = $[148];
    }
    let t72;
    if ($[149] !== t) {
        t72 = t("ads.createStepOne.placementAudience");
        $[149] = t;
        $[150] = t72;
    } else {
        t72 = $[150];
    }
    let t73;
    if ($[151] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t72
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 718,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[151] = t72;
        $[152] = t73;
    } else {
        t73 = $[152];
    }
    let t74;
    if ($[153] !== t) {
        t74 = t("ads.createStepOne.adFormat");
        $[153] = t;
        $[154] = t74;
    } else {
        t74 = $[154];
    }
    let t75;
    if ($[155] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 734,
            columnNumber: 11
        }, this);
        $[155] = t75;
    } else {
        t75 = $[155];
    }
    let t76;
    if ($[156] !== t74) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t74,
                " ",
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 741,
            columnNumber: 11
        }, this);
        $[156] = t74;
        $[157] = t76;
    } else {
        t76 = $[157];
    }
    let t77;
    if ($[158] !== setValue) {
        t77 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_1)=>setValue("type", val_1, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[158] = setValue;
        $[159] = t77;
    } else {
        t77 = $[159];
    }
    let t78;
    if ($[160] !== t) {
        t78 = t("ads.createStepOne.selectFormat");
        $[160] = t;
        $[161] = t78;
    } else {
        t78 = $[161];
    }
    let t79;
    if ($[162] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t78
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 771,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 771,
            columnNumber: 11
        }, this);
        $[162] = t78;
        $[163] = t79;
    } else {
        t79 = $[163];
    }
    let t80;
    if ($[164] !== t) {
        t80 = t("ads.createStepOne.formatBanner");
        $[164] = t;
        $[165] = t80;
    } else {
        t80 = $[165];
    }
    let t81;
    if ($[166] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "banner",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 787,
            columnNumber: 11
        }, this);
        $[166] = t80;
        $[167] = t81;
    } else {
        t81 = $[167];
    }
    let t82;
    if ($[168] !== t) {
        t82 = t("ads.createStepOne.formatCard");
        $[168] = t;
        $[169] = t82;
    } else {
        t82 = $[169];
    }
    let t83;
    if ($[170] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "card",
            children: t82
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 803,
            columnNumber: 11
        }, this);
        $[170] = t82;
        $[171] = t83;
    } else {
        t83 = $[171];
    }
    let t84;
    if ($[172] !== t) {
        t84 = t("ads.createStepOne.formatPopUp");
        $[172] = t;
        $[173] = t84;
    } else {
        t84 = $[173];
    }
    let t85;
    if ($[174] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "pop_up",
            children: t84
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, this);
        $[174] = t84;
        $[175] = t85;
    } else {
        t85 = $[175];
    }
    let t86;
    if ($[176] !== t) {
        t86 = t("ads.createStepOne.formatFullPage");
        $[176] = t;
        $[177] = t86;
    } else {
        t86 = $[177];
    }
    let t87;
    if ($[178] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "full_page",
            children: t86
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 835,
            columnNumber: 11
        }, this);
        $[178] = t86;
        $[179] = t87;
    } else {
        t87 = $[179];
    }
    let t88;
    if ($[180] !== t81 || $[181] !== t83 || $[182] !== t85 || $[183] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t81,
                t83,
                t85,
                t87
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 843,
            columnNumber: 11
        }, this);
        $[180] = t81;
        $[181] = t83;
        $[182] = t85;
        $[183] = t87;
        $[184] = t88;
    } else {
        t88 = $[184];
    }
    let t89;
    if ($[185] !== t77 || $[186] !== t79 || $[187] !== t88 || $[188] !== type) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: type,
            onValueChange: t77,
            children: [
                t79,
                t88
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 854,
            columnNumber: 11
        }, this);
        $[185] = t77;
        $[186] = t79;
        $[187] = t88;
        $[188] = type;
        $[189] = t89;
    } else {
        t89 = $[189];
    }
    let t90;
    if ($[190] !== t76 || $[191] !== t89) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t76,
                t89
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 865,
            columnNumber: 11
        }, this);
        $[190] = t76;
        $[191] = t89;
        $[192] = t90;
    } else {
        t90 = $[192];
    }
    let t91;
    if ($[193] !== t) {
        t91 = t("ads.createStepOne.targetPlatform");
        $[193] = t;
        $[194] = t91;
    } else {
        t91 = $[194];
    }
    let t92;
    if ($[195] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 882,
            columnNumber: 11
        }, this);
        $[195] = t92;
    } else {
        t92 = $[195];
    }
    let t93;
    if ($[196] !== t91) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t91,
                " ",
                t92
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 889,
            columnNumber: 11
        }, this);
        $[196] = t91;
        $[197] = t93;
    } else {
        t93 = $[197];
    }
    let t94;
    if ($[198] !== setValue) {
        t94 = ({
            "CreateAdStepOne[<Select>.onValueChange]": (val_2)=>setValue("platform", val_2, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CreateAdStepOne[<Select>.onValueChange]"];
        $[198] = setValue;
        $[199] = t94;
    } else {
        t94 = $[199];
    }
    let t95;
    if ($[200] !== t) {
        t95 = t("ads.createStepOne.selectPlatform");
        $[200] = t;
        $[201] = t95;
    } else {
        t95 = $[201];
    }
    let t96;
    if ($[202] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t95
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                lineNumber: 919,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 919,
            columnNumber: 11
        }, this);
        $[202] = t95;
        $[203] = t96;
    } else {
        t96 = $[203];
    }
    let t97;
    if ($[204] !== t) {
        t97 = t("ads.createStepOne.platformWeb");
        $[204] = t;
        $[205] = t97;
    } else {
        t97 = $[205];
    }
    let t98;
    if ($[206] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "web",
            children: t97
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 935,
            columnNumber: 11
        }, this);
        $[206] = t97;
        $[207] = t98;
    } else {
        t98 = $[207];
    }
    let t99;
    if ($[208] !== t) {
        t99 = t("ads.createStepOne.platformMobile");
        $[208] = t;
        $[209] = t99;
    } else {
        t99 = $[209];
    }
    let t100;
    if ($[210] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "mobile",
            children: t99
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 951,
            columnNumber: 12
        }, this);
        $[210] = t99;
        $[211] = t100;
    } else {
        t100 = $[211];
    }
    let t101;
    if ($[212] !== t) {
        t101 = t("ads.createStepOne.platformAndroid");
        $[212] = t;
        $[213] = t101;
    } else {
        t101 = $[213];
    }
    let t102;
    if ($[214] !== t101) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "android",
            children: t101
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 967,
            columnNumber: 12
        }, this);
        $[214] = t101;
        $[215] = t102;
    } else {
        t102 = $[215];
    }
    let t103;
    if ($[216] !== t) {
        t103 = t("ads.createStepOne.platformIos");
        $[216] = t;
        $[217] = t103;
    } else {
        t103 = $[217];
    }
    let t104;
    if ($[218] !== t103) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ios",
            children: t103
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 983,
            columnNumber: 12
        }, this);
        $[218] = t103;
        $[219] = t104;
    } else {
        t104 = $[219];
    }
    let t105;
    if ($[220] !== t100 || $[221] !== t102 || $[222] !== t104 || $[223] !== t98) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t98,
                t100,
                t102,
                t104
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 991,
            columnNumber: 12
        }, this);
        $[220] = t100;
        $[221] = t102;
        $[222] = t104;
        $[223] = t98;
        $[224] = t105;
    } else {
        t105 = $[224];
    }
    let t106;
    if ($[225] !== platform || $[226] !== t105 || $[227] !== t94 || $[228] !== t96) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: platform,
            onValueChange: t94,
            children: [
                t96,
                t105
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1002,
            columnNumber: 12
        }, this);
        $[225] = platform;
        $[226] = t105;
        $[227] = t94;
        $[228] = t96;
        $[229] = t106;
    } else {
        t106 = $[229];
    }
    let t107;
    if ($[230] !== t106 || $[231] !== t93) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t93,
                t106
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1013,
            columnNumber: 12
        }, this);
        $[230] = t106;
        $[231] = t93;
        $[232] = t107;
    } else {
        t107 = $[232];
    }
    let t108;
    if ($[233] !== t107 || $[234] !== t90) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t90,
                t107
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1022,
            columnNumber: 12
        }, this);
        $[233] = t107;
        $[234] = t90;
        $[235] = t108;
    } else {
        t108 = $[235];
    }
    let t109;
    if ($[236] !== position || $[237] !== setValue || $[238] !== t || $[239] !== type || $[240] !== width) {
        t109 = type === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                            children: t("ads.createStepOne.popUpDimensions")
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1031,
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
                                        placeholder: t("ads.createStepOne.selectWidth")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "full_screen",
                                            children: t("ads.createStepOne.dimensionFullScreen")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 261
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "large",
                                            children: t("ads.createStepOne.dimensionLarge")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 350
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "medium",
                                            children: t("ads.createStepOne.dimensionMedium")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 428
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "small",
                                            children: t("ads.createStepOne.dimensionSmall")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 508
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "custom",
                                            children: t("ads.createStepOne.dimensionCustom")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 586
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 246
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1031,
                            columnNumber: 338
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1031,
                    columnNumber: 194
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                            children: t("ads.createStepOne.screenPosition")
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1037,
                            columnNumber: 702
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
                                        placeholder: t("ads.createStepOne.selectPosition")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 166
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_center",
                                            children: t("ads.createStepOne.posTopCenter")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 264
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "middle_center",
                                            children: t("ads.createStepOne.posMiddleCenter")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 345
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_center",
                                            children: t("ads.createStepOne.posBottomCenter")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 432
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_right",
                                            children: t("ads.createStepOne.posBottomRight")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 519
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_left",
                                            children: t("ads.createStepOne.posBottomLeft")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 604
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_right",
                                            children: t("ads.createStepOne.posTopRight")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 687
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_left",
                                            children: t("ads.createStepOne.posTopLeft")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 766
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 249
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                            lineNumber: 1037,
                            columnNumber: 840
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1037,
                    columnNumber: 697
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1031,
            columnNumber: 33
        }, this);
        $[236] = position;
        $[237] = setValue;
        $[238] = t;
        $[239] = type;
        $[240] = width;
        $[241] = t109;
    } else {
        t109 = $[241];
    }
    const t110 = "grid grid-cols-1 sm:grid-cols-2 gap-4";
    let t111;
    if ($[242] !== t) {
        t111 = t("ads.createStepOne.placementLocations");
        $[242] = t;
        $[243] = t111;
    } else {
        t111 = $[243];
    }
    let t112;
    if ($[244] === Symbol.for("react.memo_cache_sentinel")) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1064,
            columnNumber: 12
        }, this);
        $[244] = t112;
    } else {
        t112 = $[244];
    }
    let t113;
    if ($[245] !== t111) {
        t113 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t111,
                " ",
                t112
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1071,
            columnNumber: 12
        }, this);
        $[245] = t111;
        $[246] = t113;
    } else {
        t113 = $[246];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"];
    const T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"];
    const t114 = true;
    const T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"];
    const t115 = "outline";
    const t116 = !!errors.location || undefined;
    const t117 = `w-full justify-between bg-white dark:bg-neutral-900 font-normal hover:bg-white dark:hover:bg-neutral-900 text-start h-9 text-xs sm:text-sm ${errors.location ? "border-red-500 text-red-500" : "border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"}`;
    const t118 = "truncate";
    const t119 = selectedLocations.length > 0 ? `${selectedLocations.length} ${t("ads.createStepOne.locationsCount")} (${selectedLocations.map(getLocationLabel).join(", ")})` : t("ads.createStepOne.selectPages");
    let t120;
    if ($[247] !== t119) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t118,
            children: t119
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1088,
            columnNumber: 12
        }, this);
        $[247] = t119;
        $[248] = t120;
    } else {
        t120 = $[248];
    }
    let t121;
    if ($[249] === Symbol.for("react.memo_cache_sentinel")) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 opacity-50 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1096,
            columnNumber: 12
        }, this);
        $[249] = t121;
    } else {
        t121 = $[249];
    }
    let t122;
    if ($[250] !== T2 || $[251] !== t116 || $[252] !== t117 || $[253] !== t120) {
        t122 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            variant: t115,
            "aria-invalid": t116,
            className: t117,
            children: [
                t120,
                t121
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1103,
            columnNumber: 12
        }, this);
        $[250] = T2;
        $[251] = t116;
        $[252] = t117;
        $[253] = t120;
        $[254] = t122;
    } else {
        t122 = $[254];
    }
    let t123;
    if ($[255] !== T1 || $[256] !== t122) {
        t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            asChild: t114,
            children: t122
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1114,
            columnNumber: 12
        }, this);
        $[255] = T1;
        $[256] = t122;
        $[257] = t123;
    } else {
        t123 = $[257];
    }
    let t124;
    if ($[258] !== getLocationLabel || $[259] !== selectedLocations || $[260] !== toggleLocation) {
        t124 = LOCATIONS.map({
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
                    lineNumber: 1124,
                    columnNumber: 52
                }, this)
        }["CreateAdStepOne[LOCATIONS.map()]"]);
        $[258] = getLocationLabel;
        $[259] = selectedLocations;
        $[260] = toggleLocation;
        $[261] = t124;
    } else {
        t124 = $[261];
    }
    let t125;
    if ($[262] !== t124) {
        t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            className: "w-60",
            align: "start",
            children: t124
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1139,
            columnNumber: 12
        }, this);
        $[262] = t124;
        $[263] = t125;
    } else {
        t125 = $[263];
    }
    let t126;
    if ($[264] !== T0 || $[265] !== t123 || $[266] !== t125) {
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: [
                t123,
                t125
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1147,
            columnNumber: 12
        }, this);
        $[264] = T0;
        $[265] = t123;
        $[266] = t125;
        $[267] = t126;
    } else {
        t126 = $[267];
    }
    let t127;
    if ($[268] !== errors.location || $[269] !== t) {
        t127 = errors.location ? String(errors.location.message || t("ads.createStepOne.locationRequired")) : undefined;
        $[268] = errors.location;
        $[269] = t;
        $[270] = t127;
    } else {
        t127 = $[270];
    }
    let t128;
    if ($[271] !== t127) {
        t128 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t127
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1166,
            columnNumber: 12
        }, this);
        $[271] = t127;
        $[272] = t128;
    } else {
        t128 = $[272];
    }
    let t129;
    if ($[273] !== t113 || $[274] !== t126 || $[275] !== t128) {
        t129 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t113,
                t126,
                t128
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1174,
            columnNumber: 12
        }, this);
        $[273] = t113;
        $[274] = t126;
        $[275] = t128;
        $[276] = t129;
    } else {
        t129 = $[276];
    }
    let t130;
    if ($[277] !== t) {
        t130 = t("ads.createStepOne.country");
        $[277] = t;
        $[278] = t130;
    } else {
        t130 = $[278];
    }
    let t131;
    if ($[279] === Symbol.for("react.memo_cache_sentinel")) {
        t131 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1192,
            columnNumber: 12
        }, this);
        $[279] = t131;
    } else {
        t131 = $[279];
    }
    let t132;
    if ($[280] !== t130) {
        t132 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t130,
                " ",
                t131
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1199,
            columnNumber: 12
        }, this);
        $[280] = t130;
        $[281] = t132;
    } else {
        t132 = $[281];
    }
    const t133 = country || undefined;
    let t134;
    if ($[282] !== clearErrors || $[283] !== setValue) {
        t134 = ({
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
        $[282] = clearErrors;
        $[283] = setValue;
        $[284] = t134;
    } else {
        t134 = $[284];
    }
    const t135 = !!errors.country;
    const t136 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.country ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t137;
    if ($[285] !== t) {
        t137 = t("ads.createStepOne.selectCountry");
        $[285] = t;
        $[286] = t137;
    } else {
        t137 = $[286];
    }
    let t138;
    if ($[287] !== t137) {
        t138 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t137
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1244,
            columnNumber: 12
        }, this);
        $[287] = t137;
        $[288] = t138;
    } else {
        t138 = $[288];
    }
    let t139;
    if ($[289] !== t135 || $[290] !== t136 || $[291] !== t138) {
        t139 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            error: t135,
            className: t136,
            children: t138
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1252,
            columnNumber: 12
        }, this);
        $[289] = t135;
        $[290] = t136;
        $[291] = t138;
        $[292] = t139;
    } else {
        t139 = $[292];
    }
    let t140;
    if ($[293] !== t) {
        t140 = t("ads.createStepOne.countryEgypt");
        $[293] = t;
        $[294] = t140;
    } else {
        t140 = $[294];
    }
    let t141;
    if ($[295] !== t140) {
        t141 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Egypt",
            children: t140
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1270,
            columnNumber: 12
        }, this);
        $[295] = t140;
        $[296] = t141;
    } else {
        t141 = $[296];
    }
    let t142;
    if ($[297] !== t) {
        t142 = t("ads.createStepOne.countryUAE");
        $[297] = t;
        $[298] = t142;
    } else {
        t142 = $[298];
    }
    let t143;
    if ($[299] !== t142) {
        t143 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "UAE",
            children: t142
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1286,
            columnNumber: 12
        }, this);
        $[299] = t142;
        $[300] = t143;
    } else {
        t143 = $[300];
    }
    let t144;
    if ($[301] !== t) {
        t144 = t("ads.createStepOne.countryOman");
        $[301] = t;
        $[302] = t144;
    } else {
        t144 = $[302];
    }
    let t145;
    if ($[303] !== t144) {
        t145 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Oman",
            children: t144
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1302,
            columnNumber: 12
        }, this);
        $[303] = t144;
        $[304] = t145;
    } else {
        t145 = $[304];
    }
    let t146;
    if ($[305] !== t141 || $[306] !== t143 || $[307] !== t145) {
        t146 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t141,
                t143,
                t145
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1310,
            columnNumber: 12
        }, this);
        $[305] = t141;
        $[306] = t143;
        $[307] = t145;
        $[308] = t146;
    } else {
        t146 = $[308];
    }
    let t147;
    if ($[309] !== t133 || $[310] !== t134 || $[311] !== t139 || $[312] !== t146) {
        t147 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t133,
            onValueChange: t134,
            children: [
                t139,
                t146
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1320,
            columnNumber: 12
        }, this);
        $[309] = t133;
        $[310] = t134;
        $[311] = t139;
        $[312] = t146;
        $[313] = t147;
    } else {
        t147 = $[313];
    }
    let t148;
    if ($[314] !== errors.country || $[315] !== t) {
        t148 = errors.country ? String(errors.country.message || t("ads.createStepOne.countryRequired")) : undefined;
        $[314] = errors.country;
        $[315] = t;
        $[316] = t148;
    } else {
        t148 = $[316];
    }
    let t149;
    if ($[317] !== t148) {
        t149 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t148
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1340,
            columnNumber: 12
        }, this);
        $[317] = t148;
        $[318] = t149;
    } else {
        t149 = $[318];
    }
    let t150;
    if ($[319] !== t132 || $[320] !== t147 || $[321] !== t149) {
        t150 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t132,
                t147,
                t149
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1348,
            columnNumber: 12
        }, this);
        $[319] = t132;
        $[320] = t147;
        $[321] = t149;
        $[322] = t150;
    } else {
        t150 = $[322];
    }
    let t151;
    if ($[323] !== t129 || $[324] !== t150) {
        t151 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t110,
            children: [
                t129,
                t150
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1358,
            columnNumber: 12
        }, this);
        $[323] = t129;
        $[324] = t150;
        $[325] = t151;
    } else {
        t151 = $[325];
    }
    let t152;
    if ($[326] !== t108 || $[327] !== t109 || $[328] !== t151 || $[329] !== t73) {
        t152 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t70,
            children: [
                t73,
                t108,
                t109,
                t151
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1367,
            columnNumber: 12
        }, this);
        $[326] = t108;
        $[327] = t109;
        $[328] = t151;
        $[329] = t73;
        $[330] = t152;
    } else {
        t152 = $[330];
    }
    let t153;
    if ($[331] === Symbol.for("react.memo_cache_sentinel")) {
        t153 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1378,
            columnNumber: 12
        }, this);
        $[331] = t153;
    } else {
        t153 = $[331];
    }
    let t154;
    if ($[332] !== t) {
        t154 = t("ads.createStepOne.campaignSchedule");
        $[332] = t;
        $[333] = t154;
    } else {
        t154 = $[333];
    }
    let t155;
    if ($[334] !== t154) {
        t155 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t153,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t154
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1393,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1393,
            columnNumber: 12
        }, this);
        $[334] = t154;
        $[335] = t155;
    } else {
        t155 = $[335];
    }
    let t156;
    if ($[336] !== t) {
        t156 = t("ads.createStepOne.startDate");
        $[336] = t;
        $[337] = t156;
    } else {
        t156 = $[337];
    }
    let t157;
    if ($[338] === Symbol.for("react.memo_cache_sentinel")) {
        t157 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1409,
            columnNumber: 12
        }, this);
        $[338] = t157;
    } else {
        t157 = $[338];
    }
    let t158;
    if ($[339] !== t156) {
        t158 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            htmlFor: "startDate",
            children: [
                t156,
                " ",
                t157
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1416,
            columnNumber: 12
        }, this);
        $[339] = t156;
        $[340] = t158;
    } else {
        t158 = $[340];
    }
    let t159;
    if ($[341] !== register || $[342] !== t) {
        t159 = register("startDate", {
            required: t("ads.createStepOne.startDateRequired")
        });
        $[341] = register;
        $[342] = t;
        $[343] = t159;
    } else {
        t159 = $[343];
    }
    const t160 = !!(dateErrors.startDate || errors.startDate);
    const t161 = `bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.startDate || errors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t162;
    if ($[344] !== clearErrors || $[345] !== endDate || $[346] !== register || $[347] !== validateDateTimeRange) {
        t162 = ({
            "CreateAdStepOne[<Input>.onChange]": (e)=>{
                register("startDate").onChange(e);
                clearErrors("startDate");
                validateDateTimeRange(e.target.value, endDate || "");
            }
        })["CreateAdStepOne[<Input>.onChange]"];
        $[344] = clearErrors;
        $[345] = endDate;
        $[346] = register;
        $[347] = validateDateTimeRange;
        $[348] = t162;
    } else {
        t162 = $[348];
    }
    let t163;
    if ($[349] !== t159 || $[350] !== t160 || $[351] !== t161 || $[352] !== t162) {
        t163 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            ...t159,
            error: t160,
            className: t161,
            onChange: t162
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1454,
            columnNumber: 12
        }, this);
        $[349] = t159;
        $[350] = t160;
        $[351] = t161;
        $[352] = t162;
        $[353] = t163;
    } else {
        t163 = $[353];
    }
    let t164;
    if ($[354] === Symbol.for("react.memo_cache_sentinel")) {
        t164 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1465,
            columnNumber: 12
        }, this);
        $[354] = t164;
    } else {
        t164 = $[354];
    }
    let t165;
    if ($[355] !== t163) {
        t165 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t163,
                t164
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1472,
            columnNumber: 12
        }, this);
        $[355] = t163;
        $[356] = t165;
    } else {
        t165 = $[356];
    }
    let t166;
    if ($[357] !== dateErrors.startDate || $[358] !== errors.startDate || $[359] !== t) {
        t166 = dateErrors.startDate || errors.startDate ? dateErrors.startDate || String(errors.startDate?.message || t("ads.createStepOne.startDateRequired")) : undefined;
        $[357] = dateErrors.startDate;
        $[358] = errors.startDate;
        $[359] = t;
        $[360] = t166;
    } else {
        t166 = $[360];
    }
    let t167;
    if ($[361] !== t166) {
        t167 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t166
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1490,
            columnNumber: 12
        }, this);
        $[361] = t166;
        $[362] = t167;
    } else {
        t167 = $[362];
    }
    let t168;
    if ($[363] !== t158 || $[364] !== t165 || $[365] !== t167) {
        t168 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t158,
                t165,
                t167
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1498,
            columnNumber: 12
        }, this);
        $[363] = t158;
        $[364] = t165;
        $[365] = t167;
        $[366] = t168;
    } else {
        t168 = $[366];
    }
    let t169;
    if ($[367] !== t) {
        t169 = t("ads.createStepOne.endDate");
        $[367] = t;
        $[368] = t169;
    } else {
        t169 = $[368];
    }
    let t170;
    if ($[369] !== t169) {
        t170 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t169
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1516,
            columnNumber: 12
        }, this);
        $[369] = t169;
        $[370] = t170;
    } else {
        t170 = $[370];
    }
    let t171;
    if ($[371] !== t) {
        t171 = t("ads.createStepOne.endDateHint");
        $[371] = t;
        $[372] = t171;
    } else {
        t171 = $[372];
    }
    let t172;
    if ($[373] !== t171) {
        t172 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t171
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1532,
            columnNumber: 12
        }, this);
        $[373] = t171;
        $[374] = t172;
    } else {
        t172 = $[374];
    }
    let t173;
    if ($[375] !== t170 || $[376] !== t172) {
        t173 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            htmlFor: "endDate",
            children: [
                t170,
                t172
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1540,
            columnNumber: 12
        }, this);
        $[375] = t170;
        $[376] = t172;
        $[377] = t173;
    } else {
        t173 = $[377];
    }
    let t174;
    if ($[378] !== register) {
        t174 = register("endDate");
        $[378] = register;
        $[379] = t174;
    } else {
        t174 = $[379];
    }
    const t175 = !!dateErrors.endDate;
    const t176 = `bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    const t177 = startDate || undefined;
    let t178;
    if ($[380] !== register || $[381] !== startDate || $[382] !== validateDateTimeRange) {
        t178 = ({
            "CreateAdStepOne[<Input>.onChange]": (e_0)=>{
                register("endDate").onChange(e_0);
                validateDateTimeRange(startDate || "", e_0.target.value);
            }
        })["CreateAdStepOne[<Input>.onChange]"];
        $[380] = register;
        $[381] = startDate;
        $[382] = validateDateTimeRange;
        $[383] = t178;
    } else {
        t178 = $[383];
    }
    let t179;
    if ($[384] !== t174 || $[385] !== t175 || $[386] !== t176 || $[387] !== t177 || $[388] !== t178) {
        t179 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            ...t174,
            error: t175,
            className: t176,
            min: t177,
            onChange: t178
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1575,
            columnNumber: 12
        }, this);
        $[384] = t174;
        $[385] = t175;
        $[386] = t176;
        $[387] = t177;
        $[388] = t178;
        $[389] = t179;
    } else {
        t179 = $[389];
    }
    let t180;
    if ($[390] === Symbol.for("react.memo_cache_sentinel")) {
        t180 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1587,
            columnNumber: 12
        }, this);
        $[390] = t180;
    } else {
        t180 = $[390];
    }
    let t181;
    if ($[391] !== t179) {
        t181 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t179,
                t180
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1594,
            columnNumber: 12
        }, this);
        $[391] = t179;
        $[392] = t181;
    } else {
        t181 = $[392];
    }
    let t182;
    if ($[393] !== dateErrors.endDate) {
        t182 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: dateErrors.endDate
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1602,
            columnNumber: 12
        }, this);
        $[393] = dateErrors.endDate;
        $[394] = t182;
    } else {
        t182 = $[394];
    }
    let t183;
    if ($[395] !== t173 || $[396] !== t181 || $[397] !== t182) {
        t183 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t173,
                t181,
                t182
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1610,
            columnNumber: 12
        }, this);
        $[395] = t173;
        $[396] = t181;
        $[397] = t182;
        $[398] = t183;
    } else {
        t183 = $[398];
    }
    let t184;
    if ($[399] !== t168 || $[400] !== t183) {
        t184 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t168,
                t183
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1620,
            columnNumber: 12
        }, this);
        $[399] = t168;
        $[400] = t183;
        $[401] = t184;
    } else {
        t184 = $[401];
    }
    let t185;
    if ($[402] !== dateErrors.general) {
        t185 = dateErrors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1629,
                    columnNumber: 215
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: dateErrors.general
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
                    lineNumber: 1629,
                    columnNumber: 264
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1629,
            columnNumber: 34
        }, this);
        $[402] = dateErrors.general;
        $[403] = t185;
    } else {
        t185 = $[403];
    }
    let t186;
    if ($[404] !== t155 || $[405] !== t184 || $[406] !== t185) {
        t186 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t155,
                t184,
                t185
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1637,
            columnNumber: 12
        }, this);
        $[404] = t155;
        $[405] = t184;
        $[406] = t185;
        $[407] = t186;
    } else {
        t186 = $[407];
    }
    let t187;
    if ($[408] !== t152 || $[409] !== t186 || $[410] !== t69) {
        t187 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t69,
                t152,
                t186
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/CreateAdStepOne.tsx",
            lineNumber: 1647,
            columnNumber: 12
        }, this);
        $[408] = t152;
        $[409] = t186;
        $[410] = t69;
        $[411] = t187;
    } else {
        t187 = $[411];
    }
    return t187;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
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
function DeveloperLinkSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(163);
    if ($[0] !== "13b55647c4c6b765c08feec7b1b09b234ebc1ba6efb98b10542a199d7b8bdb3a") {
        for(let $i = 0; $i < 163; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "13b55647c4c6b765c08feec7b1b09b234ebc1ba6efb98b10542a199d7b8bdb3a";
    }
    const { developerSearch, setDeveloperSearch, developersLoading, developers, handleDeveloperChange, projectSearch, setProjectSearch, projectsLoading, projects, propertySearch, setPropertySearch, propertiesLoading, properties } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const debouncedDeveloperSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(developerSearch);
    const debouncedProjectSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(projectSearch);
    const debouncedPropertySearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(propertySearch);
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
        if (!debouncedProjectSearch || !debouncedProjectSearch.trim()) {
            t6 = projects;
            break bb2;
        }
        let t7;
        if ($[20] !== debouncedProjectSearch || $[21] !== projects) {
            const s = debouncedProjectSearch.toLowerCase().trim();
            t7 = projects.filter({
                "DeveloperLinkSection[projects.filter()]": (p_1)=>(p_1.name || "").toLowerCase().includes(s)
            }["DeveloperLinkSection[projects.filter()]"]);
            $[20] = debouncedProjectSearch;
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
        if (!debouncedPropertySearch || !debouncedPropertySearch.trim()) {
            t7 = properties;
            break bb3;
        }
        let t8;
        if ($[23] !== debouncedPropertySearch || $[24] !== properties) {
            const s_0 = debouncedPropertySearch.toLowerCase().trim();
            t8 = properties.filter({
                "DeveloperLinkSection[properties.filter()]": (p_2)=>(p_2.name || "").toLowerCase().includes(s_0)
            }["DeveloperLinkSection[properties.filter()]"]);
            $[23] = debouncedPropertySearch;
            $[24] = properties;
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
            lineNumber: 225,
            columnNumber: 10
        }, this);
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== t) {
        t9 = t("ads.createStepTwo.developerAndTargetLink");
        $[27] = t;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 240,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[29] = t9;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== developerId || $[32] !== isAr) {
        t11 = developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-medium text-teal-600 dark:text-teal-400",
            children: isAr ? `المطور المحدد #${developerId}` : `Selected Developer #${developerId}`
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 248,
            columnNumber: 26
        }, this);
        $[31] = developerId;
        $[32] = isAr;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] !== t10 || $[35] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t11;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] !== t) {
        t13 = t("ads.createStepTwo.developer");
        $[37] = t;
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    let t14;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t13,
                " ",
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[40] = t13;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] !== developers.length || $[43] !== t) {
        t16 = developers.length > 0 ? `${developers.length} ${t("ads.createStepTwo.developersAvailable")}` : "";
        $[42] = developers.length;
        $[43] = t;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t15 || $[48] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[47] = t15;
        $[48] = t17;
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    let t19;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] !== t) {
        t20 = t("ads.createStepTwo.searchDeveloperPlaceholder");
        $[51] = t;
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    let t21;
    if ($[53] !== setDeveloperSearch) {
        t21 = ({
            "DeveloperLinkSection[<Input>.onChange]": (e)=>setDeveloperSearch(e.target.value)
        })["DeveloperLinkSection[<Input>.onChange]"];
        $[53] = setDeveloperSearch;
        $[54] = t21;
    } else {
        t21 = $[54];
    }
    let t22;
    if ($[55] !== developerSearch || $[56] !== t20 || $[57] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t20,
            value: developerSearch,
            onChange: t21,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[55] = developerSearch;
        $[56] = t20;
        $[57] = t21;
        $[58] = t22;
    } else {
        t22 = $[58];
    }
    let t23;
    if ($[59] !== developerSearch || $[60] !== setDeveloperSearch) {
        t23 = developerSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "DeveloperLinkSection[<button>.onClick]": ()=>setDeveloperSearch("")
            }["DeveloperLinkSection[<button>.onClick]"],
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                lineNumber: 352,
                columnNumber: 172
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 350,
            columnNumber: 30
        }, this);
        $[59] = developerSearch;
        $[60] = setDeveloperSearch;
        $[61] = t23;
    } else {
        t23 = $[61];
    }
    let t24;
    if ($[62] !== t22 || $[63] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-2",
            children: [
                t19,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[62] = t22;
        $[63] = t23;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== developerId) {
        t25 = developerId ? developerId.toString() : undefined;
        $[65] = developerId;
        $[66] = t25;
    } else {
        t25 = $[66];
    }
    let t26;
    if ($[67] !== clearErrors || $[68] !== handleDeveloperChange) {
        t26 = ({
            "DeveloperLinkSection[<Select>.onValueChange]": (val)=>{
                handleDeveloperChange(val);
                clearErrors("developerId");
            }
        })["DeveloperLinkSection[<Select>.onValueChange]"];
        $[67] = clearErrors;
        $[68] = handleDeveloperChange;
        $[69] = t26;
    } else {
        t26 = $[69];
    }
    const t27 = !!errors.developerId;
    const t28 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.developerId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t29;
    if ($[70] !== developersLoading || $[71] !== t) {
        t29 = developersLoading ? t("ads.createStepTwo.loadingDevelopers") : t("ads.createStepTwo.selectDeveloper");
        $[70] = developersLoading;
        $[71] = t;
        $[72] = t29;
    } else {
        t29 = $[72];
    }
    const t30 = selectedDeveloperName || undefined;
    let t31;
    if ($[73] !== t29 || $[74] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t29,
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[73] = t29;
        $[74] = t30;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== t27 || $[77] !== t28 || $[78] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            error: t27,
            className: t28,
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[76] = t27;
        $[77] = t28;
        $[78] = t31;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== debouncedDeveloperSearch || $[81] !== developers || $[82] !== developersLoading || $[83] !== t) {
        t33 = developersLoading && developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.loadingDevelopers")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 423,
            columnNumber: 58
        }, this) : developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.noDevelopersFound")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 423,
            columnNumber: 193
        }, this) : developers.filter({
            "DeveloperLinkSection[developers.filter()]": (dev)=>!debouncedDeveloperSearch || (dev.name || "").toLowerCase().includes(debouncedDeveloperSearch.toLowerCase())
        }["DeveloperLinkSection[developers.filter()]"]).map(_DeveloperLinkSectionAnonymous);
        $[80] = debouncedDeveloperSearch;
        $[81] = developers;
        $[82] = developersLoading;
        $[83] = t;
        $[84] = t33;
    } else {
        t33 = $[84];
    }
    let t34;
    if ($[85] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "max-h-56 overflow-y-auto",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[85] = t33;
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    let t35;
    if ($[87] !== t25 || $[88] !== t26 || $[89] !== t32 || $[90] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t25,
            onValueChange: t26,
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[87] = t25;
        $[88] = t26;
        $[89] = t32;
        $[90] = t34;
        $[91] = t35;
    } else {
        t35 = $[91];
    }
    let t36;
    if ($[92] !== errors.developerId || $[93] !== t) {
        t36 = errors.developerId ? String(errors.developerId.message || t("ads.createStepTwo.developerRequired")) : undefined;
        $[92] = errors.developerId;
        $[93] = t;
        $[94] = t36;
    } else {
        t36 = $[94];
    }
    let t37;
    if ($[95] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t36
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[95] = t36;
        $[96] = t37;
    } else {
        t37 = $[96];
    }
    let t38;
    if ($[97] !== t18 || $[98] !== t24 || $[99] !== t35 || $[100] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t24,
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[97] = t18;
        $[98] = t24;
        $[99] = t35;
        $[100] = t37;
        $[101] = t38;
    } else {
        t38 = $[101];
    }
    let t39;
    if ($[102] !== t) {
        t39 = t("ads.createStepTwo.linkDestinationType");
        $[102] = t;
        $[103] = t39;
    } else {
        t39 = $[103];
    }
    let t40;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[104] = t40;
    } else {
        t40 = $[104];
    }
    let t41;
    if ($[105] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t39,
                " ",
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[105] = t39;
        $[106] = t41;
    } else {
        t41 = $[106];
    }
    let t42;
    if ($[107] !== clearErrors || $[108] !== setValue) {
        t42 = ({
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
        $[107] = clearErrors;
        $[108] = setValue;
        $[109] = t42;
    } else {
        t42 = $[109];
    }
    let t43;
    if ($[110] !== t) {
        t43 = t("ads.createStepTwo.selectDestination");
        $[110] = t;
        $[111] = t43;
    } else {
        t43 = $[111];
    }
    let t44;
    if ($[112] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t43
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                lineNumber: 537,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[112] = t43;
        $[113] = t44;
    } else {
        t44 = $[113];
    }
    let t45;
    if ($[114] !== t) {
        t45 = t("ads.createStepTwo.destinationSpecificProject");
        $[114] = t;
        $[115] = t45;
    } else {
        t45 = $[115];
    }
    let t46;
    if ($[116] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROJECTS",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[116] = t45;
        $[117] = t46;
    } else {
        t46 = $[117];
    }
    let t47;
    if ($[118] !== t) {
        t47 = t("ads.createStepTwo.destinationSpecificProperty");
        $[118] = t;
        $[119] = t47;
    } else {
        t47 = $[119];
    }
    let t48;
    if ($[120] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROPERTIES",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 569,
            columnNumber: 11
        }, this);
        $[120] = t47;
        $[121] = t48;
    } else {
        t48 = $[121];
    }
    let t49;
    if ($[122] !== t) {
        t49 = t("ads.createStepTwo.destinationCustomUrl");
        $[122] = t;
        $[123] = t49;
    } else {
        t49 = $[123];
    }
    let t50;
    if ($[124] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "NONE",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[124] = t49;
        $[125] = t50;
    } else {
        t50 = $[125];
    }
    let t51;
    if ($[126] !== t46 || $[127] !== t48 || $[128] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t46,
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[126] = t46;
        $[127] = t48;
        $[128] = t50;
        $[129] = t51;
    } else {
        t51 = $[129];
    }
    let t52;
    if ($[130] !== linkTo || $[131] !== t42 || $[132] !== t44 || $[133] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: linkTo,
            onValueChange: t42,
            children: [
                t44,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[130] = linkTo;
        $[131] = t42;
        $[132] = t44;
        $[133] = t51;
        $[134] = t52;
    } else {
        t52 = $[134];
    }
    let t53;
    if ($[135] !== t41 || $[136] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t41,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 614,
            columnNumber: 11
        }, this);
        $[135] = t41;
        $[136] = t52;
        $[137] = t53;
    } else {
        t53 = $[137];
    }
    let t54;
    if ($[138] !== clearErrors || $[139] !== developerId || $[140] !== errors.projectId || $[141] !== filteredProjects || $[142] !== filteredProperties || $[143] !== isAr || $[144] !== linkTo || $[145] !== projectId || $[146] !== projectSearch || $[147] !== projectsLoading || $[148] !== propertiesLoading || $[149] !== propertySearch || $[150] !== selectedProjectName || $[151] !== setProjectSearch || $[152] !== setPropertySearch || $[153] !== setValue || $[154] !== t) {
        t54 = linkTo !== "NONE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 623,
                                    columnNumber: 381
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 623,
                            columnNumber: 156
                        }, this),
                        developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-neutral-400 font-normal",
                            children: linkTo === "PROJECTS" ? `${filteredProjects.length} ${t("ads.createStepTwo.itemsFound")}` : `${filteredProperties.length} ${t("ads.createStepTwo.itemsFound")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 623,
                            columnNumber: 443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 623,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 623,
                            columnNumber: 710
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") : linkTo === "PROJECTS" ? t("ads.createStepTwo.searchProjectsPlaceholder") : t("ads.createStepTwo.searchPropertiesPlaceholder"),
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
                            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 623,
                            columnNumber: 803
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
                            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 639,
                                columnNumber: 176
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 631,
                            columnNumber: 348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 623,
                    columnNumber: 679
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
                            error: !!errors.projectId,
                            className: `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.projectId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") : linkTo === "PROJECTS" ? projectsLoading ? t("ads.createStepTwo.loadingProjects") : t("ads.createStepTwo.chooseProject") : propertiesLoading ? t("ads.createStepTwo.loadingProperties") : t("ads.createStepTwo.chooseProperty"),
                                children: selectedProjectName || undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 341
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 648,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-56 overflow-y-auto",
                            children: !developerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.selectDeveloperFirst")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 784
                            }, this) : linkTo === "PROJECTS" ? projectsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProjects")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 938
                            }, this) : filteredProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: projectSearch ? t("ads.createStepTwo.noMatchingProjects") : t("ads.createStepTwo.noProjectsForDeveloper")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 1077
                            }, this) : filteredProjects.map(_DeveloperLinkSectionFilteredProjectsMap) : propertiesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProperties")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 1336
                            }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: propertySearch ? t("ads.createStepTwo.noMatchingProperties") : t("ads.createStepTwo.noPropertiesForDeveloper")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                                lineNumber: 648,
                                columnNumber: 1479
                            }, this) : filteredProperties.map(_DeveloperLinkSectionFilteredPropertiesMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                            lineNumber: 648,
                            columnNumber: 716
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 639,
                    columnNumber: 221
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
                    message: errors.projectId ? String(errors.projectId.message || (linkTo === "PROJECTS" ? t("ads.createStepTwo.projectRequired") : t("ads.createStepTwo.propertyRequired"))) : undefined
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
                    lineNumber: 648,
                    columnNumber: 1750
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 623,
            columnNumber: 32
        }, this);
        $[138] = clearErrors;
        $[139] = developerId;
        $[140] = errors.projectId;
        $[141] = filteredProjects;
        $[142] = filteredProperties;
        $[143] = isAr;
        $[144] = linkTo;
        $[145] = projectId;
        $[146] = projectSearch;
        $[147] = projectsLoading;
        $[148] = propertiesLoading;
        $[149] = propertySearch;
        $[150] = selectedProjectName;
        $[151] = setProjectSearch;
        $[152] = setPropertySearch;
        $[153] = setValue;
        $[154] = t;
        $[155] = t54;
    } else {
        t54 = $[155];
    }
    let t55;
    if ($[156] !== t53 || $[157] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[156] = t53;
        $[157] = t54;
        $[158] = t55;
    } else {
        t55 = $[158];
    }
    let t56;
    if ($[159] !== t12 || $[160] !== t38 || $[161] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t12,
                t38,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/DeveloperLinkSection.tsx",
            lineNumber: 681,
            columnNumber: 11
        }, this);
        $[159] = t12;
        $[160] = t38;
        $[161] = t55;
        $[162] = t56;
    } else {
        t56 = $[162];
    }
    return t56;
}
_s(DeveloperLinkSection, "teuwHZuAQJq+ALLWG37hpZrHJiA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
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
        lineNumber: 692,
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
        lineNumber: 695,
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
        lineNumber: 698,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function CreativeAssetSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "fb09029b4719722f2c042a87d21522f9bf5cd32b57be38b8f5b886a9399183e4") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb09029b4719722f2c042a87d21522f9bf5cd32b57be38b8f5b886a9399183e4";
    }
    const { adImagePreview, handleImageUpload } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== t) {
        t3 = t("ads.createStepTwo.creativeBannerAsset");
        $[2] = t;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3) {
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
                    lineNumber: 57,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t) {
        t6 = t("ads.createStepTwo.imageFormatHint");
        $[7] = t;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t5 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `border border-dashed rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${adImagePreview ? "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700" : errors.image ? "border-red-500 bg-red-50/20 dark:bg-red-950/10" : "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-teal-500/60"}`;
    const t10 = !!errors.image || undefined;
    let t11;
    if ($[14] !== adImagePreview || $[15] !== t) {
        t11 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: t("ads.form.adPreview"),
                    className: "max-h-36 w-auto mx-auto object-contain rounded-md border border-neutral-200 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 92,
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
                        children: t("ads.createStepTwo.changeImage")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                        lineNumber: 92,
                        columnNumber: 267
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 92,
                    columnNumber: 243
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 92,
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
                        lineNumber: 92,
                        columnNumber: 700
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 92,
                    columnNumber: 550
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-800 dark:text-neutral-200 font-medium",
                    children: t("ads.createStepTwo.clickToUpload")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 92,
                    columnNumber: 736
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-neutral-400 mt-0.5",
                    children: t("ads.createStepTwo.aspectRatioHint")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
                    lineNumber: 92,
                    columnNumber: 852
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 92,
            columnNumber: 501
        }, this);
        $[14] = adImagePreview;
        $[15] = t;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== handleImageUpload) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[17] = handleImageUpload;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t12 || $[22] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: _CreativeAssetSectionDivOnClick,
            onKeyDown: _CreativeAssetSectionDivOnKeyDown,
            role: "button",
            tabIndex: 0,
            "aria-invalid": t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t9;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== errors.image || $[25] !== t) {
        t14 = errors.image ? String(errors.image.message || t("ads.createStepTwo.imageRequired")) : undefined;
        $[24] = errors.image;
        $[25] = t;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t14
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t13 || $[30] !== t15 || $[31] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t8,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/CreativeAssetSection.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
        $[31] = t8;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    return t16;
}
_s(CreativeAssetSection, "aXsgjfGuYUfkfhzW7IDWSceHqr4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c = CreativeAssetSection;
function _CreativeAssetSectionButtonOnClick(e_0) {
    e_0.stopPropagation();
    document.getElementById("ad-image-upload")?.click();
}
function _CreativeAssetSectionDivOnKeyDown(e) {
    if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        document.getElementById("ad-image-upload")?.click();
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer group h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#008081] data-[state=checked]:border-[#008081] data-[state=checked]:text-white data-[state=indeterminate]:bg-[#008081] data-[state=indeterminate]:border-[#008081] data-[state=indeterminate]:text-white", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-4 w-4 group-data-[state=indeterminate]:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/checkbox.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                    className: "hidden h-3.5 w-3.5 group-data-[state=indeterminate]:block"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/checkbox.tsx",
                    lineNumber: 25,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
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
function ContentFeaturesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(116);
    if ($[0] !== "81cade8823335e0c9aa661433cec73cd110e039aa9083a6f85119bc636169ffe") {
        for(let $i = 0; $i < 116; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "81cade8823335e0c9aa661433cec73cd110e039aa9083a6f85119bc636169ffe";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[11] !== t) {
        t6 = t("ads.createStepTwo.badgeHandover");
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== handover || $[14] !== t6) {
        t7 = {
            name: "handover",
            label: t6,
            value: handover
        };
        $[13] = handover;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t) {
        t8 = t("ads.createStepTwo.badgeDeveloper");
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== developer || $[19] !== t8) {
        t9 = {
            name: "developer",
            label: t8,
            value: developer
        };
        $[18] = developer;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t) {
        t10 = t("ads.createStepTwo.badgePrice");
        $[21] = t;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== price || $[24] !== t10) {
        t11 = {
            name: "price",
            label: t10,
            value: price
        };
        $[23] = price;
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t) {
        t12 = t("ads.createStepTwo.badgeRating");
        $[26] = t;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== rate || $[29] !== t12) {
        t13 = {
            name: "rate",
            label: t12,
            value: rate
        };
        $[28] = rate;
        $[29] = t12;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t11 || $[32] !== t13 || $[33] !== t7 || $[34] !== t9) {
        t14 = [
            t7,
            t9,
            t11,
            t13
        ];
        $[31] = t11;
        $[32] = t13;
        $[33] = t7;
        $[34] = t9;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    const badges = t14;
    let t15;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== t) {
        t16 = t("ads.createStepTwo.adCopyAndFeatures");
        $[37] = t;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                    lineNumber: 204,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t) {
        t18 = t("ads.createStepTwo.shortDescription");
        $[41] = t;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t18,
                " ",
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[44] = t18;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    const t21 = description || "";
    const t22 = !!errors.description;
    let t23;
    if ($[46] !== clearErrors || $[47] !== setValue) {
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
        $[46] = clearErrors;
        $[47] = setValue;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t21 || $[50] !== t22 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RichTextEditor"], {
            content: t21,
            error: t22,
            onChange: t23
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t22;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== errors.description || $[54] !== t) {
        t25 = errors.description ? String(errors.description.message || t("ads.createStepTwo.descriptionRequired")) : undefined;
        $[53] = errors.description;
        $[54] = t;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t25
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t20 || $[59] !== t24 || $[60] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[58] = t20;
        $[59] = t24;
        $[60] = t26;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t) {
        t28 = t("ads.createStepTwo.displayBadges");
        $[62] = t;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[64] = t28;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] !== badges || $[67] !== setValue) {
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
                                lineNumber: 311,
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
                                lineNumber: 311,
                                columnNumber: 389
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
                        lineNumber: 311,
                        columnNumber: 57
                    }, this)
            }["ContentFeaturesSection[badges.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[66] = badges;
        $[67] = setValue;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== t29 || $[70] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[69] = t29;
        $[70] = t30;
        $[71] = t31;
    } else {
        t31 = $[71];
    }
    let t32;
    if ($[72] !== t) {
        t32 = t("ads.createStepTwo.ctaButtonLabel");
        $[72] = t;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    let t33;
    if ($[74] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[74] = t32;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== t) {
        t34 = t("ads.createStepTwo.ctaButtonPlaceholder");
        $[76] = t;
        $[77] = t34;
    } else {
        t34 = $[77];
    }
    let t35;
    if ($[78] !== register) {
        t35 = register("ctaButtonText");
        $[78] = register;
        $[79] = t35;
    } else {
        t35 = $[79];
    }
    let t36;
    if ($[80] !== t34 || $[81] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t34,
            ...t35,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[80] = t34;
        $[81] = t35;
        $[82] = t36;
    } else {
        t36 = $[82];
    }
    let t37;
    if ($[83] !== t33 || $[84] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[83] = t33;
        $[84] = t36;
        $[85] = t37;
    } else {
        t37 = $[85];
    }
    let t38;
    if ($[86] !== t) {
        t38 = t("ads.createStepTwo.ctaTargetUrl");
        $[86] = t;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[88] = t38;
        $[89] = t39;
    } else {
        t39 = $[89];
    }
    let t40;
    if ($[90] !== t) {
        t40 = t("ads.createStepTwo.ctaUrlPlaceholder");
        $[90] = t;
        $[91] = t40;
    } else {
        t40 = $[91];
    }
    let t41;
    if ($[92] !== register) {
        t41 = register("ctaUrl");
        $[92] = register;
        $[93] = t41;
    } else {
        t41 = $[93];
    }
    const t42 = !!errors.ctaUrl;
    const t43 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.ctaUrl ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t44;
    if ($[94] !== t40 || $[95] !== t41 || $[96] !== t42 || $[97] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t40,
            dir: "ltr",
            ...t41,
            error: t42,
            className: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[94] = t40;
        $[95] = t41;
        $[96] = t42;
        $[97] = t43;
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    if ($[99] !== errors.ctaUrl || $[100] !== t) {
        t45 = errors.ctaUrl ? String(errors.ctaUrl.message || t("ads.createStepTwo.ctaUrlInvalid")) : undefined;
        $[99] = errors.ctaUrl;
        $[100] = t;
        $[101] = t45;
    } else {
        t45 = $[101];
    }
    let t46;
    if ($[102] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[102] = t45;
        $[103] = t46;
    } else {
        t46 = $[103];
    }
    let t47;
    if ($[104] !== t39 || $[105] !== t44 || $[106] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                t44,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[104] = t39;
        $[105] = t44;
        $[106] = t46;
        $[107] = t47;
    } else {
        t47 = $[107];
    }
    let t48;
    if ($[108] !== t37 || $[109] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t37,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[108] = t37;
        $[109] = t47;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] !== t17 || $[112] !== t27 || $[113] !== t31 || $[114] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t17,
                t27,
                t31,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-components/step-two/ContentFeaturesSection.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[111] = t17;
        $[112] = t27;
        $[113] = t31;
        $[114] = t48;
        $[115] = t49;
    } else {
        t49 = $[115];
    }
    return t49;
}
_s(ContentFeaturesSection, "EGTGrqnxeDZLMFPpfG+9jgkpECw=", false, function() {
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
    if ($[0] !== "79cf9a6fe759be0bbbc15a0ea7ef3bed5acf2804a781fdb0e292c8f3dffb01a8") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79cf9a6fe759be0bbbc15a0ea7ef3bed5acf2804a781fdb0e292c8f3dffb01a8";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAdDateValidation(startDate, endDate, isOpen) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "465236edcf207f891aaf49fcddbe0fc37c42c6a395c1a5f4126857608bf67220") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "465236edcf207f891aaf49fcddbe0fc37c42c6a395c1a5f4126857608bf67220";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[2] !== t) {
        t1 = ({
            "useAdDateValidation[validateDateTimeRange]": (start, end)=>{
                if (start && !isValidDateFormat(start)) {
                    setDateErrors({
                        "useAdDateValidation[validateDateTimeRange > setDateErrors()]": (prev)=>({
                                ...prev,
                                startDate: t("ads.form.dateFormatInvalid"),
                                general: undefined
                            })
                    }["useAdDateValidation[validateDateTimeRange > setDateErrors()]"]);
                    return false;
                }
                if (end && !isValidDateFormat(end)) {
                    setDateErrors({
                        "useAdDateValidation[validateDateTimeRange > setDateErrors()]": (prev_0)=>({
                                ...prev_0,
                                endDate: t("ads.form.dateFormatInvalid"),
                                general: undefined
                            })
                    }["useAdDateValidation[validateDateTimeRange > setDateErrors()]"]);
                    return false;
                }
                if (!start) {
                    setDateErrors({
                        "useAdDateValidation[validateDateTimeRange > setDateErrors()]": (prev_1)=>({
                                ...prev_1,
                                startDate: t("ads.createStepOne.startDateRequired"),
                                general: undefined
                            })
                    }["useAdDateValidation[validateDateTimeRange > setDateErrors()]"]);
                    return false;
                }
                setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors);
                if (!end) {
                    setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors2);
                    return true;
                }
                const startDateTime = new Date(convertToUTCDateTime(start, false));
                const endDateTime = new Date(convertToUTCDateTime(end, true));
                if (startDateTime >= endDateTime) {
                    setDateErrors({
                        "useAdDateValidation[validateDateTimeRange > setDateErrors()]": (prev_4)=>({
                                ...prev_4,
                                endDate: t("ads.form.endAfterStart"),
                                general: t("ads.form.endAfterStartHint")
                            })
                    }["useAdDateValidation[validateDateTimeRange > setDateErrors()]"]);
                    return false;
                }
                setDateErrors(_useAdDateValidationValidateDateTimeRangeSetDateErrors3);
                return true;
            }
        })["useAdDateValidation[validateDateTimeRange]"];
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const validateDateTimeRange = t1;
    let t2;
    let t3;
    if ($[4] !== endDate || $[5] !== startDate || $[6] !== validateDateTimeRange) {
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
        $[4] = endDate;
        $[5] = startDate;
        $[6] = validateDateTimeRange;
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[9] !== isOpen) {
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
        $[9] = isOpen;
        $[10] = t4;
        $[11] = t5;
    } else {
        t4 = $[10];
        t5 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[12] !== dateErrors || $[13] !== validateDateTimeRange) {
        t6 = {
            dateErrors,
            validateDateTimeRange,
            setDateErrors
        };
        $[12] = dateErrors;
        $[13] = validateDateTimeRange;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_s(useAdDateValidation, "hVhutKd86jmF0ntmc8cHoOD6xtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
function _useAdDateValidationValidateDateTimeRangeSetDateErrors3(prev_5) {
    return {
        ...prev_5,
        endDate: undefined,
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors2(prev_3) {
    return {
        ...prev_3,
        endDate: undefined,
        general: undefined
    };
}
function _useAdDateValidationValidateDateTimeRangeSetDateErrors(prev_2) {
    return {
        ...prev_2,
        startDate: undefined
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
"[project]/src/lib/form-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROOT_SERVER_ERROR",
    ()=>ROOT_SERVER_ERROR,
    "applyApiFormErrors",
    ()=>applyApiFormErrors,
    "scrollToFirstInvalidField",
    ()=>scrollToFirstInvalidField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-errors.ts [app-client] (ecmascript)");
;
const ROOT_SERVER_ERROR = "root.server";
function applyApiFormErrors(error, { setError, getValues, t, fieldMap, fallbackMessage }) {
    const { fieldErrors, generalMessage, summary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseApiError"])(error, {
        t,
        fallbackMessage,
        fields: Object.keys(getValues() ?? {}),
        fieldMap
    });
    Object.entries(fieldErrors).forEach(([field, message])=>{
        setError(field, {
            type: "server",
            message
        });
    });
    if (generalMessage) {
        setError(ROOT_SERVER_ERROR, {
            type: "server",
            message: generalMessage
        });
    }
    if (Object.keys(fieldErrors).length > 0 || generalMessage) {
        scrollToFirstInvalidField();
    }
    return {
        fieldErrorCount: Object.keys(fieldErrors).length,
        summary
    };
}
const INVALID_FIELD_SELECTOR = '[aria-invalid="true"], [data-field-error]';
const FOCUSABLE_SELECTOR = 'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), button:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])';
const TEXT_ENTRY_SELECTOR = 'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([disabled]), textarea:not([disabled]), [contenteditable="true"]';
function isRendered(el) {
    if (el.getClientRects().length === 0) return false;
    // Skips e.g. an editor's hidden tooltip input, which still has a box.
    return getComputedStyle(el).visibility !== "hidden";
}
/** Where to look for invalid fields: the form/dialog the event came from, else the open dialog, else the page. */ function resolveScope(origin) {
    // A form inside a tab that the invalid handler switched away from is no longer in the page.
    if (origin instanceof Element && origin.isConnected) {
        const scope = origin.closest("form") ?? origin.closest('[role="dialog"]');
        if (scope) return scope;
    }
    const dialogs = document.querySelectorAll('[role="dialog"][data-state="open"], [role="dialog"]:not([data-state])');
    return dialogs.length > 0 ? dialogs[dialogs.length - 1] : document;
}
/** The element to focus for an invalid match: itself, a focusable inside it, or the input its error message belongs to. */ function focusTargetFor(el) {
    if (el.hasAttribute("data-form-error")) return null;
    if (el.hasAttribute("data-field-error")) {
        // The error message sits under its input: take the closest focusable before it in its field wrapper.
        let container = el.parentElement;
        for(let depth = 0; container && depth < 3; depth++, container = container.parentElement){
            const before = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((c)=>isRendered(c) && el.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_PRECEDING);
            if (before.length > 0) return before[before.length - 1];
        }
        return null;
    }
    if (el.matches(FOCUSABLE_SELECTOR)) return el;
    // An invalid wrapper (e.g. a rich text editor): prefer where you type over toolbar buttons.
    return Array.from(el.querySelectorAll(TEXT_ENTRY_SELECTOR)).find(isRendered) ?? Array.from(el.querySelectorAll(FOCUSABLE_SELECTOR)).find(isRendered) ?? null;
}
function scrollToFirstInvalidField(origin) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const attempt = (retriesLeft)=>{
        const scope = resolveScope(origin);
        const target = Array.from(scope.querySelectorAll(INVALID_FIELD_SELECTOR)).find(isRendered) ?? Array.from(scope.querySelectorAll("[data-form-error]")).find(isRendered);
        if (!target) {
            if (retriesLeft > 0) window.setTimeout(()=>attempt(retriesLeft - 1), 150);
            return;
        }
        const focusTarget = focusTargetFor(target);
        // Scroll the visible field (an sr-only file input has no useful position of its own).
        const scrollTarget = focusTarget && focusTarget.getBoundingClientRect().width > 1 ? focusTarget : target;
        scrollTarget.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        focusTarget?.focus({
            preventScroll: true
        });
    };
    requestAnimationFrame(()=>requestAnimationFrame(()=>attempt(2)));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-form.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForm",
    ()=>useForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/form-utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PATCHED = Symbol("scrollToFirstError");
function useForm(props) {
    _s();
    // react-hook-form's own focus follows registration order and skips Controller fields.
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        shouldFocusError: false,
        ...props
    });
    // The returned object is the same on every render, so patch it once.
    const patched = form;
    if (!patched[PATCHED]) {
        const originalHandleSubmit = form.handleSubmit;
        form.handleSubmit = (onValid, onInvalid)=>originalHandleSubmit(onValid, async (errors, event)=>{
                await onInvalid?.(errors, event);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])(event?.target ?? null);
            });
        patched[PATCHED] = true;
    }
    return form;
}
_s(useForm, "ep7pIy5MMiSYHQ/mN7Fc2azc5O8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AD_CTA_LABEL_MAX_LENGTH",
    ()=>AD_CTA_LABEL_MAX_LENGTH,
    "AD_DESCRIPTION_MAX_LENGTH",
    ()=>AD_DESCRIPTION_MAX_LENGTH,
    "AD_FIELD_MAP",
    ()=>AD_FIELD_MAP,
    "AD_IMAGE_MAX_SIZE",
    ()=>AD_IMAGE_MAX_SIZE,
    "AD_IMAGE_TYPES",
    ()=>AD_IMAGE_TYPES,
    "AD_MODAL_FIELD_MAP",
    ()=>AD_MODAL_FIELD_MAP,
    "AD_NAME_MAX_LENGTH",
    ()=>AD_NAME_MAX_LENGTH,
    "AD_TITLE_MAX_LENGTH",
    ()=>AD_TITLE_MAX_LENGTH,
    "getAdImageError",
    ()=>getAdImageError,
    "isValidAdUrl",
    ()=>isValidAdUrl
]);
const AD_NAME_MAX_LENGTH = 255;
const AD_TITLE_MAX_LENGTH = 255;
const AD_DESCRIPTION_MAX_LENGTH = 2000;
const AD_CTA_LABEL_MAX_LENGTH = 255;
const AD_IMAGE_MAX_SIZE = 2 * 1024 * 1024;
const AD_IMAGE_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
];
const AD_FIELD_MAP = {
    "campaign.name": "campaignName",
    "campaign[name]": "campaignName",
    "campaign.title": "campaignName",
    "campaign[title]": "campaignName",
    "campaign.start_at": "startDate",
    "campaign[start_at]": "startDate",
    start_at: "startDate",
    "campaign.end_at": "endDate",
    "campaign[end_at]": "endDate",
    end_at: "endDate",
    "campaign.status": "status",
    "campaign[status]": "status",
    "campaign.developer_id": "developerId",
    "campaign[developer_id]": "developerId",
    developer_id: "developerId",
    "placement.platform": "platform",
    "placement[platform]": "platform",
    "placement.location": "location",
    "placement[location]": "location",
    "placement.format": "type",
    "placement[format]": "type",
    "placement.billing_unit": "billing_unit",
    "placement[billing_unit]": "billing_unit",
    "placement.width": "width",
    "placement[width]": "width",
    "placement.position": "position",
    "placement[position]": "position",
    country_id: "country",
    cta_url: "ctaUrl",
    cta_label: "ctaButtonText",
    entity_type: "linkTo",
    entity_id: "projectId",
    subtitle: "description",
    weight: "priority",
    image: "image",
    image_url: "image"
};
const AD_MODAL_FIELD_MAP = {
    ...AD_FIELD_MAP,
    "campaign.name": "title",
    "campaign[name]": "title",
    "campaign.title": "title",
    "campaign[title]": "title"
};
function isValidAdUrl(value) {
    const trimmed = (value || "").trim();
    if (!trimmed || /\s/.test(trimmed)) return false;
    const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
        const url = new URL(withScheme);
        return /^https?:$/.test(url.protocol) && url.hostname.includes(".");
    } catch  {
        return false;
    }
}
function getAdImageError(file, t) {
    if (file.type && !AD_IMAGE_TYPES.includes(file.type.toLowerCase())) {
        return t("ads.form.imageTypeInvalid");
    }
    if (!file.type && !/\.(png|jpe?g|webp)$/i.test(file.name)) {
        return t("ads.form.imageTypeInvalid");
    }
    if (file.size > AD_IMAGE_MAX_SIZE) {
        return t("ads.form.imageTooLarge");
    }
    return null;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-form.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/form-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/toast-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
// Fields shown on step 1; a backend error on any of them sends the user back there.
const STEP_ONE_FIELDS = [
    "title",
    "type",
    "platform",
    "location",
    "country",
    "startDate",
    "endDate",
    "status",
    "priority",
    "billing_unit",
    "width",
    "position"
];
function useCreateAdForm({ isOpen, onClose, onSuccess, createAd, isCreating, session, validateDateTimeRange }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
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
    const { handleSubmit, setValue, clearErrors, setError, watch, reset, getValues } = methods;
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
                message: t("ads.createStepOne.adTitleRequired")
            });
            hasError = true;
        } else if (titleVal.trim().length < 2) {
            setError("title", {
                type: "minLength",
                message: t("ads.createStepOne.adTitleMinLength")
            });
            hasError = true;
        } else if (titleVal.trim().length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]) {
            setError("title", {
                type: "maxLength",
                message: t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]
                })
            });
            hasError = true;
        } else {
            clearErrors("title");
        }
        const locs = watch("location") || [];
        if (!locs || locs.length === 0) {
            setError("location", {
                type: "required",
                message: t("ads.form.placementLocationRequired")
            });
            hasError = true;
        } else {
            clearErrors("location");
        }
        const countryVal = watch("country");
        if (!countryVal) {
            setError("country", {
                type: "required",
                message: t("ads.createStepOne.countryRequired")
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
                message: t("ads.createStepOne.startDateRequired")
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
                message: t("ads.createStepOne.priorityRange")
            });
            hasError = true;
        } else {
            clearErrors("priority");
        }
        if (hasError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.form.step1Incomplete"), {
                id: "create-ad-toast"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
            return;
        }
        setStep(2);
    };
    const handleBack = ()=>{
        setStep(1);
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        // Reset so picking the same file again still triggers onChange.
        e.target.value = "";
        if (file) {
            const imageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdImageError"])(file, t);
            if (imageError) {
                setError("image", {
                    type: "validate",
                    message: imageError
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(imageError, {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.form.authRequired"), {
                    id: "create-ad-toast"
                });
                return;
            }
            let hasError_0 = false;
            // Developer is required only when linking to a project or property
            if ((data.linkTo === "PROJECTS" || data.linkTo === "PROPERTIES") && !data.developerId) {
                setError("developerId", {
                    type: "required",
                    message: t("ads.form.developerFirst")
                });
                hasError_0 = true;
            } else {
                clearErrors("developerId");
            }
            if (data.linkTo === "PROJECTS" && !data.projectId) {
                setError("projectId", {
                    type: "required",
                    message: t("ads.createStepTwo.projectRequired")
                });
                hasError_0 = true;
            } else if (data.linkTo === "PROPERTIES" && !data.projectId) {
                setError("projectId", {
                    type: "required",
                    message: t("ads.createStepTwo.propertyRequired")
                });
                hasError_0 = true;
            } else {
                clearErrors("projectId");
            }
            if (!adImage && !adImagePreview) {
                setError("image", {
                    type: "required",
                    message: t("ads.createStepTwo.imageRequired")
                });
                hasError_0 = true;
            } else {
                clearErrors("image");
            }
            const descText = (data.description || "").replace(/<[^>]*>/g, '').trim();
            if (!descText) {
                setError("description", {
                    type: "required",
                    message: t("ads.createStepTwo.descriptionRequired")
                });
                hasError_0 = true;
            } else if (descText.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_DESCRIPTION_MAX_LENGTH"]) {
                setError("description", {
                    type: "maxLength",
                    message: t("validation.max_length", {
                        max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_DESCRIPTION_MAX_LENGTH"]
                    })
                });
                hasError_0 = true;
            } else {
                clearErrors("description");
            }
            if (data.linkTo === "NONE" && data.ctaButtonText && !data.ctaUrl) {
                setError("ctaUrl", {
                    type: "required",
                    message: t("ads.form.ctaUrlRequired")
                });
                hasError_0 = true;
            } else if (data.linkTo === "URL" && !(data.ctaUrl || "").trim()) {
                setError("ctaUrl", {
                    type: "required",
                    message: t("validation.required")
                });
                hasError_0 = true;
            } else if (data.ctaUrl) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidAdUrl"])(data.ctaUrl)) {
                    clearErrors("ctaUrl");
                } else {
                    setError("ctaUrl", {
                        type: "pattern",
                        message: t("ads.createStepTwo.ctaUrlInvalid")
                    });
                    hasError_0 = true;
                }
            }
            if (hasError_0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.form.step2Incomplete"), {
                    id: "create-ad-toast"
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
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
            onSuccess?.();
            onClose();
        } catch (error) {
            const { summary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyApiFormErrors"])(error, {
                setError,
                getValues,
                t,
                fieldMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_MODAL_FIELD_MAP"],
                fallbackMessage: t("ads.messages.createFailed")
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(summary, {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
            });
            const errorKeys = Object.keys(methods.formState.errors);
            if (errorKeys.some((key)=>STEP_ONE_FIELDS.includes(key))) {
                setStep(1);
            }
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
_s(useCreateAdForm, "KrU3orbaUnaC7TVPXUPi+e6dxPI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
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
function CreateAdModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(140);
    if ($[0] !== "4eaf344125569d5d809ad37a4a15e4d9409ebcaa38e53c198a8565621e0ecdf3") {
        for(let $i = 0; $i < 140; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4eaf344125569d5d809ad37a4a15e4d9409ebcaa38e53c198a8565621e0ecdf3";
    }
    const { isOpen, onClose, onSuccess } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { createAd, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [developerSearch, setDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [developerPerPage, setDeveloperPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const debouncedDeveloperSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(developerSearch);
    const [projectSearch, setProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [propertySearch, setPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debouncedProjectSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(projectSearch);
    const debouncedPropertySearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(propertySearch);
    const developerScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tempStart, setTempStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tempEnd, setTempEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { dateErrors, validateDateTimeRange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$ad$2d$date$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdDateValidation"])(tempStart, tempEnd, isOpen);
    let t1;
    if ($[1] !== createAd || $[2] !== isCreating || $[3] !== isOpen || $[4] !== onClose || $[5] !== onSuccess || $[6] !== session || $[7] !== validateDateTimeRange) {
        t1 = {
            isOpen,
            onClose,
            onSuccess,
            createAd,
            isCreating,
            session,
            validateDateTimeRange
        };
        $[1] = createAd;
        $[2] = isCreating;
        $[3] = isOpen;
        $[4] = onClose;
        $[5] = onSuccess;
        $[6] = session;
        $[7] = validateDateTimeRange;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    const { methods, step, adImagePreview, getCountryId, handleDeveloperChange, handleNext, handleBack, handleImageUpload, onSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$hooks$2f$use$2d$create$2d$ad$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdForm"])(t1);
    const { watch, control } = methods;
    let t2;
    if ($[9] !== control) {
        t2 = {
            control,
            name: "startDate"
        };
        $[9] = control;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const watchStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t2);
    let t3;
    if ($[11] !== control) {
        t3 = {
            control,
            name: "endDate"
        };
        $[11] = control;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    const watchEndDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t3);
    let t4;
    if ($[13] !== control) {
        t4 = {
            control,
            name: "developerId"
        };
        $[13] = control;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    const watchDeveloperId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t4);
    let t5;
    if ($[15] !== control) {
        t5 = {
            control,
            name: "country"
        };
        $[15] = control;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const watchCountry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t5);
    let t6;
    let t7;
    if ($[17] !== watchEndDate || $[18] !== watchStartDate) {
        t6 = ({
            "CreateAdModal[useEffect()]": ()=>{
                setTempStart(watchStartDate || "");
                setTempEnd(watchEndDate || "");
            }
        })["CreateAdModal[useEffect()]"];
        t7 = [
            watchStartDate,
            watchEndDate
        ];
        $[17] = watchEndDate;
        $[18] = watchStartDate;
        $[19] = t6;
        $[20] = t7;
    } else {
        t6 = $[19];
        t7 = $[20];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const t8 = watchCountry || "";
    let t9;
    if ($[21] !== getCountryId || $[22] !== t8) {
        t9 = getCountryId(t8);
        $[21] = getCountryId;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    const { developers, projects, properties, loading: developersLoading, projectsLoading, propertiesLoading, developerHasMore, loadDevelopers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$ad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAdData"])(isOpen, debouncedDeveloperSearch, t9, debouncedProjectSearch, debouncedPropertySearch, watchDeveloperId);
    let t10;
    let t11;
    if ($[24] !== developerHasMore || $[25] !== developerPerPage || $[26] !== developersLoading || $[27] !== loadDevelopers) {
        t10 = ({
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
        t11 = [
            developerHasMore,
            developersLoading,
            developerPerPage,
            loadDevelopers
        ];
        $[24] = developerHasMore;
        $[25] = developerPerPage;
        $[26] = developersLoading;
        $[27] = loadDevelopers;
        $[28] = t10;
        $[29] = t11;
    } else {
        t10 = $[28];
        t11 = $[29];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[30] !== watch) {
        t12 = watch("linkTo");
        $[30] = watch;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const linkToValue = t12;
    let t13;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "CreateAdModal[useEffect()]": ()=>{
                setProjectSearch("");
                setPropertySearch("");
            }
        })["CreateAdModal[useEffect()]"];
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== linkToValue) {
        t14 = [
            linkToValue
        ];
        $[33] = linkToValue;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t13, t14);
    let t15;
    if ($[35] !== isCreating || $[36] !== onClose) {
        t15 = ({
            "CreateAdModal[<Modal>.onClose]": ()=>{
                if (!isCreating) {
                    onClose();
                }
            }
        })["CreateAdModal[<Modal>.onClose]"];
        $[35] = isCreating;
        $[36] = onClose;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                lineNumber: 266,
                columnNumber: 191
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== t) {
        t17 = t("ads.createModal.title");
        $[39] = t;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== step || $[44] !== t) {
        t19 = step === 1 ? t("ads.createModal.step1Subtitle") : t("ads.createModal.step2Subtitle");
        $[43] = step;
        $[44] = t;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-neutral-500 dark:text-neutral-400 font-normal",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== t18 || $[49] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t18,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                    lineNumber: 306,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[48] = t18;
        $[49] = t20;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    const t22 = `h-2 w-7 rounded-full transition-all duration-300 ${step === 1 ? "bg-teal-600" : "bg-teal-200 dark:bg-teal-900"}`;
    let t23;
    if ($[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t22
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    const t24 = `h-2 w-7 rounded-full transition-all duration-300 ${step === 2 ? "bg-teal-600" : "bg-gray-200 dark:bg-neutral-700"}`;
    let t25;
    if ($[53] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t24
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t23 || $[56] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[55] = t23;
        $[56] = t25;
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    const t27 = isAr ? `الخطوة ${step} من 2` : `Step ${step} of 2`;
    let t28;
    if ($[58] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500 dark:text-gray-400 font-medium",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[58] = t27;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== t26 || $[61] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[60] = t26;
        $[61] = t28;
        $[62] = t29;
    } else {
        t29 = $[62];
    }
    let t30;
    if ($[63] !== handleBack || $[64] !== isCreating || $[65] !== onClose || $[66] !== step || $[67] !== t) {
        t30 = step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: handleBack,
            disabled: isCreating,
            className: "gap-1.5 h-9 text-xs sm:text-sm font-medium border-gray-200 dark:border-neutral-700",
            children: t("ads.createModal.back")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 360,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: isCreating,
            className: "h-9 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 border-gray-200 dark:border-neutral-700",
            children: t("ads.createModal.cancel")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 360,
            columnNumber: 227
        }, this);
        $[63] = handleBack;
        $[64] = isCreating;
        $[65] = onClose;
        $[66] = step;
        $[67] = t;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== handleNext || $[70] !== isCreating || $[71] !== onSubmit || $[72] !== step || $[73] !== t) {
        t31 = step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5 h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20",
            onClick: handleNext,
            children: t("ads.createModal.continueToCreative")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 372,
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
                        lineNumber: 372,
                        columnNumber: 433
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t("ads.createModal.publishingAd")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                        lineNumber: 372,
                        columnNumber: 542
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t("ads.createModal.publishAd")
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
                lineNumber: 372,
                columnNumber: 596
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 372,
            columnNumber: 238
        }, this);
        $[69] = handleNext;
        $[70] = isCreating;
        $[71] = onSubmit;
        $[72] = step;
        $[73] = t;
        $[74] = t31;
    } else {
        t31 = $[74];
    }
    let t32;
    if ($[75] !== t30 || $[76] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2.5",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[75] = t30;
        $[76] = t31;
        $[77] = t32;
    } else {
        t32 = $[77];
    }
    let t33;
    if ($[78] !== t29 || $[79] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between w-full pt-2",
            children: [
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[78] = t29;
        $[79] = t32;
        $[80] = t33;
    } else {
        t33 = $[80];
    }
    const t34 = methods.formState.errors.root?.server?.message;
    let t35;
    if ($[81] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormErrorAlert"], {
            message: t34
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[81] = t34;
        $[82] = t35;
    } else {
        t35 = $[82];
    }
    let t36;
    if ($[83] !== handleBack || $[84] !== step) {
        t36 = ({
            "CreateAdModal[<button>.onClick]": ()=>{
                if (step === 2) {
                    handleBack();
                }
            }
        })["CreateAdModal[<button>.onClick]"];
        $[83] = handleBack;
        $[84] = step;
        $[85] = t36;
    } else {
        t36 = $[85];
    }
    const t37 = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${step === 1 ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t38;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold",
            children: "1"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[86] = t38;
    } else {
        t38 = $[86];
    }
    let t39;
    if ($[87] !== t) {
        t39 = t("ads.createModal.tabPlacement");
        $[87] = t;
        $[88] = t39;
    } else {
        t39 = $[88];
    }
    let t40;
    if ($[89] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[89] = t39;
        $[90] = t40;
    } else {
        t40 = $[90];
    }
    let t41;
    if ($[91] !== t36 || $[92] !== t37 || $[93] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t36,
            className: t37,
            children: [
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[91] = t36;
        $[92] = t37;
        $[93] = t40;
        $[94] = t41;
    } else {
        t41 = $[94];
    }
    let t42;
    if ($[95] !== handleNext || $[96] !== step) {
        t42 = ({
            "CreateAdModal[<button>.onClick]": ()=>{
                if (step === 1) {
                    handleNext();
                }
            }
        })["CreateAdModal[<button>.onClick]"];
        $[95] = handleNext;
        $[96] = step;
        $[97] = t42;
    } else {
        t42 = $[97];
    }
    const t43 = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${step === 2 ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-400 shadow-xs border border-gray-200/50 dark:border-neutral-700/50" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t44;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-[11px] font-bold",
            children: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    if ($[99] !== t) {
        t45 = t("ads.createModal.tabCreative");
        $[99] = t;
        $[100] = t45;
    } else {
        t45 = $[100];
    }
    let t46;
    if ($[101] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[101] = t45;
        $[102] = t46;
    } else {
        t46 = $[102];
    }
    let t47;
    if ($[103] !== t42 || $[104] !== t43 || $[105] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t42,
            className: t43,
            children: [
                t44,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[103] = t42;
        $[104] = t43;
        $[105] = t46;
        $[106] = t47;
    } else {
        t47 = $[106];
    }
    let t48;
    if ($[107] !== t41 || $[108] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 p-1.5 bg-gray-100/70 dark:bg-neutral-800/60 rounded-xl border border-gray-200/60 dark:border-neutral-700/60 mb-5",
            children: [
                t41,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[107] = t41;
        $[108] = t47;
        $[109] = t48;
    } else {
        t48 = $[109];
    }
    let t49;
    if ($[110] !== adImagePreview || $[111] !== dateErrors || $[112] !== developerHasMore || $[113] !== developerSearch || $[114] !== developers || $[115] !== developersLoading || $[116] !== handleDeveloperChange || $[117] !== handleImageUpload || $[118] !== projectSearch || $[119] !== projects || $[120] !== projectsLoading || $[121] !== properties || $[122] !== propertiesLoading || $[123] !== propertySearch || $[124] !== step || $[125] !== validateDateTimeRange) {
        t49 = step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$create$2d$ad$2d$components$2f$CreateAdStepOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAdStepOne"], {
            dateErrors: dateErrors,
            validateDateTimeRange: validateDateTimeRange
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 518,
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
            lineNumber: 518,
            columnNumber: 116
        }, this);
        $[110] = adImagePreview;
        $[111] = dateErrors;
        $[112] = developerHasMore;
        $[113] = developerSearch;
        $[114] = developers;
        $[115] = developersLoading;
        $[116] = handleDeveloperChange;
        $[117] = handleImageUpload;
        $[118] = projectSearch;
        $[119] = projects;
        $[120] = projectsLoading;
        $[121] = properties;
        $[122] = propertiesLoading;
        $[123] = propertySearch;
        $[124] = step;
        $[125] = validateDateTimeRange;
        $[126] = t49;
    } else {
        t49 = $[126];
    }
    let t50;
    if ($[127] !== t35 || $[128] !== t48 || $[129] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 max-h-[68vh] overflow-y-auto pe-1 sm:pe-2",
            children: [
                t35,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[127] = t35;
        $[128] = t48;
        $[129] = t49;
        $[130] = t50;
    } else {
        t50 = $[130];
    }
    let t51;
    if ($[131] !== methods || $[132] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
            ...methods,
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[131] = methods;
        $[132] = t50;
        $[133] = t51;
    } else {
        t51 = $[133];
    }
    let t52;
    if ($[134] !== isOpen || $[135] !== t15 || $[136] !== t21 || $[137] !== t33 || $[138] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: t15,
            title: t21,
            size: "2xl",
            showCloseButton: true,
            footer: t33,
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/create-ad-modal.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[134] = isOpen;
        $[135] = t15;
        $[136] = t21;
        $[137] = t33;
        $[138] = t51;
        $[139] = t52;
    } else {
        t52 = $[139];
    }
    return t52;
}
_s(CreateAdModal, "n6IDSRvevBwUZi56xU3Sj3QMQWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
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

//# sourceMappingURL=src_ca8d2ce4._.js.map