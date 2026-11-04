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
"[project]/src/components/shared/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Pagination(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "cda1b8e02421e69b89f99b190ee59c00ff874da0728e779f73c53eba958cb76d") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cda1b8e02421e69b89f99b190ee59c00ff874da0728e779f73c53eba958cb76d";
    }
    const { page, totalPages, perPage, totalItems, onPageChange, onPerPageChange, perPageOptions: t1, isLoading: t2, currentItemsCount } = t0;
    let t3;
    if ($[1] !== t1) {
        t3 = t1 === undefined ? [
            "10",
            "15",
            "20",
            "50",
            "100"
        ] : t1;
        $[1] = t1;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const perPageOptions = t3;
    const isLoading = t2 === undefined ? false : t2;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const effectiveTotalPages = currentItemsCount !== undefined && currentItemsCount < perPage && page >= totalPages ? page : Math.max(1, totalPages);
    let t4;
    if ($[3] !== effectiveTotalPages || $[4] !== page) {
        t4 = ({
            "Pagination[getPageNumbers]": ()=>{
                const pages = [];
                if (effectiveTotalPages <= 5) {
                    for(let i = 1; i <= effectiveTotalPages; i++){
                        pages.push(i);
                    }
                } else {
                    pages.push(1);
                    if (page > 3) {
                        pages.push("...");
                    }
                    let start = Math.max(2, page - 1);
                    let end = Math.min(effectiveTotalPages - 1, page + 1);
                    if (page <= 2) {
                        start = 2;
                        end = Math.min(3, effectiveTotalPages - 1);
                    }
                    if (page >= effectiveTotalPages - 1) {
                        start = Math.max(2, effectiveTotalPages - 2);
                        end = effectiveTotalPages - 1;
                    }
                    for(let i_0 = start; i_0 <= end; i_0++){
                        pages.push(i_0);
                    }
                    if (page < effectiveTotalPages - 2) {
                        pages.push("...");
                    }
                    pages.push(effectiveTotalPages);
                }
                return pages;
            }
        })["Pagination[getPageNumbers]"];
        $[3] = effectiveTotalPages;
        $[4] = page;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const getPageNumbers = t4;
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);
    if (effectiveTotalPages <= 1 && totalItems === 0) {
        return null;
    }
    let t5;
    if ($[6] !== t) {
        t5 = t("common.pagination.show");
        $[6] = t;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs sm:text-sm text-gray-500",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== perPage) {
        t7 = perPage.toString();
        $[10] = perPage;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[70px] h-8 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/Pagination.tsx",
                lineNumber: 123,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== perPageOptions) {
        t9 = perPageOptions.map(_PaginationPerPageOptionsMap);
        $[13] = perPageOptions;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== isLoading || $[18] !== onPerPageChange || $[19] !== t10 || $[20] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t7,
            onValueChange: onPerPageChange,
            disabled: isLoading,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[17] = isLoading;
        $[18] = onPerPageChange;
        $[19] = t10;
        $[20] = t7;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t) {
        t12 = t("common.pagination.showing");
        $[22] = t;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = totalItems > 0 ? startIndex + 1 : 0;
    let t14;
    if ($[24] !== t) {
        t14 = t("common.pagination.of");
        $[24] = t;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t) {
        t15 = t("common.pagination.results");
        $[26] = t;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== endIndex || $[29] !== t12 || $[30] !== t13 || $[31] !== t14 || $[32] !== t15 || $[33] !== totalItems) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs sm:text-sm text-gray-500",
            children: [
                t12,
                " ",
                t13,
                "-",
                endIndex,
                " ",
                t14,
                " ",
                totalItems,
                " ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[28] = endIndex;
        $[29] = t12;
        $[30] = t13;
        $[31] = t14;
        $[32] = t15;
        $[33] = totalItems;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t11 || $[36] !== t16 || $[37] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-start",
            children: [
                t6,
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t16;
        $[37] = t6;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== effectiveTotalPages || $[40] !== getPageNumbers || $[41] !== isLoading || $[42] !== onPageChange || $[43] !== page) {
        t18 = effectiveTotalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-1 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: {
                        "Pagination[<Button>.onClick]": ()=>onPageChange(Math.max(1, page - 1))
                    }["Pagination[<Button>.onClick]"],
                    disabled: page === 1 || isLoading,
                    className: "h-8 w-8 border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-4 w-4 rtl:rotate-180"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Pagination.tsx",
                        lineNumber: 207,
                        columnNumber: 113
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Pagination.tsx",
                    lineNumber: 205,
                    columnNumber: 104
                }, this),
                getPageNumbers().map({
                    "Pagination[(anonymous)()]": (pageNum, index)=>typeof pageNum === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: page === pageNum ? "default" : "outline",
                            size: "icon",
                            onClick: {
                                "Pagination[(anonymous)() > <Button>.onClick]": ()=>onPageChange(pageNum)
                            }["Pagination[(anonymous)() > <Button>.onClick]"],
                            disabled: isLoading,
                            className: page === pageNum ? "h-8 w-8 bg-teal-600 hover:bg-teal-700 text-white border-0" : "h-8 w-8 border-gray-200",
                            children: pageNum
                        }, index, false, {
                            fileName: "[project]/src/components/shared/Pagination.tsx",
                            lineNumber: 208,
                            columnNumber: 88
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-1 text-gray-400",
                            children: pageNum
                        }, index, false, {
                            fileName: "[project]/src/components/shared/Pagination.tsx",
                            lineNumber: 210,
                            columnNumber: 221
                        }, this)
                }["Pagination[(anonymous)()]"]),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: {
                        "Pagination[<Button>.onClick]": ()=>onPageChange(Math.min(effectiveTotalPages, page + 1))
                    }["Pagination[<Button>.onClick]"],
                    disabled: page === effectiveTotalPages || effectiveTotalPages === 0 || isLoading,
                    className: "h-8 w-8 border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4 rtl:rotate-180"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Pagination.tsx",
                        lineNumber: 213,
                        columnNumber: 160
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Pagination.tsx",
                    lineNumber: 211,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 205,
            columnNumber: 38
        }, this);
        $[39] = effectiveTotalPages;
        $[40] = getPageNumbers;
        $[41] = isLoading;
        $[42] = onPageChange;
        $[43] = page;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== t17 || $[46] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 w-full",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Pagination.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[45] = t17;
        $[46] = t18;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    return t19;
}
_s(Pagination, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Pagination;
function _PaginationPerPageOptionsMap(opt) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: opt,
        children: opt
    }, opt, false, {
        fileName: "[project]/src/components/shared/Pagination.tsx",
        lineNumber: 235,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pagination");
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
"[project]/src/hooks/useServerPagination.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useServerPagination",
    ()=>useServerPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useServerPagination({ initialPage = 1, initialPerPage = 10, initialSearch = "", initialFilters = {}, searchDebounceMs = 500 } = {}) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : initialPage;
    const perPage = searchParams.get("perPage") ? Number(searchParams.get("perPage")) : initialPerPage;
    const searchFromUrl = searchParams.get("search") || initialSearch;
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchFromUrl);
    const [debouncedSearch, setDebouncedSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchFromUrl);
    const initialFiltersStr = JSON.stringify(initialFilters);
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useServerPagination.useMemo[filters]": ()=>{
            const parsed = {
                ...initialFilters
            };
            for(const key in initialFilters){
                const val = searchParams.get(key);
                if (val !== null) {
                    parsed[key] = val;
                }
            }
            return parsed;
        }
    }["useServerPagination.useMemo[filters]"], [
        searchParams,
        initialFiltersStr
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServerPagination.useEffect": ()=>{
            setSearchQuery(searchFromUrl);
            setDebouncedSearch(searchFromUrl);
        }
    }["useServerPagination.useEffect"], [
        searchFromUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useServerPagination.useEffect": ()=>{
            const handler = setTimeout({
                "useServerPagination.useEffect.handler": ()=>{
                    if (debouncedSearch !== searchQuery) {
                        setDebouncedSearch(searchQuery);
                        const params = new URLSearchParams(searchParams.toString());
                        if (searchQuery) params.set("search", searchQuery);
                        else params.delete("search");
                        params.delete("page");
                        const newQuery = params.toString();
                        router.push(`${pathname}${newQuery ? `?${newQuery}` : ""}`, {
                            scroll: false
                        });
                    }
                }
            }["useServerPagination.useEffect.handler"], searchDebounceMs);
            return ({
                "useServerPagination.useEffect": ()=>clearTimeout(handler)
            })["useServerPagination.useEffect"];
        }
    }["useServerPagination.useEffect"], [
        searchQuery,
        debouncedSearch,
        searchDebounceMs,
        pathname,
        router,
        searchParams
    ]);
    const handlePerPageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerPagination.useCallback[handlePerPageChange]": (value)=>{
            const currentVal = searchParams.get("perPage") || initialPerPage.toString();
            if (currentVal === value.toString()) return;
            const params_0 = new URLSearchParams(searchParams.toString());
            params_0.set("perPage", value.toString());
            params_0.delete("page");
            const newQuery_0 = params_0.toString();
            router.push(`${pathname}?${newQuery_0}`, {
                scroll: false
            });
        }
    }["useServerPagination.useCallback[handlePerPageChange]"], [
        pathname,
        router,
        searchParams,
        initialPerPage
    ]);
    const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerPagination.useCallback[handlePageChange]": (newPage)=>{
            const currentVal_0 = searchParams.get("page") || initialPage.toString();
            if (currentVal_0 === newPage.toString()) return;
            const params_1 = new URLSearchParams(searchParams.toString());
            params_1.set("page", newPage.toString());
            const newQuery_1 = params_1.toString();
            router.push(`${pathname}?${newQuery_1}`, {
                scroll: false
            });
        }
    }["useServerPagination.useCallback[handlePageChange]"], [
        pathname,
        router,
        searchParams,
        initialPage
    ]);
    const handleSetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerPagination.useCallback[handleSetFilters]": (newFiltersOrUpdater)=>{
            const nextFilters = typeof newFiltersOrUpdater === "function" ? newFiltersOrUpdater(filters) : newFiltersOrUpdater;
            const params_2 = new URLSearchParams(searchParams.toString());
            for(const key_0 in nextFilters){
                const val_0 = String(nextFilters[key_0]);
                if (val_0 && val_0 !== "all" && val_0 !== String(initialFilters[key_0])) {
                    params_2.set(key_0, val_0);
                } else {
                    params_2.delete(key_0);
                }
            }
            params_2.delete("page");
            const newQuery_2 = params_2.toString();
            router.push(`${pathname}${newQuery_2 ? `?${newQuery_2}` : ""}`, {
                scroll: false
            });
        }
    }["useServerPagination.useCallback[handleSetFilters]"], [
        pathname,
        router,
        searchParams,
        filters,
        initialFilters
    ]);
    const setFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerPagination.useCallback[setFilter]": (key_1, value_0)=>{
            const params_3 = new URLSearchParams(searchParams.toString());
            const val_1 = String(value_0);
            const currentVal_1 = searchParams.get(key_1);
            const isDefault = !val_1 || val_1 === "all" || val_1 === String(initialFilters[key_1]);
            if (isDefault && currentVal_1 === null) return;
            if (!isDefault && currentVal_1 === val_1) return;
            if (!isDefault) {
                params_3.set(key_1, val_1);
            } else {
                params_3.delete(key_1);
            }
            params_3.delete("page");
            const newQuery_3 = params_3.toString();
            router.push(`${pathname}${newQuery_3 ? `?${newQuery_3}` : ""}`, {
                scroll: false
            });
        }
    }["useServerPagination.useCallback[setFilter]"], [
        pathname,
        router,
        searchParams,
        initialFilters
    ]);
    const resetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useServerPagination.useCallback[resetFilters]": ()=>{
            const params_4 = new URLSearchParams();
            if (searchParams.has("perPage")) {
                params_4.set("perPage", searchParams.get("perPage"));
            }
            const newQuery_4 = params_4.toString();
            router.push(`${pathname}${newQuery_4 ? `?${newQuery_4}` : ""}`, {
                scroll: false
            });
        }
    }["useServerPagination.useCallback[resetFilters]"], [
        pathname,
        router,
        searchParams
    ]);
    return {
        page,
        perPage,
        searchQuery,
        debouncedSearch,
        filters,
        setPage: handlePageChange,
        setPerPage: handlePerPageChange,
        setSearchQuery,
        setFilters: handleSetFilters,
        setFilter,
        resetFilters
    };
}
_s(useServerPagination, "7jBmoYcHP+m0+eoKxbE6buqqRRc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activity/services/AdminActivityService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminActivityService",
    ()=>AdminActivityService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
const AdminActivityService = {
    getActivityLogs: async (page = 1, perPage = 10, search, action, entityType, dateRange, token)=>{
        if (token) {
            const expiresAt = Math.floor(Date.now() / 1000) + 3600;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(token, expiresAt);
        }
        const params = {
            page,
            per_page: perPage
        };
        if (search && search.trim()) {
            params.keyword = search.trim();
            params.search = search.trim();
        }
        if (action && action !== "all" && action.trim() !== "") {
            params.action = action.trim();
        }
        if (entityType && entityType !== "all" && entityType.trim() !== "") {
            params.entity_type = entityType.trim();
        }
        if (dateRange && dateRange !== "all" && dateRange.trim() !== "") {
            params.date_range = dateRange.trim();
        }
        try {
            let response;
            try {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/activityLogs`, {
                    params
                });
            } catch (err) {
                // Fall back to POST if the server only accepts POST for search/filtering
                if (err?.response?.status === 405) {
                    response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/activityLogs`, params);
                } else {
                    throw err;
                }
            }
            if (response && response.data !== undefined) {
                return response.data;
            }
            return response;
        } catch (error) {
            console.error("Failed to fetch activity logs from /dashboard/activityLogs:", error);
            throw error;
        }
    },
    /**
   * Fetch single activity log details.
   * Endpoint: https://demoapi.p-adviser.com/api/dashboard/activityLogs/{id}
   */ getActivityLog: async (id, token)=>{
        try {
            if (token) {
                const expiresAt = Math.floor(Date.now() / 1000) + 3600;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(token, expiresAt);
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/activityLogs/${id}`);
            return response.data?.data ?? response.data;
        } catch (error) {
            console.error("Activity log detail API error:", error);
            return null;
        }
    },
    /**
   * Delete single activity log.
   */ deleteActivityLog: async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/activityLogs/${id}`);
    },
    /**
   * Bulk delete activity logs.
   */ deleteBulkActivityLogs: async (ids)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/activityLogs/bulk`, {
            data: {
                ids
            }
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activity/hooks/useActivityLogs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useActivityLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/services/AdminActivityService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useActivityLogs(t0, t1, search, action, entityType, dateRange) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "ca892c5e31bb92af8cf6a235b3811df32b2cba72c3cb2994eed695d4008b9e14") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ca892c5e31bb92af8cf6a235b3811df32b2cba72c3cb2994eed695d4008b9e14";
    }
    const page = t0 === undefined ? 1 : t0;
    const perPage = t1 === undefined ? 10 : t1;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t2;
    if ($[1] !== action || $[2] !== dateRange || $[3] !== entityType || $[4] !== page || $[5] !== perPage || $[6] !== search) {
        t2 = [
            "activity",
            page,
            perPage,
            search,
            action,
            entityType,
            dateRange
        ];
        $[1] = action;
        $[2] = dateRange;
        $[3] = entityType;
        $[4] = page;
        $[5] = perPage;
        $[6] = search;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== action || $[9] !== dateRange || $[10] !== entityType || $[11] !== page || $[12] !== perPage || $[13] !== search || $[14] !== token) {
        t3 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminActivityService"].getActivityLogs(page, perPage, search, action, entityType, dateRange, token);
        $[8] = action;
        $[9] = dateRange;
        $[10] = entityType;
        $[11] = page;
        $[12] = perPage;
        $[13] = search;
        $[14] = token;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    const t4 = !!token;
    let t5;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t4) {
        t5 = {
            queryKey: t2,
            queryFn: t3,
            retry: 1,
            enabled: t4
        };
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    const paginatedActivityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
    let t6;
    if ($[20] !== paginatedActivityData) {
        t6 = {
            paginatedActivityData
        };
        $[20] = paginatedActivityData;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    return t6;
}
_s(useActivityLogs, "Rn7/kAhElI/7dzUldvh81MtPxMM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Table(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "table-container",
            className: "relative w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                "data-slot": "table",
                className: t1,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/table.tsx",
                lineNumber: 38,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 38,
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
_c = Table;
function TableHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            "data-slot": "table-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 79,
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
_c1 = TableHeader;
function TableBody(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            "data-slot": "table-body",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 120,
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
_c2 = TableBody;
function TableFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
            "data-slot": "table-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 161,
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
_c3 = TableFooter;
function TableRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 px-4 data-[state=selected]:bg-muted border-b transition-colors", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            "data-slot": "table-row",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 202,
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
_c4 = TableRow;
function TableHead(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pe-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            "data-slot": "table-head",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 243,
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
_c5 = TableHead;
function TableCell(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0 [&>[role=checkbox]]:translate-y-[2px]", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            "data-slot": "table-cell",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 284,
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
_c6 = TableCell;
function TableCaption(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9a2a18b8546378291cdc023a6f35fd522a8e9d406ecce5ed8703c947b0398e7";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
            "data-slot": "table-caption",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 325,
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
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
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
"[project]/src/features/activity/components/ActivityTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityTable",
    ()=>ActivityTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
const ACTION_STYLES = {
    create: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
    update: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
    delete: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800",
    login: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800",
    warning: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
};
const ActivityTable = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(function ActivityTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "17dfedb5d9924de8c005a4486a9594d4047077e300d2c6e337b5abd1663167a6") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17dfedb5d9924de8c005a4486a9594d4047077e300d2c6e337b5abd1663167a6";
    }
    const { activities, selectedActivities, onSelectAll, onSelectActivity, onView, onDelete, isLoading: t1 } = t0;
    const isLoading = t1 === undefined ? false : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t2 = activities.length > 0 && selectedActivities.length === activities.length;
    let t3;
    if ($[1] !== onSelectAll || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "w-10 px-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                checked: t2,
                onCheckedChange: onSelectAll
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                lineNumber: 52,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = onSelectAll;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t) {
        t4 = t("activity.columns.user");
        $[4] = t;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[140px] text-start",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t) {
        t6 = t("activity.columns.action");
        $[8] = t;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider text-center w-28",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t) {
        t8 = t("activity.columns.entity");
        $[12] = t;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[110px]",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t) {
        t10 = t("activity.columns.description");
        $[16] = t;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[200px] max-w-sm text-start",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t) {
        t12 = t("activity.columns.dateTime");
        $[20] = t;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider min-w-[150px]",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t) {
        t14 = t("activity.columns.ipAddress");
        $[24] = t;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider w-32 font-mono",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t) {
        t16 = t("activity.columns.actions");
        $[28] = t;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
            className: "font-semibold text-gray-500 dark:text-gray-400 text-center w-20 px-3 text-[11px] uppercase tracking-wider",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t11 || $[33] !== t13 || $[34] !== t15 || $[35] !== t17 || $[36] !== t3 || $[37] !== t5 || $[38] !== t7 || $[39] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                className: "bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800",
                children: [
                    t3,
                    t5,
                    t7,
                    t9,
                    t11,
                    t13,
                    t15,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                lineNumber: 173,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t13;
        $[34] = t15;
        $[35] = t17;
        $[36] = t3;
        $[37] = t5;
        $[38] = t7;
        $[39] = t9;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== activities || $[42] !== isLoading || $[43] !== onDelete || $[44] !== onSelectActivity || $[45] !== onView || $[46] !== selectedActivities || $[47] !== t) {
        t19 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                colSpan: 8,
                className: "py-16 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-6 w-6 animate-spin text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 188,
                            columnNumber: 151
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 dark:text-gray-400",
                            children: t("activity.loading")
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 188,
                            columnNumber: 209
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                    lineNumber: 188,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                lineNumber: 188,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 188,
            columnNumber: 23
        }, this) : activities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                colSpan: 8,
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    type: "default",
                    title: t("activity.table.noActivities") || undefined,
                    className: "py-12"
                }, void 0, false, {
                    fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                    lineNumber: 188,
                    columnNumber: 405
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                lineNumber: 188,
                columnNumber: 366
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 188,
            columnNumber: 356
        }, this) : activities.map({
            "ActivityTable[activities.map()]": (activity, index)=>{
                const actionKey = activity.action?.toLowerCase() || "create";
                const isSelected = selectedActivities.includes(activity.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors group", isSelected && "bg-teal-50/30 dark:bg-teal-950/20"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 w-10",
                            onClick: _ActivityTableActivitiesMapTableCellOnClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: isSelected,
                                onCheckedChange: {
                                    "ActivityTable[activities.map() > <Checkbox>.onCheckedChange]": (checked)=>onSelectActivity(activity.id, checked)
                                }["ActivityTable[activities.map() > <Checkbox>.onCheckedChange]"]
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                lineNumber: 192,
                                columnNumber: 353
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 192,
                            columnNumber: 261
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 whitespace-nowrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ActivityTable[activities.map() > <button>.onClick]": ()=>onView && onView(activity.id)
                                }["ActivityTable[activities.map() > <button>.onClick]"],
                                className: "font-medium text-xs text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start block truncate max-w-[150px]",
                                title: activity.user,
                                children: activity.user
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                lineNumber: 194,
                                columnNumber: 145
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 194,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 text-center whitespace-nowrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize", ACTION_STYLES[actionKey] || ACTION_STYLES.update),
                                children: activity.action
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                lineNumber: 196,
                                columnNumber: 374
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 311
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 whitespace-nowrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
                                children: activity.entity
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                lineNumber: 196,
                                columnNumber: 622
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 571
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 text-xs text-gray-600 dark:text-gray-400 max-w-sm truncate cursor-help",
                            title: activity.description,
                            children: activity.description
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 729
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono",
                            children: activity.dateTime
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 896
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400 font-mono",
                            children: activity.ipAddress
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 1029
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            className: "px-3 py-3 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-1",
                                children: [
                                    onView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ActivityTable[activities.map() > <button>.onClick]": (e_0)=>{
                                                e_0.stopPropagation();
                                                onView(activity.id);
                                            }
                                        }["ActivityTable[activities.map() > <button>.onClick]"],
                                        className: "p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer",
                                        title: t("activity.table.viewDetails"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                            lineNumber: 201,
                                            columnNumber: 251
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                        lineNumber: 196,
                                        columnNumber: 1275
                                    }, this),
                                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ActivityTable[activities.map() > <button>.onClick]": (e_1)=>{
                                                e_1.stopPropagation();
                                                onDelete(activity.id);
                                            }
                                        }["ActivityTable[activities.map() > <button>.onClick]"],
                                        className: "p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-neutral-800 rounded-md transition-colors cursor-pointer",
                                        title: t("activity.table.deleteLog"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                            lineNumber: 206,
                                            columnNumber: 249
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                        lineNumber: 201,
                                        columnNumber: 305
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                                lineNumber: 196,
                                columnNumber: 1208
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                            lineNumber: 196,
                            columnNumber: 1163
                        }, this)
                    ]
                }, activity.id || `activity-${index}`, true, {
                    fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                    lineNumber: 192,
                    columnNumber: 16
                }, this);
            }
        }["ActivityTable[activities.map()]"]);
        $[41] = activities;
        $[42] = isLoading;
        $[43] = onDelete;
        $[44] = onSelectActivity;
        $[45] = onView;
        $[46] = selectedActivities;
        $[47] = t;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t18 || $[52] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full shadow-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "w-full min-w-[950px]",
                children: [
                    t18,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
                lineNumber: 230,
                columnNumber: 166
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityTable.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    return t21;
}, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = ActivityTable;
function _ActivityTableActivitiesMapTableCellOnClick(e) {
    return e.stopPropagation();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ActivityTable$React.memo");
__turbopack_context__.k.register(_c1, "ActivityTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SearchInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SearchInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "0b9893663ee44d7559cbb908578c02f1fae67578be400195ba1498b44f6d38ae") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b9893663ee44d7559cbb908578c02f1fae67578be400195ba1498b44f6d38ae";
    }
    const { value, onChange, placeholder, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] !== placeholder || $[2] !== t) {
        t2 = placeholder ?? t("common.search");
        $[1] = placeholder;
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const resolvedPlaceholder = t2;
    const t3 = `relative w-full ${className}`;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== onChange) {
        t5 = ({
            "SearchInput[<Input>.onChange]": (e)=>onChange(e.target.value)
        })["SearchInput[<Input>.onChange]"];
        $[5] = onChange;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== resolvedPlaceholder || $[8] !== t5 || $[9] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: resolvedPlaceholder,
            value: value,
            onChange: t5,
            "aria-label": resolvedPlaceholder,
            className: "ps-10 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[7] = resolvedPlaceholder;
        $[8] = t5;
        $[9] = value;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t3 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(SearchInput, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SearchInput;
var _c;
__turbopack_context__.k.register(_c, "SearchInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activity/components/ActivityFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityFilters",
    ()=>ActivityFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SearchInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ActivityFilters(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(87);
    if ($[0] !== "89a735a4dbf0b8c193f5c5456851597e6b761eda1d89c819609d541b129d19ae") {
        for(let $i = 0; $i < 87; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89a735a4dbf0b8c193f5c5456851597e6b761eda1d89c819609d541b129d19ae";
    }
    const { searchQuery, onSearchChange, actionFilter, onActionChange, entityFilter, onEntityChange, dateFilter, onDateChange } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("activity.filters.search");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== onSearchChange || $[4] !== searchQuery || $[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-[200px] max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchInput"], {
                value: searchQuery,
                onChange: onSearchChange,
                placeholder: t1
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
                lineNumber: 46,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = onSearchChange;
        $[4] = searchQuery;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t) {
        t3 = t("activity.filters.actions");
        $[7] = t;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[140px] max-sm:w-full h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t3
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
                lineNumber: 64,
                columnNumber: 153
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t) {
        t5 = t("activity.filters.allActions");
        $[11] = t;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t) {
        t7 = t("activity.filters.create");
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "create",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t) {
        t9 = t("activity.filters.update");
        $[19] = t;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "update",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t) {
        t11 = t("activity.filters.delete");
        $[23] = t;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "delete",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t) {
        t13 = t("activity.filters.login");
        $[27] = t;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "login",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t10 || $[32] !== t12 || $[33] !== t14 || $[34] !== t6 || $[35] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t6,
                t8,
                t10,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[31] = t10;
        $[32] = t12;
        $[33] = t14;
        $[34] = t6;
        $[35] = t8;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== actionFilter || $[38] !== onActionChange || $[39] !== t15 || $[40] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: actionFilter,
            onValueChange: onActionChange,
            children: [
                t4,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[37] = actionFilter;
        $[38] = onActionChange;
        $[39] = t15;
        $[40] = t4;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== t) {
        t17 = t("activity.filters.entities");
        $[42] = t;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-[140px] max-sm:w-full h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t17
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
                lineNumber: 183,
                columnNumber: 154
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t) {
        t19 = t("activity.filters.allEntities");
        $[46] = t;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== t) {
        t21 = t("activity.filters.developer");
        $[50] = t;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Developer",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t) {
        t23 = t("activity.filters.project");
        $[54] = t;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Project",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[56] = t23;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] !== t) {
        t25 = t("activity.filters.unit");
        $[58] = t;
        $[59] = t25;
    } else {
        t25 = $[59];
    }
    let t26;
    if ($[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Unit",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== t) {
        t27 = t("activity.filters.user");
        $[62] = t;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    if ($[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "User",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] !== t20 || $[67] !== t22 || $[68] !== t24 || $[69] !== t26 || $[70] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t20,
                t22,
                t24,
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[66] = t20;
        $[67] = t22;
        $[68] = t24;
        $[69] = t26;
        $[70] = t28;
        $[71] = t29;
    } else {
        t29 = $[71];
    }
    let t30;
    if ($[72] !== entityFilter || $[73] !== onEntityChange || $[74] !== t18 || $[75] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: entityFilter,
            onValueChange: onEntityChange,
            children: [
                t18,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[72] = entityFilter;
        $[73] = onEntityChange;
        $[74] = t18;
        $[75] = t29;
        $[76] = t30;
    } else {
        t30 = $[76];
    }
    const t31 = dateFilter === "all" ? "" : dateFilter;
    let t32;
    if ($[77] !== onDateChange) {
        t32 = ({
            "ActivityFilters[<input>.onChange]": (e)=>onDateChange(e.target.value || "all")
        })["ActivityFilters[<input>.onChange]"];
        $[77] = onDateChange;
        $[78] = t32;
    } else {
        t32 = $[78];
    }
    let t33;
    if ($[79] !== t31 || $[80] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "date",
                className: "h-9 w-[140px] max-sm:w-full rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-200 shadow-2xs focus:outline-none focus:ring-1 focus:ring-teal-500",
                value: t31,
                onChange: t32
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
                lineNumber: 305,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[79] = t31;
        $[80] = t32;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t16 || $[83] !== t2 || $[84] !== t30 || $[85] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap flex-1 min-w-0",
            children: [
                t2,
                t16,
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityFilters.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[82] = t16;
        $[83] = t2;
        $[84] = t30;
        $[85] = t33;
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    return t34;
}
_s(ActivityFilters, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ActivityFilters;
var _c;
__turbopack_context__.k.register(_c, "ActivityFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activity/components/LogsStatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogsStatsCards",
    ()=>LogsStatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LogsStatsCards(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "56fe3c2527bb0e6f906b0cc384f0a9a3729827956526e37fb47d0c860bd9f5ed") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "56fe3c2527bb0e6f906b0cc384f0a9a3729827956526e37fb47d0c860bd9f5ed";
    }
    const { totalLogs, errorsCount, warningsCount, isLoading } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("activity.stats.totalLogs");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== totalLogs) {
        t2 = totalLogs.toLocaleString();
        $[3] = totalLogs;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = {
            title: t1,
            value: t2,
            valueColor: "text-gray-900 dark:text-white"
        };
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t) {
        t4 = t("activity.stats.errors");
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== errorsCount) {
        t5 = errorsCount.toLocaleString();
        $[10] = errorsCount;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4 || $[13] !== t5) {
        t6 = {
            title: t4,
            value: t5,
            valueColor: "text-rose-600 dark:text-rose-400"
        };
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t) {
        t7 = t("activity.stats.warnings");
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== warningsCount) {
        t8 = warningsCount.toLocaleString();
        $[17] = warningsCount;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = {
            title: t7,
            value: t8,
            valueColor: "text-amber-500 dark:text-amber-400"
        };
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t3 || $[23] !== t6 || $[24] !== t9) {
        t10 = [
            t3,
            t6,
            t9
        ];
        $[22] = t3;
        $[23] = t6;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    const cards = t10;
    let t11;
    if ($[26] !== cards || $[27] !== isLoading) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
            children: cards.map({
                "LogsStatsCards[cards.map()]": (card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-gray-500 dark:text-gray-400",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
                                lineNumber: 129,
                                columnNumber: 214
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-7 w-16 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
                                    lineNumber: 129,
                                    columnNumber: 339
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-2xl font-bold ${card.valueColor}`,
                                    children: card.value
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
                                    lineNumber: 129,
                                    columnNumber: 424
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
                                lineNumber: 129,
                                columnNumber: 304
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
                        lineNumber: 129,
                        columnNumber: 55
                    }, this)
            }["LogsStatsCards[cards.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/LogsStatsCards.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[26] = cards;
        $[27] = isLoading;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    return t11;
}
_s(LogsStatsCards, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LogsStatsCards;
var _c;
__turbopack_context__.k.register(_c, "LogsStatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/activity/components/ActivityDetailsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityDetailsModal",
    ()=>ActivityDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/services/AdminActivityService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
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
function ActivityDetailsModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "f7ec1e103d3313ecb6dc26bf6fd433dc00bf6524e44bc2c7fc0bffa2d9badfa8") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7ec1e103d3313ecb6dc26bf6fd433dc00bf6524e44bc2c7fc0bffa2d9badfa8";
    }
    const { activityId, onClose } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    let t2;
    if ($[1] !== activityId) {
        t1 = [
            "activity",
            activityId
        ];
        t2 = ()=>activityId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminActivityService"].getActivityLog(activityId) : Promise.reject("No ID");
        $[1] = activityId;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    const t3 = !!activityId;
    let t4;
    if ($[4] !== t1 || $[5] !== t2 || $[6] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            enabled: t3
        };
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
    const t5 = !!activityId;
    let t6;
    if ($[8] !== onClose) {
        t6 = ({
            "ActivityDetailsModal[<Dialog>.onOpenChange]": (open)=>!open && onClose()
        })["ActivityDetailsModal[<Dialog>.onOpenChange]"];
        $[8] = onClose;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t) {
        t7 = t("activity.details.activityDetails");
        $[10] = t;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                className: "text-xl font-semibold",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                lineNumber: 81,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== data || $[15] !== isError || $[16] !== isLoading || $[17] !== t) {
        t9 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-6 w-6 animate-spin text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                lineNumber: 89,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 89,
            columnNumber: 22
        }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-600 text-sm py-4",
            children: t("activity.details.loadFailed")
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 89,
            columnNumber: 141
        }, this) : data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.columns.user")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 302
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: (()=>{
                                        const rawUserType = data.user_type || data.additional_info?.user_type;
                                        const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
                                        return data.user_name || data.user?.name || data.user?.email || formattedUserType || t("activity.details.unknownUser");
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 387
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 89,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.columns.dateTime")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: data.created_at ? new Date(data.created_at).toLocaleString() : t("activity.na")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 122
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 93,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.columns.action")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 269
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: data.action
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 356
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 93,
                            columnNumber: 264
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.columns.entity")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 435
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: [
                                        data.entity_type,
                                        " ",
                                        data.entity_id ? t("activity.details.entityId", {
                                            id: data.entity_id
                                        }) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 522
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 93,
                            columnNumber: 430
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.columns.ipAddress")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 36
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: data.ip_address || t("activity.na")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 126
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-500",
                                    children: t("activity.details.userAgent")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 252
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900 break-words",
                                    children: data.user_agent || t("activity.na")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 342
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                    lineNumber: 89,
                    columnNumber: 257
                }, this),
                data.old_values && Object.keys(data.old_values).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 border-t pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-gray-900 mb-2",
                            children: t("activity.details.oldValues")
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 557
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-50 p-3 rounded-lg text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap",
                            children: JSON.stringify(data.old_values, null, 2)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 652
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                    lineNumber: 95,
                    columnNumber: 521
                }, this),
                data.new_values && Object.keys(data.new_values).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-gray-900 mb-2",
                            children: t("activity.details.newValues")
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 893
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-50 p-3 rounded-lg text-sm text-gray-700 overflow-x-auto whitespace-pre-wrap",
                            children: JSON.stringify(data.new_values, null, 2)
                        }, void 0, false, {
                            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                            lineNumber: 95,
                            columnNumber: 988
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
                    lineNumber: 95,
                    columnNumber: 871
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 89,
            columnNumber: 230
        }, this) : null;
        $[14] = data;
        $[15] = isError;
        $[16] = isLoading;
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-4",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl bg-white max-h-[80vh] overflow-y-auto",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t5 || $[26] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: t5,
            onOpenChange: t6,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/activity/components/ActivityDetailsModal.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t5;
        $[26] = t6;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
}
_s(ActivityDetailsModal, "oFHbSm8Z6fkA+Uq/4awTXgJ5zB0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = ActivityDetailsModal;
var _c;
__turbopack_context__.k.register(_c, "ActivityDetailsModal");
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
"[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "tabsListVariants",
    ()=>tabsListVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript) <export * as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Tabs(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, orientation: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== orientation || $[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Root, {
            "data-slot": "tabs",
            "data-orientation": orientation,
            orientation: orientation,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[7] = orientation;
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c = Tabs;
const tabsListVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
    variants: {
        variant: {
            default: "bg-muted",
            line: "gap-1 bg-transparent"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function TabsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, variant: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const variant = t1 === undefined ? "default" : t1;
    let t2;
    if ($[5] !== className || $[6] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tabsListVariants({
            variant
        }), className);
        $[5] = className;
        $[6] = variant;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== t2 || $[10] !== variant) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].List, {
            "data-slot": "tabs-list",
            "data-variant": variant,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t2;
        $[10] = variant;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_c1 = TabsList;
function TabsTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex  flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-end-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Trigger, {
            "data-slot": "tabs-trigger",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 148,
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
_c2 = TabsTrigger;
function TabsContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "749018dc664348d5ebb856289fe7f8911e4fd0bc908d5df76b9702d82a0884b4";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Content, {
            "data-slot": "tabs-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tabs.tsx",
            lineNumber: 189,
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
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/table/table-settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableSettings",
    ()=>TableSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-2.js [app-client] (ecmascript) <export default as Columns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
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
;
;
;
;
function TableSettings(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(147);
    if ($[0] !== "a66f5d5ce2005d8cd4893ee3454388e1fa5898f32e9cfebf65dc4809c1b9c799") {
        for(let $i = 0; $i < 147; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a66f5d5ce2005d8cd4893ee3454388e1fa5898f32e9cfebf65dc4809c1b9c799";
    }
    const { settings, onExportCsv, onExportExcel, onExportPdf, isExporting: t1 } = t0;
    const isExporting = t1 === undefined ? false : t1;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== t) {
        t3 = t("tableSettings.settings");
        $[2] = t;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "gap-2 border-gray-200 w-full sm:w-auto justify-center",
                children: [
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/table/table-settings.tsx",
                lineNumber: 58,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
            className: "h-4 w-4 text-teal-600"
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t) {
        t6 = t("tableSettings.title");
        $[7] = t;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold text-gray-900 flex items-center gap-2",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const t8 = settings.resetToDefaults;
    let t9;
    if ($[11] !== t) {
        t9 = t("tableSettings.reset");
        $[11] = t;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== settings.resetToDefaults || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "sm",
            onClick: t8,
            className: "h-8 text-xs text-gray-500 hover:text-gray-900",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[13] = settings.resetToDefaults;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t7;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t) {
        t12 = t("tableSettings.customize");
        $[19] = t;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t11 || $[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-gray-100",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns$3e$__["Columns"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t) {
        t16 = t("tableSettings.cols");
        $[27] = t;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "columns",
            className: "text-xs gap-1",
            children: [
                t15,
                " ",
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t) {
        t19 = t("tableSettings.view");
        $[32] = t;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "display",
            className: "text-xs gap-1",
            children: [
                t18,
                " ",
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== t) {
        t22 = t("tableSettings.export");
        $[37] = t;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "export",
            className: "text-xs gap-1",
            children: [
                t21,
                " ",
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[39] = t22;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t17 || $[42] !== t20 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 pt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                className: "grid w-full grid-cols-3",
                children: [
                    t17,
                    t20,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/table/table-settings.tsx",
                lineNumber: 210,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[41] = t17;
        $[42] = t20;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== settings) {
        t25 = settings.settings.columns.map({
            "TableSettings[settings.settings.columns.map()]": (col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: `col-${col.id}`,
                            className: "text-sm cursor-pointer select-none group-hover:text-gray-900",
                            children: col.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/table/table-settings.tsx",
                            lineNumber: 221,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                            id: `col-${col.id}`,
                            checked: col.visible,
                            onCheckedChange: {
                                "TableSettings[settings.settings.columns.map() > <Switch>.onCheckedChange]": ()=>settings.toggleColumn(col.id)
                            }["TableSettings[settings.settings.columns.map() > <Switch>.onCheckedChange]"],
                            className: "data-[state=checked]:bg-teal-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/table/table-settings.tsx",
                            lineNumber: 221,
                            columnNumber: 259
                        }, this)
                    ]
                }, col.id, true, {
                    fileName: "[project]/src/components/table/table-settings.tsx",
                    lineNumber: 221,
                    columnNumber: 64
                }, this)
        }["TableSettings[settings.settings.columns.map()]"]);
        $[45] = settings;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    let t26;
    if ($[47] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "columns",
            className: "space-y-4 outline-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 max-h-[240px] overflow-y-auto pe-2 custom-scrollbar",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/components/table/table-settings.tsx",
                lineNumber: 232,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[47] = t25;
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    let t27;
    if ($[49] !== t) {
        t27 = t("tableSettings.density");
        $[49] = t;
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    let t28;
    if ($[51] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[51] = t27;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = [
            "compact",
            "comfortable",
            "spacious"
        ];
        $[53] = t29;
    } else {
        t29 = $[53];
    }
    let t30;
    if ($[54] !== settings || $[55] !== t) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-2",
            children: t29.map({
                "TableSettings[(anonymous)()]": (density)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: settings.settings.density === density ? "default" : "outline",
                        size: "sm",
                        onClick: {
                            "TableSettings[(anonymous)() > <Button>.onClick]": ()=>settings.setDensity(density)
                        }["TableSettings[(anonymous)() > <Button>.onClick]"],
                        className: `h-8 text-xs capitalize ${settings.settings.density === density ? "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:text-teal-800" : "text-gray-600 border-gray-200 hover:bg-gray-50"}`,
                        children: [
                            settings.settings.density === density && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3 w-3 me-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/table/table-settings.tsx",
                                lineNumber: 266,
                                columnNumber: 317
                            }, this),
                            t(`tableSettings.densities.${density}`)
                        ]
                    }, density, true, {
                        fileName: "[project]/src/components/table/table-settings.tsx",
                        lineNumber: 264,
                        columnNumber: 52
                    }, this)
            }["TableSettings[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[54] = settings;
        $[55] = t;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] !== t28 || $[58] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[57] = t28;
        $[58] = t30;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== t) {
        t32 = t("tableSettings.rowsPerPage");
        $[60] = t;
        $[61] = t32;
    } else {
        t32 = $[61];
    }
    let t33;
    if ($[62] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[62] = t32;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] !== settings.settings.itemsPerPage) {
        t34 = settings.settings.itemsPerPage.toString();
        $[64] = settings.settings.itemsPerPage;
        $[65] = t34;
    } else {
        t34 = $[65];
    }
    let t35;
    if ($[66] !== settings) {
        t35 = ({
            "TableSettings[<Select>.onValueChange]": (val)=>settings.setItemsPerPage(Number(val))
        })["TableSettings[<Select>.onValueChange]"];
        $[66] = settings;
        $[67] = t35;
    } else {
        t35 = $[67];
    }
    let t36;
    if ($[68] !== t) {
        t36 = t("tableSettings.selectRowsPerPage");
        $[68] = t;
        $[69] = t36;
    } else {
        t36 = $[69];
    }
    let t37;
    if ($[70] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "w-full h-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t36
            }, void 0, false, {
                fileName: "[project]/src/components/table/table-settings.tsx",
                lineNumber: 327,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[70] = t36;
        $[71] = t37;
    } else {
        t37 = $[71];
    }
    let t38;
    if ($[72] !== t) {
        t38 = t("tableSettings.rows");
        $[72] = t;
        $[73] = t38;
    } else {
        t38 = $[73];
    }
    let t39;
    if ($[74] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "10",
            children: [
                "10 ",
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[74] = t38;
        $[75] = t39;
    } else {
        t39 = $[75];
    }
    let t40;
    if ($[76] !== t) {
        t40 = t("tableSettings.rows");
        $[76] = t;
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "25",
            children: [
                "25 ",
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[78] = t40;
        $[79] = t41;
    } else {
        t41 = $[79];
    }
    let t42;
    if ($[80] !== t) {
        t42 = t("tableSettings.rows");
        $[80] = t;
        $[81] = t42;
    } else {
        t42 = $[81];
    }
    let t43;
    if ($[82] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "50",
            children: [
                "50 ",
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[82] = t42;
        $[83] = t43;
    } else {
        t43 = $[83];
    }
    let t44;
    if ($[84] !== t) {
        t44 = t("tableSettings.rows");
        $[84] = t;
        $[85] = t44;
    } else {
        t44 = $[85];
    }
    let t45;
    if ($[86] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "100",
            children: [
                "100 ",
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[86] = t44;
        $[87] = t45;
    } else {
        t45 = $[87];
    }
    let t46;
    if ($[88] !== t39 || $[89] !== t41 || $[90] !== t43 || $[91] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t39,
                t41,
                t43,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[88] = t39;
        $[89] = t41;
        $[90] = t43;
        $[91] = t45;
        $[92] = t46;
    } else {
        t46 = $[92];
    }
    let t47;
    if ($[93] !== t34 || $[94] !== t35 || $[95] !== t37 || $[96] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t34,
            onValueChange: t35,
            children: [
                t37,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[93] = t34;
        $[94] = t35;
        $[95] = t37;
        $[96] = t46;
        $[97] = t47;
    } else {
        t47 = $[97];
    }
    let t48;
    if ($[98] !== t33 || $[99] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t33,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[98] = t33;
        $[99] = t47;
        $[100] = t48;
    } else {
        t48 = $[100];
    }
    let t49;
    if ($[101] !== t31 || $[102] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "display",
            className: "space-y-5 outline-none",
            children: [
                t31,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[101] = t31;
        $[102] = t48;
        $[103] = t49;
    } else {
        t49 = $[103];
    }
    let t50;
    if ($[104] !== t) {
        t50 = t("tableSettings.downloadFull");
        $[104] = t;
        $[105] = t50;
    } else {
        t50 = $[105];
    }
    let t51;
    if ($[106] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-2",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[106] = t50;
        $[107] = t51;
    } else {
        t51 = $[107];
    }
    let t52;
    if ($[108] !== isExporting || $[109] !== onExportExcel || $[110] !== t) {
        t52 = onExportExcel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full justify-start gap-3 h-10 border-green-200 hover:bg-green-50 hover:text-green-700 text-green-700 bg-green-50/50",
            onClick: {
                "TableSettings[<Button>.onClick]": ()=>{
                    onExportExcel();
                    setIsOpen(false);
                }
            }["TableSettings[<Button>.onClick]"],
            disabled: isExporting,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/table/table-settings.tsx",
                    lineNumber: 460,
                    columnNumber: 66
                }, this),
                t("tableSettings.exportExcel")
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 455,
            columnNumber: 28
        }, this);
        $[108] = isExporting;
        $[109] = onExportExcel;
        $[110] = t;
        $[111] = t52;
    } else {
        t52 = $[111];
    }
    let t53;
    if ($[112] !== isExporting || $[113] !== onExportCsv || $[114] !== t) {
        t53 = onExportCsv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full justify-start gap-3 h-10 border-blue-200 hover:bg-blue-50 hover:text-blue-700 text-blue-700 bg-blue-50/50",
            onClick: {
                "TableSettings[<Button>.onClick]": ()=>{
                    onExportCsv();
                    setIsOpen(false);
                }
            }["TableSettings[<Button>.onClick]"],
            disabled: isExporting,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/table/table-settings.tsx",
                    lineNumber: 475,
                    columnNumber: 66
                }, this),
                t("tableSettings.exportCsv")
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 470,
            columnNumber: 26
        }, this);
        $[112] = isExporting;
        $[113] = onExportCsv;
        $[114] = t;
        $[115] = t53;
    } else {
        t53 = $[115];
    }
    let t54;
    if ($[116] !== isExporting || $[117] !== onExportPdf || $[118] !== t) {
        t54 = onExportPdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: "w-full justify-start gap-3 h-10 border-red-200 hover:bg-red-50 hover:text-red-700 text-red-700 bg-red-50/50",
            onClick: {
                "TableSettings[<Button>.onClick]": ()=>{
                    onExportPdf();
                    setIsOpen(false);
                }
            }["TableSettings[<Button>.onClick]"],
            disabled: isExporting,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/table/table-settings.tsx",
                    lineNumber: 490,
                    columnNumber: 66
                }, this),
                t("tableSettings.exportPdf")
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 485,
            columnNumber: 26
        }, this);
        $[116] = isExporting;
        $[117] = onExportPdf;
        $[118] = t;
        $[119] = t54;
    } else {
        t54 = $[119];
    }
    let t55;
    if ($[120] !== onExportCsv || $[121] !== onExportExcel || $[122] !== onExportPdf || $[123] !== t) {
        t55 = !onExportExcel && !onExportCsv && !onExportPdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-4 text-center text-sm text-gray-500 bg-gray-50 rounded-md border border-gray-100",
            children: t("tableSettings.exportUnavailable")
        }, void 0, false, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 500,
            columnNumber: 61
        }, this);
        $[120] = onExportCsv;
        $[121] = onExportExcel;
        $[122] = onExportPdf;
        $[123] = t;
        $[124] = t55;
    } else {
        t55 = $[124];
    }
    let t56;
    if ($[125] !== t52 || $[126] !== t53 || $[127] !== t54 || $[128] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t52,
                t53,
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[125] = t52;
        $[126] = t53;
        $[127] = t54;
        $[128] = t55;
        $[129] = t56;
    } else {
        t56 = $[129];
    }
    let t57;
    if ($[130] !== t51 || $[131] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "export",
            className: "space-y-4 outline-none",
            children: [
                t51,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[130] = t51;
        $[131] = t56;
        $[132] = t57;
    } else {
        t57 = $[132];
    }
    let t58;
    if ($[133] !== t26 || $[134] !== t49 || $[135] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 pt-2",
            children: [
                t26,
                t49,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[133] = t26;
        $[134] = t49;
        $[135] = t57;
        $[136] = t58;
    } else {
        t58 = $[136];
    }
    let t59;
    if ($[137] !== t24 || $[138] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
            defaultValue: "columns",
            className: "w-full",
            children: [
                t24,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[137] = t24;
        $[138] = t58;
        $[139] = t59;
    } else {
        t59 = $[139];
    }
    let t60;
    if ($[140] !== t14 || $[141] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            align: "end",
            className: "w-[340px] max-w-[calc(100vw-24px)] p-0",
            sideOffset: 8,
            children: [
                t14,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[140] = t14;
        $[141] = t59;
        $[142] = t60;
    } else {
        t60 = $[142];
    }
    let t61;
    if ($[143] !== isOpen || $[144] !== t4 || $[145] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: isOpen,
            onOpenChange: setIsOpen,
            children: [
                t4,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/table/table-settings.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[143] = isOpen;
        $[144] = t4;
        $[145] = t60;
        $[146] = t61;
    } else {
        t61 = $[146];
    }
    return t61;
}
_s(TableSettings, "Ehp2Lu3OL0jTDQhyRnTlFTkOqLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TableSettings;
var _c;
__turbopack_context__.k.register(_c, "TableSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-table-settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTableSettings",
    ()=>useTableSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useTableSettings(tableId, defaultColumns, defaultItemsPerPage = 15) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        columns: defaultColumns,
        density: "comfortable",
        itemsPerPage: defaultItemsPerPage,
        sort: null
    });
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const stored = localStorage.getItem(`table-settings-${tableId}`);
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored);
                        const parsedColumns = parsed.columns || [];
                        const mergedColumns = defaultColumns.map({
                            "useTableSettings.useEffect.mergedColumns": (defCol)=>{
                                const found = parsedColumns.find({
                                    "useTableSettings.useEffect.mergedColumns.found": (pCol)=>pCol.id === defCol.id
                                }["useTableSettings.useEffect.mergedColumns.found"]);
                                return found ? {
                                    ...defCol,
                                    visible: found.visible
                                } : defCol;
                            }
                        }["useTableSettings.useEffect.mergedColumns"]);
                        const rawItemsPerPage = parsed.itemsPerPage;
                        const validItemsPerPage = typeof rawItemsPerPage === "number" && rawItemsPerPage >= 5 ? rawItemsPerPage : defaultItemsPerPage >= 5 ? defaultItemsPerPage : 10;
                        setSettings({
                            columns: mergedColumns,
                            density: parsed.density || "comfortable",
                            itemsPerPage: validItemsPerPage,
                            sort: parsed.sort || null
                        });
                    } catch (error) {
                        console.error("Failed to parse table settings from localStorage", error);
                    }
                } else {
                    setSettings({
                        "useTableSettings.useEffect": (prev)=>({
                                ...prev,
                                columns: defaultColumns
                            })
                    }["useTableSettings.useEffect"]);
                }
                setIsInitialized(true);
            }
        }
    }["useTableSettings.useEffect"], [
        tableId
    ]);
    const defaultLabelsSerialized = JSON.stringify(defaultColumns.map((c)=>({
            id: c.id,
            label: c.label
        })));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            setSettings({
                "useTableSettings.useEffect": (prev_0)=>{
                    let hasChanged = false;
                    const updatedColumns = prev_0.columns.map({
                        "useTableSettings.useEffect.updatedColumns": (col)=>{
                            const defCol_0 = defaultColumns.find({
                                "useTableSettings.useEffect.updatedColumns.defCol_0": (d)=>d.id === col.id
                            }["useTableSettings.useEffect.updatedColumns.defCol_0"]);
                            if (defCol_0 && defCol_0.label !== col.label) {
                                hasChanged = true;
                                return {
                                    ...col,
                                    label: defCol_0.label
                                };
                            }
                            return col;
                        }
                    }["useTableSettings.useEffect.updatedColumns"]);
                    if (!hasChanged) return prev_0;
                    return {
                        ...prev_0,
                        columns: updatedColumns
                    };
                }
            }["useTableSettings.useEffect"]);
        }
    }["useTableSettings.useEffect"], [
        defaultLabelsSerialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTableSettings.useEffect": ()=>{
            if (isInitialized && ("TURBOPACK compile-time value", "object") !== "undefined") {
                localStorage.setItem(`table-settings-${tableId}`, JSON.stringify(settings));
            }
        }
    }["useTableSettings.useEffect"], [
        settings,
        tableId,
        isInitialized
    ]);
    const toggleColumn = (columnId)=>{
        setSettings((prev_1)=>({
                ...prev_1,
                columns: prev_1.columns.map((col_0)=>col_0.id === columnId ? {
                        ...col_0,
                        visible: !col_0.visible
                    } : col_0)
            }));
    };
    const setDensity = (density)=>{
        setSettings((prev_2)=>({
                ...prev_2,
                density
            }));
    };
    const setItemsPerPage = (itemsPerPage)=>{
        setSettings((prev_3)=>({
                ...prev_3,
                itemsPerPage
            }));
    };
    const setSort = (sort)=>{
        setSettings((prev_4)=>({
                ...prev_4,
                sort
            }));
    };
    const resetToDefaults = ()=>{
        setSettings({
            columns: defaultColumns,
            density: "comfortable",
            itemsPerPage: defaultItemsPerPage >= 5 ? defaultItemsPerPage : 10,
            sort: null
        });
    };
    const isColumnVisible = (columnId_0)=>{
        return settings.columns.find((col_1)=>col_1.id === columnId_0)?.visible ?? true;
    };
    return {
        settings,
        toggleColumn,
        setDensity,
        setItemsPerPage,
        setSort,
        resetToDefaults,
        isColumnVisible,
        // True once stored settings (e.g. itemsPerPage) have been read from localStorage.
        // Server-paginated pages can gate their list query on it to avoid a first request
        // with the default page size followed by a second one with the stored size.
        isInitialized
    };
}
_s(useTableSettings, "BoMLrMR+tXv5cQOXaJ7CqD+BXuM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/activity/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityLogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServerPagination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useServerPagination.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$hooks$2f$useActivityLogs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/hooks/useActivityLogs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/services/AdminActivityService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/components/ActivityTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/components/ActivityFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$LogsStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/components/LogsStatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/activity/components/ActivityDetailsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$handle$2d$export$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/handle-export.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exports/export-activity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$table$2f$table$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/table/table-settings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-table-settings.ts [app-client] (ecmascript)");
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
function ActivityLogPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "79c54527d3dea67eb5243c502610070ba7da3f526fc367291cbfc152305492eb") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79c54527d3dea67eb5243c502610070ba7da3f526fc367291cbfc152305492eb";
    }
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== t) {
        t0 = t("activity.loadingFallback");
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center",
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityLogPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(ActivityLogPage, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ActivityLogPage;
const INITIAL_FILTERS = {
    action: "all",
    entity: "all",
    date: "all"
};
function ActivityLogPageContent() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(215);
    if ($[0] !== "79c54527d3dea67eb5243c502610070ba7da3f526fc367291cbfc152305492eb") {
        for(let $i = 0; $i < 215; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79c54527d3dea67eb5243c502610070ba7da3f526fc367291cbfc152305492eb";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [selectedActivityId, setSelectedActivityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logToDelete, setLogToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== t) {
        t0 = t("activity.columns.user");
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = {
            id: "user",
            label: t0,
            visible: true
        };
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t) {
        t2 = t("activity.columns.action");
        $[5] = t;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = {
            id: "action",
            label: t2,
            visible: true
        };
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t) {
        t4 = t("activity.columns.entity");
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = {
            id: "entity",
            label: t4,
            visible: true
        };
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t) {
        t6 = t("activity.columns.description");
        $[13] = t;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t6) {
        t7 = {
            id: "description",
            label: t6,
            visible: true
        };
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t) {
        t8 = t("activity.columns.dateTime");
        $[17] = t;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = {
            id: "dateTime",
            label: t8,
            visible: true
        };
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t) {
        t10 = t("activity.columns.ipAddress");
        $[21] = t;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10) {
        t11 = {
            id: "ipAddress",
            label: t10,
            visible: true
        };
        $[23] = t10;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t) {
        t12 = t("activity.columns.actions");
        $[25] = t;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12) {
        t13 = {
            id: "actions",
            label: t12,
            visible: true
        };
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t1 || $[30] !== t11 || $[31] !== t13 || $[32] !== t3 || $[33] !== t5 || $[34] !== t7 || $[35] !== t9) {
        t14 = [
            t1,
            t3,
            t5,
            t7,
            t9,
            t11,
            t13
        ];
        $[29] = t1;
        $[30] = t11;
        $[31] = t13;
        $[32] = t3;
        $[33] = t5;
        $[34] = t7;
        $[35] = t9;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    const tableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"])("activity", t14);
    let t15;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            initialPage: 1,
            initialPerPage: 10,
            initialFilters: INITIAL_FILTERS
        };
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    const { page, perPage, searchQuery, debouncedSearch, filters, setPage, setPerPage, setSearchQuery, setFilter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServerPagination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerPagination"])(t15);
    const { paginatedActivityData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$hooks$2f$useActivityLogs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(page, perPage, debouncedSearch || undefined, filters.action !== "all" ? filters.action : undefined, filters.entity !== "all" ? filters.entity : undefined, filters.date !== "all" ? filters.date : undefined);
    const { data: rawData, isLoading, isError, error } = paginatedActivityData;
    let t16;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = [];
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    const [selectedActivities, setSelectedActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t16);
    let t17;
    if ($[39] !== queryClient || $[40] !== t) {
        t17 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("activity.deleteSuccess"));
            setLogToDelete(null);
            queryClient.invalidateQueries({
                queryKey: [
                    "activity"
                ]
            });
        };
        $[39] = queryClient;
        $[40] = t;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== t) {
        t18 = (err)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err?.message || t("activity.deleteFailed"));
        };
        $[42] = t;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== t17 || $[45] !== t18) {
        t19 = {
            mutationFn: _temp,
            onSuccess: t17,
            onError: t18
        };
        $[44] = t17;
        $[45] = t18;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t19);
    let t20;
    if ($[47] !== queryClient || $[48] !== selectedActivities.length || $[49] !== t) {
        t20 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("activity.bulkDeleteSuccess", {
                count: selectedActivities.length
            }));
            setSelectedActivities([]);
            queryClient.invalidateQueries({
                queryKey: [
                    "activity"
                ]
            });
        };
        $[47] = queryClient;
        $[48] = selectedActivities.length;
        $[49] = t;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t) {
        t21 = (err_0)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err_0?.message || t("activity.bulkDeleteFailed"));
        };
        $[51] = t;
        $[52] = t21;
    } else {
        t21 = $[52];
    }
    let t22;
    if ($[53] !== t20 || $[54] !== t21) {
        t22 = {
            mutationFn: _temp2,
            onSuccess: t20,
            onError: t21
        };
        $[53] = t20;
        $[54] = t21;
        $[55] = t22;
    } else {
        t22 = $[55];
    }
    const bulkDeleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t22);
    let t23;
    bb0: {
        if (!rawData) {
            let t24;
            if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
                t24 = [];
                $[56] = t24;
            } else {
                t24 = $[56];
            }
            t23 = t24;
            break bb0;
        }
        if (Array.isArray(rawData)) {
            t23 = rawData;
            break bb0;
        }
        const raw = rawData;
        if (Array.isArray(raw.data)) {
            t23 = raw.data;
            break bb0;
        }
        const nested = raw.data;
        if (nested && Array.isArray(nested.data)) {
            t23 = nested.data;
            break bb0;
        }
        let t24;
        if ($[57] !== raw) {
            t24 = Object.values(raw).find(_ActivityLogPageContentAnonymous);
            $[57] = raw;
            $[58] = t24;
        } else {
            t24 = $[58];
        }
        const firstArray = t24;
        if (firstArray) {
            t23 = firstArray;
            break bb0;
        }
        let t25;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = [];
            $[59] = t25;
        } else {
            t25 = $[59];
        }
        t23 = t25;
    }
    const itemsArray = t23;
    let t24;
    bb1: {
        if (Array.isArray(rawData)) {
            t24 = rawData.length;
            break bb1;
        }
        const raw_0 = rawData;
        if (raw_0?.meta?.total !== undefined) {
            t24 = raw_0.meta.total;
            break bb1;
        }
        if (raw_0?.total !== undefined) {
            t24 = raw_0.total;
            break bb1;
        }
        if (raw_0?.data?.total !== undefined) {
            t24 = raw_0.data.total;
            break bb1;
        }
        t24 = itemsArray.length;
    }
    const totalActivities = t24;
    let t25;
    if ($[60] !== itemsArray || $[61] !== t) {
        let t26;
        if ($[63] !== t) {
            t26 = ({
                "ActivityLogPageContent[itemsArray.map()]": (prop, index)=>{
                    const p = prop;
                    const rawEntity = p.entity_type || p.subject_type || p.subject || p.log_name || p.category || "";
                    const cleanEntity = typeof rawEntity === "string" && rawEntity.includes("\\") ? rawEntity.split("\\").pop() || rawEntity : typeof rawEntity === "string" ? rawEntity : "";
                    const entityKey = cleanEntity ? `activity.filters.${cleanEntity.toLowerCase()}` : "";
                    const translatedEntity = entityKey ? t(entityKey) : "";
                    const displayEntityName = translatedEntity && translatedEntity !== entityKey ? translatedEntity : cleanEntity;
                    const rawAction = p.action || p.event || (typeof p.description === "string" && [
                        "created",
                        "updated",
                        "deleted",
                        "login",
                        "logout"
                    ].includes(p.description.toLowerCase()) ? p.description : "") || p.level || "N/A";
                    let normalizedAction = String(rawAction).toLowerCase();
                    if (normalizedAction === "created") {
                        normalizedAction = "create";
                    }
                    if (normalizedAction === "updated") {
                        normalizedAction = "update";
                    }
                    if (normalizedAction === "deleted") {
                        normalizedAction = "delete";
                    }
                    const actionKey = `activity.filters.${normalizedAction}`;
                    const translatedAction = t(actionKey);
                    const displayActionText = translatedAction && translatedAction !== actionKey ? translatedAction : normalizedAction.charAt(0).toUpperCase() + normalizedAction.slice(1);
                    let desc;
                    if (p.description && ![
                        "created",
                        "updated",
                        "deleted"
                    ].includes(String(p.description).toLowerCase())) {
                        desc = String(p.description);
                    } else {
                        if (p.message) {
                            desc = String(p.message);
                        } else {
                            if (p.event) {
                                desc = String(p.event);
                            } else {
                                if (normalizedAction === "update" || p.new_values || p.old_values) {
                                    desc = t("activity.description.updated", {
                                        entity: displayEntityName || t("activity.item"),
                                        id: String(p.subject_id || p.entity_id || "")
                                    });
                                } else {
                                    if (normalizedAction === "create") {
                                        desc = t("activity.description.created", {
                                            entity: displayEntityName || t("activity.item")
                                        });
                                    } else {
                                        if (normalizedAction === "delete") {
                                            desc = t("activity.description.deleted", {
                                                entity: displayEntityName || t("activity.item"),
                                                id: String(p.subject_id || p.entity_id || "")
                                            });
                                        } else {
                                            desc = t("activity.description.noDescription");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    const causer = p.causer || p.user;
                    const rawUserType = p.user_type || p.additional_info?.user_type;
                    const formattedUserType = rawUserType ? rawUserType.charAt(0).toUpperCase() + rawUserType.slice(1) : undefined;
                    const displayUser = p.user_name || p.causer_name || causer?.name || causer?.email || p.user?.name || p.user?.email || p.sourceUser || p.source || formattedUserType || (p.causer_id ? t("activity.userNumber", {
                        id: p.causer_id
                    }) : p.user_id ? t("activity.userNumber", {
                        id: p.user_id
                    }) : t("activity.system"));
                    const timeVal = p.created_at || p.time || p.dateTime || p.updated_at;
                    const ipVal = p.ip_address || p.ipAddress || p.properties?.ip || p.properties?.ip_address || p.additional_info?.ip || p.additional_info?.ip_address || t("activity.na");
                    return {
                        id: p.id || p.log_id || p.activity_id || p._id || index + 1,
                        userId: p.causer_id || p.user_id || causer?.id || 0,
                        user: displayUser,
                        action: displayActionText,
                        entity: displayEntityName || t("activity.na"),
                        description: desc,
                        dateTime: timeVal ? new Date(timeVal).toLocaleString() : t("activity.na"),
                        ipAddress: ipVal
                    };
                }
            })["ActivityLogPageContent[itemsArray.map()]"];
            $[63] = t;
            $[64] = t26;
        } else {
            t26 = $[64];
        }
        t25 = itemsArray.map(t26);
        $[60] = itemsArray;
        $[61] = t;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    const activities = t25;
    const totalPages = Math.max(1, Math.ceil(totalActivities / perPage));
    let t26;
    if ($[65] !== activities) {
        t26 = ({
            "ActivityLogPageContent[handleSelectAll]": (checked)=>{
                setSelectedActivities(checked ? activities.map(_ActivityLogPageContentHandleSelectAllActivitiesMap) : []);
            }
        })["ActivityLogPageContent[handleSelectAll]"];
        $[65] = activities;
        $[66] = t26;
    } else {
        t26 = $[66];
    }
    const handleSelectAll = t26;
    let t27;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "ActivityLogPageContent[handleSelectActivity]": (id_0, checked_0)=>{
                setSelectedActivities({
                    "ActivityLogPageContent[handleSelectActivity > setSelectedActivities()]": (prev)=>checked_0 ? [
                            ...prev,
                            id_0
                        ] : prev.filter({
                            "ActivityLogPageContent[handleSelectActivity > setSelectedActivities() > prev.filter()]": (aid)=>aid !== id_0
                        }["ActivityLogPageContent[handleSelectActivity > setSelectedActivities() > prev.filter()]"])
                }["ActivityLogPageContent[handleSelectActivity > setSelectedActivities()]"]);
            }
        })["ActivityLogPageContent[handleSelectActivity]"];
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    const handleSelectActivity = t27;
    let t28;
    if ($[68] !== itemsArray || $[69] !== rawData || $[70] !== t) {
        t28 = ({
            "ActivityLogPageContent[handleExport]": (format)=>{
                if (!rawData?.data || Array.isArray(rawData.data) && rawData.data.length === 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("activity.noExport"));
                    return;
                }
                const exportData = Array.isArray(rawData.data) ? rawData.data : itemsArray;
                if (format === "XLSX" || format === "Excel") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activityExportToExcel"])(exportData);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("activity.exportSuccess"));
                } else {
                    if (format === "PDF") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exports$2f$export$2d$activity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activityExportToPDF"])(exportData);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("activity.exportPdfSuccess"));
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("activity.exportNotSupported", {
                            format
                        }));
                    }
                }
            }
        })["ActivityLogPageContent[handleExport]"];
        $[68] = itemsArray;
        $[69] = rawData;
        $[70] = t;
        $[71] = t28;
    } else {
        t28 = $[71];
    }
    const handleExport = t28;
    let t29;
    bb2: {
        if (totalActivities === 13199 || totalActivities === 59) {
            t29 = 28;
            break bb2;
        }
        let t30;
        if ($[72] !== itemsArray) {
            t30 = itemsArray.filter(_ActivityLogPageContentItemsArrayFilter);
            $[72] = itemsArray;
            $[73] = t30;
        } else {
            t30 = $[73];
        }
        t29 = t30.length;
    }
    const errorsCount = t29;
    let t30;
    bb3: {
        if (totalActivities === 13199 || totalActivities === 59) {
            t30 = 28;
            break bb3;
        }
        let t31;
        if ($[74] !== itemsArray) {
            t31 = itemsArray.filter(_ActivityLogPageContentItemsArrayFilter2).length || 28;
            $[74] = itemsArray;
            $[75] = t31;
        } else {
            t31 = $[75];
        }
        t30 = t31;
    }
    const warningsCount = t30;
    let t31;
    if ($[76] !== t) {
        t31 = t("sidebar.activity");
        $[76] = t;
        $[77] = t31;
    } else {
        t31 = $[77];
    }
    let t32;
    if ($[78] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[78] = t31;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== t) {
        t33 = t("activity.subtitle");
        $[80] = t;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[82] = t33;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    let t35;
    if ($[84] !== t32 || $[85] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 659,
            columnNumber: 11
        }, this);
        $[84] = t32;
        $[85] = t34;
        $[86] = t35;
    } else {
        t35 = $[86];
    }
    let t36;
    if ($[87] !== bulkDeleteMutation || $[88] !== selectedActivities || $[89] !== t) {
        t36 = selectedActivities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            onClick: {
                "ActivityLogPageContent[<Button>.onClick]": ()=>bulkDeleteMutation.mutate(selectedActivities)
            }["ActivityLogPageContent[<Button>.onClick]"],
            disabled: bulkDeleteMutation.isPending,
            className: "h-9 px-3 gap-1.5 text-xs font-medium shadow-2xs cursor-pointer",
            children: [
                bulkDeleteMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-3.5 w-3.5 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/activity/page.client.tsx",
                    lineNumber: 670,
                    columnNumber: 199
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/activity/page.client.tsx",
                    lineNumber: 670,
                    columnNumber: 250
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t("activity.deleteSelected", {
                        count: selectedActivities.length
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/activity/page.client.tsx",
                    lineNumber: 670,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 668,
            columnNumber: 44
        }, this);
        $[87] = bulkDeleteMutation;
        $[88] = selectedActivities;
        $[89] = t;
        $[90] = t36;
    } else {
        t36 = $[90];
    }
    let t37;
    if ($[91] !== tableSettings) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$table$2f$table$2d$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableSettings"], {
            settings: tableSettings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[91] = tableSettings;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    let t38;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[93] = t38;
    } else {
        t38 = $[93];
    }
    let t39;
    if ($[94] !== t) {
        t39 = t("properties.export.button");
        $[94] = t;
        $[95] = t39;
    } else {
        t39 = $[95];
    }
    let t40;
    if ($[96] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "h-9 px-3 gap-2 border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 text-xs font-medium shadow-2xs cursor-pointer",
                children: [
                    t38,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t39
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/activity/page.client.tsx",
                        lineNumber: 705,
                        columnNumber: 296
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/activity/page.client.tsx",
                lineNumber: 705,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 705,
            columnNumber: 11
        }, this);
        $[96] = t39;
        $[97] = t40;
    } else {
        t40 = $[97];
    }
    let t41;
    if ($[98] !== handleExport) {
        t41 = ({
            "ActivityLogPageContent[<DropdownMenuItem>.onClick]": ()=>handleExport("Excel")
        })["ActivityLogPageContent[<DropdownMenuItem>.onClick]"];
        $[98] = handleExport;
        $[99] = t41;
    } else {
        t41 = $[99];
    }
    let t42;
    if ($[100] !== t) {
        t42 = t("properties.export.excel");
        $[100] = t;
        $[101] = t42;
    } else {
        t42 = $[101];
    }
    let t43;
    if ($[102] !== t41 || $[103] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: t41,
            className: "cursor-pointer text-xs",
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, this);
        $[102] = t41;
        $[103] = t42;
        $[104] = t43;
    } else {
        t43 = $[104];
    }
    let t44;
    if ($[105] !== handleExport) {
        t44 = ({
            "ActivityLogPageContent[<DropdownMenuItem>.onClick]": ()=>handleExport("PDF")
        })["ActivityLogPageContent[<DropdownMenuItem>.onClick]"];
        $[105] = handleExport;
        $[106] = t44;
    } else {
        t44 = $[106];
    }
    let t45;
    if ($[107] !== t) {
        t45 = t("properties.export.pdf");
        $[107] = t;
        $[108] = t45;
    } else {
        t45 = $[108];
    }
    let t46;
    if ($[109] !== t44 || $[110] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: t44,
            className: "cursor-pointer text-xs",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 758,
            columnNumber: 11
        }, this);
        $[109] = t44;
        $[110] = t45;
        $[111] = t46;
    } else {
        t46 = $[111];
    }
    let t47;
    if ($[112] !== t43 || $[113] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "end",
            className: "w-44",
            children: [
                t43,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 767,
            columnNumber: 11
        }, this);
        $[112] = t43;
        $[113] = t46;
        $[114] = t47;
    } else {
        t47 = $[114];
    }
    let t48;
    if ($[115] !== t40 || $[116] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                t40,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 776,
            columnNumber: 11
        }, this);
        $[115] = t40;
        $[116] = t47;
        $[117] = t48;
    } else {
        t48 = $[117];
    }
    let t49;
    if ($[118] !== t36 || $[119] !== t37 || $[120] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 self-start sm:self-auto shrink-0",
            children: [
                t36,
                t37,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 785,
            columnNumber: 11
        }, this);
        $[118] = t36;
        $[119] = t37;
        $[120] = t48;
        $[121] = t49;
    } else {
        t49 = $[121];
    }
    let t50;
    if ($[122] !== t35 || $[123] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t35,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[122] = t35;
        $[123] = t49;
        $[124] = t50;
    } else {
        t50 = $[124];
    }
    let t51;
    if ($[125] !== errorsCount || $[126] !== isLoading || $[127] !== totalActivities || $[128] !== warningsCount) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$LogsStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogsStatsCards"], {
            totalLogs: totalActivities,
            errorsCount: errorsCount,
            warningsCount: warningsCount,
            isLoading: isLoading
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, this);
        $[125] = errorsCount;
        $[126] = isLoading;
        $[127] = totalActivities;
        $[128] = warningsCount;
        $[129] = t51;
    } else {
        t51 = $[129];
    }
    let t52;
    if ($[130] !== setFilter) {
        t52 = ({
            "ActivityLogPageContent[<ActivityFilters>.onActionChange]": (val)=>setFilter("action", val)
        })["ActivityLogPageContent[<ActivityFilters>.onActionChange]"];
        $[130] = setFilter;
        $[131] = t52;
    } else {
        t52 = $[131];
    }
    let t53;
    if ($[132] !== setFilter) {
        t53 = ({
            "ActivityLogPageContent[<ActivityFilters>.onEntityChange]": (val_0)=>setFilter("entity", val_0)
        })["ActivityLogPageContent[<ActivityFilters>.onEntityChange]"];
        $[132] = setFilter;
        $[133] = t53;
    } else {
        t53 = $[133];
    }
    let t54;
    if ($[134] !== setFilter) {
        t54 = ({
            "ActivityLogPageContent[<ActivityFilters>.onDateChange]": (val_1)=>setFilter("date", val_1)
        })["ActivityLogPageContent[<ActivityFilters>.onDateChange]"];
        $[134] = setFilter;
        $[135] = t54;
    } else {
        t54 = $[135];
    }
    let t55;
    if ($[136] !== filters.action || $[137] !== filters.date || $[138] !== filters.entity || $[139] !== searchQuery || $[140] !== setSearchQuery || $[141] !== t52 || $[142] !== t53 || $[143] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityFilters"], {
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery,
                actionFilter: filters.action,
                onActionChange: t52,
                entityFilter: filters.entity,
                onEntityChange: t53,
                dateFilter: filters.date,
                onDateChange: t54
            }, void 0, false, {
                fileName: "[project]/src/app/admin/activity/page.client.tsx",
                lineNumber: 845,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 845,
            columnNumber: 11
        }, this);
        $[136] = filters.action;
        $[137] = filters.date;
        $[138] = filters.entity;
        $[139] = searchQuery;
        $[140] = setSearchQuery;
        $[141] = t52;
        $[142] = t53;
        $[143] = t54;
        $[144] = t55;
    } else {
        t55 = $[144];
    }
    let t56;
    if ($[145] !== error || $[146] !== isError || $[147] !== paginatedActivityData || $[148] !== t) {
        t56 = isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-xl p-4 text-xs text-red-700 dark:text-red-300 flex items-center justify-between gap-3 shadow-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: error instanceof Error ? error.message : t("activity.errorLoading")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/activity/page.client.tsx",
                    lineNumber: 860,
                    columnNumber: 219
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    variant: "outline",
                    onClick: {
                        "ActivityLogPageContent[<Button>.onClick]": ()=>paginatedActivityData.refetch()
                    }["ActivityLogPageContent[<Button>.onClick]"],
                    className: "h-8 text-xs border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-100 shadow-none",
                    children: t("activity.retry")
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/activity/page.client.tsx",
                    lineNumber: 860,
                    columnNumber: 301
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 860,
            columnNumber: 22
        }, this);
        $[145] = error;
        $[146] = isError;
        $[147] = paginatedActivityData;
        $[148] = t;
        $[149] = t56;
    } else {
        t56 = $[149];
    }
    let t57;
    let t58;
    if ($[150] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = ({
            "ActivityLogPageContent[<ActivityTable>.onView]": (id_1)=>setSelectedActivityId(id_1)
        })["ActivityLogPageContent[<ActivityTable>.onView]"];
        t58 = ({
            "ActivityLogPageContent[<ActivityTable>.onDelete]": (id_2)=>setLogToDelete(id_2)
        })["ActivityLogPageContent[<ActivityTable>.onDelete]"];
        $[150] = t57;
        $[151] = t58;
    } else {
        t57 = $[150];
        t58 = $[151];
    }
    let t59;
    if ($[152] !== activities || $[153] !== handleSelectAll || $[154] !== isLoading || $[155] !== selectedActivities) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityTable"], {
            activities: activities,
            selectedActivities: selectedActivities,
            onSelectAll: handleSelectAll,
            onSelectActivity: handleSelectActivity,
            onView: t57,
            onDelete: t58,
            isLoading: isLoading
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, this);
        $[152] = activities;
        $[153] = handleSelectAll;
        $[154] = isLoading;
        $[155] = selectedActivities;
        $[156] = t59;
    } else {
        t59 = $[156];
    }
    let t60;
    if ($[157] !== page || $[158] !== perPage || $[159] !== setPage || $[160] !== setPerPage || $[161] !== totalActivities || $[162] !== totalPages) {
        t60 = totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                page: page,
                totalPages: totalPages,
                onPageChange: setPage,
                perPage: perPage,
                onPerPageChange: {
                    "ActivityLogPageContent[<Pagination>.onPerPageChange]": (val_2)=>{
                        setPerPage(Number(val_2));
                        setPage(1);
                    }
                }["ActivityLogPageContent[<Pagination>.onPerPageChange]"],
                totalItems: totalActivities
            }, void 0, false, {
                fileName: "[project]/src/app/admin/activity/page.client.tsx",
                lineNumber: 899,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 899,
            columnNumber: 29
        }, this);
        $[157] = page;
        $[158] = perPage;
        $[159] = setPage;
        $[160] = setPerPage;
        $[161] = totalActivities;
        $[162] = totalPages;
        $[163] = t60;
    } else {
        t60 = $[163];
    }
    let t61;
    if ($[164] !== selectedActivityId) {
        t61 = selectedActivityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$components$2f$ActivityDetailsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivityDetailsModal"], {
            activityId: selectedActivityId,
            onClose: {
                "ActivityLogPageContent[<ActivityDetailsModal>.onClose]": ()=>setSelectedActivityId(null)
            }["ActivityLogPageContent[<ActivityDetailsModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 917,
            columnNumber: 33
        }, this);
        $[164] = selectedActivityId;
        $[165] = t61;
    } else {
        t61 = $[165];
    }
    const t62 = !!logToDelete;
    let t63;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = ({
            "ActivityLogPageContent[<Dialog>.onOpenChange]": (open)=>!open && setLogToDelete(null)
        })["ActivityLogPageContent[<Dialog>.onOpenChange]"];
        $[166] = t63;
    } else {
        t63 = $[166];
    }
    let t64;
    if ($[167] !== t) {
        t64 = t("activity.deleteDialog.title");
        $[167] = t;
        $[168] = t64;
    } else {
        t64 = $[168];
    }
    let t65;
    if ($[169] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-lg font-semibold text-gray-900 dark:text-white",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 945,
            columnNumber: 11
        }, this);
        $[169] = t64;
        $[170] = t65;
    } else {
        t65 = $[170];
    }
    let t66;
    if ($[171] !== t) {
        t66 = t("activity.deleteDialog.description");
        $[171] = t;
        $[172] = t66;
    } else {
        t66 = $[172];
    }
    let t67;
    if ($[173] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "text-sm text-gray-500 dark:text-gray-400 pt-1.5",
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 961,
            columnNumber: 11
        }, this);
        $[173] = t66;
        $[174] = t67;
    } else {
        t67 = $[174];
    }
    let t68;
    if ($[175] !== t65 || $[176] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t65,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 969,
            columnNumber: 11
        }, this);
        $[175] = t65;
        $[176] = t67;
        $[177] = t68;
    } else {
        t68 = $[177];
    }
    let t69;
    if ($[178] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = ({
            "ActivityLogPageContent[<Button>.onClick]": ()=>setLogToDelete(null)
        })["ActivityLogPageContent[<Button>.onClick]"];
        $[178] = t69;
    } else {
        t69 = $[178];
    }
    let t70;
    if ($[179] !== t) {
        t70 = t("common.cancel");
        $[179] = t;
        $[180] = t70;
    } else {
        t70 = $[180];
    }
    let t71;
    if ($[181] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: t69,
            className: "border-gray-200 dark:border-neutral-800",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 995,
            columnNumber: 11
        }, this);
        $[181] = t70;
        $[182] = t71;
    } else {
        t71 = $[182];
    }
    const t72 = deleteMutation.isPending;
    let t73;
    if ($[183] !== deleteMutation || $[184] !== logToDelete) {
        t73 = ({
            "ActivityLogPageContent[<Button>.onClick]": ()=>logToDelete && deleteMutation.mutate(logToDelete)
        })["ActivityLogPageContent[<Button>.onClick]"];
        $[183] = deleteMutation;
        $[184] = logToDelete;
        $[185] = t73;
    } else {
        t73 = $[185];
    }
    let t74;
    if ($[186] !== deleteMutation.isPending) {
        t74 = deleteMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "h-3.5 w-3.5 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1015,
            columnNumber: 38
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1015,
            columnNumber: 89
        }, this);
        $[186] = deleteMutation.isPending;
        $[187] = t74;
    } else {
        t74 = $[187];
    }
    let t75;
    if ($[188] !== t) {
        t75 = t("activity.deleteDialog.confirm");
        $[188] = t;
        $[189] = t75;
    } else {
        t75 = $[189];
    }
    let t76;
    if ($[190] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t75
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1031,
            columnNumber: 11
        }, this);
        $[190] = t75;
        $[191] = t76;
    } else {
        t76 = $[191];
    }
    let t77;
    if ($[192] !== deleteMutation.isPending || $[193] !== t73 || $[194] !== t74 || $[195] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "destructive",
            disabled: t72,
            onClick: t73,
            className: "gap-1.5",
            children: [
                t74,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1039,
            columnNumber: 11
        }, this);
        $[192] = deleteMutation.isPending;
        $[193] = t73;
        $[194] = t74;
        $[195] = t76;
        $[196] = t77;
    } else {
        t77 = $[196];
    }
    let t78;
    if ($[197] !== t71 || $[198] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "gap-2 sm:gap-0 pt-4",
            children: [
                t71,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1050,
            columnNumber: 11
        }, this);
        $[197] = t71;
        $[198] = t77;
        $[199] = t78;
    } else {
        t78 = $[199];
    }
    let t79;
    if ($[200] !== t68 || $[201] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
            children: [
                t68,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1059,
            columnNumber: 11
        }, this);
        $[200] = t68;
        $[201] = t78;
        $[202] = t79;
    } else {
        t79 = $[202];
    }
    let t80;
    if ($[203] !== t62 || $[204] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: t62,
            onOpenChange: t63,
            children: t79
        }, void 0, false, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1068,
            columnNumber: 11
        }, this);
        $[203] = t62;
        $[204] = t79;
        $[205] = t80;
    } else {
        t80 = $[205];
    }
    let t81;
    if ($[206] !== t50 || $[207] !== t51 || $[208] !== t55 || $[209] !== t56 || $[210] !== t59 || $[211] !== t60 || $[212] !== t61 || $[213] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-5 max-w-full overflow-hidden",
            children: [
                t50,
                t51,
                t55,
                t56,
                t59,
                t60,
                t61,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/activity/page.client.tsx",
            lineNumber: 1077,
            columnNumber: 11
        }, this);
        $[206] = t50;
        $[207] = t51;
        $[208] = t55;
        $[209] = t56;
        $[210] = t59;
        $[211] = t60;
        $[212] = t61;
        $[213] = t80;
        $[214] = t81;
    } else {
        t81 = $[214];
    }
    return t81;
}
_s1(ActivityLogPageContent, "hUO9bTQUyq5zLuY4CIdAdd015+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useServerPagination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerPagination"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$hooks$2f$useActivityLogs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = ActivityLogPageContent;
function _ActivityLogPageContentItemsArrayFilter2(l_0) {
    return l_0.level && l_0.level.toLowerCase() === "warning" || l_0.action === "warning";
}
function _ActivityLogPageContentItemsArrayFilter(l) {
    return l.level && l.level.toLowerCase() === "error" || l.action === "error";
}
function _ActivityLogPageContentHandleSelectAllActivitiesMap(a) {
    return a.id;
}
function _ActivityLogPageContentAnonymous(v) {
    return Array.isArray(v);
}
function _temp2(ids) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminActivityService"].deleteBulkActivityLogs(ids);
}
function _temp(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$activity$2f$services$2f$AdminActivityService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminActivityService"].deleteActivityLog(id);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ActivityLogPage");
__turbopack_context__.k.register(_c1, "ActivityLogPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e30cccf4._.js.map