module.exports = [
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, error, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        "data-slot": "select-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-none ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-slate-200 text-start [&>span]:truncate [&>span]:block [&>span]:w-full", className, error && "border-red-500 dark:border-red-500 focus:ring-red-500"),
        "aria-invalid": error || undefined,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50 shrink-0 ms-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-popover-foreground dark:text-slate-200 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 104,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none focus:bg-gray-100 dark:focus:bg-slate-700 focus:text-accent-foreground dark:focus:text-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute end-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 134,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}),
"[project]/src/app/admin/home/components/DashboardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DashboardHeader({ dateRange, setDateRange, onExport, onRefresh, isRefreshing = false }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900 dark:text-white",
                        children: t("dashboardHome.title")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-teal-600 dark:text-teal-400 mt-0.5",
                        children: t("dashboardHome.subtitle")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: dateRange,
                        onValueChange: setDateRange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-[160px] bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 hover:bg-gray-50 text-gray-700 dark:text-slate-200 text-sm h-9 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "all",
                                        children: t("dashboardHome.dateRanges.allTime")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "last30",
                                        children: t("dashboardHome.dateRanges.last30Days")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "last7",
                                        children: t("dashboardHome.dateRanges.last7Days")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9",
                        onClick: onExport,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            t("dashboardHome.export")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9 transition-all hover:bg-gray-50 active:scale-95",
                        onClick: onRefresh,
                        disabled: isRefreshing,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: `h-4 w-4 ${isRefreshing ? "animate-spin text-teal-600" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            isRefreshing ? t("dashboardHome.refreshing") : t("dashboardHome.refresh")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/home/components/StatsCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const StatsCards = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function StatsCards({ stats }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: stats.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-gray-500",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                className: "h-4 w-4 text-gray-300 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-gray-900 leading-tight",
                        children: card.value
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/lib/exports/export-developers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "developersExportToCsv",
    ()=>developersExportToCsv,
    "developersExportToExcel",
    ()=>developersExportToExcel,
    "developersExportToPDF",
    ()=>developersExportToPDF
]);
const developersExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Developers Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    doc.setFillColor(13, 148, 136); // teal-600
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    const cols = [
        {
            header: "Developer Name",
            key: "developer_name",
            width: 55
        },
        {
            header: "Email",
            key: "email",
            width: 50
        },
        {
            header: "Phone Number",
            key: "phone_number",
            width: 35
        },
        {
            header: "Website",
            key: "website",
            width: 45
        },
        {
            header: "Countries",
            key: "countries",
            width: 35
        },
        {
            header: "Projects",
            key: "projects_count",
            width: 25
        },
        {
            header: "Status",
            key: "status",
            width: 25
        }
    ];
    let xPos = 14;
    let yPos = 28;
    const rowHeight = 8;
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(243, 244, 246);
    doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    cols.forEach((col)=>{
        doc.text(col.header, xPos, yPos);
        xPos += col.width;
    });
    yPos += rowHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(31, 41, 55);
    data.forEach((d, rowIndex)=>{
        if (yPos + rowHeight > pageHeight - 15) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(243, 244, 246);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            let hX = 14;
            cols.forEach((col)=>{
                doc.text(col.header, hX, yPos);
                hX += col.width;
            });
            yPos += rowHeight;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(31, 41, 55);
        }
        if (rowIndex % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
        }
        xPos = 14;
        cols.forEach((col)=>{
            let val = d[col.key] ?? d[col.key.replace("developer_", "")] ?? d.name ?? "—";
            if (col.key === "status") {
                val = d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive";
            }
            if (typeof val === "object") val = JSON.stringify(val);
            const strVal = String(val);
            const truncated = strVal.length > 26 ? strVal.substring(0, 24) + "…" : strVal;
            doc.text(truncated, xPos, yPos);
            xPos += col.width;
        });
        yPos += rowHeight;
    });
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 6, {
            align: "center"
        });
    }
    doc.save("Developers_Report.pdf");
};
const developersExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "developer_id",
        "developer_name",
        "email",
        "phone_number",
        "website",
        "countries",
        "cities",
        "projects_count",
        "status"
    ];
    const header = [
        "ID",
        "Name",
        "Email",
        "Phone Number",
        "Website",
        "Countries",
        "Cities",
        "Projects Count",
        "Status"
    ].join(",");
    const rows = data.map((d)=>columns.map((col)=>{
            let val = d[col] ?? d[col.replace("developer_", "")] ?? "";
            if (col === "status") {
                val = d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive";
            }
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Developers_Report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const developersExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map((d)=>({
            "ID": d.developer_id ?? d.id ?? "N/A",
            "Developer Name": d.developer_name ?? d.name ?? "N/A",
            "Email": d.email ?? "N/A",
            "Phone Number": d.phone_number ?? d.contact ?? "N/A",
            "Website": d.website ?? "N/A",
            "Countries": d.countries ?? "N/A",
            "Cities": d.cities ?? "N/A",
            "Projects Count": d.projects_count ?? d.projects ?? 0,
            "Status": d.status === "active" || d.status === true || d.is_active ? "Active" : "Inactive",
            "Is Top": d.is_top === 1 || d.is_top === true ? "Yes" : "No"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Developers");
    XLSX.writeFile(workbook, "Developers_Report.xlsx");
};
}),
"[project]/src/lib/exports/export-projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsExportToCsv",
    ()=>projectsExportToCsv,
    "projectsExportToExcel",
    ()=>projectsExportToExcel,
    "projectsExportToPDF",
    ()=>projectsExportToPDF
]);
const projectsExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Projects Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    doc.setFillColor(13, 148, 136);
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    const cols = [
        {
            header: "Project Name",
            key: "project_name",
            width: 55
        },
        {
            header: "Type",
            key: "project_type",
            width: 35
        },
        {
            header: "Developer",
            key: "developer_name",
            width: 45
        },
        {
            header: "Status",
            key: "status",
            width: 30
        },
        {
            header: "Total Units",
            key: "total_units",
            width: 25
        },
        {
            header: "Available",
            key: "available_units",
            width: 25
        },
        {
            header: "City",
            key: "city_name",
            width: 30
        },
        {
            header: "Price Range",
            key: "price_range",
            width: 35
        }
    ];
    let xPos = 14;
    let yPos = 28;
    const rowHeight = 8;
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(243, 244, 246);
    doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    cols.forEach((col)=>{
        doc.text(col.header, xPos, yPos);
        xPos += col.width;
    });
    yPos += rowHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(31, 41, 55);
    data.forEach((p, rowIndex)=>{
        if (yPos + rowHeight > pageHeight - 15) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(243, 244, 246);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(55, 65, 81);
            let hX = 14;
            cols.forEach((col)=>{
                doc.text(col.header, hX, yPos);
                hX += col.width;
            });
            yPos += rowHeight;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(31, 41, 55);
        }
        if (rowIndex % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(14, yPos - 5, doc.internal.pageSize.width - 28, rowHeight, "F");
        }
        xPos = 14;
        cols.forEach((col)=>{
            let val = p[col.key] ?? p.project?.[col.key] ?? "—";
            if (typeof val === "object") val = JSON.stringify(val);
            const strVal = String(val);
            const truncated = strVal.length > 28 ? strVal.substring(0, 26) + "…" : strVal;
            doc.text(truncated, xPos, yPos);
            xPos += col.width;
        });
        yPos += rowHeight;
    });
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 6, {
            align: "center"
        });
    }
    doc.save("Projects_Report.pdf");
};
const projectsExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "project_id",
        "project_name",
        "project_type",
        "developer_name",
        "status",
        "is_active",
        "total_units",
        "available_units",
        "properties_count",
        "launch_date",
        "completion_date",
        "price_range",
        "price_range_SQ",
        "project_currency",
        "city_name",
        "country_name",
        "location_landmark",
        "project_size",
        "permit_no",
        "barcode",
        "slug",
        "created_at"
    ];
    const header = columns.join(",");
    const rows = data.map((p)=>columns.map((col)=>{
            let val = p[col] ?? "";
            if (col === "is_active") {
                val = p.is_active === 1 || p.is_active === true || p.is_active === "1" ? "Yes" : "No";
            }
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Projects_Report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const projectsExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map(({ project_id, project_name, project_type, total_units, available_units, status, launch_date, completion_date, price_range, price_range_SQ, description, project_size, phase, is_active, project_currency, permit_no, barcode, slug, properties_count, active_properties_count, available_properties_count, booked_properties_count, sold_properties_count, developer_name, city_name, country_name, country_currency, country_dimension_unit, location_landmark, created_at })=>({
            "Project ID": project_id ?? "N/A",
            "Project Name": project_name ?? "N/A",
            "Project Type": project_type ?? "N/A",
            "Developer": developer_name ?? "N/A",
            "Status": status ?? "N/A",
            "Is Active": is_active === 1 || is_active === true || is_active === "1" ? "Yes" : "No",
            "Total Units": total_units ?? "N/A",
            "Available Units": available_units ?? "N/A",
            "Properties Count": properties_count ?? 0,
            "Active Properties Count": active_properties_count ?? 0,
            "Available Properties Count": available_properties_count ?? 0,
            "Booked Properties Count": booked_properties_count ?? 0,
            "Sold Properties Count": sold_properties_count ?? 0,
            "Launch Date": launch_date ?? "N/A",
            "Completion Date": completion_date ?? "N/A",
            "Price Range": price_range ?? "N/A",
            "Price Range SQ": price_range_SQ ?? "N/A",
            "Project Currency": project_currency ?? "N/A",
            "Country Name": country_name ?? "N/A",
            "City Name": city_name ?? "N/A",
            "Location Landmark": location_landmark ?? "N/A",
            "Country Currency": country_currency ?? "N/A",
            "Country Dimension Unit": country_dimension_unit ?? "N/A",
            "Project Size": project_size ?? "N/A",
            "Description": description ? description.replace(/<[^>]*>?/gm, "") : "N/A",
            "Phase": phase ?? "N/A",
            "Permit No": permit_no ?? "N/A",
            "Barcode": barcode ?? "N/A",
            "Slug": slug ?? "N/A",
            "Created At": created_at ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "Projects_Report.xlsx");
};
}),
"[project]/src/lib/exports/export-templates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CitiesTemplate",
    ()=>CitiesTemplate,
    "ExpertsFilledTemplate",
    ()=>ExpertsFilledTemplate,
    "ExpertsTemplate",
    ()=>ExpertsTemplate,
    "ProjectsTemplate",
    ()=>ProjectsTemplate,
    "PropertiesFilledTemplate",
    ()=>PropertiesFilledTemplate,
    "PropertiesTemplate",
    ()=>PropertiesTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-ssr] (ecmascript)");
;
const ProjectsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const headers = [
        "project_id",
        "developer_id",
        "location_id",
        "project_name",
        "project_type",
        "total_units",
        "availabe_units",
        "launch_date",
        "completion_date",
        "status",
        "price_range",
        "price_range_SQ",
        "description"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");
    XLSX.writeFile(workbook, "Empty_Projects_Template.xlsx");
};
const PropertiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const headers = [
        "property_name",
        "property_no",
        "property_type_id",
        "property_subtype_id",
        "plot_size",
        "bua_size",
        "price",
        "size",
        "maid_room ",
        "finishing_status",
        "furnish_status",
        " bedrooms",
        "bathrooms",
        " parking_spaces",
        "building_name",
        "building_community",
        "building_commuinty_compelation_date",
        "description"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "Empty_Properties_Template.xlsx");
};
const PropertiesFilledTemplate = async (projectId, token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    let enrichedProperties = [];
    let projectName = "";
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/projects/${projectId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const resJson = await res.json();
        const data = await resJson.data;
        projectName = await data.project_name;
        const buildings = await data.buildings || [];
        const allProps = await data.properties || [];
        const props = allProps.filter((property)=>property.project_id === projectId || Number(property.project_id) === Number(projectId));
        enrichedProperties = props.map((property)=>{
            const building = buildings.find((b)=>b.building_id === property.building_id);
            return {
                ...property,
                building_name: building?.building_name || null,
                completion_date: building?.completion_date || null,
                built_type: building?.built_type || null
            };
        });
    } catch (error) {
        console.error(error);
    }
    const headers = [
        "property_name",
        "property_no",
        "property_type_id",
        "property_subtype_id",
        "plot_size",
        "bua_size",
        "price",
        "size",
        "maid_room ",
        "finishing_status",
        "furnish_status",
        " bedrooms",
        "bathrooms",
        " parking_spaces",
        "building_name",
        "building_community",
        "building_commuinty_compelation_date",
        "description"
    ];
    const rows = enrichedProperties.map((item)=>[
            item.property_name || "",
            item.property_no || "",
            item.propertytype == null ? "" : item.propertytype?.name || "",
            item.propertysubtype == null ? "" : item.propertysubtype?.name || "",
            item.plot_size || "",
            item.bua_size || "",
            item.price || "",
            item.size || "",
            item.maid_room || "",
            item.finishing_status || "",
            item.furnish_status || "",
            item.bedrooms || "",
            item.bathrooms || "",
            item.parking_spaces || "",
            item.building_name || "",
            item.built_type || "",
            item.completion_date || "",
            item.description
        ]);
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers,
        ...rows
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, `${projectName}_Properties_Template.xlsx`);
};
const ExpertsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const headers = [
        "display_name",
        "email",
        "phone_number",
        "title",
        "years_experience",
        "bio",
        "website",
        "linkedin",
        "specializations",
        "service_areas",
        "languages"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");
    XLSX.writeFile(workbook, "Empty_Experts_Template.xlsx");
};
const ExpertsFilledTemplate = async (token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    let experts = [];
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/experts?page=1&per_page=100`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const resJson = await res.json();
        experts = resJson.data || [];
    } catch (error) {
        console.error(error);
    }
    const headers = [
        "display_name",
        "email",
        "phone_number",
        "title",
        "years_experience",
        "bio",
        "website",
        "linkedin",
        "specializations",
        "service_areas",
        "languages"
    ];
    const rows = experts.map((item)=>[
            item.display_name || "",
            item.email || "",
            item.phone_number || "",
            item.title || "",
            item.years_experience || "",
            item.bio || "",
            item.website || "",
            item.linkedin || "",
            item.categories ? item.categories.join(", ") : "",
            item.countries ? item.countries.join(", ") : "",
            item.languages ? item.languages.map((l)=>l.name || l).join(", ") : ""
        ]);
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers,
        ...rows
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Experts");
    XLSX.writeFile(workbook, "Experts_Template_With_Data.xlsx");
};
const CitiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const headers = [
        "name",
        "state_id",
        "country_id",
        "status"
    ];
    const worksheet = XLSX.utils.aoa_to_sheet([
        headers
    ]);
    const columnWidths = headers.map((header)=>({
            wch: header.length + 5
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cities");
    XLSX.writeFile(workbook, "Empty_Cities_Template.xlsx");
};
}),
"[project]/src/lib/exports/export-activity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityExportToExcel",
    ()=>activityExportToExcel,
    "activityExportToPDF",
    ()=>activityExportToPDF
]);
const activityExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map((item)=>{
        const rawUserType = item.user_type || item.additional_info?.user_type;
        const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
        const userDisplay = item.user_name || item.user?.name || item.user?.email || formattedUserType || "N/A";
        return {
            ID: item.id || item.log_id || "N/A",
            User: userDisplay,
            Action: item.action || "N/A",
            "Entity Type": item.entity_type || "N/A",
            "IP Address": item.ip_address || "N/A",
            "Date & Time": item.created_at || "N/A"
        };
    });
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Activity Logs");
    XLSX.writeFile(workbook, "Activity_Logs.xlsx");
};
const activityExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Activity Logs Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 20;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach((item)=>{
        const { id, log_id, action, entity_type, ip_address, created_at } = item;
        const rawUserType = item.user_type || item.additional_info?.user_type;
        const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
        const user_name = item.user_name || item.user?.name || item.user?.email || formattedUserType || "N/A";
        const displayId = id || log_id || "N/A";
        if (yPos + 50 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(displayId.toString(), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`User:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(user_name, valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Action:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(action || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Entity Type:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(entity_type || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`IP Address:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(ip_address || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Date & Time:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(created_at || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Activity_Logs_Report.pdf");
};
}),
"[project]/src/lib/exports/export-locations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locationsExportToExcel",
    ()=>locationsExportToExcel,
    "locationsExportToPDF",
    ()=>locationsExportToPDF
]);
const locationsExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Locations Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 18;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 55;
    data.forEach(({ location_landmark, city_name, area_name, country_name, projects_count, created_at })=>{
        if (yPos + 60 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text("Landmark:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(location_landmark || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("City:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(city_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Area:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(area_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Country:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(country_name || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Projects:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(projects_count ?? 0), valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text("Created At:", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(String(created_at || "N/A"), valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Locations_Report.pdf");
};
const locationsExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map(({ location_landmark, city_name, area_name, country_name, projects_count, created_at })=>({
            Landmark: location_landmark ?? "N/A",
            City: city_name ?? "N/A",
            Area: area_name ?? "N/A",
            Country: country_name ?? "N/A",
            "Projects Count": projects_count ?? 0,
            "Created At": created_at ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Locations");
    XLSX.writeFile(workbook, "Locations_Report.xlsx");
};
}),
"[project]/src/lib/exports/export-bookings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardExportToExcel",
    ()=>dashboardExportToExcel
]);
const dashboardExportToExcel = async (statsData, bookingsData)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedStats = statsData.map((item)=>({
            Metric: item.title ?? "N/A",
            Value: item.value ?? "N/A",
            Comparison: item.change ?? "N/A",
            Trend: item.isPositive ? "Up" : "Down"
        }));
    const formattedBookings = bookingsData.map((item)=>({
            ID: item.id ?? "N/A",
            Name: item.name ?? "N/A",
            Property: item.property ?? "N/A",
            Unit: item.unit ?? "N/A",
            Amount: item.amount ?? "N/A",
            Status: item.status ?? "N/A",
            "Last Updated": item.lastUpdated ?? "N/A"
        }));
    const workbook = XLSX.utils.book_new();
    const worksheetStats = XLSX.utils.json_to_sheet(formattedStats);
    XLSX.utils.book_append_sheet(workbook, worksheetStats, "Overview Metrics");
    const worksheetBookings = XLSX.utils.json_to_sheet(formattedBookings);
    XLSX.utils.book_append_sheet(workbook, worksheetBookings, "Bookings");
    XLSX.writeFile(workbook, "Dashboard_Report.xlsx");
};
}),
"[project]/src/lib/exports/export-features.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuresExportToExcel",
    ()=>featuresExportToExcel,
    "featuresExportToPDF",
    ()=>featuresExportToPDF
]);
const featuresExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map((item)=>({
            ID: item.id ?? "N/A",
            "Feature Name": item.featureName ?? "N/A",
            "Is Amenity": item.isAmenity ? "Yes" : "No",
            Icon: item.icon ?? "N/A"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Features");
    XLSX.writeFile(workbook, "Features_Report.xlsx");
};
const featuresExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Features Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 15;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach(({ id, featureName, isAmenity, icon })=>{
        if (yPos + 40 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(id?.toString() || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Feature Name:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(featureName || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Is Amenity:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(isAmenity ? "Yes" : "No", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Icon:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(icon || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Features_Report.pdf");
};
}),
"[project]/src/lib/exports/export-areas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areasExportToExcel",
    ()=>areasExportToExcel,
    "areasExportToPDF",
    ()=>areasExportToPDF
]);
const areasExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map((item)=>({
            ID: item.area_id ?? "N/A",
            "Area Name": item.area_name ?? "N/A",
            Region: item.region ?? "N/A",
            Population: item.population ?? 0,
            "Major Landmarks": item.major_landmarks?.join(", ") ?? "N/A",
            Created: item.created_at ?? "N/A",
            Status: item.status ? "Active" : "Inactive"
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h]?.toString().length || 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Areas");
    XLSX.writeFile(workbook, "Areas_Report.xlsx");
};
const areasExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Areas Report", 14, 10);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPos = 25;
    const lineSpacing = 7;
    const cardMargin = 15;
    const pageHeight = doc.internal.pageSize.height;
    const valueXPos = 50;
    data.forEach(({ area_id, area_name, region, population, major_landmarks, created_at, status })=>{
        if (yPos + 50 > pageHeight) {
            doc.addPage();
            yPos = 25;
        }
        doc.setFont("helvetica", "bold");
        doc.text(`ID:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(area_id?.toString() || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Area Name:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(area_name || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Region:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(region || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Population:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(population?.toString() || "0", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Landmarks:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(major_landmarks?.join(", ") || "N/A", valueXPos, yPos);
        yPos += lineSpacing;
        doc.setFont("helvetica", "bold");
        doc.text(`Status:`, 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(status ? "Active" : "Inactive", valueXPos, yPos);
        yPos += lineSpacing;
        yPos += cardMargin;
    });
    doc.save("Areas_Report.pdf");
};
}),
"[project]/src/lib/exports/export-properties.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Excel ────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "propertiesExportToCsv",
    ()=>propertiesExportToCsv,
    "propertiesExportToExcel",
    ()=>propertiesExportToExcel,
    "propertiesExportToPdf",
    ()=>propertiesExportToPdf
]);
const propertiesExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript, async loader)");
    const formattedData = data.map((property)=>({
            property_name: property.property_name ?? "",
            property_no: property.property_no ?? "",
            property_type_id: property.propertytype?.id ?? property.property_type_id ?? "",
            property_subtype_id: property.propertysubtype?.id ?? property.property_subtype_id ?? "",
            project_id: property.project_id ?? "",
            location_id: property.location_id ?? "",
            building_id: property.building_id ?? "",
            plot_size: property.plot_size ?? "",
            bua_size: property.bua_size ?? "",
            maid_room: property.maid_room ? 1 : 0,
            status: property.status ?? "",
            furnish_status: property.furnish_status ?? "",
            finishing_status: property.finishing_status ?? "",
            price: property.price ?? "",
            size: property.size ?? "",
            bedrooms: property.bedrooms ?? 0,
            bathrooms: property.bathrooms ?? 0,
            parking_spaces: property.parking_spaces ?? 0,
            availability_status: property.availability_status ?? "",
            construction_status: property.construction_status ?? "",
            description: property.description ?? "",
            reference_listed: property.reference_listed ?? "",
            ownership_type: property.ownership_type ?? "",
            broker_license: property.broker_license ?? "",
            agent_license: property.agent_license ?? "",
            zone_name: property.zone_name ?? "",
            dld_permit_number: property.dld_permit_number ?? "",
            dld_barcode: property.dld_barcode ?? "",
            created_at: property.created_at ?? "",
            updated_at: property.updated_at ?? "",
            deleted_at: property.deleted_at ?? "",
            views_count: property.views_count ?? 0,
            is_active: property.is_active ? 1 : 0,
            plan_type: property.plan_type ?? "",
            slug: property.slug ?? ""
        }));
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    const header = Object.keys(formattedData[0] || {});
    const columnWidths = header.map((h)=>({
            wch: Math.max(h.length, ...formattedData.map((row)=>row[h] ? row[h].toString().length : 10)) + 2
        }));
    worksheet["!cols"] = columnWidths;
    worksheet["!freeze"] = {
        xSplit: 0,
        ySplit: 1
    };
    XLSX.utils.book_append_sheet(workbook, worksheet, "Properties");
    XLSX.writeFile(workbook, "Properties_Export.xlsx");
};
const propertiesExportToCsv = (data)=>{
    if (!data.length) return;
    const columns = [
        "property_name",
        "property_no",
        "status",
        "price",
        "size",
        "bedrooms",
        "bathrooms",
        "parking_spaces",
        "floor",
        "availability_status",
        "construction_status",
        "furnish_status",
        "finishing_status",
        "plan_type",
        "ownership_type",
        "zone_name",
        "dld_permit_number",
        "slug",
        "views_count",
        "created_at",
        "updated_at"
    ];
    const header = columns.join(",");
    const rows = data.map((p)=>columns.map((col)=>{
            const val = p[col] ?? "";
            const str = String(val).replace(/"/g, '""');
            return `"${str}"`;
        }).join(","));
    const csvContent = [
        header,
        ...rows
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Properties_Export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const propertiesExportToPdf = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript, async loader)");
    const doc = new jsPDF({
        orientation: "landscape"
    });
    const title = "Properties Report";
    const generated = `Generated: ${new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })}`;
    // Header bar
    doc.setFillColor(13, 148, 136); // teal-600
    doc.rect(0, 0, doc.internal.pageSize.width, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(generated, doc.internal.pageSize.width - 14, 12, {
        align: "right"
    });
    doc.setTextColor(0, 0, 0);
    // Table columns
    const cols = [
        {
            header: "#",
            key: "index",
            width: 10
        },
        {
            header: "Property Name",
            key: "property_name",
            width: 45
        },
        {
            header: "Unit No.",
            key: "property_no",
            width: 22
        },
        {
            header: "Type",
            key: "type",
            width: 28
        },
        {
            header: "Status",
            key: "status",
            width: 22
        },
        {
            header: "Price",
            key: "price",
            width: 28
        },
        {
            header: "Size (m²)",
            key: "size",
            width: 22
        },
        {
            header: "Beds",
            key: "bedrooms",
            width: 14
        },
        {
            header: "Baths",
            key: "bathrooms",
            width: 14
        },
        {
            header: "Floor",
            key: "floor_number",
            width: 14
        },
        {
            header: "Project",
            key: "project_name",
            width: 40
        }
    ];
    const startX = 10;
    const startY = 26;
    const rowHeight = 8;
    const headerHeight = 9;
    const pageW = doc.internal.pageSize.width;
    const pageH = doc.internal.pageSize.height;
    const drawTableHeader = (y)=>{
        doc.setFillColor(240, 253, 250); // teal-50
        doc.rect(startX, y, pageW - 20, headerHeight, "F");
        doc.setFontSize(7.5);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 118, 110);
        let xPos = startX + 2;
        cols.forEach((col)=>{
            doc.text(col.header, xPos, y + 6);
            xPos += col.width;
        });
        doc.setTextColor(0, 0, 0);
    };
    drawTableHeader(startY);
    let y = startY + headerHeight;
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    data.forEach((prop, idx)=>{
        if (y + rowHeight > pageH - 15) {
            // Footer
            doc.setFontSize(7);
            doc.setTextColor(150, 150, 150);
            doc.text(`Page ${doc.internal.getNumberOfPages()}`, pageW / 2, pageH - 8, {
                align: "center"
            });
            doc.addPage();
            drawTableHeader(startY);
            y = startY + headerHeight;
            doc.setFontSize(7);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);
        }
        // Zebra stripe
        if (idx % 2 === 1) {
            doc.setFillColor(249, 250, 251);
            doc.rect(startX, y, pageW - 20, rowHeight, "F");
        }
        const rowData = {
            index: String(idx + 1),
            property_name: prop.property_name ?? "",
            property_no: prop.property_no ?? "",
            type: prop.propertytype?.property_type_name ?? prop.type ?? "",
            status: prop.availability_status ?? prop.status ?? "",
            price: prop.price ? `${Number(prop.price).toLocaleString()}` : "",
            size: prop.size ? `${prop.size}` : prop.bua_size ? `${prop.bua_size}` : "",
            bedrooms: prop.bedrooms != null ? String(prop.bedrooms) : "",
            bathrooms: prop.bathrooms != null ? String(prop.bathrooms) : "",
            floor_number: prop.floor_number != null ? String(prop.floor_number) : "",
            project_name: prop.project?.project_name ?? prop.project_name ?? ""
        };
        let xPos = startX + 2;
        cols.forEach((col)=>{
            const text = doc.splitTextToSize(rowData[col.key] ?? "", col.width - 2);
            doc.text(text[0] ?? "", xPos, y + 5.5);
            xPos += col.width;
        });
        // Row divider
        doc.setDrawColor(229, 231, 235);
        doc.line(startX, y + rowHeight, startX + (pageW - 20), y + rowHeight);
        y += rowHeight;
    });
    // Last page footer
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${doc.internal.getNumberOfPages()} · Total: ${data.length} properties`, pageW / 2, pageH - 8, {
        align: "center"
    });
    doc.save("Properties_Export.pdf");
};
}),
"[project]/src/lib/handle-export.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$developers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-developers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-templates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-activity.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-locations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-bookings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$features$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-features.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$areas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-areas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$properties$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-properties.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/src/app/admin/home/components/ChartsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingsStatusChart",
    ()=>BookingsStatusChart,
    "ChartsSection",
    ()=>ChartsSection,
    "PropertiesStatusChart",
    ()=>PropertiesStatusChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
// Pure SVG donut chart - no external deps
function DonutChart({ segments, total, totalLabel }) {
    const size = 180;
    const strokeWidth = 28;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let cumulativePercent = 0;
    const totalVal = segments.reduce((s, seg)=>s + seg.value, 0) || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                className: "-rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: size / 2,
                        cy: size / 2,
                        r: radius,
                        fill: "none",
                        stroke: "#f3f4f6",
                        strokeWidth: strokeWidth
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    segments.map((seg, i)=>{
                        const pct = seg.value / totalVal;
                        const dash = pct * circumference;
                        const offset = circumference - cumulativePercent * circumference;
                        cumulativePercent += pct;
                        if (seg.value === 0) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size / 2,
                            cy: size / 2,
                            r: radius,
                            fill: "none",
                            stroke: seg.color,
                            strokeWidth: strokeWidth,
                            strokeDasharray: `${dash} ${circumference - dash}`,
                            strokeDashoffset: offset,
                            strokeLinecap: "butt",
                            className: "transition-all duration-700"
                        }, i, false, {
                            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                children: [
                    totalLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500 font-medium",
                        children: totalLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-gray-800",
                        children: total.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
// Period toggle pill buttons
function PeriodFilter({ value, onChange, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center rounded-lg border border-gray-200 overflow-hidden bg-gray-50 p-0.5 gap-0.5",
        children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(opt.value),
                className: `text-xs px-2.5 py-1 rounded-md transition-all font-medium ${value === opt.value ? "bg-white text-gray-800 shadow-sm border border-gray-200" : "text-gray-400 hover:text-gray-600"}`,
                children: opt.label
            }, opt.value, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function BookingsStatusChart({ statusData, countsData, onPeriodChange, currentPeriod = "all", className = "" }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const periodOptions = [
        {
            label: t("dashboardHome.dateRanges.allTime"),
            value: "all"
        },
        {
            label: t("dashboardHome.dateRanges.last30Days"),
            value: "last30"
        },
        {
            label: t("dashboardHome.dateRanges.last7Days"),
            value: "last7"
        }
    ];
    // ── Bookings by Status donut ──────────────────────────────────────────────
    // Total always = total_bookings.value from API
    const bookingTotal = countsData?.total_bookings?.value ?? 0;
    // Status breakdown from statusData, fallback to proportional splits
    const openCount = statusData?.data?.pending ?? statusData?.data?.open ?? 0;
    const completedCount = statusData?.data?.completed ?? 0;
    const cancelledCount = statusData?.data?.cancelled ?? 0;
    const inProgressCount = statusData?.data?.in_progress ?? 0;
    // If no statusData breakdown, show the full total as a single "Open" segment
    const hasStatusBreakdown = openCount + completedCount + cancelledCount + inProgressCount > 0;
    const bookingSegments = hasStatusBreakdown ? [
        {
            value: openCount,
            color: "#E8922A",
            label: t("dashboardHome.charts.open")
        },
        {
            value: completedCount,
            color: "#14b8a6",
            label: t("dashboardHome.charts.completed")
        },
        {
            value: inProgressCount,
            color: "#60a5fa",
            label: t("dashboardHome.charts.inProgress")
        },
        {
            value: cancelledCount,
            color: "#f87171",
            label: t("dashboardHome.charts.rejected")
        }
    ].filter((s)=>s.value > 0) : [
        {
            value: bookingTotal,
            color: "#E8922A",
            label: t("dashboardHome.charts.open")
        }
    ];
    const bookingDisplay = bookingSegments.length > 0 ? bookingSegments : [
        {
            value: 1,
            color: "#E8922A",
            label: t("dashboardHome.charts.open")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-800",
                        children: t("dashboardHome.charts.bookingsByStatus")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriodFilter, {
                        value: currentPeriod,
                        onChange: onPeriodChange ?? (()=>{}),
                        options: periodOptions
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center gap-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        segments: bookingDisplay,
                        total: bookingTotal,
                        totalLabel: t("dashboardHome.charts.total")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-3",
                        children: bookingDisplay.map((seg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-2.5 h-2.5 rounded-full flex-shrink-0",
                                        style: {
                                            backgroundColor: seg.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600",
                                        children: seg.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
function PropertiesStatusChart({ statusData, countsData, onPeriodChange, currentPeriod = "all", className = "" }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const periodOptions = [
        {
            label: t("dashboardHome.dateRanges.allTime"),
            value: "all"
        },
        {
            label: t("dashboardHome.dateRanges.last30Days"),
            value: "last30"
        },
        {
            label: t("dashboardHome.dateRanges.last7Days"),
            value: "last7"
        }
    ];
    // ── Properties by Status donut ────────────────────────────────────────────
    // Total always = total_properties.value from API
    const propTotal = countsData?.total_properties?.value ?? 0;
    // Status breakdown from statusData only
    const availableCount = statusData?.data?.available ?? 0;
    const reservedCount = statusData?.data?.reserved ?? 0;
    const soldCount = statusData?.data?.sold ?? 0;
    const hasPropBreakdown = availableCount + reservedCount + soldCount > 0;
    const propSegments = hasPropBreakdown ? [
        {
            value: availableCount,
            color: "#14b8a6",
            label: t("dashboardHome.charts.available")
        },
        {
            value: reservedCount,
            color: "#E8922A",
            label: t("dashboardHome.charts.reserved")
        },
        {
            value: soldCount,
            color: "#1e3a5f",
            label: t("dashboardHome.charts.sold")
        }
    ].filter((s)=>s.value > 0) : [
        {
            value: propTotal,
            color: "#14b8a6",
            label: t("dashboardHome.charts.available")
        }
    ];
    const propDisplay = propSegments.length > 0 ? propSegments : [
        {
            value: 1,
            color: "#14b8a6",
            label: t("dashboardHome.charts.available")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-800",
                        children: t("dashboardHome.charts.propertiesByStatus")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriodFilter, {
                        value: currentPeriod,
                        onChange: onPeriodChange ?? (()=>{}),
                        options: periodOptions
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center gap-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        segments: propDisplay,
                        total: propTotal,
                        totalLabel: t("dashboardHome.charts.total")
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-3",
                        children: propDisplay.map((seg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-2.5 h-2.5 rounded-full flex-shrink-0",
                                        style: {
                                            backgroundColor: seg.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600",
                                        children: seg.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
function ChartsSection({ statusData, countsData, onPeriodChange, currentPeriod = "all" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingsStatusChart, {
                statusData: statusData,
                countsData: countsData,
                onPeriodChange: onPeriodChange,
                currentPeriod: currentPeriod
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertiesStatusChart, {
                statusData: statusData,
                countsData: countsData,
                onPeriodChange: onPeriodChange,
                currentPeriod: currentPeriod
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/home/components/BookingsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingsSection",
    ()=>BookingsSection,
    "getStageLabel",
    ()=>getStageLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
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
const BookingsSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function BookingsSection({ bookings, className = "" }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE) || 1;
    const safePage = Math.min(currentPage, totalPages);
    const displayBookings = bookings.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800",
                                        children: t("dashboardHome.bookings.title")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `${routePrefix}/reservations`,
                                prefetch: false,
                                className: "text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors",
                                children: t("dashboardHome.bookings.viewAll")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0 min-h-[220px]",
                        children: displayBookings.length > 0 ? displayBookings.map((booking)=>{
                            const bookingCode = `BK-${String(booking.id).padStart(7, "0")}`;
                            const targetUrl = booking.id ? `${routePrefix}/reservations/${booking.id}` : `${routePrefix}/reservations`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: targetUrl,
                                prefetch: false,
                                className: "flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors px-1.5 -mx-1.5 rounded-md group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-4 w-4 text-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors block truncate",
                                                        children: booking.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: bookingCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-orange-500 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded flex-shrink-0",
                                        children: booking.status ? getStageLabel(booking.status, t) : t("dashboardHome.charts.open")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, booking.id, true, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-xs text-gray-400 py-12",
                            children: t("dashboardHome.bookings.noBookings")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                        lineNumber: 68,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            bookings.length > ITEMS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (safePage - 1) * ITEMS_PER_PAGE + 1,
                            "-",
                            Math.min(safePage * ITEMS_PER_PAGE, bookings.length),
                            " / ",
                            bookings.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: safePage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-medium text-gray-700 px-1",
                                children: [
                                    safePage,
                                    " / ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: safePage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/BookingsSection.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
});
}),
"[project]/src/app/admin/home/components/PropertiesAreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesAreaChart",
    ()=>PropertiesAreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function getMonthLabels(count) {
    const months = [];
    const now = new Date();
    for(let i = count - 1; i >= 0; i--){
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        months.push(d.toLocaleString("en-US", {
            month: "short"
        }));
    }
    return months;
}
function buildMonthlyData(total, points, peakOffset = 0.3) {
    if (!total || total === 0) return Array(points).fill(0);
    const weights = Array.from({
        length: points
    }, (_, i)=>{
        const x = i / (points - 1) * 2 - 1;
        return Math.exp(-((x - peakOffset) ** 2) / 0.45);
    });
    const sum = weights.reduce((a, b)=>a + b, 0);
    return weights.map((w)=>Math.round(w / sum * total));
}
function fmt(n) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
    return String(n);
}
function SvgAreaChart({ series, labels }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerWidth, setContainerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(800);
    const H = 260;
    const padL = 50;
    const padR = 20;
    const padT = 16;
    const padB = 38;
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const updateWidth = ()=>{
            if (containerRef.current) {
                const w = containerRef.current.clientWidth;
                if (w > 100) setContainerWidth(w);
            }
        };
        updateWidth();
        const observer = new ResizeObserver((entries)=>{
            for (const entry of entries){
                if (entry.contentRect.width > 100) {
                    setContainerWidth(Math.round(entry.contentRect.width));
                }
            }
        });
        observer.observe(containerRef.current);
        return ()=>observer.disconnect();
    }, []);
    const W = containerWidth;
    const chartW = Math.max(W - padL - padR, 100);
    const chartH = H - padT - padB;
    const allValues = series.flatMap((s)=>s.data);
    const rawMax = Math.max(...allValues, 1);
    const tickCount = 5;
    const rawStep = rawMax / (tickCount - 1);
    const magnitude = Math.pow(10, Math.floor(Math.log10(Math.max(rawStep, 1))));
    const step = Math.ceil(rawStep / magnitude) * magnitude || 1;
    const yMax = step * (tickCount - 1);
    const yTicks = Array.from({
        length: tickCount
    }, (_, i)=>i * step);
    const allPts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return series.map((s)=>s.data.map((v, i)=>({
                    x: padL + i / Math.max(s.data.length - 1, 1) * chartW,
                    y: padT + chartH - Math.min(v / yMax, 1) * chartH,
                    v
                })));
    }, [
        series,
        chartW,
        chartH,
        yMax,
        padL,
        padT
    ]);
    const buildPath = (pts)=>pts.map((p, i)=>{
            if (i === 0) return `M ${p.x},${p.y}`;
            const prev = pts[i - 1];
            const cpX = (prev.x + p.x) / 2;
            return `C ${cpX},${prev.y} ${cpX},${p.y} ${p.x},${p.y}`;
        }).join(" ");
    const baselineY = padT + chartH;
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const relX = mx - padL;
        if (relX < 0 || relX > chartW) {
            setTooltip(null);
            return;
        }
        const idx = Math.round(relX / chartW * (labels.length - 1));
        const clampedIdx = Math.max(0, Math.min(labels.length - 1, idx));
        const ptX = padL + clampedIdx / Math.max(labels.length - 1, 1) * chartW;
        setTooltip({
            x: ptX,
            y: Math.min(...allPts.map((pts)=>pts[clampedIdx]?.y ?? 0)),
            label: labels[clampedIdx],
            values: series.map((s, si)=>({
                    label: s.label,
                    value: allPts[si][clampedIdx]?.v ?? 0,
                    color: s.color
                }))
        });
    }, [
        labels,
        allPts,
        series,
        chartW,
        padL
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${W} ${H}`,
                className: "w-full block",
                style: {
                    height: "260px",
                    width: "100%",
                    display: "block"
                },
                onMouseMove: handleMouseMove,
                onMouseLeave: ()=>setTooltip(null),
                "aria-label": t("dashboardHome.charts.areaChart"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: s.gradId,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: s.color,
                                        stopOpacity: "0.22"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "85%",
                                        stopColor: s.color,
                                        stopOpacity: "0.04"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: s.color,
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.gradId, true, {
                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    yTicks.map((tick)=>{
                        const y = padT + chartH - tick / yMax * chartH;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: padL,
                                    y1: y,
                                    x2: W - padR,
                                    y2: y,
                                    stroke: "#f0f0f0",
                                    strokeWidth: "1",
                                    strokeDasharray: tick === 0 ? "none" : "4 4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: padL - 8,
                                    y: y + 4,
                                    textAnchor: "end",
                                    fontSize: "10",
                                    fill: "#b0b8c4",
                                    children: fmt(tick)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, tick, true, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        y1: baselineY,
                        x2: W - padR,
                        y2: baselineY,
                        stroke: "#e5e7eb",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: padL,
                        y1: padT,
                        x2: padL,
                        y2: baselineY,
                        stroke: "#e5e7eb",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    series.map((s, si)=>{
                        const pts = allPts[si];
                        const pathD = buildPath(pts);
                        const areaD = `${pathD} L ${pts[pts.length - 1].x},${baselineY} L ${pts[0].x},${baselineY} Z`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: areaD,
                            fill: `url(#${s.gradId})`
                        }, s.gradId, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 200,
                            columnNumber: 18
                        }, this);
                    }),
                    series.map((s, si)=>{
                        const pts = allPts[si];
                        const pathD = buildPath(pts);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: pathD,
                            fill: "none",
                            stroke: s.color,
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, `line-${si}`, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this);
                    }),
                    tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: tooltip.x,
                        y1: padT,
                        x2: tooltip.x,
                        y2: baselineY,
                        stroke: "#d1d5db",
                        strokeWidth: "1",
                        strokeDasharray: "4 3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    tooltip && series.map((s, si)=>{
                        const labels2 = labels;
                        const idx = labels2.indexOf(tooltip.label);
                        if (idx < 0) return null;
                        const pt = allPts[si][idx];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: pt.x,
                                    cy: pt.y,
                                    r: "6",
                                    fill: s.color,
                                    fillOpacity: "0.15"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: pt.x,
                                    cy: pt.y,
                                    r: "3.5",
                                    fill: "white",
                                    stroke: s.color,
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `dot-${si}`, true, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this);
                    }),
                    labels.map((label, i)=>{
                        const x = padL + i / (labels.length - 1) * chartW;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x,
                            y: H - 10,
                            textAnchor: "middle",
                            fontSize: "11",
                            fill: "#9ca3af",
                            children: label
                        }, label + i, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none z-10 bg-gray-900 text-white rounded-lg px-3 py-2 shadow-xl text-xs min-w-[120px]",
                style: {
                    left: `${tooltip.x / W * 100}%`,
                    top: "8px",
                    transform: tooltip.x > W * 0.7 ? "translateX(-110%)" : "translateX(10px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-gray-300 mb-1.5",
                        children: tooltip.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    tooltip.values.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full flex-shrink-0",
                                    style: {
                                        backgroundColor: v.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400",
                                    children: [
                                        v.label,
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold ms-auto",
                                    children: fmt(v.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, v.label, true, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
function PropertiesAreaChart({ countsData }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getMonthLabels(period), [
        period
    ]);
    const totalProperties = countsData?.total_properties?.value || 0;
    const totalViews = countsData?.total_views?.value || 0;
    const propertiesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildMonthlyData(totalProperties, period, 0.25), [
        totalProperties,
        period
    ]);
    const viewsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildMonthlyData(Math.round(totalViews / 30), period, 0.4), [
        totalViews,
        period
    ]);
    const series = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                data: propertiesData,
                color: "#14b8a6",
                label: t("dashboardHome.stats.totalProperties"),
                gradId: "grad-properties"
            },
            ...totalViews > 0 ? [
                {
                    data: viewsData,
                    color: "#818cf8",
                    label: t("dashboardHome.stats.totalViews"),
                    gradId: "grad-views"
                }
            ] : []
        ], [
        propertiesData,
        viewsData,
        totalViews,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-5 pt-5 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-800 dark:text-slate-100",
                                children: t("dashboardHome.charts.propertiesPerMonth")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: t("dashboardHome.subtitle")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-3",
                                children: series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                                                style: {
                                                    backgroundColor: s.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 dark:text-slate-400",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.gradId, true, {
                                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center rounded-lg border border-gray-200 dark:border-slate-600 overflow-hidden bg-gray-50 dark:bg-slate-700 p-0.5 gap-0.5",
                                children: [
                                    6,
                                    12
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPeriod(p),
                                        className: `text-xs px-3 py-1.5 rounded-md transition-all font-medium ${period === p ? "bg-white dark:bg-slate-600 text-gray-800 dark:text-white shadow-sm border border-gray-200 dark:border-slate-500" : "text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"}`,
                                        children: p === 6 ? t("dashboardHome.charts.last6Months") : t("dashboardHome.charts.last12Months")
                                    }, p, false, {
                                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgAreaChart, {
                series: series,
                labels: months
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-2"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/home/page.client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/DashboardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$StatsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/StatsCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$export$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/handle-export.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-bookings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/ChartsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/BookingsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$PropertiesAreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/PropertiesAreaChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
const getStatsCards = (t, countsData)=>{
    const getMetric = (key)=>countsData?.[key] || {};
    return [
        {
            title: t("dashboardHome.stats.totalBookings"),
            value: getMetric("total_bookings").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_bookings").percentage_change || 0)}% ${getMetric("total_bookings").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_bookings").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            title: t("dashboardHome.stats.salesOffers"),
            value: getMetric("sales_offers").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("sales_offers").percentage_change || 0)}% ${getMetric("sales_offers").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("sales_offers").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            title: t("dashboardHome.stats.unitsSold"),
            value: getMetric("units_sold").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("units_sold").percentage_change || 0)}% ${getMetric("units_sold").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("units_sold").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            title: t("dashboardHome.stats.totalValue"),
            value: getMetric("total_value").formatted_value ? `${getMetric("total_value").formatted_value} AED` : "0 AED",
            change: countsData ? `${Math.abs(getMetric("total_value").percentage_change || 0)}% ${getMetric("total_value").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_value").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
        },
        {
            title: t("dashboardHome.stats.activeProjects"),
            value: getMetric("active_projects").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("active_projects").percentage_change || 0)}% ${getMetric("active_projects").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("active_projects").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
        },
        {
            title: t("dashboardHome.stats.totalProperties"),
            value: getMetric("total_properties").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_properties").percentage_change || 0)}% ${getMetric("total_properties").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_properties").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            title: t("dashboardHome.stats.totalViews"),
            value: getMetric("total_views").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_views").percentage_change || 0)}% ${getMetric("total_views").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_views").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
        },
        {
            title: t("dashboardHome.stats.featuredAds"),
            value: countsData?.featured_ads?.value?.toString() || "0",
            change: countsData?.featured_ads ? `8% ${t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: true,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
        }
    ];
};
const getInitialBookings = (t, inProgressData)=>{
    const dataArray = Array.isArray(inProgressData) ? inProgressData : inProgressData?.data;
    if (dataArray && Array.isArray(dataArray)) {
        return dataArray.map((item, index)=>{
            let formattedLastUpdated = "";
            const rawDate = item.updated_at || item.created_at;
            if (rawDate) {
                try {
                    const parsed = new Date(rawDate);
                    if (!isNaN(parsed.getTime())) {
                        formattedLastUpdated = `${t("dashboardHome.bookings.lastUpdated")} ${parsed.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        })}`;
                    }
                } catch  {}
            }
            const rawFirstName = item.first_name || item.user?.first_name || item.client?.first_name || "";
            const rawFullName = item.client_name || item.user_name || item.name || "";
            const fullName = rawFullName || t("dashboardHome.bookings.unknown");
            const resolvedFirstName = rawFirstName || (rawFullName ? rawFullName.trim().split(/\s+/)[0] : "");
            const getEffectiveStage = (statusType, status)=>{
                const normType = (statusType || "").toLowerCase().trim();
                const normStatus = (status || "").toLowerCase().trim();
                if (normStatus === "cancelled" || normStatus === "rejected" || normStatus === "declined" || normStatus === "expired") return "Cancelled";
                if (normType === "identification" && normStatus === "confirmed") return "Sales Offer";
                if (normType === "sales_offer" && normStatus === "confirmed") return "Down Payment";
                if (normType === "down_payment" && normStatus === "confirmed") return "Sales Purchase";
                if (normType === "sales_purchase" && normStatus === "confirmed") return "Completed";
                const formatType = (type)=>type.split('_').map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                return formatType(normType) || "Open";
            };
            return {
                id: item.reservation_id || item.id || index,
                name: fullName,
                firstName: resolvedFirstName,
                avatar: item.client_name || item.user_name ? (item.client_name || item.user_name).substring(0, 2).toUpperCase() : "UN",
                property: item.property_no || item.project_name || t("dashboardHome.bookings.unknown"),
                unit: item.property_name || item.property?.property_name || t("common.na"),
                lastUpdated: formattedLastUpdated,
                amount: item.price || item.amount ? `${parseFloat(item.price || item.amount).toLocaleString()} AED` : t("common.na"),
                status: getEffectiveStage(item.reservation_status_type, item.reservation_status),
                updatedAt: item.updated_at || item.created_at || item.reservation_date || item.date || null
            };
        });
    }
    return [];
};
function StatsCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-4 animate-pulse h-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-24 bg-gray-100 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-4 bg-gray-100 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 w-16 bg-gray-100 rounded"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/page.client.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
// Latest Leads — shows the same bookings styled as "leads"
const LEADS_PER_PAGE = 5;
function LatestLeads({ bookings, className = "" }) {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(bookings.length / LEADS_PER_PAGE) || 1;
    const safePage = Math.min(currentPage, totalPages);
    const leads = bookings.slice((safePage - 1) * LEADS_PER_PAGE, safePage * LEADS_PER_PAGE);
    const statusColors = {
        new: "text-teal-600 bg-teal-50 border-teal-200",
        contacted: "text-orange-500 bg-orange-50 border-orange-200",
        open: "text-blue-600 bg-blue-50 border-blue-200",
        "in progress": "text-purple-600 bg-purple-50 border-purple-200",
        completed: "text-green-600 bg-green-50 border-green-200"
    };
    const getStatusClass = (status)=>{
        const key = status?.toLowerCase() || "new";
        return statusColors[key] || statusColors["new"];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800",
                                        children: t("dashboardHome.leads.title")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/reservations",
                                prefetch: false,
                                className: "text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors",
                                children: t("dashboardHome.leads.viewAll")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0 min-h-[220px]",
                        children: leads.length > 0 ? leads.map((lead)=>{
                            let dateStr = "";
                            if (lead.updatedAt) {
                                try {
                                    const d = new Date(lead.updatedAt);
                                    if (!isNaN(d.getTime())) {
                                        dateStr = d.toLocaleDateString(language === "ar" ? "ar-EG" : "en-GB", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric"
                                        });
                                    }
                                } catch  {}
                            }
                            const targetUrl = lead.id ? `/admin/reservations/${lead.id}` : `/admin/reservations`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: targetUrl,
                                prefetch: false,
                                className: "flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors px-1.5 -mx-1.5 rounded-md group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4 text-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors truncate",
                                                        children: lead.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-xs text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: lead.property
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 235,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-end gap-0.5 flex-shrink-0 ms-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-medium border px-2 py-0.5 rounded ${getStatusClass(lead.status)}`,
                                                children: lead.status ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStageLabel"])(lead.status, t) : t("dashboardHome.leads.new")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this),
                                            dateStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-400",
                                                children: dateStr
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 254,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 249,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, lead.id, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-xs text-gray-400 py-12",
                            children: t("dashboardHome.leads.noLeads")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            bookings.length > LEADS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (safePage - 1) * LEADS_PER_PAGE + 1,
                            "-",
                            Math.min(safePage * LEADS_PER_PAGE, bookings.length),
                            " / ",
                            bookings.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: safePage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-medium text-gray-700 px-1",
                                children: [
                                    safePage,
                                    " / ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: safePage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/page.client.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
function DashboardPage() {
    const { data: session, status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [chartPeriod, setChartPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const token = session?.user?.accessToken;
    const overviewQueryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let startDate;
        let endDate;
        let days;
        if (dateRange === "last7") {
            const start = new Date();
            start.setDate(start.getDate() - 7);
            startDate = start.toISOString().split("T")[0];
            endDate = new Date().toISOString().split("T")[0];
            days = 7;
        } else if (dateRange === "last30") {
            const start = new Date();
            start.setDate(start.getDate() - 30);
            startDate = start.toISOString().split("T")[0];
            endDate = new Date().toISOString().split("T")[0];
            days = 30;
        } else if (dateRange === "all") {
            startDate = "1970-01-01";
            endDate = new Date().toISOString().split("T")[0];
        }
        return {
            startDate,
            endDate,
            days
        };
    }, [
        dateRange
    ]);
    const chartQueryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let startDate;
        let endDate;
        let days;
        if (chartPeriod === "last7") {
            const start = new Date();
            start.setDate(start.getDate() - 7);
            startDate = start.toISOString().split("T")[0];
            endDate = new Date().toISOString().split("T")[0];
            days = 7;
        } else if (chartPeriod === "last30") {
            const start = new Date();
            start.setDate(start.getDate() - 30);
            startDate = start.toISOString().split("T")[0];
            endDate = new Date().toISOString().split("T")[0];
            days = 30;
        } else if (chartPeriod === "all") {
            startDate = "1970-01-01";
            endDate = new Date().toISOString().split("T")[0];
        }
        return {
            startDate,
            endDate,
            days
        };
    }, [
        chartPeriod
    ]);
    const countsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboardCounts",
            token,
            overviewQueryParams.startDate,
            overviewQueryParams.endDate
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDashboardCounts"])(token, overviewQueryParams.startDate, overviewQueryParams.endDate),
        enabled: !!token && sessionStatus !== "loading",
        staleTime: 5 * 60 * 1000,
        select: (res)=>res?.data ?? res
    });
    const inProgressQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboardInProgressReservations",
            token,
            overviewQueryParams.days
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchInProgressReservations"])(token, overviewQueryParams.days),
        enabled: !!token && sessionStatus !== "loading",
        staleTime: 5 * 60 * 1000,
        select: (res)=>res
    });
    // Same key shape as countsQuery so identical date ranges share one cached request.
    const chartCountsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboardCounts",
            token,
            chartQueryParams.startDate,
            chartQueryParams.endDate
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDashboardCounts"])(token, chartQueryParams.startDate, chartQueryParams.endDate),
        enabled: !!token && sessionStatus !== "loading",
        staleTime: 5 * 60 * 1000,
        select: (res)=>res?.data ?? res
    });
    const chartStatusQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "dashboardChartStatusMetrics",
            token,
            chartQueryParams.days
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchReservationStatusMetrics"])(token, chartQueryParams.days),
        enabled: !!token && sessionStatus !== "loading",
        staleTime: 5 * 60 * 1000,
        select: (res)=>res?.data ?? res
    });
    const countsData = countsQuery.data;
    const inProgressData = inProgressQuery.data;
    const chartCountsData = chartCountsQuery.data;
    const chartStatusData = chartStatusQuery.data;
    const handleDateRangeChange = (val)=>{
        setDateRange(val);
        setChartPeriod(val);
    };
    const handleChartPeriodChange = (val)=>{
        setChartPeriod(val);
    };
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getStatsCards(t, countsData), [
        t,
        countsData
    ]);
    const bookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getInitialBookings(t, inProgressData), [
        t,
        inProgressData
    ]);
    const handleExport = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardExportToExcel"])(stats, bookings);
    };
    const handleRefresh = ()=>{
        countsQuery.refetch();
        inProgressQuery.refetch();
        if (chartQueryParams.startDate !== overviewQueryParams.startDate || chartQueryParams.endDate !== overviewQueryParams.endDate) {
            chartCountsQuery.refetch();
        }
        chartStatusQuery.refetch();
    };
    const isStatsLoading = countsQuery.isLoading && !countsData;
    const isRefreshing = countsQuery.isFetching || inProgressQuery.isFetching || chartCountsQuery.isFetching || chartStatusQuery.isFetching;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 space-y-4 max-w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardHeader"], {
                dateRange: dateRange,
                setDateRange: handleDateRangeChange,
                onExport: handleExport,
                onRefresh: handleRefresh,
                isRefreshing: isRefreshing
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            isStatsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
                children: Array.from({
                    length: 8
                }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCardSkeleton, {}, idx, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 447,
                        columnNumber: 54
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 446,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$StatsCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatsCards"], {
                stats: stats
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingsSection"], {
                            bookings: bookings
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingsStatusChart"], {
                            statusData: chartStatusData,
                            countsData: chartCountsData,
                            onPeriodChange: handleChartPeriodChange,
                            currentPeriod: chartPeriod
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LatestLeads, {
                            bookings: bookings
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesStatusChart"], {
                            statusData: chartStatusData,
                            countsData: chartCountsData,
                            onPeriodChange: handleChartPeriodChange,
                            currentPeriod: chartPeriod
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$PropertiesAreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesAreaChart"], {
                countsData: chartCountsData,
                statusData: chartStatusData
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/page.client.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_efd3496e._.js.map