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
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#008081] data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-neutral-700", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
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
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverDescription",
    ()=>PopoverDescription,
    "PopoverHeader",
    ()=>PopoverHeader,
    "PopoverTitle",
    ()=>PopoverTitle,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Popover(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
            "data-slot": "popover",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Popover;
function PopoverTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
            "data-slot": "popover-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = PopoverTrigger;
function PopoverContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, align: t1, sideOffset: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const align = t1 === undefined ? "center" : t1;
    const sideOffset = t2 === undefined ? 4 : t2;
    let t3;
    if ($[6] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-none outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", className);
        $[6] = className;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== align || $[9] !== props || $[10] !== sideOffset || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Portal, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Content, {
                "data-slot": "popover-content",
                align: align,
                sideOffset: sideOffset,
                className: t3,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/popover.tsx",
                lineNumber: 105,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[8] = align;
        $[9] = props;
        $[10] = sideOffset;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c2 = PopoverContent;
function PopoverAnchor(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Anchor, {
            "data-slot": "popover-anchor",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = PopoverAnchor;
function PopoverHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1 text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "popover-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 176,
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
_c4 = PopoverHeader;
function PopoverTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "popover-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 217,
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
_c5 = PopoverTitle;
function PopoverDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7835b6c82c80886936fa1934bf94e84ecf7b80bafd5dab936c7419b36054dad6";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            "data-slot": "popover-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 258,
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
_c6 = PopoverDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverAnchor");
__turbopack_context__.k.register(_c4, "PopoverHeader");
__turbopack_context__.k.register(_c5, "PopoverTitle");
__turbopack_context__.k.register(_c6, "PopoverDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/command.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Command(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
            "data-slot": "command",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 41,
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
_c = Command;
function CommandDialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
    }
    let children;
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ title: t1, description: t2, children, className, showCloseButton: t3, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
    }
    const title = t1 === undefined ? "Command Palette" : t1;
    const description = t2 === undefined ? "Search for a command to run..." : t2;
    t3 === undefined ? true : t3;
    let t4;
    if ($[8] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            className: "sr-only",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== className) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-0", className);
        $[15] = className;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== children) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
            className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[17] = children;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== props || $[23] !== t6 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            ...props,
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[22] = props;
        $[23] = t6;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    return t10;
}
_c1 = CommandDialog;
function CommandInput(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
            className: "size-4 shrink-0 opacity-50"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "command-input-wrapper",
            className: "flex h-9 items-center gap-2 border-b px-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input, {
                    "data-slot": "command-input",
                    className: t2,
                    ...props
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/command.tsx",
                    lineNumber: 192,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 192,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c2 = CommandInput;
function CommandList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List, {
            "data-slot": "command-list",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 233,
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
_c3 = CommandList;
function CommandEmpty(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty, {
            "data-slot": "command-empty",
            className: "py-6 text-center text-sm",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 262,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c4 = CommandEmpty;
function CommandGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
            "data-slot": "command-group",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 302,
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
_c5 = CommandGroup;
function CommandSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 h-px bg-border", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Separator, {
            "data-slot": "command-separator",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 343,
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
_c6 = CommandSeparator;
function CommandItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item, {
            "data-slot": "command-item",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 384,
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
_c7 = CommandItem;
function CommandShortcut(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb6f03276a73941fd761fb9c5a34cf27ce3f32f6f88678cfd9fed7e0c2a5dc28";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ms-auto text-xs tracking-widest text-muted-foreground", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-slot": "command-shortcut",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 425,
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
_c8 = CommandShortcut;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Command");
__turbopack_context__.k.register(_c1, "CommandDialog");
__turbopack_context__.k.register(_c2, "CommandInput");
__turbopack_context__.k.register(_c3, "CommandList");
__turbopack_context__.k.register(_c4, "CommandEmpty");
__turbopack_context__.k.register(_c5, "CommandGroup");
__turbopack_context__.k.register(_c6, "CommandSeparator");
__turbopack_context__.k.register(_c7, "CommandItem");
__turbopack_context__.k.register(_c8, "CommandShortcut");
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
"[project]/src/components/shared/user-select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSelect",
    ()=>UserSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api/services/users.service.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
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
const getInitials = (name)=>{
    return name.split(" ").map((n)=>n[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
};
function UserAvatar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9304492c340a6fd68229e44d9c3509561c3c5d5f59447ace0f64d3932a9046d0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9304492c340a6fd68229e44d9c3509561c3c5d5f59447ace0f64d3932a9046d0";
    }
    const { src, label } = t0;
    const [hasError, setHasError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    if (!src || hasError) {
        let t1;
        if ($[1] !== label) {
            t1 = getInitials(label);
            $[1] = label;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        let t2;
        if ($[3] !== t1) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 46,
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
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "UserAvatar[<img>.onError]": ()=>setHasError(true)
        })["UserAvatar[<img>.onError]"];
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== label || $[7] !== src) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: label,
            referrerPolicy: "no-referrer",
            onError: t1,
            className: "h-full w-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = label;
        $[7] = src;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_s(UserAvatar, "0lWSx5YqYPOl7PiOJe/TIAtHv6A=");
_c = UserAvatar;
function UserSelect(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "9304492c340a6fd68229e44d9c3509561c3c5d5f59447ace0f64d3932a9046d0") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9304492c340a6fd68229e44d9c3509561c3c5d5f59447ace0f64d3932a9046d0";
    }
    const { selectedId, onChange, hasError } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [search, setSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [debouncedSearch, setDebouncedSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const observerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    let t1;
    let t2;
    if ($[1] !== search) {
        t1 = ({
            "UserSelect[useEffect()]": ()=>{
                const handler = setTimeout({
                    "UserSelect[useEffect() > setTimeout()]": ()=>{
                        setDebouncedSearch(search);
                    }
                }["UserSelect[useEffect() > setTimeout()]"], 300);
                return ()=>clearTimeout(handler);
            }
        })["UserSelect[useEffect()]"];
        t2 = [
            search
        ];
        $[1] = search;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t1, t2);
    let t3;
    if ($[4] !== debouncedSearch) {
        t3 = [
            "dashboardUsersInfinite",
            debouncedSearch
        ];
        $[4] = debouncedSearch;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== debouncedSearch || $[7] !== token) {
        t4 = (t5)=>{
            const { pageParam: t6 } = t5;
            const pageParam = t6 === undefined ? 1 : t6;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchDashboardUsers"])(token, pageParam, 20, debouncedSearch);
        };
        $[6] = debouncedSearch;
        $[7] = token;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = !!token && open;
    let t6;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = {
            queryKey: t3,
            queryFn: t4,
            initialPageParam: 1,
            getNextPageParam: _temp,
            enabled: t5
        };
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t6);
    let t7;
    if ($[13] !== selectedId) {
        t7 = [
            "dashboardUserDetail",
            selectedId
        ];
        $[13] = selectedId;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== selectedId || $[16] !== token) {
        t8 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchUsersDetails"])(selectedId, token);
        $[15] = selectedId;
        $[16] = token;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const t9 = !!token && !!selectedId;
    let t10;
    if ($[18] !== t7 || $[19] !== t8 || $[20] !== t9) {
        t10 = {
            queryKey: t7,
            queryFn: t8,
            enabled: t9
        };
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const { data: selectedUserData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t10);
    let t11;
    if ($[22] !== data?.pages) {
        t11 = data?.pages.flatMap(_UserSelectAnonymous) || [];
        $[22] = data?.pages;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const users = t11;
    let t12;
    if ($[24] !== users) {
        t12 = users.map(_UserSelectUsersMap);
        $[24] = users;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    const options = t12;
    let t13;
    bb0: {
        let t14;
        if ($[26] !== options || $[27] !== selectedId) {
            let t15;
            if ($[29] !== selectedId) {
                t15 = ({
                    "UserSelect[options.find()]": (o)=>o.value === selectedId
                })["UserSelect[options.find()]"];
                $[29] = selectedId;
                $[30] = t15;
            } else {
                t15 = $[30];
            }
            t14 = options.find(t15);
            $[26] = options;
            $[27] = selectedId;
            $[28] = t14;
        } else {
            t14 = $[28];
        }
        const found = t14;
        if (found) {
            t13 = found.label;
            break bb0;
        }
        if (selectedUserData) {
            const userObj = selectedUserData?.data || selectedUserData;
            if (userObj) {
                const id_0 = userObj.id || userObj.user_id;
                if (Number(id_0) === selectedId) {
                    let t15;
                    if ($[31] !== id_0 || $[32] !== userObj.email || $[33] !== userObj.first_name || $[34] !== userObj.last_name || $[35] !== userObj.name) {
                        t15 = [
                            userObj.first_name,
                            userObj.last_name
                        ].filter(Boolean).join(" ") || userObj.name || userObj.email || `User ${id_0}`;
                        $[31] = id_0;
                        $[32] = userObj.email;
                        $[33] = userObj.first_name;
                        $[34] = userObj.last_name;
                        $[35] = userObj.name;
                        $[36] = t15;
                    } else {
                        t15 = $[36];
                    }
                    t13 = t15;
                    break bb0;
                }
            }
        }
        t13 = null;
    }
    const selectedLabel = t13;
    let t14;
    let t15;
    if ($[37] !== fetchNextPage || $[38] !== hasNextPage || $[39] !== isFetchingNextPage) {
        t14 = ({
            "UserSelect[useEffect()]": ()=>{
                if (!hasNextPage || isFetchingNextPage) {
                    return;
                }
                const el = observerRef.current;
                if (!el) {
                    return;
                }
                const observer = new IntersectionObserver((entries)=>{
                    if (entries[0].isIntersecting) {
                        fetchNextPage();
                    }
                }, {
                    threshold: 0.1
                });
                observer.observe(el);
                return ()=>observer.disconnect();
            }
        })["UserSelect[useEffect()]"];
        t15 = [
            hasNextPage,
            isFetchingNextPage,
            fetchNextPage
        ];
        $[37] = fetchNextPage;
        $[38] = hasNextPage;
        $[39] = isFetchingNextPage;
        $[40] = t14;
        $[41] = t15;
    } else {
        t14 = $[40];
        t15 = $[41];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t14, t15);
    const t16 = hasError && "border-red-400 focus:ring-red-500 focus:border-red-500";
    const t17 = !selectedId && "text-muted-foreground";
    let t18;
    if ($[42] !== t16 || $[43] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-between h-auto min-h-12 py-3 px-3 font-normal bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 text-start", t16, t17);
        $[42] = t16;
        $[43] = t17;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== selectedLabel || $[46] !== t) {
        t19 = selectedLabel || t("userSelect.placeholder");
        $[45] = selectedLabel;
        $[46] = t;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate flex-1",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
            className: "ms-2 h-4 w-4 shrink-0 opacity-50"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== open || $[52] !== t18 || $[53] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: t18,
                children: [
                    t20,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 343,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[51] = open;
        $[52] = t18;
        $[53] = t20;
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    let t23;
    if ($[55] !== t) {
        t23 = t("userSelect.searchPlaceholder");
        $[55] = t;
        $[56] = t23;
    } else {
        t23 = $[56];
    }
    let t24;
    if ($[57] !== search || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
            value: search,
            onValueChange: setSearch,
            placeholder: t23
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[57] = search;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== hasNextPage || $[61] !== isError || $[62] !== isFetchingNextPage || $[63] !== isLoading || $[64] !== onChange || $[65] !== options || $[66] !== selectedId || $[67] !== t) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
            className: "max-h-[300px] overflow-y-auto",
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 space-y-1",
                children: [
                    ...Array(4)
                ].map(_UserSelectAnonymous2)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 370,
                columnNumber: 79
            }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-500 p-3 text-center",
                children: t("userSelect.error")
            }, void 0, false, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 370,
                columnNumber: 171
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                        children: t("userSelect.empty")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/user-select.tsx",
                        lineNumber: 370,
                        columnNumber: 284
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                        children: options.map({
                            "UserSelect[options.map()]": (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                    value: String(opt.value),
                                    onSelect: {
                                        "UserSelect[options.map() > <CommandItem>.onSelect]": ()=>{
                                            onChange(opt.value === selectedId ? null : opt.value);
                                            setOpen(false);
                                        }
                                    }["UserSelect[options.map() > <CommandItem>.onSelect]"],
                                    className: "flex items-center justify-between cursor-pointer px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center text-xs font-semibold overflow-hidden border border-teal-200/50 dark:border-teal-800/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserAvatar, {
                                                        src: opt.avatar,
                                                        label: opt.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/user-select.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 504
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/user-select.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 266
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col min-w-0 text-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate",
                                                            children: opt.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shared/user-select.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 609
                                                        }, this),
                                                        opt.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400 truncate",
                                                            children: [
                                                                opt.email,
                                                                " ",
                                                                opt.role ? `• ${opt.role}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/user-select.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 721
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shared/user-select.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 559
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/user-select.tsx",
                                            lineNumber: 376,
                                            columnNumber: 217
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0 transition-opacity", selectedId === opt.value ? "opacity-100 text-teal-600 dark:text-teal-400" : "opacity-0")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/user-select.tsx",
                                            lineNumber: 376,
                                            columnNumber: 854
                                        }, this)
                                    ]
                                }, opt.value, true, {
                                    fileName: "[project]/src/components/shared/user-select.tsx",
                                    lineNumber: 371,
                                    columnNumber: 49
                                }, this)
                        }["UserSelect[options.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/user-select.tsx",
                        lineNumber: 370,
                        columnNumber: 337
                    }, this),
                    hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: observerRef,
                        className: "p-3 flex justify-center text-xs text-gray-500",
                        children: isFetchingNextPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-4 w-4 animate-spin text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/user-select.tsx",
                            lineNumber: 377,
                            columnNumber: 177
                        }, this) : t("userSelect.loadMore")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/user-select.tsx",
                        lineNumber: 377,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[60] = hasNextPage;
        $[61] = isError;
        $[62] = isFetchingNextPage;
        $[63] = isLoading;
        $[64] = onChange;
        $[65] = options;
        $[66] = selectedId;
        $[67] = t;
        $[68] = t25;
    } else {
        t25 = $[68];
    }
    let t26;
    if ($[69] !== t24 || $[70] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            className: "w-[var(--radix-popover-trigger-width)] p-0",
            align: "start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                shouldFilter: false,
                children: [
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 392,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[69] = t24;
        $[70] = t25;
        $[71] = t26;
    } else {
        t26 = $[71];
    }
    let t27;
    if ($[72] !== open || $[73] !== t22 || $[74] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: open,
            onOpenChange: setOpen,
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/user-select.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[72] = open;
        $[73] = t22;
        $[74] = t26;
        $[75] = t27;
    } else {
        t27 = $[75];
    }
    return t27;
}
_s1(UserSelect, "VOOxZH80IUF7WkEVGFyaUjWKu+c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = UserSelect;
function _UserSelectAnonymous2(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 px-3 py-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 rounded-full bg-gray-100 dark:bg-neutral-800 animate-pulse flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 412,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1.5 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-24 bg-gray-100 dark:bg-neutral-800 rounded animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/user-select.tsx",
                        lineNumber: 412,
                        columnNumber: 215
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-40 bg-gray-100 dark:bg-neutral-800 rounded animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/user-select.tsx",
                        lineNumber: 412,
                        columnNumber: 297
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/user-select.tsx",
                lineNumber: 412,
                columnNumber: 171
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/shared/user-select.tsx",
        lineNumber: 412,
        columnNumber: 10
    }, this);
}
function _UserSelectUsersMap(user) {
    const id = user.id || user.user_id;
    const name = [
        user.first_name,
        user.last_name
    ].filter(Boolean).join(" ") || user.name || user.email || `User ${id}`;
    return {
        value: Number(id),
        label: name,
        email: user.email,
        role: user.role?.role_name || user.role_name,
        avatar: user.profile_picture
    };
}
function _UserSelectAnonymous(page) {
    return page?.data || [];
}
function _temp(lastPage, allPages) {
    const total = lastPage?.total || 0;
    const loadedCount = allPages.reduce(_UserSelectAnonymousAllPagesReduce, 0);
    return loadedCount < total ? allPages.length + 1 : undefined;
}
function _UserSelectAnonymousAllPagesReduce(acc, p) {
    return acc + (p?.data?.length || 0);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "UserAvatar");
__turbopack_context__.k.register(_c1, "UserSelect");
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
"[project]/src/hooks/use-property-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProjectsForSelect",
    ()=>useProjectsForSelect,
    "usePropertySubtypes",
    ()=>usePropertySubtypes,
    "usePropertyTypes",
    ()=>usePropertyTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/utils/map-project.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function usePropertyTypes() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "PropertiesType"
            ],
            queryFn: _temp,
            select: _temp2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s(usePropertyTypes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp2(response) {
    let arr = response?.data || response || [];
    if (arr && typeof arr === "object" && !Array.isArray(arr) && Array.isArray(arr.data)) {
        arr = arr.data;
    }
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.map(_usePropertyTypesAnonymousArrMap);
}
function _usePropertyTypesAnonymousArrMap(item) {
    const raw = item?.data || item;
    return {
        ...raw,
        id: raw.id ?? raw.property_type_id ?? raw.type_id,
        name: (raw.name ?? raw.property_type_name ?? raw.type_name ?? String(raw.id ?? raw.property_type_id ?? raw.type_id ?? "")).trim()
    };
}
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getPropertyTypes();
}
function usePropertySubtypes() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "PropertiesSubtype"
            ],
            queryFn: _temp3,
            select: _temp4
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s1(usePropertySubtypes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp4(response) {
    const arr = response?.data || response || [];
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.map(_usePropertySubtypesAnonymousArrMap);
}
function _usePropertySubtypesAnonymousArrMap(item) {
    const raw = item?.data || item;
    return {
        ...raw,
        id: raw.id ?? raw.property_subtype_id,
        name: (raw.name ?? raw.property_subtype_name ?? raw.subtype_name ?? String(raw.id ?? "")).trim(),
        property_type_id: raw.property_type_id ?? raw.type_id
    };
}
function _temp3() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getPropertySubtypes();
}
function useProjectsForSelect(page, perPage, t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2357cebd4a58546b3d7c40e7baf08698bff6cba839b41e56a31980ef0a0c90b8";
    }
    const search = t0 === undefined ? "" : t0;
    const t1 = page ?? "all";
    const t2 = perPage ?? "all";
    let t3;
    if ($[1] !== search || $[2] !== t1 || $[3] !== t2) {
        t3 = [
            "Projects",
            t1,
            t2,
            search
        ];
        $[1] = search;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== page || $[6] !== perPage || $[7] !== search) {
        t4 = ()=>page !== undefined && perPage !== undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getProjects(page, perPage, search) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getAllProjects(search);
        $[5] = page;
        $[6] = perPage;
        $[7] = search;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = {
            queryKey: t3,
            queryFn: t4,
            staleTime: 300000,
            gcTime: 1800000,
            select: _temp5
        };
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
}
_s2(useProjectsForSelect, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp5(response) {
    const { itemsArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$utils$2f$map$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackProjectsResponse"])(response);
    const rawList = itemsArray.length > 0 ? itemsArray : Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
    if (!Array.isArray(rawList)) {
        return [];
    }
    return rawList.map(_useProjectsForSelectAnonymousRawListMap);
}
function _useProjectsForSelectAnonymousRawListMap(item) {
    const raw = item?.data || item;
    return {
        ...raw,
        project_id: raw.project_id ?? raw.id,
        project_name: raw.project_name ?? raw.name ?? raw.title ?? String(raw.project_id ?? raw.id ?? "")
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-expand-url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useExpandUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useExpandUrl() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "7f8eafb06ba012211477a12f3eed626a053cfaf1713ffbd694a02a87425bdd55") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f8eafb06ba012211477a12f3eed626a053cfaf1713ffbd694a02a87425bdd55";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            mutationFn: _temp
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
    let t1;
    if ($[2] !== mutation.error || $[3] !== mutation.isPending || $[4] !== mutation.mutateAsync) {
        t1 = {
            expandUrl: mutation.mutateAsync,
            isExpanding: mutation.isPending,
            error: mutation.error
        };
        $[2] = mutation.error;
        $[3] = mutation.isPending;
        $[4] = mutation.mutateAsync;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    return t1;
}
_s(useExpandUrl, "Kvw+Q3+Z705KOo+cvu2gXTQDxwg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
async function _temp(shortUrl) {
    const res = await fetch(`/api/expand-url?shortUrl=${encodeURIComponent(shortUrl)}`);
    if (!res.ok) {
        throw new Error("Failed to expand URL");
    }
    const data = await res.json();
    const coords = extractCoordinatesFromUrl(data.longUrl);
    if (!coords) {
        throw new Error("Could not extract coordinates from URL");
    }
    return coords;
}
function extractCoordinatesFromUrl(url) {
    try {
        const decodedUrl = decodeURIComponent(url);
        const patterns = [
            {
                regex: /@(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /!3d(-?\d+\.?\d*).*?!4d(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /!4d(-?\d+\.?\d*).*?!3d(-?\d+\.?\d*)/,
                latFirst: false
            },
            {
                regex: /[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /[?&]ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /[?&]center=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /[?&]sll=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /place\/.*?@(-?\d+\.?\d*),(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /data=.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /1s0x[a-f0-9]+:0x[a-f0-9]+.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/,
                latFirst: true
            },
            {
                regex: /pb=.*?2d(-?\d+\.?\d*).*?3d(-?\d+\.?\d*)/,
                latFirst: false
            }
        ];
        for (const { regex, latFirst } of patterns){
            const match = decodedUrl.match(regex);
            if (match) {
                const lat = latFirst ? parseFloat(match[1]) : parseFloat(match[2]);
                const lng = latFirst ? parseFloat(match[2]) : parseFloat(match[1]);
                if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                    return {
                        lat,
                        lng
                    };
                }
            }
        }
        return null;
    } catch (error) {
        console.error("Error extracting coordinates:", error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-get-location-details.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGetLocationDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useGetLocationDetails() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "b598f614bc7a042dfc82509766d63c617d58215a1a327362462aa4b6f98b48e2") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b598f614bc7a042dfc82509766d63c617d58215a1a327362462aa4b6f98b48e2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            mutationFn: _temp
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
    let t1;
    if ($[2] !== mutation.error || $[3] !== mutation.isPending || $[4] !== mutation.mutateAsync) {
        t1 = {
            getLocationDetails: mutation.mutateAsync,
            isFetching: mutation.isPending,
            error: mutation.error
        };
        $[2] = mutation.error;
        $[3] = mutation.isPending;
        $[4] = mutation.mutateAsync;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    return t1;
}
_s(useGetLocationDetails, "Kvw+Q3+Z705KOo+cvu2gXTQDxwg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
async function _temp(t0) {
    const { lat, lng } = t0;
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${"AIzaSyA7pPVZpga50Hvurvanqkal3QEF9LPbG-g"}`);
    if (!res.ok) {
        throw new Error("Failed to fetch location data");
    }
    const data = await res.json();
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/maps/parse-map-url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility to extract latitude and longitude from various Google Maps URLs or direct coordinate strings.
 */ __turbopack_context__.s([
    "buildGoogleMapsUrl",
    ()=>buildGoogleMapsUrl,
    "isValidLatLng",
    ()=>isValidLatLng,
    "resolveGoogleMapsUrl",
    ()=>resolveGoogleMapsUrl
]);
function extractDirectCoordinates(input) {
    if (!input || typeof input !== "string") return null;
    const trimmed = input.trim();
    // 1. Direct "lat, lng" or "lat,lng" string
    const directMatch = trimmed.match(/^(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)$/);
    if (directMatch) {
        const lat = parseFloat(directMatch[1]);
        const lng = parseFloat(directMatch[2]);
        if (isValidLatLng(lat, lng)) {
            return {
                lat,
                lng
            };
        }
    }
    // 2. Decode URI if needed
    let decoded = trimmed;
    try {
        decoded = decodeURIComponent(trimmed);
    } catch  {
        decoded = trimmed;
    }
    // 3. Various Google Maps URL patterns
    const patterns = [
        // /@25.2048,55.2708,17z
        {
            regex: /@(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // ?q=25.2048,55.2708 or &q=25.2048,55.2708
        {
            regex: /[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // ?ll=25.2048,55.2708
        {
            regex: /[?&]ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // ?center=25.2048,55.2708
        {
            regex: /[?&]center=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // ?sll=25.2048,55.2708
        {
            regex: /[?&]sll=(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // !3d25.2048!4d55.2708
        {
            regex: /!3d(-?\d+\.?\d*).*?!4d(-?\d+\.?\d*)/,
            latFirst: true
        },
        // !4d55.2708!3d25.2048
        {
            regex: /!4d(-?\d+\.?\d*).*?!3d(-?\d+\.?\d*)/,
            latFirst: false
        },
        // place/.../@25.2048,55.2708
        {
            regex: /place\/.*?@(-?\d+\.?\d*),(-?\d+\.?\d*)/,
            latFirst: true
        },
        // data=...3d25.2048...4d55.2708
        {
            regex: /data=.*?3d(-?\d+\.?\d*).*?4d(-?\d+\.?\d*)/,
            latFirst: true
        },
        // pb=...2d55.2708...3d25.2048
        {
            regex: /pb=.*?2d(-?\d+\.?\d*).*?3d(-?\d+\.?\d*)/,
            latFirst: false
        }
    ];
    for (const { regex, latFirst } of patterns){
        const match = decoded.match(regex);
        if (match) {
            const lat = parseFloat(latFirst ? match[1] : match[2]);
            const lng = parseFloat(latFirst ? match[2] : match[1]);
            if (isValidLatLng(lat, lng)) {
                return {
                    lat,
                    lng
                };
            }
        }
    }
    return null;
}
async function resolveGoogleMapsUrl(url) {
    const direct = extractDirectCoordinates(url);
    if (direct) return direct;
    const trimmed = url.trim();
    // Check if it's a short URL (goo.gl, maps.app.goo.gl)
    if (trimmed.includes("goo.gl") || trimmed.includes("maps.app")) {
        try {
            const res = await fetch(`/api/expand-url?shortUrl=${encodeURIComponent(trimmed)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.longUrl) {
                    const fromExpanded = extractDirectCoordinates(data.longUrl);
                    if (fromExpanded) return fromExpanded;
                }
            }
        } catch (err) {
            console.error("Failed to expand short Google Maps URL:", err);
        }
    }
    return null;
}
function isValidLatLng(lat, lng) {
    return !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180 && !(lat === 0 && lng === 0);
}
function buildGoogleMapsUrl(lat, lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
}
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
"[project]/src/features/ready-market/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "READY_UNIT_DEFAULTS",
    ()=>READY_UNIT_DEFAULTS,
    "readyUnitCreateSchema",
    ()=>readyUnitCreateSchema,
    "readyUnitSchema",
    ()=>readyUnitSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const optionalNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nan()
]).optional().refine((v)=>v === undefined || Number.isNaN(v) || v >= 0, {
    message: "validation.positive_number"
});
const requiredNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
    message: "validation.required"
}).refine((v)=>!Number.isNaN(v), {
    message: "validation.required"
}).refine((v)=>v >= 0, {
    message: "validation.positive_number"
});
const isHttpUrl = (value)=>{
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch  {
        return false;
    }
};
const readyUnitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    listing_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "sale",
        "rent"
    ], {
        message: "validation.required"
    }),
    property_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "validation.required").max(255),
    property_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((v)=>v.replace(/<[^>]*>/g, "").trim().length > 0, {
        message: "validation.required"
    }),
    property_type_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    property_subtype_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    price: requiredNumber,
    size: requiredNumber,
    bedrooms: requiredNumber,
    bathrooms: requiredNumber,
    floor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    view: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    year_built: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20).optional(),
    parking_spaces: optionalNumber,
    payment_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    payment_intervals: optionalNumber,
    payment_down_payment: optionalNumber,
    user_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "validation.required"
    }).nullable().refine((v)=>v !== null, {
        message: "validation.required"
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "validation.required").email("validation.email_invalid"),
    phone_number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "validation.required").max(255),
    whatsapp_number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "validation.required").max(255),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "active",
        "inactive"
    ]),
    availability_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "available",
        "reserved",
        "sold"
    ]),
    construction_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ready",
        "under-construction",
        "off-plan"
    ]),
    finishing_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "finished",
        "semi-finished",
        "unfinished"
    ]),
    google_map_link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, "validation.required").refine(isHttpUrl, {
        message: "validation.url_invalid"
    }),
    latitude: requiredNumber.refine((v)=>v >= -90 && v <= 90, {
        message: "validation.latitude_range"
    }),
    longitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "validation.required"
    }).refine((v)=>!Number.isNaN(v), {
        message: "validation.required"
    }).refine((v)=>v >= -180 && v <= 180, {
        message: "validation.longitude_range"
    }),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    area: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    feature_ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())
}).superRefine((data, ctx)=>{
    if (data.payment_type === "installments") {
        if (!(Number(data.payment_intervals) >= 1)) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "payment_intervals"
                ],
                message: "validation.required"
            });
        }
        if (data.payment_down_payment === undefined || Number.isNaN(data.payment_down_payment)) {
            ctx.addIssue({
                code: "custom",
                path: [
                    "payment_down_payment"
                ],
                message: "validation.required"
            });
        }
    }
});
/** Create also requires floor, city and area; in edit they are optional. */ const CREATE_REQUIRED = [
    "floor",
    "city",
    "area"
];
const readyUnitCreateSchema = readyUnitSchema.superRefine((data, ctx)=>{
    CREATE_REQUIRED.forEach((field)=>{
        if (!data[field]?.trim()) ctx.addIssue({
            code: "custom",
            path: [
                field
            ],
            message: "validation.required"
        });
    });
});
const READY_UNIT_DEFAULTS = {
    listing_type: "sale",
    property_name: "",
    description: "",
    property_type_id: "",
    property_subtype_id: "",
    floor: "",
    view: "",
    year_built: "",
    payment_type: "",
    user_id: null,
    email: "",
    phone_number: "",
    whatsapp_number: "",
    status: "active",
    availability_status: "available",
    construction_status: "ready",
    finishing_status: "finished",
    google_map_link: "",
    city: "",
    area: "",
    address: "",
    feature_ids: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReadyUnitFormData",
    ()=>buildReadyUnitFormData,
    "readyUnitToFormValues",
    ()=>readyUnitToFormValues,
    "toReadyUnitRow",
    ()=>toReadyUnitRow,
    "unpackReadyUnitsList",
    ()=>unpackReadyUnitsList
]);
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
    append("floor", values.floor?.trim());
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
    if (values.payment_type) {
        append("payment_plan[payment_type]", values.payment_type);
        append("payment_plan[total_cost]", values.price);
        if (values.payment_type === "installments") {
            append("payment_plan[intervals]", values.payment_intervals);
            append("payment_plan[down_payment_price]", values.payment_down_payment);
        }
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
function readyUnitToFormValues(unit) {
    const up = unit.user_property;
    const owner = up?.user;
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
        floor: unit.floor ?? "",
        view: unit.view ?? "",
        year_built: up?.built_year ?? up?.year_built ?? "",
        payment_type: unit.payment_plan?.payment_type ?? "",
        payment_intervals: toNumber(unit.payment_plan?.intervals),
        payment_down_payment: toNumber(unit.payment_plan?.down_payment_price),
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
"[project]/src/features/ready-market/components/ReadyUnitForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadyUnitForm",
    ()=>ReadyUnitForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$user$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/user-select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-property-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-expand-url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-get-location-details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/locations.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/use-base-path.ts [app-client] (ecmascript)");
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
const MAX_IMAGES = 10;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const AMENITIES_PREVIEW = 8;
const card = "rounded-xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900";
const label = "mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300";
const inputCls = "h-10 bg-gray-50 text-xs dark:bg-neutral-800";
const thumbCard = "relative w-[110px] rounded-lg bg-gray-100 p-2.5 dark:bg-neutral-800";
function FieldError(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "4edad3d69947fadfb5d5e3d1ee76cb6f820894899b86db6bfcfd54989b03cc0e") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4edad3d69947fadfb5d5e3d1ee76cb6f820894899b86db6bfcfd54989b03cc0e";
    }
    const { message } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== message || $[2] !== t) {
        t1 = message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-[11px] text-red-500",
            children: t(message)
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
            lineNumber: 59,
            columnNumber: 20
        }, this) : null;
        $[1] = message;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(FieldError, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = FieldError;
function Required() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4edad3d69947fadfb5d5e3d1ee76cb6f820894899b86db6bfcfd54989b03cc0e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4edad3d69947fadfb5d5e3d1ee76cb6f820894899b86db6bfcfd54989b03cc0e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: " *"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = Required;
function ReadyUnitForm({ unitId, initialValues, existingMedias = [] }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"])();
    const isEdit = unitId !== undefined;
    const save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveReadyUnit"])(unitId);
    const { register, control, handleSubmit, setValue, watch, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readyUnitSchema"]),
        defaultValues: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_DEFAULTS"],
            ...initialValues
        }
    });
    const listingType = watch("listing_type");
    const propertyTypeId = watch("property_type_id");
    const paymentType = watch("payment_type");
    const featureIds = watch("feature_ids");
    const city = watch("city");
    const { data: types = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertyTypes"])();
    const { data: subtypes = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySubtypes"])();
    const typeSubtypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReadyUnitForm.useMemo[typeSubtypes]": ()=>{
            const filtered = subtypes.filter({
                "ReadyUnitForm.useMemo[typeSubtypes].filtered": (s)=>String(s.property_type_id) === propertyTypeId
            }["ReadyUnitForm.useMemo[typeSubtypes].filtered"]);
            return filtered.length > 0 || !propertyTypeId ? filtered : subtypes;
        }
    }["ReadyUnitForm.useMemo[typeSubtypes]"], [
        subtypes,
        propertyTypeId
    ]);
    const { data: features = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "available-features"
        ],
        queryFn: {
            "ReadyUnitForm.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getAvailableFeatures()
        }["ReadyUnitForm.useQuery"],
        staleTime: 5 * 60 * 1000
    });
    const [showAllAmenities, setShowAllAmenities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleFeatures = showAllAmenities ? features : features.slice(0, AMENITIES_PREVIEW);
    const { data: cityNames = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "allCities"
        ],
        queryFn: {
            "ReadyUnitForm.useQuery": async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$locations$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminCitiesService"].getAllCities() ?? []
        }["ReadyUnitForm.useQuery"],
        select: {
            "ReadyUnitForm.useQuery": (cities)=>Array.from(new Set(cities.map({
                    "ReadyUnitForm.useQuery": (c)=>c?.name
                }["ReadyUnitForm.useQuery"]).filter(Boolean)))
        }["ReadyUnitForm.useQuery"],
        staleTime: 5 * 60 * 1000
    });
    const cityOptions = city && !cityNames.includes(city) ? [
        city,
        ...cityNames
    ] : cityNames;
    // Location lookup from a Google Maps link (same flow as the project form).
    const { expandUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { getLocationDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [isFetchingLocation, setIsFetchingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFetchLocation = async ()=>{
        const url = watch("google_map_link")?.trim();
        if (!url) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.mapLinkRequired"));
            return;
        }
        setIsFetchingLocation(true);
        try {
            const coords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveGoogleMapsUrl"])(url) || await expandUrl(url);
            if (!coords) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.locationExtractFailed"));
                return;
            }
            setValue("latitude", Number(coords.lat.toFixed(6)), {
                shouldValidate: true
            });
            setValue("longitude", Number(coords.lng.toFixed(6)), {
                shouldValidate: true
            });
            const geo = await getLocationDetails({
                lat: coords.lat,
                lng: coords.lng
            }).catch(()=>null);
            const result = geo?.results?.[0];
            if (result) {
                const component = (...kinds)=>result.address_components.find((c_0)=>kinds.some((k)=>c_0.types.includes(k)))?.long_name;
                const detectedCity = component("locality", "administrative_area_level_2");
                const detectedArea = component("sublocality", "sublocality_level_1", "neighborhood");
                if (detectedCity) setValue("city", detectedCity, {
                    shouldValidate: true
                });
                if (detectedArea) setValue("area", detectedArea, {
                    shouldValidate: true
                });
                if (!watch("address")) setValue("address", result.formatted_address);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.form.locationExtracted"));
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.locationExtractFailed"));
        } finally{
            setIsFetchingLocation(false);
        }
    };
    // Images: new files are uploaded with the form (medias[]); existing ones are shown read-only.
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imagesError, setImagesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(images);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadyUnitForm.useEffect": ()=>{
            imagesRef.current = images;
        }
    }["ReadyUnitForm.useEffect"], [
        images
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadyUnitForm.useEffect": ()=>({
                "ReadyUnitForm.useEffect": ()=>imagesRef.current.forEach({
                        "ReadyUnitForm.useEffect": (img)=>URL.revokeObjectURL(img.url)
                    }["ReadyUnitForm.useEffect"])
            })["ReadyUnitForm.useEffect"]
    }["ReadyUnitForm.useEffect"], []);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addFiles = (fileList)=>{
        if (!fileList) return;
        const files = Array.from(fileList);
        const valid = files.filter((f)=>f.type.startsWith("image/") && f.size <= MAX_IMAGE_BYTES);
        if (valid.length < files.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.imageRejected"));
        const room = MAX_IMAGES - images.length;
        if (valid.length > room) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.maxImages", {
            max: MAX_IMAGES
        }));
        const next = valid.slice(0, Math.max(0, room)).map((file)=>({
                file,
                url: URL.createObjectURL(file)
            }));
        if (next.length > 0) {
            setImages((prev)=>[
                    ...prev,
                    ...next
                ]);
            setImagesError(null);
        }
    };
    const removeImage = (index)=>{
        setImages((prev_0)=>{
            URL.revokeObjectURL(prev_0[index].url);
            return prev_0.filter((_, i)=>i !== index);
        });
    };
    const onSubmit = async (values)=>{
        if (!isEdit && images.length === 0) {
            setImagesError("readyMarket.form.imagesRequired");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.imagesRequired"));
            return;
        }
        try {
            await save.mutateAsync((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildReadyUnitFormData"])(values, images.map((i_0)=>i_0.file)));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t(isEdit ? "readyMarket.messages.updateSuccess" : "readyMarket.messages.createSuccess"));
            // After create, go back to the table (the list query is invalidated, so it shows the new unit).
            router.push(isEdit ? `${basePath}/${unitId}` : basePath);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t(isEdit ? "readyMarket.messages.updateFailed" : "readyMarket.messages.createFailed")));
        }
    };
    const onInvalid = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.form.fixErrors"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSubmit, onInvalid),
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-1 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("readyMarket.breadcrumb.home")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-3 w-3 rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: basePath,
                                        prefetch: false,
                                        className: "hover:text-[#007b78]",
                                        children: t("readyMarket.title")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-3 w-3 rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700 dark:text-gray-300",
                                        children: t(isEdit ? "readyMarket.form.editBreadcrumb" : "readyMarket.form.createBreadcrumb")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>router.back(),
                                        "aria-label": t("common.back"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-5 w-5 text-gray-700 dark:text-gray-200 rtl:rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900 dark:text-gray-100",
                                        children: t(isEdit ? "readyMarket.form.editTitle" : "readyMarket.form.createTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: save.isPending,
                        className: "inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664] disabled:opacity-60",
                        children: [
                            save.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 277,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 277,
                                columnNumber: 76
                            }, this),
                            t(isEdit ? "common.save" : "readyMarket.form.create")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-4"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t("readyMarket.form.basicInfo")
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: [
                                    t("readyMarket.form.listingType"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    "rent",
                                    "sale"
                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setValue("listing_type", type, {
                                                shouldValidate: true
                                            }),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center justify-center gap-2 rounded-lg border text-xs transition-colors", listingType === type ? "border-[#007b78] bg-teal-50 text-[#007b78] dark:bg-teal-950/40" : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-300"),
                                        children: [
                                            type === "rent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 295,
                                                columnNumber: 36
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 295,
                                                columnNumber: 71
                                            }, this),
                                            t(type === "rent" ? "readyMarket.form.forRent" : "readyMarket.form.forSale")
                                        ]
                                    }, type, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 292,
                                        columnNumber: 54
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "property_name",
                                className: label,
                                children: [
                                    t("readyMarket.form.propertyTitle"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "property_name",
                                ...register("property_name"),
                                placeholder: t("readyMarket.form.propertyTitlePlaceholder"),
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                message: errors.property_name?.message
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: [
                                    t("readyMarket.form.description"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                control: control,
                                name: "description",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RichTextEditor"], {
                                        content: field.value,
                                        onChange: field.onChange,
                                        placeholder: t("readyMarket.form.descriptionPlaceholder"),
                                        error: !!errors.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                message: errors.description?.message
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: label,
                                        children: [
                                            t("readyMarket.form.unitType"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        control: control,
                                        name: "property_type_id",
                                        render: ({ field: field_0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: field_0.value,
                                                onValueChange: (v)=>{
                                                    field_0.onChange(v);
                                                    setValue("property_subtype_id", "");
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: inputCls,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: t("readyMarket.form.selectType")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: types.map((type_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: String(type_0.id),
                                                                children: type_0.name
                                                            }, type_0.id, false, {
                                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 42
                                                            }, void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.property_type_id?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: label,
                                        children: [
                                            t("readyMarket.form.unitSubType"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        control: control,
                                        name: "property_subtype_id",
                                        render: ({ field: field_1 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: field_1.value,
                                                onValueChange: field_1.onChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: inputCls,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: t("readyMarket.form.selectType")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: typeSubtypes.map((subtype)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: String(subtype.id),
                                                                children: subtype.name
                                                            }, subtype.id, false, {
                                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 57
                                                            }, void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.property_subtype_id?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: label,
                                        children: t("readyMarket.form.paymentMethod")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        control: control,
                                        name: "payment_type",
                                        render: ({ field: field_2 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: field_2.value || "none",
                                                onValueChange: (v_0)=>field_2.onChange(v_0 === "none" ? "" : v_0),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: inputCls,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "none",
                                                                children: t("readyMarket.form.noPaymentMethod")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 21
                                                            }, void 0),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_TYPES"].map((type_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: type_1,
                                                                    children: t(`readyMarket.paymentTypes.${type_1}`)
                                                                }, type_1, false, {
                                                                    fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 50
                                                                }, void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "price",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.totalPrice"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "price",
                                        type: "number",
                                        min: "0",
                                        step: "any",
                                        ...register("price", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.price?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            paymentType === "installments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment_intervals",
                                                className: label,
                                                children: [
                                                    t("readyMarket.form.installmentsCount"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "payment_intervals",
                                                type: "number",
                                                min: "1",
                                                ...register("payment_intervals", {
                                                    valueAsNumber: true
                                                }),
                                                className: inputCls
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                                message: errors.payment_intervals?.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "payment_down_payment",
                                                className: label,
                                                children: [
                                                    t("readyMarket.form.downPayment"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "payment_down_payment",
                                                type: "number",
                                                min: "0",
                                                step: "any",
                                                ...register("payment_down_payment", {
                                                    valueAsNumber: true
                                                }),
                                                className: inputCls
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                                message: errors.payment_down_payment?.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "size",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.unitSize"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "size",
                                        type: "number",
                                        min: "0",
                                        step: "any",
                                        ...register("size", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.size?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "bedrooms",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.bedrooms"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "bedrooms",
                                        type: "number",
                                        min: "0",
                                        ...register("bedrooms", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.bedrooms?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "bathrooms",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.bathrooms"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "bathrooms",
                                        type: "number",
                                        min: "0",
                                        ...register("bathrooms", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.bathrooms?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "floor",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.floor"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "floor",
                                        ...register("floor"),
                                        placeholder: t("readyMarket.form.floorPlaceholder"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.floor?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "view",
                                        className: label,
                                        children: t("readyMarket.form.view")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "view",
                                        ...register("view"),
                                        placeholder: t("readyMarket.form.view"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "year_built",
                                        className: label,
                                        children: t("readyMarket.form.yearBuilt")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "year_built",
                                        ...register("year_built"),
                                        placeholder: "1997",
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.year_built?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: t("readyMarket.form.amenities")
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: visibleFeatures.map((feature)=>{
                                    const active = featureIds.includes(feature.feature_id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setValue("feature_ids", active ? featureIds.filter((id)=>id !== feature.feature_id) : [
                                                ...featureIds,
                                                feature.feature_id
                                            ]),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md border px-2.5 py-1 text-[11px] transition-colors", active ? "border-[#007b78] bg-[#007b78] text-white" : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200"),
                                        children: feature.feature_name
                                    }, feature.feature_id, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 474,
                                        columnNumber: 20
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            features.length > AMENITIES_PREVIEW && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowAllAmenities((v_1)=>!v_1),
                                className: "mt-2 text-xs font-medium text-[#007b78] hover:underline",
                                children: t(showAllAmenities ? "readyMarket.form.showLess" : "readyMarket.form.viewAll")
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 479,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: label,
                                        children: [
                                            t("readyMarket.form.seller"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        control: control,
                                        name: "user_id",
                                        render: ({ field: field_3 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$user$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSelect"], {
                                                selectedId: field_3.value ?? null,
                                                onChange: field_3.onChange,
                                                hasError: !!errors.user_id
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.user_id?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.email"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "email",
                                        type: "email",
                                        dir: "ltr",
                                        ...register("email"),
                                        placeholder: t("readyMarket.form.emailPlaceholder"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.email?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "whatsapp_number",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.whatsapp"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "whatsapp_number",
                                        dir: "ltr",
                                        ...register("whatsapp_number"),
                                        placeholder: t("readyMarket.form.phonePlaceholder"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.whatsapp_number?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "phone_number",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.phone"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "phone_number",
                                        dir: "ltr",
                                        ...register("phone_number"),
                                        placeholder: t("readyMarket.form.phonePlaceholder"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.phone_number?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 517,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-4"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t("readyMarket.form.location")
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "google_map_link",
                                className: label,
                                children: [
                                    t("readyMarket.form.mapLink"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "google_map_link",
                                                dir: "ltr",
                                                ...register("google_map_link"),
                                                placeholder: "https://maps.google.com",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputCls, "ps-9")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleFetchLocation,
                                        disabled: isFetchingLocation,
                                        className: "inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#7c3aed] px-4 text-xs font-medium text-white hover:bg-[#6d28d9] disabled:opacity-60",
                                        children: [
                                            isFetchingLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 536,
                                                columnNumber: 38
                                            }, this),
                                            t("readyMarket.form.fetchData")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                message: errors.google_map_link?.message
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "latitude",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.latitude"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "latitude",
                                        type: "number",
                                        step: "any",
                                        ...register("latitude", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.latitude?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "longitude",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.longitude"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 557,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "longitude",
                                        type: "number",
                                        step: "any",
                                        ...register("longitude", {
                                            valueAsNumber: true
                                        }),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.longitude?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: label,
                                        children: [
                                            t("readyMarket.form.city"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 567,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        control: control,
                                        name: "city",
                                        render: ({ field: field_4 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: field_4.value,
                                                onValueChange: field_4.onChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: inputCls,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: t("readyMarket.form.selectCity")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: cityOptions.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: name,
                                                                children: name
                                                            }, name, false, {
                                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 46
                                                            }, void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.city?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 581,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "area",
                                        className: label,
                                        children: [
                                            t("readyMarket.form.area"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 586,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "area",
                                        ...register("area"),
                                        placeholder: t("readyMarket.form.areaPlaceholder"),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                        message: errors.area?.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:w-1/2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "address",
                                className: label,
                                children: t("readyMarket.form.fullAddress")
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 593,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "address",
                                ...register("address"),
                                placeholder: t("readyMarket.form.fullAddressPlaceholder"),
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-4"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: t("readyMarket.form.unitImages")
                    }, void 0, false, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: [
                                    t("readyMarket.form.unitImages"),
                                    !isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 606,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDragOver: (e)=>{
                                    e.preventDefault();
                                    setIsDragging(true);
                                },
                                onDragLeave: ()=>setIsDragging(false),
                                onDrop: (e_0)=>{
                                    e_0.preventDefault();
                                    setIsDragging(false);
                                    addFiles(e_0.dataTransfer.files);
                                },
                                onClick: ()=>fileInputRef.current?.click(),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed px-4 py-8 text-center transition-colors", imagesError ? "border-red-400 bg-red-50/40 dark:bg-red-950/20" : isDragging ? "border-[#007b78] bg-teal-50/60 dark:bg-teal-950/30" : "border-gray-300 bg-gray-50 hover:bg-gray-100/70 dark:border-neutral-700 dark:bg-neutral-800/60"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "mb-1 h-5 w-5 text-gray-600 dark:text-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-gray-200",
                                                children: t("readyMarket.form.uploadClick")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 618,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            t("readyMarket.form.uploadDrag")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500",
                                        children: t("readyMarket.form.uploadLimits", {
                                            max: MAX_IMAGES
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 621,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this),
                                            t("readyMarket.form.browse")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 624,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "image/*",
                                        multiple: true,
                                        className: "hidden",
                                        onChange: (e_1)=>{
                                            addFiles(e_1.target.files);
                                            e_1.target.value = "";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldError, {
                                message: imagesError ?? undefined
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                lineNumber: 633,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    (existingMedias.length > 0 || images.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            existingMedias.map((media)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: thumbCard,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[4/3] overflow-hidden rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: media.media_url,
                                            alt: t("readyMarket.form.unitImage"),
                                            fill: true,
                                            sizes: "110px",
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                            lineNumber: 639,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, this)
                                }, `existing-${media.media_id}`, false, {
                                    fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                    lineNumber: 637,
                                    columnNumber: 42
                                }, this)),
                            images.map((image, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: thumbCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] overflow-hidden rounded-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: image.url,
                                                alt: image.file.name,
                                                fill: true,
                                                sizes: "110px",
                                                className: "object-cover",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 644,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                            lineNumber: 643,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeImage(index_0),
                                            "aria-label": t("common.delete"),
                                            className: "absolute end-1 top-1 text-red-500 hover:text-red-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                                lineNumber: 647,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, image.url, true, {
                                    fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                                    lineNumber: 642,
                                    columnNumber: 45
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                        lineNumber: 636,
                        columnNumber: 62
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/ready-market/components/ReadyUnitForm.tsx",
        lineNumber: 252,
        columnNumber: 10
    }, this);
}
_s1(ReadyUnitForm, "ZoqBSQUEJ6ANSDqYC4ECXrl/KZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveReadyUnit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertyTypes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySubtypes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c2 = ReadyUnitForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FieldError");
__turbopack_context__.k.register(_c1, "Required");
__turbopack_context__.k.register(_c2, "ReadyUnitForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/pages/ReadyUnitCreatePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadyUnitCreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/components/ReadyUnitForm.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ReadyUnitCreatePage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "c7ac336e97afecbe21440c6229f5af98560705d592cb85f49b60ca6f1c4c453b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7ac336e97afecbe21440c6229f5af98560705d592cb85f49b60ca6f1c4c453b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitForm"], {}, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitCreatePage.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ReadyUnitCreatePage;
var _c;
__turbopack_context__.k.register(_c, "ReadyUnitCreatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0b9a28c8._.js.map