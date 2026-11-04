(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    ()=>useAdEditData,
    "useAdQuery",
    ()=>useAdQuery
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
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
function useAdQuery(adId, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "2ab0839f1f129a1c5dc1b2e97a299b166841e656c577a66972612dcb61859eeb") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ab0839f1f129a1c5dc1b2e97a299b166841e656c577a66972612dcb61859eeb";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] !== adId) {
        t1 = [
            "ad",
            adId
        ];
        $[1] = adId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== adId || $[4] !== token) {
        t2 = async ()=>{
            if (!adId || !token) {
                return null;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAd"])(adId.toString(), token);
            return response?.data || response;
        };
        $[3] = adId;
        $[4] = token;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = !!adId && !!token && enabled;
    let t4;
    if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            enabled: t3,
            staleTime: 0,
            gcTime: 0
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
_s(useAdQuery, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAdEditData(adId, isOpen, country, developerId, linkTo) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "2ab0839f1f129a1c5dc1b2e97a299b166841e656c577a66972612dcb61859eeb") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ab0839f1f129a1c5dc1b2e97a299b166841e656c577a66972612dcb61859eeb";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [developerSearch, setDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSearch, setProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [propertySearch, setPropertySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debouncedDeveloperSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(developerSearch);
    const debouncedProjectSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(projectSearch);
    const debouncedPropertySearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(propertySearch);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useAdEditData[useEffect()]": ()=>{
                setProjectSearch("");
                setPropertySearch("");
            }
        })["useAdEditData[useEffect()]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== linkTo) {
        t1 = [
            linkTo
        ];
        $[2] = linkTo;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const parsedCountry = parseInt(country);
    let t2;
    if ($[4] !== country || $[5] !== parsedCountry) {
        t2 = !isNaN(parsedCountry) ? parsedCountry.toString() : country === "Egypt" ? "1" : country === "UAE" ? "2" : country === "Oman" ? "3" : "1";
        $[4] = country;
        $[5] = parsedCountry;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const countryId = t2;
    const { data: adData, isLoading: loadingAd } = useAdQuery(adId, isOpen);
    let t3;
    if ($[7] !== countryId || $[8] !== debouncedDeveloperSearch) {
        t3 = [
            "developers",
            countryId,
            debouncedDeveloperSearch
        ];
        $[7] = countryId;
        $[8] = debouncedDeveloperSearch;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== country || $[11] !== countryId || $[12] !== debouncedDeveloperSearch) {
        t4 = async ()=>{
            const countryParam = country && country !== "all" ? countryId : undefined;
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].getDevelopersPaginated(1, 50, debouncedDeveloperSearch || undefined, undefined, countryParam);
            const { itemsArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$utils$2f$map$2d$developer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackDevelopersResponse"])(data);
            return itemsArray.map(_useAdEditDataAnonymousItemsArrayMap).filter(_useAdEditDataAnonymousAnonymous);
        };
        $[10] = country;
        $[11] = countryId;
        $[12] = debouncedDeveloperSearch;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const t5 = !!token && isOpen;
    let t6;
    if ($[14] !== t3 || $[15] !== t4 || $[16] !== t5) {
        t6 = {
            queryKey: t3,
            queryFn: t4,
            enabled: t5,
            staleTime: 300000
        };
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const { data: developersData, isLoading: developersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t6);
    let t7;
    if ($[18] !== countryId || $[19] !== debouncedProjectSearch || $[20] !== developerId) {
        t7 = [
            "projects",
            developerId,
            countryId,
            debouncedProjectSearch
        ];
        $[18] = countryId;
        $[19] = debouncedProjectSearch;
        $[20] = developerId;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== countryId || $[23] !== debouncedProjectSearch || $[24] !== developerId || $[25] !== token) {
        t8 = async ()=>{
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
        $[22] = countryId;
        $[23] = debouncedProjectSearch;
        $[24] = developerId;
        $[25] = token;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    const t9 = !!token && isOpen && (linkTo === "PROJECTS" || !linkTo);
    let t10;
    if ($[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
        t10 = {
            queryKey: t7,
            queryFn: t8,
            enabled: t9,
            staleTime: 300000
        };
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    const { data: projectsData, isLoading: projectsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t10);
    let t11;
    let t12;
    if ($[31] !== debouncedPropertySearch || $[32] !== developerId) {
        t11 = [
            "properties",
            developerId,
            debouncedPropertySearch
        ];
        t12 = async ()=>{
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
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/dashboard/properties", {
                params: params_0
            });
            const raw = response.data;
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
        $[31] = debouncedPropertySearch;
        $[32] = developerId;
        $[33] = t11;
        $[34] = t12;
    } else {
        t11 = $[33];
        t12 = $[34];
    }
    const t13 = !!token && isOpen && linkTo === "PROPERTIES";
    let t14;
    if ($[35] !== t11 || $[36] !== t12 || $[37] !== t13) {
        t14 = {
            queryKey: t11,
            queryFn: t12,
            enabled: t13,
            staleTime: 300000
        };
        $[35] = t11;
        $[36] = t12;
        $[37] = t13;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    const { data: propertiesData, isLoading: propertiesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t14);
    let t15;
    if ($[39] !== developersData) {
        t15 = developersData || [];
        $[39] = developersData;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== projectsData) {
        t16 = projectsData || [];
        $[41] = projectsData;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== propertiesData) {
        t17 = propertiesData || [];
        $[43] = propertiesData;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] !== adData || $[46] !== developerSearch || $[47] !== developersLoading || $[48] !== loadingAd || $[49] !== projectSearch || $[50] !== projectsLoading || $[51] !== propertiesLoading || $[52] !== propertySearch || $[53] !== t15 || $[54] !== t16 || $[55] !== t17) {
        t18 = {
            loadingAd,
            adData,
            developers: t15,
            developerSearch,
            setDeveloperSearch,
            developersLoading,
            developerHasMore: false,
            projects: t16,
            properties: t17,
            projectsLoading,
            propertiesLoading,
            projectSearch,
            setProjectSearch,
            propertySearch,
            setPropertySearch
        };
        $[45] = adData;
        $[46] = developerSearch;
        $[47] = developersLoading;
        $[48] = loadingAd;
        $[49] = projectSearch;
        $[50] = projectsLoading;
        $[51] = propertiesLoading;
        $[52] = propertySearch;
        $[53] = t15;
        $[54] = t16;
        $[55] = t17;
        $[56] = t18;
    } else {
        t18 = $[56];
    }
    return t18;
}
_s1(useAdEditData, "ahVI+tzHClmXJbuA1svNc46vkko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        useAdQuery,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "5740737569286732a0e41c2e38bdb34b313505e054ec44a88dfc6402c9605706") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5740737569286732a0e41c2e38bdb34b313505e054ec44a88dfc6402c9605706";
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
    if ($[2] !== t) {
        t2 = t("ads.details.editAd");
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = adId ? isAr ? `تعديل تفاصيل الإعلان #${adId}` : `Update details for Ad #${adId}` : "";
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-neutral-500 dark:text-neutral-400 font-normal",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
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
                    lineNumber: 59,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/EditAdModalHeader.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
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
    if ($[0] !== "541db3f67690f3460844b6e37bd383fa11330dd565d84743e8d34f3b73872588") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "541db3f67690f3460844b6e37bd383fa11330dd565d84743e8d34f3b73872588";
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
                    className: "h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent me-2"
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
            children: t("ads.details.editAd")
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)");
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
function AdTitleSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "b4fd8bf2b3fa3a5614443332c8e451f3c449bbcd3fffc9bd2ca39e8f3d3fcef4") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b4fd8bf2b3fa3a5614443332c8e451f3c449bbcd3fffc9bd2ca39e8f3d3fcef4";
    }
    const { register, error } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t) {
        t2 = t("ads.createStepOne.campaignOverview");
        $[2] = t;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
                    lineNumber: 46,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = t("ads.createStepOne.adTitle");
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
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
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t) {
        t7 = t("ads.createStepOne.adTitleHint");
        $[11] = t;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t6 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t) {
        t10 = t("ads.createStepOne.adTitlePlaceholder");
        $[18] = t;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t) {
        t11 = (val)=>{
            const trimmed = (val || "").trim();
            if (!trimmed) {
                return t("ads.createStepOne.adTitleRequired");
            }
            if (trimmed.length < 2) {
                return t("ads.createStepOne.adTitleMinLength");
            }
            if (trimmed.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]) {
                return t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]
                });
            }
            return true;
        };
        $[20] = t;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== register || $[23] !== t11) {
        t12 = register("title", {
            validate: t11
        });
        $[22] = register;
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const t13 = !!error;
    const t14 = !!error;
    const t15 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30 ${error ? "" : "border-neutral-200 dark:border-neutral-700"}`;
    let t16;
    if ($[25] !== t10 || $[26] !== t12 || $[27] !== t13 || $[28] !== t14 || $[29] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t10,
            ...t12,
            error: t13,
            "aria-invalid": t14,
            className: t15
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t12;
        $[27] = t13;
        $[28] = t14;
        $[29] = t15;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== error) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: error
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[31] = error;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t16 || $[34] !== t17 || $[35] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
        $[35] = t9;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t18 || $[38] !== t3) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t3,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/AdTitleSection.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t3;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
}
_s(AdTitleSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(195);
    if ($[0] !== "16b44c5d0eda04ea7866f451b844f7e7cda14ed8349b90735f5c501e2d1f90a5") {
        for(let $i = 0; $i < 195; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16b44c5d0eda04ea7866f451b844f7e7cda14ed8349b90735f5c501e2d1f90a5";
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
        if ($[35] !== t) {
            t18 = t("ads.createStepOne.placementAudience");
            $[35] = t;
            $[36] = t18;
        } else {
            t18 = $[36];
        }
        if ($[37] !== t18) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                        children: t18
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 170,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this);
            $[37] = t18;
            $[38] = t13;
        } else {
            t13 = $[38];
        }
        let t19;
        if ($[39] !== t) {
            t19 = t("ads.createStepOne.adFormat");
            $[39] = t;
            $[40] = t19;
        } else {
            t19 = $[40];
        }
        let t20;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this);
            $[41] = t20;
        } else {
            t20 = $[41];
        }
        let t21;
        if ($[42] !== t19) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t19,
                    " ",
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this);
            $[42] = t19;
            $[43] = t21;
        } else {
            t21 = $[43];
        }
        let t22;
        if ($[44] !== setValue) {
            t22 = ({
                "PlacementSection[<Select>.onValueChange]": (val)=>setValue("type", val, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true
                    })
            })["PlacementSection[<Select>.onValueChange]"];
            $[44] = setValue;
            $[45] = t22;
        } else {
            t22 = $[45];
        }
        let t23;
        if ($[46] !== t) {
            t23 = t("ads.createStepOne.selectFormat");
            $[46] = t;
            $[47] = t23;
        } else {
            t23 = $[47];
        }
        let t24;
        if ($[48] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: t23
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 223,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this);
            $[48] = t23;
            $[49] = t24;
        } else {
            t24 = $[49];
        }
        let t25;
        if ($[50] !== t) {
            t25 = t("ads.createStepOne.formatBanner");
            $[50] = t;
            $[51] = t25;
        } else {
            t25 = $[51];
        }
        let t26;
        if ($[52] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "banner",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this);
            $[52] = t25;
            $[53] = t26;
        } else {
            t26 = $[53];
        }
        let t27;
        if ($[54] !== t) {
            t27 = t("ads.createStepOne.formatCard");
            $[54] = t;
            $[55] = t27;
        } else {
            t27 = $[55];
        }
        let t28;
        if ($[56] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "card",
                children: t27
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this);
            $[56] = t27;
            $[57] = t28;
        } else {
            t28 = $[57];
        }
        let t29;
        if ($[58] !== t) {
            t29 = t("ads.createStepOne.formatPopUp");
            $[58] = t;
            $[59] = t29;
        } else {
            t29 = $[59];
        }
        let t30;
        if ($[60] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "pop_up",
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this);
            $[60] = t29;
            $[61] = t30;
        } else {
            t30 = $[61];
        }
        let t31;
        if ($[62] !== t) {
            t31 = t("ads.createStepOne.formatFullPage");
            $[62] = t;
            $[63] = t31;
        } else {
            t31 = $[63];
        }
        let t32;
        if ($[64] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "full_page",
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, this);
            $[64] = t31;
            $[65] = t32;
        } else {
            t32 = $[65];
        }
        let t33;
        if ($[66] !== t26 || $[67] !== t28 || $[68] !== t30 || $[69] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: [
                    t26,
                    t28,
                    t30,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, this);
            $[66] = t26;
            $[67] = t28;
            $[68] = t30;
            $[69] = t32;
            $[70] = t33;
        } else {
            t33 = $[70];
        }
        let t34;
        if ($[71] !== t22 || $[72] !== t24 || $[73] !== t33 || $[74] !== type) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: type,
                onValueChange: t22,
                children: [
                    t24,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, this);
            $[71] = t22;
            $[72] = t24;
            $[73] = t33;
            $[74] = type;
            $[75] = t34;
        } else {
            t34 = $[75];
        }
        let t35;
        if ($[76] !== t21 || $[77] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t21,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this);
            $[76] = t21;
            $[77] = t34;
            $[78] = t35;
        } else {
            t35 = $[78];
        }
        let t36;
        if ($[79] !== t) {
            t36 = t("ads.createStepOne.targetPlatform");
            $[79] = t;
            $[80] = t36;
        } else {
            t36 = $[80];
        }
        let t37;
        if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 334,
                columnNumber: 13
            }, this);
            $[81] = t37;
        } else {
            t37 = $[81];
        }
        let t38;
        if ($[82] !== t36) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t36,
                    " ",
                    t37
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 341,
                columnNumber: 13
            }, this);
            $[82] = t36;
            $[83] = t38;
        } else {
            t38 = $[83];
        }
        let t39;
        if ($[84] !== setValue) {
            t39 = ({
                "PlacementSection[<Select>.onValueChange]": (val_0)=>setValue("platform", val_0, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true
                    })
            })["PlacementSection[<Select>.onValueChange]"];
            $[84] = setValue;
            $[85] = t39;
        } else {
            t39 = $[85];
        }
        let t40;
        if ($[86] !== t) {
            t40 = t("ads.createStepOne.selectPlatform");
            $[86] = t;
            $[87] = t40;
        } else {
            t40 = $[87];
        }
        let t41;
        if ($[88] !== t40) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: t40
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                    lineNumber: 371,
                    columnNumber: 135
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 371,
                columnNumber: 13
            }, this);
            $[88] = t40;
            $[89] = t41;
        } else {
            t41 = $[89];
        }
        let t42;
        if ($[90] !== t) {
            t42 = t("ads.createStepOne.platformWeb");
            $[90] = t;
            $[91] = t42;
        } else {
            t42 = $[91];
        }
        let t43;
        if ($[92] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "web",
                children: t42
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 387,
                columnNumber: 13
            }, this);
            $[92] = t42;
            $[93] = t43;
        } else {
            t43 = $[93];
        }
        let t44;
        if ($[94] !== t) {
            t44 = t("ads.createStepOne.platformMobile");
            $[94] = t;
            $[95] = t44;
        } else {
            t44 = $[95];
        }
        let t45;
        if ($[96] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "mobile",
                children: t44
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 403,
                columnNumber: 13
            }, this);
            $[96] = t44;
            $[97] = t45;
        } else {
            t45 = $[97];
        }
        let t46;
        if ($[98] !== t) {
            t46 = t("ads.createStepOne.platformAndroid");
            $[98] = t;
            $[99] = t46;
        } else {
            t46 = $[99];
        }
        let t47;
        if ($[100] !== t46) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "android",
                children: t46
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 419,
                columnNumber: 13
            }, this);
            $[100] = t46;
            $[101] = t47;
        } else {
            t47 = $[101];
        }
        let t48;
        if ($[102] !== t) {
            t48 = t("ads.createStepOne.platformIos");
            $[102] = t;
            $[103] = t48;
        } else {
            t48 = $[103];
        }
        let t49;
        if ($[104] !== t48) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ios",
                children: t48
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 435,
                columnNumber: 13
            }, this);
            $[104] = t48;
            $[105] = t49;
        } else {
            t49 = $[105];
        }
        let t50;
        if ($[106] !== t43 || $[107] !== t45 || $[108] !== t47 || $[109] !== t49) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: [
                    t43,
                    t45,
                    t47,
                    t49
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 443,
                columnNumber: 13
            }, this);
            $[106] = t43;
            $[107] = t45;
            $[108] = t47;
            $[109] = t49;
            $[110] = t50;
        } else {
            t50 = $[110];
        }
        let t51;
        if ($[111] !== platform || $[112] !== t39 || $[113] !== t41 || $[114] !== t50) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: platform,
                onValueChange: t39,
                children: [
                    t41,
                    t50
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 454,
                columnNumber: 13
            }, this);
            $[111] = platform;
            $[112] = t39;
            $[113] = t41;
            $[114] = t50;
            $[115] = t51;
        } else {
            t51 = $[115];
        }
        let t52;
        if ($[116] !== t38 || $[117] !== t51) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t38,
                    t51
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 465,
                columnNumber: 13
            }, this);
            $[116] = t38;
            $[117] = t51;
            $[118] = t52;
        } else {
            t52 = $[118];
        }
        if ($[119] !== t35 || $[120] !== t52) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    t35,
                    t52
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 473,
                columnNumber: 13
            }, this);
            $[119] = t35;
            $[120] = t52;
            $[121] = t14;
        } else {
            t14 = $[121];
        }
        if ($[122] !== position || $[123] !== setValue || $[124] !== t || $[125] !== type || $[126] !== width) {
            t15 = type === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                                children: t("ads.createStepOne.popUpDimensions")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 481,
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
                                            placeholder: t("ads.createStepOne.selectWidth")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                            lineNumber: 487,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 487,
                                        columnNumber: 58
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "full_screen",
                                                children: t("ads.createStepOne.dimensionFullScreen")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 487,
                                                columnNumber: 264
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "large",
                                                children: t("ads.createStepOne.dimensionLarge")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 487,
                                                columnNumber: 353
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "medium",
                                                children: t("ads.createStepOne.dimensionMedium")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 487,
                                                columnNumber: 431
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "small",
                                                children: t("ads.createStepOne.dimensionSmall")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 487,
                                                columnNumber: 511
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "custom",
                                                children: t("ads.createStepOne.dimensionCustom")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 487,
                                                columnNumber: 589
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 487,
                                        columnNumber: 249
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 481,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 481,
                        columnNumber: 195
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                                children: t("ads.createStepOne.screenPosition")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 487,
                                columnNumber: 705
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
                                            placeholder: t("ads.createStepOne.selectPosition")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                            lineNumber: 493,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 493,
                                        columnNumber: 58
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_center",
                                                children: t("ads.createStepOne.posTopCenter")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 267
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "middle_center",
                                                children: t("ads.createStepOne.posMiddleCenter")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 348
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_center",
                                                children: t("ads.createStepOne.posBottomCenter")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 435
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_right",
                                                children: t("ads.createStepOne.posBottomRight")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 522
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "bottom_left",
                                                children: t("ads.createStepOne.posBottomLeft")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 607
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_right",
                                                children: t("ads.createStepOne.posTopRight")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 690
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "top_left",
                                                children: t("ads.createStepOne.posTopLeft")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 769
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                        lineNumber: 493,
                                        columnNumber: 252
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                                lineNumber: 487,
                                columnNumber: 843
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                        lineNumber: 487,
                        columnNumber: 700
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 481,
                columnNumber: 34
            }, this);
            $[122] = position;
            $[123] = setValue;
            $[124] = t;
            $[125] = type;
            $[126] = width;
            $[127] = t15;
        } else {
            t15 = $[127];
        }
        t11 = "grid grid-cols-1 sm:grid-cols-2 gap-4";
        let t53;
        if ($[128] !== t) {
            t53 = t("ads.createStepOne.placementLocations");
            $[128] = t;
            $[129] = t53;
        } else {
            t53 = $[129];
        }
        let t54;
        if ($[130] === Symbol.for("react.memo_cache_sentinel")) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 514,
                columnNumber: 13
            }, this);
            $[130] = t54;
        } else {
            t54 = $[130];
        }
        if ($[131] !== t53) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
                children: [
                    t53,
                    " ",
                    t54
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 520,
                columnNumber: 13
            }, this);
            $[131] = t53;
            $[132] = t10;
        } else {
            t10 = $[132];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"];
        const t55 = selectedLocations.length > 0 ? `${selectedLocations.length} ${t("ads.createStepOne.locationsCount")} (${selectedLocations.map(getLocationLabel).join(", ")})` : t("ads.createStepOne.selectPages");
        let t56;
        if ($[133] !== t55) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate",
                children: t55
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 530,
                columnNumber: 13
            }, this);
            $[133] = t55;
            $[134] = t56;
        } else {
            t56 = $[134];
        }
        let t57;
        if ($[135] === Symbol.for("react.memo_cache_sentinel")) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "h-4 w-4 opacity-50 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 538,
                columnNumber: 13
            }, this);
            $[135] = t57;
        } else {
            t57 = $[135];
        }
        if ($[136] !== t56) {
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
                    lineNumber: 544,
                    columnNumber: 48
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 544,
                columnNumber: 12
            }, this);
            $[136] = t56;
            $[137] = t9;
        } else {
            t9 = $[137];
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
                    lineNumber: 554,
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
    if ($[138] !== T0 || $[139] !== t6 || $[140] !== t7 || $[141] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t6,
            align: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[138] = T0;
        $[139] = t6;
        $[140] = t7;
        $[141] = t8;
        $[142] = t16;
    } else {
        t16 = $[142];
    }
    let t17;
    if ($[143] !== T1 || $[144] !== t16 || $[145] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t9,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[143] = T1;
        $[144] = t16;
        $[145] = t9;
        $[146] = t17;
    } else {
        t17 = $[146];
    }
    let t18;
    if ($[147] !== t10 || $[148] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 615,
            columnNumber: 11
        }, this);
        $[147] = t10;
        $[148] = t17;
        $[149] = t18;
    } else {
        t18 = $[149];
    }
    let t19;
    if ($[150] !== t) {
        t19 = t("ads.createStepOne.country");
        $[150] = t;
        $[151] = t19;
    } else {
        t19 = $[151];
    }
    let t20;
    if ($[152] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 632,
            columnNumber: 11
        }, this);
        $[152] = t20;
    } else {
        t20 = $[152];
    }
    let t21;
    if ($[153] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t19,
                " ",
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[153] = t19;
        $[154] = t21;
    } else {
        t21 = $[154];
    }
    let t22;
    if ($[155] !== setValue) {
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
        $[155] = setValue;
        $[156] = t22;
    } else {
        t22 = $[156];
    }
    let t23;
    if ($[157] !== t) {
        t23 = t("ads.createStepOne.selectCountry");
        $[157] = t;
        $[158] = t23;
    } else {
        t23 = $[158];
    }
    let t24;
    if ($[159] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t23
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
                lineNumber: 677,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 677,
            columnNumber: 11
        }, this);
        $[159] = t23;
        $[160] = t24;
    } else {
        t24 = $[160];
    }
    let t25;
    if ($[161] !== t) {
        t25 = t("ads.createStepOne.countryEgypt");
        $[161] = t;
        $[162] = t25;
    } else {
        t25 = $[162];
    }
    let t26;
    if ($[163] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Egypt",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[163] = t25;
        $[164] = t26;
    } else {
        t26 = $[164];
    }
    let t27;
    if ($[165] !== t) {
        t27 = t("ads.createStepOne.countryUAE");
        $[165] = t;
        $[166] = t27;
    } else {
        t27 = $[166];
    }
    let t28;
    if ($[167] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "UAE",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 709,
            columnNumber: 11
        }, this);
        $[167] = t27;
        $[168] = t28;
    } else {
        t28 = $[168];
    }
    let t29;
    if ($[169] !== t) {
        t29 = t("ads.createStepOne.countryOman");
        $[169] = t;
        $[170] = t29;
    } else {
        t29 = $[170];
    }
    let t30;
    if ($[171] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "Oman",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[171] = t29;
        $[172] = t30;
    } else {
        t30 = $[172];
    }
    let t31;
    if ($[173] !== t26 || $[174] !== t28 || $[175] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t26,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 733,
            columnNumber: 11
        }, this);
        $[173] = t26;
        $[174] = t28;
        $[175] = t30;
        $[176] = t31;
    } else {
        t31 = $[176];
    }
    let t32;
    if ($[177] !== country || $[178] !== t22 || $[179] !== t24 || $[180] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: country,
            onValueChange: t22,
            children: [
                t24,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 743,
            columnNumber: 11
        }, this);
        $[177] = country;
        $[178] = t22;
        $[179] = t24;
        $[180] = t31;
        $[181] = t32;
    } else {
        t32 = $[181];
    }
    let t33;
    if ($[182] !== t21 || $[183] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 754,
            columnNumber: 11
        }, this);
        $[182] = t21;
        $[183] = t32;
        $[184] = t33;
    } else {
        t33 = $[184];
    }
    let t34;
    if ($[185] !== t11 || $[186] !== t18 || $[187] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t18,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/PlacementSection.tsx",
            lineNumber: 763,
            columnNumber: 11
        }, this);
        $[185] = t11;
        $[186] = t18;
        $[187] = t33;
        $[188] = t34;
    } else {
        t34 = $[188];
    }
    let t35;
    if ($[189] !== t12 || $[190] !== t13 || $[191] !== t14 || $[192] !== t15 || $[193] !== t34) {
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
            lineNumber: 773,
            columnNumber: 11
        }, this);
        $[189] = t12;
        $[190] = t13;
        $[191] = t14;
        $[192] = t15;
        $[193] = t34;
        $[194] = t35;
    } else {
        t35 = $[194];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
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
function CampaignSettingsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(178);
    if ($[0] !== "f2ed291a10db63a80900624ee4d9a65a0422912abf63e647b33c0f754a0ed3d9") {
        for(let $i = 0; $i < 178; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f2ed291a10db63a80900624ee4d9a65a0422912abf63e647b33c0f754a0ed3d9";
    }
    const { register, watch, setValue, dateErrors, priorityInvalid: t1, validateDateTimeRange } = t0;
    const priorityInvalid = t1 === undefined ? false : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t2;
    if ($[1] !== watch) {
        t2 = watch("startDate");
        $[1] = watch;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const startDate = t2;
    let t3;
    if ($[3] !== watch) {
        t3 = watch("endDate");
        $[3] = watch;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const endDate = t3;
    let t4;
    if ($[5] !== watch) {
        t4 = watch("status") || "draft";
        $[5] = watch;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const status = t4;
    let t5;
    if ($[7] !== watch) {
        t5 = watch("billing_unit") || "impression";
        $[7] = watch;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const billingUnit = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t) {
        t7 = t("ads.createStepOne.campaignSchedule");
        $[10] = t;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 96,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t) {
        t9 = t("ads.createStepOne.startDate");
        $[14] = t;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            htmlFor: "startDate",
            children: [
                t9,
                " ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== register) {
        t12 = register("startDate", {
            required: true
        });
        $[19] = register;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    const t13 = !!dateErrors.startDate;
    const t14 = `bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    let t15;
    if ($[21] !== endDate || $[22] !== register || $[23] !== validateDateTimeRange) {
        t15 = ({
            "CampaignSettingsSection[<Input>.onChange]": (e)=>{
                register("startDate").onChange(e);
                validateDateTimeRange(e.target.value, endDate);
            }
        })["CampaignSettingsSection[<Input>.onChange]"];
        $[21] = endDate;
        $[22] = register;
        $[23] = validateDateTimeRange;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t12 || $[26] !== t13 || $[27] !== t14 || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            ...t12,
            error: t13,
            className: t14,
            onChange: t15
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
        $[27] = t14;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== dateErrors.startDate) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: dateErrors.startDate
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[33] = dateErrors.startDate;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== t11 || $[36] !== t18 || $[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t18;
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t) {
        t21 = t("ads.createStepOne.endDate");
        $[39] = t;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[41] = t21;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    if ($[43] !== t) {
        t23 = t("ads.createStepOne.endDateHint");
        $[43] = t;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[45] = t23;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== t22 || $[48] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            htmlFor: "endDate",
            children: [
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[47] = t22;
        $[48] = t24;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] !== register) {
        t26 = register("endDate");
        $[50] = register;
        $[51] = t26;
    } else {
        t26 = $[51];
    }
    const t27 = !!dateErrors.endDate;
    const t28 = `bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-200 dark:border-neutral-700"}`;
    const t29 = startDate || undefined;
    let t30;
    if ($[52] !== register || $[53] !== startDate || $[54] !== validateDateTimeRange) {
        t30 = ({
            "CampaignSettingsSection[<Input>.onChange]": (e_0)=>{
                register("endDate").onChange(e_0);
                validateDateTimeRange(startDate, e_0.target.value);
            }
        })["CampaignSettingsSection[<Input>.onChange]"];
        $[52] = register;
        $[53] = startDate;
        $[54] = validateDateTimeRange;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== t26 || $[57] !== t27 || $[58] !== t28 || $[59] !== t29 || $[60] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            ...t26,
            error: t27,
            className: t28,
            min: t29,
            onChange: t30
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[56] = t26;
        $[57] = t27;
        $[58] = t28;
        $[59] = t29;
        $[60] = t30;
        $[61] = t31;
    } else {
        t31 = $[61];
    }
    let t32;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[62] = t32;
    } else {
        t32 = $[62];
    }
    let t33;
    if ($[63] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[63] = t31;
        $[64] = t33;
    } else {
        t33 = $[64];
    }
    let t34;
    if ($[65] !== dateErrors.endDate) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: dateErrors.endDate
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[65] = dateErrors.endDate;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] !== t25 || $[68] !== t33 || $[69] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[67] = t25;
        $[68] = t33;
        $[69] = t34;
        $[70] = t35;
    } else {
        t35 = $[70];
    }
    let t36;
    if ($[71] !== t20 || $[72] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
                t20,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[71] = t20;
        $[72] = t35;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    let t37;
    if ($[74] !== dateErrors.general) {
        t37 = dateErrors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400",
            role: "alert",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-4 w-4 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 319,
                    columnNumber: 214
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: dateErrors.general
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                    lineNumber: 319,
                    columnNumber: 263
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 319,
            columnNumber: 33
        }, this);
        $[74] = dateErrors.general;
        $[75] = t37;
    } else {
        t37 = $[75];
    }
    let t38;
    if ($[76] !== t) {
        t38 = t("ads.createStepOne.initialStatus");
        $[76] = t;
        $[77] = t38;
    } else {
        t38 = $[77];
    }
    let t39;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[78] = t39;
    } else {
        t39 = $[78];
    }
    let t40;
    if ($[79] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t38,
                " ",
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[79] = t38;
        $[80] = t40;
    } else {
        t40 = $[80];
    }
    let t41;
    if ($[81] !== setValue) {
        t41 = ({
            "CampaignSettingsSection[<Select>.onValueChange]": (val)=>setValue("status", val, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CampaignSettingsSection[<Select>.onValueChange]"];
        $[81] = setValue;
        $[82] = t41;
    } else {
        t41 = $[82];
    }
    let t42;
    if ($[83] !== t) {
        t42 = t("ads.createStepOne.selectStatus");
        $[83] = t;
        $[84] = t42;
    } else {
        t42 = $[84];
    }
    let t43;
    if ($[85] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t42
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                lineNumber: 372,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[85] = t42;
        $[86] = t43;
    } else {
        t43 = $[86];
    }
    let t44;
    if ($[87] !== t) {
        t44 = t("ads.createStepOne.statusActive");
        $[87] = t;
        $[88] = t44;
    } else {
        t44 = $[88];
    }
    let t45;
    if ($[89] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[89] = t44;
        $[90] = t45;
    } else {
        t45 = $[90];
    }
    let t46;
    if ($[91] !== t) {
        t46 = t("ads.createStepOne.statusDraft");
        $[91] = t;
        $[92] = t46;
    } else {
        t46 = $[92];
    }
    let t47;
    if ($[93] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t46
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[93] = t46;
        $[94] = t47;
    } else {
        t47 = $[94];
    }
    let t48;
    if ($[95] !== t) {
        t48 = t("ads.createStepOne.statusPaused");
        $[95] = t;
        $[96] = t48;
    } else {
        t48 = $[96];
    }
    let t49;
    if ($[97] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[97] = t48;
        $[98] = t49;
    } else {
        t49 = $[98];
    }
    let t50;
    if ($[99] !== t) {
        t50 = t("ads.createStepOne.statusEnded");
        $[99] = t;
        $[100] = t50;
    } else {
        t50 = $[100];
    }
    let t51;
    if ($[101] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[101] = t50;
        $[102] = t51;
    } else {
        t51 = $[102];
    }
    let t52;
    if ($[103] !== t45 || $[104] !== t47 || $[105] !== t49 || $[106] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t45,
                t47,
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[103] = t45;
        $[104] = t47;
        $[105] = t49;
        $[106] = t51;
        $[107] = t52;
    } else {
        t52 = $[107];
    }
    let t53;
    if ($[108] !== status || $[109] !== t41 || $[110] !== t43 || $[111] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t41,
            children: [
                t43,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 455,
            columnNumber: 11
        }, this);
        $[108] = status;
        $[109] = t41;
        $[110] = t43;
        $[111] = t52;
        $[112] = t53;
    } else {
        t53 = $[112];
    }
    let t54;
    if ($[113] !== t40 || $[114] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t40,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[113] = t40;
        $[114] = t53;
        $[115] = t54;
    } else {
        t54 = $[115];
    }
    let t55;
    if ($[116] !== t) {
        t55 = t("ads.createStepOne.priorityLevel");
        $[116] = t;
        $[117] = t55;
    } else {
        t55 = $[117];
    }
    let t56;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[118] = t56;
    } else {
        t56 = $[118];
    }
    let t57;
    if ($[119] !== t55) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t55,
                " ",
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[119] = t55;
        $[120] = t57;
    } else {
        t57 = $[120];
    }
    let t58;
    if ($[121] !== register) {
        t58 = register("priority", {
            required: true,
            min: 1,
            max: 10
        });
        $[121] = register;
        $[122] = t58;
    } else {
        t58 = $[122];
    }
    let t59;
    if ($[123] !== priorityInvalid || $[124] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "number",
            min: "1",
            max: "10",
            placeholder: "1",
            ...t58,
            error: priorityInvalid,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[123] = priorityInvalid;
        $[124] = t58;
        $[125] = t59;
    } else {
        t59 = $[125];
    }
    let t60;
    if ($[126] !== t57 || $[127] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 519,
            columnNumber: 11
        }, this);
        $[126] = t57;
        $[127] = t59;
        $[128] = t60;
    } else {
        t60 = $[128];
    }
    let t61;
    if ($[129] !== t) {
        t61 = t("ads.createStepOne.billingUnit");
        $[129] = t;
        $[130] = t61;
    } else {
        t61 = $[130];
    }
    let t62;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[131] = t62;
    } else {
        t62 = $[131];
    }
    let t63;
    if ($[132] !== t61) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t61,
                " ",
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[132] = t61;
        $[133] = t63;
    } else {
        t63 = $[133];
    }
    let t64;
    if ($[134] !== setValue) {
        t64 = ({
            "CampaignSettingsSection[<Select>.onValueChange]": (val_0)=>setValue("billing_unit", val_0, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true
                })
        })["CampaignSettingsSection[<Select>.onValueChange]"];
        $[134] = setValue;
        $[135] = t64;
    } else {
        t64 = $[135];
    }
    let t65;
    if ($[136] !== t) {
        t65 = t("ads.createStepOne.selectBilling");
        $[136] = t;
        $[137] = t65;
    } else {
        t65 = $[137];
    }
    let t66;
    if ($[138] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t65
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
                lineNumber: 573,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[138] = t65;
        $[139] = t66;
    } else {
        t66 = $[139];
    }
    let t67;
    if ($[140] !== t) {
        t67 = t("ads.createStepOne.billingImpression");
        $[140] = t;
        $[141] = t67;
    } else {
        t67 = $[141];
    }
    let t68;
    if ($[142] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "impression",
            children: t67
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[142] = t67;
        $[143] = t68;
    } else {
        t68 = $[143];
    }
    let t69;
    if ($[144] !== t) {
        t69 = t("ads.createStepOne.billingClick");
        $[144] = t;
        $[145] = t69;
    } else {
        t69 = $[145];
    }
    let t70;
    if ($[146] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "click",
            children: t69
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[146] = t69;
        $[147] = t70;
    } else {
        t70 = $[147];
    }
    let t71;
    if ($[148] !== t) {
        t71 = t("ads.createStepOne.billingView");
        $[148] = t;
        $[149] = t71;
    } else {
        t71 = $[149];
    }
    let t72;
    if ($[150] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "view",
            children: t71
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 621,
            columnNumber: 11
        }, this);
        $[150] = t71;
        $[151] = t72;
    } else {
        t72 = $[151];
    }
    let t73;
    if ($[152] !== t) {
        t73 = t("ads.createStepOne.billingMonth");
        $[152] = t;
        $[153] = t73;
    } else {
        t73 = $[153];
    }
    let t74;
    if ($[154] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "month",
            children: t73
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 637,
            columnNumber: 11
        }, this);
        $[154] = t73;
        $[155] = t74;
    } else {
        t74 = $[155];
    }
    let t75;
    if ($[156] !== t68 || $[157] !== t70 || $[158] !== t72 || $[159] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t68,
                t70,
                t72,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[156] = t68;
        $[157] = t70;
        $[158] = t72;
        $[159] = t74;
        $[160] = t75;
    } else {
        t75 = $[160];
    }
    let t76;
    if ($[161] !== billingUnit || $[162] !== t64 || $[163] !== t66 || $[164] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: billingUnit,
            onValueChange: t64,
            children: [
                t66,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[161] = billingUnit;
        $[162] = t64;
        $[163] = t66;
        $[164] = t75;
        $[165] = t76;
    } else {
        t76 = $[165];
    }
    let t77;
    if ($[166] !== t63 || $[167] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t63,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 667,
            columnNumber: 11
        }, this);
        $[166] = t63;
        $[167] = t76;
        $[168] = t77;
    } else {
        t77 = $[168];
    }
    let t78;
    if ($[169] !== t54 || $[170] !== t60 || $[171] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1",
            children: [
                t54,
                t60,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[169] = t54;
        $[170] = t60;
        $[171] = t77;
        $[172] = t78;
    } else {
        t78 = $[172];
    }
    let t79;
    if ($[173] !== t36 || $[174] !== t37 || $[175] !== t78 || $[176] !== t8) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t8,
                t36,
                t37,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CampaignSettingsSection.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[173] = t36;
        $[174] = t37;
        $[175] = t78;
        $[176] = t8;
        $[177] = t79;
    } else {
        t79 = $[177];
    }
    return t79;
}
_s(CampaignSettingsSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
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
function TargetLinkSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(170);
    if ($[0] !== "41ab60e703858ac008727c01191e49496c7c2bb4f3c8578cbf2fdd69d24063b5") {
        for(let $i = 0; $i < 170; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41ab60e703858ac008727c01191e49496c7c2bb4f3c8578cbf2fdd69d24063b5";
    }
    const { watch, setValue, developers, developerSearch, setDeveloperSearch, developersLoading, projects, properties, projectsLoading, propertiesLoading, projectSearch, setProjectSearch, propertySearch, setPropertySearch } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const debouncedDeveloperSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(developerSearch);
    const debouncedProjectSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(projectSearch);
    const debouncedPropertySearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(propertySearch);
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
        if (!debouncedProjectSearch || !debouncedProjectSearch.trim()) {
            t10 = allProjects;
            break bb5;
        }
        let t11;
        if ($[42] !== allProjects || $[43] !== debouncedProjectSearch) {
            const s = debouncedProjectSearch.toLowerCase().trim();
            t11 = allProjects.filter({
                "TargetLinkSection[allProjects.filter()]": (p_3)=>(p_3.name || "").toLowerCase().includes(s)
            }["TargetLinkSection[allProjects.filter()]"]);
            $[42] = allProjects;
            $[43] = debouncedProjectSearch;
            $[44] = t11;
        } else {
            t11 = $[44];
        }
        t10 = t11;
    }
    const filteredProjects = t10;
    let t11;
    bb6: {
        if (!debouncedPropertySearch || !debouncedPropertySearch.trim()) {
            t11 = allProperties;
            break bb6;
        }
        let t12;
        if ($[45] !== allProperties || $[46] !== debouncedPropertySearch) {
            const s_0 = debouncedPropertySearch.toLowerCase().trim();
            t12 = allProperties.filter({
                "TargetLinkSection[allProperties.filter()]": (p_4)=>(p_4.name || "").toLowerCase().includes(s_0)
            }["TargetLinkSection[allProperties.filter()]"]);
            $[45] = allProperties;
            $[46] = debouncedPropertySearch;
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
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[48] = t12;
    } else {
        t12 = $[48];
    }
    let t13;
    if ($[49] !== t) {
        t13 = t("ads.createStepTwo.developerAndTargetLink");
        $[49] = t;
        $[50] = t13;
    } else {
        t13 = $[50];
    }
    let t14;
    if ($[51] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 368,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[51] = t13;
        $[52] = t14;
    } else {
        t14 = $[52];
    }
    let t15;
    if ($[53] !== developerId || $[54] !== isAr) {
        t15 = developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-medium text-teal-600 dark:text-teal-400",
            children: isAr ? `المطور #${developerId}` : `Developer #${developerId}`
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 376,
            columnNumber: 26
        }, this);
        $[53] = developerId;
        $[54] = isAr;
        $[55] = t15;
    } else {
        t15 = $[55];
    }
    let t16;
    if ($[56] !== t14 || $[57] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[56] = t14;
        $[57] = t15;
        $[58] = t16;
    } else {
        t16 = $[58];
    }
    let t17;
    if ($[59] !== t) {
        t17 = t("ads.createStepTwo.developer");
        $[59] = t;
        $[60] = t17;
    } else {
        t17 = $[60];
    }
    let t18;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[61] = t18;
    } else {
        t18 = $[61];
    }
    let t19;
    if ($[62] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t17,
                " ",
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[62] = t17;
        $[63] = t19;
    } else {
        t19 = $[63];
    }
    let t20;
    if ($[64] !== developers.length || $[65] !== t) {
        t20 = developers.length > 0 ? `${developers.length} ${t("ads.createStepTwo.developersAvailable")}` : "";
        $[64] = developers.length;
        $[65] = t;
        $[66] = t20;
    } else {
        t20 = $[66];
    }
    let t21;
    if ($[67] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400 font-normal",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[67] = t20;
        $[68] = t21;
    } else {
        t21 = $[68];
    }
    let t22;
    if ($[69] !== t19 || $[70] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[69] = t19;
        $[70] = t21;
        $[71] = t22;
    } else {
        t22 = $[71];
    }
    let t23;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[72] = t23;
    } else {
        t23 = $[72];
    }
    let t24;
    if ($[73] !== t) {
        t24 = t("ads.createStepTwo.searchDeveloperPlaceholder");
        $[73] = t;
        $[74] = t24;
    } else {
        t24 = $[74];
    }
    let t25;
    if ($[75] !== setDeveloperSearch) {
        t25 = ({
            "TargetLinkSection[<Input>.onChange]": (e)=>setDeveloperSearch(e.target.value)
        })["TargetLinkSection[<Input>.onChange]"];
        $[75] = setDeveloperSearch;
        $[76] = t25;
    } else {
        t25 = $[76];
    }
    let t26;
    if ($[77] !== developerSearch || $[78] !== t24 || $[79] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t24,
            value: developerSearch,
            onChange: t25,
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[77] = developerSearch;
        $[78] = t24;
        $[79] = t25;
        $[80] = t26;
    } else {
        t26 = $[80];
    }
    let t27;
    if ($[81] !== developerSearch || $[82] !== setDeveloperSearch) {
        t27 = developerSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "TargetLinkSection[<button>.onClick]": ()=>setDeveloperSearch("")
            }["TargetLinkSection[<button>.onClick]"],
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 480,
                columnNumber: 169
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 478,
            columnNumber: 30
        }, this);
        $[81] = developerSearch;
        $[82] = setDeveloperSearch;
        $[83] = t27;
    } else {
        t27 = $[83];
    }
    let t28;
    if ($[84] !== t26 || $[85] !== t27) {
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
        $[84] = t26;
        $[85] = t27;
        $[86] = t28;
    } else {
        t28 = $[86];
    }
    let t29;
    if ($[87] !== developerId) {
        t29 = developerId ? developerId.toString() : undefined;
        $[87] = developerId;
        $[88] = t29;
    } else {
        t29 = $[88];
    }
    let t30;
    if ($[89] !== developersLoading || $[90] !== t) {
        t30 = developersLoading ? t("ads.createStepTwo.loadingDevelopers") : t("ads.createStepTwo.selectDeveloper");
        $[89] = developersLoading;
        $[90] = t;
        $[91] = t30;
    } else {
        t30 = $[91];
    }
    const t31 = selectedDeveloperName || undefined;
    let t32;
    if ($[92] !== t30 || $[93] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t30,
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 516,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[92] = t30;
        $[93] = t31;
        $[94] = t32;
    } else {
        t32 = $[94];
    }
    let t33;
    if ($[95] !== allDevelopers || $[96] !== debouncedDeveloperSearch || $[97] !== developers.length || $[98] !== developersLoading || $[99] !== t) {
        t33 = developersLoading && developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.loadingDevelopers")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 525,
            columnNumber: 58
        }, this) : developers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-xs text-neutral-400 text-center",
            children: t("ads.createStepTwo.noDevelopersFound")
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 525,
            columnNumber: 193
        }, this) : allDevelopers.filter({
            "TargetLinkSection[allDevelopers.filter()]": (dev)=>!debouncedDeveloperSearch || (dev.name || "").toLowerCase().includes(debouncedDeveloperSearch.toLowerCase())
        }["TargetLinkSection[allDevelopers.filter()]"]).map(_TargetLinkSectionAnonymous);
        $[95] = allDevelopers;
        $[96] = debouncedDeveloperSearch;
        $[97] = developers.length;
        $[98] = developersLoading;
        $[99] = t;
        $[100] = t33;
    } else {
        t33 = $[100];
    }
    let t34;
    if ($[101] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "max-h-56 overflow-y-auto",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[101] = t33;
        $[102] = t34;
    } else {
        t34 = $[102];
    }
    let t35;
    if ($[103] !== handleDeveloperChange || $[104] !== t29 || $[105] !== t32 || $[106] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t29,
            onValueChange: handleDeveloperChange,
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[103] = handleDeveloperChange;
        $[104] = t29;
        $[105] = t32;
        $[106] = t34;
        $[107] = t35;
    } else {
        t35 = $[107];
    }
    let t36;
    if ($[108] !== t22 || $[109] !== t28 || $[110] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t28,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, this);
        $[108] = t22;
        $[109] = t28;
        $[110] = t35;
        $[111] = t36;
    } else {
        t36 = $[111];
    }
    let t37;
    if ($[112] !== t) {
        t37 = t("ads.createStepTwo.linkDestinationType");
        $[112] = t;
        $[113] = t37;
    } else {
        t37 = $[113];
    }
    let t38;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[114] = t38;
    } else {
        t38 = $[114];
    }
    let t39;
    if ($[115] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: [
                t37,
                " ",
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[115] = t37;
        $[116] = t39;
    } else {
        t39 = $[116];
    }
    let t40;
    if ($[117] !== setValue) {
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
        $[117] = setValue;
        $[118] = t40;
    } else {
        t40 = $[118];
    }
    let t41;
    if ($[119] !== t) {
        t41 = t("ads.createStepTwo.selectDestination");
        $[119] = t;
        $[120] = t41;
    } else {
        t41 = $[120];
    }
    let t42;
    if ($[121] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t41
            }, void 0, false, {
                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                lineNumber: 620,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[121] = t41;
        $[122] = t42;
    } else {
        t42 = $[122];
    }
    let t43;
    if ($[123] !== t) {
        t43 = t("ads.createStepTwo.destinationSpecificProject");
        $[123] = t;
        $[124] = t43;
    } else {
        t43 = $[124];
    }
    let t44;
    if ($[125] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROJECTS",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[125] = t43;
        $[126] = t44;
    } else {
        t44 = $[126];
    }
    let t45;
    if ($[127] !== t) {
        t45 = t("ads.createStepTwo.destinationSpecificProperty");
        $[127] = t;
        $[128] = t45;
    } else {
        t45 = $[128];
    }
    let t46;
    if ($[129] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "PROPERTIES",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[129] = t45;
        $[130] = t46;
    } else {
        t46 = $[130];
    }
    let t47;
    if ($[131] !== t) {
        t47 = t("ads.createStepTwo.destinationCustomUrl");
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
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 668,
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
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 676,
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
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 686,
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
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 697,
            columnNumber: 11
        }, this);
        $[144] = t39;
        $[145] = t50;
        $[146] = t51;
    } else {
        t51 = $[146];
    }
    let t52;
    if ($[147] !== developerId || $[148] !== filteredProjects || $[149] !== filteredProperties || $[150] !== isAr || $[151] !== linkTo || $[152] !== projectId || $[153] !== projectSearch || $[154] !== projectsLoading || $[155] !== propertiesLoading || $[156] !== propertySearch || $[157] !== selectedProjectName || $[158] !== setProjectSearch || $[159] !== setPropertySearch || $[160] !== setValue || $[161] !== t) {
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
                                    lineNumber: 706,
                                    columnNumber: 381
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 706,
                            columnNumber: 156
                        }, this),
                        developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-neutral-400 font-normal",
                            children: linkTo === "PROJECTS" ? `${filteredProjects.length} ${t("ads.createStepTwo.itemsFound")}` : `${filteredProperties.length} ${t("ads.createStepTwo.itemsFound")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 706,
                            columnNumber: 443
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 706,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 706,
                            columnNumber: 710
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") : linkTo === "PROJECTS" ? t("ads.createStepTwo.searchProjectsPlaceholder") : t("ads.createStepTwo.searchPropertiesPlaceholder"),
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
                            className: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 706,
                            columnNumber: 803
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
                            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 722,
                                columnNumber: 173
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 714,
                            columnNumber: 345
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 706,
                    columnNumber: 679
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
                                placeholder: !developerId ? t("ads.createStepTwo.selectDeveloperFirst") : linkTo === "PROJECTS" ? projectsLoading ? t("ads.createStepTwo.loadingProjects") : t("ads.createStepTwo.chooseProject") : propertiesLoading ? t("ads.createStepTwo.loadingProperties") : t("ads.createStepTwo.chooseProperty"),
                                children: selectedProjectName || undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 266
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 728,
                            columnNumber: 144
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "max-h-56 overflow-y-auto",
                            children: !developerId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.selectDeveloperFirst")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 709
                            }, this) : linkTo === "PROJECTS" ? projectsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProjects")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 863
                            }, this) : filteredProjects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.noMatchingProjects")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 1002
                            }, this) : filteredProjects.map(_TargetLinkSectionFilteredProjectsMap) : propertiesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.loadingProperties")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 1194
                            }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 text-xs text-neutral-400 text-center",
                                children: t("ads.createStepTwo.noMatchingProperties")
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                                lineNumber: 728,
                                columnNumber: 1337
                            }, this) : filteredProperties.map(_TargetLinkSectionFilteredPropertiesMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                            lineNumber: 728,
                            columnNumber: 641
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
                    lineNumber: 722,
                    columnNumber: 218
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 706,
            columnNumber: 32
        }, this);
        $[147] = developerId;
        $[148] = filteredProjects;
        $[149] = filteredProperties;
        $[150] = isAr;
        $[151] = linkTo;
        $[152] = projectId;
        $[153] = projectSearch;
        $[154] = projectsLoading;
        $[155] = propertiesLoading;
        $[156] = propertySearch;
        $[157] = selectedProjectName;
        $[158] = setProjectSearch;
        $[159] = setPropertySearch;
        $[160] = setValue;
        $[161] = t;
        $[162] = t52;
    } else {
        t52 = $[162];
    }
    let t53;
    if ($[163] !== t51 || $[164] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 750,
            columnNumber: 11
        }, this);
        $[163] = t51;
        $[164] = t52;
        $[165] = t53;
    } else {
        t53 = $[165];
    }
    let t54;
    if ($[166] !== t16 || $[167] !== t36 || $[168] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t16,
                t36,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/TargetLinkSection.tsx",
            lineNumber: 759,
            columnNumber: 11
        }, this);
        $[166] = t16;
        $[167] = t36;
        $[168] = t53;
        $[169] = t54;
    } else {
        t54 = $[169];
    }
    return t54;
}
_s(TargetLinkSection, "MHG/xD8JNxio/eGSx3Cmzrc3NUk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
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
        lineNumber: 770,
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
        lineNumber: 773,
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
        lineNumber: 776,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "49d2a9f58e045a789a1c6e9423d6c4287eb6bc02bc6f5bdd5f85ccc65611505e") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49d2a9f58e045a789a1c6e9423d6c4287eb6bc02bc6f5bdd5f85ccc65611505e";
    }
    const { watch, setValue, adImagePreview, handleImageUpload } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t) {
        t3 = t("ads.createStepTwo.creativeBannerAsset");
        $[4] = t;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 57,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t) {
        t5 = t("ads.createStepTwo.imageFormatHint");
        $[8] = t;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-neutral-400",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== adImagePreview || $[16] !== t) {
        t8 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: t("ads.form.adPreview"),
                    className: "max-h-36 w-auto mx-auto object-contain rounded-md border border-neutral-200 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 90,
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
                        children: t("ads.createStepTwo.changeImage")
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                        lineNumber: 90,
                        columnNumber: 266
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 90,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 90,
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
                        lineNumber: 90,
                        columnNumber: 701
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 90,
                    columnNumber: 551
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-800 dark:text-neutral-200 font-medium",
                    children: t("ads.createStepTwo.clickToUpload")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 90,
                    columnNumber: 737
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-neutral-400 mt-0.5",
                    children: t("ads.createStepTwo.aspectRatioHint")
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 90,
                    columnNumber: 853
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 90,
            columnNumber: 502
        }, this);
        $[15] = adImagePreview;
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== handleImageUpload) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload-edit",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[18] = handleImageUpload;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-teal-500/60 bg-white dark:bg-neutral-900 transition-colors",
            onClick: _CreativeDetailsSectionDivOnClick,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t7;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t) {
        t13 = t("ads.createStepTwo.shortDescription");
        $[27] = t;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
                    lineNumber: 140,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    const t15 = description || "";
    let t16;
    if ($[31] !== setValue) {
        t16 = ({
            "CreativeDetailsSection[<RichTextEditor>.onChange]": (content)=>setValue("description", content, {
                    shouldDirty: true
                })
        })["CreativeDetailsSection[<RichTextEditor>.onChange]"];
        $[31] = setValue;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t15 || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RichTextEditor"], {
            content: t15,
            onChange: t16
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[33] = t15;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== t14 || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t11 || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t11,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CreativeDetailsSection.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[39] = t11;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    return t19;
}
_s(CreativeDetailsSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)");
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
function CtaSettingsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "14c3fca6d6a6a0d71686d83a709ec258f454016cde00c2978ad94eace1923e81") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14c3fca6d6a6a0d71686d83a709ec258f454016cde00c2978ad94eace1923e81";
    }
    const { register, watch, setValue, ctaUrlError, ctaButtonTextError } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    if ($[9] !== t) {
        t5 = t("ads.createStepTwo.badgeHandover");
        $[9] = t;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== handover || $[12] !== t5) {
        t6 = {
            name: "handover",
            label: t5,
            value: handover
        };
        $[11] = handover;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t) {
        t7 = t("ads.createStepTwo.badgeDeveloper");
        $[14] = t;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== developer || $[17] !== t7) {
        t8 = {
            name: "developer",
            label: t7,
            value: developer
        };
        $[16] = developer;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t) {
        t9 = t("ads.createStepTwo.badgePrice");
        $[19] = t;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== price || $[22] !== t9) {
        t10 = {
            name: "price",
            label: t9,
            value: price
        };
        $[21] = price;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t) {
        t11 = t("ads.createStepTwo.badgeRating");
        $[24] = t;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== rate || $[27] !== t11) {
        t12 = {
            name: "rate",
            label: t11,
            value: rate
        };
        $[26] = rate;
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t10 || $[30] !== t12 || $[31] !== t6 || $[32] !== t8) {
        t13 = [
            t6,
            t8,
            t10,
            t12
        ];
        $[29] = t10;
        $[30] = t12;
        $[31] = t6;
        $[32] = t8;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    const badges = t13;
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t) {
        t15 = t("ads.createStepTwo.displayBadges");
        $[35] = t;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                    lineNumber: 185,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== t) {
        t17 = t("ads.createStepTwo.displayBadges");
        $[39] = t;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 block",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== badges || $[44] !== setValue) {
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
                                lineNumber: 210,
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
                                lineNumber: 210,
                                columnNumber: 385
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
                        lineNumber: 210,
                        columnNumber: 53
                    }, this)
            }["CtaSettingsSection[badges.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[43] = badges;
        $[44] = setValue;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t18 || $[47] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[46] = t18;
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t) {
        t21 = t("ads.createStepTwo.ctaButtonLabel");
        $[49] = t;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[51] = t21;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== t) {
        t23 = t("ads.createStepTwo.ctaButtonPlaceholder");
        $[53] = t;
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] !== register || $[56] !== t) {
        t24 = register("ctaButtonText", {
            maxLength: {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_CTA_LABEL_MAX_LENGTH"],
                message: t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_CTA_LABEL_MAX_LENGTH"]
                })
            }
        });
        $[55] = register;
        $[56] = t;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    const t25 = !!ctaButtonTextError;
    const t26 = !!ctaButtonTextError;
    const t27 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${ctaButtonTextError ? "" : "border-neutral-200 dark:border-neutral-700"}`;
    let t28;
    if ($[58] !== t23 || $[59] !== t24 || $[60] !== t25 || $[61] !== t26 || $[62] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t23,
            ...t24,
            error: t25,
            "aria-invalid": t26,
            className: t27
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[58] = t23;
        $[59] = t24;
        $[60] = t25;
        $[61] = t26;
        $[62] = t27;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== ctaButtonTextError) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: ctaButtonTextError
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[64] = ctaButtonTextError;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    let t30;
    if ($[66] !== t22 || $[67] !== t28 || $[68] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[66] = t22;
        $[67] = t28;
        $[68] = t29;
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] !== t) {
        t31 = t("ads.createStepTwo.ctaTargetUrl");
        $[70] = t;
        $[71] = t31;
    } else {
        t31 = $[71];
    }
    let t32;
    if ($[72] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[72] = t31;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    let t33;
    if ($[74] !== t) {
        t33 = t("ads.createStepTwo.ctaUrlPlaceholder");
        $[74] = t;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== register) {
        t34 = register("ctaUrl");
        $[76] = register;
        $[77] = t34;
    } else {
        t34 = $[77];
    }
    const t35 = !!ctaUrlError;
    const t36 = !!ctaUrlError;
    const t37 = `bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${ctaUrlError ? "" : "border-neutral-200 dark:border-neutral-700"}`;
    let t38;
    if ($[78] !== t33 || $[79] !== t34 || $[80] !== t35 || $[81] !== t36 || $[82] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t33,
            dir: "ltr",
            ...t34,
            error: t35,
            "aria-invalid": t36,
            className: t37
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[78] = t33;
        $[79] = t34;
        $[80] = t35;
        $[81] = t36;
        $[82] = t37;
        $[83] = t38;
    } else {
        t38 = $[83];
    }
    let t39;
    if ($[84] !== ctaUrlError) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: ctaUrlError
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[84] = ctaUrlError;
        $[85] = t39;
    } else {
        t39 = $[85];
    }
    let t40;
    if ($[86] !== t32 || $[87] !== t38 || $[88] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t32,
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[86] = t32;
        $[87] = t38;
        $[88] = t39;
        $[89] = t40;
    } else {
        t40 = $[89];
    }
    let t41;
    if ($[90] !== t30 || $[91] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
            children: [
                t30,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[90] = t30;
        $[91] = t40;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] !== t16 || $[94] !== t20 || $[95] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4",
            children: [
                t16,
                t20,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal-components/CtaSettingsSection.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[93] = t16;
        $[94] = t20;
        $[95] = t41;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    return t42;
}
_s(CtaSettingsSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
"[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditAdModal",
    ()=>EditAdModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-form.ts [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/form-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/toast-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)");
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
function EditAdModal({ ad, isOpen, onClose, onSuccess }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { updateAd, isUpdating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const rawAdId = ad?.creative_id ?? ad?.id;
    const [adImage, setAdImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adImagePreview, setAdImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { register, handleSubmit, setValue, watch, trigger, reset, setError, clearErrors, getValues, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
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
                if (adData.image_url) {
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
            const imageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdImageError"])(file, t);
            if (imageError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(imageError, {
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
        if (!validateDateTimeRange(watch("startDate"), watch("endDate"))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
            return;
        }
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
        if (!isValid) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
            return;
        }
        const currentUrl = (data.ctaUrl || data.cta_url || "").trim();
        if (data.linkTo === "URL" && !currentUrl || (data.linkTo === "NONE" || data.linkTo === "URL") && data.ctaButtonText && !currentUrl) {
            const message = data.linkTo === "URL" ? isAr ? "يرجى إدخال الرابط الخارجي (URL)" : "Please enter the External Link (URL)" : isAr ? "رابط زر الإجراء مطلوب عند كتابة نص الزر وتعيين الوجهة إلى مخصص" : "Call-to-Action Link is required when CTA Button Text is provided and Link To is None";
            setError("ctaUrl", {
                type: "required",
                message
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message, {
                id: "ad-action-toast"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
            return;
        }
        if (currentUrl && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidAdUrl"])(currentUrl)) {
            const message_0 = isAr ? "يرجى إدخال رابط URL صالح لزر الإجراء" : "Please enter a valid URL for Call-to-Action Link";
            setError("ctaUrl", {
                type: "pattern",
                message: message_0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message_0, {
                id: "ad-action-toast"
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
            return;
        }
        clearErrors("ctaUrl");
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
        if (adImage) {
            formData.append("image", adImage);
        }
        try {
            await updateAd({
                adId: Number(rawAdId),
                formData
            });
            onSuccess?.();
            onClose();
        } catch (error) {
            const { summary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyApiFormErrors"])(error, {
                setError,
                getValues,
                t,
                fieldMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_MODAL_FIELD_MAP"],
                fallbackMessage: t("ads.messages.updateFailed")
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(summary, {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: ()=>{
            if (!isUpdating) onClose();
        },
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAdModalHeader"], {
            adId: rawAdId
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 353,
            columnNumber: 13
        }, void 0),
        size: "2xl",
        showCloseButton: true,
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$EditAdModalFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditAdModalFooter"], {
            onClose: onClose,
            onSubmit: handleSubmit(onSubmit),
            isUpdating: isUpdating
        }, void 0, false, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 353,
            columnNumber: 93
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-h-[68vh] overflow-y-auto pe-1 sm:pe-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormErrorAlert"], {
                    message: errors.root?.server?.message
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$AdTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdTitleSection"], {
                    register: register,
                    error: errors.title?.message
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$PlacementSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlacementSection"], {
                    watch: watch,
                    setValue: setValue
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CampaignSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignSettingsSection"], {
                    register: register,
                    watch: watch,
                    setValue: setValue,
                    dateErrors: dateErrors,
                    priorityInvalid: !!errors.priority,
                    validateDateTimeRange: validateDateTimeRange
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 364,
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
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CreativeDetailsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreativeDetailsSection"], {
                    watch: watch,
                    setValue: setValue,
                    adImagePreview: adImagePreview,
                    handleImageUpload: handleImageUpload
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ads$2f$edit$2d$ad$2d$modal$2d$components$2f$CtaSettingsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaSettingsSection"], {
                    register: register,
                    watch: watch,
                    setValue: setValue,
                    ctaUrlError: errors.ctaUrl?.message,
                    ctaButtonTextError: errors.ctaButtonText?.message
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/ads/edit-ad-modal.tsx",
        lineNumber: 351,
        columnNumber: 10
    }, this);
}
_s(EditAdModal, "yelh93svvmkQLdsEwuoc5zz1RfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
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

//# sourceMappingURL=src_69cb8559._.js.map