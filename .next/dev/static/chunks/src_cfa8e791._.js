(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-none ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-slate-200 text-start [&>span]:truncate [&>span]:block [&>span]:w-full", className, error && "border-red-500 dark:border-red-500 focus:ring-red-500"),
        "aria-invalid": error || undefined,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
            lineNumber: 54,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 46,
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
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 63,
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
                    lineNumber: 94,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 95,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 114,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
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
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 148,
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
"[project]/src/app/admin/home/components/DashboardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardHeader",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "16946092066030e0b6837619cc36a2e435497df0c9286765ec542b23ccb780fa") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16946092066030e0b6837619cc36a2e435497df0c9286765ec542b23ccb780fa";
    }
    const { dateRange, setDateRange, onExport, onRefresh, isRefreshing: t1 } = t0;
    const isRefreshing = t1 === undefined ? false : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] !== t) {
        t2 = t("dashboardHome.title");
        $[1] = t;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900 dark:text-white",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t) {
        t4 = t("dashboardHome.subtitle");
        $[5] = t;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-teal-600 dark:text-teal-400 mt-0.5",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 60,
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
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[160px] bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 hover:bg-gray-50 text-gray-700 dark:text-slate-200 text-sm h-9 transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "h-4 w-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 77,
                        columnNumber: 231
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                        lineNumber: 77,
                        columnNumber: 277
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
                lineNumber: 77,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t) {
        t8 = t("dashboardHome.dateRanges.allTime");
        $[13] = t;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t) {
        t10 = t("dashboardHome.dateRanges.last30Days");
        $[17] = t;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last30",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t) {
        t12 = t("dashboardHome.dateRanges.last7Days");
        $[21] = t;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "last7",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t11 || $[26] !== t13 || $[27] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t9,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t13;
        $[27] = t9;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== dateRange || $[30] !== setDateRange || $[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: dateRange,
            onValueChange: setDateRange,
            children: [
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[29] = dateRange;
        $[30] = setDateRange;
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t) {
        t17 = t("dashboardHome.export");
        $[34] = t;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== onExport || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9",
            onClick: onExport,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[36] = onExport;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    const t19 = `h-4 w-4 ${isRefreshing ? "animate-spin text-teal-600" : ""}`;
    let t20;
    if ($[39] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
            className: t19
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[39] = t19;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== isRefreshing || $[42] !== t) {
        t21 = isRefreshing ? t("dashboardHome.refreshing") : t("dashboardHome.refresh");
        $[41] = isRefreshing;
        $[42] = t;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== isRefreshing || $[45] !== onRefresh || $[46] !== t20 || $[47] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "gap-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 h-9 transition-all hover:bg-gray-50 active:scale-95",
            onClick: onRefresh,
            disabled: isRefreshing,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[44] = isRefreshing;
        $[45] = onRefresh;
        $[46] = t20;
        $[47] = t21;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] !== t15 || $[50] !== t18 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [
                t15,
                t18,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[49] = t15;
        $[50] = t18;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t23 || $[54] !== t6) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3",
            children: [
                t6,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/DashboardHeader.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[53] = t23;
        $[54] = t6;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    return t24;
}
_s(DashboardHeader, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/home/components/StatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const StatsCards = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function StatsCards(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9b358702485fb400695745ec8affb6a627aa458f7a1346e30134d802efc5a50e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b358702485fb400695745ec8affb6a627aa458f7a1346e30134d802efc5a50e";
    }
    const { stats } = t0;
    let t1;
    if ($[1] !== stats) {
        t1 = stats.map(_StatsCardsStatsMap);
        $[1] = stats;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
});
_c1 = StatsCards;
function _StatsCardsStatsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-gray-500",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                        lineNumber: 34,
                        columnNumber: 141
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                        className: "h-4 w-4 text-gray-300 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                        lineNumber: 34,
                        columnNumber: 212
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                lineNumber: 34,
                columnNumber: 86
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-gray-900 leading-tight",
                children: card.value
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
                lineNumber: 34,
                columnNumber: 279
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/admin/home/components/StatsCards.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "StatsCards$memo");
__turbopack_context__.k.register(_c1, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-developers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
const ProjectsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
_c = ProjectsTemplate;
const PropertiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
_c1 = PropertiesTemplate;
const PropertiesFilledTemplate = async (projectId, token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    let enrichedProperties = [];
    let projectName = "";
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/projects/${projectId}`, {
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
_c2 = PropertiesFilledTemplate;
const ExpertsTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
_c3 = ExpertsTemplate;
const ExpertsFilledTemplate = async (token)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
    let experts = [];
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_API_BASE_URL"]}/experts?page=1&per_page=100`, {
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
_c4 = ExpertsFilledTemplate;
const CitiesTemplate = async ()=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
_c5 = CitiesTemplate;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ProjectsTemplate");
__turbopack_context__.k.register(_c1, "PropertiesTemplate");
__turbopack_context__.k.register(_c2, "PropertiesFilledTemplate");
__turbopack_context__.k.register(_c3, "ExpertsTemplate");
__turbopack_context__.k.register(_c4, "ExpertsFilledTemplate");
__turbopack_context__.k.register(_c5, "CitiesTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-activity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityExportToExcel",
    ()=>activityExportToExcel,
    "activityExportToPDF",
    ()=>activityExportToPDF
]);
const activityExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-locations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locationsExportToExcel",
    ()=>locationsExportToExcel,
    "locationsExportToPDF",
    ()=>locationsExportToPDF
]);
const locationsExportToPDF = async (data)=>{
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-bookings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardExportToExcel",
    ()=>dashboardExportToExcel
]);
const dashboardExportToExcel = async (statsData, bookingsData)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-features.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuresExportToExcel",
    ()=>featuresExportToExcel,
    "featuresExportToPDF",
    ()=>featuresExportToPDF
]);
const featuresExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-areas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areasExportToExcel",
    ()=>areasExportToExcel,
    "areasExportToPDF",
    ()=>areasExportToPDF
]);
const areasExportToExcel = async (data)=>{
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/exports/export-properties.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript, async loader)");
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
    const { default: jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/handle-export.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$developers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-developers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-activity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$locations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-locations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-bookings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-features.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$areas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-areas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$properties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-properties.ts [app-client] (ecmascript)");
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
"[project]/src/app/admin/home/components/ChartsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingsStatusChart",
    ()=>BookingsStatusChart,
    "ChartsSection",
    ()=>ChartsSection,
    "PropertiesStatusChart",
    ()=>PropertiesStatusChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                className: "-rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: size / 2,
                        cy: size / 2,
                        r: radius,
                        fill: "none",
                        stroke: "#f3f4f6",
                        strokeWidth: strokeWidth
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    segments.map((seg_0, i)=>{
                        const pct = seg_0.value / totalVal;
                        const dash = pct * circumference;
                        const offset = circumference - cumulativePercent * circumference;
                        cumulativePercent += pct;
                        if (seg_0.value === 0) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: size / 2,
                            cy: size / 2,
                            r: radius,
                            fill: "none",
                            stroke: seg_0.color,
                            strokeWidth: strokeWidth,
                            strokeDasharray: `${dash} ${circumference - dash}`,
                            strokeDashoffset: offset,
                            strokeLinecap: "butt",
                            className: "transition-all duration-700"
                        }, i, false, {
                            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                            lineNumber: 43,
                            columnNumber: 16
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                children: [
                    totalLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500 font-medium",
                        children: totalLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 48,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-gray-800",
                        children: total.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_c = DonutChart;
// Period toggle pill buttons
function PeriodFilter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219";
    }
    const { value, onChange, options } = t0;
    let t1;
    if ($[1] !== onChange || $[2] !== options || $[3] !== value) {
        let t2;
        if ($[5] !== onChange || $[6] !== value) {
            t2 = ({
                "PeriodFilter[options.map()]": (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "PeriodFilter[options.map() > <button>.onClick]": ()=>onChange(opt.value)
                        }["PeriodFilter[options.map() > <button>.onClick]"],
                        className: `text-xs px-2.5 py-1 rounded-md transition-all font-medium ${value === opt.value ? "bg-white text-gray-800 shadow-sm border border-gray-200" : "text-gray-400 hover:text-gray-600"}`,
                        children: opt.label
                    }, opt.value, false, {
                        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                        lineNumber: 73,
                        columnNumber: 47
                    }, this)
            })["PeriodFilter[options.map()]"];
            $[5] = onChange;
            $[6] = value;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = options.map(t2);
        $[1] = onChange;
        $[2] = options;
        $[3] = value;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center rounded-lg border border-gray-200 overflow-hidden bg-gray-50 p-0.5 gap-0.5",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
}
_c1 = PeriodFilter;
function BookingsStatusChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219";
    }
    const { statusData, countsData, onPeriodChange, currentPeriod: t1, className: t2 } = t0;
    const currentPeriod = t1 === undefined ? "all" : t1;
    const className = t2 === undefined ? "" : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t3;
    if ($[1] !== t) {
        t3 = t("dashboardHome.dateRanges.allTime");
        $[1] = t;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t3) {
        t4 = {
            label: t3,
            value: "all"
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t) {
        t5 = t("dashboardHome.dateRanges.last30Days");
        $[5] = t;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t5) {
        t6 = {
            label: t5,
            value: "last30"
        };
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t) {
        t7 = t("dashboardHome.dateRanges.last7Days");
        $[9] = t;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = {
            label: t7,
            value: "last7"
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t4 || $[14] !== t6 || $[15] !== t8) {
        t9 = [
            t4,
            t6,
            t8
        ];
        $[13] = t4;
        $[14] = t6;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const periodOptions = t9;
    const bookingTotal = countsData?.total_bookings?.value ?? 0;
    const openCount = statusData?.data?.pending ?? statusData?.data?.open ?? 0;
    const completedCount = statusData?.data?.completed ?? 0;
    const cancelledCount = statusData?.data?.cancelled ?? 0;
    const inProgressCount = statusData?.data?.in_progress ?? 0;
    const hasStatusBreakdown = openCount + completedCount + cancelledCount + inProgressCount > 0;
    let t10;
    if ($[17] !== bookingTotal || $[18] !== cancelledCount || $[19] !== completedCount || $[20] !== hasStatusBreakdown || $[21] !== inProgressCount || $[22] !== openCount || $[23] !== t) {
        t10 = hasStatusBreakdown ? [
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
        ].filter(_BookingsStatusChartAnonymous) : [
            {
                value: bookingTotal,
                color: "#E8922A",
                label: t("dashboardHome.charts.open")
            }
        ];
        $[17] = bookingTotal;
        $[18] = cancelledCount;
        $[19] = completedCount;
        $[20] = hasStatusBreakdown;
        $[21] = inProgressCount;
        $[22] = openCount;
        $[23] = t;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    const bookingSegments = t10;
    let t11;
    if ($[25] !== bookingSegments || $[26] !== t) {
        t11 = bookingSegments.length > 0 ? bookingSegments : [
            {
                value: 1,
                color: "#E8922A",
                label: t("dashboardHome.charts.open")
            }
        ];
        $[25] = bookingSegments;
        $[26] = t;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    const bookingDisplay = t11;
    const t12 = `bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`;
    let t13;
    if ($[28] !== t) {
        t13 = t("dashboardHome.charts.bookingsByStatus");
        $[28] = t;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-gray-800",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    const t15 = onPeriodChange ?? _temp;
    let t16;
    if ($[32] !== currentPeriod || $[33] !== periodOptions || $[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriodFilter, {
            value: currentPeriod,
            onChange: t15,
            options: periodOptions
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[32] = currentPeriod;
        $[33] = periodOptions;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t14 || $[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2 mb-4",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t) {
        t18 = t("dashboardHome.charts.total");
        $[39] = t;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== bookingDisplay || $[42] !== bookingTotal || $[43] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
            segments: bookingDisplay,
            total: bookingTotal,
            totalLabel: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[41] = bookingDisplay;
        $[42] = bookingTotal;
        $[43] = t18;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== bookingDisplay) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-3",
            children: bookingDisplay.map(_BookingsStatusChartBookingDisplayMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[45] = bookingDisplay;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t19 || $[48] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center gap-4 py-2",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[47] = t19;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== t12 || $[51] !== t17 || $[52] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[50] = t12;
        $[51] = t17;
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    return t22;
}
_s(BookingsStatusChart, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c2 = BookingsStatusChart;
function _BookingsStatusChartBookingDisplayMap(seg, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block w-2.5 h-2.5 rounded-full flex-shrink-0",
                style: {
                    backgroundColor: seg.color
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 329,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-600",
                children: seg.label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 331,
                columnNumber: 10
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 329,
        columnNumber: 10
    }, this);
}
function _temp() {}
function _BookingsStatusChartAnonymous(s) {
    return s.value > 0;
}
function PropertiesStatusChart(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219";
    }
    const { statusData, countsData, onPeriodChange, currentPeriod: t1, className: t2 } = t0;
    const currentPeriod = t1 === undefined ? "all" : t1;
    const className = t2 === undefined ? "" : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t3;
    if ($[1] !== t) {
        t3 = t("dashboardHome.dateRanges.allTime");
        $[1] = t;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t3) {
        t4 = {
            label: t3,
            value: "all"
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t) {
        t5 = t("dashboardHome.dateRanges.last30Days");
        $[5] = t;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t5) {
        t6 = {
            label: t5,
            value: "last30"
        };
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t) {
        t7 = t("dashboardHome.dateRanges.last7Days");
        $[9] = t;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = {
            label: t7,
            value: "last7"
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t4 || $[14] !== t6 || $[15] !== t8) {
        t9 = [
            t4,
            t6,
            t8
        ];
        $[13] = t4;
        $[14] = t6;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const periodOptions = t9;
    const propTotal = countsData?.total_properties?.value ?? 0;
    const availableCount = statusData?.data?.available ?? 0;
    const reservedCount = statusData?.data?.reserved ?? 0;
    const soldCount = statusData?.data?.sold ?? 0;
    const hasPropBreakdown = availableCount + reservedCount + soldCount > 0;
    let t10;
    if ($[17] !== availableCount || $[18] !== hasPropBreakdown || $[19] !== propTotal || $[20] !== reservedCount || $[21] !== soldCount || $[22] !== t) {
        t10 = hasPropBreakdown ? [
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
        ].filter(_PropertiesStatusChartAnonymous) : [
            {
                value: propTotal,
                color: "#14b8a6",
                label: t("dashboardHome.charts.available")
            }
        ];
        $[17] = availableCount;
        $[18] = hasPropBreakdown;
        $[19] = propTotal;
        $[20] = reservedCount;
        $[21] = soldCount;
        $[22] = t;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    const propSegments = t10;
    let t11;
    if ($[24] !== propSegments || $[25] !== t) {
        t11 = propSegments.length > 0 ? propSegments : [
            {
                value: 1,
                color: "#14b8a6",
                label: t("dashboardHome.charts.available")
            }
        ];
        $[24] = propSegments;
        $[25] = t;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    const propDisplay = t11;
    const t12 = `bg-white rounded-lg border border-gray-200 p-5 h-full flex flex-col justify-between ${className}`;
    let t13;
    if ($[27] !== t) {
        t13 = t("dashboardHome.charts.propertiesByStatus");
        $[27] = t;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-gray-800",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    const t15 = onPeriodChange ?? _temp2;
    let t16;
    if ($[31] !== currentPeriod || $[32] !== periodOptions || $[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriodFilter, {
            value: currentPeriod,
            onChange: t15,
            options: periodOptions
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[31] = currentPeriod;
        $[32] = periodOptions;
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t14 || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2 mb-4",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t) {
        t18 = t("dashboardHome.charts.total");
        $[38] = t;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== propDisplay || $[41] !== propTotal || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
            segments: propDisplay,
            total: propTotal,
            totalLabel: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[40] = propDisplay;
        $[41] = propTotal;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== propDisplay) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center gap-3",
            children: propDisplay.map(_PropertiesStatusChartPropDisplayMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[44] = propDisplay;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t19 || $[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center gap-4 py-2",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t12 || $[50] !== t17 || $[51] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[49] = t12;
        $[50] = t17;
        $[51] = t21;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    return t22;
}
_s1(PropertiesStatusChart, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c3 = PropertiesStatusChart;
function _PropertiesStatusChartPropDisplayMap(seg, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block w-2.5 h-2.5 rounded-full flex-shrink-0",
                style: {
                    backgroundColor: seg.color
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 559,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-600",
                children: seg.label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                lineNumber: 561,
                columnNumber: 10
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
        lineNumber: 559,
        columnNumber: 10
    }, this);
}
function _temp2() {}
function _PropertiesStatusChartAnonymous(s) {
    return s.value > 0;
}
function ChartsSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a612af34bd8cd6eefba3975c61bda2ac092c191354bc0464d288b5a456021219";
    }
    const { statusData, countsData, onPeriodChange, currentPeriod: t1 } = t0;
    const currentPeriod = t1 === undefined ? "all" : t1;
    let t2;
    if ($[1] !== countsData || $[2] !== currentPeriod || $[3] !== onPeriodChange || $[4] !== statusData) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingsStatusChart, {
                    statusData: statusData,
                    countsData: countsData,
                    onPeriodChange: onPeriodChange,
                    currentPeriod: currentPeriod
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                    lineNumber: 584,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertiesStatusChart, {
                    statusData: statusData,
                    countsData: countsData,
                    onPeriodChange: onPeriodChange,
                    currentPeriod: currentPeriod
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
                    lineNumber: 584,
                    columnNumber: 180
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/ChartsSection.tsx",
            lineNumber: 584,
            columnNumber: 10
        }, this);
        $[1] = countsData;
        $[2] = currentPeriod;
        $[3] = onPeriodChange;
        $[4] = statusData;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c4 = ChartsSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DonutChart");
__turbopack_context__.k.register(_c1, "PeriodFilter");
__turbopack_context__.k.register(_c2, "BookingsStatusChart");
__turbopack_context__.k.register(_c3, "PropertiesStatusChart");
__turbopack_context__.k.register(_c4, "ChartsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/admin/home/components/PropertiesAreaChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesAreaChart",
    ()=>PropertiesAreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function SvgAreaChart(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(99);
    if ($[0] !== "8fbaf8bb54f0bd53d1a6b968d1b3aaf526bfe8d175803f5d90fa680be542eb3f") {
        for(let $i = 0; $i < 99; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8fbaf8bb54f0bd53d1a6b968d1b3aaf526bfe8d175803f5d90fa680be542eb3f";
    }
    const { series, labels } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerWidth, setContainerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(800);
    const padL = 50;
    const padT = 16;
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SvgAreaChart[useEffect()]": ()=>{
                if (!containerRef.current) {
                    return;
                }
                const updateWidth = {
                    "SvgAreaChart[useEffect() > updateWidth]": ()=>{
                        if (containerRef.current) {
                            const w = containerRef.current.clientWidth;
                            if (w > 100) {
                                setContainerWidth(w);
                            }
                        }
                    }
                }["SvgAreaChart[useEffect() > updateWidth]"];
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
            }
        })["SvgAreaChart[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const W = containerWidth;
    const chartW = Math.max(W - 50 - 20, 100);
    const chartH = 206;
    let t3;
    if ($[3] !== series) {
        const allValues = series.flatMap(_SvgAreaChartSeriesFlatMap);
        t3 = Math.max(...allValues, 1);
        $[3] = series;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const rawMax = t3;
    const rawStep = rawMax / 4;
    let t4;
    if ($[5] !== rawStep) {
        t4 = Math.log10(Math.max(rawStep, 1));
        $[5] = rawStep;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const magnitude = Math.pow(10, Math.floor(t4));
    const step = Math.ceil(rawStep / magnitude) * magnitude || 1;
    const yMax = step * 4;
    let allPts;
    let buildPath;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] !== W || $[8] !== chartW || $[9] !== labels || $[10] !== series || $[11] !== step || $[12] !== t || $[13] !== yMax) {
        const yTicks = Array.from({
            length: 5
        }, {
            "SvgAreaChart[Array.from()]": (_, i)=>i * step
        }["SvgAreaChart[Array.from()]"]);
        let t15;
        if ($[26] !== chartW || $[27] !== series || $[28] !== yMax) {
            let t16;
            if ($[30] !== chartW || $[31] !== yMax) {
                t16 = ({
                    "SvgAreaChart[series.map()]": (s_0)=>s_0.data.map({
                            "SvgAreaChart[series.map() > s_0.data.map()]": (v, i_0)=>({
                                    x: 50 + i_0 / Math.max(s_0.data.length - 1, 1) * chartW,
                                    y: 222 - Math.min(v / yMax, 1) * 206,
                                    v
                                })
                        }["SvgAreaChart[series.map() > s_0.data.map()]"])
                })["SvgAreaChart[series.map()]"];
                $[30] = chartW;
                $[31] = yMax;
                $[32] = t16;
            } else {
                t16 = $[32];
            }
            t15 = series.map(t16);
            $[26] = chartW;
            $[27] = series;
            $[28] = yMax;
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        allPts = t15;
        buildPath = _SvgAreaChartBuildPath;
        let t16;
        if ($[33] !== allPts || $[34] !== chartW || $[35] !== labels || $[36] !== series) {
            t16 = ({
                "SvgAreaChart[handleMouseMove]": (e)=>{
                    if (!containerRef.current) {
                        return;
                    }
                    const rect = containerRef.current.getBoundingClientRect();
                    const mx = e.clientX - rect.left;
                    const relX = mx - 50;
                    if (relX < 0 || relX > chartW) {
                        setTooltip(null);
                        return;
                    }
                    const idx = Math.round(relX / chartW * (labels.length - 1));
                    const clampedIdx = Math.max(0, Math.min(labels.length - 1, idx));
                    const ptX = 50 + clampedIdx / Math.max(labels.length - 1, 1) * chartW;
                    setTooltip({
                        x: ptX,
                        y: Math.min(...allPts.map({
                            "SvgAreaChart[handleMouseMove > allPts.map()]": (pts_0)=>pts_0[clampedIdx]?.y ?? 0
                        }["SvgAreaChart[handleMouseMove > allPts.map()]"])),
                        label: labels[clampedIdx],
                        values: series.map({
                            "SvgAreaChart[handleMouseMove > series.map()]": (s_1, si)=>({
                                    label: s_1.label,
                                    value: allPts[si][clampedIdx]?.v ?? 0,
                                    color: s_1.color
                                })
                        }["SvgAreaChart[handleMouseMove > series.map()]"])
                    });
                }
            })["SvgAreaChart[handleMouseMove]"];
            $[33] = allPts;
            $[34] = chartW;
            $[35] = labels;
            $[36] = series;
            $[37] = t16;
        } else {
            t16 = $[37];
        }
        const handleMouseMove = t16;
        t13 = containerRef;
        t14 = "relative w-full overflow-hidden";
        t5 = `0 0 ${W} ${260}`;
        t6 = "w-full block";
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = {
                height: "260px",
                width: "100%",
                display: "block"
            };
            $[38] = t7;
        } else {
            t7 = $[38];
        }
        t8 = handleMouseMove;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = ({
                "SvgAreaChart[<svg>.onMouseLeave]": ()=>setTooltip(null)
            })["SvgAreaChart[<svg>.onMouseLeave]"];
            $[39] = t9;
        } else {
            t9 = $[39];
        }
        if ($[40] !== t) {
            t10 = t("dashboardHome.charts.areaChart");
            $[40] = t;
            $[41] = t10;
        } else {
            t10 = $[41];
        }
        let t17;
        if ($[42] !== series) {
            t17 = series.map(_SvgAreaChartSeriesMap);
            $[42] = series;
            $[43] = t17;
        } else {
            t17 = $[43];
        }
        if ($[44] !== t17) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this);
            $[44] = t17;
            $[45] = t11;
        } else {
            t11 = $[45];
        }
        t12 = yTicks.map({
            "SvgAreaChart[yTicks.map()]": (tick)=>{
                const y = 222 - tick / yMax * 206;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 50,
                            y1: y,
                            x2: W - 20,
                            y2: y,
                            stroke: "#f0f0f0",
                            strokeWidth: "1",
                            strokeDasharray: tick === 0 ? "none" : "4 4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 263,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 42,
                            y: y + 4,
                            textAnchor: "end",
                            fontSize: "10",
                            fill: "#b0b8c4",
                            children: fmt(tick)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 263,
                            columnNumber: 151
                        }, this)
                    ]
                }, tick, true, {
                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                    lineNumber: 263,
                    columnNumber: 16
                }, this);
            }
        }["SvgAreaChart[yTicks.map()]"]);
        $[7] = W;
        $[8] = chartW;
        $[9] = labels;
        $[10] = series;
        $[11] = step;
        $[12] = t;
        $[13] = yMax;
        $[14] = allPts;
        $[15] = buildPath;
        $[16] = t10;
        $[17] = t11;
        $[18] = t12;
        $[19] = t13;
        $[20] = t14;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
    } else {
        allPts = $[14];
        buildPath = $[15];
        t10 = $[16];
        t11 = $[17];
        t12 = $[18];
        t13 = $[19];
        t14 = $[20];
        t5 = $[21];
        t6 = $[22];
        t7 = $[23];
        t8 = $[24];
        t9 = $[25];
    }
    const t15 = W - 20;
    let t16;
    if ($[46] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: 50,
            y1: 222,
            x2: t15,
            y2: 222,
            stroke: "#e5e7eb",
            strokeWidth: "1.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[46] = t15;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: 50,
            y1: 16,
            x2: 50,
            y2: 222,
            stroke: "#e5e7eb",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[48] = t17;
    } else {
        t17 = $[48];
    }
    let t18;
    if ($[49] !== allPts || $[50] !== buildPath || $[51] !== series) {
        let t19;
        if ($[53] !== allPts || $[54] !== buildPath) {
            t19 = ({
                "SvgAreaChart[series.map()]": (s_3, si_0)=>{
                    const pts_1 = allPts[si_0];
                    const pathD = buildPath(pts_1);
                    const areaD = `${pathD} L ${pts_1[pts_1.length - 1].x},${222} L ${pts_1[0].x},${222} Z`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: areaD,
                        fill: `url(#${s_3.gradId})`
                    }, s_3.gradId, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 324,
                        columnNumber: 18
                    }, this);
                }
            })["SvgAreaChart[series.map()]"];
            $[53] = allPts;
            $[54] = buildPath;
            $[55] = t19;
        } else {
            t19 = $[55];
        }
        t18 = series.map(t19);
        $[49] = allPts;
        $[50] = buildPath;
        $[51] = series;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    let t19;
    if ($[56] !== allPts || $[57] !== buildPath || $[58] !== series) {
        let t20;
        if ($[60] !== allPts || $[61] !== buildPath) {
            t20 = ({
                "SvgAreaChart[series.map()]": (s_4, si_1)=>{
                    const pts_2 = allPts[si_1];
                    const pathD_0 = buildPath(pts_2);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: pathD_0,
                        fill: "none",
                        stroke: s_4.color,
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, `line-${si_1}`, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 349,
                        columnNumber: 18
                    }, this);
                }
            })["SvgAreaChart[series.map()]"];
            $[60] = allPts;
            $[61] = buildPath;
            $[62] = t20;
        } else {
            t20 = $[62];
        }
        t19 = series.map(t20);
        $[56] = allPts;
        $[57] = buildPath;
        $[58] = series;
        $[59] = t19;
    } else {
        t19 = $[59];
    }
    let t20;
    if ($[63] !== tooltip) {
        t20 = tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: tooltip.x,
            y1: 16,
            x2: tooltip.x,
            y2: 222,
            stroke: "#d1d5db",
            strokeWidth: "1",
            strokeDasharray: "4 3"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 368,
            columnNumber: 22
        }, this);
        $[63] = tooltip;
        $[64] = t20;
    } else {
        t20 = $[64];
    }
    let t21;
    if ($[65] !== allPts || $[66] !== labels || $[67] !== series || $[68] !== tooltip) {
        t21 = tooltip && series.map({
            "SvgAreaChart[series.map()]": (s_5, si_2)=>{
                const labels2 = labels;
                const idx_0 = labels2.indexOf(tooltip.label);
                if (idx_0 < 0) {
                    return null;
                }
                const pt = allPts[si_2][idx_0];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pt.x,
                            cy: pt.y,
                            r: "6",
                            fill: s_5.color,
                            fillOpacity: "0.15"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 384,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pt.x,
                            cy: pt.y,
                            r: "3.5",
                            fill: "white",
                            stroke: s_5.color,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                            lineNumber: 384,
                            columnNumber: 111
                        }, this)
                    ]
                }, `dot-${si_2}`, true, {
                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                    lineNumber: 384,
                    columnNumber: 16
                }, this);
            }
        }["SvgAreaChart[series.map()]"]);
        $[65] = allPts;
        $[66] = labels;
        $[67] = series;
        $[68] = tooltip;
        $[69] = t21;
    } else {
        t21 = $[69];
    }
    let t22;
    if ($[70] !== chartW || $[71] !== labels) {
        let t23;
        if ($[73] !== chartW || $[74] !== labels.length) {
            t23 = ({
                "SvgAreaChart[labels.map()]": (label, i_2)=>{
                    const x = 50 + i_2 / (labels.length - 1) * chartW;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x,
                        y: 250,
                        textAnchor: "middle",
                        fontSize: "11",
                        fill: "#9ca3af",
                        children: label
                    }, label + i_2, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 402,
                        columnNumber: 18
                    }, this);
                }
            })["SvgAreaChart[labels.map()]"];
            $[73] = chartW;
            $[74] = labels.length;
            $[75] = t23;
        } else {
            t23 = $[75];
        }
        t22 = labels.map(t23);
        $[70] = chartW;
        $[71] = labels;
        $[72] = t22;
    } else {
        t22 = $[72];
    }
    let t23;
    if ($[76] !== t10 || $[77] !== t11 || $[78] !== t12 || $[79] !== t16 || $[80] !== t18 || $[81] !== t19 || $[82] !== t20 || $[83] !== t21 || $[84] !== t22 || $[85] !== t5 || $[86] !== t6 || $[87] !== t7 || $[88] !== t8 || $[89] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: t5,
            className: t6,
            style: t7,
            onMouseMove: t8,
            onMouseLeave: t9,
            "aria-label": t10,
            children: [
                t11,
                t12,
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[76] = t10;
        $[77] = t11;
        $[78] = t12;
        $[79] = t16;
        $[80] = t18;
        $[81] = t19;
        $[82] = t20;
        $[83] = t21;
        $[84] = t22;
        $[85] = t5;
        $[86] = t6;
        $[87] = t7;
        $[88] = t8;
        $[89] = t9;
        $[90] = t23;
    } else {
        t23 = $[90];
    }
    let t24;
    if ($[91] !== W || $[92] !== tooltip) {
        t24 = tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute pointer-events-none z-10 bg-gray-900 text-white rounded-lg px-3 py-2 shadow-xl text-xs min-w-[120px]",
            style: {
                left: `${tooltip.x / W * 100}%`,
                top: "8px",
                transform: tooltip.x > W * 0.7 ? "translateX(-110%)" : "translateX(10px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-semibold text-gray-300 mb-1.5",
                    children: tooltip.label
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                    lineNumber: 445,
                    columnNumber: 8
                }, this),
                tooltip.values.map(_SvgAreaChartTooltipValuesMap)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 441,
            columnNumber: 22
        }, this);
        $[91] = W;
        $[92] = tooltip;
        $[93] = t24;
    } else {
        t24 = $[93];
    }
    let t25;
    if ($[94] !== t13 || $[95] !== t14 || $[96] !== t23 || $[97] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: t13,
            className: t14,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[94] = t13;
        $[95] = t14;
        $[96] = t23;
        $[97] = t24;
        $[98] = t25;
    } else {
        t25 = $[98];
    }
    return t25;
}
_s(SvgAreaChart, "sPlDA72I/F/2Vmy1yaawgQTektc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SvgAreaChart;
function _SvgAreaChartTooltipValuesMap(v_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-2 h-2 rounded-full flex-shrink-0",
                style: {
                    backgroundColor: v_0.color
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 466,
                columnNumber: 67
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-400",
                children: [
                    v_0.label,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 468,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold ms-auto",
                children: fmt(v_0.value)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 468,
                columnNumber: 61
            }, this)
        ]
    }, v_0.label, true, {
        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
        lineNumber: 466,
        columnNumber: 10
    }, this);
}
function _SvgAreaChartSeriesMap(s_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
        id: s_2.gradId,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                offset: "0%",
                stopColor: s_2.color,
                stopOpacity: "0.22"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 471,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                offset: "85%",
                stopColor: s_2.color,
                stopOpacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 471,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                offset: "100%",
                stopColor: s_2.color,
                stopOpacity: "0"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 471,
                columnNumber: 210
            }, this)
        ]
    }, s_2.gradId, true, {
        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
        lineNumber: 471,
        columnNumber: 10
    }, this);
}
function _SvgAreaChartBuildPath(pts) {
    return pts.map({
        "SvgAreaChart[buildPath > pts.map()]": (p, i_1)=>{
            if (i_1 === 0) {
                return `M ${p.x},${p.y}`;
            }
            const prev = pts[i_1 - 1];
            const cpX = (prev.x + p.x) / 2;
            return `C ${cpX},${prev.y} ${cpX},${p.y} ${p.x},${p.y}`;
        }
    }["SvgAreaChart[buildPath > pts.map()]"]).join(" ");
}
function _SvgAreaChartSeriesFlatMap(s) {
    return s.data;
}
function PropertiesAreaChart(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "8fbaf8bb54f0bd53d1a6b968d1b3aaf526bfe8d175803f5d90fa680be542eb3f") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8fbaf8bb54f0bd53d1a6b968d1b3aaf526bfe8d175803f5d90fa680be542eb3f";
    }
    const { countsData } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    let t1;
    if ($[1] !== period) {
        t1 = getMonthLabels(period);
        $[1] = period;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const months = t1;
    const totalProperties = countsData?.total_properties?.value || 0;
    const totalViews = countsData?.total_views?.value || 0;
    let t2;
    if ($[3] !== period || $[4] !== totalProperties) {
        t2 = buildMonthlyData(totalProperties, period, 0.25);
        $[3] = period;
        $[4] = totalProperties;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const propertiesData = t2;
    let t3;
    if ($[6] !== period || $[7] !== totalViews) {
        t3 = buildMonthlyData(Math.round(totalViews / 30), period, 0.4);
        $[6] = period;
        $[7] = totalViews;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const viewsData = t3;
    let t4;
    if ($[9] !== t) {
        t4 = t("dashboardHome.stats.totalProperties");
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== propertiesData || $[12] !== t4) {
        t5 = {
            data: propertiesData,
            color: "#14b8a6",
            label: t4,
            gradId: "grad-properties"
        };
        $[11] = propertiesData;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t || $[15] !== totalViews || $[16] !== viewsData) {
        t6 = totalViews > 0 ? [
            {
                data: viewsData,
                color: "#818cf8",
                label: t("dashboardHome.stats.totalViews"),
                gradId: "grad-views"
            }
        ] : [];
        $[14] = t;
        $[15] = totalViews;
        $[16] = viewsData;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t5 || $[19] !== t6) {
        t7 = [
            t5,
            ...t6
        ];
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const series = t7;
    let t8;
    if ($[21] !== t) {
        t8 = t("dashboardHome.charts.propertiesPerMonth");
        $[21] = t;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-gray-800 dark:text-slate-100",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 591,
            columnNumber: 10
        }, this);
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t) {
        t10 = t("dashboardHome.subtitle");
        $[25] = t;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 mt-0.5",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11 || $[30] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 615,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== series) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden sm:flex items-center gap-3",
            children: series.map(_PropertiesAreaChartSeriesMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[32] = series;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [
            6,
            12
        ];
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== period || $[36] !== t) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center rounded-lg border border-gray-200 dark:border-slate-600 overflow-hidden bg-gray-50 dark:bg-slate-700 p-0.5 gap-0.5",
            children: t14.map({
                "PropertiesAreaChart[(anonymous)()]": (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "PropertiesAreaChart[(anonymous)() > <button>.onClick]": ()=>setPeriod(p)
                        }["PropertiesAreaChart[(anonymous)() > <button>.onClick]"],
                        className: `text-xs px-3 py-1.5 rounded-md transition-all font-medium ${period === p ? "bg-white dark:bg-slate-600 text-gray-800 dark:text-white shadow-sm border border-gray-200 dark:border-slate-500" : "text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"}`,
                        children: p === 6 ? t("dashboardHome.charts.last6Months") : t("dashboardHome.charts.last12Months")
                    }, p, false, {
                        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                        lineNumber: 640,
                        columnNumber: 52
                    }, this)
            }["PropertiesAreaChart[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[35] = period;
        $[36] = t;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== t13 || $[39] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[38] = t13;
        $[39] = t15;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    let t17;
    if ($[41] !== t12 || $[42] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-5 pt-5 pb-3",
            children: [
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 661,
            columnNumber: 11
        }, this);
        $[41] = t12;
        $[42] = t16;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== months || $[45] !== series) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgAreaChart, {
            series: series,
            labels: months
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 670,
            columnNumber: 11
        }, this);
        $[44] = months;
        $[45] = series;
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-2"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== t17 || $[49] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden",
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[48] = t17;
        $[49] = t18;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    return t20;
}
_s1(PropertiesAreaChart, "J7PzsibMB3wbTrYSdSPZpjbMy8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = PropertiesAreaChart;
function _PropertiesAreaChartSeriesMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                style: {
                    backgroundColor: s.color
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 696,
                columnNumber: 68
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500 dark:text-slate-400",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
                lineNumber: 698,
                columnNumber: 10
            }, this)
        ]
    }, s.gradId, true, {
        fileName: "[project]/src/app/admin/home/components/PropertiesAreaChart.tsx",
        lineNumber: 696,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "SvgAreaChart");
__turbopack_context__.k.register(_c1, "PropertiesAreaChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/home/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/DashboardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/StatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/handle-export.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-bookings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/ChartsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/BookingsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$PropertiesAreaChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/home/components/PropertiesAreaChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
const getStatsCards = (t, countsData)=>{
    const getMetric = (key)=>countsData?.[key] || {};
    return [
        {
            title: t("dashboardHome.stats.totalBookings"),
            value: getMetric("total_bookings").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_bookings").percentage_change || 0)}% ${getMetric("total_bookings").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_bookings").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            title: t("dashboardHome.stats.salesOffers"),
            value: getMetric("sales_offers").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("sales_offers").percentage_change || 0)}% ${getMetric("sales_offers").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("sales_offers").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            title: t("dashboardHome.stats.unitsSold"),
            value: getMetric("units_sold").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("units_sold").percentage_change || 0)}% ${getMetric("units_sold").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("units_sold").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            title: t("dashboardHome.stats.totalValue"),
            value: getMetric("total_value").formatted_value ? `${getMetric("total_value").formatted_value} AED` : "0 AED",
            change: countsData ? `${Math.abs(getMetric("total_value").percentage_change || 0)}% ${getMetric("total_value").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_value").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"]
        },
        {
            title: t("dashboardHome.stats.activeProjects"),
            value: getMetric("active_projects").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("active_projects").percentage_change || 0)}% ${getMetric("active_projects").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("active_projects").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
        },
        {
            title: t("dashboardHome.stats.totalProperties"),
            value: getMetric("total_properties").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_properties").percentage_change || 0)}% ${getMetric("total_properties").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_properties").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            title: t("dashboardHome.stats.totalViews"),
            value: getMetric("total_views").value?.toString() || "0",
            change: countsData ? `${Math.abs(getMetric("total_views").percentage_change || 0)}% ${getMetric("total_views").comparison_label || t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: getMetric("total_views").trend !== "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
        },
        {
            title: t("dashboardHome.stats.featuredAds"),
            value: countsData?.featured_ads?.value?.toString() || "0",
            change: countsData?.featured_ads ? `8% ${t("dashboardHome.stats.vsLast3Months")}` : "",
            isPositive: true,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "db171d9234861abbfacc8c5cbb5270c0a14d299982f1bc9f0b4ff094086bfa50") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db171d9234861abbfacc8c5cbb5270c0a14d299982f1bc9f0b4ff094086bfa50";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-4 animate-pulse h-[80px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 w-24 bg-gray-100 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 130,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-4 bg-gray-100 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 130,
                            columnNumber: 200
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                    lineNumber: 130,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-7 w-16 bg-gray-100 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                    lineNumber: 130,
                    columnNumber: 253
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = StatsCardSkeleton;
// Latest Leads — shows the same bookings styled as "leads"
const LEADS_PER_PAGE = 5;
function LatestLeads({ bookings, className = "" }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-800",
                                        children: t("dashboardHome.leads.title")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/reservations",
                                prefetch: false,
                                className: "text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors",
                                children: t("dashboardHome.leads.viewAll")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4 text-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors truncate",
                                                        children: lead.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-xs text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: lead.property
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-end gap-0.5 flex-shrink-0 ms-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-medium border px-2 py-0.5 rounded ${getStatusClass(lead.status)}`,
                                                children: lead.status ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStageLabel"])(lead.status, t) : t("dashboardHome.leads.new")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            dateStr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-400",
                                                children: dateStr
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                                lineNumber: 215,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, lead.id, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 196,
                                columnNumber: 18
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-xs text-gray-400 py-12",
                            children: t("dashboardHome.leads.noLeads")
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/home/page.client.tsx",
                            lineNumber: 218,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            bookings.length > LEADS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (safePage - 1) * LEADS_PER_PAGE + 1,
                            "-",
                            Math.min(safePage * LEADS_PER_PAGE, bookings.length),
                            " / ",
                            bookings.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: safePage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-medium text-gray-700 px-1",
                                children: [
                                    safePage,
                                    " / ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0",
                                onClick: ()=>setCurrentPage((p_0)=>Math.min(totalPages, p_0 + 1)),
                                disabled: safePage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-3.5 w-3.5 rtl:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/home/page.client.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/home/page.client.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/home/page.client.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 225,
                columnNumber: 44
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/home/page.client.tsx",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
_s(LatestLeads, "QONtwVbq/ynzLGjtZBoubn22GjA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = LatestLeads;
function DashboardPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(108);
    if ($[0] !== "db171d9234861abbfacc8c5cbb5270c0a14d299982f1bc9f0b4ff094086bfa50") {
        for(let $i = 0; $i < 108; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db171d9234861abbfacc8c5cbb5270c0a14d299982f1bc9f0b4ff094086bfa50";
    }
    const { data: session, status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [chartPeriod, setChartPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const token = session?.user?.accessToken;
    let startDate;
    let endDate;
    let days;
    if (dateRange === "last7") {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            const start = new Date();
            start.setDate(start.getDate() - 7);
            t0 = start.toISOString().split("T");
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        startDate = t0[0];
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = new Date().toISOString().split("T");
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        endDate = t1[0];
        days = 7;
    } else {
        if (dateRange === "last30") {
            let t0;
            if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                const start_0 = new Date();
                start_0.setDate(start_0.getDate() - 30);
                t0 = start_0.toISOString().split("T");
                $[3] = t0;
            } else {
                t0 = $[3];
            }
            startDate = t0[0];
            let t1;
            if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = new Date().toISOString().split("T");
                $[4] = t1;
            } else {
                t1 = $[4];
            }
            endDate = t1[0];
            days = 30;
        } else {
            if (dateRange === "all") {
                startDate = "1970-01-01";
                let t0;
                if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
                    t0 = new Date().toISOString().split("T");
                    $[5] = t0;
                } else {
                    t0 = $[5];
                }
                endDate = t0[0];
            }
        }
    }
    let t0;
    if ($[6] !== days || $[7] !== endDate || $[8] !== startDate) {
        t0 = {
            startDate,
            endDate,
            days
        };
        $[6] = days;
        $[7] = endDate;
        $[8] = startDate;
        $[9] = t0;
    } else {
        t0 = $[9];
    }
    const overviewQueryParams = t0;
    let startDate_0;
    let endDate_0;
    let days_0;
    if (chartPeriod === "last7") {
        let t1;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            const start_1 = new Date();
            start_1.setDate(start_1.getDate() - 7);
            t1 = start_1.toISOString().split("T");
            $[10] = t1;
        } else {
            t1 = $[10];
        }
        startDate_0 = t1[0];
        let t2;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = new Date().toISOString().split("T");
            $[11] = t2;
        } else {
            t2 = $[11];
        }
        endDate_0 = t2[0];
        days_0 = 7;
    } else {
        if (chartPeriod === "last30") {
            let t1;
            if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
                const start_2 = new Date();
                start_2.setDate(start_2.getDate() - 30);
                t1 = start_2.toISOString().split("T");
                $[12] = t1;
            } else {
                t1 = $[12];
            }
            startDate_0 = t1[0];
            let t2;
            if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = new Date().toISOString().split("T");
                $[13] = t2;
            } else {
                t2 = $[13];
            }
            endDate_0 = t2[0];
            days_0 = 30;
        } else {
            if (chartPeriod === "all") {
                startDate_0 = "1970-01-01";
                let t1;
                if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
                    t1 = new Date().toISOString().split("T");
                    $[14] = t1;
                } else {
                    t1 = $[14];
                }
                endDate_0 = t1[0];
            }
        }
    }
    let t1;
    if ($[15] !== days_0 || $[16] !== endDate_0 || $[17] !== startDate_0) {
        t1 = {
            startDate: startDate_0,
            endDate: endDate_0,
            days: days_0
        };
        $[15] = days_0;
        $[16] = endDate_0;
        $[17] = startDate_0;
        $[18] = t1;
    } else {
        t1 = $[18];
    }
    const chartQueryParams = t1;
    let t2;
    let t3;
    if ($[19] !== overviewQueryParams.endDate || $[20] !== overviewQueryParams.startDate || $[21] !== token) {
        t2 = [
            "dashboardCounts",
            token,
            overviewQueryParams.startDate,
            overviewQueryParams.endDate
        ];
        t3 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDashboardCounts"])(token, overviewQueryParams.startDate, overviewQueryParams.endDate);
        $[19] = overviewQueryParams.endDate;
        $[20] = overviewQueryParams.startDate;
        $[21] = token;
        $[22] = t2;
        $[23] = t3;
    } else {
        t2 = $[22];
        t3 = $[23];
    }
    const t4 = !!token && sessionStatus !== "loading";
    let t5;
    if ($[24] !== t2 || $[25] !== t3 || $[26] !== t4) {
        t5 = {
            queryKey: t2,
            queryFn: t3,
            enabled: t4,
            staleTime: 300000,
            select: _temp
        };
        $[24] = t2;
        $[25] = t3;
        $[26] = t4;
        $[27] = t5;
    } else {
        t5 = $[27];
    }
    const countsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
    let t6;
    let t7;
    if ($[28] !== overviewQueryParams.days || $[29] !== token) {
        t6 = [
            "dashboardInProgressReservations",
            token,
            overviewQueryParams.days
        ];
        t7 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchInProgressReservations"])(token, overviewQueryParams.days);
        $[28] = overviewQueryParams.days;
        $[29] = token;
        $[30] = t6;
        $[31] = t7;
    } else {
        t6 = $[30];
        t7 = $[31];
    }
    const t8 = !!token && sessionStatus !== "loading";
    let t9;
    if ($[32] !== t6 || $[33] !== t7 || $[34] !== t8) {
        t9 = {
            queryKey: t6,
            queryFn: t7,
            enabled: t8,
            staleTime: 300000,
            select: _temp2
        };
        $[32] = t6;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
    } else {
        t9 = $[35];
    }
    const inProgressQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t9);
    let t10;
    let t11;
    if ($[36] !== chartQueryParams.endDate || $[37] !== chartQueryParams.startDate || $[38] !== token) {
        t10 = [
            "dashboardCounts",
            token,
            chartQueryParams.startDate,
            chartQueryParams.endDate
        ];
        t11 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDashboardCounts"])(token, chartQueryParams.startDate, chartQueryParams.endDate);
        $[36] = chartQueryParams.endDate;
        $[37] = chartQueryParams.startDate;
        $[38] = token;
        $[39] = t10;
        $[40] = t11;
    } else {
        t10 = $[39];
        t11 = $[40];
    }
    const t12 = !!token && sessionStatus !== "loading";
    let t13;
    if ($[41] !== t10 || $[42] !== t11 || $[43] !== t12) {
        t13 = {
            queryKey: t10,
            queryFn: t11,
            enabled: t12,
            staleTime: 300000,
            select: _temp3
        };
        $[41] = t10;
        $[42] = t11;
        $[43] = t12;
        $[44] = t13;
    } else {
        t13 = $[44];
    }
    const chartCountsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t13);
    let t14;
    let t15;
    if ($[45] !== chartQueryParams.days || $[46] !== token) {
        t14 = [
            "dashboardChartStatusMetrics",
            token,
            chartQueryParams.days
        ];
        t15 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchReservationStatusMetrics"])(token, chartQueryParams.days);
        $[45] = chartQueryParams.days;
        $[46] = token;
        $[47] = t14;
        $[48] = t15;
    } else {
        t14 = $[47];
        t15 = $[48];
    }
    const t16 = !!token && sessionStatus !== "loading";
    let t17;
    if ($[49] !== t14 || $[50] !== t15 || $[51] !== t16) {
        t17 = {
            queryKey: t14,
            queryFn: t15,
            enabled: t16,
            staleTime: 300000,
            select: _temp4
        };
        $[49] = t14;
        $[50] = t15;
        $[51] = t16;
        $[52] = t17;
    } else {
        t17 = $[52];
    }
    const chartStatusQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t17);
    const countsData = countsQuery.data;
    const inProgressData = inProgressQuery.data;
    const chartCountsData = chartCountsQuery.data;
    const chartStatusData = chartStatusQuery.data;
    let t18;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "DashboardPage[handleDateRangeChange]": (val)=>{
                setDateRange(val);
                setChartPeriod(val);
            }
        })["DashboardPage[handleDateRangeChange]"];
        $[53] = t18;
    } else {
        t18 = $[53];
    }
    const handleDateRangeChange = t18;
    let t19;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "DashboardPage[handleChartPeriodChange]": (val_0)=>{
                setChartPeriod(val_0);
            }
        })["DashboardPage[handleChartPeriodChange]"];
        $[54] = t19;
    } else {
        t19 = $[54];
    }
    const handleChartPeriodChange = t19;
    let t20;
    if ($[55] !== countsData || $[56] !== t) {
        t20 = getStatsCards(t, countsData);
        $[55] = countsData;
        $[56] = t;
        $[57] = t20;
    } else {
        t20 = $[57];
    }
    const stats = t20;
    let t21;
    if ($[58] !== inProgressData || $[59] !== t) {
        t21 = getInitialBookings(t, inProgressData);
        $[58] = inProgressData;
        $[59] = t;
        $[60] = t21;
    } else {
        t21 = $[60];
    }
    const bookings = t21;
    let t22;
    if ($[61] !== bookings || $[62] !== stats) {
        t22 = ({
            "DashboardPage[handleExport]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$bookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardExportToExcel"])(stats, bookings);
            }
        })["DashboardPage[handleExport]"];
        $[61] = bookings;
        $[62] = stats;
        $[63] = t22;
    } else {
        t22 = $[63];
    }
    const handleExport = t22;
    let t23;
    if ($[64] !== chartCountsQuery || $[65] !== chartQueryParams.endDate || $[66] !== chartQueryParams.startDate || $[67] !== chartStatusQuery || $[68] !== countsQuery || $[69] !== inProgressQuery || $[70] !== overviewQueryParams.endDate || $[71] !== overviewQueryParams.startDate) {
        t23 = ({
            "DashboardPage[handleRefresh]": ()=>{
                countsQuery.refetch();
                inProgressQuery.refetch();
                if (chartQueryParams.startDate !== overviewQueryParams.startDate || chartQueryParams.endDate !== overviewQueryParams.endDate) {
                    chartCountsQuery.refetch();
                }
                chartStatusQuery.refetch();
            }
        })["DashboardPage[handleRefresh]"];
        $[64] = chartCountsQuery;
        $[65] = chartQueryParams.endDate;
        $[66] = chartQueryParams.startDate;
        $[67] = chartStatusQuery;
        $[68] = countsQuery;
        $[69] = inProgressQuery;
        $[70] = overviewQueryParams.endDate;
        $[71] = overviewQueryParams.startDate;
        $[72] = t23;
    } else {
        t23 = $[72];
    }
    const handleRefresh = t23;
    const isStatsLoading = countsQuery.isLoading && !countsData;
    const isRefreshing = countsQuery.isFetching || inProgressQuery.isFetching || chartCountsQuery.isFetching || chartStatusQuery.isFetching;
    let t24;
    if ($[73] !== dateRange || $[74] !== handleExport || $[75] !== handleRefresh || $[76] !== isRefreshing) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {
            dateRange: dateRange,
            setDateRange: handleDateRangeChange,
            onExport: handleExport,
            onRefresh: handleRefresh,
            isRefreshing: isRefreshing
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[73] = dateRange;
        $[74] = handleExport;
        $[75] = handleRefresh;
        $[76] = isRefreshing;
        $[77] = t24;
    } else {
        t24 = $[77];
    }
    let t25;
    if ($[78] !== isStatsLoading || $[79] !== stats) {
        t25 = isStatsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
            children: Array.from({
                length: 8
            }).map(_DashboardPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 637,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
            stats: stats
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 639,
            columnNumber: 48
        }, this);
        $[78] = isStatsLoading;
        $[79] = stats;
        $[80] = t25;
    } else {
        t25 = $[80];
    }
    let t26;
    if ($[81] !== bookings) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$BookingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingsSection"], {
                bookings: bookings
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 648,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[81] = bookings;
        $[82] = t26;
    } else {
        t26 = $[82];
    }
    let t27;
    if ($[83] !== chartCountsData || $[84] !== chartPeriod || $[85] !== chartStatusData) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingsStatusChart"], {
                statusData: chartStatusData,
                countsData: chartCountsData,
                onPeriodChange: handleChartPeriodChange,
                currentPeriod: chartPeriod
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 656,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[83] = chartCountsData;
        $[84] = chartPeriod;
        $[85] = chartStatusData;
        $[86] = t27;
    } else {
        t27 = $[86];
    }
    let t28;
    if ($[87] !== t26 || $[88] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 666,
            columnNumber: 11
        }, this);
        $[87] = t26;
        $[88] = t27;
        $[89] = t28;
    } else {
        t28 = $[89];
    }
    let t29;
    if ($[90] !== bookings) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LatestLeads, {
                bookings: bookings
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 675,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, this);
        $[90] = bookings;
        $[91] = t29;
    } else {
        t29 = $[91];
    }
    let t30;
    if ($[92] !== chartCountsData || $[93] !== chartPeriod || $[94] !== chartStatusData) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$ChartsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesStatusChart"], {
                statusData: chartStatusData,
                countsData: chartCountsData,
                onPeriodChange: handleChartPeriodChange,
                currentPeriod: chartPeriod
            }, void 0, false, {
                fileName: "[project]/src/app/admin/home/page.client.tsx",
                lineNumber: 683,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[92] = chartCountsData;
        $[93] = chartPeriod;
        $[94] = chartStatusData;
        $[95] = t30;
    } else {
        t30 = $[95];
    }
    let t31;
    if ($[96] !== t29 || $[97] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[96] = t29;
        $[97] = t30;
        $[98] = t31;
    } else {
        t31 = $[98];
    }
    let t32;
    if ($[99] !== chartCountsData || $[100] !== chartStatusData) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$home$2f$components$2f$PropertiesAreaChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesAreaChart"], {
            countsData: chartCountsData,
            statusData: chartStatusData
        }, void 0, false, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 702,
            columnNumber: 11
        }, this);
        $[99] = chartCountsData;
        $[100] = chartStatusData;
        $[101] = t32;
    } else {
        t32 = $[101];
    }
    let t33;
    if ($[102] !== t24 || $[103] !== t25 || $[104] !== t28 || $[105] !== t31 || $[106] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 md:p-6 space-y-4 max-w-full overflow-hidden",
            children: [
                t24,
                t25,
                t28,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/home/page.client.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, this);
        $[102] = t24;
        $[103] = t25;
        $[104] = t28;
        $[105] = t31;
        $[106] = t32;
        $[107] = t33;
    } else {
        t33 = $[107];
    }
    return t33;
}
_s1(DashboardPage, "SedZxDFJmGd/HAgj7L9vCCfkF3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c2 = DashboardPage;
function _DashboardPageAnonymous(_, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCardSkeleton, {}, idx, false, {
        fileName: "[project]/src/app/admin/home/page.client.tsx",
        lineNumber: 724,
        columnNumber: 10
    }, this);
}
function _temp4(res_2) {
    return res_2?.data ?? res_2;
}
function _temp3(res_1) {
    return res_1?.data ?? res_1;
}
function _temp2(res_0) {
    return res_0;
}
function _temp(res) {
    return res?.data ?? res;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatsCardSkeleton");
__turbopack_context__.k.register(_c1, "LatestLeads");
__turbopack_context__.k.register(_c2, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cfa8e791._.js.map